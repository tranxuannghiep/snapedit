"use client";
import { Image } from "@/components/common/Image/Index";
import { fetchData } from "@/libs/fetchData";
import { useDataStore } from "@/stores/useDataStore";
import { useDownloadStore } from "@/stores/useDownloadStore";
import { Popover } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export function Header() {
  const data = useDownloadStore((state: any) => state.data);
  const idDownload = useDownloadStore((state: any) => state.idDownload);
  const pathname = usePathname();
  const isDownload = ["/enhance/upload", "/remove-object/upload"].includes(
    pathname
  );

  const isTry = ["/"].includes(pathname);
  const fileDownload = React.useMemo(() => {
    if (!data || !data.length || !idDownload) return null;
    const file = data.find((v: any) => v.id === idDownload);
    if (!file) return null;
    return file;
  }, [data, idDownload]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileDownload.file;
    link.download = "download.png";
    link.click();
  };

  const setData = useDataStore((state: any) => state.setData);

  const fetchDataAndUpdate = React.useCallback(async () => {
    const res = await fetchData();
    setData(res);
  }, [setData]);

  React.useEffect(() => {
    // Gọi lần đầu
    fetchDataAndUpdate();

    const interval = setInterval(fetchDataAndUpdate, (1 * 60 + 55) * 1000); //1p 55s

    // Xóa interval khi unmount
    return () => clearInterval(interval);
  }, [fetchDataAndUpdate]);

  return (
    <>
      <div className="w-full h-[72px] sm:!h-[56px] items-center gap-10 py-[14px] pl-8 pr-4 fixed top-0 z-[9999] transition-all lg:flex hidden pointer-events-auto bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-md">
        <div>
          <Link href="/" className="w-24">
            <span className="w-24">
              <Image
                src="https://assets.snapedit.app/images/landing/snapedit-logo.svg"
                alt="Snapedit-logo"
                className="w-22 h-8"
              />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4 relative flex-1 grow">
          <div className="relative" data-headlessui-state="">
            <Popover className="relative">
              <Popover.Button className="focus:outline-none focus:ring-0">
                <div className="relative">
                  <span className="hover:text-neutral-ink-500 px-3 py-1.5 rounded-lg items-center gap-1 justify-center flex group">
                    <p className="font-semibold text-[16px] leading-[20px] inline">
                      Sản phẩm AI
                    </p>
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-neutral-ink-500"
                    >
                      <svg
                        className="align-middle group-hover:text-neutral-ink-500"
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M7.16634 8.33301L10.4997 11.6663L13.833 8.33301"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
              </Popover.Button>
              <Popover.Panel>
                <div className="absolute" tabIndex={-1}>
                  <div className="h-auto bg-white rounded-2xl shadow flex w-[480px]">
                    <div className="p-2">
                      <Link href="/tools">
                        <button className="cursor-pointer self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 20 20"
                              >
                                <defs>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html: ".cls-1{fill:currentColor;}",
                                    }}
                                  />
                                </defs>
                                <path
                                  className="cls-1"
                                  strokeWidth="0.1"
                                  d="M5.14,3.19A2,2,0,0,0,3.19,5.14v9.72a2,2,0,0,0,1.95,1.95h9.72a2,2,0,0,0,1.95-1.95V10.5a.5.5,0,0,1,.5-.5h.94a.5.5,0,0,1,.5.5v4.36a3.89,3.89,0,0,1-3.89,3.89H5.14a3.89,3.89,0,0,1-3.89-3.89V5.14A3.89,3.89,0,0,1,5.14,1.25H9.5a.5.5,0,0,1,.5.5v.94a.5.5,0,0,1-.5.5Zm7.29-1.44a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v.94a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5Zm4.88-.5a.5.5,0,0,0-.5.5v.94a.5.5,0,0,0,.5.5h.94a.5.5,0,0,0,.5-.5V1.75a.5.5,0,0,0-.5-.5Zm-.5,4.87a.5.5,0,0,1,.5-.5h.94a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5h-.94a.5.5,0,0,1-.5-.5Z"
                                />
                                <path
                                  strokeWidth="0.1"
                                  className="cls-1"
                                  d="M12.89,13.86a5,5,0,0,1-1.92.82,5.32,5.32,0,0,1-2,.12,3.05,3.05,0,0,1-1.48-.62,2.52,2.52,0,0,1-.82-1.3l0-.11,2.16-.49,0,.05a.81.81,0,0,0,.34.43,1.42,1.42,0,0,0,.62.21,2.36,2.36,0,0,0,.82-.06,2.26,2.26,0,0,0,.74-.3,1.08,1.08,0,0,0,.42-.46.72.72,0,0,0,.07-.54h0a.65.65,0,0,0-.46-.5A3.58,3.58,0,0,0,10.19,11l-1,0A3.93,3.93,0,0,1,7,10.57,2.37,2.37,0,0,1,6,9H6a2.58,2.58,0,0,1,.12-1.61,3,3,0,0,1,1-1.28,4.73,4.73,0,0,1,1.73-.77,4.73,4.73,0,0,1,2-.08,2.81,2.81,0,0,1,2.22,2l0,.07-2.08.48,0-.06a.87.87,0,0,0-.35-.43A1.2,1.2,0,0,0,10,7.08a2.1,2.1,0,0,0-.75,0,1.74,1.74,0,0,0-.66.27,1.08,1.08,0,0,0-.38.42.75.75,0,0,0,0,.49h0a.71.71,0,0,0,.45.53A2.91,2.91,0,0,0,9.73,9l.95,0a4.32,4.32,0,0,1,2.28.4,2.18,2.18,0,0,1,1,1.52h0a2.77,2.77,0,0,1-.09,1.67A3,3,0,0,1,12.89,13.86Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Tất Cả Công Cụ</span>
                          </div>
                        </button>
                      </Link>
                      <Link href="/remove-object">
                        <button className="cursor-pointer self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M8.73321 18.662H10.1402C10.6706 18.6619 11.1792 18.4511 11.5542 18.076L20.2782 9.35198C20.6532 8.97692 20.8638 8.46831 20.8638 7.93798C20.8638 7.40765 20.6532 6.89903 20.2782 6.52398L16.9792 3.22498C16.6042 2.85004 16.0955 2.6394 15.5652 2.6394C15.0349 2.6394 14.5263 2.85004 14.1512 3.22498L4.72421 12.652C4.34927 13.027 4.13864 13.5356 4.13864 14.066C4.13864 14.5963 4.34927 15.1049 4.72421 15.48L7.32021 18.076C7.69421 18.451 8.20221 18.662 8.73321 18.662V18.662Z"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.78378 9.5874L13.9138 15.7174"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M21.2062 21.5128H3.1362"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Xóa Vật Thể</span>
                          </div>
                        </button>
                      </Link>
                      <Link href="/background-remover">
                        <button className="cursor-pointer self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                fill="none"
                                viewBox="0 0 18 16"
                              >
                                <path
                                  d="m6.9168 1.75h-3.8333c-1.1046 0-2 0.89543-2 2v8.5c0 1.1046 0.89543 2 2 2h3.8333"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m1.0835 4.3908c0-1.4585 1.1823-2.6408 2.6408-2.6408h0.27608v2.6408h-2.9169z"
                                  fill="currentColor"
                                />
                                <rect
                                  x={4}
                                  y="4.3904"
                                  width="2.9169"
                                  height="2.4069"
                                  fill="currentColor"
                                />
                                <rect
                                  x="1.0835"
                                  y="6.7986"
                                  width="2.9169"
                                  height="2.4069"
                                  fill="currentColor"
                                />
                                <rect
                                  x={4}
                                  y="9.2032"
                                  width="2.9169"
                                  height="2.4069"
                                  fill="currentColor"
                                />
                                <path
                                  d="m1.0835 11.609h2.9169v2.6409h-0.27608c-1.4585 0-2.6408-1.1824-2.6408-2.6409z"
                                  fill="currentColor"
                                />
                                <rect
                                  x="6.917"
                                  y=".91663"
                                  width={10}
                                  height="14.167"
                                  rx={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Xóa Nền Ảnh</span>
                          </div>
                        </button>
                      </Link>
                      <Link href="/enhance">
                        <button className="cursor-pointer self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M10 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V14C3 13.4696 3.21071 12.9609 3.58579 12.5858C3.96086 12.2107 4.46957 12 5 12H10C10.5304 12 11.0391 12.2107 11.4142 12.5858C11.7893 12.9609 12 13.4696 12 14V19C12 19.5304 11.7893 20.0391 11.4142 20.4142C11.0391 20.7893 10.5304 21 10 21Z"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13 7H17V11"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.41 12.59L17 7"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Làm Nét Ảnh</span>
                          </div>
                        </button>
                      </Link>
                      <a href="/change-sky">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M6.98727 11.9895C7.41643 11.9895 7.8206 12.0778 8.17393 12.2553C8.30689 11.396 8.74259 10.6125 9.40242 10.0462C10.0622 9.47993 10.9027 9.16809 11.7723 9.16699C13.7548 9.16699 15.3706 10.762 15.4214 12.7362C16.0072 12.8128 16.5448 13.1008 16.933 13.546C17.3213 13.9912 17.5335 14.5629 17.5298 15.1537C17.5304 15.7973 17.2754 16.4149 16.8208 16.8706C16.3662 17.3263 15.7493 17.5828 15.1056 17.5837H6.98727C6.24656 17.5823 5.53668 17.287 5.01355 16.7627C4.49041 16.2383 4.19682 15.5277 4.19727 14.787C4.19727 13.242 5.44727 11.9895 6.98727 11.9895Z"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.98935 9.33916C5.8873 9.01673 5.83398 8.67778 5.83398 8.33333C5.83398 7.44928 6.18517 6.60143 6.8103 5.97631C7.43542 5.35119 8.28326 5 9.16732 5C10.0514 5 10.8992 5.35119 11.5243 5.97631C11.6781 6.13009 11.8153 6.29736 11.9348 6.47532"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.13379 2.33366V1.66699"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.3838 4.09219L13.8505 3.61719"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.4668 8.33398H3.13346"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.4248 3.61719L4.89147 4.09219"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Thay Đổi Bầu Trời</span>
                          </div>
                        </button>
                      </a>
                      <a href="/art-enhance">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={18}
                                height={17}
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M11.4863 3.48926H13.9347V6.00009"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.667 6.8167L13.9337 3.4917"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.16667 10.1941V12.6391C8.16667 13.1149 7.78167 13.4999 7.30583 13.4999H4.86083C4.385 13.4999 4 13.1149 4 12.6391V10.1941C4 9.71825 4.385 9.33325 4.86083 9.33325H7.30583C7.78167 9.33325 8.16667 9.71825 8.16667 10.1941Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.5 2.66667V14.3333C16.5 15.2542 15.7542 16 14.8333 16H3.16667C2.24583 16 1.5 15.2542 1.5 14.3333V2.66667C1.5 1.74583 2.24583 1 3.16667 1H14.8333C15.7542 1 16.5 1.74583 16.5 2.66667Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Làm Nét Ảnh Nghệ Thuật</span>
                          </div>
                        </button>
                      </a>
                      <a href="/convert-image">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                              >
                                <path
                                  d="M5.21191 5.67262C7.87387 3.02412 12.1789 3.03503 14.8273 5.69699C16.5809 7.4595 17.2327 10.0386 16.5269 12.4226"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.7326 15.3886C12.0371 18.005 7.731 17.9409 5.11464 15.2454C3.40316 13.4822 2.77576 10.933 3.47341 8.5769"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.72116 9.82354L3.19449 8.29688L1.66699 9.82438"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.2793 11.1769L16.806 12.7035L18.3335 11.176"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.0005 12.2017C10.9403 12.2017 11.7022 11.4398 11.7022 10.5C11.7022 9.5602 10.9403 8.79834 10.0005 8.79834C9.06069 8.79834 8.29883 9.5602 8.29883 10.5C8.29883 11.4398 9.06069 12.2017 10.0005 12.2017Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Chuyển Đổi Ảnh</span>
                          </div>
                        </button>
                      </a>
                      <a href="/blur-bg">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g
                                  id="icon-blur-on"
                                  clipPath="url(#clip0_14090_52785)"
                                >
                                  <path
                                    id="Vector"
                                    d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                                    fill="#0051EE"
                                    stroke="#0051EE"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_14090_52785">
                                    <rect width={24} height={24} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Làm Mờ Nền</span>
                          </div>
                        </button>
                      </a>
                      <Link href="/colorize">
                        <button className="cursor-pointer self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <g id="Group">
                                  <path
                                    id="Vector"
                                    d="M5.04927 12.1816L1.93094 9.06329C1.24177 8.37412 1.24177 7.25746 1.93094 6.56829L6.62594 1.87329L12.2393 7.48663L7.54427 12.1816C6.8551 12.87 5.7376 12.87 5.04927 12.1816Z"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M14.7368 9.97827C14.7368 9.97827 12.9727 11.8924 12.9727 13.0658C12.9727 14.0358 13.7668 14.8299 14.7368 14.8299C15.7068 14.8299 16.501 14.0358 16.501 13.0649C16.501 11.8924 14.7368 9.97827 14.7368 9.97827Z"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M6.62513 1.87495L5.7168 0.949951"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M12.2434 7.48328H1.44336"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_5"
                                    d="M1.85156 16.3666H9.00156"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Tô màu ảnh</span>
                          </div>
                        </button>
                      </Link>
                      <a href="/blur-face">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                              >
                                <path
                                  d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                  fill="currentColor"
                                />
                                <path
                                  d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.6673 17.1667L3.33398 3.83337"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Làm mờ khuôn mặt</span>
                          </div>
                        </button>
                      </a>
                    </div>
                    <div className="p-2">
                      <a href="/batch-processing">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <g id="Group">
                                  <path
                                    id="Vector"
                                    d="M16.4995 13.15L8.99121 16.5"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M8.99167 16.5L1.5 13.15"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M16.4995 9L8.99121 12.35"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M8.99167 12.35L1.5 9"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_5"
                                    d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Xử lý hàng loạt</span>
                          </div>
                        </button>
                      </a>
                      <a href="/remove-text">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.25 15.5H13.75"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 8.5V15.5"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.5 10.084V8.889C15.5 8.78583 15.459 8.68689 15.3861 8.61394C15.3131 8.54098 15.2142 8.5 15.111 8.5H8.889C8.78583 8.5 8.68689 8.54098 8.61394 8.61394C8.54098 8.68689 8.5 8.78583 8.5 8.889V10.085"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Xóa Chữ Trên Ảnh</span>
                          </div>
                        </button>
                      </a>
                      <a href="/remove-wire-line">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M7.23678 16.7018C7.47556 16.9324 7.66601 17.2083 7.79703 17.5133C7.92806 17.8183 7.99702 18.1463 7.99991 18.4783C8.00279 18.8102 7.93954 19.1394 7.81383 19.4467C7.68813 19.7539 7.5025 20.033 7.26777 20.2678C7.03304 20.5025 6.75391 20.6881 6.44666 20.8138C6.13942 20.9395 5.81022 21.0028 5.47828 20.9999C5.14633 20.997 4.81828 20.9281 4.51327 20.797C4.20826 20.666 3.9324 20.4756 3.70178 20.2368C3.24638 19.7653 2.9944 19.1338 3.00009 18.4783C3.00579 17.8228 3.26871 17.1958 3.73223 16.7322C4.19575 16.2687 4.82278 16.0058 5.47828 16.0001C6.13377 15.9944 6.76527 16.2464 7.23678 16.7018Z"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.2368 3.70178C20.4756 3.9324 20.666 4.20826 20.797 4.51327C20.9281 4.81828 20.997 5.14633 20.9999 5.47828C21.0028 5.81022 20.9395 6.13942 20.8138 6.44666C20.6881 6.75391 20.5025 7.03304 20.2678 7.26777C20.033 7.5025 19.7539 7.68813 19.4467 7.81383C19.1394 7.93954 18.8102 8.00279 18.4783 7.99991C18.1463 7.99702 17.8183 7.92806 17.5133 7.79703C17.2083 7.66601 16.9324 7.47556 16.7018 7.23678C16.2464 6.76527 15.9944 6.13377 16.0001 5.47828C16.0058 4.82278 16.2687 4.19575 16.7322 3.73223C17.1958 3.26871 17.8228 3.00579 18.4783 3.00009C19.1338 2.9944 19.7653 3.24638 20.2368 3.70178Z"
                                  stroke="#252638"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.5 7.5L7.5 16.5"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M19 12L12 19"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeDasharray="2 3"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Xóa Dây Điện</span>
                          </div>
                        </button>
                      </a>
                      <a href="/auto-light">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_214_3385)">
                                  <path
                                    d="M13.2409 6.75917C15.0308 8.54907 15.0308 11.4511 13.2409 13.241C11.451 15.0309 8.54895 15.0309 6.75905 13.241C4.96915 11.4511 4.96915 8.54907 6.75905 6.75917C8.54895 4.96927 11.451 4.96927 13.2409 6.75917Z"
                                    stroke="#252638"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 2.50008V1.66675"
                                    stroke="#252638"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 18.3333V17.5"
                                    stroke="#252638"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.2999 4.70007L15.8916 4.1084"
                                    stroke="#101828"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4.10828 15.8917L4.69994 15.3"
                                    stroke="#101828"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M17.5 10H18.3333"
                                    stroke="#101828"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.66663 10H2.49996"
                                    stroke="#101828"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.2999 15.3L15.8916 15.8917"
                                    stroke="#101828"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4.10828 4.1084L4.69994 4.70007"
                                    stroke="#101828"
                                    strokeWidth="1.625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_214_3385">
                                    <rect width={20} height={20} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Làm Sáng Ảnh</span>
                          </div>
                        </button>
                      </a>
                      <a href="/restore">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M14.375 6.875H17.5V3.75"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.7773 16.6035C13.0273 17.0377 12.1965 17.3452 11.3115 17.5002"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M17.0986 12.6445C16.7985 13.4733 16.3557 14.2433 15.7903 14.9195"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.68848 17.5002C7.82024 17.3485 6.98554 17.0449 6.22264 16.6035"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.20996 14.9195C3.64455 14.2433 3.20177 13.4733 2.90163 12.6445"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.49986 10C2.49986 8.01088 3.29003 6.10322 4.69656 4.6967C6.10308 3.29018 8.01073 2.5 9.99986 2.5C13.0249 2.5 15.6257 4.295 16.8115 6.875"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.3337 13.3335C13.2368 13.0897 13.0864 12.8707 12.8937 12.6927C12.5689 12.3908 12.142 12.2229 11.6987 12.2227H8.30283C7.85949 12.2227 7.43199 12.391 7.10699 12.6927C6.91533 12.871 6.76449 13.0902 6.66699 13.3335"
                                  stroke="#5C5D6B"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10 10.417C11.0355 10.417 11.875 9.57753 11.875 8.54199C11.875 7.50646 11.0355 6.66699 10 6.66699C8.96447 6.66699 8.125 7.50646 8.125 8.54199C8.125 9.57753 8.96447 10.417 10 10.417Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Phục Hồi Ảnh Cũ</span>
                          </div>
                        </button>
                      </a>
                      <a href="/easy-shadow">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={33}
                                height={32}
                                viewBox="0 0 33 32"
                                fill="none"
                              >
                                <path
                                  d="M22.8286 5.98596C23.881 7.03836 24.7158 8.28774 25.2854 9.66276C25.8549 11.0378 26.1481 12.5115 26.1481 13.9998C26.1481 15.4882 25.8549 16.9619 25.2854 18.3369C24.7158 19.7119 23.881 20.9613 22.8286 22.0137C21.7762 23.0661 20.5268 23.9009 19.1518 24.4705C17.7768 25.04 16.303 25.3332 14.8147 25.3332C13.3264 25.3332 11.8527 25.04 10.4776 24.4705C9.10262 23.9009 7.85324 23.0661 6.80084 22.0137C4.67543 19.8883 3.48138 17.0056 3.48138 13.9998C3.48138 10.9941 4.67543 8.11137 6.80084 5.98596C8.92625 3.86055 11.8089 2.6665 14.8147 2.6665C17.8205 2.6665 20.7032 3.86055 22.8286 5.98596Z"
                                  stroke="#5C5D6B"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M24.575 8.23926C24.8442 8.69545 25.0818 9.17096 25.2854 9.66253C25.8549 11.0376 26.1481 12.5113 26.1481 13.9996C26.1481 15.4879 25.8549 16.9617 25.2854 18.3367C24.7158 19.7117 23.881 20.9611 22.8286 22.0135C21.7762 23.0659 20.5268 23.9007 19.1518 24.4702C17.7768 25.0398 16.3031 25.3329 14.8147 25.3329C13.3264 25.3329 11.8527 25.0398 10.4777 24.4702C9.98609 24.2666 9.51058 24.0291 9.05438 23.7599C9.53532 24.5748 10.1203 25.333 10.8009 26.0135C11.8533 27.0659 13.1026 27.9007 14.4777 28.4702C15.8527 29.0398 17.3264 29.3329 18.8147 29.3329C20.3031 29.3329 21.7768 29.0398 23.1518 28.4702C24.5268 27.9007 25.7762 27.0659 26.8286 26.0135C27.881 24.9611 28.7158 23.7117 29.2854 22.3367C29.8549 20.9617 30.1481 19.4879 30.1481 17.9996C30.1481 16.5113 29.8549 15.0376 29.2854 13.6625C28.7158 12.2875 27.881 11.0381 26.8286 9.98573C26.1481 9.30522 25.39 8.72019 24.575 8.23926Z"
                                  fill="#5C5D6B"
                                />
                                <path
                                  d="M24.575 8.23926L24.9562 7.59334C24.6615 7.41947 24.2866 7.46702 24.0447 7.70894C23.8028 7.95086 23.7552 8.32583 23.9291 8.62046L24.575 8.23926ZM25.2854 9.66253L25.9783 9.37552V9.37552L25.2854 9.66253ZM19.1518 24.4702L18.8648 23.7773L19.1518 24.4702ZM10.4777 24.4702L10.1906 25.1632H10.1906L10.4777 24.4702ZM9.05438 23.7599L9.43558 23.114C9.14095 22.9401 8.76598 22.9876 8.52406 23.2295C8.28214 23.4714 8.23459 23.8464 8.40847 24.1411L9.05438 23.7599ZM10.8009 26.0135L11.3312 25.4832L10.8009 26.0135ZM14.4777 28.4702L14.1906 29.1632H14.1906L14.4777 28.4702ZM23.1518 28.4702L22.8648 27.7773V27.7773L23.1518 28.4702ZM26.8286 26.0135L27.3589 26.5438H27.3589L26.8286 26.0135ZM29.2854 22.3367L28.5925 22.0497L29.2854 22.3367ZM29.2854 13.6625L28.5925 13.9495L29.2854 13.6625ZM26.8286 9.98573L27.3589 9.4554L26.8286 9.98573ZM23.9291 8.62046C24.1805 9.04646 24.4023 9.4905 24.5925 9.94955L25.9783 9.37552C25.7612 8.85142 25.508 8.34444 25.2209 7.85806L23.9291 8.62046ZM24.5925 9.94954C25.1243 11.2336 25.3981 12.6098 25.3981 13.9996H26.8981C26.8981 12.4128 26.5855 10.8415 25.9783 9.37552L24.5925 9.94954ZM25.3981 13.9996C25.3981 15.3894 25.1243 16.7656 24.5925 18.0497L25.9783 18.6237C26.5855 17.1577 26.8981 15.5864 26.8981 13.9996H25.3981ZM24.5925 18.0497C24.0606 19.3337 23.281 20.5004 22.2983 21.4832L23.3589 22.5438C24.481 21.4218 25.371 20.0897 25.9783 18.6237L24.5925 18.0497ZM22.2983 21.4832C21.3155 22.4659 20.1488 23.2455 18.8648 23.7773L19.4388 25.1632C20.9048 24.5559 22.2369 23.6659 23.3589 22.5438L22.2983 21.4832ZM18.8648 23.7773C17.5808 24.3092 16.2046 24.5829 14.8147 24.5829V26.0829C16.4015 26.0829 17.9728 25.7704 19.4388 25.1632L18.8648 23.7773ZM14.8147 24.5829C13.4249 24.5829 12.0487 24.3092 10.7647 23.7773L10.1906 25.1632C11.6567 25.7704 13.2279 26.0829 14.8147 26.0829V24.5829ZM10.7647 23.7773C10.3056 23.5872 9.86159 23.3654 9.43558 23.114L8.67318 24.4058C9.15957 24.6928 9.66655 24.9461 10.1906 25.1632L10.7647 23.7773ZM11.3312 25.4832C10.6957 24.8477 10.1494 24.1397 9.7003 23.3787L8.40847 24.1411C8.92124 25.01 9.54501 25.8183 10.2705 26.5438L11.3312 25.4832ZM14.7647 27.7773C13.4806 27.2455 12.3139 26.4659 11.3312 25.4832L10.2705 26.5438C11.3926 27.6659 12.7246 28.5559 14.1906 29.1632L14.7647 27.7773ZM18.8147 28.5829C17.4249 28.5829 16.0487 28.3092 14.7647 27.7773L14.1906 29.1632C15.6567 29.7704 17.2279 30.0829 18.8147 30.0829V28.5829ZM22.8648 27.7773C21.5808 28.3092 20.2046 28.5829 18.8147 28.5829V30.0829C20.4015 30.0829 21.9728 29.7704 23.4388 29.1632L22.8648 27.7773ZM26.2983 25.4832C25.3155 26.4659 24.1488 27.2455 22.8648 27.7773L23.4388 29.1632C24.9048 28.5559 26.2369 27.6659 27.3589 26.5438L26.2983 25.4832ZM28.5925 22.0497C28.0606 23.3337 27.281 24.5004 26.2983 25.4832L27.3589 26.5438C28.481 25.4218 29.371 24.0897 29.9783 22.6237L28.5925 22.0497ZM29.3981 17.9996C29.3981 19.3894 29.1243 20.7656 28.5925 22.0497L29.9783 22.6237C30.5855 21.1577 30.8981 19.5864 30.8981 17.9996H29.3981ZM28.5925 13.9495C29.1243 15.2336 29.3981 16.6098 29.3981 17.9996H30.8981C30.8981 16.4128 30.5855 14.8415 29.9783 13.3755L28.5925 13.9495ZM26.2983 10.5161C27.281 11.4988 28.0606 12.6655 28.5925 13.9495L29.9783 13.3755C29.371 11.9095 28.481 10.5774 27.3589 9.4554L26.2983 10.5161ZM24.1938 8.88517C24.9548 9.33426 25.6628 9.88056 26.2983 10.5161L27.3589 9.4554C26.6334 8.72988 25.8251 8.10612 24.9562 7.59334L24.1938 8.88517Z"
                                  fill="#5C5D6B"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Đổ Bóng AI</span>
                          </div>
                        </button>
                      </a>
                      <a href="/compress-image">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_12691_2490)">
                                  <path
                                    d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8.33333 10H2.5"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M11.666 10H17.4993"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_12691_2490">
                                    <rect width={20} height={20} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Nén Ảnh</span>
                          </div>
                        </button>
                      </a>
                      <a href="/add-watermark">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                                  stroke="#0051EE"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                                  stroke="#0051EE"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>Thêm watermark</span>
                          </div>
                        </button>
                      </a>
                      <a href="/ai-skin">
                        <button className="self-stretch p-1.5 justify-center items-center gap-2.5 inline-flex relative group">
                          <div className="p-2 bg-zinc-100 rounded-lg justify-center items-center flex ">
                            <div
                              color="inherit"
                              // // mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center group-hover:text-blue-700 transition-all"
                            >
                              <svg
                                className="align-middle group-hover:text-blue-700 transition-all"
                                width={20}
                                height={16}
                                viewBox="0 0 20 16"
                                fill="none"
                              >
                                <path
                                  d="M3.29189 6.57129C4.03723 2.64284 7.0186 0.857003 9.99996 0.857178M2.76019 13.1808C2.76019 13.963 2.83758 14.4769 2.14282 15.1427C2.85711 15.2618 5.35711 15.1427 7.14282 13.7143"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.99995 0.857178C11.0757 0.857115 12.1514 1.08957 13.1221 1.57129M17.0307 9.07129C17.0307 13.4694 17.1428 14.4286 18.2142 15.1427C16.0714 15.1427 14.2142 14.8572 12.4999 13.7143"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.6429 8.42075C14.6429 11.1617 12.5642 14.4286 10 14.4286C7.43586 14.4286 5.35718 11.1617 5.35718 8.42075C5.35718 6.14288 7.50003 7.17586 10 5.85718C12.8572 7.17586 14.6429 6.14288 14.6429 8.42075Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.4999 2.7638C16.6287 2.41556 17.1213 2.41556 17.2501 2.7638L17.4864 3.40228C17.5269 3.51176 17.6132 3.59809 17.7227 3.6386L18.3612 3.87486C18.7094 4.00372 18.7094 4.49628 18.3612 4.62514L17.7227 4.8614C17.6132 4.90191 17.5269 4.98824 17.4864 5.09772L17.2501 5.7362C17.1213 6.08444 16.6287 6.08444 16.4999 5.7362L16.2636 5.09772C16.2231 4.98824 16.1368 4.90191 16.0273 4.8614L15.3888 4.62514C15.0406 4.49628 15.0406 4.00372 15.3888 3.87486L16.0273 3.6386C16.1368 3.59809 16.2231 3.51176 16.2636 3.40228L16.4999 2.7638Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M1.59364 8.76035C1.69029 8.49917 2.05971 8.49917 2.15636 8.76035L2.33355 9.23921C2.36393 9.32132 2.42868 9.38607 2.51079 9.41645L2.98965 9.59364C3.25083 9.69029 3.25083 10.0597 2.98965 10.1564L2.51079 10.3335C2.42868 10.3639 2.36393 10.4287 2.33355 10.5108L2.15636 10.9896C2.05971 11.2508 1.69029 11.2508 1.59364 10.9896L1.41645 10.5108C1.38607 10.4287 1.32132 10.3639 1.23921 10.3335L0.760352 10.1564C0.499167 10.0597 0.499166 9.69029 0.760352 9.59364L1.23921 9.41645C1.32132 9.38607 1.38607 9.32132 1.41645 9.23921L1.59364 8.76035Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className=" text-gray-800 text-left transition-all group-hover:text-blue-700 text-sm font-semibold leading-none">
                            <span>AI Xóa Mụn</span>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>

          <div className="relative">
            <Popover className="relative">
              <Popover.Button className="focus:outline-none focus:ring-0">
                <div className="relative">
                  <span className="hover:text-neutral-ink-500 px-3 py-1.5 rounded-lg items-center gap-1 justify-center flex group">
                    <p className="font-semibold text-[16px] leading-[20px] inline">
                      Tải App
                    </p>
                  </span>
                </div>
              </Popover.Button>
              <Popover.Panel>
                <div className="absolute w-[400px] flex flex-col items-center gap-2 top-12 right-[-155px] bg-neutral-ink-100 p-2 rounded shadow-md">
                  <p className="font-semibold text-xl">
                    Nhận SnapEdit ngay bây giờ!
                  </p>
                  <img
                    src="https://assets.snapedit.app/images/qrcode-snapedit.png"
                    alt="qrcode snapedit"
                    className="sm:w-44 w-32 shadow-sm mx-auto"
                  />
                  <div className="sm:space-x-5 space-x-4">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                    >
                      <span className="inline-block">
                        <img
                          src="https://assets.snapedit.app/images/apple-download.svg"
                          alt="ios app link"
                          className="sm:w-44 w-32 shadow-sm sm:mx-auto"
                        />
                      </span>
                    </a>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=snapedit.app.remove"
                    >
                      <span className="inline-block">
                        <img
                          src="https://assets.snapedit.app/images/android-download.svg"
                          alt="android app link"
                          className="sm:w-44 w-32 shadow-sm mx-auto"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <div>
            <div className="relative">
              <Popover className="relative">
                <Popover.Button className="focus:outline-none focus:ring-0">
                  <div className="inline-flex items-center space-x-2 lg:transition lg:hover:bg-neutral-ink-100 lg:rounded lg:p-2">
                    <img
                      src="https://assets.snapedit.app/images/flags/vn.svg"
                      alt="flag"
                      className="w-7 h-5 lg:w-[22px] rounded-sm"
                    />
                    <span className="font-semibold text-[14px] leading-[18px] text-neutral-ink-600 hidden lg:inline-block">
                      Tiếng Việt
                    </span>
                    <div className="inline-block text-neutral-ink-500 hidden lg:inline-block w-[10px]">
                      <svg
                        className="w-full h-full"
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.64645 5.39645L0.853553 1.60355C0.538571 1.28857 0.761654 0.75 1.20711 0.75H8.79289C9.23835 0.75 9.46143 1.28857 9.14645 1.60355L5.35355 5.39645C5.15829 5.59171 4.84171 5.59171 4.64645 5.39645Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </Popover.Button>
                <Popover.Panel>
                  <div className="py-[10px] px-2 pl-6 translate-x-2 translate-y-5 bg-white w-screen h-screen lg:w-[360px] lg:h-auto lg:rounded-md lg:shadow-md lg:translate-x-0 lg:absolute lg:right-0 lg:top-full lg:translate-y-2">
                    <div className="flex justify-between items-center mb-2 px-2 lg:block">
                      <span className="font-semibold text-[16px] leading-[20px]">
                        Chọn ngôn ngữ
                      </span>
                      <button className="inline-flex p-1 lg:hidden">
                        <div className="inline-block w-7 h-7">
                          <svg
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                          >
                            <path
                              d="M5.83301 5.83301L22.1663 22.1663"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                            <path
                              d="M22.167 5.83301L5.83366 22.1663"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <ul className="grid grid-cols-2 gap-y-1">
                      <li>
                        <button className="flex w-full items-center space-x-2 p-2 lg:transition lg:hover:bg-neutral-ink-100 lg:rounded">
                          <img
                            src="https://assets.snapedit.app/images/flags/en.svg"
                            alt="flag"
                            className="w-7 h-5 lg:w-[22px] rounded-sm"
                          />
                          <span className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                            English
                          </span>
                        </button>
                      </li>
                      <li>
                        <button className="flex w-full items-center space-x-2 p-2 lg:transition lg:hover:bg-neutral-ink-100 lg:rounded">
                          <img
                            src="https://assets.snapedit.app/images/flags/vn.svg"
                            alt="flag"
                            className="w-7 h-5 lg:w-[22px] rounded-sm"
                          />
                          <span className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                            Tiếng Việt
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          </div>

          <div
            className={classNames("hidden", {
              "!block": isDownload && fileDownload,
            })}
          >
            <div className="relative ">
              <div className="btn block w-full py-3 px-4 bg-blue-500 text-white rounded-lg text-base transition hover:bg-opacity-80 focus:bg-primary-focus focus:text-white  max-h-[44px] !px-0 !py-0">
                <span className="inline-block align-middle">
                  <button
                    className="inline-block align-middle py-3 pl-4 pr-5 text-sm font-semibold cursor-pointer"
                    onClick={handleDownload}
                  >
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bRLGlB text-center mr-1 inline-block"
                    >
                      <svg
                        className="align-middle mr-1 inline-block w-5 h-5 !text-white"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g id="download-save-upload 1">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M12 17V3"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M18 21H6"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M16.999 12L11.998 17.001L6.99805 12"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span>Tải xuống</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <Link href="/remove-object/upload">
            <button
              className={classNames(
                "justify-center items-start gap-4 cursor-pointer px-7 py-3 text-[16px] leading-[20px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold",
                {
                  hidden: !isTry,
                  "inline-flex": isTry,
                }
              )}
            >
              <span>Thử miễn phí</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex w-full h-14 items-center justify-between px-[14px] fixed top-0 left-0 z-50 transition-all lg:hidden bg-white">
        <div>
          <Link href="/">
            <span className="w-24">
              <img
                src="https://assets.snapedit.app/images/landing/snapedit-logo.svg"
                alt="Snapedit-logo"
                className="ml-2 w-22 h-6"
              />
            </span>
          </Link>
        </div>
        <div className="relative">
          <div className="flex items-center gap-4">
            <div
              className={classNames("hidden", {
                "!block": isDownload && fileDownload,
              })}
            >
              <div className="relative ">
                <div className="btn block w-full py-3 px-4 bg-blue-500 text-white rounded-lg text-base transition hover:bg-opacity-80 focus:bg-primary-focus focus:text-white  max-h-[44px] !px-0 !py-0">
                  <span className="inline-block align-middle">
                    <button
                      className="inline-block align-middle py-2 px-4 text-sm font-semibold cursor-pointer"
                      onClick={handleDownload}
                    >
                      <div
                        color="inherit"
                        className="sc-eac7f02c-0 bRLGlB text-center inline-block"
                      >
                        <svg
                          className="align-middle inline-block w-5 h-5 !text-white"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <g id="download-save-upload 1">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M12 17V3"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M18 21H6"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_3"
                                d="M16.999 12L11.998 17.001L6.99805 12"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <Popover className="relative">
              <Popover.Button className="focus:outline-none focus:ring-0">
                <div className="inline-flex items-center space-x-2 lg:transition lg:hover:bg-neutral-ink-100 lg:rounded lg:p-2">
                  <div
                    color="inherit"
                    className="sc-eac7f02c-0 bnjTLd text-center cursor-pointer mr-1 pointer-events-auto"
                  >
                    <svg
                      className="align-middle cursor-pointer mr-1 pointer-events-auto"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_9879_95922)">
                        <path
                          d="M3 5H21"
                          stroke="#252638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 12H3"
                          stroke="#252638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 19H21"
                          stroke="#252638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9879_95922">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Popover.Button>
              <Popover.Panel>
                <div className="absolute z-10 right-0 bg-white" tabIndex={-1}>
                  <div
                    className="py-1 pb-3 pl-4 pr-4 translate-x-1 translate-y-5 bg-white w-screen border-t border-[#ccc] overflow-y-auto lg:w-[360px] lg:border lg:rounded-md shadow-md lg:translate-x-0 lg:absolute lg:right-0 lg:top-full lg:translate-y-2"
                    style={{ maxHeight: "80vh" }}
                  >
                    <button
                      className="px-3 py-2 transition space-x-[10px] text-neutral-ink-600 w-full inline-flex items-center"
                      type="button"
                      aria-expanded="true"
                    >
                      <div className="flex justify-between w-full">
                        <span className="font-normal text-[16px] leading-[24px]">
                          Sản Phẩm
                        </span>
                      </div>
                    </button>
                    <div>
                      <Link href="/remove-object">
                        <button className="cursor-pointer pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                d="m6.2775 14.552h1.1725c0.44199-1e-4 0.86585-0.1757 1.1783-0.4883l7.27-7.27c0.3124-0.31254 0.488-0.73639 0.488-1.1783s-0.1756-0.86579-0.488-1.1783l-2.7492-2.7492c-0.3125-0.31245-0.7364-0.48798-1.1783-0.48798-0.442 0-0.8658 0.17553-1.1784 0.48798l-7.8558 7.8558c-0.31245 0.31255-0.48798 0.73643-0.48798 1.1783s0.17553 0.8658 0.48798 1.1783l2.1633 2.1634c0.31167 0.3125 0.735 0.4883 1.1775 0.4883z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m5.4863 6.9895 5.1084 5.1083"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m16.672 16.927h-15.058"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                          <span className="font-normal text-[14px] leading-[20px]">
                            Xóa Vật Thể
                          </span>
                        </button>
                      </Link>
                      <Link href="/enhance">
                        <button className="cursor-pointer pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="m8.3333 17.5h-4.1667c-0.44203 0-0.86595-0.1756-1.1785-0.4882-0.31257-0.3125-0.48816-0.7364-0.48816-1.1785v-4.1666c0-0.4421 0.17559-0.866 0.48816-1.1785 0.31256-0.3126 0.73648-0.4882 1.1785-0.4882h4.1667c0.44203 0 0.86595 0.1756 1.1785 0.4882 0.31256 0.3125 0.48816 0.7364 0.48816 1.1785v4.1666c0 0.4421-0.1756 0.866-0.48816 1.1785-0.31256 0.3126-0.73648 0.4882-1.1785 0.4882z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m10.833 5.8332h3.3333v3.3333"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m9.5083 10.492 4.6583-4.6584"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m13.333 17.5h2.5c0.4421 0 0.866-0.1756 1.1785-0.4882 0.3126-0.3125 0.4882-0.7364 0.4882-1.1785v-11.667c0-0.44203-0.1756-0.86595-0.4882-1.1785-0.3125-0.31257-0.7364-0.48816-1.1785-0.48816h-11.667c-0.44203 0-0.86595 0.17559-1.1785 0.48816-0.31257 0.31256-0.48816 0.73648-0.48816 1.1785v2.5"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                          <span className="font-normal text-[14px] leading-[20px]">
                            Làm Nét Ảnh
                          </span>
                        </button>
                      </Link>
                      <Link href="/background-remover">
                        <button className="cursor-pointer -3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 18 16"
                            >
                              <path
                                d="m6.9168 1.75h-3.8333c-1.1046 0-2 0.89543-2 2v8.5c0 1.1046 0.89543 2 2 2h3.8333"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m1.0835 4.3908c0-1.4585 1.1823-2.6408 2.6408-2.6408h0.27608v2.6408h-2.9169z"
                                fill="currentColor"
                              />
                              <rect
                                x={4}
                                y="4.3904"
                                width="2.9169"
                                height="2.4069"
                                fill="currentColor"
                              />
                              <rect
                                x="1.0835"
                                y="6.7986"
                                width="2.9169"
                                height="2.4069"
                                fill="currentColor"
                              />
                              <rect
                                x={4}
                                y="9.2032"
                                width="2.9169"
                                height="2.4069"
                                fill="currentColor"
                              />
                              <path
                                d="m1.0835 11.609h2.9169v2.6409h-0.27608c-1.4585 0-2.6408-1.1824-2.6408-2.6409z"
                                fill="currentColor"
                              />
                              <rect
                                x="6.917"
                                y=".91663"
                                width={10}
                                height="14.167"
                                rx={2}
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                          <span className="font-normal text-[14px] leading-[20px]">
                            Xóa Nền Ảnh
                          </span>
                        </button>
                      </Link>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <g clipPath="url(#a)">
                              <path
                                d="m13.758 3.7413c0.6578 0.65774 1.1795 1.4386 1.5355 2.298 0.356 0.85938 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8512-0.5392 2.7106-0.8777 1.6403-1.5355 2.298c-0.6577 0.6578-1.4386 1.1795-2.298 1.5355s-1.7804 0.5392-2.7106 0.5392-1.8513-0.1832-2.7107-0.5392c-0.85939-0.356-1.6403-0.8777-2.298-1.5355-1.3284-1.3284-2.0747-3.13-2.0747-5.0086 0-1.8786 0.74627-3.6803 2.0747-5.0087 1.3284-1.3284 3.13-2.0747 5.0087-2.0747 1.8786 0 3.6802 0.74627 5.0086 2.0747z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m14.849 5.1498c0.1683 0.28512 0.3167 0.58232 0.444 0.88955 0.356 0.85939 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8513-0.5392 2.7107-0.8777 1.6402-1.5355 2.298c-0.6577 0.6577-1.4386 1.1795-2.298 1.5354-0.8594 0.356-1.7804 0.5392-2.7106 0.5392s-1.8513-0.1832-2.7107-0.5392c-0.30724-0.1272-0.60443-0.2757-0.88955-0.4439 0.30058 0.5093 0.66622 0.9832 1.0916 1.4085 0.65774 0.6577 1.4386 1.1795 2.298 1.5354 0.85938 0.356 1.7805 0.5392 2.7107 0.5392s1.8512-0.1832 2.7106-0.5392c0.8594-0.3559 1.6403-0.8777 2.298-1.5354 0.6578-0.6578 1.1795-1.4386 1.5355-2.298s0.5392-1.7805 0.5392-2.7107-0.1832-1.8513-0.5392-2.7107-0.8777-1.6402-1.5355-2.298c-0.4253-0.42532-0.8991-0.79097-1.4085-1.0916z"
                                clipRule="evenodd"
                                fill="currentColor"
                                fillRule="evenodd"
                              />
                              <path
                                d="m14.849 5.1498 0.3812-0.64591c-0.2946-0.17388-0.6696-0.12633-0.9115 0.11559s-0.2895 0.61689-0.1156 0.91152l0.6459-0.3812zm0.444 0.88955-0.6929 0.28701 0.6929-0.28701zm0 5.4214-0.6929-0.287 0.6929 0.287zm-1.5355 2.298-0.5303-0.5304 0.5303 0.5304zm-2.298 1.5354 0.287 0.693-0.287-0.693zm-5.4213 0-0.28702 0.693 0.28702-0.693zm-0.88955-0.4439 0.3812-0.6459c-0.29464-0.1739-0.6696-0.1264-0.91152 0.1155s-0.28947 0.6169-0.1156 0.9115l0.64592-0.3811zm1.0916 1.4085-0.53033 0.5303 0.53033-0.5303zm2.298 1.5354-0.28702 0.693 0.28702-0.693zm5.4213 0 0.287 0.693-0.287-0.693zm2.298-1.5354 0.5304 0.5303-0.5304-0.5303zm1.5355-2.298-0.6929-0.287 0.6929 0.287zm0-5.4214-0.6929 0.28701 0.6929-0.28701zm-1.5355-2.298-0.5303 0.53033 0.5303-0.53033zm-2.0544-0.71035c0.1505 0.25493 0.2832 0.52066 0.397 0.79536l1.3858-0.57403c-0.1407-0.33976-0.3049-0.66842-0.491-0.98373l-1.2918 0.7624zm0.397 0.79536c0.3183 0.76839 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm0.4821 2.4237c0 0.83171-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821 2.4237c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm-1.3729 2.0546c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm-2.0547 1.3729c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0287 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm-2.4236 0.4821c-0.83171 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm-2.4237-0.4821c-0.2747-0.1137-0.54043-0.2465-0.79536-0.3969l-0.7624 1.2918c0.31531 0.1861 0.64397 0.3502 0.98373 0.491l0.57403-1.3859zm0.44532 1.1271c-0.38032-0.3803-0.70723-0.8039-0.97597-1.2593l-1.2918 0.7623c0.33243 0.5633 0.73681 1.0874 1.2071 1.5577l1.0607-1.0607zm2.0547 1.3729c-0.7684-0.3182-1.4666-0.7848-2.0547-1.3729l-1.0607 1.0607c0.72739 0.7274 1.5909 1.3044 2.5413 1.6981l0.57403-1.3859zm2.4237 0.4821c-0.8317 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm2.4236-0.4821c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0286 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm2.0547-1.3729c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm1.3729-2.0546c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm0.4821-2.4237c0 0.8317-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821-2.4237c0.3183 0.7684 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm-1.3729-2.0547c0.5881 0.5881 1.0546 1.2863 1.3729 2.0547l1.3858-0.57403c-0.3936-0.95038-0.9706-1.8139-1.698-2.5413l-1.0607 1.0607zm-1.2593-0.97596c0.4553 0.26874 0.879 0.59564 1.2593 0.97596l1.0607-1.0607c-0.4704-0.47033-0.9944-0.87471-1.5577-1.2071l-0.7623 1.2918z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <rect width={20} height={20} fill="#fff" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Đổ Bóng AI
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m17.5 15.834h-15"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m5.5 10h-3"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m17.5 10h-3"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m17.5 4.167h-15"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m11.666 8.333-3.3333 3.3333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m8.333 8.333 3.3333 3.3333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Xóa Dây Điện
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M16.4995 13.15L8.99121 16.5"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M8.99167 16.5L1.5 13.15"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_3"
                                d="M16.4995 9L8.99121 12.35"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_4"
                                d="M8.99167 12.35L1.5 9"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_5"
                                d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Xử lý hàng loạt
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m16 19h-12c-0.79565 0-1.5587-0.3161-2.1213-0.8787s-0.87868-1.3257-0.87868-2.1213v-12c0-0.79565 0.31607-1.5587 0.87868-2.1213s1.3257-0.87868 2.1213-0.87868h12c0.7956 0 1.5587 0.31607 2.1213 0.87868s0.8787 1.3257 0.8787 2.1213v12c0 0.7956-0.3161 1.5587-0.8787 2.1213s-1.3257 0.8787-2.1213 0.8787z"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m8.25 13.5h3.5"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10 6.5v7"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M13.5 8.084V6.889C13.5 6.78583 13.459 6.68689 13.3861 6.61394C13.3131 6.54098 13.2142 6.5 13.111 6.5H6.889C6.78583 6.5 6.68689 6.54098 6.61394 6.61394C6.54098 6.68689 6.5 6.78583 6.5 6.889V8.085"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Xóa Chữ Trên Ảnh
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <g
                              clipPath="url(#a)"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            >
                              <path d="m12.542 14.243h-5.0845" />
                              <path d="m7.0673 13.994c-0.77897-0.5481-1.388-1.3042-1.7576-2.182-0.36954-0.8779-0.48464-1.842-0.33215-2.7821 0.34405-2.2092 2.1855-3.9727 4.4065-4.2328 0.71438-0.08682 1.439-0.02105 2.126 0.19297s1.3208 0.57141 1.8595 1.0486c0.5386 0.47714 0.9699 1.0632 1.2652 1.7193 0.2954 0.65618 0.4481 1.3676 0.4482 2.0872 1e-4 0.81402-0.1956 1.616-0.5707 2.3384-0.375 0.7225-0.9184 1.344-1.5843 1.8122-0.1167 0.0781-0.2129 0.1832-0.2803 0.3064s-0.1041 0.2608-0.107 0.4012v1.5114c0 0.5619-0.2232 1.1008-0.6205 1.4981s-0.9361 0.6205-1.498 0.6205h-0.84741c-0.56187 0-1.1007-0.2232-1.498-0.6205-0.39731-0.3973-0.62051-0.9362-0.62051-1.4981v-1.508c0-0.289-0.15422-0.5466-0.38896-0.7127z" />
                              <path d="m16.034 4.7607 1.0084-1.0084" />
                              <path d="m9.9992 2.2596v-1.4261" />
                              <path d="m4.067 4.7607-1.0084-1.0084" />
                              <path d="m17.627 9.8455h1.4321" />
                              <path d="m0.94043 9.8453h1.4321" />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <rect width={20} height={20} fill="#fff" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Làm Sáng Ảnh
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g
                              id="icon-blur-on"
                              clipPath="url(#clip0_14090_52785)"
                            >
                              <path
                                id="Vector"
                                d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                                fill="#0051EE"
                                stroke="#0051EE"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_14090_52785">
                                <rect width={24} height={24} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Làm Mờ Nền
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M14.375 6.875H17.5V3.75"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m13.777 16.604c-0.75 0.4342-1.5808 0.7417-2.4658 0.8967"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m17.099 12.644c-0.3001 0.8288-0.7429 1.5988-1.3083 2.275"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m8.6885 17.5c-0.86824-0.1517-1.7029-0.4553-2.4658-0.8967"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m4.21 14.92c-0.56541-0.6762-1.0082-1.4462-1.3083-2.275"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m2.4999 10c0-1.9891 0.79017-3.8968 2.1967-5.3033 1.4065-1.4065 3.3142-2.1967 5.3033-2.1967 3.025 0 5.6258 1.795 6.8116 4.375"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m13.334 13.334c-0.0969-0.2438-0.2473-0.4628-0.44-0.6408-0.3248-0.3019-0.7517-0.4698-1.195-0.47h-3.3959c-0.44334 0-0.87084 0.1683-1.1958 0.47-0.19166 0.1783-0.3425 0.3975-0.44 0.6408"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10 10.417c1.0355 0 1.875-0.83947 1.875-1.875 0-1.0355-0.8395-1.875-1.875-1.875-1.0355 0-1.875 0.83947-1.875 1.875 0 1.0355 0.83947 1.875 1.875 1.875z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Phục Hồi Ảnh Cũ
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m6.9873 11.99c0.42916 0 0.83333 0.0883 1.1867 0.2658 0.13296-0.8593 0.56866-1.6428 1.2285-2.2091 0.65978-0.56627 1.5003-0.87811 2.3699-0.87921 1.9825 0 3.5983 1.595 3.6491 3.5692 0.5858 0.0766 1.1234 0.3646 1.5116 0.8098 0.3883 0.4452 0.6005 1.0169 0.5968 1.6077 6e-4 0.6436-0.2544 1.2612-0.709 1.7169s-1.0715 0.7122-1.7152 0.7131h-8.1183c-0.74071-0.0014-1.4506-0.2967-1.9737-0.821-0.52314-0.5244-0.81673-1.235-0.81628-1.9757 0-1.545 1.25-2.7975 2.79-2.7975z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m5.9894 9.3392c-0.10205-0.32243-0.15537-0.66138-0.15537-1.0058 0-0.88405 0.35119-1.7319 0.97632-2.357 0.62512-0.62512 1.473-0.97631 2.357-0.97631 0.88408 0 1.7319 0.35119 2.357 0.97631 0.1538 0.15378 0.291 0.32105 0.4105 0.49901"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m9.1338 2.3337v-0.66667"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m13.384 4.0922 0.4667-0.475"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m2.4668 8.334h0.66666"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m4.4248 3.6172 0.46667 0.475"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Thay Đổi Bầu Trời
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m11.486 3.4893h2.4484v2.5108"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10.667 6.8167 3.2667-3.325"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m8.1667 10.194v2.445c0 0.4758-0.385 0.8608-0.86084 0.8608h-2.445c-0.47583 0-0.86083-0.385-0.86083-0.8608v-2.445c0-0.47585 0.385-0.86085 0.86083-0.86085h2.445c0.47584 0 0.86084 0.385 0.86084 0.86085z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M16.5 2.66667V14.3333C16.5 15.2542 15.7542 16 14.8333 16H3.16667C2.24583 16 1.5 15.2542 1.5 14.3333V2.66667C1.5 1.74583 2.24583 1 3.16667 1H14.8333C15.7542 1 16.5 1.74583 16.5 2.66667Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Làm Nét Ảnh Nghệ Thuật
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 21"
                          >
                            <path
                              d="m5.2119 5.6726c2.662-2.6485 6.967-2.6376 9.6154 0.02437 1.7536 1.7625 2.4054 4.3416 1.6996 6.7256"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m14.733 15.389c-2.6955 2.6164-7.0016 2.5523-9.618-0.1432-1.7115-1.7632-2.3389-4.3124-1.6412-6.6685"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m4.7212 9.8235-1.5267-1.5267-1.5275 1.5275"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m15.279 11.177 1.5267 1.5266 1.5275-1.5275"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10 12.202c0.9398 0 1.7017-0.7619 1.7017-1.7017s-0.7619-1.7017-1.7017-1.7017c-0.93981 0-1.7017 0.76186-1.7017 1.7017s0.76186 1.7017 1.7017 1.7017z"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Chuyển Đổi Ảnh
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_12691_2490)">
                              <path
                                d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.33333 10H2.5"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.666 10H17.4993"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_12691_2490">
                                <rect width={20} height={20} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Nén Ảnh
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                              stroke="#0051EE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                              stroke="#0051EE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Thêm watermark
                        </span>
                      </button>
                      <Link href="/colorize">
                        <button className="cursor-pointer pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <g id="Group">
                                <path
                                  id="Vector"
                                  d="M5.04927 12.1816L1.93094 9.06329C1.24177 8.37412 1.24177 7.25746 1.93094 6.56829L6.62594 1.87329L12.2393 7.48663L7.54427 12.1816C6.8551 12.87 5.7376 12.87 5.04927 12.1816Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_2"
                                  d="M14.7368 9.97827C14.7368 9.97827 12.9727 11.8924 12.9727 13.0658C12.9727 14.0358 13.7668 14.8299 14.7368 14.8299C15.7068 14.8299 16.501 14.0358 16.501 13.0649C16.501 11.8924 14.7368 9.97827 14.7368 9.97827Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_3"
                                  d="M6.62513 1.87495L5.7168 0.949951"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_4"
                                  d="M12.2434 7.48328H1.44336"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_5"
                                  d="M1.85156 16.3666H9.00156"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </div>
                          <span className="font-normal text-[14px] leading-[20px]">
                            Tô màu ảnh
                          </span>
                        </button>
                      </Link>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={20}
                            height={16}
                            viewBox="0 0 20 16"
                            fill="none"
                          >
                            <path
                              d="M3.29189 6.57129C4.03723 2.64284 7.0186 0.857003 9.99996 0.857178M2.76019 13.1808C2.76019 13.963 2.83758 14.4769 2.14282 15.1427C2.85711 15.2618 5.35711 15.1427 7.14282 13.7143"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.99995 0.857178C11.0757 0.857115 12.1514 1.08957 13.1221 1.57129M17.0307 9.07129C17.0307 13.4694 17.1428 14.4286 18.2142 15.1427C16.0714 15.1427 14.2142 14.8572 12.4999 13.7143"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.6429 8.42075C14.6429 11.1617 12.5642 14.4286 10 14.4286C7.43586 14.4286 5.35718 11.1617 5.35718 8.42075C5.35718 6.14288 7.50003 7.17586 10 5.85718C12.8572 7.17586 14.6429 6.14288 14.6429 8.42075Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.4999 2.7638C16.6287 2.41556 17.1213 2.41556 17.2501 2.7638L17.4864 3.40228C17.5269 3.51176 17.6132 3.59809 17.7227 3.6386L18.3612 3.87486C18.7094 4.00372 18.7094 4.49628 18.3612 4.62514L17.7227 4.8614C17.6132 4.90191 17.5269 4.98824 17.4864 5.09772L17.2501 5.7362C17.1213 6.08444 16.6287 6.08444 16.4999 5.7362L16.2636 5.09772C16.2231 4.98824 16.1368 4.90191 16.0273 4.8614L15.3888 4.62514C15.0406 4.49628 15.0406 4.00372 15.3888 3.87486L16.0273 3.6386C16.1368 3.59809 16.2231 3.51176 16.2636 3.40228L16.4999 2.7638Z"
                              fill="currentColor"
                            />
                            <path
                              d="M1.59364 8.76035C1.69029 8.49917 2.05971 8.49917 2.15636 8.76035L2.33355 9.23921C2.36393 9.32132 2.42868 9.38607 2.51079 9.41645L2.98965 9.59364C3.25083 9.69029 3.25083 10.0597 2.98965 10.1564L2.51079 10.3335C2.42868 10.3639 2.36393 10.4287 2.33355 10.5108L2.15636 10.9896C2.05971 11.2508 1.69029 11.2508 1.59364 10.9896L1.41645 10.5108C1.38607 10.4287 1.32132 10.3639 1.23921 10.3335L0.760352 10.1564C0.499167 10.0597 0.499166 9.69029 0.760352 9.59364L1.23921 9.41645C1.32132 9.38607 1.38607 9.32132 1.41645 9.23921L1.59364 8.76035Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          AI Xóa Mụn
                        </span>
                      </button>
                      <button className="pr-3 py-2 pl-6 transition space-x-[10px] text-neutral-ink-500 w-full inline-flex items-center">
                        <div
                          color="inherit"
                          // mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                              fill="currentColor"
                            />
                            <path
                              d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.6673 17.1667L3.33398 3.83337"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="font-normal text-[14px] leading-[20px]">
                          Làm mờ khuôn mặt
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}
