// "use client";

import { Footer } from "@/components/Footer";

export default function EasyShadow() {
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
        accept="image/png, image/jpeg, image/webp"
        type="file"
        tabIndex={-1}
        style={{ display: "none" }}
      />
      <div>
        <div className="hero-bg">
          <div className="container pt-[90px] space-y-6 lg:relative lg:space-y-0 lg:min-h-[700px] lg:pt-[160px] lg:flex lg:justify-between lg:items-start">
            <div className="lg:pr-4">
              <h1 className="text-neutral-ink-700 mb-4 text-center lg:text-left !leading-tight H30B lg:H56B">
                Thêm đổ bóng thông minh{" "}
                <div className="block w-fit relative after:absolute after:bg-[#27FFFF] after:left-0 after:bottom-1.5 lg:after:bottom-2 after:w-full after:h-2 lg:after:h-3 mx-auto mt-2 lg:mx-0 lg:mt-0">
                  <span className="relative z-10">cho hình ảnh</span>
                </div>
              </h1>
              <p className="text-neutral-ink-600 text-center lg:text-left T16R lg:T20R">
                Biến ảnh của bạn trở nên thực tế và chuyên nghiệp với hiệu ứng
                bóng thông minh của trí tuệ nhân tạo
              </p>
              <div className="mt-4 sm:block hidden">
                <img
                  src="https://assets.snapedit.app/images/easy-shadow/hero_banner_static.webp"
                  alt="Thêm bóng vào bất kỳ hình ảnh nào một cách dễ dàng"
                />
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
                            src="https://assets.snapedit.app/images/easy-shadow/demo_1.jpg"
                            alt="sample"
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/easy-shadow/demo_2.jpg"
                            alt="sample"
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/easy-shadow/demo_3.jpg"
                            alt="sample"
                            className="object-cover w-full h-full"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/easy-shadow/demo_4.jpg"
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
              <img
                src="https://assets.snapedit.app/images/easy-shadow/hero_banner_static.webp"
                alt="Thêm bóng vào bất kỳ hình ảnh nào một cách dễ dàng"
              />
            </div>
          </div>
        </div>
        <div className="snap-block">
          <div className="container pb-5 lg:pb-0">
            <div className="text-center lg:mb-12 mb-7">
              <h2 className="snap-block-heading">
                Cách thêm bóng vào hình ảnh bằng trí tuệ nhân tạo?
              </h2>
              <div className="text-neutral-ink-600 lg:w-2/3 lg:mx-auto T14R lg:T16R">
                <p>
                  Hướng dẫn ngắn về cách sử dụng Bóng Dễ dàng để thêm và chỉnh
                  sửa bóng, hiệu ứng bóng{" "}
                </p>
              </div>
            </div>
            <div className="regular slider lg:grid lg:gap-9 lg:grid-cols-3">
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/easy-shadow/step_1.webp"
                  alt="1. Tải lên hình ảnh"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      1
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      1. Tải lên hình ảnh
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Nhấn vào <b>Tải lên</b> hoặc <b>Kéo và thả</b> hình ảnh của
                    bạn vào trình chỉnh sửa Bóng Dễ dàng của Snapedit
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/easy-shadow/step_2.webp"
                  alt="2. Thêm và chỉnh sửa bóng"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      2
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      2. Thêm và chỉnh sửa bóng
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Trí tuệ nhân tạo sẽ thêm bóng vào ảnh cho các đối tượng
                    chính của ảnh. Bạn có thể tùy chỉnh hiệu ứng bóng để tạo ra
                    diện mạo chuyên nghiệp và phù hợp nhất cho ảnh của bạn.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/easy-shadow/step_3.webp"
                  alt="3. Tải xuống & chia sẻ"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      3
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      3. Tải xuống &amp; chia sẻ
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Khi hoàn thành, bạn có thể chọn lưu ảnh của mình ở nhiều
                    kích thước khác nhau hoặc đơn giản là thêm nhiều hình ảnh
                    khác vào phiên chỉnh sửa của bạn để tiếp tục thêm hiệu ứng
                    bóng màu đen.
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
                  Tải ứng dụng di động SnapEdit
                </h2>
                <p className="font-normal text-base-content px-2 sm:w-3/4">
                  Ứng dụng SnapEdit có sẵn trên Apple Store &amp; Google Play
                  Store. Ứng dụng của chúng tôi đã được sử dụng bởi người dùng
                  trên khắp thế giới để làm sắc nét ảnh.
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
                Tạo đổ bóng hoàn hảo cho ảnh của bạn -{" "}
                <span className="inline-block leading-normal ai-gradient">
                  Shadow AI
                </span>
              </h2>
              <div className="space-y-12 pt-10 lg:pt-[72px] lg:space-y-16">
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/easy-shadow/upside_1.webp"
                    alt="snap main feature"
                    className="order-2 max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pr-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Đem đối tượng vào cuộc sống với hiệu ứng bóng lớp
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Bóng Dễ dàng AI giúp bỏ qua công việc thủ công mệt mỏi.
                      Chúng tôi sử dụng trí tuệ nhân tạo để tự động tăng cường
                      ảnh của bạn bằng hiệu ứng bóng có vẻ thực tế và tạo chiều
                      sâu.
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/easy-shadow/upside_2.webp"
                    alt="snap main feature"
                    className="max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pl-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Kích hoạt sản phẩm bằng chương trình tạo bóng AI
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Đối với chủ cửa hàng, bóng có thể truyền tải một cảm giác
                      thực tế làm cho sản phẩm của bạn nổi bật giữa hàng loạt sự
                      lựa chọn. Tách sản phẩm của bạn khỏi nền ảnh chỉ trong vài
                      giây.
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/easy-shadow/upside_3.webp"
                    alt="snap main feature"
                    className="order-2 max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pr-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Tạo câu chuyện cảm xúc bằng chỉnh sửa bóng
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Thêm bóng vào hình ảnh của người hoặc đối tượng có thể
                      giúp khán giả cảm thông với thông điệp của bạn và tầm nhìn
                      thương hiệu của bạn dễ dàng hơn.
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
                    alt="snap main feature"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Trình chỉnh sửa bóng mạnh mẽ cho mọi người
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      SnapEdit cung cấp cho người dùng nhiều tùy chọn tùy chỉnh
                      hiệu ứng bóng. Bạn có thể thay đổi hướng ánh sáng nhân
                      tạo, hoặc thậm chí cường độ hoặc chiều dài. SnapEdit cũng
                      cung cấp nhiều tính năng chỉnh sửa ảnh AI hữu ích khác như{" "}
                      <a href="https://snapedit.app/background-remover">
                        loại bỏ nền
                      </a>{" "}
                      hoặc{" "}
                      <a href="https://snapedit.app/enhance">cải thiện ảnh</a> -
                      bạn có thể sử dụng để cải thiện hoặc chỉnh sửa ảnh theo sở
                      thích của bạn.
                    </p>
                  </div>
                </li>
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_2.png"
                    alt="snap main feature"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Bóng thực tế và chính xác trên nền ảnh
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Quên đi những giờ đồng hồ trong Photoshop để tạo hiệu ứng
                      bóng hoàn hảo. Các tính năng chỉnh sửa bóng của SnapEdit
                      có thể thực hiện nhanh chóng cho bạn chỉ trong vài giây.
                      Được đào tạo trên hàng triệu ảnh, thuật toán của chúng tôi
                      biết ở đâu và cách vẽ bóng để ngay lập tức nâng cao ảnh
                      của bạn.
                    </p>
                  </div>
                </li>
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_3.png"
                    alt="snap main feature"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Dễ sử dụng và nhanh chóng
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Bóng Dễ dàng được thiết kế để sử dụng bởi người dùng có
                      mọi trình độ kỹ thuật. Ngay cả bố mẹ của bạn cũng có thể
                      sử dụng trình tạo bóng trí tuệ nhân tạo của chúng tôi để
                      tự do thêm và chỉnh sửa bóng.
                    </p>
                  </div>
                </li>
                <li className="space-x-5 items-start flex lg:space-x-6 lg:p-4">
                  <img
                    src="https://assets.snapedit.app/images/common/Frame_4.png"
                    alt="snap main feature"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Chỉnh sửa bóng trên tất cả các thiết bị thông thường
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Bóng Dễ dàng hoạt động trên trình duyệt web của bạn (tương
                      thích với Chrome, Firefox, Safari). Bạn cũng có thể sử
                      dụng tính năng tạo bóng trên ứng dụng di động iOS &amp;
                      Android của chúng tôi.
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
                Câu hỏi thường gặp về Easy Shadow AI
              </h2>
            </div>
            <ul className="border-t divide-y">
              <li>
                <button
                  className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                  id="headlessui-disclosure-button-:rva:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Easy Shadow AI của SnapEdit là gì?
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
                  id="headlessui-disclosure-button-:rvc:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Làm cách nào để thêm bóng đổ vào một bức tranh?
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
                  id="headlessui-disclosure-button-:rve:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Việc sử dụng Easy Shadow có an toàn không?
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
                  id="headlessui-disclosure-button-:rvg:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Các định dạng hình ảnh nào có thể được sử dụng?
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
                  id="headlessui-disclosure-button-:rvi:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể sử dụng ứng dụng Easy Shadow trên iPhone không?
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
                  id="headlessui-disclosure-button-:rvk:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Có phải sử dụng miễn phí không?
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
