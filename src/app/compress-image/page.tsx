// "use client";

import { Footer } from "@/components/Footer";

export default function CompressImage() {
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
        accept="image/png, image/jpg, image/jpeg"
        multiple
        type="file"
        tabIndex={-1}
        style={{ display: "none" }}
      />
      <div>
        <div className="hero-bg">
          <div className="container pt-[90px] space-y-6 lg:relative lg:space-y-0 lg:min-h-[700px] lg:pt-[160px] lg:flex lg:justify-between lg:items-start">
            <div className="lg:pr-4">
              <h1 className="text-neutral-ink-700 mb-4 text-center lg:text-left !leading-tight H30B lg:H56B">
                Nén Ảnh Trực Tuyến Miễn Phí{" "}
                <div className="block w-fit relative after:absolute after:bg-[#27FFFF] after:left-0 after:bottom-1.5 lg:after:bottom-2 after:w-full after:h-2 lg:after:h-3 mx-auto mt-2 lg:mx-0 lg:mt-0">
                  <span className="relative z-10" />
                </div>
              </h1>
              <p className="text-neutral-ink-600 text-center lg:text-left T16R lg:T20R">
                SnapEdit cung cấp thêm tính năng mới giúp giảm dung lượng ảnh
                lên đến 95%. Công cụ nén ảnh này giúp tối ưu hóa trang web, quản
                lý lữu trữ và truyền dữ liệu. Hãy thử ngay bây giờ!
              </p>
              <div className="mt-4 sm:block hidden">
                <img src="https://assets.snapedit.app/images/compress-image/hero_banner_static.webp" />
              </div>
            </div>
            <div className="flex flex-col lg:pb-4">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl lg:px-16 lg:py-16 px-12 py-6 text-center">
                  <div className="relative text-center lg:w-[325px] max-w-md mx-auto">
                    <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer py-5 !rounded-full text-xl shadow-[0px_4px_32px_rgba(43,61,227,0.24)]">
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
                            src="https://assets.snapedit.app/images/compress-image/compress-image-demo-1.jpg"
                            alt="sample"
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/compress-image/compress-image-demo-2.jpg"
                            alt="sample"
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/compress-image/compress-image-demo-3.jpg"
                            alt="sample"
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/compress-image/compress-image-demo-4.jpg"
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
              <img src="https://assets.snapedit.app/images/compress-image/hero_banner_static.webp" />
            </div>
          </div>
        </div>
        <div className="snap-block">
          <div className="container pb-5 lg:pb-0">
            <div className="text-center lg:mb-12 mb-7">
              <h2 className="snap-block-heading">
                Cách Nén Ảnh Trên Website, Điện Thoại?
              </h2>
              <div className="text-neutral-ink-600 lg:w-2/3 lg:mx-auto T14R lg:T16R">
                <p>Quá trình nén ảnh bằng ba bước đơn giản như sau: </p>
              </div>
            </div>
            <div className="regular slider lg:grid lg:gap-9 lg:grid-cols-3">
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/compress-image/Step_1.webp"
                  alt="Tải Lên"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      1
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Tải Lên
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Tải ảnh lên công cụ nén ảnh SnapEdit. Ở trang tải lên người
                    dùng có thể chọn thêm nhiều file ảnh cần nén dung lượng.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/compress-image/Step_2.webp"
                  alt="Nén Ảnh"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      2
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Nén Ảnh
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Sau khi tất cả các ảnh được tải lên, nhấn vào nút Nén Ngay
                    Bây Giờ để giảm dung lượng. Chờ cho đến khi quá trình hoàn
                    tất.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/compress-image/Step_3.webp"
                  alt="Tải Xuống"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      3
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Tải Xuống
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Tải các ảnh đã được nén xuống và yên tâm sử dụng. Ảnh tải
                    xuống không chứa watermark
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
                  Tải Ứng Dụng Di Động SnapEdit
                </h2>
                <p className="font-normal text-base-content px-2 sm:w-3/4">
                  Ứng dụng SnapEdit có sẵn trên Apple Store và Google Play
                  Store. Ứng dụng của chúng tôi được sử dụng trên toàn thế giới
                  để cải thiện chất lượng ảnh.
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
        <div>
          <div className="bg-[#F8FAFD] lg:pt-24 lg:pb-[120px] py-12">
            <div className="container">
              <h2 className="leading-normal lg:w-3/4 H30B lg:H56B">
                Công Cụ Giảm Dung Lượng KB Ảnh Hữu Ích{" "}
                <span className="inline-block leading-normal ai-gradient">
                  {" "}
                </span>
              </h2>
              <div className="space-y-12 pt-10 lg:pt-[72px] lg:space-y-16">
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/compress-image/upside_1.webp"
                    alt="nén ảnh cho tối ưu hóa trang web"
                    className="order-2 max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pr-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Tăng Tốc Độ Trang Web
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Nén ảnh để tối ưu hóa trang web một cách nhanh chóng và dễ
                      dàng. Công cụ nén ảnh SnapEdit là công cụ không thể thiếu
                      cho các nhà phát triển web và quản trị viên web. Giảm kích
                      thước ảnh lớn sẽ tăng tốc độ trang web.
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/compress-image/upside_2.webp"
                    alt="giảm kích thước tệp ảnh cho truyền dữ liệu"
                    className="max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pl-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Tăng Tốc Độ Truyền Dữ Liệu
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Công cụ nén ảnh của SnapEdit cung cấp giải pháp cho việc
                      kết nối chậm và băng thông hạn chế. Việc nén dung lượng
                      ảnh, làm tăng tốc độ truyền dữ liệu, cải thiện giao tiếp
                      và tiết kiệm thời gian.
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/compress-image/upside_3.webp"
                    alt="giảm kích thước ảnh cho lưu trữ"
                    className="order-2 max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pr-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Tối Ưu Quản Lý Lưu Trữ
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Công cụ nén ảnh của chúng tôi cũng giúp quản lý lưu trữ
                      đám mây một cách hiệu quả hơn. Việc giảm dung lượng ảnh
                      giúp bạn giải phóng đáng kể không gian và giảm chi phí lưu
                      trữ. Điều này hữu ích cho việc lưu trữ, quản lý ảnh và làm
                      việc với các thư viện ảnh lớn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-1 lg:py-[110px] py-14">
            <div className="container">
              <ul className="lg:mb-14 mb-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:gap-y-8">
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_1.png"
                    alt="Giảm kích thước ảnh đáng kể"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Nén ảnh chất lượng cao
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      SnapEdit sử dụng phương pháp nén tập tin lossy nhằm loại
                      bỏ dữ liệu không quan trọng với mắt người dùng. Phương
                      pháp này dẫn đến tỷ lệ nén cao hơn nhiều so với phương
                      pháp nén lossless mà vẫn đảm bảo chất lượng ảnh.
                    </p>
                  </div>
                </li>
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_2.png"
                    alt="Chấp nhận các định dạng ảnh phổ biến"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Chấp nhận nhiều định dạng ảnh
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Công cụ nén ảnh của chúng tôi chấp nhận các tệp PNG, JPEG
                      và JPG. Bạn có thể tải lên tối đa 50 ảnh mỗi lần để xử lý
                      hàng hoạt
                    </p>
                  </div>
                </li>
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_3.png"
                    alt="An toàn khi nén ảnh"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      An toàn sử dụng
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Việc nén ảnh được thực hiện bởi máy khách, không phải trên
                      máy chủ, do đó kết quả trả ảnh về nhanh chóng và an toàn.
                      Điều này đảm bảo an toàn cho người dùng và không lưu trữ
                      hình ảnh trên SnapEdit.
                    </p>
                  </div>
                </li>
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_4.png"
                    alt="Dễ sử dụng"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Dễ sử dụng và miễn phí
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Công cụ nén ảnh online dễ sử dụng và hoàn toàn miễn phí.
                      Giao diện dễ sử dụng, quy trình đơn giản và bạn có thể sử
                      dụng công cụ này trên bất kỳ thiết bị nào có kết nối
                      internet.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-zinc-100 to-zinc-100 lg:pb-[120px] pb-[80px] pt-14 lg:pt-20">
          <div className="max-w-[1200px] m-auto tablet:px-10 mobile:px-4 lg:px-0">
            <div className="mb-6 text-center lg:mb-12">
              <h2 className="text-[#212B39] lg:text-[56px] lg:font-bold lg:leading-[72px] text-[32px] font-semibold leading-[44px]">
                Câu Hỏi Thường Gặp về Công cụ Nén Ảnh SnapEdit
              </h2>
            </div>
            <ul className="border-t divide-y">
              <li>
                <button
                  className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                  id="headlessui-disclosure-button-:r113:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Cách hoạt động của thuật toán nén là gì?
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
                  id="headlessui-disclosure-button-:r115:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tỷ lệ nén tối đa có thể là bao nhiêu?
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
                  id="headlessui-disclosure-button-:r117:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể điều chỉnh tỷ lệ nén/chất lượng không?
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
                  id="headlessui-disclosure-button-:r119:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    SnapEdit có hỗ trợ nén lossless không?
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
                  id="headlessui-disclosure-button-:r11b:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể giảm kích thước tệp ảnh GIF hoặc các ảnh tĩnh
                    không?
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
                  id="headlessui-disclosure-button-:r11d:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể nén bao nhiêu ảnh?
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
                  id="headlessui-disclosure-button-:r11f:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể nén ảnh online trên thiết bị di động không?
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
                  id="headlessui-disclosure-button-:r11h:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể giảm kích thước ảnh xuống 20 KB không?
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
        <Footer />
      </div>
    </div>
  );
}
