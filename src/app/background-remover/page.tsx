"use client";

import { Footer } from "@/components/Footer";
import { useUploadStore } from "@/stores/useUploadStore";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function BackgroundRemover() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setFile = useUploadStore((state: any) => state.setFile);
  const router = useRouter();
  const handleClick = () => {
    fileInputRef.current?.click(); // gọi click vào input
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }

    setTimeout(() => {
      router.push("/background-remover/upload");
    }, 1000);
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
      <div className="flex flex-col justify-center items-center">
        <div className="hero-bg">
          <div className="container pt-[90px] space-y-6 lg:relative lg:space-y-0 lg:min-h-[700px] lg:pt-[160px] lg:flex lg:justify-between lg:items-start">
            <div className="lg:pr-4">
              <h1 className="text-neutral-ink-700 mb-4 text-center lg:text-left !leading-tight H30B lg:H56B">
                Xóa nền ảnh{" "}
                <div className="block w-fit relative after:absolute after:bg-[#27FFFF] after:left-0 after:bottom-1.5 lg:after:bottom-2 after:w-full after:h-2 lg:after:h-3 mx-auto mt-2 lg:mx-0 lg:mt-0">
                  <span className="relative z-10">với AI</span>
                </div>
              </h1>
              <p className="text-neutral-ink-600 text-center lg:text-left T16R lg:T20R">
                Tách hay xoá nền ảnh online trong chớp mắt với AI
              </p>
              <div className="mt-4 sm:block hidden">
                <img src="https://assets.snapedit.app/images/hero_remove_bg_static_banner.webp" />
              </div>
            </div>
            <div className="flex flex-col lg:pb-4">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl lg:px-16 lg:py-16 px-12 py-6 text-center">
                  <div className="relative text-center lg:w-[325px] max-w-md mx-auto">
                    <div
                      onClick={handleClick}
                      className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer py-5 !rounded-full text-xl shadow-[0px_4px_32px_rgba(43,61,227,0.24)]"
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
                    <p className="font-semibold text-[16px] leading-[20px] hidden mt-4 lg:inline-block text-neutral-ink-600">
                      Hoặc chỉ cần thả vào đây
                    </p>
                    <p className="font-semibold text-[16px] leading-[20px] hidden lg:block text-neutral-ink-600">
                      Ctrl + V để dán hình ảnh
                    </p>
                  </div>
                  <div className="my-5 w-full border-t border-dashed border-[#D8D8DB]" />
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
            <div className="mt-4 sm:hidden">
              <img src="https://assets.snapedit.app/images/hero_remove_bg_static_banner.webp" />
            </div>
          </div>
        </div>
        <div className="snap-block">
          <div className="container pb-5 lg:pb-0">
            <div className="text-center lg:mb-12 mb-7">
              <h2 className="snap-block-heading">Cách xóa nền ảnh online</h2>
              <div className="text-neutral-ink-600 lg:w-2/3 lg:mx-auto T14R lg:T16R">
                <p>
                  Để tách và xoá nền ảnh với SnapEdit, hãy truy cập vào trang
                  web SnapEdit và chọn công cụ{" "}
                  <a href="/vi/background-remover">
                    <span className="font-medium text-blue-500 hover:underline">
                      Xóa nền ảnh
                    </span>
                  </a>{" "}
                  và làm theo các bước sau ...
                </p>
              </div>
            </div>
            <div className="regular slider lg:grid lg:gap-9 lg:grid-cols-3">
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove_bg_step_1.webp"
                  alt="Tải ảnh lên"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      1
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Tải ảnh lên
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Tải lên hoặc Kéo và thả hình ảnh vào khung &quot;Tải ảnh
                    lên&quot; để bắt đầu chỉnh sửa phông nền với SnapEdit.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove_bg_step_2.webp"
                  alt="Đợi AI tách nền ảnh"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      2
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Đợi AI tách nền ảnh
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Chỉ sau vài giây, AI của SnapEdit sẽ tự động tách phông nền
                    khỏi hình ảnh của bạn. Bạn có thể chọn xoá nền cũ hay thay
                    thế bằng hình nền mới, màu nền mới
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove_bg_step_3.webp"
                  alt="Chỉnh sửa và tải xuống"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      3
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Chỉnh sửa và tải xuống
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Chỉnh sửa hình ảnh thêm, sau đó nhấp vào nút{" "}
                    <b>Tải xuống </b> hoặc <b>Tải xuống HD</b> để lưu ảnh về
                    máy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container sm:pb-14 pb-10 px-0">
            <div className="rounded-2xl banner-gradient sm:py-10 sm:px-14 sm:flex sm:justify-between sm:items-center px-4 py-6 text-center">
              <div className="mb-4 sm:flex-1">
                <h2 className="font-semibold text-gray-2 mb-2 sm:text-3xl text-xl">
                  Khám phá ứng dụng SnapEdit trên điện thoại
                </h2>
                <p className="font-normal text-base-content px-2 sm:w-3/4">
                  Tải app SnapEdit trên điện thoại để tận dụng các tính năng
                  chỉnh sửa ảnh nền mới nhất!
                </p>
              </div>
              <div className="sm:space-x-5 space-x-4">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                >
                  <span className="inline-block transition hover:opacity-80">
                    <img
                      src="https://assets.snapedit.app/images/apple-download.svg"
                      alt="ios app link"
                      className="sm:w-44 w-32 shadow-sm mx-auto"
                    />
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=snapedit.app.remove"
                >
                  <span className="inline-block transition hover:opacity-80">
                    <img
                      src="https://assets.snapedit.app/images/android-download.svg"
                      alt="android app link"
                      className="sm:w-44 w-32 shadow-sm mx-auto"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8FAFD] lg:pt-24 lg:pb-[120px] py-12">
          <div className="container">
            <h2 className="leading-normal lg:w-3/4 H30B lg:H56B">
              Xoá phông ảnh tự động và chính xác với{" "}
              <span className="inline-block leading-normal ai-gradient">
                AI
              </span>
            </h2>
            <div className="space-y-12 pt-10 lg:pt-[72px] lg:space-y-16">
              <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                <img
                  src="https://assets.snapedit.app/images/remove_bg_feature_1.webp"
                  alt="snap main feature"
                  className="order-2 max-w-[528px] w-full rounded-2xl"
                />
                <div className="sm:pr-20 mt-4">
                  <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                    Tách nền ảnh trong vài giây
                  </h3>
                  <p className="sm:mb-8 mb-4 text-sm">
                    Tận dụng thuật toán AI, SnapEdit giúp bạn dễ dàng thiết kế
                    hình ảnh theo mong muốn mà không cần mất thời gian tách và
                    xóa phông nền bằng tay.{" "}
                  </p>
                </div>
              </div>
              <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                <img
                  src="https://assets.snapedit.app/images/remove_bg_feature_2.webp"
                  alt="snap main feature"
                  className="max-w-[528px] w-full rounded-2xl"
                />
                <div className="sm:pl-20 mt-4">
                  <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                    Xóa nền cho hình sản phẩm, đồ vật
                  </h3>
                  <p className="sm:mb-8 mb-4 text-sm">
                    Bạn có một mặt hàng hoặc hình ảnh quảng cáo muốn đăng nhưng
                    hình nền chưa được ưng ý? SnapEdit sẽ giúp bạn{" "}
                    <b>tách nền</b> và dễ dàng thiết kế những tấm hình sản phẩm
                    thật bắt mắt, chuyên nghiệp
                  </p>
                </div>
              </div>
              <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                <img
                  src="https://assets.snapedit.app/images/remove_bg_feature_3.webp"
                  alt="snap main feature"
                  className="order-2 max-w-[528px] w-full rounded-2xl"
                />
                <div className="sm:pr-20 mt-4">
                  <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                    Cho người yêu động vật, thú cưng.
                  </h3>
                  <p className="sm:mb-8 mb-4 text-sm">
                    Những chú chó, mèo luôn là nguồn cảm hứng cho chúng ta chụp
                    ảnh để lưu giữ kỷ niệm. Công cụ <b>cắt nền</b> giúp bạn mang
                    những người bạn dễ thương này đi khắp nơi trong những bức
                    ảnh của bạn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-1 lg:py-[110px] py-14 w-[100vw]">
          <div className="container">
            <ul className="lg:mb-14 mb-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-8">
              <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                <img
                  src="https://assets.snapedit.app/images/icon-feature-1.svg"
                  alt="snap main feature"
                  className="w-14 lg:w-auto"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                    Tiết kiệm thời gian
                  </h3>
                  <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                    Bạn sẽ tiết kiệm được lượng lớn thời gian xóa nền ảnh khi sử
                    dụng SnapEdit. Điều này cho phép bạn dành thời gian vào việc
                    nghiên cứu, thiết kế và hoàn thành dự án của mình nhanh hơn.
                  </p>
                </div>
              </li>
              <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                <img
                  src="https://assets.snapedit.app/images/icon-feature-2.svg"
                  alt="snap main feature"
                  className="w-14 lg:w-auto"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                    Chất lượng xóa chính xác
                  </h3>
                  <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                    Các thuật toán nâng cao giúp SnapEdit có thể tách nền cực kỳ
                    chính xác mà không làm hại đến các chi tiết hay màu sắc của
                    chủ thể trong ảnh. Mang lại hình ảnh chất lượng cao như được
                    xử lý chuyên nghiệp.
                  </p>
                </div>
              </li>
              <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                <img
                  src="https://assets.snapedit.app/images/icon-feature-3.svg"
                  alt="snap main feature"
                  className="w-14 lg:w-auto"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                    Tiết kiệm chi phí
                  </h3>
                  <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                    Việc thuê một chuyên gia chỉnh sửa hình ảnh bên ngoài có thể
                    tốn kém, đặc biệt nếu bạn có một số lượng lớn hình ảnh cần
                    chỉnh sửa. Snapedit là một giải pháp hiệu quả về chi phí cho
                    phép bạn tự chỉnh sửa hình ảnh mà không cần chuyên gia.
                  </p>
                </div>
              </li>
              <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                <img
                  src="https://assets.snapedit.app/images/icon-feature-4.svg"
                  alt="snap main feature"
                  className="w-14 lg:w-auto"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                    Tiện lợi &amp; dễ dùng
                  </h3>
                  <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                    Dùng các tính năng tuyệt vời của SnapEdit ở bất cứ đâu mà
                    không phải lo lắng về cách thức hay thiết bị bạn sử dụng.
                    Bạn có thể chỉnh sửa ảnh nền qua ứng dụng điện thoại hay
                    trang web của chúng tôi
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container  relative w-full sm:py-20 py-16">
          <h2 className="snap-block-heading text-center">
            Công cụ Chỉnh sửa Nền
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
            <a href="/vi/background-remover/transparent-background">
              <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
                <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                    <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                      <img
                        alt="Nền trong suốt"
                        loading="lazy"
                        width={360}
                        height={240}
                        decoding="async"
                        data-nimg={1}
                        className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/background-remover/other-ai-tools/transparent.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/transparent.webp 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/transparent.webp"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                          Nền trong suốt
                        </h3>
                      </div>
                      <div className="lg:min-h-[80px]">
                        <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                          Thay đổi nền của ảnh thành nền trong suốt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/vi/background-remover/white-background">
              <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
                <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                    <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                      <img
                        alt="Thêm nền trắng"
                        loading="lazy"
                        width={360}
                        height={240}
                        decoding="async"
                        data-nimg={1}
                        className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/background-remover/other-ai-tools/white.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/white.webp 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/white.webp"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                          Thêm nền trắng
                        </h3>
                      </div>
                      <div className="lg:min-h-[80px]">
                        <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                          Tạo nền trắng cho ảnh của bạn trong vài giây
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/vi/background-remover/red-background">
              <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
                <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                    <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                      <img
                        alt="Thêm nền đỏ"
                        loading="lazy"
                        width={360}
                        height={240}
                        decoding="async"
                        data-nimg={1}
                        className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/background-remover/other-ai-tools/red.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/red.webp 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/red.webp"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                          Thêm nền đỏ
                        </h3>
                      </div>
                      <div className="lg:min-h-[80px]">
                        <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                          Thêm nền đỏ cho ảnh miễn phí
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/vi/blur-bg">
              <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
                <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                    <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                      <img
                        alt="Làm mờ nền"
                        loading="lazy"
                        width={360}
                        height={240}
                        decoding="async"
                        data-nimg={1}
                        className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                        srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/background-remover/other-ai-tools/blur.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/blur.webp 2x"
                        src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/background-remover/other-ai-tools/blur.webp"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                          Làm mờ nền
                        </h3>
                      </div>
                      <div className="lg:min-h-[80px]">
                        <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                          Làm mờ nền của ảnh chỉ với một cú nhấp chuột bằng
                          SnapEdit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="/vi/tools">
              <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-12 py-[18px] text-[20px] leading-[28px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold">
                Khám phá tất cả các công cụ
                <div
                  color="inherit"
                  //mode="outline"
                  className="sc-eac7f02c-0 bnjTLd text-center"
                >
                  <svg
                    className="align-middle"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M20.5 12H4.5"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7857 17.7143L20.5 12"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7857 6.28571L20.5 12"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:pb-[120px] pb-[80px] pt-14 lg:pt-20">
          <div className="px-4 lg:px-0">
            <div className="mb-6 text-center lg:mb-12">
              <h2 className="text-[#212B39] lg:text-[56px] lg:font-bold lg:leading-[72px] text-[32px] font-semibold leading-[44px]">
                Câu hỏi thường gặp
              </h2>
            </div>
            <ul className="border-t divide-y max-w-[1200px]">
              <li>
                <button
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
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
              <li>
                <button
                  className="flex items-center justify-between w-full px-5 py-4"
                  type="button"
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể cắt nền ảnh trên điện thoại không?
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
      <Footer />
    </div>
  );
}
