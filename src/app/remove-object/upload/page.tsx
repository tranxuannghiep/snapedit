"use client";

import { useDataStore } from "@/stores/useDataStore";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { v4 as uuidv4 } from "uuid";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { useDownloadStore } from "@/stores/useDownloadStore";

interface IDetectedObject {
  box: number[];
  mask: string;
  object_description: string;
  deleted: boolean;
  base64: string;
  isSelected: boolean;
  mask_id: number;
}

export function base64ToFile(base64: string): File {
  const [header, data] = base64.split(",");
  const mime = header.match(/:(.*?);/)?.[1] || "image/png";
  const binary = atob(data);
  const array = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new File([array], "unnamed", { type: mime }); // tên mặc định
}

function getImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = reader.result as string;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file); // Đọc file dưới dạng base64
  });
}

async function resizeImage(
  file: File,
  width: number,
  height: number
): Promise<File> {
  const img = await getImageFromFile(file);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Không thể lấy context từ canvas");

  ctx.drawImage(img, 0, 0, width, height);

  return new Promise((resolve) => {
    canvas.toBlob((resizedBlob) => {
      const resizedFile = new File([resizedBlob!], "resized.png", {
        type: file.type,
      });
      resolve(resizedFile);
    }, file.type);
  });
}

async function processImages(box: number[], originFile: File) {
  const formData = new FormData();
  formData.append("file", originFile);
  const [x, y, width, height] = box;

  const res = await fetch("/api/cropped", {
    method: "POST",
    headers: {
      x: x.toString(),
      y: y.toString(),
      width: width.toString(),
      height: height.toString(),
    },
    body: formData,
  });

  const base64 = await res.json();
  return base64;
}

