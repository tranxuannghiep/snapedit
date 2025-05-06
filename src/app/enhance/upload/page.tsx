"use client";

import { useDataStore } from "@/stores/useDataStore";
import classNames from "classnames";
import { useMemo, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { v4 as uuidv4 } from "uuid";

export default function Upload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<{ file: File; id: string }[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [idActive, setIdActive] = useState<string>("");
  const [tab, setTab] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = useDataStore((state: any) => state.data);

  const fileActive = useMemo(() => {
    return files.find((file) => file.id === idActive);
  }, [files, idActive]);

  const handleClick = () => {
    fileInputRef.current?.click(); // gọi click vào input
  };

  const handleCallData = async () => {
    if (!fileActive) return;
    if (tab === 0) {
      await handleEnhance(fileActive.file);
    }

    if (tab === 1) {
      await handleColorize(fileActive.file);
    }
  };

  const handleEnhance = async (file: File) => {
    const formData = new FormData();
    formData.append("input_image", file);
    formData.append("zoom_factor", "4");
    const response = await fetch("/api/enhance", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        user_agent: data.user_agent,
      },
      body: formData,
    });

    const base64 = await response.json();
    setPreview(base64);
  };

  const handleColorize = async (file: File) => {
    const formData = new FormData();
    formData.append("input_image", file);
    formData.append("zoom_factor", "2");
    const response = await fetch("/api/colorize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        user_agent: data.user_agent,
      },
      body: formData,
    });

    const base64 = await response.json();
    setPreview(base64);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const id = uuidv4();
      setIdActive(id);
      setFiles([...files, { file: selectedFile, id }]);
      setPreview("");
    }
  };

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
        <div
          className="flex bg-gray-200 flex-col sm:flex-row sm:items-stretch sm:justify-stretch items-start justify-start pt-16"
          style={{ height: 669 }}
        >
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
            {files.map((file) => (
              <div
                key={file.id}
                className={classNames("w-20 h-20 mt-2 group relative", {
                  "border-[2px] border-blue-500 rounded-xl p-[2px]":
                    idActive === file.id,
                })}
                onClick={() => setIdActive(file.id)}
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
          {fileActive ? (
            <>
              <div className="sm:flex-auto max-h-[calc(100vh-340px)] sm:w-[calc(100%-384px)] my-auto !w-full relative flex justify-center items-center sm:p-5 sm:pb-20 !flex-1">
                <div className="relative h-full max-h-full">
                  <div className="cursor-pointer absolute z-10 sm:h-full max-h-full">
                    {/* <div className="absolute z-30 text-white top-2 right-2 flex gap-1 hidden">
                  <div className="bg-gray-900 px-1.5 py-0.5 bg-opacity-60 rounded-[10px] uppercase">
                    <p className="font-semibold text-[10px] leading-[14px]">
                      2X
                    </p>
                  </div>
                  <div className="bg-gray-900 px-1.5 py-0.5 bg-opacity-60 rounded-[10px] uppercase">
                    <p className="font-semibold text-[10px] leading-[14px]">
                      Tiêu chuẩn
                    </p>
                  </div>
                  <div className="bg-gray-900 px-1.5 py-0.5 bg-opacity-60 rounded-[10px] uppercase">
                    <p className="font-semibold text-[10px] leading-[14px] flex items-center">
                      1400<span className="text-[6px] mx-1">x</span>926
                    </p>
                  </div>
                </div> */}
                    <div className="absolute z-30 sm:px-1.5 sm:py-0.5 px-2 py-1 text-white bg-gray-900 sm:rounded-[10px] rounded-md sm:bottom-2 sm:left-2 left-3 bg-opacity-60">
                      <p className="font-semibold text-[10px] leading-[14px] sm:S10B text-sm">
                        Trước
                      </p>
                    </div>
                    <ImgComparisonSlider
                      className="relative sm:h-full max-h-full z-20"
                      value={50}
                    >
                      <img
                        className="sm:h-full max-h-full w-auto"
                        slot="first"
                        src={URL.createObjectURL(fileActive.file)}
                        alt="original-image"
                        style={{ height: 505, width: 763 }}
                      />
                      <img
                        className="sm:h-full max-h-full w-auto"
                        slot="second"
                        src={
                          preview
                            ? preview
                            : URL.createObjectURL(fileActive.file)
                        }
                        alt="enhanced-image"
                        style={{ height: 505, width: 763 }}
                      />
                    </ImgComparisonSlider>

                    <div className="absolute z-30 sm:px-1.5 sm:py-0.5 px-2 py-1 text-white bg-gray-900 sm:rounded-[10px] rounded-md sm:bottom-2 sm:right-2 right-3 bg-opacity-60">
                      <p className="font-semibold text-[10px] leading-[14px] sm:S10B text-sm">
                        Sau
                      </p>
                    </div>
                  </div>
                  <div className="sm:h-full h-full max-h-full z-10 top-0 left-0">
                    <img
                      className="max-h-full sm:h-full max-h-full sm:w-auto w-auto"
                      src={URL.createObjectURL(fileActive.file)}
                      alt="original-image"
                      style={{ height: 505, width: 763 }}
                    />
                  </div>
                </div>
                <div className="sm:hidden absolute bottom-4 left-4 z-10 justify-center gap-2 flex">
                  <div
                    className="pointer-events-none rounded-full w-9 h-9 flex justify-center items-center"
                    style={{ backgroundColor: "rgba(37, 38, 56, 0.36)" }}
                  >
                    <div
                      color="white"
                      //mode="outline"
                      className="sc-eac7f02c-0 ftbnLb text-center opacity-50 text-white"
                    >
                      <svg
                        className="align-middle opacity-50 text-white"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g>
                          <path
                            d="M7.50015 11.5077C7.38197 11.5078 7.26494 11.4845 7.1558 11.4392C7.04665 11.3939 6.94753 11.3275 6.86415 11.2437L3.86415 8.24373C3.69539 8.07495 3.60059 7.84605 3.60059 7.60737C3.60059 7.3687 3.69539 7.13979 3.86415 6.97101L6.86415 3.97101C7.03409 3.80785 7.26124 3.71782 7.49682 3.72026C7.7324 3.72271 7.95763 3.81743 8.12415 3.98409C8.29067 4.15075 8.3852 4.37606 8.38744 4.61164C8.38969 4.84722 8.29947 5.07429 8.13615 5.24409L5.77215 7.60809L8.13615 9.9721C8.26186 10.098 8.34745 10.2583 8.38211 10.4327C8.41677 10.6072 8.39895 10.788 8.3309 10.9524C8.26284 11.1168 8.14761 11.2573 7.99975 11.3562C7.85189 11.4551 7.67804 11.5076 7.50015 11.5077Z"
                            fill="white"
                          />
                          <path
                            d="M13.5002 19.5081H5.50035C5.26166 19.5081 5.03274 19.4133 4.86396 19.2445C4.69517 19.0757 4.60035 18.8468 4.60035 18.6081C4.60035 18.3694 4.69517 18.1405 4.86396 17.9717C5.03274 17.803 5.26166 17.7081 5.50035 17.7081H13.5002C14.7852 17.7695 16.0424 17.3205 16.9977 16.4588C17.9531 15.5972 18.5291 14.3928 18.6002 13.1083C18.5293 11.8236 17.9534 10.619 16.998 9.75717C16.0427 8.89533 14.7853 8.44612 13.5002 8.50749H4.50015C4.26146 8.50749 4.03294 8.41252 3.86415 8.24373C3.69539 8.07495 3.60059 7.84605 3.60059 7.60737C3.60059 7.3687 3.69539 7.13979 3.86415 6.97101C4.03294 6.80223 4.26146 6.70749 4.50015 6.70749H13.5002C15.2627 6.64581 16.9781 7.28452 18.2711 8.48397C19.5641 9.68343 20.3295 11.346 20.4002 13.1083C20.3293 14.8704 19.5637 16.5327 18.2707 17.732C16.9778 18.9312 15.2626 19.5698 13.5002 19.5081Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none rounded-full w-9 h-9 flex justify-center items-center"
                    style={{ backgroundColor: "rgba(37, 38, 56, 0.36)" }}
                  >
                    <div
                      color="inherit"
                      //mode="outline"
                      className="sc-eac7f02c-0 bRLGlB text-center opacity-50 text-white"
                    >
                      <svg
                        className="align-middle opacity-50 text-white"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.5006 11.5077C16.6188 11.5078 16.7358 11.4845 16.8449 11.4392C16.9541 11.3939 17.0532 11.3275 17.1366 11.2437L20.1366 8.24373C20.3053 8.07495 20.4002 7.84605 20.4002 7.60737C20.4002 7.3687 20.3053 7.13979 20.1366 6.97101L17.1366 3.97101C16.9666 3.80785 16.7395 3.71782 16.5039 3.72026C16.2683 3.72271 16.0431 3.81743 15.8766 3.98409C15.7101 4.15075 15.6155 4.37606 15.6133 4.61164C15.6111 4.84722 15.7013 5.07429 15.8646 5.24409L18.2286 7.60809L15.8646 9.9721C15.7389 10.098 15.6533 10.2583 15.6186 10.4327C15.584 10.6072 15.6018 10.788 15.6698 10.9524C15.7379 11.1168 15.8531 11.2573 16.001 11.3562C16.1488 11.4551 16.3227 11.5076 16.5006 11.5077Z"
                          fill="white"
                        />
                        <path
                          d="M10.5006 19.5081H18.5004C18.7391 19.5081 18.968 19.4133 19.1368 19.2445C19.3056 19.0757 19.4004 18.8468 19.4004 18.6081C19.4004 18.3694 19.3056 18.1405 19.1368 17.9717C18.968 17.803 18.7391 17.7081 18.5004 17.7081H10.5006C9.21555 17.7695 7.95833 17.3205 7.003 16.4588C6.04766 15.5972 5.47167 14.3928 5.40059 13.1083C5.47146 11.8236 6.04735 10.619 7.00271 9.75717C7.95806 8.89533 9.2154 8.44612 10.5006 8.50749L19.5006 8.50749C19.7393 8.50749 19.9678 8.41252 20.1366 8.24373C20.3053 8.07495 20.4002 7.84605 20.4002 7.60737C20.4002 7.3687 20.3053 7.13979 20.1366 6.97101C19.9678 6.80223 19.7393 6.70749 19.5006 6.70749L10.5006 6.70749C8.73799 6.64581 7.02268 7.28452 5.72968 8.48397C4.43668 9.68343 3.6712 11.346 3.60059 13.1083C3.67144 14.8704 4.43704 16.5327 5.73001 17.732C7.02298 18.9312 8.73815 19.5698 10.5006 19.5081Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 flex justify-between absolute z-20 hidden bottom-2 w-full">
                  <div className="flex w-full justify-between cursor-auto">
                    <div className="divide-x flex">
                      <div className="p-1 bg-white inline-flex items-center rounded-l">
                        <button
                          type="button"
                          className="w-10 h-10 rounded bg-white relative group border inline-flex justify-center items-center hover:bg-primary-hover-container text-disabled text-opacity-50 border-0 hover:bg-white w-8 h-8"
                          disabled
                        >
                          <span className="absolute text-white bg-base-content-primary font-normal capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition lg:group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent mb-3">
                            Hoàn tác
                          </span>
                          <div className="inline-block">
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
                      </div>
                      <div className="p-1 bg-white inline-flex items-center rounded-r">
                        <button
                          type="button"
                          className="w-10 h-10 rounded bg-white relative group border inline-flex justify-center items-center hover:bg-primary-hover-container text-disabled text-opacity-50 border-0 hover:bg-white w-8 h-8"
                          disabled
                        >
                          <span className="absolute text-white bg-base-content-primary font-normal capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition lg:group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent mb-3">
                            Làm lại
                          </span>
                          <div className="inline-block">
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
                  </div>
                  <div className="hidden">
                    <div className="lg:flex w-auto hidden gap-2">
                      <button className="block w-full py-3 px-4 bg-secondary hover:bg-neutral-ink-100 group relative cursor-pointer text-base-content rounded-lg font-semibold p-2 capitalize group !w-auto rounded-lg relative h-10 !pl-3 !pr-4 py-2 hover:!bg-neutral-ink-500 text-white justify-center items-center gap-1 inline-flex !bg-neutral-ink-600 text-sm font-semibold transition-all duration-100">
                        <span className="absolute left-1/2 -translate-x-1/2 text-white bg-base-content-primary capitalize rounded-lg text-sm py-2 px-4 w-max pointer-events-none opacity-0 transition sm:group-hover:opacity-100 bottom-full mb-2 after:absolute after:border-4 after:border-solid after:border-r-transparent after:border-l-transparent after:top-full after:left-1/2 after:-ml-1 after:border-t-base-content-primary after:border-b-transparent normal-case">
                          Ảnh mới
                        </span>
                        <div
                          color="inherit"
                          //mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={24}
                            height={24}
                            viewBox="0 0 48 48"
                            fill="none"
                          >
                            <path
                              d="M24.0605 10L24.0239 38"
                              stroke="#333"
                              strokeWidth={4}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 24L38 24"
                              stroke="#333"
                              strokeWidth={4}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="font-semibold text-[14px] leading-[18px]">
                          Ảnh mới
                        </p>
                      </button>
                      <div className="w-40 h-10">
                        <div className="w-full h-full relative hidden flex justify-center">
                          <div className="bottom-0 w-auto flex justify-center absolute z-20 pointer-events-auto">
                            <div className="relative" data-headlessui-state="">
                              <button
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                id="headlessui-popover-button-:r5b:"
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
                  </div>
                </div>
              </div>
              <div className="sm:w-[280px] w-full bg-white sm:border-t border-1 border-neutral-ink-100 py-3 flex flex-col relative sm:h-full">
                <div className="sm:overflow-y-auto sm:h-full flex flex-col justify-end sm:mb-20 hide-scrollbars">
                  <div className="flex-auto px-3 mt-4 hidden sm:block">
                    <p className="font-semibold text-[12px] leading-[16px] mb-2 text-neutral-ink-500">
                      Chọn AI Cải thiện
                    </p>
                    <div className="py-2 flex flex-col gap-1">
                      <div
                        className="bg-blue-100 py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 rounded-lg"
                        onClick={() => setTab(0)}
                      >
                        <div
                          color="inherit"
                          //mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                        >
                          {tab === 0 ? (
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <circle cx={8} cy={8} r={7} fill="#0051EE" />
                              <path
                                d="M5 8.28272L6.81978 10.0341C7.02638 10.2329 7.3575 10.2176 7.54491 10.0006L11 6"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                            Tiêu chuẩn{" "}
                          </p>
                          <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500 whitespace-nowrap text-ellipsis overflow-hidden w-[212px]">
                            Phù hợp cho các trường hợp sử dụng chung
                          </p>
                        </div>
                      </div>
                      {/* <div className="py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 rounded-lg">
                        <div
                          color="inherit"
                          //mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                        >
                          <svg
                            className="align-middle text-neutral-ink-200"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                            Hình ảnh nghệ thuật{" "}
                          </p>
                          <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500 whitespace-nowrap text-ellipsis overflow-hidden w-[212px]">
                            Phù hợp cho nghệ thuật kỹ thuật số, CGI, anime...
                          </p>
                        </div>
                      </div>
                      <div className="py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 rounded-lg">
                        <div
                          color="inherit"
                          //mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                        >
                          <svg
                            className="align-middle text-neutral-ink-200"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                            Khôi phục{" "}
                          </p>
                          <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500 whitespace-nowrap text-ellipsis overflow-hidden w-[212px]">
                            Phù hợp cho ảnh cũ &amp; bị hỏng
                          </p>
                        </div>
                      </div> */}
                      <div
                        className="py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 rounded-lg"
                        onClick={() => setTab(1)}
                      >
                        <div
                          color="inherit"
                          //mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                        >
                          {tab === 1 ? (
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <circle cx={8} cy={8} r={7} fill="#0051EE" />
                              <path
                                d="M5 8.28272L6.81978 10.0341C7.02638 10.2329 7.3575 10.2176 7.54491 10.0006L11 6"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                            Colorize{" "}
                          </p>
                          <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500 whitespace-nowrap text-ellipsis overflow-hidden w-[212px]">
                            For monochrome photo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:hidden mt-3 px-3 mb-3">
                    <div className="mt-1.5 rounded-lg bg-neutral-ink-100 py-1.5 px-2.5 flex items-center relative">
                      <div className="hidden absolute z-10 bottom-14 left-0 w-full bg-white rounded-lg shadow-[0px_2px_8px_rgba(32,_52,_89,_0.12)]">
                        <div className="bg-blue-100 py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 group relative">
                          <div
                            color="inherit"
                            //mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                          >
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <circle cx={8} cy={8} r={7} fill="#0051EE" />
                              <path
                                d="M5 8.28272L6.81978 10.0341C7.02638 10.2329 7.3575 10.2176 7.54491 10.0006L11 6"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                              Tiêu chuẩn{" "}
                            </p>
                            <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500">
                              Phù hợp cho các trường hợp sử dụng chung
                            </p>
                          </div>
                        </div>
                        <div className="py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 group relative">
                          <div
                            color="inherit"
                            //mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                          >
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                              Hình ảnh nghệ thuật{" "}
                            </p>
                            <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500">
                              Phù hợp cho nghệ thuật kỹ thuật số, CGI, anime...
                            </p>
                          </div>
                        </div>
                        <div className="py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 group relative">
                          <div
                            color="inherit"
                            //mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                          >
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                              Khôi phục{" "}
                            </p>
                            <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500">
                              Phù hợp cho ảnh cũ &amp; bị hỏng
                            </p>
                          </div>
                        </div>
                        <div className="py-2 flex gap-2 items-center cursor-pointer hover:bg-blue-100 px-2 group relative">
                          <div
                            color="inherit"
                            //mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center text-neutral-ink-200"
                          >
                            <svg
                              className="align-middle text-neutral-ink-200"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <circle cx={9} cy={9} r="8.5" stroke="#D9D9D9" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 inline">
                              Colorize{" "}
                            </p>
                            <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500">
                              For monochrome photo
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 flex-auto">
                        <p className="font-semibold text-[14px] leading-[18px]">
                          Tiêu chuẩn
                        </p>
                        <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-500">
                          Phù hợp cho các trường hợp sử dụng chung
                        </p>
                      </div>
                      <div
                        color="inherit"
                        //mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 48 48"
                          fill="none"
                        >
                          <path
                            d="M13 30L25 18L37 30"
                            stroke="#333"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="px-3 flex gap-2 sm:absolute bottom-3 right-0 w-full sm:flex-col sm:border-t border-neutral-ink-100 sm:pt-3"
                  onClick={handleCallData}
                >
                  <button className="block w-full py-3 px-4 bg-secondary hover:bg-neutral-ink-100 group relative cursor-pointer text-base-content rounded-lg font-semibold p-2 capitalize h-[52px] sm:!h-12 group sm:hidden rounded-lg relative !pl-3 !pr-4 py-2 justify-center items-center gap-1 inline-flex  text-sm font-semibold transition-all duration-100">
                    <div
                      color="inherit"
                      //mode="outline"
                      className="sc-eac7f02c-0 bRLGlB text-center"
                    >
                      <svg
                        className="align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          d="M24.0605 10L24.0239 38"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 24L38 24"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-[16px] leading-[20px]">
                      Ảnh mới
                    </p>
                  </button>
                  <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer rounded-lg h-[52px] sm:!h-12">
                    <p className="font-semibold text-[16px] leading-[20px]">
                      Cải thiện
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* <div className="opacity-0 invisible transition-all ease-in-out duration-100 absolute top-0 left-0 w-full">
        <div className="flex flex-col items-center pt-32">
          <div className="bg-white rounded-3xl lg:p-6 p-4 text-center">
            <div className="border-2 border-dashed border-neutral-ink-200 rounded-3xl p-8">
              <div className="relative text-center lg:w-[370px] max-w-md mx-auto">
                <div
                  color="#8C8D9C"
                  //mode="outline"
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
                <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer py-5 !rounded-full text-xl shadow-[0px_4px_32px_rgba(43,61,227,0.24)]">
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
                        src="https://assets.snapedit.app/images/enhance/enhance-demo-1.jpg"
                        alt="sample"
                        className="object-cover w-full h-full"
                      />
                    </button>
                  </li>
                  <li className="inline-block">
                    <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                      <img
                        src="https://assets.snapedit.app/images/enhance/enhance-demo-2.jpg"
                        alt="sample"
                        className="object-cover w-full h-full"
                      />
                    </button>
                  </li>
                  <li className="inline-block">
                    <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                      <img
                        src="https://assets.snapedit.app/images/enhance/enhance-demo-3.jpeg"
                        alt="sample"
                        className="object-cover w-full h-full"
                      />
                    </button>
                  </li>
                  <li className="inline-block">
                    <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                      <img
                        src="https://assets.snapedit.app/images/enhance/enhance-demo-4.jpg"
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
      </div> */}
    </div>
  );
}
