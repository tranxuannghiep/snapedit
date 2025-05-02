import { Image } from "@/components/common/Image/Index";
import * as React from "react";

export function Header() {
  return (
    <>
      <div className="w-full h-[72px] sm:!h-[56px] items-center gap-10 py-[14px] pl-8 pr-4 fixed top-0 z-[9999] transition-all lg:flex hidden pointer-events-auto bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-md">
        <div>
          <a className="w-24">
            <span className="w-24">
              <Image
                src="https://assets.snapedit.app/images/landing/snapedit-logo.svg"
                alt="Snapedit-logo"
                className="w-22 h-8"
              />
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4 relative flex-1 grow">
          <div className="relative" data-headlessui-state="">
            <button
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:R2j8ma76:"
            >
              <div className="relative">
                <a href="/vi">
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
                </a>
                {/* <div className="absolute opacity-1 w-[400px] flex flex-col items-center gap-2 top-12 right-[-155px] bg-neutral-ink-100 p-2 rounded shadow-md opacity-0 pointer-events-none">
                  <p className="font-semibold text-xl">
                    Nhận SnapEdit ngay bây giờ!
                  </p>
                  <img
                    src="https://assets.snapedit.app/images/qrcode-snapedit.png"
                    alt="qrcode snapedit"
                    className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                  />
                  <div className="sm+:space-x-5 sm:space-x-4">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                    >
                      <span className="inline-block">
                        <img
                          src="https://assets.snapedit.app/images/apple-download.svg"
                          alt="ios app link"
                          className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
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
                          className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                        />
                      </span>
                    </a>
                  </div>
                </div> */}
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
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: 0,
              display: "none",
            }}
          />
          <div className="relative" data-headlessui-state="">
            <button
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:R2l8ma76:"
            >
              <div className="relative">
                <a href="/vi">
                  <span className="hover:text-neutral-ink-500 px-3 py-1.5 rounded-lg items-center gap-1 justify-center flex group">
                    <p className="font-semibold text-[16px] leading-[20px] inline">
                      Giải pháp
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
                </a>
                {/* <div className="absolute opacity-1 w-[400px] flex flex-col items-center gap-2 top-12 right-[-155px] bg-neutral-ink-100 p-2 rounded shadow-md opacity-0 pointer-events-none">
                  <p className="font-semibold text-xl">
                    Nhận SnapEdit ngay bây giờ!
                  </p>
                  <img
                    src="https://assets.snapedit.app/images/qrcode-snapedit.png"
                    alt="qrcode snapedit"
                    className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                  />
                  <div className="sm+:space-x-5 sm:space-x-4">
                    <a
                      target="_blank"
                      href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                    >
                      <span className="inline-block">
                        <img
                          src="https://assets.snapedit.app/images/apple-download.svg"
                          alt="ios app link"
                          className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
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
                          className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                        />
                      </span>
                    </a>
                  </div>
                </div> */}
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
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: 0,
              display: "none",
            }}
          />
          <div>
            <div className="relative">
              <a href="/vi/pricing">
                <span className="hover:text-neutral-ink-500 px-3 py-1.5 rounded-lg items-center gap-1 justify-center flex group">
                  <p className="font-semibold text-[16px] leading-[20px] inline">
                    Giá
                  </p>
                </span>
              </a>
              {/* <div className="absolute opacity-1 w-[400px] flex flex-col items-center gap-2 top-12 right-[-155px] bg-neutral-ink-100 p-2 rounded shadow-md opacity-0 pointer-events-none">
                <p className="font-semibold text-xl">
                  Nhận SnapEdit ngay bây giờ!
                </p>
                <img
                  src="https://assets.snapedit.app/images/qrcode-snapedit.png"
                  alt="qrcode snapedit"
                  className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                />
                <div className="sm+:space-x-5 sm:space-x-4">
                  <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                  >
                    <span className="inline-block">
                      <img
                        src="https://assets.snapedit.app/images/apple-download.svg"
                        alt="ios app link"
                        className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
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
                        className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                      />
                    </span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <div className="relative">
              <a href="/vi/api-pricing">
                <span className="hover:text-neutral-ink-500 px-3 py-1.5 rounded-lg items-center gap-1 justify-center flex group">
                  <p className="font-semibold text-[16px] leading-[20px] inline">
                    API
                  </p>
                </span>
              </a>
              {/* <div className="absolute opacity-1 w-[400px] flex flex-col items-center gap-2 top-12 right-[-155px] bg-neutral-ink-100 p-2 rounded shadow-md opacity-0 pointer-events-none">
                <p className="font-semibold text-xl">
                  Nhận SnapEdit ngay bây giờ!
                </p>
                <img
                  src="https://assets.snapedit.app/images/qrcode-snapedit.png"
                  alt="qrcode snapedit"
                  className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                />
                <div className="sm+:space-x-5 sm:space-x-4">
                  <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                  >
                    <span className="inline-block">
                      <img
                        src="https://assets.snapedit.app/images/apple-download.svg"
                        alt="ios app link"
                        className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
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
                        className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                      />
                    </span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <div className="relative">
              <a href="/vi/link">
                <span className="hover:text-neutral-ink-500 px-3 py-1.5 rounded-lg items-center gap-1 justify-center flex group">
                  <p className="font-semibold text-[16px] leading-[20px] inline">
                    Tải App
                  </p>
                </span>
              </a>
              {/* <div className="absolute opacity-1 w-[400px] flex flex-col items-center gap-2 top-12 right-[-155px] bg-neutral-ink-100 p-2 rounded shadow-md opacity-0 pointer-events-none">
                <p className="font-semibold text-xl">
                  Nhận SnapEdit ngay bây giờ!
                </p>
                <img
                  src="https://assets.snapedit.app/images/qrcode-snapedit.png"
                  alt="qrcode snapedit"
                  className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                />
                <div className="sm+:space-x-5 sm:space-x-4">
                  <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                  >
                    <span className="inline-block">
                      <img
                        src="https://assets.snapedit.app/images/apple-download.svg"
                        alt="ios app link"
                        className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
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
                        className="sm+:w-44 sm:w-32 shadow-sm sm:mx-auto"
                      />
                    </span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <div>
            <div className="relative !static" data-headlessui-state="">
              <button
                className="outline-none flex items-center mr-10 lg:mr-0"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:R1boma76:"
              >
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
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
                display: "none",
              }}
            />
          </div>
          <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-7 py-3 text-[16px] leading-[20px] hover:text-blue-700 rounded-lg text-center text-neutral-ink-600 font-semibold">
            Đăng nhập
          </button>
          <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-7 py-3 text-[16px] leading-[20px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold">
            Thử miễn phí
          </button>
        </div>
      </div>
      <div className="flex w-full h-14 items-center justify-between px-[14px] fixed top-0 left-0 z-50 transition-all lg:hidden bg-white">
        <div>
          <a className="w-24">
            <span className="w-24">
              <img
                src="https://assets.snapedit.app/images/landing/snapedit-logo.svg"
                alt="Snapedit-logo"
                className="ml-2 w-22 h-6"
              />
            </span>
          </a>
        </div>
        <div className="relative" data-headlessui-state="">
          <button
            className="outline-none"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
            id="headlessui-popover-button-:Rbcma76:"
          >
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
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0,
            display: "none",
          }}
        />
      </div>
    </>
  );
}
