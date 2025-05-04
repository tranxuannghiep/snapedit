// "use client";

import { Footer } from "@/components/Footer";

export default function RemoveText() {
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
        <div
          style={{
            background:
              "linear-gradient(99.41deg, rgb(236, 245, 251) 2.33%, rgb(248, 249, 252) 96.77%)",
          }}
        >
          <div className="container sm:relative sm:min-h-[700px] sm:pt-[160px] sm:flex sm:justify-between sm:items-start pt-[90px] space-y-6">
            <div>
              <h1 className="text-gray-2 font-bold !leading-tight mb-4 H30B lg:H56B text-center">
                Loại bỏ Văn bản{" "}
                <div className="block w-fit relative after:absolute after:bg-[#27FFFF] after:left-0 sm:after:bottom-2  after:bottom-[6px] after:w-full after:h-3 after:h-2 mx-auto mt-2">
                  <span className="relative z-10">từ Hình ảnh</span>
                </div>
              </h1>
              <p className="text-base-content sm:text-xl text-center">
                Loại bỏ văn bản từ hình ảnh trực tuyến mà không loại bỏ phông
                nền bằng công cụ loại bỏ văn bản AI của SnapEdit
              </p>
              <div className="mt-4 sm:block hidden">
                <img
                  src="https://assets.snapedit.app/images/remove-text/text_remover_hero_banner.webp"
                  alt="hero-banner"
                />
              </div>
            </div>
            <div className="flex flex-col sm:pb-4">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl sm:p-16 px-12 py-6 text-center">
                  <div className="relative text-center sm:w-[325px] max-w-md mx-auto">
                    <button
                      className="btn block w-full py-3 px-4 bg-blue-500 text-white rounded-lg text-base transition hover:bg-opacity-80 focus:bg-primary-focus focus:text-white font-semibold !rounded-full text-xl mb-4 py-5"
                      style={{
                        boxShadow: "rgba(43, 61, 227, 0.24) 0px 4px 32px",
                      }}
                    >
                      <div className="inline-block mr-2 align-middle">
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
                      <span className="inline-block align-middle">
                        Tải lên hình ảnh
                      </span>
                    </button>
                    <span className="font-semibold text-base-content hidden">
                      Hoặc chỉ cần thả vào đây
                    </span>
                    <p className="font-semibold text-base-content hidden">
                      Ctrl + V để dán hình ảnh
                    </p>
                  </div>
                  <div className="my-5 w-full border-t border-dashed border-[#D8D8DB]" />
                  <div className="text-center">
                    <p className="text-base-content mb-3">
                      Không có hình ảnh? Thử một trong những cái này
                    </p>
                    <ul className="space-x-3">
                      <li className="inline-block">
                        <button className="transition hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/remove-text/sample-1-xs.jpg"
                            alt="sample"
                            className="w-12 h-12 object-cover"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="transition hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/remove-text/sample-2-xs.jpg"
                            alt="sample"
                            className="w-12 h-12 object-cover"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="transition hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/remove-text/sample-3-xs.jpg"
                            alt="sample"
                            className="w-12 h-12 object-cover"
                          />
                        </button>
                      </li>
                      <li className="inline-block">
                        <button className="transition hover:opacity-80">
                          <img
                            src="https://assets.snapedit.app/images/remove-text/sample-4-xs.jpg"
                            alt="sample"
                            className="w-12 h-12 object-cover"
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
                src="https://assets.snapedit.app/images/remove-text/text_remover_hero_banner.webp"
                alt="hero-banner"
              />
            </div>
          </div>
        </div>
        <div className="snap-block">
          <div className="container pb-5 lg:pb-0">
            <div className="text-center lg:mb-12 mb-7">
              <h2 className="snap-block-heading">
                Cách xóa chữ trên ảnh không cần Photoshop?
              </h2>
              <div className="text-neutral-ink-600 lg:w-2/3 lg:mx-auto T14R lg:T16R" />
            </div>
            <div className="regular slider lg:grid lg:gap-9 lg:grid-cols-4">
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove-text/step_1.png"
                  alt="Tải ảnh có văn bản không mong muốn"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      1
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Tải ảnh
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Nhấp vào tùy chọn Tải ảnh hoặc kéo và thả một hình ảnh bất
                    kỳ ở bất kỳ đâu trên trang này.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove-text/step_2.png"
                  alt="Quá trình loại bỏ văn bản của Trí tuệ Nhân tạo xử lý ảnh trong vài giây"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      2
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Chờ Trí tuệ Nhân tạo xử lý
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Chờ vài giây để trí tuệ nhân tạo của chúng tôi phát hiện văn
                    bản trên ảnh.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove-text/step_3.png"
                  alt="Xóa văn bản đã phát hiện từ hình ảnh chỉ với một lần chạm"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      3
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Xóa và so sánh kết quả
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Khi xử lý hoàn thành, chỉ cần chọn Loại bỏ để xóa chữ khỏi
                    ảnh.
                  </p>
                </div>
              </div>
              <div className="bg-white inline-block w-full px-2 align-top whitespace-normal">
                <img
                  src="https://assets.snapedit.app/images/remove-text/step_4.png"
                  alt="Loại bỏ văn bản một cách thủ công bằng cọ hoặc tải về"
                  className="w-full mb-4 rounded-xl"
                />
                <div>
                  <h3 className="font-semibold mb-4">
                    <span className="font-semibold text-[14px] leading-[18px] w-7 h-7 rounded-full bg-blue-200 text-blue-500 inline-flex items-center mr-2 justify-center">
                      4
                    </span>
                    <span className="font-semibold text-[14px] leading-[18px] align-middle inline-block">
                      Chỉnh sửa &amp; Tải về
                    </span>
                  </h3>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-600">
                    Bạn có thể sử dụng bút vẽ trong ứng dụng để tô màu khu vực
                    còn lại muốn loại bỏ. Khi hoàn thành, hãy chọn Tải về để lưu
                    ảnh xuống thiết bị.
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
                  Tải ứng dụng loại bỏ văn bản SnapEdit
                </h2>
                <p className="font-normal text-base-content px-2 sm:w-3/4">
                  Trải nghiệm loại bỏ văn bản từ hình ảnh bằng ứng dụng di động
                  iOS hoặc Android của chúng tôi để có trải nghiệm và hiệu suất
                  tốt hơn
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
                Dễ dàng xóa chữ trong ảnh trực tuyến với{" "}
                <span className="inline-block leading-normal ai-gradient">
                  SnapEdit
                </span>
              </h2>
              <p className="font-normal text-[16px] leading-[24px]">
                Tương tự như các tính năng loại bỏ AI khác trên SnapEdit như
                công cụ xóa vật thể, tính năng loại bỏ dây điện - tính năng loại
                bỏ văn bản nhằm làm cho quá trình xóa chữ khỏi ảnh trở nên dễ
                dàng nhất có thể!
              </p>
              <div className="space-y-12 pt-10 lg:pt-[72px] lg:space-y-16">
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/remove-text/feature_1.png"
                    alt="Bảo tồn phông nền ảnh sau khi loại bỏ văn bản"
                    className="max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pl-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      Loại bỏ văn bản mà không loại bỏ phông nền hình ảnh
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Trí tuệ nhân tạo của chúng tôi giúp xóa text mà không ảnh
                      hưởng đến phông nền của ảnh, tái tạo chất lượng gốc của
                      ảnh mà không có văn bản không mong muốn
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                  <img
                    src="https://assets.snapedit.app/images/remove-text/feature_2.png"
                    alt="Trí tuệ nhân tạo được đào tạo để nhận diện văn bản trên ảnh một cách chính xác và nhanh chóng"
                    className="order-2 max-w-[528px] w-full rounded-2xl"
                  />
                  <div className="sm:pr-20 mt-4">
                    <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                      AI được huấn luyện đặc biệt cho việc loại bỏ chữ khỏi ảnh
                    </h3>
                    <p className="sm:mb-8 mb-4 text-sm">
                      Trí tuệ nhân tạo của chúng tôi được huấn luyện đặc biệt để
                      nhận diện văn bản trên ảnh dễ dàng, bao gồm văn bản viết
                      tay, văn bản mờ, phụ đề...
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
                    src="https://assets.snapedit.app/images/icon-feature-1.svg"
                    alt="snap main feature"
                    className="w-14 lg:w-auto"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] text-white">
                      Bút tẩy văn bản dễ sử dụng
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Với Trí tuệ Nhân tạo, việc loại bỏ từ ảnh không còn khó
                      khăn hoặc mất thời gian nữa. Bất kỳ người dùng nào cũng có
                      thể tải lên một ảnh và xóa tất cả văn bản khỏi ảnh của họ
                      chỉ trong vài giây.
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
                      Nhiều tính năng
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Tự do khám phá các tính năng khác trên SnapEdit để hoàn
                      thiện ảnh của bạn sau khi loại bỏ văn bản như công cụ{" "}
                      <a href="https://snapedit.app/vi/background-remover">
                        {" "}
                        xóa nền trực tuyến{" "}
                      </a>
                      , <a href="https://snapedit.app/"> làm nét ảnh </a>, công
                      cụ{" "}
                      <a href="https://snapedit.app/vi/remove-object">
                        {" "}
                        xóa vật thể{" "}
                      </a>
                      ...
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
                      Phù hợp với tất cả thiết bị
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Loại bỏ văn bản từ hình ảnh dễ dàng với bất kỳ thiết bị
                      nào bạn sở hữu - có thể là iPhone, iPad, thiết bị Android
                      hoặc máy tính cá nhân
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
                      Tất cả các loại tệp hình ảnh phổ biến đều được chấp nhận
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-neutral-ink-200">
                      Tất cả các loại tệp hình ảnh phổ biến như JPG, PNG đều có
                      thể được sử dụng trên công cụ loại bỏ văn bản trực tuyến
                      của chúng tôi.
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
                Câu hỏi Thường gặp
              </h2>
            </div>
            <ul className="border-t divide-y">
              <li>
                <button
                  className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-b from-zinc-100 to-zinc-100"
                  id="headlessui-disclosure-button-:rnq:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Làm cách nào để loại bỏ văn bản từ ảnh mà không loại bỏ
                    phông nền của ảnh?
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
                  id="headlessui-disclosure-button-:rns:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể chỉnh sửa ảnh của mình sau khi sử dụng AI của
                    SnapEdit không?
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
                  id="headlessui-disclosure-button-:rnu:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Việc loại bỏ văn bản từ hình ảnh trực tuyến có miễn phí
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
                  id="headlessui-disclosure-button-:ro0:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Tôi có thể xóa văn bản từ các hình ảnh hàng loạt không?
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
                  id="headlessui-disclosure-button-:ro2:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Làm cách nào để loại bỏ văn bản từ ảnh trên iPhone?
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
                  id="headlessui-disclosure-button-:ro4:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <h3 className="block pr-4 font-semibold text-left text-[18px] text-neutral-ink-600">
                    Làm cách nào để loại bỏ văn bản bằng các thiết bị Android?
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
