export function Download() {
  return (
    <div className="w-full lg:mb-[192px] mb-[96px]">
      <div className="max-w-[1200px] m-auto px-6 lg:px-0">
        <div className="w-full bg-smart-banner-bg-gradient bg-center flex rounded-2xl lg:p-6 py-6 px-8 relative">
          <div className="flex flex-col lg:p-12 lg:max-w-[42rem]">
            <div className="flex flex-col lg:gap-3 lg:flex-row text-white lg:text-left text-center lg:text-[44px] text-[32px] font-semibold leading-[44px] lg:leading-[56px]">
              Tải SnapEdit{/* */} {/* */}ứng dụng di động
            </div>
            <div className="mt-4 text-white lg:text-left text-center text-opacity-90 lg:text-xl text-sm font-normal lg:leading-loose leading-tight">
              Hãy thử ứng dụng di động của chúng tôi để trải nghiệm người dùng
              tốt hơn và hiệu suất xuất sắc
            </div>
            <div className="flex mt-8 lg:mt-12 gap-4 lg:gap-6 max-w-sm">
              <a
                href="https://apps.apple.com/us/app/snapedit-remove-objects/id1611282499"
                className="w-1/2"
              >
                <img
                  src="https://assets.snapedit.app/images/landing/appstore.webp"
                  alt="landing.smartbanner.alt"
                  className="w-full h-auto m-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=snapedit.app.remove"
                className="w-1/2"
              >
                <img
                  src="https://assets.snapedit.app/images/landing/googleplay.webp"
                  alt="landing.smartbanner.alt"
                  className="w-full h-auto m-auto"
                />
              </a>
            </div>
          </div>
          <div className="absolute -bottom-1 right-0 max-w-[33rem] lg:block hidden">
            <img
              src="https://assets.snapedit.app/images/landing/smart_banner_right.webp"
              className="w-full h-auto m-auto"
              alt="công cụ chỉnh sửa ảnh miễn phí cho ảnh sản phẩm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
