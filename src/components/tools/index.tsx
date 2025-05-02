export function Tool() {
  return (
    <div className="flex flex-col items-center justify-center gap-[72px] pt-[120px] pb-20 sm:pt-16 relative self-stretch w-full flex-[0_0_auto] lg:max-w-[1200px] m-auto lg:px-0 px-3">
      <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="w-full text-center inline leading-[56px] text-[44px] items-center justify-center gap-4 relative flex-[0_0_auto] lg:flex-row lg:text-[56px] lg:leading-[72px] font-bold">
          <span className="font-bold ai-gradient lg:inline block">
            Web chỉnh sửa ảnh AI{/* */}{" "}
          </span>
          <span className="relative lg:w-full text-neutral-ink-600 lg:text-left text-center w-[90%] m-auto mt-[-1.00px] lg:inline block">
            với bộ công cụ đa dạng
          </span>
        </h2>
        <div className="lg:max-w-[720px] m-auto inline text-center">
          <p className="relative font-normal text-neutralink-500 text-xl text-center tracking-[0] leading-[30px]">
            Các công cụ chỉnh sửa ảnh AI đã sẵn sàng trên một ứng dụng web duy
            nhất- SnapEdit. Hãy xem{" "}
            <strong>công cụ chỉnh sửa ảnh trực tuyến</strong> của chúng tôi có
            thể làm những gì và thử nghiệm chúng MIỄN PHÍ!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="grid grid-cols-1 gap-6 relative self-stretch w-full flex-[0_0_auto] lg:grid-cols-3 ">
          <a href="/vi/remove-object">
            <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
              <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                  <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                    <img
                      alt="Công cụ chỉnh sửa ảnh AI giúp xóa vật thể và xóa người khỏi ảnh"
                      loading="lazy"
                      width={360}
                      height={240}
                      decoding="async"
                      data-nimg={1}
                      className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                      style={{ color: "transparent" }}
                      srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/landing/product_remove_object.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_remove_object.webp 2x"
                      src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_remove_object.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                        Xóa vật thể
                      </h3>
                    </div>
                    <div className="lg:min-h-[80px]">
                      <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                        AI tự động phát hiện người và các vật thể. Xóa vật thể
                        không mong muốn khỏi ảnh chỉ với một nhấp chuột.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60px] h-[60px] items-center justify-center gap-[10px] px-4 py-0 relative rounded-full [background:linear-gradient(180deg,rgb(226,234,244)_0%,rgb(236.08,226,244)_100%)]">
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bnjTLd text-center"
                    >
                      <svg
                        className="align-middle"
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
                </div>
              </div>
            </div>
          </a>
          <a href="/vi/enhance">
            <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
              <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                  <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                    <img
                      alt="Cải thiện ảnh với trình chỉnh sửa ảnh trực tuyến HD"
                      loading="lazy"
                      width={360}
                      height={240}
                      decoding="async"
                      data-nimg={1}
                      className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                      style={{ color: "transparent" }}
                      srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/landing/product_enhance_photo.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_enhance_photo.webp 2x"
                      src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_enhance_photo.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                        Làm nét ảnh
                      </h3>
                    </div>
                    <div className="lg:min-h-[80px]">
                      <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                        Tự động tăng độ phân giải và tăng chất lượng tổng thể
                        của ảnh. Làm ảnh trở nên sắc nét hơn.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60px] h-[60px] items-center justify-center gap-[10px] px-4 py-0 relative rounded-full [background:linear-gradient(180deg,rgb(226,234,244)_0%,rgb(236.08,226,244)_100%)]">
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bnjTLd text-center"
                    >
                      <svg
                        className="align-middle"
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
                </div>
              </div>
            </div>
          </a>
          <a href="/vi/background-remover">
            <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
              <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                  <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                    <img
                      alt="Xóa phông nền cho ảnh trên Snapedit dễ dàng"
                      loading="lazy"
                      width={360}
                      height={240}
                      decoding="async"
                      data-nimg={1}
                      className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                      style={{ color: "transparent" }}
                      srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/landing/product_remove_bg.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_remove_bg.webp 2x"
                      src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_remove_bg.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                        Xóa phông nền
                      </h3>
                    </div>
                    <div className="lg:min-h-[80px]">
                      <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                        Xóa nền ảnh nhanh chóng bằng AI để sáng tạo. Chỉnh sửa
                        phông nền cho ảnh với hơn 100 mẫu đã thiết kế sẵn.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60px] h-[60px] items-center justify-center gap-[10px] px-4 py-0 relative rounded-full [background:linear-gradient(180deg,rgb(226,234,244)_0%,rgb(236.08,226,244)_100%)]">
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bnjTLd text-center"
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
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/vi/ai-skin/upload">
            <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
              <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                  <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                    <img
                      alt="AI Xóa Mụn"
                      loading="lazy"
                      width={360}
                      height={240}
                      decoding="async"
                      data-nimg={1}
                      className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                      style={{ color: "transparent" }}
                      srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/landing/product_ai_skin.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_ai_skin.webp 2x"
                      src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_ai_skin.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                        AI Xóa Mụn
                      </h3>
                    </div>
                    <div className="lg:min-h-[80px]">
                      <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                        Chỉnh sửa làn da trong hình ảnh với AI. Loại bỏ mụn và
                        khuyết điểm, giúp làn da trở nên rạng rỡ, sẵn sàng để
                        chia sẻ.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60px] h-[60px] items-center justify-center gap-[10px] px-4 py-0 relative rounded-full [background:linear-gradient(180deg,rgb(226,234,244)_0%,rgb(236.08,226,244)_100%)]">
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bnjTLd text-center"
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
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/vi/remove-text">
            <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
              <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                  <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                    <img
                      alt="Xóa chữ trên ảnh dễ dàng bằng trí tuệ nhân tạo"
                      loading="lazy"
                      width={360}
                      height={240}
                      decoding="async"
                      data-nimg={1}
                      className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                      style={{ color: "transparent" }}
                      srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/landing/product_remove_text.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_remove_text.webp 2x"
                      src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_remove_text.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                        Xóa chữ trên ảnh
                      </h3>
                    </div>
                    <div className="lg:min-h-[80px]">
                      <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                        Tự động phát hiện và xóa chữ trên ảnh. Xóa các thông tin
                        không cần thiết trong ảnh dễ dàng.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60px] h-[60px] items-center justify-center gap-[10px] px-4 py-0 relative rounded-full [background:linear-gradient(180deg,rgb(226,234,244)_0%,rgb(236.08,226,244)_100%)]">
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bnjTLd text-center"
                    >
                      <svg
                        className="align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <rect
                          x={6}
                          y={6}
                          width={36}
                          height={36}
                          rx={3}
                          fill="none"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 19V16H32V19"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 34H26"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24 18L24 34"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="/vi/remove-wire-line">
            <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl overflow-hidden shadow-shadow-card hover:shadow-shadow-slide-hover group">
              <div className="flex flex-col items-start gap-2 p-3 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                  <div className="relative w-full -top-px -left-px rounded-2xl h-full">
                    <img
                      alt="Xóa dây điện khỏi ảnh trực tuyến"
                      loading="lazy"
                      width={360}
                      height={240}
                      decoding="async"
                      data-nimg={1}
                      className="flex-1 grow h-[240px] w-[360px] object-cover rounded-2xl transition-transform transform group-hover:scale-[120%]"
                      style={{ color: "transparent" }}
                      srcSet="https://assets.snapedit.app/cdn-cgi/image/width=384,quality=85/images/landing/product_wire_line.webp 1x, https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_wire_line.webp 2x"
                      src="https://assets.snapedit.app/cdn-cgi/image/width=750,quality=85/images/landing/product_wire_line.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-3 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                    <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 h-7 font-headline-h20b font-[number:var(--headline-h20b-font-weight)] text-[#252638] text-[length:var(--headline-h20b-font-size)] tracking-[var(--headline-h20b-letter-spacing)] leading-[var(--headline-h20b-line-height)] whitespace-nowrap [font-style:var(--headline-h20b-font-style)]">
                        Xóa dây điện
                      </h3>
                    </div>
                    <div className="lg:min-h-[80px]">
                      <p className="relative self-stretch text-[#5C5D6B)] font-normal text-sm">
                        {" "}
                        Tự động phát hiện và xóa dây điện khỏi ảnh. Xóa dây điện
                        giúp cải thiện bố cục cho ảnh.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60px] h-[60px] items-center justify-center gap-[10px] px-4 py-0 relative rounded-full [background:linear-gradient(180deg,rgb(226,234,244)_0%,rgb(236.08,226,244)_100%)]">
                    <div
                      color="inherit"
                      className="sc-eac7f02c-0 bnjTLd text-center"
                    >
                      <svg
                        className="align-middle"
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
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a href="/vi/tools">
        <button className="justify-center items-start gap-4 inline-flex cursor-pointer px-12 py-[18px] text-[20px] leading-[28px] shadow bg-blue-500 active:bg-blue-800 hover:bg-blue-700 rounded-full shadow text-white font-semibold">
          Khám phá tất cả các công cụ
          <div color="inherit" className="sc-eac7f02c-0 bnjTLd text-center">
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
  );
}