export default function Upload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<
    {
      file: File;
      originFile?: File;
      oldFile: File;
      id: string;
      detected_objects?: IDetectedObject[];
      paths: CanvasPath[];
    }[]
  >([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [idActive, setIdActive] = useState<string>("");
  const [tab, setTab] = useState(0);
  const [mode, setMode] = useState(1);
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);
  const [sliderValue, setSliderValue] = useState(50);
  const [showPrevius, setShowPrevious] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setDataDownload = useDownloadStore((state: any) => state.setData);
  const dataDownload = useDownloadStore((state: any) => state.data);
  const setIdDownload = useDownloadStore((state: any) => state.setIdDownload);
  const data = useDataStore((state: any) => state.data);

  const fileActive = useMemo(() => {
    return files.find((file) => file.id === idActive);
  }, [files, idActive]);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (mode === 2) {
      canvasRef.current?.eraseMode(true);
    } else {
      canvasRef.current?.eraseMode(false);
    }
  }, [mode]);

  const handleClick = () => {
    fileInputRef.current?.click(); // gọi click vào input
  };

  const handleSelectFile = (objectId: number) => {
    const newFiles = files.map((file) => {
      if (file.id === idActive) {
        return {
          ...file,
          detected_objects: file.detected_objects?.map((v) => {
            if (v.mask_id === objectId) {
              return {
                ...v,
                isSelected: !v.isSelected,
              };
            }
            return v;
          }),
        };
      }
      return file;
    });
    setFiles(newFiles);
  };

  const handleCallData = async () => {
    if (!fileActive) return;
    if (tab === 0) {
      const base64MaskBrush = await handleExportImage();
      if (!base64MaskBrush) return;

      const mask_brush = base64ToFile(base64MaskBrush!);
      await handleErase(mask_brush);
    }

    if (tab === 1) {
      await handleMerge();
      // await handleErase(fileActive.file);
    }
  };

  const handleMerge = async () => {
    if (!fileActive?.detected_objects) return;
    const formData = new FormData();
    let count = 0;
    fileActive.detected_objects.forEach((v) => {
      formData.append(
        "image" + count,
        base64ToFile("data:image/png;base64," + v.mask)
      );
      formData.append(
        "layer" + count,
        JSON.stringify({
          x: v.box[0],
          y: v.box[1],
          width: v.box[2] - v.box[0],
          height: v.box[3] - v.box[1],
        })
      );
      count++;
    });

    const handleImage = await handleExportImage();

    if (handleImage) {
      formData.append("image" + count, base64ToFile(handleImage));
      formData.append(
        "layer" + count,
        JSON.stringify({
          x: 0,
          y: 0,
          width: imgRef.current!.width,
          height: imgRef.current!.height,
        })
      );
      count += 1;
    }

    formData.append("count", count.toString());
    formData.append("width", imgRef.current!.width.toString());
    formData.append("height", imgRef.current!.height.toString());

    const response = await fetch("/api/merge", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        user_agent: data.user_agent,
      },
      body: formData,
    });

    const mask_brush = await response.json();

    await handleErase(base64ToFile(mask_brush));
  };

  const handleErase = async (mask_brush: File) => {
    if (!fileActive || !imgRef.current) return;
    const formData = new FormData();
    const originFile = await resizeImage(
      fileActive.file,
      imgRef.current.width,
      imgRef.current.height
    );
    formData.append("original_preview_image", originFile);
    formData.append("mask_brush", mask_brush);

    const response = await fetch("/api/erase", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        user_agent: data.user_agent,
      },
      body: formData,
    });

    const result = await response.json();
    const edited_image = result.edited_image;

    const base64 = "data:image/png;base64," + edited_image.image;

    const newFile = base64ToFile(base64);

    const newListFile = files.map((file) => {
      if (file.id === idActive) {
        console.log(base64);

        return {
          ...file,
          file: newFile,
          detected_objects: file.detected_objects
            ? file.detected_objects.map((v) => ({
                ...v,
                deleted: v.deleted ? v.deleted : v.isSelected,
              }))
            : undefined,
        };
      }
      return file;
    });

    setFiles(newListFile);
    setPreview(base64);
    canvasRef.current?.resetCanvas();
    const idx = dataDownload.findIndex((data: any) => data.id === idActive);
    if (idx === -1) {
      setDataDownload([
        ...dataDownload,
        {
          id: idActive,
          file: base64,
          route: "/remove-object/upload",
        },
      ]);
    } else {
      setDataDownload([
        ...dataDownload.slice(0, idx),
        {
          id: idActive,
          file: base64,
          route: "/remove-object/upload",
        },
        ...dataDownload.slice(idx + 1),
      ]);
    }
    console.log(preview);
  };

  const handleAutoSuggest = async () => {
    if (!fileActive || fileActive.detected_objects) return;

    const originFile = await resizeImage(
      fileActive.file,
      imgRef.current!.width,
      imgRef.current!.height
    );

    const formData = new FormData();
    formData.append("original_preview_image", originFile);
    const response = await fetch("/api/auto-suggest", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        user_agent: data.user_agent,
      },
      body: formData,
    });

    const suggest = await response.json();

    // const originFile = await resizeImage(
    //   fileActive.file,
    //   imgRef.current!.width,
    //   imgRef.current!.height
    // );

    const newFiles = await Promise.all(
      files.map(async (file) => {
        if (file.id === idActive) {
          return {
            ...file,
            originFile,
            detected_objects: (await Promise.all(
              suggest.detected_objects.map(async (v: IDetectedObject) => ({
                ...v,
                base64: await processImages(v.box, originFile),
                deleted: false,
                isSelected: true,
                mask_id: v.mask_id,
              }))
            )) as IDetectedObject[],
          };
        }
        return file;
      })
    );

    console.log(newFiles);

    setFiles(newFiles);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const id = uuidv4();
      setIdActive(id);
      if (!fileActive) {
        setFiles([
          ...files,
          { file: selectedFile, oldFile: selectedFile, id, paths: [] },
        ]);
      } else {
        if (!canvasRef.current) return;
        const paths = await canvasRef.current?.exportPaths();
        canvasRef.current?.resetCanvas();

        const idx = files.findIndex((v) => v.id === fileActive.id);
        setFiles([
          ...files.slice(0, idx),
          { ...files[idx], paths },
          ...files.slice(idx + 1),
          { file: selectedFile, id, paths: [], oldFile: selectedFile },
        ]);
      }
      setPreview("");
    }
  };
  const handleExportImage = async () => {
    try {
      const imageData = await canvasRef?.current?.exportImage("png"); // hoặc "jpeg"
      return imageData;
    } catch (error) {
      console.error("Export failed", error);
      return null;
    }
  };

  const handleAuto = async () => {
    if (tab === 1) return;
    setTab(1);
    await handleAutoSuggest();
  };

  useEffect(() => {
    // Lấy phần tử #cursor
    const cursor = document.getElementById("cursor");
    const canvasContainer = document.getElementById("canvas-container");

    if (!cursor || !canvasContainer) return;

    // Hiển thị con trỏ khi di chuột vào #canvas-container
    canvasContainer.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
    });

    // Ẩn con trỏ khi chuột rời khỏi #canvas-container
    canvasContainer.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
    });

    // Cập nhật vị trí con trỏ theo tọa độ chuột
    canvasContainer.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
    });
  }, []);

  useEffect(() => {
    if (fileActive) {
      setIdDownload(fileActive.id);
    } else {
      setIdDownload(null);
    }
    if (!fileActive || !canvasRef.current) return;

    const paths = fileActive.paths;
    if (paths) {
      canvasRef.current.loadPaths(paths);
    } else {
      canvasRef.current.clearCanvas();
    }
  }, [fileActive]);

  return (
    <div role="button" tabIndex={0}>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 transition flex flex-col justify-center items-center invisible opacity-0">
        <div
          color="white"
          //mode="outline"
          className="sc-eac7f02c-0 dRpMgD text-center mx-auto"
        >
          <svg
            className="align-middle mx-auto"
            width={120}
            height={120}
            viewBox="0 0 120 120"
            fill="none"
          >
            <path
              d="M40.4052 85.0013C40.2594 87.306 40.9158 89.5901 42.2629 91.4658C43.61 93.3415 45.5647 94.6932 47.7952 95.2913L82.7452 104.656C85.3065 105.342 88.0353 104.982 90.3316 103.657C92.6278 102.331 94.3035 100.147 94.9902 97.5863L107.155 52.1863C107.495 50.9178 107.583 49.5946 107.411 48.2924C107.24 46.9901 106.814 45.7344 106.158 44.5968C105.501 43.4593 104.627 42.4622 103.585 41.6625C102.543 40.8629 101.354 40.2763 100.085 39.9363L73.6852 32.8613"
              fill="white"
              fillOpacity="0.4"
            />
            <path
              d="M40.4052 85.0013C40.2594 87.306 40.9158 89.5901 42.2629 91.4658C43.61 93.3415 45.5647 94.6932 47.7952 95.2913L82.7452 104.656C85.3065 105.342 88.0353 104.982 90.3316 103.657C92.6278 102.331 94.3035 100.147 94.9902 97.5863L107.155 52.1863C107.495 50.9178 107.583 49.5946 107.411 48.2924C107.24 46.9901 106.814 45.7344 106.158 44.5968C105.501 43.4593 104.627 42.4622 103.585 41.6625C102.543 40.8629 101.354 40.2763 100.085 39.9363L73.6852 32.8613"
              stroke="white"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 25V75C17.5 77.6522 18.5536 80.1957 20.4289 82.0711C22.3043 83.9464 24.8478 85 27.5 85H63.685C66.3372 85 68.8807 83.9464 70.7561 82.0711C72.6314 80.1957 73.685 77.6522 73.685 75V25C73.685 22.3478 72.6314 19.8043 70.7561 17.9289C68.8807 16.0536 66.3372 15 63.685 15H27.5C24.8478 15 22.3043 16.0536 20.4289 17.9289C18.5536 19.8043 17.5 22.3478 17.5 25Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-3xl text-white font-medium">
          Kéo và thả tệp vào đây
        </p>
      </div>
      <input
        ref={fileInputRef}
        accept="image/png, image/jpeg, image/webp"
        type="file"
        tabIndex={-1}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="opacity-100 transition-all ease-in-out duration-500">
        {fileActive ? (
          <div className="pt-14 flex bg-gray-200 flex-col items-start justify-start visible sm:flex-row sm:items-stretch sm:justify-stretch h-screen">
            <div className="bg-white shadow-xl p-3 overflow-y-auto overflow-x-hidden hide-scrollbars sm:w-[104px] sm:h-full hidden sm:block flex-col border-neutral-ink-100 border-t items-center">
              <div
                className="w-20 h-20 border border-dashed border-neutral-ink-200 hover:border-blue-400 text-neutral-ink-400 hover:text-blue-400 rounded-lg cursor-pointer flex justify-center items-center"
                onClick={handleClick}
              >
                <div
                  color="inherit"
                  //mode="outline"
                  className="sc-eac7f02c-0 gNfqSN text-center"
                >
                  <svg
                    className="align-middle"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g id="Group 10947">
                      <path
                        id="Vector 932"
                        d="M16 1.85791V30.1422"
                        stroke="#8C8D9C"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        id="Vector 933"
                        d="M30.1421 16L1.85782 16"
                        stroke="#8C8D9C"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {files.map((file, index) => (
                <div
                  key={index}
                  className={classNames(
                    "w-20 h-20 mt-2 group relative border-[2px] rounded-xl p-[2px]",
                    {
                      "border-blue-500": file.id === idActive,
                    }
                  )}
                  onClick={async () => {
                    if (!canvasRef.current) return;
                    const paths = await canvasRef.current?.exportPaths();
                    canvasRef.current?.resetCanvas();

                    const idx = files.findIndex((v) => v.id === idActive);
                    setFiles([
                      ...files.slice(0, idx),
                      { ...files[idx], paths },
                      ...files.slice(idx + 1),
                    ]);
                    setIdActive(file.id);
                  }}
                >
                  <img
                    alt="uploadedImage"
                    src={URL.createObjectURL(file.file)}
                    className="w-full h-full object-cover transition duration-200 ease-in-out transform group-hover:filter group-hover:brightness-75 rounded-lg"
                  />
                  <div
                    color="inherit"
                    //mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center text-white absolute right-1 bottom-1 duration-200 transition-all cursor-pointer  hidden"
                  >
                    <svg
                      className="align-middle text-white absolute right-1 bottom-1 duration-200 transition-all cursor-pointer  hidden"
                      width={14}
                      height={18}
                      viewBox="0 0 14 18"
                      fill="none"
                    >
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M2 6.5V14.8333C2 15.2754 2.17559 15.6993 2.48816 16.0118C2.80072 16.3244 3.22464 16.5 3.66667 16.5H10.3333C10.7754 16.5 11.1993 16.3244 11.5118 16.0118C11.8244 15.6993 12 15.2754 12 14.8333V6.5M8.66667 7.33333V13.1667M5.33333 7.33333V13.1667M0.75 4H13.25M3.66667 4L4.12 2.64C4.23058 2.30799 4.44286 2.01921 4.72675 1.8146C5.01064 1.60998 5.35173 1.49992 5.70167 1.5H8.29833C8.64856 1.49957 8.99002 1.60947 9.27424 1.81411C9.55846 2.01875 9.771 2.30772 9.88167 2.64L10.3333 4"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:overflow-hidden h-full sm:flex-1 flex flex-col relative w-full items-center justify-center p-4 md:p-10">
              <div className="relative">
                <div className="py-3 touch-none flex-1">
                  <div
                    className="relative z-10 w-fit h-fit mx-auto select-none cursor"
                    id="canvas-container"
                    style={{ transform: "none" }}
                  >
                    {fileActive && (
                      <>
                        <img
                          src={URL.createObjectURL(fileActive?.file)}
                          alt="upload image"
                          className="sc-568e005d-0 broiXv items-center max-h-[calc(100vh - 150px)]"
                          ref={imgRef}
                        />
                        <ReactSketchCanvas
                          ref={canvasRef}
                          className="absolute top-0 left-0 w-full h-full opacity-50"
                          style={{ background: "transparent" }}
                          strokeWidth={sliderValue}
                          strokeColor="red"
                          backgroundImage={URL.createObjectURL(
                            showPrevius ? fileActive?.oldFile : fileActive?.file
                          )}
                        />
                      </>
                    )}
                    <div id="cursor" className=""></div>
                    <div className="">
                      {fileActive?.detected_objects
                        ?.filter((file) => !file.deleted && file.isSelected)
                        ?.map((file, index) => {
                          return (
                            <div
                              key={index}
                              className="absolute rounded-md z-30 border border-blue-500"
                              style={{
                                width: file.box[2] - file.box[0],
                                height: file.box[3] - file.box[1],
                                left: file.box[0],
                                top: file.box[1],
                              }}
                            >
                              <img
                                src={"data:image/jpeg;base64," + file.mask}
                                alt="mask"
                                className="touch-none select-none opacity-50 block"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 p-0 sm:flex justify-between relative hidden flex-auto items-end">
                {/* <div className="hidden">
                <div className="bg-white rounded-md h-10 flex items-center space-x-5">
                  <button
                    className="w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center text-base-content-primary p-x before:!w-8 before:!h-8 before:left-1 before:top-1 text-disabled text-opacity-50 group"
                    disabled
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 text-white bg-base-content-primary capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent">
                      Thu nhỏ
                    </span>
                    <div className="inline-block leading-[20px] relative z-10">
                      <svg
                        width={14}
                        height={2}
                        viewBox="0 0 14 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7004 1.9001H1.30039C1.0617 1.9001 0.832777 1.80528 0.663994 1.63649C0.495212 1.46771 0.400391 1.23879 0.400391 1.0001C0.400391 0.761403 0.495212 0.532485 0.663994 0.363702C0.832777 0.194919 1.0617 0.100098 1.30039 0.100098H12.7004C12.9391 0.100098 13.168 0.194919 13.3368 0.363702C13.5056 0.532485 13.6004 0.761403 13.6004 1.0001C13.6004 1.23879 13.5056 1.46771 13.3368 1.63649C13.168 1.80528 12.9391 1.9001 12.7004 1.9001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="w-28">
                    <Slider
                      min={10}
                      max={100}
                      // defaultValue={90}
                      // value={90}
                      range
                    />
                  </div>
                  <div className="w-14 flex items-center px-2 py-1 border rounded-md text-xs">
                    <input
                      className="border-none w-full text-right focus:outline-none"
                      defaultValue={100}
                    />
                    <span className="block flex-1 ml-1">%</span>
                  </div>
                  <button className="w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center text-base-content-primary p-x before:!w-8 before:!h-8 before:left-1 before:top-1 sm:hover:text-primary hover:before:opacity-100 group">
                    <span className="absolute left-1/2 -translate-x-1/2 text-white bg-base-content-primary capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent">
                      Phóng to
                    </span>
                    <div className="inline-block leading-[20px] relative z-10">
                      <svg
                        width={16}
                        height={18}
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.0002 17.1831C7.7615 17.1831 7.53258 17.0883 7.3638 16.9195C7.19502 16.7507 7.10019 16.5218 7.10019 16.2831V1.71787C7.10019 1.47918 7.19502 1.25026 7.3638 1.08148C7.53258 0.912693 7.7615 0.817871 8.0002 0.817871C8.23889 0.817871 8.46781 0.912693 8.63659 1.08148C8.80537 1.25026 8.9002 1.47918 8.9002 1.71787V16.2831C8.9002 16.5218 8.80537 16.7507 8.63659 16.9195C8.46781 17.0883 8.23889 17.1831 8.0002 17.1831Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.9002 9.90019H1.1002C0.8615 9.90019 0.632582 9.80537 0.463799 9.63659C0.295016 9.4678 0.200195 9.23889 0.200195 9.00019C0.200195 8.7615 0.295016 8.53258 0.463799 8.3638C0.632582 8.19501 0.8615 8.10019 1.1002 8.10019H14.9002C15.1389 8.10019 15.3678 8.19501 15.5366 8.3638C15.7054 8.53258 15.8002 8.7615 15.8002 9.00019C15.8002 9.23889 15.7054 9.4678 15.5366 9.63659C15.3678 9.80537 15.1389 9.90019 14.9002 9.90019Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div> */}
                <div className="flex w-full justify-between cursor-auto">
                  <div className="mr-3 select-none">
                    <button
                      className="cursor-pointer w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center text-base-content-primary p-x before:!w-8 before:!h-8 before:left-1 before:top-1 text-disabled text-opacity-50 group"
                      onMouseDown={() => {
                        setShowPrevious(true);
                      }}
                      onMouseUp={() => {
                        setShowPrevious(false);
                      }}
                    >
                      <span className="absolute left-1/2 -translate-x-1/2 text-white bg-black z-30 capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent">
                        Xem bản gốc
                      </span>
                      <div className="inline-block leading-[20px] relative z-10">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3V21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 8H7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 12H7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 16H7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 4.5H4.22222C3.63285 4.5 3.06762 4.6873 2.65087 5.0207C2.23413 5.3541 2 5.80628 2 6.27778V17.7222C2 18.1937 2.23413 18.6459 2.65087 18.9793C3.06762 19.3127 3.63285 19.5 4.22222 19.5H9M15 4.5H19.7778C20.3671 4.5 20.9324 4.6873 21.3491 5.0207C21.7659 5.3541 22 5.80628 22 6.27778V17.7222C22 18.1937 21.7659 18.6459 21.3491 18.9793C20.9324 19.3127 20.3671 19.5 19.7778 19.5H15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="divide-x flex">
                    <button
                      className="w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center text-base-content-primary p-x before:!w-8 before:!h-8 before:left-1 before:top-1 text-disabled text-opacity-50 group rounded-tr-none rounded-br-none"
                      onClick={() => canvasRef.current?.undo()}
                    >
                      <span className="cursor-pointer absolute left-1/2 -translate-x-1/2 text-white bg-black z-30 capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent">
                        Hoàn tác
                      </span>
                      <div className="inline-block leading-[20px] relative z-10">
                        <svg
                          width={18}
                          height={17}
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.50015 8.50822C4.38197 8.50831 4.26494 8.48503 4.1558 8.43972C4.04665 8.39441 3.94753 8.32798 3.86415 8.24422L0.864154 5.24422C0.695393 5.07544 0.600586 4.84654 0.600586 4.60786C0.600586 4.36919 0.695393 4.14028 0.864154 3.9715L3.86415 0.971503C4.03409 0.808334 4.26124 0.718307 4.49682 0.720752C4.7324 0.723196 4.95763 0.817917 5.12415 0.984577C5.29067 1.15124 5.3852 1.37655 5.38744 1.61213C5.38969 1.84771 5.29947 2.07478 5.13615 2.24458L2.77215 4.60858L5.13615 6.97258C5.26186 7.09845 5.34745 7.25874 5.38211 7.43322C5.41677 7.6077 5.39895 7.78854 5.3309 7.95289C5.26284 8.11725 5.14761 8.25775 4.99975 8.35665C4.85189 8.45556 4.67804 8.50807 4.50015 8.50822Z"
                            fill="currentColor"
                          />
                          <path
                            d="M10.5002 16.5086H2.50035C2.26166 16.5086 2.03274 16.4138 1.86396 16.245C1.69517 16.0762 1.60035 15.8473 1.60035 15.6086C1.60035 15.3699 1.69517 15.141 1.86396 14.9722C2.03274 14.8034 2.26166 14.7086 2.50035 14.7086H10.5002C11.7852 14.77 13.0424 14.321 13.9977 13.4593C14.9531 12.5977 15.5291 11.3933 15.6002 10.1088C15.5293 8.82408 14.9534 7.6195 13.998 6.75766C13.0427 5.89582 11.7853 5.44661 10.5002 5.50798H1.50015C1.26146 5.50798 1.03294 5.41301 0.864154 5.24422C0.695393 5.07544 0.600586 4.84654 0.600586 4.60786C0.600586 4.36919 0.695393 4.14028 0.864154 3.9715C1.03294 3.80272 1.26146 3.70798 1.50015 3.70798H10.5002C12.2627 3.6463 13.9781 4.28501 15.2711 5.48446C16.5641 6.68391 17.3295 8.34653 17.4002 10.1088C17.3293 11.8709 16.5637 13.5332 15.2707 14.7325C13.9778 15.9317 12.2626 16.5703 10.5002 16.5086Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                    <button
                      className="cursor-pointer w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center text-base-content-primary p-x before:!w-8 before:!h-8 before:left-1 before:top-1 text-disabled text-opacity-50 group rounded-tl-none rounded-bl-none mr-3"
                      onClick={() => canvasRef.current?.redo()}
                    >
                      <span className="absolute left-1/2 -translate-x-1/2 text-white bg-black z-30 capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent">
                        Làm lại
                      </span>
                      <div className="inline-block leading-[20px] relative z-10">
                        <svg
                          width={18}
                          height={17}
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5006 8.50822C13.6188 8.50831 13.7358 8.48503 13.8449 8.43972C13.9541 8.39441 14.0532 8.32798 14.1366 8.24422L17.1366 5.24422C17.3053 5.07544 17.4002 4.84654 17.4002 4.60786C17.4002 4.36919 17.3053 4.14028 17.1366 3.9715L14.1366 0.971503C13.9666 0.808334 13.7395 0.718307 13.5039 0.720752C13.2683 0.723196 13.0431 0.817917 12.8766 0.984577C12.7101 1.15124 12.6155 1.37655 12.6133 1.61213C12.6111 1.84771 12.7013 2.07478 12.8646 2.24458L15.2286 4.60858L12.8646 6.97258C12.7389 7.09845 12.6533 7.25874 12.6186 7.43322C12.584 7.6077 12.6018 7.78854 12.6698 7.95289C12.7379 8.11725 12.8531 8.25775 13.001 8.35665C13.1488 8.45556 13.3227 8.50807 13.5006 8.50822Z"
                            fill="currentColor"
                          />
                          <path
                            d="M7.50059 16.5086H15.5004C15.7391 16.5086 15.968 16.4138 16.1368 16.245C16.3056 16.0762 16.4004 15.8473 16.4004 15.6086C16.4004 15.3699 16.3056 15.141 16.1368 14.9722C15.968 14.8034 15.7391 14.7086 15.5004 14.7086L7.50059 14.7086C6.21555 14.77 4.95833 14.321 4.003 13.4593C3.04766 12.5977 2.47167 11.3933 2.40059 10.1088C2.47146 8.82408 3.04735 7.6195 4.00271 6.75766C4.95806 5.89582 6.2154 5.44661 7.50059 5.50798L16.5006 5.50798C16.7393 5.50798 16.9678 5.41301 17.1366 5.24422C17.3053 5.07544 17.4002 4.84654 17.4002 4.60786C17.4002 4.36919 17.3053 4.14028 17.1366 3.9715C16.9678 3.80272 16.7393 3.70798 16.5006 3.70798L7.50059 3.70798C5.73799 3.6463 4.02268 4.28501 2.72968 5.48446C1.43668 6.68391 0.671196 8.34653 0.600586 10.1088C0.671443 11.8709 1.43704 13.5332 2.73001 14.7325C4.02298 15.9317 5.73815 16.5703 7.50059 16.5086Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                {/* <div className="hidden">
                <div className="lg:flex w-auto hidden gap-2">
                  <div>
                    <button className="btn block w-full py-3 px-4 bg-secondary text-base-content rounded-lg group rounded-lg relative h-10 pl-2 pr-3 py-2 hover:!bg-neutral-ink-500 text-white justify-center items-center gap-1 inline-flex !bg-neutral-ink-600 text-sm font-semibold transition-all duration-100">
                      <div className="inline-block mr-2 align-middle !mr-1">
                        <svg
                          width={16}
                          height={18}
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.0002 17.1831C7.7615 17.1831 7.53258 17.0883 7.3638 16.9195C7.19502 16.7507 7.10019 16.5218 7.10019 16.2831V1.71787C7.10019 1.47918 7.19502 1.25026 7.3638 1.08148C7.53258 0.912693 7.7615 0.817871 8.0002 0.817871C8.23889 0.817871 8.46781 0.912693 8.63659 1.08148C8.80537 1.25026 8.9002 1.47918 8.9002 1.71787V16.2831C8.9002 16.5218 8.80537 16.7507 8.63659 16.9195C8.46781 17.0883 8.23889 17.1831 8.0002 17.1831Z"
                            fill="currentColor"
                          />
                          <path
                            d="M14.9002 9.90019H1.1002C0.8615 9.90019 0.632582 9.80537 0.463799 9.63659C0.295016 9.4678 0.200195 9.23889 0.200195 9.00019C0.200195 8.7615 0.295016 8.53258 0.463799 8.3638C0.632582 8.19501 0.8615 8.10019 1.1002 8.10019H14.9002C15.1389 8.10019 15.3678 8.19501 15.5366 8.3638C15.7054 8.53258 15.8002 8.7615 15.8002 9.00019C15.8002 9.23889 15.7054 9.4678 15.5366 9.63659C15.3678 9.80537 15.1389 9.90019 14.9002 9.90019Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="inline-block align-middle">
                        <span className="absolute left-1/2 -translate-x-1/2 text-white bg-base-content-primary capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent normal-case">
                          Ảnh mới
                        </span>
                        Ảnh mới
                      </span>
                    </button>
                  </div>
                  <div className="w-44 h-10">
                    <div className="w-full h-full relative hidden flex justify-center">
                      <div className="bottom-0 w-auto flex justify-center absolute z-20 pointer-events-auto">
                        <div className="relative" data-headlessui-state="">
                          <button
                            type="button"
                            aria-expanded="false"
                            data-headlessui-state=""
                            id="headlessui-popover-button-:r2:"
                          >
                            <div className="px-2 min-w-36 h-10 bg-white flex justify-center font-bold items-center rounded-lg cursor-pointer shadow-lg hover:text-blue-500">
                              <p className="font-semibold text-[14px] leading-[18px]">
                                Tiếp tục chỉnh sửa
                              </p>
                              <div
                                color="inherit"
                                //mode="outline"
                                className="sc-eac7f02c-0 kpGNll text-center mb-[1px] ml-1"
                              >
                                <svg
                                  className="align-middle mb-[1px] ml-1"
                                  width={20}
                                  height={20}
                                  fill="none"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    stroke="#5C5D6B"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M8.334 13.333 11.667 10 8.334 6.667"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div
                          style={{
                            position: "fixed",
                            top: 1,
                            left: 1,
                            width: 1,
                            height: 0,
                            padding: 0,
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0px, 0px, 0px, 0px)",
                            whiteSpace: "nowrap",
                            borderWidth: 0,
                            display: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div className="bg-white shadow-xl sm:w-[300px] sm:h-full">
              <div className="flex h-full flex-col border-t border-neutral-ink-100">
                <div className="grid grid-cols-2 text-neutral text-center">
                  <div
                    className={classNames(
                      "py-3 border-b-2 text-sm font-semibold cursor-pointer text-center",
                      {
                        "border-blue-500 text-blue-500": tab === 0,
                      }
                    )}
                    onClick={() => setTab(0)}
                  >
                    <div className="inline-block align-middle mr-2">
                      <svg
                        width={29}
                        height={28}
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5908 2.00694C21.1508 1.56703 20.5601 1.31074 19.9382 1.28995C19.3163 1.26915 18.7098 1.48541 18.2413 1.89494L8.86483 10.0989C8.62447 10.3093 8.42987 10.5669 8.29309 10.8555C8.15631 11.1442 8.08026 11.4579 8.06965 11.7771C8.05904 12.0964 8.1141 12.4145 8.23141 12.7116C8.34873 13.0087 8.5258 13.2786 8.75166 13.5044L10.0922 14.8449C10.3181 15.0708 10.5879 15.2479 10.885 15.3652C11.1822 15.4825 11.5002 15.5376 11.8195 15.527C12.1387 15.5163 12.4524 15.4403 12.7411 15.3035C13.0297 15.1667 13.2873 14.9721 13.4977 14.7318L21.7017 5.35528C22.1113 4.88717 22.3277 4.28091 22.3071 3.65924C22.2865 3.03756 22.0305 2.44694 21.5908 2.00694V2.00694Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6816 8.51465L15.0916 12.9246"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.19834 20.7098H6.51851C10.001 20.7098 11.7452 16.4993 9.28234 14.0365C7.47168 12.2258 4.39634 12.892 3.49801 15.2895L1.72234 20.0238C1.69375 20.1007 1.68417 20.1833 1.69441 20.2647C1.70466 20.346 1.73443 20.4237 1.78118 20.4911C1.82794 20.5585 1.89029 20.6136 1.96293 20.6516C2.03556 20.6897 2.11633 20.7097 2.19834 20.7098V20.7098Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Thủ công
                  </div>
                  <div
                    className={classNames(
                      "py-3 border-b-2 text-sm font-semibold cursor-pointer text-center border-gray-200 text-neutral",
                      {
                        "border-blue-500 text-blue-500": tab === 1,
                      }
                    )}
                    onClick={handleAuto}
                  >
                    <div className="inline-block align-middle mr-2">
                      <svg
                        width={29}
                        height={28}
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.25 3.5H6.625C5.92881 3.5 5.26113 3.77656 4.76884 4.26884C4.27656 4.76113 4 5.42881 4 6.125V8.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 19.25V21.875C4 22.5712 4.27656 23.2389 4.76884 23.7312C5.26113 24.2234 5.92881 24.5 6.625 24.5H9.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.75 24.5H22.375C23.0712 24.5 23.7389 24.2234 24.2312 23.7312C24.7234 23.2389 25 22.5712 25 21.875V19.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25 8.75V6.125C25 5.42881 24.7234 4.76113 24.2312 4.26884C23.7389 3.77656 23.0712 3.5 22.375 3.5H19.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.9529 19.8332L19.6215 19.0014C19.3959 18.4345 19.0053 17.9484 18.5002 17.606C17.9952 17.2637 17.399 17.0808 16.7889 17.0811H12.2109C11.6009 17.0817 11.0052 17.265 10.5003 17.6072C9.99548 17.9495 9.60466 18.4351 9.37821 19.0014L9.04688 19.8332"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.9741 8.02511C17.314 8.34658 17.586 8.73292 17.774 9.1613C17.962 9.58968 18.0622 10.0514 18.0687 10.5192C18.0752 10.987 17.9878 11.4513 17.8118 11.8847C17.6358 12.3182 17.3747 12.7119 17.0439 13.0427C16.7131 13.3735 16.3193 13.6346 15.8859 13.8107C15.4524 13.9867 14.9881 14.074 14.5203 14.0675C14.0526 14.061 13.5908 13.9608 13.1625 13.7728C12.7341 13.5848 12.3477 13.3128 12.0263 12.9729C11.408 12.3095 11.0715 11.4319 11.0875 10.5252C11.1035 9.61843 11.4708 8.7533 12.112 8.11204C12.7533 7.47078 13.6184 7.10346 14.5252 7.08746C15.4319 7.07146 16.3095 7.40804 16.9729 8.02628"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Tự động
                    <div className="align-middle inline-block ml-2">
                      <img
                        alt="ai icon"
                        loading="lazy"
                        width={15}
                        height={14}
                        decoding="async"
                        data-nimg={1}
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=16,quality=85/images/AI-logo.svg 1x, https://assets.snapedit.app/cdn-cgi/image/width=32,quality=85/images/AI-logo.svg 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=32,quality=85/images/AI-logo.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    "flex-1 overflow-hidden w-full shadow-inner py-4",
                    {
                      hidden: tab === 1,
                    }
                  )}
                >
                  <div className="text-sm px-3">
                    <div className="mb-4 flex gap-6 justify-center">
                      <div onClick={() => setMode(1)}>
                        <button
                          className={classNames(
                            "cursor-pointer w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center sm:hover:border-primary border text-base-content-secondary text-primary border-primary sm:hover:text-primary hover:before:opacity-100 group",
                            {
                              "border-blue-500": mode === 1,
                            }
                          )}
                        >
                          <span className="absolute left-1/2 -translate-x-1/2 text-white bg-black capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 top-full mt-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:bottom-full after:left-1/2 after:-ml-1 after:border-t-transparent after:border-b-base-content-primary">
                            Tô
                          </span>
                          <div className="inline-block leading-[20px] relative z-10">
                            <svg
                              width={18}
                              height={17}
                              viewBox="0 0 18 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.553711 11.3438C0.741211 11.5254 0.972656 11.6543 1.24805 11.7305C1.5293 11.8008 1.82227 11.8037 2.12695 11.7393C2.43164 11.6689 2.71875 11.5078 2.98828 11.2559C3.06445 11.1855 3.16113 11.0947 3.27832 10.9834C3.39551 10.8721 3.52441 10.7432 3.66504 10.5967C3.81152 10.4502 3.97266 10.2861 4.14844 10.1045C4.32422 9.92285 4.51758 9.72656 4.72852 9.51562C5.74805 8.47852 6.66211 7.55273 7.4707 6.73828C8.2793 5.91797 8.97363 5.22949 9.55371 4.67285C10.1396 4.11035 10.6025 3.7002 10.9424 3.44238C11.2881 3.17871 11.5049 3.09082 11.5928 3.17871C11.6689 3.24316 11.6484 3.4043 11.5312 3.66211C11.4199 3.91992 11.2412 4.24512 10.9951 4.6377C10.749 5.03027 10.459 5.46387 10.125 5.93848C9.79102 6.40723 9.44531 6.8877 9.08789 7.37988C8.57812 8.09473 8.0918 8.77148 7.62891 9.41016C7.16602 10.0488 6.75879 10.6523 6.40723 11.2207C6.06152 11.7891 5.79785 12.3223 5.61621 12.8203C5.43457 13.3125 5.36719 13.7666 5.41406 14.1826C5.46094 14.5928 5.6543 14.9678 5.99414 15.3076C6.42773 15.7412 6.94043 15.917 7.53223 15.835C8.12988 15.7529 8.83008 15.4424 9.63281 14.9033C10.4414 14.3584 11.3789 13.6143 12.4453 12.6709C13.0078 12.1846 13.5 11.7568 13.9219 11.3877C14.3438 11.0186 14.6865 10.7432 14.9502 10.5615C15.2197 10.3799 15.3926 10.3301 15.4688 10.4121C15.5156 10.459 15.5039 10.5674 15.4336 10.7373C15.3633 10.9014 15.2549 11.1094 15.1084 11.3613C14.9678 11.6074 14.8096 11.8857 14.6338 12.1963C14.4287 12.5361 14.2236 12.8906 14.0186 13.2598C13.8135 13.623 13.6465 13.9834 13.5176 14.3408C13.3887 14.6982 13.3359 15.0381 13.3594 15.3604C13.3887 15.6885 13.541 15.9873 13.8164 16.2568C14.2031 16.6377 14.7334 16.7373 15.4072 16.5557C16.0811 16.3799 16.8223 15.8906 17.6309 15.0879C17.8066 14.9062 17.9092 14.7158 17.9385 14.5166C17.9736 14.3174 17.9121 14.1416 17.7539 13.9893C17.6133 13.8486 17.4492 13.7842 17.2617 13.7959C17.0801 13.8076 16.9102 13.8838 16.752 14.0244C16.4297 14.335 16.1338 14.5928 15.8643 14.7979C15.6006 14.9971 15.3838 15.1406 15.2139 15.2285C15.0498 15.3164 14.9502 15.3457 14.915 15.3164C14.874 15.2812 14.8945 15.1699 14.9766 14.9824C15.0586 14.7891 15.1846 14.5342 15.3545 14.2178C15.5303 13.8955 15.7383 13.5205 15.9785 13.0928C16.2422 12.624 16.4736 12.1875 16.6729 11.7832C16.8779 11.3789 17.0244 11.0039 17.1123 10.6582C17.2061 10.3125 17.2236 9.99609 17.165 9.70898C17.1064 9.41602 16.9512 9.14648 16.6992 8.90039C16.3594 8.57227 15.999 8.40234 15.6182 8.39062C15.2432 8.37891 14.833 8.49316 14.3877 8.7334C13.9424 8.97363 13.4473 9.31641 12.9023 9.76172C12.3633 10.207 11.7627 10.7227 11.1006 11.3086C10.5791 11.7656 10.1221 12.1494 9.72949 12.46C9.33691 12.7705 9.00586 13.0166 8.73633 13.1982C8.47266 13.3799 8.26465 13.5029 8.1123 13.5674C7.95996 13.626 7.86328 13.6348 7.82227 13.5938C7.78125 13.541 7.78418 13.4443 7.83105 13.3037C7.88379 13.1631 7.9834 12.9697 8.12988 12.7236C8.27637 12.4775 8.47266 12.1729 8.71875 11.8096C8.96484 11.4404 9.26074 11.0127 9.60645 10.5264C9.95801 10.0342 10.3594 9.47168 10.8105 8.83887C11.4785 7.90723 12.0674 7.05176 12.5771 6.27246C13.0869 5.4873 13.4795 4.77832 13.7549 4.14551C14.0361 3.50684 14.168 2.93555 14.1504 2.43164C14.1387 1.92773 13.9395 1.48828 13.5527 1.11328C13.0605 0.632812 12.5039 0.369141 11.8828 0.322266C11.2676 0.269531 10.5381 0.459961 9.69434 0.893555C8.85059 1.32715 7.84863 2.03027 6.68848 3.00293C5.52832 3.96973 4.16016 5.23242 2.58398 6.79102C2.34375 7.03125 2.12109 7.25098 1.91602 7.4502C1.7168 7.64941 1.53223 7.83105 1.3623 7.99512C1.19824 8.15918 1.05469 8.30859 0.931641 8.44336C0.808594 8.57812 0.700195 8.69824 0.606445 8.80371C0.336914 9.12598 0.166992 9.44824 0.0966797 9.77051C0.0322266 10.0928 0.0439453 10.3916 0.131836 10.667C0.225586 10.9365 0.366211 11.1621 0.553711 11.3438Z"
                                fill={mode === 1 ? "#0051EE" : "currentColor"}
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                      {/* <div onClick={() => setMode(2)}>
                      <button
                        className={classNames(
                          "w-10 h-10 rounded  bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center sm:hover:border-primary border text-base-content-secondary sm:hover:text-primary hover:before:opacity-100 group",
                          {
                            "border-blue-500": mode === 2,
                          }
                        )}
                      >
                        <span className="absolute left-1/2 -translate-x-1/2 text-white bg-black capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 top-full mt-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:bottom-full after:left-1/2 after:-ml-1 after:border-t-transparent after:border-b-base-content-primary">
                          Khoanh vùng
                        </span>
                        <div
                          color="inherit"
                          //mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={22}
                            height={20}
                            viewBox="0 0 22 20"
                            fill="none"
                          >
                            <path
                              d="M16.478 1.57615C20.839 3.09815 21.923 7.16115 18.898 10.6522C15.872 14.1432 9.88396 15.7402 5.52196 14.2182C1.15996 12.6972 0.0769558 8.63315 3.10196 5.14215C6.12796 1.65215 12.116 0.0551509 16.478 1.57615Z"
                              stroke={mode === 2 ? "#0051EE" : "currentColor"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.711 14.3151C8.544 15.4261 3.302 14.4031 3.302 10.9561"
                              stroke={mode === 2 ? "#0051EE" : "currentColor"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.048 12.105C9.048 14.323 7.899 17.851 3.302 19"
                              stroke={mode === 2 ? "#0051EE" : "currentColor"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.302 10.9561C3.302 7.50909 9.048 7.50909 9.048 12.1051"
                              stroke={mode === 2 ? "#0051EE" : "currentColor"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                    </div> */}
                      <div className="relative" onClick={() => setMode(2)}>
                        <button
                          className={classNames(
                            "cursor-pointer w-10 h-10 rounded bg-white relative before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center sm:hover:border-primary border text-base-content-secondary sm:hover:text-primary hover:before:opacity-100 group",
                            {
                              "border-blue-500": mode === 2,
                            }
                          )}
                        >
                          <span className="absolute left-1/2 -translate-x-1/2 text-white bg-black capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 top-full mt-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:bottom-full after:left-1/2 after:-ml-1 after:border-t-transparent after:border-b-base-content-primary">
                            Xóa
                          </span>
                          <div className="inline-block leading-[20px] relative z-10">
                            <svg
                              width={21}
                              height={20}
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.52719 16.9767H6.93419C7.46458 16.9766 7.9732 16.7658 8.34819 16.3907L17.0722 7.66667C17.4471 7.29162 17.6578 6.783 17.6578 6.25267C17.6578 5.72235 17.4471 5.21373 17.0722 4.83867L13.7732 1.53967C13.3981 1.16473 12.8895 0.954102 12.3592 0.954102C11.8289 0.954102 11.3202 1.16473 10.9452 1.53967L1.51819 10.9667C1.14325 11.3417 0.932617 11.8503 0.932617 12.3807C0.932617 12.911 1.14325 13.4196 1.51819 13.7947L4.11419 16.3907C4.48819 16.7657 4.99619 16.9767 5.52719 16.9767V16.9767Z"
                                stroke={mode === 2 ? "#0051EE" : "currentColor"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.08984 6.38965L12.2198 12.5196"
                                stroke={mode === 2 ? "#0051EE" : "currentColor"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.9997 16.98H6.92969"
                                stroke={mode === 2 ? "#0051EE" : "currentColor"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    {mode === 1 && (
                      <>
                        <div className="flex justify-between">
                          <span>Kích cỡ</span>
                          <span>{sliderValue}px</span>
                        </div>
                        <div className="mt-3 px-2">
                          <Slider
                            min={10}
                            max={100}
                            value={sliderValue}
                            onChange={(value) =>
                              setSliderValue(value as number)
                            }
                          />
                          {/* <div className="rc-slider rc-slider-horizontal">
                      <div
                        className="rc-slider-rail"
                        style={{
                          backgroundColor: "rgb(174, 174, 182)",
                          height: 2,
                        }}
                      />
                      <div
                        className="rc-slider-track"
                        style={{
                          left: "0%",
                          width: "44.4444%",
                          backgroundColor: "rgb(37, 38, 56)",
                          height: 2,
                        }}
                      />
                      <div className="rc-slider-step" />
                      <div
                        className="rc-slider-handle"
                        tabIndex={0}
                        role="slider"
                        aria-valuemin={10}
                        aria-valuemax={100}
                        aria-valuenow={50}
                        aria-disabled="false"
                        aria-orientation="horizontal"
                        style={{
                          left: "44.4444%",
                          transform: "translateX(-50%)",
                        }}
                      />
                    </div> */}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className={classNames(
                    "flex-1 overflow-hidden w-full shadow-inner py-4",
                    {
                      hidden: tab === 0,
                    }
                  )}
                >
                  <div
                    className={classNames("h-full flex flex-col", {
                      // hidden: !!fileActive?.detected_objects,
                    })}
                  >
                    <div className="px-3 mb-2 text-sm font-semibold text-base-content relative">
                      <div className="flex items-center">
                        <div className="flex-auto">
                          {fileActive?.detected_objects?.length} đối tượng được
                          nhận dạng
                        </div>
                        <div className="text-neutral-ink-500 flex justify-end items-center cursor-pointer">
                          <p className="font-semibold text-[12px] leading-[16px]">
                            Bỏ chọn tất cả
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-auto">
                      {fileActive?.detected_objects?.map((file) => {
                        return (
                          <div
                            key={file.mask_id}
                            className={classNames(
                              "py-2 px-3 flex items-center justify-between transition bg-white hover:bg-[#EDF1F9] cursor-pointer",
                              {
                                "opacity-60 pointer-events-none": file.deleted,
                              },
                              { "!bg-[#EDF1F9]": file.isSelected }
                            )}
                          >
                            {file.deleted ? (
                              <svg
                                className="w-6 h-6 text-orange-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                />
                              </svg>
                            ) : (
                              <div
                                onClick={() => handleSelectFile(file.mask_id)}
                              >
                                {file.isSelected ? (
                                  <div className="w-6 h-6 rounded-full border border-[#ccc] bg-blue-500 text-center">
                                    <div className="inline-block text-white">
                                      <svg
                                        width={12}
                                        height={10}
                                        viewBox="0 0 12 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.3999L4.125 8.2749L1 5.1499"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 rounded-full border border-[#ccc]"></div>
                                )}
                              </div>
                            )}

                            <div className="flex items-center flex-auto ml-2">
                              <div className="border border-[#ccc] w-12 h-12 mr-3 rounded-md overflow-hidden relative">
                                <div
                                  className="bg-no-repeat absolute top-0 origin-top-left overflow-hidden"
                                  style={{
                                    backgroundPosition: `-${file.box[0]}px -${file.box[1]}px`,
                                    width: `${file.box[2] - file.box[0]}px`,
                                    height: `${file.box[3] - file.box[1]}px`,
                                    backgroundImage: `url(${URL.createObjectURL(
                                      fileActive.originFile!
                                    )})`,
                                    transform: `scale(${Math.min(
                                      48 / (file.box[2] - file.box[0]),
                                      48 / (file.box[3] - file.box[1])
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div>
                                <p className="text-base-content text-sm font-semibold">
                                  {file.object_description}
                                </p>
                                <p className="text-xs text-base-content-secondary" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="px-3 pb-4">
                  <button
                    className={classNames(
                      "btn block w-full py-3 px-4  rounded-lg text-base transition hover:bg-opacity-80 !text-gray-500 bg-gray-300 h-14",
                      {
                        "!text-white !bg-blue-500 cursor-pointer hover:opacity-80":
                          !!idActive,
                      }
                    )}
                    disabled={!idActive}
                    onClick={handleCallData}
                  >
                    <div className="inline-block align-middle mr-2">
                      <svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 3V1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 2H19"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 13H18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 12V14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 1V3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 2H5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.87039 18.7044L1.29539 17.1294C1.20175 17.0358 1.12746 16.9248 1.07677 16.8025C1.02609 16.6803 1 16.5492 1 16.4169C1 16.2845 1.02609 16.1535 1.07677 16.0312C1.12746 15.909 1.20175 15.7979 1.29539 15.7044L10.8704 6.12937C10.9639 6.03573 11.075 5.96144 11.1972 5.91076C11.3195 5.86007 11.4505 5.83398 11.5829 5.83398C11.7152 5.83398 11.8463 5.86007 11.9685 5.91076C12.0908 5.96144 12.2019 6.03573 12.2954 6.12937L13.8704 7.70437C13.964 7.7979 14.0383 7.90896 14.089 8.03122C14.1397 8.15348 14.1658 8.28452 14.1658 8.41687C14.1658 8.54922 14.1397 8.68027 14.089 8.80252C14.0383 8.92478 13.964 9.03585 13.8704 9.12937L4.29539 18.7044C4.10624 18.893 3.85002 18.9989 3.58289 18.9989C3.31576 18.9989 3.05953 18.893 2.87039 18.7044V18.7044Z"
                          stroke="currentColor"
                          strokeWidth="1.51"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.5097 11.3105L8.67969 8.48047"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="inline-block align-middle">
                      <p className="font-normal text-[18px] leading-[30px]">
                        Xóa
                      </p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-32">
            <div className="bg-white rounded-3xl tlg:p-6 p-4 text-center">
              <div className="border-2 border-dashed border-neutral-ink-200 rounded-3xl p-8">
                <div className="relative text-center tlg:w-[370px] max-w-md mx-auto">
                  <div
                    color="#8C8D9C"
                    // mode="outline"
                    className="sc-eac7f02c-0 jKpzAu text-center mx-auto"
                  >
                    <svg
                      className="align-middle mx-auto"
                      width={81}
                      height={80}
                      viewBox="0 0 81 80"
                      fill="none"
                    >
                      <path
                        d="M40.5 63.3333V40"
                        stroke="#8C8D9C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.2764 46.6666L40.4997 39.4432L47.723 46.6666"
                        stroke="#8C8D9C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M53.8335 63.3333H62.3668C68.7935 63.3333 74.0335 58.0933 74.0335 51.6666C74.0335 45.24 68.7935 40 62.3668 40H60.9168V36.6666C60.9168 25.6333 51.9501 16.6666 40.9168 16.6666C30.9935 16.6666 22.7668 23.9266 21.2068 33.41C13.2835 33.8133 6.9668 40.31 6.9668 48.3333C6.9668 56.6166 13.6835 63.3333 21.9668 63.3333H27.1668"
                        stroke="#8C8D9C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer py-5 !rounded-full text-xl shadow-[0px_4px_32px_rgba(43,61,227,0.24)]"
                    onClick={handleClick}
                  >
                    <span className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
                      Tải lên hình ảnh
                    </span>
                  </div>
                  <div className="mt-4 hidden lg:block">
                    <span className="font-semibold text-[16px] leading-[20px]">
                      Kéo và thả tệp vào đây
                    </span>
                    <span className="font-normal text-[16px] leading-[24px]">
                      {" "}
                      /
                    </span>
                    <span className="font-normal text-[16px] leading-[24px]">
                      {" "}
                      Ctrl + V để dán hình ảnh
                    </span>
                  </div>
                </div>
                <div className="my-5 w-full border-t border-[#D8D8DB]" />
                <div className="text-center">
                  <p className="font-normal text-[16px] leading-[24px] mb-3 text-neutral-ink-600">
                    Không có hình ảnh? Thử một trong những cái này
                  </p>
                  <ul className="space-x-3">
                    <li className="inline-block">
                      <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.snapedit.app/images/sample-remove-bg-1-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.snapedit.app/images/sample-remove-bg-2-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.snapedit.app/images/sample-remove-bg-3-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                        <img
                          src="https://assets.snapedit.app/images/sample-remove-bg-4-xs.webp"
                          alt="sample"
                          className="object-cover w-full h-full"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
