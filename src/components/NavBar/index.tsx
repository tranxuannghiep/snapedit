import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ImgComparisonSlider } from "@img-comparison-slider/react";
export function NavBar() {
  return (
    <div className="flex flex-col items-center gap-14 lg:pt-[120px] py-16 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="lg:max-w-[1200px] m-auto px-6 lg:px-0">
        <div className="flex flex-col items-center relative flex-[0_0_auto]">
          <h2 className="text-gray-800 lg:text-[56px] text-[40px] font-bold lg:leading-[72px] leading-[48px]">
            <span className="text-gray-800">AI chỉnh sửa ảnh cho{/* */} </span>
            <span className="text-blueblue-500">
              mọi nhu cầu, mọi ngành nghề
            </span>
          </h2>
          <div className="lg:hidden block mt-6 w-full">
            <div className="px-5 py-1 bg-gray-200 rounded-3xl justify-center items-center gap-4 inline-flex w-full">
              <div className="grow shrink basis-0 h-10 px-3 py-2.5 rounded-lg justify-start items-center gap-2 flex">
                <button>
                  <div
                    color="inherit"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
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
                        d="M11.666 13.333 8.333 10l3.333-3.333"
                      />
                    </svg>
                  </div>
                </button>
                <div className="grow shrink basis-0 text-center text-gray-600 text-base font-semibold leading-tight">
                  📸 Nhiếp ảnh
                </div>
                <button>
                  <div
                    color="inherit"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
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
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block mt-12">
            <div className="p-[6px] bg-gray-200 rounded-3xl justify-center items-center gap-4 inline-flex">
              <button className="px-6 py-[10px] rounded-lg justify-start items-center gap-2 flex transition-all duration-500 ease-out !bg-white !rounded-full shadow">
                <div className="text-gray-600 text-base font-semibold leading-tight !text-gray-800">
                  📸 Nhiếp ảnh
                </div>
              </button>
              <button className="px-6 py-[10px] rounded-lg justify-start items-center gap-2 flex transition-all duration-500 ease-out">
                <div className="text-gray-600 text-base font-semibold leading-tight">
                  🛍 Thương mại điện tử
                </div>
              </button>
              <button className="px-6 py-[10px] rounded-lg justify-start items-center gap-2 flex transition-all duration-500 ease-out">
                <div className="text-gray-600 text-base font-semibold leading-tight">
                  💝 Thời trang
                </div>
              </button>
              <button className="px-6 py-[10px] rounded-lg justify-start items-center gap-2 flex transition-all duration-500 ease-out">
                <div className="text-gray-600 text-base font-semibold leading-tight">
                  ✈️ Du lịch
                </div>
              </button>
              <button className="px-6 py-[10px] rounded-lg justify-start items-center gap-2 flex transition-all duration-500 ease-out">
                <div className="text-gray-600 text-base font-semibold leading-tight">
                  🏡 Bất động sản
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative lg:mt-14 mt-4">
          <div className="m-auto bg-white rounded-2xl shadow-wtm-image-compare-shadow">
            <div className="h-auto w-full">
              <div className="flex justify-center items-center">
                <div className="w-full">
                  <div className="relative cursor-pointer">
                    <ImgComparisonSlider
                      className="relative w-full rounded-2xl slider-home-split-line rendered"
                      tabIndex={0}
                      // className="relative w-full rounded-2xl slider-home-split-line"

                      hover={true}
                    >
                      <img
                        slot="first"
                        alt="original-image"
                        loading="lazy"
                        width={1200}
                        height={600}
                        decoding="async"
                        data-nimg={1}
                        className="sm:max-h-[465px] w-full m-auto lg:h-full"
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/usecase/compare-image-photography-1.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/usecase/compare-image-photography-1.webp 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/usecase/compare-image-photography-1.webp"
                        style={{ color: "transparent" }}
                      />
                      <img
                        slot="second"
                        alt="enhanced-image"
                        loading="lazy"
                        width={1200}
                        height={600}
                        decoding="async"
                        data-nimg={1}
                        className="sm:max-h-[465px] w-full m-auto lg:h-full"
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/usecase/compare-image-photography-2.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/usecase/compare-image-photography-2.webp 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/usecase/compare-image-photography-2.webp"
                        style={{ color: "transparent" }}
                      />
                      <span slot="handle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={51}
                          height={51}
                          fill="none"
                          viewBox="0 0 51 51"
                        >
                          <g filter="url(#a)">
                            <rect
                              width="43.368"
                              height="43.368"
                              x="47.369"
                              y={3}
                              fill="#fff"
                              rx="21.684"
                              transform="rotate(90 47.37 3)"
                            />
                            <path
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m30.435 29.685 5-5-5-5m-9.498-.001-5 5 5 5"
                            />
                          </g>
                          <defs>
                            <filter
                              id="a"
                              width="49.824"
                              height="49.825"
                              x=".773"
                              y=".579"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy=".807" />
                              <feGaussianBlur stdDeviation="1.614" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0.12715 0 0 0 0 0.20209 0 0 0 0 0.347562 0 0 0 0.12 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_59_2159"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_59_2159"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </ImgComparisonSlider>
                    <div
                      className="magnifying-glass pointer-events-none bg-white bg-no-repeat hidden"
                      style={{
                        top: 20,
                        left: 20,
                        backgroundImage:
                          'url("https://assets.snapedit.app/images/landing/usecase/compare-image-photography-2.webp")',
                        backgroundSize: "1800px 909.75px",
                        backgroundPosition: "50px 50px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block h-0.5 bg-slate-200 my-6 w-3/4 m-auto" />
        <div className="flex flex-col items-center gap-14 lg:gap-[192px] px-0 lg:pb-[72px] lg:pt-[144px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-[120px] gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-10 px-0 relative lg:w-1/2 w-full grow">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="text-[#212B39] lg:text-[44px] text-[32px] font-semibold lg:font-bold leading-[44px] lg:leading-[56px]">
                  Xóa vật thể khỏi ảnh nhanh chóng, chính xác{" "}
                </h3>
                <p className="self-stretch text-neutral-ink-500 text-lg font-normal leading-7">
                  Công cụ xóa vật thể của SnapEdit hoạt động đơn giản nhưng hiệu
                  quả không kém so với các phần mềm chỉnh sửa ảnh như photoshop,
                  tất cả nhờ sự hỗ trợ của các mô hình Trí Tuệ Nhân Tạo nội bộ.
                </p>
                <div className="flex flex-col gap-3 ml-6">
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Rất dễ sử dụng.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Không cần kỹ năng chỉnh sửa ảnh nâng cao cho người mới bắt
                      đầu.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Cho phép loại bỏ đối tượng một cách thủ công nếu cần.
                    </span>
                  </div>
                </div>
              </div>
              <a href="/remove-object">
                <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-12 py-[18px] text-[20px] leading-[28px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold w-fit">
                  Thử xóa vật thể
                </button>
              </a>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="m-auto bg-white rounded-2xl shadow-wtm-image-compare-shadow">
                <div className="h-auto w-full">
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      <div className="relative cursor-pointer">
                        <ImgComparisonSlider
                          className="relative w-full rounded-2xl slider-feature-split-line rendered"
                          tabIndex={0}
                          // classname="relative w-full rounded-2xl slider-feature-split-line"
                          hover={true}
                        >
                          <img
                            slot="first"
                            alt="original-image"
                            loading="lazy"
                            width={1200}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="sm:max-h-[465px] w-full m-auto lg:h-full lg:h-[480px] lg:w-[600px] w-full"
                            srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/sub-usecase/sub-compare-image-remove-01.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-remove-01.webp 2x"
                            src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-remove-01.webp"
                            style={{ color: "transparent" }}
                          />
                          <img
                            slot="second"
                            alt="enhanced-image"
                            loading="lazy"
                            width={1200}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="sm:max-h-[465px] w-full m-auto lg:h-full lg:h-[480px] lg:w-[600px] w-full"
                            srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/sub-usecase/sub-compare-image-remove-02.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-remove-02.webp 2x"
                            src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-remove-02.webp"
                            style={{ color: "transparent" }}
                          />
                          <span slot="handle">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={51}
                              height={51}
                              fill="none"
                              viewBox="0 0 51 51"
                            >
                              <g filter="url(#a)">
                                <rect
                                  width="43.368"
                                  height="43.368"
                                  x="47.369"
                                  y={3}
                                  fill="#fff"
                                  rx="21.684"
                                  transform="rotate(90 47.37 3)"
                                />
                                <path
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m30.435 29.685 5-5-5-5m-9.498-.001-5 5 5 5"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="a"
                                  width="49.824"
                                  height="49.825"
                                  x=".773"
                                  y=".579"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity={0}
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset dy=".807" />
                                  <feGaussianBlur stdDeviation="1.614" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix values="0 0 0 0 0.12715 0 0 0 0 0.20209 0 0 0 0 0.347562 0 0 0 0.12 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_59_2159"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_59_2159"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </span>
                        </ImgComparisonSlider>
                        <div
                          className="magnifying-glass pointer-events-none bg-white bg-no-repeat hidden"
                          style={{
                            top: 20,
                            left: 20,
                            backgroundImage:
                              'url("https://assets.snapedit.app/images/landing/sub-usecase/sub-compare-image-remove-01.webp")',
                            backgroundSize: "0px 0px",
                            backgroundPositionX: 50,
                            backgroundPositionY: 50,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-[120px] gap-6 relative self-stretch w-full flex-[0_0_auto] lg:flex-row-reverse">
            <div className="flex flex-col gap-10 px-0 relative lg:w-1/2 w-full grow">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="text-[#212B39] lg:text-[44px] text-[32px] font-semibold lg:font-bold leading-[44px] lg:leading-[56px]">
                  Xóa nền ảnh, chỉnh sửa nền dễ dàng
                </h3>
                <p className="self-stretch text-neutral-ink-500 text-lg font-normal leading-7">
                  Trang web chỉnh sửa ảnh SnapEdit cho phép bạn chỉnh sửa nền
                  ảnh một cách tiện lợi trên điện thoại thông minh, máy tính cá
                  nhân và máy tính bảng. Tất cả các tính năng đều thân thiện với
                  người dùng để chỉnh sửa ảnh và lưu chúng dễ dàng vào thiết bị.
                </p>
                <div className="flex flex-col gap-3 ml-6">
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Tách nền phức tạp một cách hoàn hảo
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Thay đổi nền với 100+ mẫu được thiết kế trước.
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Tải ảnh về miễn phí dưới định dạng HD
                    </span>
                  </div>
                </div>
              </div>
              <a href="/remove-bg">
                <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-12 py-[18px] text-[20px] leading-[28px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold w-fit">
                  Thử xóa nền ảnh
                </button>
              </a>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="m-auto bg-white rounded-2xl shadow-wtm-image-compare-shadow">
                <div className="h-auto w-full">
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      <div className="relative cursor-pointer">
                        <ImgComparisonSlider
                          className="relative w-full rounded-2xl slider-feature-split-line rendered"
                          tabIndex={0}
                          // classname="relative w-full rounded-2xl slider-feature-split-line"
                          hover={true}
                        >
                          <img
                            slot="first"
                            alt="original-image"
                            loading="lazy"
                            width={1200}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="sm:max-h-[465px] w-full m-auto lg:h-full lg:h-[480px] lg:w-[600px] w-full"
                            srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/sub-usecase/sub-compare-image-bg-01.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-bg-01.webp 2x"
                            src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-bg-01.webp"
                            style={{ color: "transparent" }}
                          />
                          <img
                            slot="second"
                            alt="enhanced-image"
                            loading="lazy"
                            width={1200}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="sm:max-h-[465px] w-full m-auto lg:h-full lg:h-[480px] lg:w-[600px] w-full"
                            srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/sub-usecase/sub-compare-image-bg-02.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-bg-02.webp 2x"
                            src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-bg-02.webp"
                            style={{ color: "transparent" }}
                          />
                          <span slot="handle">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={51}
                              height={51}
                              fill="none"
                              viewBox="0 0 51 51"
                            >
                              <g filter="url(#a)">
                                <rect
                                  width="43.368"
                                  height="43.368"
                                  x="47.369"
                                  y={3}
                                  fill="#fff"
                                  rx="21.684"
                                  transform="rotate(90 47.37 3)"
                                />
                                <path
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m30.435 29.685 5-5-5-5m-9.498-.001-5 5 5 5"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="a"
                                  width="49.824"
                                  height="49.825"
                                  x=".773"
                                  y=".579"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity={0}
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset dy=".807" />
                                  <feGaussianBlur stdDeviation="1.614" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix values="0 0 0 0 0.12715 0 0 0 0 0.20209 0 0 0 0 0.347562 0 0 0 0.12 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_59_2159"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_59_2159"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </span>
                        </ImgComparisonSlider>
                        <div
                          className="magnifying-glass pointer-events-none bg-white bg-no-repeat hidden"
                          style={{
                            top: 20,
                            left: 20,
                            backgroundImage:
                              'url("https://assets.snapedit.app/images/landing/sub-usecase/sub-compare-image-bg-01.webp")',
                            backgroundSize: "0px 0px",
                            backgroundPositionX: 50,
                            backgroundPositionY: 50,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-[120px] gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-10 px-0 relative lg:w-1/2 w-full grow">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="text-[#212B39] lg:text-[44px] text-[32px] font-semibold lg:font-bold leading-[44px] lg:leading-[56px]">
                  Làm nét ảnh và nâng cao chất lượng hình ảnh lên đến 4K
                </h3>
                <p className="self-stretch text-neutral-ink-500 text-lg font-normal leading-7">
                  Công cụ chỉnh sửa ảnh online miễn phí SnapEdit giúp nâng cao
                  chất lượng ảnh của bạn lên đến 4K. Trí tuệ nhân tạo có thể làm
                  cho các hình ảnh có độ phân giải thấp trở nên sắc nét như một
                  editor chuyên nghiệp.
                </p>
                <div className="flex flex-col gap-3 ml-6">
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Làm nét ảnh và sửa ảnh mờ chỉ với 1 cú nhấp chuột
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Dễ sử dụng cho người không chuyên
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5">
                      <img
                        src="https://assets.snapedit.app/images/landing/icon_checked.webp"
                        alt="List check"
                        className="w-full h-auto m-auto"
                      />
                    </div>
                    <span className="text-neutral-ink-600 text-lg font-normal leading-7 flex-1">
                      Lưu ảnh xuống thiết bị với chất lượng HD
                    </span>
                  </div>
                </div>
              </div>
              <a href="/enhance">
                <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-12 py-[18px] text-[20px] leading-[28px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold w-fit">
                  Làm nét ảnh ngay bây giờ
                </button>
              </a>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="m-auto bg-white rounded-2xl shadow-wtm-image-compare-shadow">
                <div className="h-auto w-full">
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      <div className="relative cursor-pointer">
                        <ImgComparisonSlider
                          className="relative w-full rounded-2xl slider-feature-split-line rendered"
                          tabIndex={0}
                          // classname="relative w-full rounded-2xl slider-feature-split-line"
                          hover={true}
                        >
                          <img
                            slot="first"
                            alt="original-image"
                            loading="lazy"
                            width={1200}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="sm:max-h-[465px] w-full m-auto lg:h-full lg:h-[480px] lg:w-[600px] w-full"
                            srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/sub-usecase/sub-compare-image-enhnace-01.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-enhnace-01.webp 2x"
                            src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-enhnace-01.webp"
                            style={{ color: "transparent" }}
                          />
                          <img
                            slot="second"
                            alt="enhanced-image"
                            loading="lazy"
                            width={1200}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="sm:max-h-[465px] w-full m-auto lg:h-full lg:h-[480px] lg:w-[600px] w-full"
                            srcSet="https://assets.snapedit.app/cdn-cgi/image/width=1200,quality=85/images/landing/sub-usecase/sub-compare-image-enhnace-02.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-enhnace-02.webp 2x"
                            src="https://assets.snapedit.app/cdn-cgi/image/width=3840,quality=85/images/landing/sub-usecase/sub-compare-image-enhnace-02.webp"
                            style={{ color: "transparent" }}
                          />
                          <span slot="handle">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={51}
                              height={51}
                              fill="none"
                              viewBox="0 0 51 51"
                            >
                              <g filter="url(#a)">
                                <rect
                                  width="43.368"
                                  height="43.368"
                                  x="47.369"
                                  y={3}
                                  fill="#fff"
                                  rx="21.684"
                                  transform="rotate(90 47.37 3)"
                                />
                                <path
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m30.435 29.685 5-5-5-5m-9.498-.001-5 5 5 5"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="a"
                                  width="49.824"
                                  height="49.825"
                                  x=".773"
                                  y=".579"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity={0}
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset dy=".807" />
                                  <feGaussianBlur stdDeviation="1.614" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix values="0 0 0 0 0.12715 0 0 0 0 0.20209 0 0 0 0 0.347562 0 0 0 0.12 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_59_2159"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_59_2159"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </span>
                        </ImgComparisonSlider>
                        <div
                          className="magnifying-glass pointer-events-none bg-white bg-no-repeat hidden"
                          style={{
                            top: 20,
                            left: 20,
                            backgroundImage:
                              'url("https://assets.snapedit.app/images/landing/sub-usecase/sub-compare-image-enhnace-01.webp")',
                            backgroundSize: "0px 0px",
                            backgroundPositionX: 50,
                            backgroundPositionY: 50,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
