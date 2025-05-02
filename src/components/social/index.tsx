export function Social() {
  return (
    <div className="bg-gray-800 w-full lg:py-[120px] py-[64px]">
      <div className="lg:max-w-[1200px] lg:m-auto">
        <div className="w-full flex-col justify-center items-center gap-4 lg:gap-6 inline-flex mb-[56px] lg:mb-[80px] px-6 lg:px-0">
          <h2 className="text-white lg:text-[52px] text-[44px] text-center font-bold lg:leading-[72px] leading-[56px]">
            <span className="ai-gradient-2">Hành trình</span> {/* */}đằng sau
            ứng dụng chỉnh sửa ảnh AI - SnapEdit
          </h2>
          <div className="lg:max-w-[720px] m-auto">
            <p className="text-center text-whitewhite-064 T16R lg:T20R">
              Chúng tôi luôn tuân theo các giá trị của mình và đặt người dùng
              lên hàng đầu. SnapEdit luôn hoạt động tốt nhất để trở thành ứng
              dụng hàng đầu về chỉnh sửa ảnh online bằng AI. Số liệu thống kế
              của SnapEdit đang phá kỷ lục từng ngày với:
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 gap-12 w-full px-6 lg:px-0">
          <div className="flex items-center justify-center gap-6 relative">
            <div className="p-3 w-[72px] h-[72px] bg-white bg-opacity-20 rounded-3xl items-center gap-2 inline-flex">
              <img
                src="https://assets.snapedit.app/images/landing/Picture.webp"
                alt="Hơn 300 triệu"
                className="w-full h-auto"
              />
            </div>
            <div className="relative flex-1 text-white text-3xl font-semibold leading-10">
              <div className="mb-2">Hơn 300 triệu</div>
              <div className=" text-white text-opacity-60 text-base font-semibold leading-tight">
                Hình ảnh đã xử lý
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 relative">
            <div className="p-3 w-[72px] h-[72px] bg-white bg-opacity-20 rounded-3xl items-center gap-2 inline-flex">
              <img
                src="https://assets.snapedit.app/images/landing/heart.webp"
                alt="Hơn 20 triệu"
                className="w-full h-auto"
              />
            </div>
            <div className="relative flex-1 text-white text-3xl font-semibold leading-10">
              <div className="mb-2">Hơn 20 triệu</div>
              <div className=" text-white text-opacity-60 text-base font-semibold leading-tight">
                Người dùng
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 relative">
            <div className="p-3 w-[72px] h-[72px] bg-white bg-opacity-20 rounded-3xl items-center gap-2 inline-flex">
              <img
                src="https://assets.snapedit.app/images/landing/badge.webp"
                alt="Xếp hạng 4.9/5 sao"
                className="w-full h-auto"
              />
            </div>
            <div className="relative flex-1 text-white text-3xl font-semibold leading-10">
              <div className="mb-2">Xếp hạng 4.9/5 sao</div>
              <div className=" text-white text-opacity-60 text-base font-semibold leading-tight">
                Trên App Store
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
