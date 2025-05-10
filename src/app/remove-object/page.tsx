"use client";

import { Footer } from "@/components/Footer";
import { useUploadStore } from "@/stores/useUploadStore";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function RemoveObject() {
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
      router.push("/remove-object/upload");
    }, 1000);
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-40 transition flex flex-col justify-center items-center invisible opacity-0">
        <div
          color="white"
          // mode="outline"
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
      <div>
        <div className="flex flex-col justify-center items-center">
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
                    Xoá Vật Thể{" "}
                    <div className="block w-fit relative after:absolute after:bg-[#27FFFF] after:left-0 sm:after:bottom-2  after:bottom-[6px] after:w-full after:h-3 after:h-2 mx-auto mt-2">
                      <span className="relative z-10">trong ảnh</span>
                    </div>
                  </h1>
                  <p className="text-base-content sm:text-xl text-center">
                    Tự động phát hiện và xóa bỏ các vật thể không cần thiết trên
                    hình ảnh của bạn
                  </p>
                  <div className="mt-4 sm:block hidden">
                    <img
                      src="https://assets.snapedit.app/images/hero_banner_static_ba.webp"
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
                          onClick={handleClick}
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
                                src="https://assets.snapedit.app/images/sample-1-xs.webp"
                                alt="sample"
                                className="w-12 h-12 object-cover"
                              />
                            </button>
                          </li>
                          <li className="inline-block">
                            <button className="transition hover:opacity-80">
                              <img
                                src="https://assets.snapedit.app/images/sample-2-xs.webp"
                                alt="sample"
                                className="w-12 h-12 object-cover"
                              />
                            </button>
                          </li>
                          <li className="inline-block">
                            <button className="transition hover:opacity-80">
                              <img
                                src="https://assets.snapedit.app/images/sample-3-xs.webp"
                                alt="sample"
                                className="w-12 h-12 object-cover"
                              />
                            </button>
                          </li>
                          <li className="inline-block">
                            <button className="transition hover:opacity-80">
                              <img
                                src="https://assets.snapedit.app/images/sample-4-xs.webp"
                                alt="sample"
                                className="w-12 h-12 object-cover"
                              />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 mb-4 lg:mt-4 lg:mb-0 lg:order-2 hero-ads">
                    <div>
                      {/* <ins
                        className="adsbygoogle infeed"
                        style={{ display: "block", height: 175 }}
                        data-ad-client="ca-pub-8083007883278099"
                        data-ad-slot={6742344343}
                        data-ad-format="fluid"
                        data-ad-layout="image-top"
                        data-full-width-responsive="true"
                        data-adsbygoogle-status="done"
                        data-ad-status="unfilled"
                      >
                        <div
                          id="aswift_2_host"
                          style={{
                            border: "none",
                            height: 175,
                            width: 453,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            visibility: "visible",
                            backgroundColor: "transparent",
                            display: "inline-block",
                          }}
                        >
                          <iframe
                            id="aswift_2"
                            name="aswift_2"
                            // browsingtopics={true}
                            style={{
                              left: 0,
                              position: "absolute",
                              top: 0,
                              border: 0,
                              width: 453,
                              height: 175,
                            }}
                            sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                            width={453}
                            height={175}
                            frameBorder={0}
                            marginWidth={0}
                            marginHeight={0}
                            // vspace={0}
                            // hspace={0}
                            allowTransparency={true}
                            scrolling="no"
                            allow="attribution-reporting; run-ad-auction"
                            src="https://googleads.g.doubleclick.net/pagead/ads?gdpr=0&us_privacy=1---&gpp_sid=-1&client=ca-pub-8083007883278099&output=html&h=175&slotname=6742344343&adk=1735208027&adf=717927033&pi=t.ma~as.6742344343&w=453&abgtt=6&lmt=1746369561&rafmt=11&format=453x175&url=https%3A%2F%2Fsnapedit.app%2Fvi%2Fremove-object&fwrattr=true&wgl=1&uach=WyJtYWNPUyIsIjE1LjQuMSIsImFybSIsIiIsIjEzNS4wLjcwNDkuOTciLG51bGwsMCxudWxsLCI2NCIsW1siR29vZ2xlIENocm9tZSIsIjEzNS4wLjcwNDkuOTciXSxbIk5vdC1BLkJyYW5kIiwiOC4wLjAuMCJdLFsiQ2hyb21pdW0iLCIxMzUuMC43MDQ5Ljk3Il1dLDBd&dt=1746369561517&bpp=2&bdt=M&idt=3&shv=r20250430&mjsv=m202505010101&ptt=9&saldr=aa&abxe=1&cookie=ID%3D9cfb5bb8f2011060%3AT%3D1746110282%3ART%3D1746346308%3AS%3DALNI_MYG6UluaPwsBURLyguaGmzYzN1c9A&gpic=UID%3D0000101645bd244c%3AT%3D1746110282%3ART%3D1746346308%3AS%3DALNI_MZr5N4QmlV7of08TeBbFc4egj_K1g&eo_id_str=ID%3D5f18ace24dde1ad6%3AT%3D1746110282%3ART%3D1746346308%3AS%3DAA-Afjb44dtZrRU02NGai3lUcQsI&prev_fmts=0x0%2C763x669%2C453x175&nras=2&correlator=7707750415468&frm=20&pv=1&rplot=0&u_tz=420&u_his=31&u_h=900&u_w=1440&u_ah=790&u_aw=1440&u_cd=30&u_sd=2&dmc=8&adx=837&ady=593&biw=1440&bih=669&scr_x=0&scr_y=0&eid=95358863%2C95358865%2C95358975%2C95359091%2C95359240%2C31092181%2C95359121%2C31092107%2C31090358%2C31091871&oid=2&psts=AOrYGsll5FOflDwpGyLE81p-7U2Zn1FaUHIgy8O_4waLA_WANcnHqYIM4LBWN6P3Ow99lYXMiPf74avJ-nB4oCd3s_gijA&pvsid=6223261375741386&tmod=1825921124&uas=3&nvt=1&fc=1920&brdim=0%2C25%2C0%2C25%2C1440%2C25%2C1440%2C790%2C1440%2C669&vis=1&rsz=%7C%7CeE%7C&abl=CS&pfx=0&fu=128&bc=31&bz=1&td=1&tdf=2&psd=W251bGwsbnVsbCxudWxsLDFd&nt=1&ifi=4&uci=a!4&fsb=1&dtd=11"
                            data-google-container-id="a!4"
                            tabIndex={0}
                            title="Advertisement"
                            aria-label="Advertisement"
                            data-google-query-id="CMCK-sqFio0DFQ9ZwgUdx5wexg"
                            data-load-complete="true"
                          />
                        </div>
                      </ins> */}
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:hidden">
                  <img
                    src="https://assets.snapedit.app/images/hero_banner_static_ba.webp"
                    alt="hero-banner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="snap-block">
              <div className="container pb-5">
                <div className="text-center sm:mb-12 mb-7">
                  <h2 className="snap-block-heading">
                    Cách xoá vật thể khỏi hình ảnh với AI
                  </h2>
                  <p className="text-base-content-tertiary text-sm sm:w-2/3 sm:mx-auto">
                    Chỉ cần 4 bước đơn giản để tạo ra những hình ảnh đẹp do
                    chính bạn thực hiện
                  </p>
                </div>
                <div className="regular slider sm:grid sm:grid-cols-4 sm:gap-9">
                  <div className="bg-white inline-block max-w-full whitespace-normal px-2 align-top">
                    <img
                      src="https://assets.snapedit.app/images/remove_obj_step_1.webp"
                      alt="Tải ảnh để dọn dẹp"
                      className="w-full mb-4"
                    />
                    <div>
                      <h3 className="font-semibold mb-4">
                        <span className="w-7 h-7 rounded-full bg-blue-3 text-primary font-semibold inline-block text-center mr-2 leading-[28px] align-middle">
                          1
                        </span>
                        <span className="align-middle inline-block text-sm">
                          Tải ảnh để dọn dẹp
                        </span>
                      </h3>
                      <p className="text-base-content-tertiary text-sm">
                        Tải ảnh lên hoặc Kéo và thả hình ảnh vào khung &quot;Tải
                        Ảnh&quot; để bắt đầu xoá vật thể với SnapEdit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white inline-block max-w-full whitespace-normal px-2 align-top">
                    <img
                      src="https://assets.snapedit.app/images/remove_obj_step_2.webp"
                      alt="Chọn các vật thể cần xoá"
                      className="w-full mb-4"
                    />
                    <div>
                      <h3 className="font-semibold mb-4">
                        <span className="w-7 h-7 rounded-full bg-blue-3 text-primary font-semibold inline-block text-center mr-2 leading-[28px] align-middle">
                          2
                        </span>
                        <span className="align-middle inline-block text-sm">
                          Chọn các vật thể cần xoá
                        </span>
                      </h3>
                      <p className="text-base-content-tertiary text-sm">
                        AI sẽ tự động làm nổi bật các vật thể được coi là không
                        mong muốn. Bạn chỉ cần nhấn nút Xóa
                      </p>
                    </div>
                  </div>
                  <div className="bg-white inline-block max-w-full whitespace-normal px-2 align-top">
                    <img
                      src="https://assets.snapedit.app/images/remove_obj_step_3.webp"
                      alt="Điều chỉnh và xem trước"
                      className="w-full mb-4"
                    />
                    <div>
                      <h3 className="font-semibold mb-4">
                        <span className="w-7 h-7 rounded-full bg-blue-3 text-primary font-semibold inline-block text-center mr-2 leading-[28px] align-middle">
                          3
                        </span>
                        <span className="align-middle inline-block text-sm">
                          Điều chỉnh và xem trước
                        </span>
                      </h3>
                      <p className="text-base-content-tertiary text-sm">
                        AI của SnapEdit sẽ xoá các vật thể không cần thiết trong
                        vài giây. Điều chỉnh hình ảnh của bạn với cọ chỉnh sửa
                        thủ công để đạt được vẻ ngoài hoàn hảo
                      </p>
                    </div>
                  </div>
                  <div className="bg-white inline-block max-w-full whitespace-normal px-2 align-top">
                    <img
                      src="https://assets.snapedit.app/images/remove_obj_step_4.webp"
                      alt="Tải xuống & chia sẻ"
                      className="w-full mb-4"
                    />
                    <div>
                      <h3 className="font-semibold mb-4">
                        <span className="w-7 h-7 rounded-full bg-blue-3 text-primary font-semibold inline-block text-center mr-2 leading-[28px] align-middle">
                          4
                        </span>
                        <span className="align-middle inline-block text-sm">
                          Tải xuống &amp; chia sẻ
                        </span>
                      </h3>
                      <p className="text-base-content-tertiary text-sm">
                        Sau khi xoá, bạn có thể tải xuống hình ảnh đẹp mà bạn đã
                        chỉnh sửa hoặc chia sẻ trực tiếp với bạn bè.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white">
              <div className="container sm:pb-14 pb-10">
                <div
                  className="rounded-2xl sm:py-10 sm:px-14 sm:flex sm:justify-between sm:items-center px-4 py-6 text-center"
                  style={{
                    background:
                      "linear-gradient(167.7deg, rgb(226, 234, 244) 0%, rgb(236, 226, 244) 100.38%)",
                  }}
                >
                  <div className="mb-4 sm:flex-1">
                    <h2 className="font-semibold text-gray-2 mb-2 sm:text-3xl text-xl">
                      Tải SnapEdit trên di động
                    </h2>
                    <p className="font-normal text-base-content px-2 sm:w-3/4">
                      Nâng cao trải nghiệm chỉnh sửa ảnh của bạn với SnapEdit
                      trên thiết bị iOS &amp; Android
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
          </div>
          <div>
            <div>
              <div className="bg-[#F8FAFD] sm:pt-24 sm:pb-[120px] py-12">
                <div className="container">
                  <h2 className="font-bold sm:w-3/4 sm:text-[56px] text-[32px]">
                    Xoá Vật Thể Nhanh và Chính Xác với{" "}
                    <span className="ai-gradient inline-block">
                      Công Nghệ AI
                    </span>
                  </h2>
                  <div className="sm:pt-[72px] pt-10 sm:space-y-16 space-y-12">
                    <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                      <img
                        src="https://assets.snapedit.app/images/feature-1.webp"
                        alt="snap feature"
                        className="max-w-[528px] w-full"
                      />
                      <div className="sm:pl-20 mt-4">
                        <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                          AI xoá vật thể mạnh mẽ
                        </h3>
                        <p className="sm:mb-8 mb-4 text-sm">
                          AI của SnapEdit giúp bạn làm sạch ảnh nhanh chóng và
                          chính xác hơn so với việc xoá thủ công
                        </p>
                      </div>
                    </div>
                    <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                      <img
                        src="https://assets.snapedit.app/images/feature-2.webp"
                        alt="snap feature"
                        className="order-2 max-w-[528px] w-full"
                      />
                      <div className="sm:pr-20 mt-4">
                        <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                          Xoá du khách khỏi ảnh du lịch
                        </h3>
                        <p className="sm:mb-8 mb-4 text-sm">
                          Bực bội với những người đang ở phía sau? SnapEdit sẽ
                          làm bạn trở thành tâm điểm của bức ảnh
                        </p>
                      </div>
                    </div>
                    <div className="sm:flex sm:justify-between sm:items-center text-base-content-primary">
                      <img
                        src="https://assets.snapedit.app/images/feature-3.webp"
                        alt="snap feature"
                        className="max-w-[528px] w-full"
                      />
                      <div className="sm:pl-20 mt-4">
                        <h3 className="sm:text-[32px] text-xl font-semibold sm:mb-4 mb-2">
                          Xoá văn bản không mong muốn
                        </h3>
                        <p className="sm:mb-8 mb-4 text-sm">
                          Bạn thậm chí có thể linh hoạt xoá văn bản khỏi ảnh của
                          mình và thêm văn bản mới, tất cả trong một
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-1 sm:py-[110px] py-14 w-[100vw]">
                <div className="container">
                  <ul className="mb-14 mb-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-24 sm:gap-y-8">
                    <li className="flex sm:space-x-6 sm:items-center sm:p-4 text-white items-start space-x-5">
                      <img
                        src="https://assets.snapedit.app/images/icon-feature-1.svg"
                        alt="snap main feature"
                        className="w-14"
                      />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                          Chỉnh sửa ảnh AI sáng tạo
                        </h3>
                        <p className="font-normal">
                          Vượt qua những nhiệm vụ đơn giản, AI của SnapEdit có
                          thể tái tưởng tượng hình ảnh của bạn và lấp đầy không
                          gian còn trống sau khi xoá vật thể với chi tiết trông
                          tự nhiên
                        </p>
                      </div>
                    </li>
                    <li className="flex sm:space-x-6 sm:items-center sm:p-4 text-white items-start space-x-5">
                      <img
                        src="https://assets.snapedit.app/images/icon-feature-2.svg"
                        alt="snap main feature"
                        className="w-14"
                      />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                          Duy trì tính nguyên vẹn của hình ảnh
                        </h3>
                        <p className="font-normal">
                          Đào tạo AI tiên tiến và sáng tạo trang bị cho SnapEdit
                          khả năng duy trì chất lượng hình ảnh sau khi xoá vật
                          thể.
                        </p>
                      </div>
                    </li>
                    <li className="flex sm:space-x-6 sm:items-center sm:p-4 text-white items-start space-x-5">
                      <img
                        src="https://assets.snapedit.app/images/icon-feature-3.svg"
                        alt="snap main feature"
                        className="w-14"
                      />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Thử miễn phí</h3>
                        <p className="font-normal">
                          SnapEdit cung cấp thời gian dùng thử miễn phí 3 ngày
                          trong đó bạn có thể làm quen với nhiều tính năng tuyệt
                          vời mà chúng tôi có
                        </p>
                      </div>
                    </li>
                    <li className="flex sm:space-x-6 sm:items-center sm:p-4 text-white items-start space-x-5">
                      <img
                        src="https://assets.snapedit.app/images/icon-feature-4.svg"
                        alt="snap main feature"
                        className="w-14"
                      />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                          Hỗ trợ cả web và ứng dụng di động
                        </h3>
                        <p className="font-normal">
                          Sử dụng SnapEdit trên trình duyệt hoặc điện thoại
                          thông minh của bạn để chỉnh sửa hình ảnh mọi nơi
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="snap-block">
              <div className="container">
                <div className="text-center mb-12 mb-6">
                  <h2 className="snap-block-heading">Câu Hỏi Thường Gặp</h2>
                </div>
                <ul className="divide-y border-t">
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          Công cụ xoá vật thể AI làm gì?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Công cụ xoá vật thể AI tận dụng sức mạnh của AI để
                          &quot;hiểu&quot; một hình ảnh nhanh chóng, lựa chọn và
                          tự động xoá các chi tiết không cần thiết. Chỉ để lại
                          phiên bản tốt nhất của hình ảnh của bạn!
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          Làm thế nào để sử dụng SnapEdit để xoá người khỏi ảnh,
                          xoá vật thể trong ảnh trực tuyến?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Tải ảnh lên SnapEdit =&gt; Chọn &quot;xoá vật
                          thể&quot; và đợi AI xoá các chi tiết không mong muốn
                          trên hình ảnh của bạn =&gt; Kiểm tra kết quả và tải
                          xuống
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          Làm thế nào để xoá watermark, xoá văn bản khỏi hình
                          ảnh?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Bạn có thể sử dụng công cụ &quot;xoá chữ&quot; của
                          chúng tôi để xoá văn bản khỏi hình ảnh của bạn
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          SnapEdit có miễn phí không?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Hiện tại, SnapEdit cho phép 03 lần chỉnh sửa và tải
                          xuống miễn phí mỗi ngày. Để tiếp tục, bạn có thể đăng
                          ký một trong các gói của chúng tôi. Đừng lo, chúng tôi
                          đã liên tục cập nhật ứng dụng của mình qua các năm.
                          Chúng tôi ở đây để tồn tại!
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          Tôi có thể sử dụng SnapEdit trên trình duyệt Web nào?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          SnapEdit hỗ trợ hầu hết các trình duyệt web hiện nay:
                          Google Chrome, Firefox, Safari,... Bạn có thể sử dụng
                          SnapEdit và tính năng xoá vật thể của nó trên bất kỳ
                          trình duyệt và hệ điều hành nào (Android, iOS)
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Chúng tôi hỗ trợ các định dạng hình ảnh phổ biến nhất
                          hiện nay: JPG, PNG, JPEG,... và cho phép người dùng
                          tải xuống ở định dạng HD với JPG.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          Tại sao đăng ký/mua hàng của tôi không hoạt động?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Nếu đăng ký hoặc mua hàng của bạn không hoạt động, có
                          thể do một số lý do sau:
                          <br />- Sự cố thanh toán: Đảm bảo phương thức thanh
                          toán của bạn được cập nhật và có đủ tiền。
                          <br />- Đồng bộ hóa tài khoản: Đảm bảo bạn đã đăng
                          nhập vào đúng tài khoản mà bạn đã sử dụng để thực hiện
                          mua hàng。
                          <br />- Cập nhật ứng dụng: Kiểm tra xem có bản cập
                          nhật nào cho SnapEdit không。 Đôi khi, các bản cập
                          nhật có thể giải quyết các vấn đề về đăng ký hoặc mua
                          hàng。
                          <br />- Khôi phục mua hàng: Nếu bạn đã cài đặt lại ứng
                          dụng hoặc chuyển đổi thiết bị, bạn có thể cần khôi
                          phục lại mua hàng của mình。 Đi tới cài đặt ứng dụng
                          và chọn &quot;Khôi phục mua hàng&quot;。
                          <br />- Sự cố cửa hàng ứng dụng: Đôi khi, sự cố có thể
                          phát sinh từ chính cửa hàng ứng dụng。 Thử đăng xuất
                          và đăng nhập lại vào tài khoản cửa hàng ứng dụng của
                          bạn hoặc liên hệ với bộ phận hỗ trợ của cửa hàng ứng
                          dụng để được trợ giúp thêm。 Nếu bạn tiếp tục gặp sự
                          cố, vui lòng liên hệ với bộ phận hỗ trợ khách hàng của
                          chúng tôi với chi tiết mua hàng của bạn để được trợ
                          giúp thêm。
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white">
                      <button className="px-5 py-4 flex w-full justify-between items-center transition">
                        <h3 className="text-left block font-semibold pr-4 text-base-content-primary">
                          SnapEdit có tự động tính phí không?
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
                      <div className="overflow-hidden" style={{ height: 0 }}>
                        <div className="pl-5 pr-16 pb-4 font-normal">
                          Có, SnapEdit cung cấp các dịch vụ dựa trên đăng ký tự
                          động gia hạn。 Nếu bạn đăng ký gói hàng tuần hoặc hàng
                          năm, đăng ký của bạn sẽ tự động gia hạn vào cuối mỗi
                          kỳ thanh toán hoặc vào cuối thời gian dùng thử miễn
                          phí của bạn trừ khi bạn hủy ít nhất 24 giờ trước ngày
                          gia hạn。 Bạn có thể quản lý và hủy đăng ký của mình
                          thông qua cài đặt của thiết bị。
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
