"use client";

import { Footer } from "@/components/Footer";
import { useDataStore } from "@/stores/useDataStore";
import classNames from "classnames";
import { useRef, useState } from "react";

function getColor(color: number) {
  if (color == 3) {
    return "rgb(0, 0, 0)";
  } else if (color == 4) {
    return "rgb(255, 255, 255)";
  } else if (color == 5) {
    return "rgb(249, 84, 84)";
  } else if (color == 6) {
    return "rgb(68, 129, 248)";
  } else if (color == 7) {
    return "rgb(249, 201, 131)";
  } else if (color == 8) {
    return "rgb(255, 174, 189)";
  } else if (color == 9) {
    return "rgb(244, 100, 54)";
  } else if (color == 10) {
    return "rgb(155, 150, 100)";
  } else if (color == 11) {
    return "rgb(72, 255, 167)";
  } else if (color == 12) {
    return "rgb(103, 2, 231)";
  }

  return "";
}

export default function Upload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = useDataStore((state: any) => state.data);
  const [tab, setTab] = useState(0);
  const [color, setColor] = useState(1);

  const handleClick = () => {
    fileInputRef.current?.click(); // gọi click vào input
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);

      const formData = new FormData();
      formData.append("input_image", selectedFile);
      const response = await fetch("/api/rmbg", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
          user_agent: data.user_agent,
        },
        body: formData,
      });

      const base64 = await response.json();
      setPreview(base64);
      setTab(1);
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
        {file ? (
          <div>
            <div className="pb-10 lg:pb-52 bg-blue-50 pt-6">
              <div className="mt-[64px] container lg:space-y-4">
                <div className="relative !z-20">
                  <div className="shadow-[0px_-2px_8px_rgba(32,_52,_89,_0.24)] fixed z-[9999] bottom-0 left-0 lg:hidden w-full p-4 bg-white border-t">
                    <div
                      className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer py-5 !rounded-full text-xl shadow-[0px_4px_32px_rgba(43,61,227,0.24)]"
                      onClick={handleClick}
                    >
                      <span className="inline-flex mr-2">
                        <div className="inline-block text-white">
                          <svg
                            width={29}
                            height={28}
                            viewBox="0 0 29 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25 17.5V22.1667C25 22.7855 24.7542 23.379 24.3166 23.8166C23.879 24.2542 23.2855 24.5 22.6667 24.5H6.33333C5.71449 24.5 5.121 24.2542 4.68342 23.8166C4.24583 23.379 4 22.7855 4 22.1667V17.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.3334 9.33333L14.5001 3.5L8.66675 9.33333"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.5 3.5V17.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
                        Tải lên hình ảnh
                      </span>
                    </div>
                  </div>
                  <div className="hidden p-4 shadow-md lg:block rounded-xl">
                    <div className="py-6 border-dashed border border-gray-300 rounded-xl flex justify-center items-center space-x-6">
                      <div className="w-64">
                        <div
                          className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer py-5 !rounded-full text-xl shadow-[0px_4px_32px_rgba(43,61,227,0.24)] h-14"
                          onClick={handleClick}
                        >
                          <span className="inline-flex mr-2">
                            <div className="inline-block text-white">
                              <svg
                                width={29}
                                height={28}
                                viewBox="0 0 29 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M25 17.5V22.1667C25 22.7855 24.7542 23.379 24.3166 23.8166C23.879 24.2542 23.2855 24.5 22.6667 24.5H6.33333C5.71449 24.5 5.121 24.2542 4.68342 23.8166C4.24583 23.379 4 22.7855 4 22.1667V17.5"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.3334 9.33333L14.5001 3.5L8.66675 9.33333"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.5 3.5V17.5"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="font-semibold text-[20px] leading-[28px] tracking-[0.02em]">
                            Tải lên hình ảnh
                          </span>
                        </div>
                      </div>
                      <span className="font-semibold text-base-content">
                        Hoặc chỉ cần thả hình ảnh vào đây
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="py-2 px-[10px] bg-blue-200 text-[#00349A] text-sm font-normal rounded flex items-center space-x-[10px]">
                    <div className="inline-block text-blue-2 flex-shrink-0 w-4">
                      <svg
                        className="w-full h-full"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 0.75C3.55375 0.75 0.75 3.55375 0.75 7C0.75 10.4462 3.55375 13.25 7 13.25C10.4462 13.25 13.25 10.4462 13.25 7C13.25 3.55375 10.4462 0.75 7 0.75ZM7 3.3125C7.1607 3.3125 7.31779 3.36015 7.4514 3.44943C7.58502 3.53871 7.68916 3.6656 7.75065 3.81407C7.81215 3.96253 7.82824 4.1259 7.79689 4.28351C7.76554 4.44112 7.68815 4.58589 7.57452 4.69952C7.46089 4.81315 7.31612 4.89054 7.15851 4.92189C7.0009 4.95324 6.83753 4.93715 6.68907 4.87565C6.5406 4.81416 6.41371 4.71002 6.32443 4.5764C6.23515 4.44279 6.1875 4.2857 6.1875 4.125C6.1875 3.90951 6.2731 3.70285 6.42548 3.55048C6.57785 3.3981 6.78451 3.3125 7 3.3125ZM8.5 10.375H5.75C5.61739 10.375 5.49021 10.3223 5.39645 10.2286C5.30268 10.1348 5.25 10.0076 5.25 9.875C5.25 9.74239 5.30268 9.61521 5.39645 9.52145C5.49021 9.42768 5.61739 9.375 5.75 9.375H6.625V6.625H6.125C5.99239 6.625 5.86521 6.57232 5.77145 6.47855C5.67768 6.38479 5.625 6.25761 5.625 6.125C5.625 5.99239 5.67768 5.86521 5.77145 5.77145C5.86521 5.67768 5.99239 5.625 6.125 5.625H7.125C7.25761 5.625 7.38479 5.67768 7.47855 5.77145C7.57232 5.86521 7.625 5.99239 7.625 6.125V9.375H8.5C8.63261 9.375 8.75979 9.42768 8.85355 9.52145C8.94732 9.61521 9 9.74239 9 9.875C9 10.0076 8.94732 10.1348 8.85355 10.2286C8.75979 10.3223 8.63261 10.375 8.5 10.375Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span>
                      Đừng quên tải xuống các tệp của bạn. Chúng sẽ bị loại bỏ
                      tự động sau 60 phút.
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="rounded-xl shadow-md border bg-white border-[#ccc]">
                    <div className="lg:flex relative after:absolute after:left-0 after:bottom-0 after:w-full after:border-b grid grid-cols-2 border-[#ccc]">
                      <div className="lg:w-56 relative z-10">
                        <div
                          className={`font-semibold text-[14px] leading-[18px] flex items-center justify-center py-3 relative min-h-[44px] cursor-pointer text-center space-x-2  after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 text-blue-500 ${
                            tab === 0 ? "after:block" : "after:hidden"
                          }`}
                          onClick={() => setTab(0)}
                        >
                          <span className="inline-flex">
                            <div className="inline-block w-5">
                              <svg
                                className="w-full h-full"
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.5 19H3.5C2.96957 19 2.46086 18.7893 2.08579 18.4142C1.71071 18.0391 1.5 17.5304 1.5 17V3C1.5 2.46957 1.71071 1.96086 2.08579 1.58579C2.46086 1.21071 2.96957 1 3.5 1H17.5C18.0304 1 18.5391 1.21071 18.9142 1.58579C19.2893 1.96086 19.5 2.46957 19.5 3V17C19.5 17.5304 19.2893 18.0391 18.9142 18.4142C18.5391 18.7893 18.0304 19 17.5 19Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.621 5.879C12.9123 6.15454 13.1454 6.48569 13.3066 6.85288C13.4677 7.22006 13.5536 7.61582 13.5592 8.01677C13.5648 8.41772 13.4899 8.81572 13.339 9.18724C13.1882 9.55876 12.9643 9.89627 12.6808 10.1798C12.3973 10.4633 12.0598 10.6872 11.6882 10.838C11.3167 10.9889 10.9187 11.0638 10.5178 11.0582C10.1168 11.0526 9.72106 10.9667 9.35388 10.8056C8.98669 10.6444 8.65554 10.4113 8.38 10.12C7.85008 9.5513 7.56158 8.79911 7.5753 8.02191C7.58901 7.2447 7.90386 6.50316 8.45351 5.95351C9.00316 5.40386 9.7447 5.08901 10.5219 5.0753C11.2991 5.06158 12.0513 5.35008 12.62 5.88"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.5 19L4.857 17.216C5.03824 16.3092 5.52806 15.4933 6.24312 14.9069C6.95817 14.3206 7.85429 14.0001 8.779 14H12.221C13.1457 14.0001 14.0418 14.3206 14.7569 14.9069C15.4719 15.4933 15.9618 16.3092 16.143 17.216L16.5 19"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Gốc</span>
                        </div>
                      </div>
                      <div className="lg:w-56 relative z-10">
                        <div
                          className={`font-semibold text-[14px] leading-[18px] flex items-center justify-center py-3 relative min-h-[44px] cursor-pointer text-center space-x-2  after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bg-blue-500 after:bottom-0 after:left-0 text-blue-500 ${
                            tab === 1 ? "after:block" : "after:hidden"
                          }`}
                          onClick={() => setTab(1)}
                        >
                          <span className="inline-flex">
                            <div className="inline-block w-5">
                              <svg
                                className="w-full h-full"
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.52695 16.977H6.93395C7.46434 16.9769 7.97296 16.7661 8.34795 16.391L17.0719 7.66704C17.4469 7.29199 17.6575 6.78337 17.6575 6.25304C17.6575 5.72271 17.4469 5.2141 17.0719 4.83904L13.7729 1.54004C13.3979 1.1651 12.8893 0.954468 12.3589 0.954468C11.8286 0.954468 11.32 1.1651 10.9449 1.54004L1.51795 10.967C1.143 11.3421 0.932373 11.8507 0.932373 12.381C0.932373 12.9114 1.143 13.42 1.51795 13.795L4.11395 16.391C4.48795 16.766 4.99595 16.977 5.52695 16.977V16.977Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.08997 6.39001L12.22 12.52"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M18.9999 16.98H6.92993"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Đã loại bỏ nền</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:min-h-[400px] lg:grid lg:grid-cols-9 border-[#ccc]">
                      <div className="lg:col-span-7 lg:border-r flex justify-center items-center p-4 lg:p-6 border-[#ccc]">
                        <div className={tab === 0 ? "" : "hidden"}>
                          {file && (
                            <img
                              src={URL.createObjectURL(file)}
                              alt="original image"
                              className="max-h-[465px]"
                            />
                          )}
                        </div>
                        <div
                          className={classNames("", {
                            hidden: tab !== 1,
                            "color-picker-transparent": color === 1,
                            "color-picker-conic-gradient": color === 2,
                          })}
                          style={
                            getColor(color)
                              ? { background: getColor(color) }
                              : {}
                          }
                        >
                          {" "}
                          <div className="relative">
                            {preview && (
                              <img
                                src={"data:image/png;base64," + preview}
                                alt="removed"
                                className="max-h-[465px]"
                              />
                            )}
                            <div className="w-full h-full relative hidden flex justify-center">
                              <div className="bottom-2 w-auto flex justify-center absolute z-20 pointer-events-auto">
                                <div
                                  className="relative"
                                  data-headlessui-state=""
                                >
                                  <button
                                    type="button"
                                    aria-expanded="false"
                                    data-headlessui-state=""
                                    id="headlessui-popover-button-:r4e:"
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
                      <div className="lg:col-span-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:pb-6 border-[#ccc]">
                        <div className="lg:mb-20">
                          <div className="hidden lg:px-3 lg:grid lg:grid-cols-6 lg:gap-2 items-end ">
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] color-picker-transparent ${
                                  color === 1
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                onClick={() => setColor(1)}
                              />
                            </div>
                            <div className="col-span-1">
                              <div className="relative z-10">
                                <button
                                  className="outline-none"
                                  type="button"
                                />
                                <button
                                  onClick={() => setColor(2)}
                                  className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] color-picker-conic-gradient ${
                                    color === 2
                                      ? "border-blue-500 after:opacity-100"
                                      : "border-white after:opacity-0"
                                  }`}
                                />
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
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 3
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{ backgroundColor: "rgb(0, 0, 0)" }}
                                onClick={() => setColor(3)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 4
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                }}
                                onClick={() => setColor(4)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 5
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{ backgroundColor: "rgb(249, 84, 84)" }}
                                onClick={() => setColor(5)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 6
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{ backgroundColor: "rgb(68, 129, 248)" }}
                                onClick={() => setColor(6)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 7
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{
                                  backgroundColor: "rgb(249, 201, 131)",
                                }}
                                onClick={() => setColor(7)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 8
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{
                                  backgroundColor: "rgb(255, 174, 189)",
                                }}
                                onClick={() => setColor(8)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 9
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{ backgroundColor: "rgb(244, 100, 54)" }}
                                onClick={() => setColor(9)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 10
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{
                                  backgroundColor: "rgb(155, 150, 100)",
                                }}
                                onClick={() => setColor(10)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 11
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{ backgroundColor: "rgb(72, 255, 167)" }}
                                onClick={() => setColor(11)}
                              />
                            </div>
                            <div className="col-span-1">
                              <button
                                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition relative after:absolute after:w-8 after:h-8 after:rounded-full after:border-white after:border-2 after:left-0 after:top-0 hover:border-blue-500 hover:after:opacity-100 shadow-[0px_2px_8px_rgba(32,52,89,0.16)] ${
                                  color === 12
                                    ? "border-blue-500 after:opacity-100"
                                    : "border-white after:opacity-0"
                                }`}
                                style={{ backgroundColor: "rgb(103, 2, 231)" }}
                                onClick={() => setColor(12)}
                              />
                            </div>
                          </div>
                          <div className="text-center mb-4 lg:mb-0">
                            <button className="space-x-2 inline-flex mx-auto H16B text-blue-500 pb-1 border-b border-blue-500 border-dashed disabled:text-neutral-ink-400">
                              <div className="inline-block">
                                <svg
                                  width={21}
                                  height={20}
                                  viewBox="0 0 21 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 2.5H3C1.89543 2.5 1 3.39543 1 4.5V15.5C1 16.6046 1.89543 17.5 3 17.5H8"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1 5.5C1 3.84315 2.34315 2.5 4 2.5H4.5003V5.669H1V5.5Z"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="4.49976"
                                    y="5.66858"
                                    width="3.5003"
                                    height="2.88824"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={1}
                                    y="8.55823"
                                    width="3.5003"
                                    height="2.88824"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="4.49976"
                                    y="11.444"
                                    width="3.5003"
                                    height="2.88824"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M1 14.3309H4.5003V17.4999H4C2.34315 17.4999 1 16.1568 1 14.4999V14.3309Z"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={8}
                                    y="1.5"
                                    width={12}
                                    height={17}
                                    rx={2}
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span>Chỉnh sửa nền</span>
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 lg:block lg:space-y-6 px-4 lg:px-6 pb-4 lg:pb-0 lg:w-full">
                          <div className="flex flex-col gap-2">
                            <button className="block w-full py-3 px-4 bg-secondary hover:bg-neutral-ink-100 group relative cursor-pointer text-base-content rounded-lg font-semibold p-2 capitalize flex gap-2 justify-center items-center z-10">
                              <div
                                color="inherit"
                                //mode="outline"
                                className="sc-eac7f02c-0 bRLGlB text-center"
                              >
                                <svg
                                  className="align-middle"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    strokeWidth="1.5"
                                    d="M12.6 8.1 9 11.7 5.4 8M9 1v10.7M17 13.4a3.6 3.6 0 0 1-3.6 3.6H4.6A3.6 3.6 0 0 1 1 13.4"
                                    stroke="currentColor"
                                  />
                                </svg>
                              </div>
                              Tải xuống
                            </button>
                            <div className="text-center text-gray-600 text-sm font-normal leading-tight">
                              Xem trước ảnh 700 x 463
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-zinc-100 to-zinc-100 lg:pb-[120px] pb-[80px] pt-14 lg:pt-20">
              <div className="max-w-[1200px] m-auto tablet:px-10 mobile:px-4 lg:px-0">
                <div className="mb-6 text-center lg:mb-12">
                  <h2 className="text-[#212B39] lg:text-[56px] lg:font-bold lg:leading-[72px] text-[32px] font-semibold leading-[44px]">
                    Câu hỏi thường gặp
                  </h2>
                </div>
                <ul className="border-t divide-y">
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r3m:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Xóa nền ảnh trên Snapedit là gì?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r3o:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Công cụ xóa nền trên SnapEdit hoạt động như thế nào?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r3q:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Làm cách nào để chỉnh sửa nền ảnh với SnapEdit?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r3s:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Công cụ này có miễn phí hay không ?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r3u:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Tôi có thể sử dụng SnapEdit trên những trình duyệt nào?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r40:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        SnapEdit hỗ trợ những định dạng hình ảnh nào?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r42:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Tôi có bị giới hạn số lần sử dụng hay không ?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                      id="headlessui-disclosure-button-:r44:"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                        Xóa nền bằng SnapEdit có nhanh không?
                      </h3>
                      <div className="w-4 text-neutral">
                        <div className="inline-block">
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
                      </div>
                    </button>
                  </li>
                </ul>
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

      <Footer />
    </div>
  );
}
