"use client";
export default function Create() {
  return (
    <div>
      <div role="button" tabIndex={0}>
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 transition flex flex-col justify-center items-center invisible opacity-0">
          <div
            // size={120}
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
          accept="image/png, image/jpeg, image/webp"
          type="file"
          tabIndex={-1}
          //   hidden=""
          style={{ display: "none" }}
        />
        <div className="overflow-x-hidden bg-white">
          <div className="lg:flex hidden pointer-events-auto fixed z-20 !gap-0 w-full h-[64px] sm:!h-[56px] bg-white items-center px-4 py-3 transition-all">
            <div className="flex items-center flex-grow">
              <div>
                <span className="w-40 cursor-pointer">
                  <img
                    src="https://assets.snapedit.app/images/landing/snapedit-logo.svg"
                    alt="Snapedit-logo"
                    className="w-22 h-8"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 relative flex-[0_0_auto]">
              <div>
                <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer hidden lg:flex max-h-[44px] w-auto justify-center items-center mr-2 bg-gradient-to-br from-cyan-400 via-blue-700 to-fuchsia-700">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bnjTLd text-center mr-1"
                  >
                    <svg
                      className="align-middle mr-1"
                      width={28}
                      height={29}
                      viewBox="0 0 28 29"
                      fill="none"
                    >
                      <rect
                        y="0.875"
                        width={28}
                        height={28}
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_9962_1492"
                            transform="scale(0.000976562)"
                          />
                        </pattern>
                        <image
                          id="image0_9962_1492"
                          width={1024}
                          height={1024}
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfoBAsICiDb0It0AAAPsklEQVR42u2ae6xl1V3HP2u/zj7vc+499zWXeTOPy0DnMg+GgtCipVRKDdroH0ZjVTqgaLHBWjUdSZs2NCXBxNgYMbHIH2owmkgCLdhSp5XOgANUB0uH19CZC/Oec+5578dayz/WPvecOw/mPdh4f8nKPnuf1/58f7/1W2v99oIFW7AFW7AFW7AFW7D/pybe7xu4UNv1Az3vfNMN54Z0zgJsf1KDAHsWchkYWQt+ASwLhDBHyzavhQ3CAhRoDfrEowZ1imtagUpeE4Gog13V6JpAV5NrKVB5CMfBHoFs2fzX8SOwfN3ZYznnAv+9p7QBg0JpjF8vDDPq59COR++6OVpJS65pC4Q2cgttznvAwgL0APyJzTHfs2yB8DQqJdAdEA5YGbBcDYiuUvyDJfhJZdG5OfSsBfiPbxn46S2I557lvuAgX6y9hvDykB+H/ASki+CkwNIG1LJA04dV6uQoUKeJBiKgDaIBogrqOHBcoNqgshCPQpwC2Rb4PhQrXINgq9a0GlVNvnx2UXBWn9r5jGZoFPb8D6QzfHJ2lr/tHKCQOgiWADcNfgkKE1BeAsVJyJTBckDLPrhS8yHnnUvQEdAB6gZaHDONWZAxRDkIRiEsQ+yCkuZ7paUwNoW0HbY5r/FgsByCGEbHzox3xk/893c1h2tJuDhMz9Z4/GiNVcExcPeDjyblC9yMEcLLGPj8BBQWQXYInLT5/pwQPW9L0HEC3QQxC1STVgcZQeRDWIKwCLEHUoIMQUX9NjYNY+vAdami+JS0eCL/DOydhhXL3xvxjF2g1gHHBddhdLbG12YbrApC0B60LNCxgK6e01IIaANRF5qHTWRkhkzzcv2oEF0T4lbdgOtZUM0E2oNw0nhcOgl0BKqdHJMmIyOomwFsiKEcwYNxyBv1D/OjWMKeHZo1HxTnJ8Bz39JooFDEO3SAbbN1bm13TZa3C9B0Ew+qRAQ9/49EcipD6NYhlQMvCy7gtsCugmpAFEHkQlSBKA3SNuF9Sui4f5QR2C6kCiaxNiPoSq5C81Vb8RtoqsGS93bwaQXY8YzGcWD3D2HpCn6r2eTTzbZhTGXA8yFOQ9g1n9dKQJCMyVqgT/zBRAwlDawA/GHQJeiEIEUfWgag4vngc+fJUcZG2PQQuDlox1ALoR2BBZ/wLD5X0mzrgtz1tmbTslNHwSkF+M9nNe++C9ksrFzNLbM1Hqg3SEkNXhr8DPhZEFloVfueZk6EfpeYZ7ofGekRSI+ZBCjfgfo7ECfggyF+ktfj/nsyMLkmdqEeQiOARghSQdrlM12bVxqSv19qwwuvaq6bEmcnQLcL5TLYNivqszxUbzAeSjPEpTJGgHQO3CI0ZxJUkfAlIuieCAOhoDVYLmRGITueXIs1mRGBlFB9E6LGQPgPeHueEBGoSBOFQE7Q0ga8GUIzgG4MjYBsyefLWYc9+0Ne7Fqw+4eaa6bFewuw8xmN0uB65GtVvlJvsLETJn0tgfeSY7YELWGGQgZTgBLoEyJBK9NXK1OQHe0NYRoVC5QyoayV5uiPBGH9ZG/3c4A2Q6KEQAviMjRiA99KukA7MCNNGLF8KM3X8i6/6mkOHbBPdrY1eLLrOxrbhulrEc0Gn202+JV2x0xpe9CpDKTS4PuQL0PHhibQFNDCCNIS0FGCIICwpYlakBuHxTdqcmMJfJzAx0nYS41XgOEp8IoQtiFqQtiCqAVhW9PtaNoB1GNBFUHVgbhovN6D7yat2YXDdTg0y8/WmmzLO3gCePrl+dlpLgJe3q7JuLD/ELy0i0+2W9zfbGGpZKKTGoBP+WZozBchdEEFA4luoPtrKbCUZukGzbIPgZMSyEibyZHsw0upE1EEdgpGpkx3OfoqRF1NLCHUECDoAF1hpg7ahzibwId9+DA2iTUModMGneUuFbL79SP89ebF8G8vaG69TswXwE/BbBPyOaYbTR5stylIDY7fB/cSeNcF24ZSAZRvks+8bK9NCGZKMHUbLN0IWhj4HqiS8+FVLNAxqFiDBeU1AmnB/v8SNCID3QNPphD4WTMdDgLo9OAjCCLohtDpQisG3SVlFXlg1TA/Ptxme5A+RQTIGPJZhutNHooirow1WKkTvJ943rbBcaBYACcHR2oDixoM/MQyuOkTmollIGOBivqgKjaToVPBS2k+H0vIL4ExF47vhqOzBrwnQkvDaA5ia8DzA/DdwCRzGYAVQNZiIuXxUD7LL3kRMycJkPHN8JQq0fEc0K7pW7ZnPO+lDLxlGXjXhZxvvFybMclEY4TYtBFu/5imWAIZCpScD6+k6fPmtUBHffhYCuIY0yKzzF25Hup74J0jxvMdAU0NwwUIlfF+EBsROgl80IW4a96XWfAqkCrTSkmz5DhJgGYXRoY4Vs7ye8MT+BOSW+tNqLehKw3cIHwqBYUsFIbhGCCUmTfcfgvcdqPGcyAORZLpB/q8NLCDnpfJ+Rx8xJwIkTTd85pV0PVg50GoKmgImCpAKI3XgwiC0HSHZgiHLZipQLUCy4ehkmOHEtx9qMs7I/VTCLB4BDwLYpd9doZ7cppvZHPcPKYhCqHdhVZgZmyeB2kfPBdGS0aAK8fh3o/DjVMarSCOhMn0Pc/LfrafFw09+FgQJUNf1IOP+0JYAqYnIXLgnw/AYQl+rg/fDOBADK87sDcDh3ywcrCxANM+Ly5XbK25vPadFfAHz59CgPIawZF9mkwO0LwlLLZi86iQXI+ThLsLsQQJiND0v0VFuPVq2PZxWDeuiXthrYwQWonkCFon16QwK0FpzqUSxIqkC8w/9l7H0vzGdBlsAU/VTGQcasO+DuxT8BMbZlzoWlCy4VoHrrfYvTxi6xGfV/5kHJ54AW6/vj8ZOmluWD2oyQyZ/mMJrlaKv5MRG6LA3IzqtWQdXw3MjXkhNOsQBf3ZWxz3Fy0y7n837JhFlOOYxGpZJ9+IOGkxYcy2IZ2FNzzYDswKqFvQtqHtQMMBNwVr8vCBLHuW2nzqsM/OP/0mPHkt3LHlhAXbqf6kfVyTLkOnAVqzQUkejQOuCcMBEGXCWWvo1AW7d8C+H0OnZRZIYWBa1DXnUWSSrJ2UxxwLXAd8z+QU1wbHPvnYe907T2fN2v+5YdjVgdAxreNA1wY7BYuLsLrA3kmH3zzgsf2XD8DrGbhjw1muBTJDguZxTdgBP8dLQrDVcviGFbNW0qvk6LmihuNBJgetOjRrJhGFXYg6JhtHsVHacRIQh7k1gtQgYsA2TQy03rmVNGGD5cOMBW/NQqpXh0xazoaxFKxIMzNhc89+m+0fqsKrPty54dSrQYvTWG5IYLnJCk2xUwjudlzetJL59FxXkAIRwuQElEfM7CvqeT4w3UCIBL7Xel51+te9gfccu3+td91xTPL1FsEb2uSglIRUBH4MZQ0rfViX4eBSwb1v2zyzZRaOCbhz0+kLIqcVAKA0Kkz/VCAV37Ms7nFc9tmOgdJKoAPQLcgpWLXS1AnCTj/sEX2gObgk/E8Mb9ea/9nBbuDYptR2tAS1toH3YnPMA5NpWFng6ITPfS9aPPHBBrQ13LnxvUti7ykAQK4izDLWeP3bts3vuh7v2o6AGGiDbgJ1zWIfliw1Xg8vMrzjAhNwIAA3Ms2LISdgIg3L89TGXe5/5CCP3yZN1/qF685cFD2jAACFUbNeFxZ0A560bH7fdTjs6qS219ToOqSqsG4YSpWkz18keACnAscds0p0E+9nBYxlYEmZxmiGz//iZh7744rJUR/bfHZl8bMSAGBowhQ3fA+67/IvjuC+lMMxR2tEW0BdoKow3oT1ayBbOBnyvOA1kAIxDPU6eBG4MWQEjGZgaZH2hM8XPjLO3zz7vBmqP7rp7ODPSQCA0riZ1PgVaHxf/qNj84cpj1kH0w100wwrV0/CsisHgC/A85ECf8xM1ekY72eA4RwsGiYYyvOl1Xm+vutdNAo+ev3Zw5+zAABDkwLVheIGi8r65qOuy+dTWRqOByIHugglD669CkrDFwYfRma1aaUhqIITQwooZWFimGiowINDFR6eaSOFgp87xwej5yUAwOiUgACO7czi3ywecfN8Ib2MtnuFEQEBy8uw5iozXT1f+BjIjEBwTGMHBr6YhpEKspzn4YkMXw2PE6Hh5pvO70H3eQkAMLzZQgeC4DmtvSn1dW+SL6avIPBKpo6QErDuShhd1Ac+F/ggBn8IXA2qJvDQFDIwMoIuFfnLXJ4v1VsEdgw3/cz5P+U/bwEARj5sFjXxISGdZfrPvSH9lfQYoVc01d9KGtZcbWaJrnUO8BHgQqECsmFWnfmcYGgcShUeKRbYJpu0tYTOkQshuEgbJI7+QCEssAt48hgPxHXxR+FxHNk1lZtdL8OhN/vz/zN5PoxhaJkpeESzpiCTGwd/gsecUe6THWpag1uGdRfg/QuOgJ5VbjA/o1uE3oj+slvWf5GqoJws5D1YvRYKQwNT4NPAh7Hxvp0102pLmopQaQnkJ3k8W+J+0aYGEDgXDn/RBADYqwRCQNwUHSun/8wt6b9KDaOdDEwMw9K1porkWKeH70YQaxi6ArIOpPPmUXtuEU94Fe5TkqN2DAGw5ecvzu6ei7pHqLFfER80stq+LqiWeDhuiN+O61BrwisvQOvg6T0fROap0dR6TdaCVAlSQ+JpO89dMmBGS1MTnL7j4t32OW2ROZPlF1s03tSoWQWxqNsFPoelU8Li18qOYMkUvN1grip5IrxyYNFKTTmn8XICryz+3cryOypkxlbmGcD0LRd3X9dF6wJzIqwUNKRZqOuQqpXls06Rf3KLmkVLYHS5Cbt58LEpbpYmYfFis6kiO8oOr8Q9QrLXjqDjweqLDH9JBAC4YrNFSyUPRiVHrRyfcQo8kS1pJlaDnR+o5PYSXwZWXg3DI5rMCC95BbZaUu+xGpq4AOtuvTQ7+i6JAAAT04LAN4kRyUE7K+4VPk+ny5rySlBWXwQJTK6FZSsV6SFe8fLi05bilfGbquhxwYqLkO0vuwAAI2sEQQxCQrfFTGxzj/TEd8tLobDElNglZnPVVZs0xWFec7Jiq5C8FFfg4PNlFm+5dPCXXACAynqLjitQLU27Ld5WHnc7OZ5bdA0UJiE3ClM3aBavUHvdrL7bkmqHyoPVgIktl/z2Lt9W2X0vatoHQKUg1lwVxTxaO8DmKIB1G+OZ0WF1V9Swn9Z5Rdy2KX/AvvA//b8kAMCr39e0nwX7eggF67NZHstm1HglH29tt51/zeciZGyRW+1dtnu67Juld31bU52FVWtBCDblc2rk+Zr1zY/kusTKIn1l6nLf0uW3nU+Z7TNvvKw59pYkfLND+/Xu+3Iv79t2+X2vmycjItlQsXjVT/3O/QVbsAVbsAVbsJ82+1/6UAHsZwQ33AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wNC0xMVQwODoxMDowOCswMDowMDj54AgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDQtMTFUMDg6MTA6MDgrMDA6MDBJpFi0AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTA0LTExVDA4OjEwOjMyKzAwOjAwNE4hxgAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                  </div>
                  <span className="text-center text-white text-sm font-semibold leading-tight">
                    Mở khóa phiên bản Pro
                  </span>
                </div>
              </div>
              <div className="flex gap-0.5">
                <div
                  color="inherit"
                  //   mode="image"
                  className="sc-eac7f02c-0 bjydVA text-center"
                >
                  <svg
                    className="align-middle"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Frame 1000002901" clipPath="url(#clip0_15677_5782)">
                      <g id="Group 1000002193">
                        <circle
                          id="Ellipse 1662"
                          cx={10}
                          cy={10}
                          r="8.36621"
                          fill="#FFE8BE"
                          stroke="url(#paint0_radial_15677_5782)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          id="Ellipse 1663"
                          cx="9.99998"
                          cy="10.0001"
                          r="6.0781"
                          fill="#D09500"
                        />
                        <g id="Group 1000002192" opacity="0.5">
                          <circle
                            id="Ellipse 1664"
                            cx={10}
                            cy={10}
                            r="6.07816"
                            fill="url(#paint1_linear_15677_5782)"
                          />
                          <circle
                            id="Ellipse 1665"
                            cx="9.99923"
                            cy={10}
                            r="9.34982"
                            fill="url(#paint2_linear_15677_5782)"
                          />
                        </g>
                        <g id="s">
                          <path
                            d="M13.4336 8.08848L11.6196 8.27599C11.5683 8.10237 11.4786 7.93917 11.3503 7.78638C11.2257 7.6336 11.0571 7.51033 10.8446 7.41657C10.6321 7.32282 10.3719 7.27594 10.0641 7.27594C9.64997 7.27594 9.30184 7.36101 9.01967 7.53116C8.74117 7.70131 8.60375 7.92181 8.60741 8.19266C8.60375 8.42531 8.69353 8.61455 8.87676 8.7604C9.06365 8.90624 9.37147 9.02603 9.80021 9.11979L11.2404 9.41147C12.0392 9.57467 12.6329 9.83337 13.0213 10.1876C13.4134 10.5417 13.6113 11.0053 13.615 11.5783C13.6113 12.0818 13.4556 12.5262 13.1477 12.9117C12.8436 13.2936 12.4203 13.5923 11.878 13.8075C11.3356 14.0228 10.7127 14.1305 10.0091 14.1305C8.9757 14.1305 8.14385 13.9256 7.51356 13.5159C6.88326 13.1026 6.50765 12.528 6.38672 11.7918L8.32708 11.6147C8.41503 11.9758 8.60192 12.2484 8.88775 12.4325C9.17358 12.6165 9.54553 12.7085 10.0036 12.7085C10.4763 12.7085 10.8556 12.6165 11.1414 12.4325C11.4309 12.2484 11.5757 12.021 11.5757 11.7501C11.5757 11.521 11.4822 11.3317 11.2953 11.1824C11.1121 11.0331 10.8263 10.9185 10.4378 10.8386L8.99769 10.5522C8.18783 10.3924 7.58868 10.1233 7.20024 9.74482C6.8118 9.36286 6.61942 8.88019 6.62308 8.29683C6.61942 7.80375 6.7605 7.37664 7.04633 7.01551C7.33583 6.65091 7.73709 6.36964 8.25012 6.17171C8.76682 5.97031 9.3623 5.86961 10.0366 5.86961C11.026 5.86961 11.8047 6.06928 12.3727 6.4686C12.9444 6.86793 13.298 7.40789 13.4336 8.08848Z"
                            fill="url(#paint3_linear_15677_5782)"
                          />
                          <path
                            d="M13.6726 8.26484L13.4541 8.28742L11.6402 8.47493L11.4749 8.49202L11.4278 8.33267C11.3851 8.188 11.3095 8.04886 11.1971 7.91497L11.1953 7.91279L11.1953 7.91278C11.0939 7.78846 10.9527 7.68284 10.7639 7.59956C10.5836 7.52004 10.3527 7.47594 10.0641 7.47594C9.67737 7.47594 9.36729 7.55524 9.12344 7.70214C8.89111 7.84423 8.8049 8.00535 8.8074 8.18995L8.80748 8.19581L8.80739 8.19581C8.80471 8.36564 8.86602 8.49593 9.00056 8.60331C9.15138 8.72067 9.4227 8.83239 9.84144 8.92408L11.2801 9.21545L11.2804 9.21552C12.0965 9.38225 12.7298 9.65125 13.1557 10.0395C13.593 10.4346 13.811 10.9534 13.815 11.577L13.815 11.5797C13.811 12.127 13.6405 12.6151 13.3041 13.0364C13.3041 13.0364 13.304 13.0364 13.304 13.0365L13.1477 12.9117C12.8436 13.2936 12.4203 13.5923 11.878 13.8075C11.3356 14.0228 10.7127 14.1305 10.0091 14.1305C8.9757 14.1305 8.14385 13.9256 7.51356 13.5159L13.6726 8.26484ZM13.6726 8.26484L13.6297 8.04941C13.484 7.31804 13.1011 6.73351 12.4875 6.30481L13.6726 8.26484Z"
                            stroke="white"
                            strokeOpacity="0.25"
                            strokeWidth="0.4"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_15677_5782"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(4.57049 5.22765) rotate(37.1608) scale(17.3108)"
                      >
                        <stop stopColor="#CF8700" />
                        <stop offset="0.962169" stopColor="#F8BA00" />
                      </radialGradient>
                      <linearGradient
                        id="paint1_linear_15677_5782"
                        x1="5.73395"
                        y1="5.51232"
                        x2={10}
                        y2="11.5491"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.475"
                          stopColor="white"
                          stopOpacity="0.435"
                        />
                        <stop
                          offset="0.735"
                          stopColor="white"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_15677_5782"
                        x1="4.22959"
                        y1="6.04113"
                        x2="15.2144"
                        y2="19.0078"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.365"
                          stopColor="white"
                          stopOpacity={0}
                        />
                        <stop offset="0.6" stopColor="white" />
                        <stop offset="0.87" stopColor="white" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_15677_5782"
                        x1="10.0008"
                        y1="5.86961"
                        x2="10.0008"
                        y2="14.1305"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#221700" />
                        <stop offset={1} stopColor="#684700" />
                      </linearGradient>
                      <clipPath id="clip0_15677_5782">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-bold text-[13px] leading-[20px] text-neutral-ink-500">
                  10
                </p>
              </div>
              <div className="relative z-10" data-headlessui-state="">
                <button
                  className="outline-none h-[46px]"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:r2g:"
                >
                  <div className="hidden lg:block mr-4">
                    <div className="flex justify-center items-center">
                      <div className="relative">
                        <div className="flex items-center justify-center rounded-full">
                          <div className="rounded-[50%] inline-block bg-white overflow-hidden w-10 h-10">
                            <img
                              className="w-10 h-10"
                              src="https://lh3.googleusercontent.com/a/ACg8ocLYqsy7m8kjIpev_oWEnWz-D4ZNEjI8mwo3armjBtPefRx5ig=s96-c"
                              width={40}
                              height={40}
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
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
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                  display: "none",
                }}
              />
            </div>
          </div>
          <div className="!hidden z-[51] fixed top-4 left-1/2 -translate-x-1/2 hidden lg:inline-flex">
            <div>
              <div className="items-center hidden space-x-4 lg:flex relative h-8">
                <div
                  className="H14B inline-flex items-center space-x-1.5 cursor-pointer bg-neutral-ink-50 px-1.5 h-8 rounded-lg transition"
                  id="product-dropdown"
                >
                  <span className="inline-block">
                    <div className="flex items-center">
                      <p className="font-semibold text-[14px] leading-[18px] ml-1.5">
                        {" "}
                      </p>
                    </div>
                  </span>
                  <span className="inline-flex">
                    <div
                      color="inherit"
                      //   mode="outline"
                      className="sc-eac7f02c-0 bnjTLd text-center  transition-all ease-in-out duration-150 -mt-0.25"
                    >
                      <svg
                        className="align-middle  transition-all ease-in-out duration-150 -mt-0.25"
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
                </div>
                <div className="absolute opacity-1 w-56 flex flex-col p-1 items-start top-12 left-[-15px] bg-white rounded-lg shadow-md opacity-0 pointer-events-none">
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="remove-obj-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            d="m6.2775 14.552h1.1725c0.44199-1e-4 0.86585-0.1757 1.1783-0.4883l7.27-7.27c0.3124-0.31254 0.488-0.73639 0.488-1.1783s-0.1756-0.86579-0.488-1.1783l-2.7492-2.7492c-0.3125-0.31245-0.7364-0.48798-1.1783-0.48798-0.442 0-0.8658 0.17553-1.1784 0.48798l-7.8558 7.8558c-0.31245 0.31255-0.48798 0.73643-0.48798 1.1783s0.17553 0.8658 0.48798 1.1783l2.1633 2.1634c0.31167 0.3125 0.735 0.4883 1.1775 0.4883z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m5.4863 6.9895 5.1084 5.1083"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m16.672 16.927h-15.058"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Xóa Vật Thể</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="enhance-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m8.3333 17.5h-4.1667c-0.44203 0-0.86595-0.1756-1.1785-0.4882-0.31257-0.3125-0.48816-0.7364-0.48816-1.1785v-4.1666c0-0.4421 0.17559-0.866 0.48816-1.1785 0.31256-0.3126 0.73648-0.4882 1.1785-0.4882h4.1667c0.44203 0 0.86595 0.1756 1.1785 0.4882 0.31256 0.3125 0.48816 0.7364 0.48816 1.1785v4.1666c0 0.4421-0.1756 0.866-0.48816 1.1785-0.31256 0.3126-0.73648 0.4882-1.1785 0.4882z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m10.833 5.8332h3.3333v3.3333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m9.5083 10.492 4.6583-4.6584"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m13.333 17.5h2.5c0.4421 0 0.866-0.1756 1.1785-0.4882 0.3126-0.3125 0.4882-0.7364 0.4882-1.1785v-11.667c0-0.44203-0.1756-0.86595-0.4882-1.1785-0.3125-0.31257-0.7364-0.48816-1.1785-0.48816h-11.667c-0.44203 0-0.86595 0.17559-1.1785 0.48816-0.31257 0.31256-0.48816 0.73648-0.48816 1.1785v2.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Làm Nét Ảnh</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="remove-bg-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
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
                    </span>
                    <span className="inline-block">Xóa Nền Ảnh</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="undefined-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <g clipPath="url(#a)">
                            <path
                              d="m13.758 3.7413c0.6578 0.65774 1.1795 1.4386 1.5355 2.298 0.356 0.85938 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8512-0.5392 2.7106-0.8777 1.6403-1.5355 2.298c-0.6577 0.6578-1.4386 1.1795-2.298 1.5355s-1.7804 0.5392-2.7106 0.5392-1.8513-0.1832-2.7107-0.5392c-0.85939-0.356-1.6403-0.8777-2.298-1.5355-1.3284-1.3284-2.0747-3.13-2.0747-5.0086 0-1.8786 0.74627-3.6803 2.0747-5.0087 1.3284-1.3284 3.13-2.0747 5.0087-2.0747 1.8786 0 3.6802 0.74627 5.0086 2.0747z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m14.849 5.1498c0.1683 0.28512 0.3167 0.58232 0.444 0.88955 0.356 0.85939 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8513-0.5392 2.7107-0.8777 1.6402-1.5355 2.298c-0.6577 0.6577-1.4386 1.1795-2.298 1.5354-0.8594 0.356-1.7804 0.5392-2.7106 0.5392s-1.8513-0.1832-2.7107-0.5392c-0.30724-0.1272-0.60443-0.2757-0.88955-0.4439 0.30058 0.5093 0.66622 0.9832 1.0916 1.4085 0.65774 0.6577 1.4386 1.1795 2.298 1.5354 0.85938 0.356 1.7805 0.5392 2.7107 0.5392s1.8512-0.1832 2.7106-0.5392c0.8594-0.3559 1.6403-0.8777 2.298-1.5354 0.6578-0.6578 1.1795-1.4386 1.5355-2.298s0.5392-1.7805 0.5392-2.7107-0.1832-1.8513-0.5392-2.7107-0.8777-1.6402-1.5355-2.298c-0.4253-0.42532-0.8991-0.79097-1.4085-1.0916z"
                              clipRule="evenodd"
                              fill="currentColor"
                              fillRule="evenodd"
                            />
                            <path
                              d="m14.849 5.1498 0.3812-0.64591c-0.2946-0.17388-0.6696-0.12633-0.9115 0.11559s-0.2895 0.61689-0.1156 0.91152l0.6459-0.3812zm0.444 0.88955-0.6929 0.28701 0.6929-0.28701zm0 5.4214-0.6929-0.287 0.6929 0.287zm-1.5355 2.298-0.5303-0.5304 0.5303 0.5304zm-2.298 1.5354 0.287 0.693-0.287-0.693zm-5.4213 0-0.28702 0.693 0.28702-0.693zm-0.88955-0.4439 0.3812-0.6459c-0.29464-0.1739-0.6696-0.1264-0.91152 0.1155s-0.28947 0.6169-0.1156 0.9115l0.64592-0.3811zm1.0916 1.4085-0.53033 0.5303 0.53033-0.5303zm2.298 1.5354-0.28702 0.693 0.28702-0.693zm5.4213 0 0.287 0.693-0.287-0.693zm2.298-1.5354 0.5304 0.5303-0.5304-0.5303zm1.5355-2.298-0.6929-0.287 0.6929 0.287zm0-5.4214-0.6929 0.28701 0.6929-0.28701zm-1.5355-2.298-0.5303 0.53033 0.5303-0.53033zm-2.0544-0.71035c0.1505 0.25493 0.2832 0.52066 0.397 0.79536l1.3858-0.57403c-0.1407-0.33976-0.3049-0.66842-0.491-0.98373l-1.2918 0.7624zm0.397 0.79536c0.3183 0.76839 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm0.4821 2.4237c0 0.83171-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821 2.4237c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm-1.3729 2.0546c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm-2.0547 1.3729c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0287 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm-2.4236 0.4821c-0.83171 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm-2.4237-0.4821c-0.2747-0.1137-0.54043-0.2465-0.79536-0.3969l-0.7624 1.2918c0.31531 0.1861 0.64397 0.3502 0.98373 0.491l0.57403-1.3859zm0.44532 1.1271c-0.38032-0.3803-0.70723-0.8039-0.97597-1.2593l-1.2918 0.7623c0.33243 0.5633 0.73681 1.0874 1.2071 1.5577l1.0607-1.0607zm2.0547 1.3729c-0.7684-0.3182-1.4666-0.7848-2.0547-1.3729l-1.0607 1.0607c0.72739 0.7274 1.5909 1.3044 2.5413 1.6981l0.57403-1.3859zm2.4237 0.4821c-0.8317 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm2.4236-0.4821c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0286 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm2.0547-1.3729c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm1.3729-2.0546c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm0.4821-2.4237c0 0.8317-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821-2.4237c0.3183 0.7684 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm-1.3729-2.0547c0.5881 0.5881 1.0546 1.2863 1.3729 2.0547l1.3858-0.57403c-0.3936-0.95038-0.9706-1.8139-1.698-2.5413l-1.0607 1.0607zm-1.2593-0.97596c0.4553 0.26874 0.879 0.59564 1.2593 0.97596l1.0607-1.0607c-0.4704-0.47033-0.9944-0.87471-1.5577-1.2071l-0.7623 1.2918z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width={20} height={20} fill="#fff" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Đổ Bóng AI</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="remove-wire-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m17.5 15.834h-15"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m5.5 10h-3"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m17.5 10h-3"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m17.5 4.167h-15"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m11.666 8.333-3.3333 3.3333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m8.333 8.333 3.3333 3.3333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Xóa Dây Điện</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="batch-processing-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M16.4995 13.15L8.99121 16.5"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M8.99167 16.5L1.5 13.15"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M16.4995 9L8.99121 12.35"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_4"
                              d="M8.99167 12.35L1.5 9"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_5"
                              d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Xử lý hàng loạt</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="remove-text-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m16 19h-12c-0.79565 0-1.5587-0.3161-2.1213-0.8787s-0.87868-1.3257-0.87868-2.1213v-12c0-0.79565 0.31607-1.5587 0.87868-2.1213s1.3257-0.87868 2.1213-0.87868h12c0.7956 0 1.5587 0.31607 2.1213 0.87868s0.8787 1.3257 0.8787 2.1213v12c0 0.7956-0.3161 1.5587-0.8787 2.1213s-1.3257 0.8787-2.1213 0.8787z"
                            stroke="#5C5D6B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m8.25 13.5h3.5"
                            stroke="#5C5D6B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m10 6.5v7"
                            stroke="#5C5D6B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M13.5 8.084V6.889C13.5 6.78583 13.459 6.68689 13.3861 6.61394C13.3131 6.54098 13.2142 6.5 13.111 6.5H6.889C6.78583 6.5 6.68689 6.54098 6.61394 6.61394C6.54098 6.68689 6.5 6.78583 6.5 6.889V8.085"
                            stroke="#5C5D6B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Xóa Chữ Trên Ảnh</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="undefined-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <g
                            clipPath="url(#a)"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="m12.542 14.243h-5.0845" />
                            <path d="m7.0673 13.994c-0.77897-0.5481-1.388-1.3042-1.7576-2.182-0.36954-0.8779-0.48464-1.842-0.33215-2.7821 0.34405-2.2092 2.1855-3.9727 4.4065-4.2328 0.71438-0.08682 1.439-0.02105 2.126 0.19297s1.3208 0.57141 1.8595 1.0486c0.5386 0.47714 0.9699 1.0632 1.2652 1.7193 0.2954 0.65618 0.4481 1.3676 0.4482 2.0872 1e-4 0.81402-0.1956 1.616-0.5707 2.3384-0.375 0.7225-0.9184 1.344-1.5843 1.8122-0.1167 0.0781-0.2129 0.1832-0.2803 0.3064s-0.1041 0.2608-0.107 0.4012v1.5114c0 0.5619-0.2232 1.1008-0.6205 1.4981s-0.9361 0.6205-1.498 0.6205h-0.84741c-0.56187 0-1.1007-0.2232-1.498-0.6205-0.39731-0.3973-0.62051-0.9362-0.62051-1.4981v-1.508c0-0.289-0.15422-0.5466-0.38896-0.7127z" />
                            <path d="m16.034 4.7607 1.0084-1.0084" />
                            <path d="m9.9992 2.2596v-1.4261" />
                            <path d="m4.067 4.7607-1.0084-1.0084" />
                            <path d="m17.627 9.8455h1.4321" />
                            <path d="m0.94043 9.8453h1.4321" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width={20} height={20} fill="#fff" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Làm Sáng Ảnh</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="undefined-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g
                            id="icon-blur-on"
                            clipPath="url(#clip0_14090_52785)"
                          >
                            <path
                              id="Vector"
                              d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                              fill="#0051EE"
                              stroke="#0051EE"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_14090_52785">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Làm Mờ Nền</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="change-sky-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="m6.9873 11.99c0.42916 0 0.83333 0.0883 1.1867 0.2658 0.13296-0.8593 0.56866-1.6428 1.2285-2.2091 0.65978-0.56627 1.5003-0.87811 2.3699-0.87921 1.9825 0 3.5983 1.595 3.6491 3.5692 0.5858 0.0766 1.1234 0.3646 1.5116 0.8098 0.3883 0.4452 0.6005 1.0169 0.5968 1.6077 6e-4 0.6436-0.2544 1.2612-0.709 1.7169s-1.0715 0.7122-1.7152 0.7131h-8.1183c-0.74071-0.0014-1.4506-0.2967-1.9737-0.821-0.52314-0.5244-0.81673-1.235-0.81628-1.9757 0-1.545 1.25-2.7975 2.79-2.7975z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m5.9894 9.3392c-0.10205-0.32243-0.15537-0.66138-0.15537-1.0058 0-0.88405 0.35119-1.7319 0.97632-2.357 0.62512-0.62512 1.473-0.97631 2.357-0.97631 0.88408 0 1.7319 0.35119 2.357 0.97631 0.1538 0.15378 0.291 0.32105 0.4105 0.49901"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m9.1338 2.3337v-0.66667"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m13.384 4.0922 0.4667-0.475"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m2.4668 8.334h0.66666"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m4.4248 3.6172 0.46667 0.475"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Thay Đổi Bầu Trời</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="convert-image-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 20 21"
                        >
                          <path
                            d="m5.2119 5.6726c2.662-2.6485 6.967-2.6376 9.6154 0.02437 1.7536 1.7625 2.4054 4.3416 1.6996 6.7256"
                            stroke="#252638"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m14.733 15.389c-2.6955 2.6164-7.0016 2.5523-9.618-0.1432-1.7115-1.7632-2.3389-4.3124-1.6412-6.6685"
                            stroke="#252638"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m4.7212 9.8235-1.5267-1.5267-1.5275 1.5275"
                            stroke="#252638"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m15.279 11.177 1.5267 1.5266 1.5275-1.5275"
                            stroke="#252638"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="m10 12.202c0.9398 0 1.7017-0.7619 1.7017-1.7017s-0.7619-1.7017-1.7017-1.7017c-0.93981 0-1.7017 0.76186-1.7017 1.7017s0.76186 1.7017 1.7017 1.7017z"
                            stroke="#252638"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Chuyển Đổi Ảnh</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="compress-image-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_12691_2490)">
                            <path
                              d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.33333 10H2.5"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.666 10H17.4993"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                              stroke="#252638"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_12691_2490">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Nén Ảnh</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="watermark-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                            stroke="#0051EE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                            stroke="#0051EE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Thêm watermark</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="undefined-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
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
                    </span>
                    <span className="inline-block">AI Xóa Mụn</span>
                  </button>
                  <button
                    className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                    id="undefined-button"
                  >
                    <span className="inline-flex hover:text-blue-500">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                            fill="currentColor"
                          />
                          <path
                            d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6673 17.1667L3.33398 3.83337"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </span>
                    <span className="inline-block">Làm mờ khuôn mặt</span>
                  </button>
                </div>
              </div>
              <div className="lg:hidden">
                <div className="w-full h-[56px] flex justify-start items-center absolute top-0 left-0">
                  <div
                    className="H14B inline-flex items-center space-x-1.5 cursor-pointer bg-neutral-ink-50 px-1.5 h-8 rounded-lg transition ml-12"
                    id="product-dropdown"
                  >
                    <span className="inline-block">
                      <div className="flex items-center">
                        <p className="font-semibold text-[14px] leading-[18px] ml-1.5">
                          {" "}
                        </p>
                      </div>
                    </span>
                    <span className="inline-flex">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bnjTLd text-center  transition-all ease-in-out duration-150"
                      >
                        <svg
                          className="align-middle  transition-all ease-in-out duration-150"
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
                  </div>
                </div>
                <div className="flex flex-col transition-all duration-200 ease-in-out bottom-0 left-0 bg-white hidden pointer-events-none">
                  <div className="w-screen h-screen opacity-50 bg-black fixed bottom-0 left-0 z-[9999]" />
                  <div className="fixed bottom-0 left-0 w-screen h-auto z-[10000]">
                    <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full mx-auto mb-4 cursor-pointer">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center"
                      >
                        <svg
                          className="align-middle"
                          fill="none"
                          viewBox="0 0 28 28"
                        >
                          <path
                            d="m5.833 5.833 16.333 16.333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth={2}
                          />
                          <path
                            d="m22.167 5.833-16.333 16.333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-2xl px-2 pt-2">
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="remove-obj-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                d="m6.2775 14.552h1.1725c0.44199-1e-4 0.86585-0.1757 1.1783-0.4883l7.27-7.27c0.3124-0.31254 0.488-0.73639 0.488-1.1783s-0.1756-0.86579-0.488-1.1783l-2.7492-2.7492c-0.3125-0.31245-0.7364-0.48798-1.1783-0.48798-0.442 0-0.8658 0.17553-1.1784 0.48798l-7.8558 7.8558c-0.31245 0.31255-0.48798 0.73643-0.48798 1.1783s0.17553 0.8658 0.48798 1.1783l2.1633 2.1634c0.31167 0.3125 0.735 0.4883 1.1775 0.4883z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m5.4863 6.9895 5.1084 5.1083"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m16.672 16.927h-15.058"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Xóa Vật Thể</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="enhance-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="m8.3333 17.5h-4.1667c-0.44203 0-0.86595-0.1756-1.1785-0.4882-0.31257-0.3125-0.48816-0.7364-0.48816-1.1785v-4.1666c0-0.4421 0.17559-0.866 0.48816-1.1785 0.31256-0.3126 0.73648-0.4882 1.1785-0.4882h4.1667c0.44203 0 0.86595 0.1756 1.1785 0.4882 0.31256 0.3125 0.48816 0.7364 0.48816 1.1785v4.1666c0 0.4421-0.1756 0.866-0.48816 1.1785-0.31256 0.3126-0.73648 0.4882-1.1785 0.4882z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m10.833 5.8332h3.3333v3.3333"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m9.5083 10.492 4.6583-4.6584"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m13.333 17.5h2.5c0.4421 0 0.866-0.1756 1.1785-0.4882 0.3126-0.3125 0.4882-0.7364 0.4882-1.1785v-11.667c0-0.44203-0.1756-0.86595-0.4882-1.1785-0.3125-0.31257-0.7364-0.48816-1.1785-0.48816h-11.667c-0.44203 0-0.86595 0.17559-1.1785 0.48816-0.31257 0.31256-0.48816 0.73648-0.48816 1.1785v2.5"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Làm Nét Ảnh</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="remove-bg-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
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
                        </span>
                        <span className="inline-block">Xóa Nền Ảnh</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="undefined-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <g clipPath="url(#a)">
                                <path
                                  d="m13.758 3.7413c0.6578 0.65774 1.1795 1.4386 1.5355 2.298 0.356 0.85938 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8512-0.5392 2.7106-0.8777 1.6403-1.5355 2.298c-0.6577 0.6578-1.4386 1.1795-2.298 1.5355s-1.7804 0.5392-2.7106 0.5392-1.8513-0.1832-2.7107-0.5392c-0.85939-0.356-1.6403-0.8777-2.298-1.5355-1.3284-1.3284-2.0747-3.13-2.0747-5.0086 0-1.8786 0.74627-3.6803 2.0747-5.0087 1.3284-1.3284 3.13-2.0747 5.0087-2.0747 1.8786 0 3.6802 0.74627 5.0086 2.0747z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m14.849 5.1498c0.1683 0.28512 0.3167 0.58232 0.444 0.88955 0.356 0.85939 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8513-0.5392 2.7107-0.8777 1.6402-1.5355 2.298c-0.6577 0.6577-1.4386 1.1795-2.298 1.5354-0.8594 0.356-1.7804 0.5392-2.7106 0.5392s-1.8513-0.1832-2.7107-0.5392c-0.30724-0.1272-0.60443-0.2757-0.88955-0.4439 0.30058 0.5093 0.66622 0.9832 1.0916 1.4085 0.65774 0.6577 1.4386 1.1795 2.298 1.5354 0.85938 0.356 1.7805 0.5392 2.7107 0.5392s1.8512-0.1832 2.7106-0.5392c0.8594-0.3559 1.6403-0.8777 2.298-1.5354 0.6578-0.6578 1.1795-1.4386 1.5355-2.298s0.5392-1.7805 0.5392-2.7107-0.1832-1.8513-0.5392-2.7107-0.8777-1.6402-1.5355-2.298c-0.4253-0.42532-0.8991-0.79097-1.4085-1.0916z"
                                  clipRule="evenodd"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                />
                                <path
                                  d="m14.849 5.1498 0.3812-0.64591c-0.2946-0.17388-0.6696-0.12633-0.9115 0.11559s-0.2895 0.61689-0.1156 0.91152l0.6459-0.3812zm0.444 0.88955-0.6929 0.28701 0.6929-0.28701zm0 5.4214-0.6929-0.287 0.6929 0.287zm-1.5355 2.298-0.5303-0.5304 0.5303 0.5304zm-2.298 1.5354 0.287 0.693-0.287-0.693zm-5.4213 0-0.28702 0.693 0.28702-0.693zm-0.88955-0.4439 0.3812-0.6459c-0.29464-0.1739-0.6696-0.1264-0.91152 0.1155s-0.28947 0.6169-0.1156 0.9115l0.64592-0.3811zm1.0916 1.4085-0.53033 0.5303 0.53033-0.5303zm2.298 1.5354-0.28702 0.693 0.28702-0.693zm5.4213 0 0.287 0.693-0.287-0.693zm2.298-1.5354 0.5304 0.5303-0.5304-0.5303zm1.5355-2.298-0.6929-0.287 0.6929 0.287zm0-5.4214-0.6929 0.28701 0.6929-0.28701zm-1.5355-2.298-0.5303 0.53033 0.5303-0.53033zm-2.0544-0.71035c0.1505 0.25493 0.2832 0.52066 0.397 0.79536l1.3858-0.57403c-0.1407-0.33976-0.3049-0.66842-0.491-0.98373l-1.2918 0.7624zm0.397 0.79536c0.3183 0.76839 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm0.4821 2.4237c0 0.83171-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821 2.4237c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm-1.3729 2.0546c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm-2.0547 1.3729c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0287 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm-2.4236 0.4821c-0.83171 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm-2.4237-0.4821c-0.2747-0.1137-0.54043-0.2465-0.79536-0.3969l-0.7624 1.2918c0.31531 0.1861 0.64397 0.3502 0.98373 0.491l0.57403-1.3859zm0.44532 1.1271c-0.38032-0.3803-0.70723-0.8039-0.97597-1.2593l-1.2918 0.7623c0.33243 0.5633 0.73681 1.0874 1.2071 1.5577l1.0607-1.0607zm2.0547 1.3729c-0.7684-0.3182-1.4666-0.7848-2.0547-1.3729l-1.0607 1.0607c0.72739 0.7274 1.5909 1.3044 2.5413 1.6981l0.57403-1.3859zm2.4237 0.4821c-0.8317 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm2.4236-0.4821c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0286 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm2.0547-1.3729c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm1.3729-2.0546c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm0.4821-2.4237c0 0.8317-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821-2.4237c0.3183 0.7684 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm-1.3729-2.0547c0.5881 0.5881 1.0546 1.2863 1.3729 2.0547l1.3858-0.57403c-0.3936-0.95038-0.9706-1.8139-1.698-2.5413l-1.0607 1.0607zm-1.2593-0.97596c0.4553 0.26874 0.879 0.59564 1.2593 0.97596l1.0607-1.0607c-0.4704-0.47033-0.9944-0.87471-1.5577-1.2071l-0.7623 1.2918z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <rect width={20} height={20} fill="#fff" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Đổ Bóng AI</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="remove-wire-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="m17.5 15.834h-15"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m5.5 10h-3"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m17.5 10h-3"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m17.5 4.167h-15"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m11.666 8.333-3.3333 3.3333"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m8.333 8.333 3.3333 3.3333"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Xóa Dây Điện</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="batch-processing-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <g id="Group">
                                <path
                                  id="Vector"
                                  d="M16.4995 13.15L8.99121 16.5"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_2"
                                  d="M8.99167 16.5L1.5 13.15"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_3"
                                  d="M16.4995 9L8.99121 12.35"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_4"
                                  d="M8.99167 12.35L1.5 9"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  id="Vector_5"
                                  d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Xử lý hàng loạt</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="remove-text-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="m16 19h-12c-0.79565 0-1.5587-0.3161-2.1213-0.8787s-0.87868-1.3257-0.87868-2.1213v-12c0-0.79565 0.31607-1.5587 0.87868-2.1213s1.3257-0.87868 2.1213-0.87868h12c0.7956 0 1.5587 0.31607 2.1213 0.87868s0.8787 1.3257 0.8787 2.1213v12c0 0.7956-0.3161 1.5587-0.8787 2.1213s-1.3257 0.8787-2.1213 0.8787z"
                                stroke="#5C5D6B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m8.25 13.5h3.5"
                                stroke="#5C5D6B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m10 6.5v7"
                                stroke="#5C5D6B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M13.5 8.084V6.889C13.5 6.78583 13.459 6.68689 13.3861 6.61394C13.3131 6.54098 13.2142 6.5 13.111 6.5H6.889C6.78583 6.5 6.68689 6.54098 6.61394 6.61394C6.54098 6.68689 6.5 6.78583 6.5 6.889V8.085"
                                stroke="#5C5D6B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Xóa Chữ Trên Ảnh</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="undefined-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <g
                                clipPath="url(#a)"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              >
                                <path d="m12.542 14.243h-5.0845" />
                                <path d="m7.0673 13.994c-0.77897-0.5481-1.388-1.3042-1.7576-2.182-0.36954-0.8779-0.48464-1.842-0.33215-2.7821 0.34405-2.2092 2.1855-3.9727 4.4065-4.2328 0.71438-0.08682 1.439-0.02105 2.126 0.19297s1.3208 0.57141 1.8595 1.0486c0.5386 0.47714 0.9699 1.0632 1.2652 1.7193 0.2954 0.65618 0.4481 1.3676 0.4482 2.0872 1e-4 0.81402-0.1956 1.616-0.5707 2.3384-0.375 0.7225-0.9184 1.344-1.5843 1.8122-0.1167 0.0781-0.2129 0.1832-0.2803 0.3064s-0.1041 0.2608-0.107 0.4012v1.5114c0 0.5619-0.2232 1.1008-0.6205 1.4981s-0.9361 0.6205-1.498 0.6205h-0.84741c-0.56187 0-1.1007-0.2232-1.498-0.6205-0.39731-0.3973-0.62051-0.9362-0.62051-1.4981v-1.508c0-0.289-0.15422-0.5466-0.38896-0.7127z" />
                                <path d="m16.034 4.7607 1.0084-1.0084" />
                                <path d="m9.9992 2.2596v-1.4261" />
                                <path d="m4.067 4.7607-1.0084-1.0084" />
                                <path d="m17.627 9.8455h1.4321" />
                                <path d="m0.94043 9.8453h1.4321" />
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <rect width={20} height={20} fill="#fff" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Làm Sáng Ảnh</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="undefined-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g
                                id="icon-blur-on"
                                clipPath="url(#clip0_14090_52785)"
                              >
                                <path
                                  id="Vector"
                                  d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                                  fill="#0051EE"
                                  stroke="#0051EE"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_14090_52785">
                                  <rect width={24} height={24} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Làm Mờ Nền</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="change-sky-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="m6.9873 11.99c0.42916 0 0.83333 0.0883 1.1867 0.2658 0.13296-0.8593 0.56866-1.6428 1.2285-2.2091 0.65978-0.56627 1.5003-0.87811 2.3699-0.87921 1.9825 0 3.5983 1.595 3.6491 3.5692 0.5858 0.0766 1.1234 0.3646 1.5116 0.8098 0.3883 0.4452 0.6005 1.0169 0.5968 1.6077 6e-4 0.6436-0.2544 1.2612-0.709 1.7169s-1.0715 0.7122-1.7152 0.7131h-8.1183c-0.74071-0.0014-1.4506-0.2967-1.9737-0.821-0.52314-0.5244-0.81673-1.235-0.81628-1.9757 0-1.545 1.25-2.7975 2.79-2.7975z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m5.9894 9.3392c-0.10205-0.32243-0.15537-0.66138-0.15537-1.0058 0-0.88405 0.35119-1.7319 0.97632-2.357 0.62512-0.62512 1.473-0.97631 2.357-0.97631 0.88408 0 1.7319 0.35119 2.357 0.97631 0.1538 0.15378 0.291 0.32105 0.4105 0.49901"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m9.1338 2.3337v-0.66667"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m13.384 4.0922 0.4667-0.475"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m2.4668 8.334h0.66666"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m4.4248 3.6172 0.46667 0.475"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Thay Đổi Bầu Trời</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="convert-image-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              fill="none"
                              viewBox="0 0 20 21"
                            >
                              <path
                                d="m5.2119 5.6726c2.662-2.6485 6.967-2.6376 9.6154 0.02437 1.7536 1.7625 2.4054 4.3416 1.6996 6.7256"
                                stroke="#252638"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m14.733 15.389c-2.6955 2.6164-7.0016 2.5523-9.618-0.1432-1.7115-1.7632-2.3389-4.3124-1.6412-6.6685"
                                stroke="#252638"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m4.7212 9.8235-1.5267-1.5267-1.5275 1.5275"
                                stroke="#252638"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m15.279 11.177 1.5267 1.5266 1.5275-1.5275"
                                stroke="#252638"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m10 12.202c0.9398 0 1.7017-0.7619 1.7017-1.7017s-0.7619-1.7017-1.7017-1.7017c-0.93981 0-1.7017 0.76186-1.7017 1.7017s0.76186 1.7017 1.7017 1.7017z"
                                stroke="#252638"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Chuyển Đổi Ảnh</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="compress-image-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_12691_2490)">
                                <path
                                  d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.33333 10H2.5"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.666 10H17.4993"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                                  stroke="#252638"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_12691_2490">
                                  <rect width={20} height={20} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Nén Ảnh</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="watermark-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                                stroke="#0051EE"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                                stroke="#0051EE"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Thêm watermark</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="undefined-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
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
                        </span>
                        <span className="inline-block">AI Xóa Mụn</span>
                      </button>
                      <button
                        className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                        id="undefined-button"
                      >
                        <span className="inline-flex hover:text-blue-500">
                          <div
                            color="inherit"
                            // mode="outline"
                            className="sc-eac7f02c-0 bRLGlB text-center"
                          >
                            <svg
                              className="align-middle"
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="none"
                            >
                              <path
                                d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                fill="currentColor"
                              />
                              <path
                                d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.6673 17.1667L3.33398 3.83337"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </span>
                        <span className="inline-block">Làm mờ khuôn mặt</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white fixed flex w-full h-14 items-center justify-between px-2 top-0 left-0 z-50 transition-all lg:hidden">
            <div>
              <span>
                <div
                  color="inherit"
                  //   mode="fill"
                  className="sc-eac7f02c-0 fPePcu text-center"
                >
                  <svg
                    className="align-middle"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M8.22222 5.11111C6.504 5.11111 5.11111 6.504 5.11111 8.22222V23.7778C5.11111 25.496 6.504 26.8889 8.22222 26.8889H23.7778C25.496 26.8889 26.8889 25.496 26.8889 23.7778V16.5C26.8889 16.2239 27.1127 16 27.3889 16H29.5C29.7761 16 30 16.2239 30 16.5V23.7778C30 27.2142 27.2142 30 23.7778 30H8.22222C4.78578 30 2 27.2142 2 23.7778V8.22222C2 4.78578 4.78578 2 8.22222 2H15.5C15.7761 2 16 2.22386 16 2.5V4.61111C16 4.88725 15.7761 5.11111 15.5 5.11111H8.22222Z"
                      fill="#0553EB"
                    />
                    <path
                      d="M20.3887 2C20.1125 2 19.8887 2.22386 19.8887 2.5V4.61111C19.8887 4.88725 20.1125 5.11111 20.3887 5.11111H22.4998C22.7759 5.11111 22.9998 4.88725 22.9998 4.61111V2.5C22.9998 2.22386 22.7759 2 22.4998 2H20.3887Z"
                      fill="#0553EB"
                    />
                    <path
                      d="M27.3887 2C27.1125 2 26.8887 2.22386 26.8887 2.5V4.61111C26.8887 4.88725 27.1125 5.11111 27.3887 5.11111H29.4998C29.7759 5.11111 29.9998 4.88725 29.9998 4.61111V2.5C29.9998 2.22386 29.7759 2 29.4998 2H27.3887Z"
                      fill="#0553EB"
                    />
                    <path
                      d="M26.8887 9.5C26.8887 9.22386 27.1125 9 27.3887 9H29.4998C29.7759 9 29.9998 9.22386 29.9998 9.5V11.6111C29.9998 11.8873 29.7759 12.1111 29.4998 12.1111H27.3887C27.1125 12.1111 26.8887 11.8873 26.8887 11.6111V9.5Z"
                      fill="#0553EB"
                    />
                    <path
                      d="M20.6167 22.1829C19.8157 22.7728 18.7939 23.2103 17.5513 23.4954C16.374 23.7655 15.3147 23.8295 14.3734 23.6875C13.4306 23.5389 12.6419 23.2069 12.0073 22.6916C11.3778 22.1682 10.9363 21.4744 10.683 20.61L10.6326 20.4356L14.0761 19.6457L14.1061 19.7317C14.2049 20.012 14.3884 20.2418 14.6567 20.4212C14.9236 20.594 15.2551 20.7039 15.6514 20.7506C16.0477 20.7974 16.4845 20.7661 16.9619 20.6565C17.4328 20.5485 17.8266 20.3893 18.1432 20.179C18.4598 19.9687 18.686 19.724 18.8216 19.4451C18.9638 19.1646 19.0012 18.8772 18.9336 18.5829L18.9314 18.5731C18.8399 18.1741 18.596 17.9065 18.1999 17.7702C17.8037 17.6339 17.1716 17.5793 16.3035 17.6063L14.7765 17.6571C13.2178 17.7049 12.0148 17.4577 11.1675 16.9154C10.3268 16.3717 9.77964 15.5471 9.52607 14.4418L9.52381 14.432C9.31879 13.5084 9.38025 12.6509 9.70819 11.8597C10.0346 11.0619 10.5769 10.3799 11.3351 9.81353C12.0918 9.24064 13.0129 8.82966 14.0986 8.58059C15.2824 8.30902 16.3258 8.26585 17.2289 8.45109C18.137 8.62829 18.8909 8.98887 19.4907 9.53282C20.0891 10.0702 20.5202 10.7493 20.7842 11.5699L20.821 11.6854L17.4855 12.4506L17.4411 12.3472C17.3198 12.0583 17.133 11.8293 16.8807 11.6599C16.6335 11.4826 16.3289 11.37 15.9668 11.3223C15.6047 11.2746 15.2046 11.301 14.7664 11.4015C14.3413 11.499 13.9893 11.6452 13.7104 11.8399C13.43 12.0282 13.2296 12.2497 13.109 12.5046C12.9935 12.7514 12.9681 13.0154 13.0326 13.2966L13.0348 13.3064C13.1279 13.7119 13.3722 13.9967 13.7678 14.1606C14.1684 14.3165 14.7679 14.3787 15.5661 14.347L17.0931 14.2962C18.6714 14.2439 19.888 14.4605 20.7429 14.9459C21.5963 15.4248 22.1543 16.2365 22.4168 17.3811L22.4191 17.3909C22.6397 18.3523 22.593 19.2442 22.2791 20.0666C21.9702 20.881 21.4161 21.5864 20.6167 22.1829Z"
                      fill="#0553EB"
                    />
                  </svg>
                </div>
              </span>
            </div>
            <div className="hidden">
              <div>
                <div className="items-center hidden space-x-4 lg:flex relative h-8">
                  <div
                    className="H14B inline-flex items-center space-x-1.5 cursor-pointer bg-neutral-ink-50 px-1.5 h-8 rounded-lg transition"
                    id="product-dropdown"
                  >
                    <span className="inline-block">
                      <div className="flex items-center">
                        <p className="font-semibold text-[14px] leading-[18px] ml-1.5">
                          {" "}
                        </p>
                      </div>
                    </span>
                    <span className="inline-flex">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bnjTLd text-center  transition-all ease-in-out duration-150 -mt-0.25"
                      >
                        <svg
                          className="align-middle  transition-all ease-in-out duration-150 -mt-0.25"
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
                  </div>
                  <div className="absolute opacity-1 w-56 flex flex-col p-1 items-start top-12 left-[-15px] bg-white rounded-lg shadow-md opacity-0 pointer-events-none">
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="remove-obj-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              d="m6.2775 14.552h1.1725c0.44199-1e-4 0.86585-0.1757 1.1783-0.4883l7.27-7.27c0.3124-0.31254 0.488-0.73639 0.488-1.1783s-0.1756-0.86579-0.488-1.1783l-2.7492-2.7492c-0.3125-0.31245-0.7364-0.48798-1.1783-0.48798-0.442 0-0.8658 0.17553-1.1784 0.48798l-7.8558 7.8558c-0.31245 0.31255-0.48798 0.73643-0.48798 1.1783s0.17553 0.8658 0.48798 1.1783l2.1633 2.1634c0.31167 0.3125 0.735 0.4883 1.1775 0.4883z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m5.4863 6.9895 5.1084 5.1083"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m16.672 16.927h-15.058"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Xóa Vật Thể</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="enhance-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m8.3333 17.5h-4.1667c-0.44203 0-0.86595-0.1756-1.1785-0.4882-0.31257-0.3125-0.48816-0.7364-0.48816-1.1785v-4.1666c0-0.4421 0.17559-0.866 0.48816-1.1785 0.31256-0.3126 0.73648-0.4882 1.1785-0.4882h4.1667c0.44203 0 0.86595 0.1756 1.1785 0.4882 0.31256 0.3125 0.48816 0.7364 0.48816 1.1785v4.1666c0 0.4421-0.1756 0.866-0.48816 1.1785-0.31256 0.3126-0.73648 0.4882-1.1785 0.4882z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10.833 5.8332h3.3333v3.3333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m9.5083 10.492 4.6583-4.6584"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m13.333 17.5h2.5c0.4421 0 0.866-0.1756 1.1785-0.4882 0.3126-0.3125 0.4882-0.7364 0.4882-1.1785v-11.667c0-0.44203-0.1756-0.86595-0.4882-1.1785-0.3125-0.31257-0.7364-0.48816-1.1785-0.48816h-11.667c-0.44203 0-0.86595 0.17559-1.1785 0.48816-0.31257 0.31256-0.48816 0.73648-0.48816 1.1785v2.5"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Làm Nét Ảnh</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="remove-bg-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
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
                      </span>
                      <span className="inline-block">Xóa Nền Ảnh</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="undefined-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <g clipPath="url(#a)">
                              <path
                                d="m13.758 3.7413c0.6578 0.65774 1.1795 1.4386 1.5355 2.298 0.356 0.85938 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8512-0.5392 2.7106-0.8777 1.6403-1.5355 2.298c-0.6577 0.6578-1.4386 1.1795-2.298 1.5355s-1.7804 0.5392-2.7106 0.5392-1.8513-0.1832-2.7107-0.5392c-0.85939-0.356-1.6403-0.8777-2.298-1.5355-1.3284-1.3284-2.0747-3.13-2.0747-5.0086 0-1.8786 0.74627-3.6803 2.0747-5.0087 1.3284-1.3284 3.13-2.0747 5.0087-2.0747 1.8786 0 3.6802 0.74627 5.0086 2.0747z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <path
                                d="m14.849 5.1498c0.1683 0.28512 0.3167 0.58232 0.444 0.88955 0.356 0.85939 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8513-0.5392 2.7107-0.8777 1.6402-1.5355 2.298c-0.6577 0.6577-1.4386 1.1795-2.298 1.5354-0.8594 0.356-1.7804 0.5392-2.7106 0.5392s-1.8513-0.1832-2.7107-0.5392c-0.30724-0.1272-0.60443-0.2757-0.88955-0.4439 0.30058 0.5093 0.66622 0.9832 1.0916 1.4085 0.65774 0.6577 1.4386 1.1795 2.298 1.5354 0.85938 0.356 1.7805 0.5392 2.7107 0.5392s1.8512-0.1832 2.7106-0.5392c0.8594-0.3559 1.6403-0.8777 2.298-1.5354 0.6578-0.6578 1.1795-1.4386 1.5355-2.298s0.5392-1.7805 0.5392-2.7107-0.1832-1.8513-0.5392-2.7107-0.8777-1.6402-1.5355-2.298c-0.4253-0.42532-0.8991-0.79097-1.4085-1.0916z"
                                clipRule="evenodd"
                                fill="currentColor"
                                fillRule="evenodd"
                              />
                              <path
                                d="m14.849 5.1498 0.3812-0.64591c-0.2946-0.17388-0.6696-0.12633-0.9115 0.11559s-0.2895 0.61689-0.1156 0.91152l0.6459-0.3812zm0.444 0.88955-0.6929 0.28701 0.6929-0.28701zm0 5.4214-0.6929-0.287 0.6929 0.287zm-1.5355 2.298-0.5303-0.5304 0.5303 0.5304zm-2.298 1.5354 0.287 0.693-0.287-0.693zm-5.4213 0-0.28702 0.693 0.28702-0.693zm-0.88955-0.4439 0.3812-0.6459c-0.29464-0.1739-0.6696-0.1264-0.91152 0.1155s-0.28947 0.6169-0.1156 0.9115l0.64592-0.3811zm1.0916 1.4085-0.53033 0.5303 0.53033-0.5303zm2.298 1.5354-0.28702 0.693 0.28702-0.693zm5.4213 0 0.287 0.693-0.287-0.693zm2.298-1.5354 0.5304 0.5303-0.5304-0.5303zm1.5355-2.298-0.6929-0.287 0.6929 0.287zm0-5.4214-0.6929 0.28701 0.6929-0.28701zm-1.5355-2.298-0.5303 0.53033 0.5303-0.53033zm-2.0544-0.71035c0.1505 0.25493 0.2832 0.52066 0.397 0.79536l1.3858-0.57403c-0.1407-0.33976-0.3049-0.66842-0.491-0.98373l-1.2918 0.7624zm0.397 0.79536c0.3183 0.76839 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm0.4821 2.4237c0 0.83171-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821 2.4237c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm-1.3729 2.0546c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm-2.0547 1.3729c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0287 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm-2.4236 0.4821c-0.83171 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm-2.4237-0.4821c-0.2747-0.1137-0.54043-0.2465-0.79536-0.3969l-0.7624 1.2918c0.31531 0.1861 0.64397 0.3502 0.98373 0.491l0.57403-1.3859zm0.44532 1.1271c-0.38032-0.3803-0.70723-0.8039-0.97597-1.2593l-1.2918 0.7623c0.33243 0.5633 0.73681 1.0874 1.2071 1.5577l1.0607-1.0607zm2.0547 1.3729c-0.7684-0.3182-1.4666-0.7848-2.0547-1.3729l-1.0607 1.0607c0.72739 0.7274 1.5909 1.3044 2.5413 1.6981l0.57403-1.3859zm2.4237 0.4821c-0.8317 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm2.4236-0.4821c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0286 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm2.0547-1.3729c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm1.3729-2.0546c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm0.4821-2.4237c0 0.8317-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821-2.4237c0.3183 0.7684 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm-1.3729-2.0547c0.5881 0.5881 1.0546 1.2863 1.3729 2.0547l1.3858-0.57403c-0.3936-0.95038-0.9706-1.8139-1.698-2.5413l-1.0607 1.0607zm-1.2593-0.97596c0.4553 0.26874 0.879 0.59564 1.2593 0.97596l1.0607-1.0607c-0.4704-0.47033-0.9944-0.87471-1.5577-1.2071l-0.7623 1.2918z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <rect width={20} height={20} fill="#fff" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Đổ Bóng AI</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="remove-wire-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m17.5 15.834h-15"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m5.5 10h-3"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m17.5 10h-3"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m17.5 4.167h-15"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m11.666 8.333-3.3333 3.3333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m8.333 8.333 3.3333 3.3333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Xóa Dây Điện</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="batch-processing-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M16.4995 13.15L8.99121 16.5"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M8.99167 16.5L1.5 13.15"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_3"
                                d="M16.4995 9L8.99121 12.35"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_4"
                                d="M8.99167 12.35L1.5 9"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_5"
                                d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Xử lý hàng loạt</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="remove-text-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m16 19h-12c-0.79565 0-1.5587-0.3161-2.1213-0.8787s-0.87868-1.3257-0.87868-2.1213v-12c0-0.79565 0.31607-1.5587 0.87868-2.1213s1.3257-0.87868 2.1213-0.87868h12c0.7956 0 1.5587 0.31607 2.1213 0.87868s0.8787 1.3257 0.8787 2.1213v12c0 0.7956-0.3161 1.5587-0.8787 2.1213s-1.3257 0.8787-2.1213 0.8787z"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m8.25 13.5h3.5"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10 6.5v7"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M13.5 8.084V6.889C13.5 6.78583 13.459 6.68689 13.3861 6.61394C13.3131 6.54098 13.2142 6.5 13.111 6.5H6.889C6.78583 6.5 6.68689 6.54098 6.61394 6.61394C6.54098 6.68689 6.5 6.78583 6.5 6.889V8.085"
                              stroke="#5C5D6B"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Xóa Chữ Trên Ảnh</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="undefined-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <g
                              clipPath="url(#a)"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            >
                              <path d="m12.542 14.243h-5.0845" />
                              <path d="m7.0673 13.994c-0.77897-0.5481-1.388-1.3042-1.7576-2.182-0.36954-0.8779-0.48464-1.842-0.33215-2.7821 0.34405-2.2092 2.1855-3.9727 4.4065-4.2328 0.71438-0.08682 1.439-0.02105 2.126 0.19297s1.3208 0.57141 1.8595 1.0486c0.5386 0.47714 0.9699 1.0632 1.2652 1.7193 0.2954 0.65618 0.4481 1.3676 0.4482 2.0872 1e-4 0.81402-0.1956 1.616-0.5707 2.3384-0.375 0.7225-0.9184 1.344-1.5843 1.8122-0.1167 0.0781-0.2129 0.1832-0.2803 0.3064s-0.1041 0.2608-0.107 0.4012v1.5114c0 0.5619-0.2232 1.1008-0.6205 1.4981s-0.9361 0.6205-1.498 0.6205h-0.84741c-0.56187 0-1.1007-0.2232-1.498-0.6205-0.39731-0.3973-0.62051-0.9362-0.62051-1.4981v-1.508c0-0.289-0.15422-0.5466-0.38896-0.7127z" />
                              <path d="m16.034 4.7607 1.0084-1.0084" />
                              <path d="m9.9992 2.2596v-1.4261" />
                              <path d="m4.067 4.7607-1.0084-1.0084" />
                              <path d="m17.627 9.8455h1.4321" />
                              <path d="m0.94043 9.8453h1.4321" />
                            </g>
                            <defs>
                              <clipPath id="a">
                                <rect width={20} height={20} fill="#fff" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Làm Sáng Ảnh</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="undefined-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g
                              id="icon-blur-on"
                              clipPath="url(#clip0_14090_52785)"
                            >
                              <path
                                id="Vector"
                                d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                                fill="#0051EE"
                                stroke="#0051EE"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_14090_52785">
                                <rect width={24} height={24} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Làm Mờ Nền</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="change-sky-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="m6.9873 11.99c0.42916 0 0.83333 0.0883 1.1867 0.2658 0.13296-0.8593 0.56866-1.6428 1.2285-2.2091 0.65978-0.56627 1.5003-0.87811 2.3699-0.87921 1.9825 0 3.5983 1.595 3.6491 3.5692 0.5858 0.0766 1.1234 0.3646 1.5116 0.8098 0.3883 0.4452 0.6005 1.0169 0.5968 1.6077 6e-4 0.6436-0.2544 1.2612-0.709 1.7169s-1.0715 0.7122-1.7152 0.7131h-8.1183c-0.74071-0.0014-1.4506-0.2967-1.9737-0.821-0.52314-0.5244-0.81673-1.235-0.81628-1.9757 0-1.545 1.25-2.7975 2.79-2.7975z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m5.9894 9.3392c-0.10205-0.32243-0.15537-0.66138-0.15537-1.0058 0-0.88405 0.35119-1.7319 0.97632-2.357 0.62512-0.62512 1.473-0.97631 2.357-0.97631 0.88408 0 1.7319 0.35119 2.357 0.97631 0.1538 0.15378 0.291 0.32105 0.4105 0.49901"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m9.1338 2.3337v-0.66667"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m13.384 4.0922 0.4667-0.475"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m2.4668 8.334h0.66666"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m4.4248 3.6172 0.46667 0.475"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Thay Đổi Bầu Trời</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="convert-image-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 20 21"
                          >
                            <path
                              d="m5.2119 5.6726c2.662-2.6485 6.967-2.6376 9.6154 0.02437 1.7536 1.7625 2.4054 4.3416 1.6996 6.7256"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m14.733 15.389c-2.6955 2.6164-7.0016 2.5523-9.618-0.1432-1.7115-1.7632-2.3389-4.3124-1.6412-6.6685"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m4.7212 9.8235-1.5267-1.5267-1.5275 1.5275"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m15.279 11.177 1.5267 1.5266 1.5275-1.5275"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="m10 12.202c0.9398 0 1.7017-0.7619 1.7017-1.7017s-0.7619-1.7017-1.7017-1.7017c-0.93981 0-1.7017 0.76186-1.7017 1.7017s0.76186 1.7017 1.7017 1.7017z"
                              stroke="#252638"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Chuyển Đổi Ảnh</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="compress-image-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_12691_2490)">
                              <path
                                d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.33333 10H2.5"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.666 10H17.4993"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                                stroke="#252638"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_12691_2490">
                                <rect width={20} height={20} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Nén Ảnh</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="watermark-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                              stroke="#0051EE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                              stroke="#0051EE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Thêm watermark</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="undefined-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
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
                      </span>
                      <span className="inline-block">AI Xóa Mụn</span>
                    </button>
                    <button
                      className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                      id="undefined-button"
                    >
                      <span className="inline-flex hover:text-blue-500">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            width={20}
                            height={21}
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                              fill="currentColor"
                            />
                            <path
                              d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.6673 17.1667L3.33398 3.83337"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </span>
                      <span className="inline-block">Làm mờ khuôn mặt</span>
                    </button>
                  </div>
                </div>
                <div className="lg:hidden">
                  <div className="w-full h-[56px] flex justify-start items-center absolute top-0 left-0">
                    <div
                      className="H14B inline-flex items-center space-x-1.5 cursor-pointer bg-neutral-ink-50 px-1.5 h-8 rounded-lg transition ml-12"
                      id="product-dropdown"
                    >
                      <span className="inline-block">
                        <div className="flex items-center">
                          <p className="font-semibold text-[14px] leading-[18px] ml-1.5">
                            {" "}
                          </p>
                        </div>
                      </span>
                      <span className="inline-flex">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bnjTLd text-center  transition-all ease-in-out duration-150"
                        >
                          <svg
                            className="align-middle  transition-all ease-in-out duration-150"
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
                    </div>
                  </div>
                  <div className="flex flex-col transition-all duration-200 ease-in-out bottom-0 left-0 bg-white hidden pointer-events-none">
                    <div className="w-screen h-screen opacity-50 bg-black fixed bottom-0 left-0 z-[9999]" />
                    <div className="fixed bottom-0 left-0 w-screen h-auto z-[10000]">
                      <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full mx-auto mb-4 cursor-pointer">
                        <div
                          color="inherit"
                          //   mode="outline"
                          className="sc-eac7f02c-0 bRLGlB text-center"
                        >
                          <svg
                            className="align-middle"
                            fill="none"
                            viewBox="0 0 28 28"
                          >
                            <path
                              d="m5.833 5.833 16.333 16.333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth={2}
                            />
                            <path
                              d="m22.167 5.833-16.333 16.333"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth={2}
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white rounded-t-2xl px-2 pt-2">
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="remove-obj-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  d="m6.2775 14.552h1.1725c0.44199-1e-4 0.86585-0.1757 1.1783-0.4883l7.27-7.27c0.3124-0.31254 0.488-0.73639 0.488-1.1783s-0.1756-0.86579-0.488-1.1783l-2.7492-2.7492c-0.3125-0.31245-0.7364-0.48798-1.1783-0.48798-0.442 0-0.8658 0.17553-1.1784 0.48798l-7.8558 7.8558c-0.31245 0.31255-0.48798 0.73643-0.48798 1.1783s0.17553 0.8658 0.48798 1.1783l2.1633 2.1634c0.31167 0.3125 0.735 0.4883 1.1775 0.4883z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m5.4863 6.9895 5.1084 5.1083"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m16.672 16.927h-15.058"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Xóa Vật Thể</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="enhance-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="m8.3333 17.5h-4.1667c-0.44203 0-0.86595-0.1756-1.1785-0.4882-0.31257-0.3125-0.48816-0.7364-0.48816-1.1785v-4.1666c0-0.4421 0.17559-0.866 0.48816-1.1785 0.31256-0.3126 0.73648-0.4882 1.1785-0.4882h4.1667c0.44203 0 0.86595 0.1756 1.1785 0.4882 0.31256 0.3125 0.48816 0.7364 0.48816 1.1785v4.1666c0 0.4421-0.1756 0.866-0.48816 1.1785-0.31256 0.3126-0.73648 0.4882-1.1785 0.4882z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m10.833 5.8332h3.3333v3.3333"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m9.5083 10.492 4.6583-4.6584"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m13.333 17.5h2.5c0.4421 0 0.866-0.1756 1.1785-0.4882 0.3126-0.3125 0.4882-0.7364 0.4882-1.1785v-11.667c0-0.44203-0.1756-0.86595-0.4882-1.1785-0.3125-0.31257-0.7364-0.48816-1.1785-0.48816h-11.667c-0.44203 0-0.86595 0.17559-1.1785 0.48816-0.31257 0.31256-0.48816 0.73648-0.48816 1.1785v2.5"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Làm Nét Ảnh</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="remove-bg-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
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
                          </span>
                          <span className="inline-block">Xóa Nền Ảnh</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="undefined-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <g clipPath="url(#a)">
                                  <path
                                    d="m13.758 3.7413c0.6578 0.65774 1.1795 1.4386 1.5355 2.298 0.356 0.85938 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8512-0.5392 2.7106-0.8777 1.6403-1.5355 2.298c-0.6577 0.6578-1.4386 1.1795-2.298 1.5355s-1.7804 0.5392-2.7106 0.5392-1.8513-0.1832-2.7107-0.5392c-0.85939-0.356-1.6403-0.8777-2.298-1.5355-1.3284-1.3284-2.0747-3.13-2.0747-5.0086 0-1.8786 0.74627-3.6803 2.0747-5.0087 1.3284-1.3284 3.13-2.0747 5.0087-2.0747 1.8786 0 3.6802 0.74627 5.0086 2.0747z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                  />
                                  <path
                                    d="m14.849 5.1498c0.1683 0.28512 0.3167 0.58232 0.444 0.88955 0.356 0.85939 0.5392 1.7805 0.5392 2.7107s-0.1832 1.8513-0.5392 2.7107-0.8777 1.6402-1.5355 2.298c-0.6577 0.6577-1.4386 1.1795-2.298 1.5354-0.8594 0.356-1.7804 0.5392-2.7106 0.5392s-1.8513-0.1832-2.7107-0.5392c-0.30724-0.1272-0.60443-0.2757-0.88955-0.4439 0.30058 0.5093 0.66622 0.9832 1.0916 1.4085 0.65774 0.6577 1.4386 1.1795 2.298 1.5354 0.85938 0.356 1.7805 0.5392 2.7107 0.5392s1.8512-0.1832 2.7106-0.5392c0.8594-0.3559 1.6403-0.8777 2.298-1.5354 0.6578-0.6578 1.1795-1.4386 1.5355-2.298s0.5392-1.7805 0.5392-2.7107-0.1832-1.8513-0.5392-2.7107-0.8777-1.6402-1.5355-2.298c-0.4253-0.42532-0.8991-0.79097-1.4085-1.0916z"
                                    clipRule="evenodd"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                  />
                                  <path
                                    d="m14.849 5.1498 0.3812-0.64591c-0.2946-0.17388-0.6696-0.12633-0.9115 0.11559s-0.2895 0.61689-0.1156 0.91152l0.6459-0.3812zm0.444 0.88955-0.6929 0.28701 0.6929-0.28701zm0 5.4214-0.6929-0.287 0.6929 0.287zm-1.5355 2.298-0.5303-0.5304 0.5303 0.5304zm-2.298 1.5354 0.287 0.693-0.287-0.693zm-5.4213 0-0.28702 0.693 0.28702-0.693zm-0.88955-0.4439 0.3812-0.6459c-0.29464-0.1739-0.6696-0.1264-0.91152 0.1155s-0.28947 0.6169-0.1156 0.9115l0.64592-0.3811zm1.0916 1.4085-0.53033 0.5303 0.53033-0.5303zm2.298 1.5354-0.28702 0.693 0.28702-0.693zm5.4213 0 0.287 0.693-0.287-0.693zm2.298-1.5354 0.5304 0.5303-0.5304-0.5303zm1.5355-2.298-0.6929-0.287 0.6929 0.287zm0-5.4214-0.6929 0.28701 0.6929-0.28701zm-1.5355-2.298-0.5303 0.53033 0.5303-0.53033zm-2.0544-0.71035c0.1505 0.25493 0.2832 0.52066 0.397 0.79536l1.3858-0.57403c-0.1407-0.33976-0.3049-0.66842-0.491-0.98373l-1.2918 0.7624zm0.397 0.79536c0.3183 0.76839 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm0.4821 2.4237c0 0.83171-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821 2.4237c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm-1.3729 2.0546c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm-2.0547 1.3729c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0287 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm-2.4236 0.4821c-0.83171 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm-2.4237-0.4821c-0.2747-0.1137-0.54043-0.2465-0.79536-0.3969l-0.7624 1.2918c0.31531 0.1861 0.64397 0.3502 0.98373 0.491l0.57403-1.3859zm0.44532 1.1271c-0.38032-0.3803-0.70723-0.8039-0.97597-1.2593l-1.2918 0.7623c0.33243 0.5633 0.73681 1.0874 1.2071 1.5577l1.0607-1.0607zm2.0547 1.3729c-0.7684-0.3182-1.4666-0.7848-2.0547-1.3729l-1.0607 1.0607c0.72739 0.7274 1.5909 1.3044 2.5413 1.6981l0.57403-1.3859zm2.4237 0.4821c-0.8317 0-1.6553-0.1638-2.4237-0.4821l-0.57403 1.3859c0.95039 0.3936 1.969 0.5962 2.9977 0.5962v-1.5zm2.4236-0.4821c-0.7684 0.3183-1.5919 0.4821-2.4236 0.4821v1.5c1.0286 0 2.0473-0.2026 2.9976-0.5962l-0.574-1.3859zm2.0547-1.3729c-0.5881 0.5881-1.2863 1.0547-2.0547 1.3729l0.574 1.3859c0.9504-0.3937 1.814-0.9707 2.5414-1.6981l-1.0607-1.0607zm1.3729-2.0546c-0.3183 0.7684-0.7848 1.4665-1.3729 2.0546l1.0607 1.0607c0.7274-0.7274 1.3044-1.5909 1.698-2.5413l-1.3858-0.574zm0.4821-2.4237c0 0.8317-0.1638 1.6553-0.4821 2.4237l1.3858 0.574c0.3937-0.9504 0.5963-1.969 0.5963-2.9977h-1.5zm-0.4821-2.4237c0.3183 0.7684 0.4821 1.592 0.4821 2.4237h1.5c0-1.0287-0.2026-2.0473-0.5963-2.9977l-1.3858 0.57403zm-1.3729-2.0547c0.5881 0.5881 1.0546 1.2863 1.3729 2.0547l1.3858-0.57403c-0.3936-0.95038-0.9706-1.8139-1.698-2.5413l-1.0607 1.0607zm-1.2593-0.97596c0.4553 0.26874 0.879 0.59564 1.2593 0.97596l1.0607-1.0607c-0.4704-0.47033-0.9944-0.87471-1.5577-1.2071l-0.7623 1.2918z"
                                    fill="currentColor"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <rect width={20} height={20} fill="#fff" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Đổ Bóng AI</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="remove-wire-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="m17.5 15.834h-15"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m5.5 10h-3"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m17.5 10h-3"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m17.5 4.167h-15"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m11.666 8.333-3.3333 3.3333"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m8.333 8.333 3.3333 3.3333"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Xóa Dây Điện</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="batch-processing-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <g id="Group">
                                  <path
                                    id="Vector"
                                    d="M16.4995 13.15L8.99121 16.5"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M8.99167 16.5L1.5 13.15"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_3"
                                    d="M16.4995 9L8.99121 12.35"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_4"
                                    d="M8.99167 12.35L1.5 9"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    id="Vector_5"
                                    d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Xử lý hàng loạt</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="remove-text-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="m16 19h-12c-0.79565 0-1.5587-0.3161-2.1213-0.8787s-0.87868-1.3257-0.87868-2.1213v-12c0-0.79565 0.31607-1.5587 0.87868-2.1213s1.3257-0.87868 2.1213-0.87868h12c0.7956 0 1.5587 0.31607 2.1213 0.87868s0.8787 1.3257 0.8787 2.1213v12c0 0.7956-0.3161 1.5587-0.8787 2.1213s-1.3257 0.8787-2.1213 0.8787z"
                                  stroke="#5C5D6B"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m8.25 13.5h3.5"
                                  stroke="#5C5D6B"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m10 6.5v7"
                                  stroke="#5C5D6B"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="M13.5 8.084V6.889C13.5 6.78583 13.459 6.68689 13.3861 6.61394C13.3131 6.54098 13.2142 6.5 13.111 6.5H6.889C6.78583 6.5 6.68689 6.54098 6.61394 6.61394C6.54098 6.68689 6.5 6.78583 6.5 6.889V8.085"
                                  stroke="#5C5D6B"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Xóa Chữ Trên Ảnh</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="undefined-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <g
                                  clipPath="url(#a)"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                >
                                  <path d="m12.542 14.243h-5.0845" />
                                  <path d="m7.0673 13.994c-0.77897-0.5481-1.388-1.3042-1.7576-2.182-0.36954-0.8779-0.48464-1.842-0.33215-2.7821 0.34405-2.2092 2.1855-3.9727 4.4065-4.2328 0.71438-0.08682 1.439-0.02105 2.126 0.19297s1.3208 0.57141 1.8595 1.0486c0.5386 0.47714 0.9699 1.0632 1.2652 1.7193 0.2954 0.65618 0.4481 1.3676 0.4482 2.0872 1e-4 0.81402-0.1956 1.616-0.5707 2.3384-0.375 0.7225-0.9184 1.344-1.5843 1.8122-0.1167 0.0781-0.2129 0.1832-0.2803 0.3064s-0.1041 0.2608-0.107 0.4012v1.5114c0 0.5619-0.2232 1.1008-0.6205 1.4981s-0.9361 0.6205-1.498 0.6205h-0.84741c-0.56187 0-1.1007-0.2232-1.498-0.6205-0.39731-0.3973-0.62051-0.9362-0.62051-1.4981v-1.508c0-0.289-0.15422-0.5466-0.38896-0.7127z" />
                                  <path d="m16.034 4.7607 1.0084-1.0084" />
                                  <path d="m9.9992 2.2596v-1.4261" />
                                  <path d="m4.067 4.7607-1.0084-1.0084" />
                                  <path d="m17.627 9.8455h1.4321" />
                                  <path d="m0.94043 9.8453h1.4321" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <rect width={20} height={20} fill="#fff" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Làm Sáng Ảnh</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="undefined-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g
                                  id="icon-blur-on"
                                  clipPath="url(#clip0_14090_52785)"
                                >
                                  <path
                                    id="Vector"
                                    d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                                    fill="#0051EE"
                                    stroke="#0051EE"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_14090_52785">
                                    <rect width={24} height={24} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Làm Mờ Nền</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="change-sky-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="m6.9873 11.99c0.42916 0 0.83333 0.0883 1.1867 0.2658 0.13296-0.8593 0.56866-1.6428 1.2285-2.2091 0.65978-0.56627 1.5003-0.87811 2.3699-0.87921 1.9825 0 3.5983 1.595 3.6491 3.5692 0.5858 0.0766 1.1234 0.3646 1.5116 0.8098 0.3883 0.4452 0.6005 1.0169 0.5968 1.6077 6e-4 0.6436-0.2544 1.2612-0.709 1.7169s-1.0715 0.7122-1.7152 0.7131h-8.1183c-0.74071-0.0014-1.4506-0.2967-1.9737-0.821-0.52314-0.5244-0.81673-1.235-0.81628-1.9757 0-1.545 1.25-2.7975 2.79-2.7975z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m5.9894 9.3392c-0.10205-0.32243-0.15537-0.66138-0.15537-1.0058 0-0.88405 0.35119-1.7319 0.97632-2.357 0.62512-0.62512 1.473-0.97631 2.357-0.97631 0.88408 0 1.7319 0.35119 2.357 0.97631 0.1538 0.15378 0.291 0.32105 0.4105 0.49901"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m9.1338 2.3337v-0.66667"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m13.384 4.0922 0.4667-0.475"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m2.4668 8.334h0.66666"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m4.4248 3.6172 0.46667 0.475"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">
                            Thay Đổi Bầu Trời
                          </span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="convert-image-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                fill="none"
                                viewBox="0 0 20 21"
                              >
                                <path
                                  d="m5.2119 5.6726c2.662-2.6485 6.967-2.6376 9.6154 0.02437 1.7536 1.7625 2.4054 4.3416 1.6996 6.7256"
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m14.733 15.389c-2.6955 2.6164-7.0016 2.5523-9.618-0.1432-1.7115-1.7632-2.3389-4.3124-1.6412-6.6685"
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m4.7212 9.8235-1.5267-1.5267-1.5275 1.5275"
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m15.279 11.177 1.5267 1.5266 1.5275-1.5275"
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="m10 12.202c0.9398 0 1.7017-0.7619 1.7017-1.7017s-0.7619-1.7017-1.7017-1.7017c-0.93981 0-1.7017 0.76186-1.7017 1.7017s0.76186 1.7017 1.7017 1.7017z"
                                  stroke="#252638"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Chuyển Đổi Ảnh</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="compress-image-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_12691_2490)">
                                  <path
                                    d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8.33333 10H2.5"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M11.666 10H17.4993"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                                    stroke="#252638"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_12691_2490">
                                    <rect width={20} height={20} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Nén Ảnh</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="watermark-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                                  stroke="#0051EE"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                                  stroke="#0051EE"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Thêm watermark</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="undefined-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
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
                          </span>
                          <span className="inline-block">AI Xóa Mụn</span>
                        </button>
                        <button
                          className="H14B inline-flex items-center space-x-1.5 py-2 px-2.5 w-full h-10 transition rounded hover:bg-neutral-ink-50 hover:text-neutral-ink-600 text-neutral-ink-500"
                          id="undefined-button"
                        >
                          <span className="inline-flex hover:text-blue-500">
                            <div
                              color="inherit"
                              //   mode="outline"
                              className="sc-eac7f02c-0 bRLGlB text-center"
                            >
                              <svg
                                className="align-middle"
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                              >
                                <path
                                  d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                  fill="currentColor"
                                />
                                <path
                                  d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.6673 17.1667L3.33398 3.83337"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </span>
                          <span className="inline-block">Làm mờ khuôn mặt</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-14 flex">
              <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer h-10 px-4 w-auto justify-center items-center bg-gradient-to-br from-cyan-400 via-blue-700 to-fuchsia-700">
                <p className="font-semibold text-[14px] leading-[18px]">PRO</p>
              </div>
            </div>
            <div className="relative" data-headlessui-state="">
              <button
                className="outline-none"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:r2i:"
              >
                <div className="inline-flex items-center justify-center rounded-lg lg:transition lg:hover:bg-neutral-ink-100 lg:rounded text-neutral-ink-600 bg-neutral-ink-200 w-10 h-10">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center cursor-pointer"
                  >
                    <svg
                      className="align-middle cursor-pointer"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_11683_558)">
                        <path
                          d="M10 10C7.94421 10 6.26421 8.32083 6.26421 6.26417C6.26421 4.2075 7.94421 2.5 10 2.5C12.0559 2.5 13.7359 4.17917 13.7359 6.23583C13.7359 8.2925 12.0559 10 10 10ZM15.8334 17.5H4.16671C3.70837 17.5 3.33337 17.125 3.33337 16.6667V15.8333C3.33337 14 4.83337 12.5 6.66671 12.5H13.3334C15.1667 12.5 16.6667 14 16.6667 15.8333V16.6667C16.6667 17.125 16.2917 17.5 15.8334 17.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11683_558">
                          <rect width={20} height={20} fill="white" />
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
                clip: "rect(0px, 0px, 0px, 0px)",
                whiteSpace: "nowrap",
                borderWidth: 0,
                display: "none",
              }}
            />
          </div>
          <div className="w-screen flex border-t-[1px] border-neutral-ink-100 mt-[64px] h-[calc(100vh-64px)]  h-[calc(100dvh-64px)]">
            <div className="h-full w-60 p-2 hidden lg:flex flex-col border-r-[1px] border-neutral-ink-100 z-10">
              <div className="w-full block gap-2 items-center py-2.5 px-2 text-blue-500 bg-blue-200 rounded-lg cursor-pointer">
                <div
                  color="inherit"
                  //   mode="outline"
                  className="sc-eac7f02c-0 bRLGlB text-center text-blue-500 inline"
                >
                  <svg
                    className="align-middle text-blue-500 inline"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M14.1801 16.3825C15.5609 16.3825 16.6801 15.2634 16.6801 13.8825V7.7717C16.6801 7.00003 16.3242 6.2717 15.7151 5.79837L10.7151 1.9092C9.81255 1.2067 8.54839 1.2067 7.64505 1.9092L2.64505 5.79837C2.03589 6.2717 1.68005 7.00003 1.68005 7.7717V13.8825C1.68005 15.2634 2.79922 16.3825 4.18005 16.3825"
                        stroke="#0051EE"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M14.1833 16.3834H4.18335"
                        stroke="#0051EE"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M7.51343 8.04919V8.88253"
                        stroke="#0051EE"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_4"
                        d="M10.8467 8.04919V8.88253"
                        stroke="#0051EE"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_5"
                        d="M12.0968 11.9558C12.0968 11.9558 11.0034 13.0491 9.18009 13.0491C7.35676 13.0491 6.26343 11.9558 6.26343 11.9558"
                        stroke="#0051EE"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>{" "}
                <p className="font-semibold text-[14px] leading-[18px] font-semibold inline ml-1">
                  Bắt đầu
                </p>
              </div>
              <div className="w-full block gap-2 items-center py-2.5 px-2 rounded-lg cursor-pointer">
                <div
                  color="inherit"
                  //   mode="outline"
                  className="sc-eac7f02c-0 bRLGlB text-center inline"
                >
                  <svg
                    className="align-middle inline"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M16.4995 13.15L8.99121 16.5"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M8.99167 16.5L1.5 13.15"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M16.4995 9L8.99121 12.35"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_4"
                        d="M8.99167 12.35L1.5 9"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_5"
                        d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>{" "}
                <p className="font-semibold text-[14px] leading-[18px] font-semibold inline ml-1">
                  Chỉnh sửa hàng loạt
                </p>
              </div>
              <div className="flex-auto flex justify-end flex-col">
                <div className="block border-[1px] border-neutral-ink-100 rounded-lg max-w-[240px] mb-2 relative">
                  <div className="p-4 bg-neutral-ink-50 rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start gap-1.5 inline-flex">
                        <div className="px-1 py-0.5 bg-gradient-to-br from-cyan-400 via-blue-700 to-fuchsia-700 rounded gap-2.5">
                          <div className="text-center text-white text-xs font-bold uppercase leading-none tracking-tight flex justify-center items-center mt-1">
                            Pro
                          </div>
                        </div>
                        <div className="text-gray-800 text-sm font-semibold leading-tight">
                          Tiết kiệm thời gian của bạn
                        </div>
                      </div>
                      <div className="leading-tight">
                        <span className="text-gray-600 text-xs font-normal">
                          Truy cập không giới hạn vào{" "}
                        </span>
                        <span className="text-gray-600 text-xs font-semibold">
                          trí tuệ nhân tạo mạnh mẽ của chúng tôi{" "}
                        </span>
                        <span className="text-gray-600 text-xs font-normal">
                          và không có dấu bản quyền.
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer">
                      <p className="font-semibold text-[14px] leading-[18px]">
                        Thử SnapEdit PRO
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2 py-2.5 px-2 text-neutral-ink-500 hover:bg-blue-200 rounded-lg hover:text-blue-500 hover:font-semibold cursor-pointer">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V11.6667C2.5 11.2246 2.67559 10.8007 2.98816 10.4882C3.30072 10.1756 3.72464 10 4.16667 10H8.33333C8.77536 10 9.19928 10.1756 9.51184 10.4882C9.8244 10.8007 10 11.2246 10 11.6667V15.8333C10 16.2754 9.8244 16.6993 9.51184 17.0118C9.19928 17.3244 8.77536 17.5 8.33333 17.5Z"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.834 5.8335H14.1673V9.16683"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.50781 10.4918L14.1661 5.8335"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3333 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V6.66667"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px]">
                    Tài khoản của tôi
                  </p>
                </div>
                <div className="w-full flex items-center gap-2 py-2.5 px-2 text-neutral-ink-500 hover:bg-blue-200 rounded-lg hover:text-blue-500 hover:font-semibold cursor-pointer">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_10202_15139)">
                        <path
                          d="M2.5 7.5H17.5"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.97565 10.833H5.83398"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 15.8332H5C3.61917 15.8332 2.5 14.714 2.5 13.3332V6.6665C2.5 5.28567 3.61917 4.1665 5 4.1665H15C16.3808 4.1665 17.5 5.28567 17.5 6.6665V13.3332C17.5 14.714 16.3808 15.8332 15 15.8332Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10202_15139">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px]">
                    Kế hoạch của tôi
                  </p>
                </div>
                <div className="w-full flex items-center gap-2 py-2.5 px-2 text-neutral-ink-500 hover:bg-blue-200 rounded-lg hover:text-blue-500 hover:font-semibold cursor-pointer">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M9 16.5C4.8575 16.5 1.5 13.1425 1.5 9C1.5 4.8575 4.8575 1.5 9 1.5C13.1425 1.5 16.5 4.8575 16.5 9C16.5 13.1425 13.1425 16.5 9 16.5Z"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.33268 6.5L5.66602 8.16667L7.33268 9.83333"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.666 11.5001L12.3327 9.83341L10.666 8.16675"
                        stroke="#252638"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px]">
                    Kế hoạch API
                  </p>
                </div>
                <div className="w-full flex items-center gap-2 py-2.5 px-2 text-neutral-ink-500 hover:bg-blue-200 rounded-lg hover:text-blue-500 hover:font-semibold cursor-pointer">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_10202_15142)">
                        <path
                          d="M15.8327 14.1668H14.9993C14.5393 14.1668 14.166 13.7935 14.166 13.3335V9.16683C14.166 8.70683 14.5393 8.3335 14.9993 8.3335H15.8327C16.7535 8.3335 17.4993 9.07933 17.4993 10.0002V12.5002C17.4993 13.421 16.7535 14.1668 15.8327 14.1668Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 14.1668H4.16667C3.24583 14.1668 2.5 13.421 2.5 12.5002V10.0002C2.5 9.07933 3.24583 8.3335 4.16667 8.3335H5C5.46 8.3335 5.83333 8.70683 5.83333 9.16683V13.3335C5.83333 13.7935 5.46 14.1668 5 14.1668Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4173 8.33333V7.91667C15.4173 4.925 12.9923 2.5 10.0007 2.5C7.00898 2.5 4.58398 4.925 4.58398 7.91667V8.33333"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.5208 17.7083H9.47917C8.90417 17.7083 8.4375 17.2417 8.4375 16.6667C8.4375 16.0917 8.90417 15.625 9.47917 15.625H10.5208C11.0958 15.625 11.5625 16.0917 11.5625 16.6667C11.5625 17.2417 11.0958 17.7083 10.5208 17.7083Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.5625 16.6665H13.3333C14.2542 16.6665 15 15.9207 15 14.9998V14.1665"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10202_15142">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px]">
                    Hỗ trợ
                  </p>
                </div>
                <div className="w-full flex items-center gap-2 py-2.5 px-2 text-neutral-ink-500 hover:bg-blue-200 rounded-lg hover:text-blue-500 hover:font-semibold cursor-pointer">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_10202_15142)">
                        <path
                          d="M15.8327 14.1668H14.9993C14.5393 14.1668 14.166 13.7935 14.166 13.3335V9.16683C14.166 8.70683 14.5393 8.3335 14.9993 8.3335H15.8327C16.7535 8.3335 17.4993 9.07933 17.4993 10.0002V12.5002C17.4993 13.421 16.7535 14.1668 15.8327 14.1668Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 14.1668H4.16667C3.24583 14.1668 2.5 13.421 2.5 12.5002V10.0002C2.5 9.07933 3.24583 8.3335 4.16667 8.3335H5C5.46 8.3335 5.83333 8.70683 5.83333 9.16683V13.3335C5.83333 13.7935 5.46 14.1668 5 14.1668Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4173 8.33333V7.91667C15.4173 4.925 12.9923 2.5 10.0007 2.5C7.00898 2.5 4.58398 4.925 4.58398 7.91667V8.33333"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.5208 17.7083H9.47917C8.90417 17.7083 8.4375 17.2417 8.4375 16.6667C8.4375 16.0917 8.90417 15.625 9.47917 15.625H10.5208C11.0958 15.625 11.5625 16.0917 11.5625 16.6667C11.5625 17.2417 11.0958 17.7083 10.5208 17.7083Z"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.5625 16.6665H13.3333C14.2542 16.6665 15 15.9207 15 14.9998V14.1665"
                          stroke="#5C5D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10202_15142">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px]">
                    Điều khoản dịch vụ
                  </p>
                </div>
                <div className="w-full flex items-center gap-2 py-2.5 px-2 text-neutral-ink-500 hover:bg-blue-200 rounded-lg hover:text-blue-500 hover:font-semibold cursor-pointer">
                  <div
                    color="inherit"
                    // mode="outline"
                    className="sc-eac7f02c-0 bRLGlB text-center"
                  >
                    <svg
                      className="align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M23.9917 6H6V42H24"
                        stroke="#333"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33 33L42 24L33 15"
                        stroke="#333"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 23.9917H42"
                        stroke="#333"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px]">
                    Đăng xuất
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:p-6 gap-8 overflow-y-scroll flex-1 h-full z-1">
              <div className="h-72 bg-neutral-ink-50 rounded-2xl p-3 relative">
                <div className="h-full rounded-2xl border-[1px] border-dashed border-neutral-ink-200 flex items-center gap-4 flex-col">
                  <div
                    // size={80}
                    color="#AEAEB6"
                    // mode="fill"
                    className="sc-eac7f02c-0 eSjCLA text-center mt-6"
                  >
                    <svg
                      className="align-middle mt-6"
                      width={80}
                      height={64}
                      viewBox="0 0 80 64"
                      fill="none"
                    >
                      <g id="photo.fill 1" clipPath="url(#clip0_11329_5358)">
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M11.5613 56.6518C8.47338 56.6518 6.61764 54.796 6.61764 51.6804V49.0241L16.1969 40.6527C17.6772 39.3474 19.2133 38.6841 20.7481 38.6841C22.385 38.6841 24.0833 39.3536 25.5635 40.7202L31.9664 46.4813L47.9539 32.2812C49.5787 30.8193 51.412 30.1559 53.3191 30.1559C55.1526 30.1559 57.0597 30.8532 58.6169 32.3151L73.3824 45.9807V51.7297C73.3824 54.796 71.4442 56.6518 68.4664 56.6518H11.5613ZM26.3119 32.4029C21.6817 32.4029 17.8959 28.617 17.8959 23.9808C17.8959 19.3843 21.6817 15.5648 26.3119 15.5648C30.9145 15.5648 34.7003 19.3843 34.7003 23.9808C34.7003 28.617 30.9145 32.4029 26.3119 32.4029ZM11.0804 63.2417H68.9197C76.2378 63.2417 80 59.5073 80 52.2999V11.1635C80 3.95002 76.2378 0.19397 68.9197 0.19397H11.0804C3.78983 0.19397 0 3.95002 0 11.1635V52.2999C0 59.5073 3.78983 63.2417 11.0804 63.2417Z"
                            fill="#AEAEB6"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_11329_5358">
                          <rect
                            width={80}
                            height="63.0599"
                            fill="white"
                            transform="translate(0 0.181763)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-normal text-[14px] leading-[20px] text-neutral-ink-500 text-center text-xs lg:text-sm">
                    Kéo hình ảnh của bạn bất cứ nơi nào trên trang này hoặc nhấn
                    Ctrl/⌘ + V để dán hình ảnh
                  </p>
                  <div className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-500 rounded-lg text-base transition text-white hover:bg-opacity-80 cursor-pointer !w-[188px] !rounded-full">
                    <div
                      color="white"
                      //   mode="outline"
                      className="sc-eac7f02c-0 ftbnLb text-center"
                    >
                      <svg
                        className="align-middle"
                        width={24}
                        height={24}
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          d="M24.0605 10L24.0239 38"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 24L38 24"
                          stroke="#333"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>{" "}
                    <p className="font-semibold text-[16px] leading-[20px] ml-3">
                      Chọn ảnh
                    </p>
                  </div>
                </div>
                <div className="absolute -top-2 left-0 z-1 w-full flex justify-center">
                  <div className="bg-white shadow-[0_4px_16px_3px_rgba(32,52,89,0.12)] grid grid-cols-3 lg:flex items-center gap-1 rounded-lg border-2 border-white p-1 w-full lg:w-auto">
                    <div className="bg-neutral-ink-200 py-2 lg:px-3 px-2 rounded text-center cursor-pointer">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center hidden lg:inline"
                      >
                        <svg
                          className="align-middle hidden lg:inline"
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
                      <p className="font-semibold text-[14px] leading-[18px] inline lg:ml-1 text-xs lg:text-sm leading-4 lg:leading-[18px]">
                        Xóa vật thể
                      </p>
                    </div>
                    <div className="hover:bg-neutral-ink-100 py-2 lg:px-3 px-2 rounded text-center cursor-pointer">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center hidden lg:inline"
                      >
                        <svg
                          className="align-middle hidden lg:inline"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M8.33333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V11.6667C2.5 11.2246 2.67559 10.8007 2.98816 10.4882C3.30072 10.1756 3.72464 10 4.16667 10H8.33333C8.77536 10 9.19928 10.1756 9.51184 10.4882C9.8244 10.8007 10 11.2246 10 11.6667V15.8333C10 16.2754 9.8244 16.6993 9.51184 17.0118C9.19928 17.3244 8.77536 17.5 8.33333 17.5Z"
                            stroke="#252638"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.834 5.8335H14.1673V9.16683"
                            stroke="#252638"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.50781 10.4918L14.1661 5.8335"
                            stroke="#252638"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.3333 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V6.66667"
                            stroke="#252638"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold text-[14px] leading-[18px] inline lg:ml-1 text-xs lg:text-sm">
                        Làm nét ảnh
                      </p>
                    </div>
                    <div className="hover:bg-neutral-ink-100 py-2 lg:px-3 px-2 rounded text-center cursor-pointer">
                      <div
                        color="inherit"
                        // mode="outline"
                        className="sc-eac7f02c-0 bRLGlB text-center hidden lg:inline"
                      >
                        <svg
                          className="align-middle hidden lg:inline"
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
                      <p className="font-semibold text-[14px] leading-[18px] inline lg:ml-1 text-xs lg:text-sm">
                        Xóa phông nền
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:mt-8 mt-6">
                <p className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] leading-7 text-neutral-ink-600">
                  Các công cụ AI phổ biến của chúng tôi
                </p>
                <div className="lg:mt-4 mt-3 w-full">
                  <div className="grid lg:gap-6 gap-3 relative w-full grid-cols-1 xs:grid-cols-1 md+:grid-cols-2 [@media(min-width:1440px)]:grid-cols-4 [@media(min-width:1920px)]:grid-cols-6">
                    <div>
                      <a href="/vi/enhance/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-2xl overflow-hidden border-[1px] border-neutral-ink-100 hover:shadow-shadow-slide-hover group">
                          <div className="relative w-full">
                            <div className="p-2 relative self-stretch w-full bg-transparent">
                              <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                                <div className="relative w-full -top-px -left-px rounded-2xl">
                                  <div className="overflow-hidden rounded-2xl">
                                    <video
                                      className="w-full h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] block"
                                      playsInline
                                      loop
                                      muted
                                      onMouseEnter={(e) =>
                                        e.currentTarget.play()
                                      }
                                      onMouseLeave={(e) =>
                                        e.currentTarget.pause()
                                      }
                                    >
                                      <source
                                        src="https://assets.snapedit.app/images/dashboard/video-enhance.mp4"
                                        type="video/mp4"
                                      />
                                    </video>
                                    <div className="absolute bottom-1 right-6 w-12 h-12 xl:w-10 xl:h-10 bg-neutral-ink-600 rounded-xl flex justify-center items-center z-10">
                                      <div
                                        color="white"
                                        // mode="outline"
                                        className="sc-eac7f02c-0 dyQRtj text-center"
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
                                  <div className="h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[16px] leading-[20px] leading-5 text-neutral-ink-600">
                                    Làm nét ảnh
                                  </p>
                                </div>
                                <div>
                                  <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-400">
                                    Tự động tăng độ phân giải và tăng chất lượng
                                    tổng thể của ảnh. Làm ảnh trở nên sắc nét
                                    hơn.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/remove-object/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-2xl overflow-hidden border-[1px] border-neutral-ink-100 hover:shadow-shadow-slide-hover group">
                          <div className="relative w-full">
                            <div className="p-2 relative self-stretch w-full bg-transparent">
                              <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                                <div className="relative w-full -top-px -left-px rounded-2xl">
                                  <div className="overflow-hidden rounded-2xl">
                                    <video
                                      className="w-full h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] block"
                                      playsInline
                                      loop
                                      muted
                                      onMouseEnter={(e) =>
                                        e.currentTarget.play()
                                      }
                                      onMouseLeave={(e) =>
                                        e.currentTarget.pause()
                                      }
                                    >
                                      <source
                                        src="https://assets.snapedit.app/images/dashboard/video-removeobj.mp4"
                                        type="video/mp4"
                                      />
                                    </video>
                                    <div className="absolute bottom-1 right-6 w-12 h-12 xl:w-10 xl:h-10 bg-neutral-ink-600 rounded-xl flex justify-center items-center z-10">
                                      <div
                                        color="white"
                                        // mode="outline"
                                        className="sc-eac7f02c-0 dyQRtj text-center"
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
                                  <div className="h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[16px] leading-[20px] leading-5 text-neutral-ink-600">
                                    Xóa vật thể
                                  </p>
                                </div>
                                <div>
                                  <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-400">
                                    AI tự động phát hiện người và các vật thể.
                                    Xóa vật thể không mong muốn khỏi ảnh chỉ với
                                    một nhấp chuột.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/background-remover/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-2xl overflow-hidden border-[1px] border-neutral-ink-100 hover:shadow-shadow-slide-hover group">
                          <div className="relative w-full">
                            <div className="p-2 relative self-stretch w-full bg-transparent">
                              <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                                <div className="relative w-full -top-px -left-px rounded-2xl">
                                  <div className="overflow-hidden rounded-2xl">
                                    <video
                                      className="w-full h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] block"
                                      playsInline
                                      loop
                                      muted
                                      onMouseEnter={(e) =>
                                        e.currentTarget.play()
                                      }
                                      onMouseLeave={(e) =>
                                        e.currentTarget.pause()
                                      }
                                    >
                                      <source
                                        src="https://assets.snapedit.app/images/dashboard/video-removebg.mp4"
                                        type="video/mp4"
                                      />
                                    </video>
                                    <div className="absolute bottom-1 right-6 w-12 h-12 xl:w-10 xl:h-10 bg-neutral-ink-600 rounded-xl flex justify-center items-center z-10">
                                      <div
                                        color="white"
                                        // mode="outline"
                                        className="sc-eac7f02c-0 dyQRtj text-center"
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
                                  <div className="h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[16px] leading-[20px] leading-5 text-neutral-ink-600">
                                    Xóa phông nền
                                  </p>
                                </div>
                                <div>
                                  <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-400">
                                    Xóa nền ảnh nhanh chóng bằng AI để sáng tạo.
                                    Chỉnh sửa phông nền cho ảnh với hơn 100 mẫu
                                    đã thiết kế sẵn.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/batch-processing/remove-bg">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-2xl overflow-hidden border-[1px] border-neutral-ink-100 hover:shadow-shadow-slide-hover group">
                          <div className="relative w-full">
                            <div className="p-2 relative self-stretch w-full bg-transparent">
                              <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                                <div className="relative w-full -top-px -left-px rounded-2xl">
                                  <div className="overflow-hidden rounded-2xl">
                                    <video
                                      className="w-full h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] block"
                                      playsInline
                                      loop
                                      muted
                                      onMouseEnter={(e) =>
                                        e.currentTarget.play()
                                      }
                                      onMouseLeave={(e) =>
                                        e.currentTarget.pause()
                                      }
                                    >
                                      <source
                                        src="https://assets.snapedit.app/images/dashboard/video-batch.mp4"
                                        type="video/mp4"
                                      />
                                    </video>
                                    <div className="absolute bottom-1 right-6 w-12 h-12 xl:w-10 xl:h-10 bg-neutral-ink-600 rounded-xl flex justify-center items-center z-10">
                                      <div
                                        color="white"
                                        // mode="outline"
                                        className="sc-eac7f02c-0 dyQRtj text-center"
                                      >
                                        <svg
                                          className="align-middle"
                                          width={18}
                                          height={18}
                                          viewBox="0 0 18 18"
                                          fill="none"
                                        >
                                          <g id="Group">
                                            <path
                                              id="Vector"
                                              d="M16.4995 13.15L8.99121 16.5"
                                              stroke="#252638"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              id="Vector_2"
                                              d="M8.99167 16.5L1.5 13.15"
                                              stroke="#252638"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              id="Vector_3"
                                              d="M16.4995 9L8.99121 12.35"
                                              stroke="#252638"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              id="Vector_4"
                                              d="M8.99167 12.35L1.5 9"
                                              stroke="#252638"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              id="Vector_5"
                                              d="M1.5 4.85333L8.98917 8.2075L16.5 4.85333L9.01083 1.5L1.5 4.85333Z"
                                              stroke="#252638"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[16px] leading-[20px] leading-5 text-neutral-ink-600">
                                    Xử lý hàng loạt
                                  </p>
                                </div>
                                <div>
                                  <p className="font-normal text-[12px] leading-[18px] text-neutral-ink-400">
                                    Xử lý nhiều hình ảnh cùng một lúc một cách
                                    dễ dàng và tự động hóa quy trình của bạn.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:mt-8 mt-6">
                <p className="font-semibold text-[20px] leading-[28px] tracking-[0.02em] leading-7 text-neutral-ink-600">
                  Các công cụ khác
                </p>
                <div className="lg:mt-4 mt-3 w-full">
                  <div className="grid lg:gap-6 gap-3 relative w-full grid-cols-2 xs:grid-cols-2 md+:grid-cols-4 [@media(min-width:1440px)]:grid-cols-6 [@media(min-width:1920px)]:grid-cols-8">
                    <div>
                      <a href="/vi/ai-skin/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="AI Xóa Mụn"
                                  src="https://assets.snapedit.app/images/landing/product_ai_skin.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    AI Xóa Mụn
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/blur-face/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="làm mờ hình ảnh của bạn trên Snapedit một cách dễ dàng"
                                  src="https://assets.snapedit.app/images/landing/product_blur_face.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Làm mờ khuôn mặt
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                      >
                                        <path
                                          d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M9.99948 13.8341H7.90948C7.27948 13.8341 6.67281 14.0724 6.21031 14.4999L6.15698 14.5499C5.86365 14.8216 5.63531 15.1549 5.48698 15.5266L5.19531 16.2591"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M10.9893 11.4883C12.1101 11.0841 12.9176 10.0291 12.9176 8.76748C12.9176 7.15664 11.6118 5.84998 10.0001 5.84998C8.73846 5.84998 7.68346 6.65748 7.2793 7.77914"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.29979 7.13416C1.88729 9.94582 2.34896 13.4583 4.69563 15.805C7.04313 18.1525 10.5565 18.6133 13.3681 17.2"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M4.69531 5.19579C7.62531 2.26579 12.3753 2.26579 15.3045 5.19579C18.2336 8.12496 18.2336 12.8741 15.3053 15.8041"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M16.6673 17.1667L3.33398 3.83337"
                                          stroke="currentColor"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/remove-text/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Xóa chữ trên ảnh dễ dàng bằng trí tuệ nhân tạo"
                                  src="https://assets.snapedit.app/images/landing/product_remove_text.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Xóa chữ trên ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/remove-wire-line/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Xóa dây điện khỏi ảnh trực tuyến"
                                  src="https://assets.snapedit.app/images/landing/product_wire_line.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Xóa dây điện
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/enhance/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Phục hồi và chỉnh sửa ảnh cũ trực tuyến"
                                  src="https://assets.snapedit.app/images/landing/product_restore_photo.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Phục hồi ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M17.25 8.25H21V4.5"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M16.533 19.924C15.633 20.445 14.636 20.814 13.574 21"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M20.518 15.173C20.1578 16.1676 19.6265 17.0915 18.948 17.903"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M10.426 21C9.38411 20.8179 8.38247 20.4537 7.46699 19.924"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.052 17.903C4.37351 17.0915 3.84218 16.1676 3.482 15.173"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3.00001 12C3.00001 9.61305 3.94822 7.32387 5.63605 5.63604C7.32388 3.94821 9.61306 3 12 3C15.63 3 18.751 5.154 20.174 8.25"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M16 16C15.8837 15.7074 15.7033 15.4446 15.472 15.231C15.0823 14.8688 14.57 14.6673 14.038 14.667H9.963C9.431 14.667 8.918 14.869 8.528 15.231C8.298 15.445 8.117 15.708 8 16"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12 12.5C13.2426 12.5 14.25 11.4926 14.25 10.25C14.25 9.00736 13.2426 8 12 8C10.7574 8 9.75 9.00736 9.75 10.25C9.75 11.4926 10.7574 12.5 12 12.5Z"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/auto-light/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="làm sáng ảnh trực tuyến"
                                  src="https://assets.snapedit.app/images/landing/product_auto_light.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Làm sáng ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M15.0506 17.0923H8.94922"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.48076 16.7928C7.546 16.1352 6.81513 15.2278 6.37169 14.1744C5.92824 13.121 5.79012 11.9641 5.97311 10.8359C6.38596 8.18483 8.59567 6.06868 11.2609 5.75649C12.1181 5.65231 12.9877 5.73124 13.8121 5.98806C14.6366 6.24488 15.3971 6.67375 16.0435 7.24632C16.6899 7.81888 17.2074 8.52211 17.5618 9.30953C17.9162 10.0969 18.0995 10.9506 18.0995 11.8141C18.0998 12.7909 17.8649 13.7534 17.4148 14.6203C16.9647 15.4872 16.3126 16.233 15.5136 16.7949C15.3735 16.8886 15.2582 17.0147 15.1773 17.1625C15.0964 17.3103 15.0523 17.4755 15.0489 17.644V19.4577C15.0489 20.1319 14.781 20.7786 14.3043 21.2553C13.8275 21.7321 13.1809 21.9999 12.5066 21.9999H11.4897C10.8155 21.9999 10.1689 21.7321 9.69212 21.2553C9.21536 20.7786 8.94752 20.1319 8.94752 19.4577V17.648C8.94752 17.3013 8.76244 16.9921 8.48076 16.7928Z"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M19.2422 5.71303L20.4523 4.50293"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.0002 2.71163L12.0002 1.00029"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M4.88198 5.71303L3.67188 4.50293"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M21.1523 11.8145H22.8709"
                                          stroke="white"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1.12891 11.8145H2.84745"
                                          stroke="white"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/blur-bg/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Làm mờ hình ảnh của bạn trên Snapedit dễ dàng"
                                  src="https://assets.snapedit.app/images/landing/product_blur_bg.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Làm Mờ Nền
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <g
                                          id="icon-blur-on"
                                          clipPath="url(#clip0_14090_52785)"
                                        >
                                          <path
                                            id="Vector"
                                            d="M5.5 14C5.5 13.7261 5.72614 13.5 6 13.5C6.27386 13.5 6.5 13.7261 6.5 14C6.5 14.2739 6.27386 14.5 6 14.5C5.72614 14.5 5.5 14.2739 5.5 14ZM5.5 18C5.5 17.7261 5.72614 17.5 6 17.5C6.27386 17.5 6.5 17.7261 6.5 18C6.5 18.2739 6.27386 18.5 6 18.5C5.72614 18.5 5.5 18.2739 5.5 18ZM5.5 10C5.5 9.72614 5.72614 9.5 6 9.5C6.27386 9.5 6.5 9.72614 6.5 10C6.5 10.2739 6.27386 10.5 6 10.5C5.72614 10.5 5.5 10.2739 5.5 10ZM5.5 6C5.5 5.72614 5.72614 5.5 6 5.5C6.27386 5.5 6.5 5.72614 6.5 6C6.5 6.27386 6.27386 6.5 6 6.5C5.72614 6.5 5.5 6.27386 5.5 6ZM14.5 6C14.5 6.27386 14.2739 6.5 14 6.5C13.7261 6.5 13.5 6.27386 13.5 6C13.5 5.72614 13.7261 5.5 14 5.5C14.2739 5.5 14.5 5.72614 14.5 6ZM10.5 6C10.5 6.27386 10.2739 6.5 10 6.5C9.72614 6.5 9.5 6.27386 9.5 6C9.5 5.72614 9.72614 5.5 10 5.5C10.2739 5.5 10.5 5.72614 10.5 6ZM9 14C9 13.4461 9.44614 13 10 13C10.5539 13 11 13.4461 11 14C11 14.5539 10.5539 15 10 15C9.44614 15 9 14.5539 9 14ZM17.5 14C17.5 13.7261 17.7261 13.5 18 13.5C18.2739 13.5 18.5 13.7261 18.5 14C18.5 14.2739 18.2739 14.5 18 14.5C17.7261 14.5 17.5 14.2739 17.5 14ZM17.5 18C17.5 17.7261 17.7261 17.5 18 17.5C18.2739 17.5 18.5 17.7261 18.5 18C18.5 18.2739 18.2739 18.5 18 18.5C17.7261 18.5 17.5 18.2739 17.5 18ZM17.5 10C17.5 9.72614 17.7261 9.5 18 9.5C18.2739 9.5 18.5 9.72614 18.5 10C18.5 10.2739 18.2739 10.5 18 10.5C17.7261 10.5 17.5 10.2739 17.5 10ZM17.5 6C17.5 5.72614 17.7261 5.5 18 5.5C18.2739 5.5 18.5 5.72614 18.5 6C18.5 6.27386 18.2739 6.5 18 6.5C17.7261 6.5 17.5 6.27386 17.5 6ZM13.5 18C13.5 17.7261 13.7261 17.5 14 17.5C14.2739 17.5 14.5 17.7261 14.5 18C14.5 18.2739 14.2739 18.5 14 18.5C13.7261 18.5 13.5 18.2739 13.5 18ZM9 10C9 9.44614 9.44614 9 10 9C10.5539 9 11 9.44614 11 10C11 10.5539 10.5539 11 10 11C9.44614 11 9 10.5539 9 10ZM9.5 18C9.5 17.7261 9.72614 17.5 10 17.5C10.2739 17.5 10.5 17.7261 10.5 18C10.5 18.2739 10.2739 18.5 10 18.5C9.72614 18.5 9.5 18.2739 9.5 18ZM13 14C13 13.4461 13.4461 13 14 13C14.5539 13 15 13.4461 15 14C15 14.5539 14.5539 15 14 15C13.4461 15 13 14.5539 13 14ZM13 10C13 9.44614 13.4461 9 14 9C14.5539 9 15 9.44614 15 10C15 10.5539 14.5539 11 14 11C13.4461 11 13 10.5539 13 10Z"
                                            fill="#0051EE"
                                            stroke="#0051EE"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_14090_52785">
                                            <rect
                                              width={24}
                                              height={24}
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/easy-shadow/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Dễ dàng thêm bóng đổ vào bất kỳ hình ảnh nào"
                                  src="https://assets.snapedit.app/images/landing/product_easy_shadow.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Đổ bóng AI
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={33}
                                        height={32}
                                        viewBox="0 0 33 32"
                                        fill="none"
                                      >
                                        <path
                                          d="M22.8286 5.98596C23.881 7.03836 24.7158 8.28774 25.2854 9.66276C25.8549 11.0378 26.1481 12.5115 26.1481 13.9998C26.1481 15.4882 25.8549 16.9619 25.2854 18.3369C24.7158 19.7119 23.881 20.9613 22.8286 22.0137C21.7762 23.0661 20.5268 23.9009 19.1518 24.4705C17.7768 25.04 16.303 25.3332 14.8147 25.3332C13.3264 25.3332 11.8527 25.04 10.4776 24.4705C9.10262 23.9009 7.85324 23.0661 6.80084 22.0137C4.67543 19.8883 3.48138 17.0056 3.48138 13.9998C3.48138 10.9941 4.67543 8.11137 6.80084 5.98596C8.92625 3.86055 11.8089 2.6665 14.8147 2.6665C17.8205 2.6665 20.7032 3.86055 22.8286 5.98596Z"
                                          stroke="#5C5D6B"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M24.575 8.23926C24.8442 8.69545 25.0818 9.17096 25.2854 9.66253C25.8549 11.0376 26.1481 12.5113 26.1481 13.9996C26.1481 15.4879 25.8549 16.9617 25.2854 18.3367C24.7158 19.7117 23.881 20.9611 22.8286 22.0135C21.7762 23.0659 20.5268 23.9007 19.1518 24.4702C17.7768 25.0398 16.3031 25.3329 14.8147 25.3329C13.3264 25.3329 11.8527 25.0398 10.4777 24.4702C9.98609 24.2666 9.51058 24.0291 9.05438 23.7599C9.53532 24.5748 10.1203 25.333 10.8009 26.0135C11.8533 27.0659 13.1026 27.9007 14.4777 28.4702C15.8527 29.0398 17.3264 29.3329 18.8147 29.3329C20.3031 29.3329 21.7768 29.0398 23.1518 28.4702C24.5268 27.9007 25.7762 27.0659 26.8286 26.0135C27.881 24.9611 28.7158 23.7117 29.2854 22.3367C29.8549 20.9617 30.1481 19.4879 30.1481 17.9996C30.1481 16.5113 29.8549 15.0376 29.2854 13.6625C28.7158 12.2875 27.881 11.0381 26.8286 9.98573C26.1481 9.30522 25.39 8.72019 24.575 8.23926Z"
                                          fill="#5C5D6B"
                                        />
                                        <path
                                          d="M24.575 8.23926L24.9562 7.59334C24.6615 7.41947 24.2866 7.46702 24.0447 7.70894C23.8028 7.95086 23.7552 8.32583 23.9291 8.62046L24.575 8.23926ZM25.2854 9.66253L25.9783 9.37552V9.37552L25.2854 9.66253ZM19.1518 24.4702L18.8648 23.7773L19.1518 24.4702ZM10.4777 24.4702L10.1906 25.1632H10.1906L10.4777 24.4702ZM9.05438 23.7599L9.43558 23.114C9.14095 22.9401 8.76598 22.9876 8.52406 23.2295C8.28214 23.4714 8.23459 23.8464 8.40847 24.1411L9.05438 23.7599ZM10.8009 26.0135L11.3312 25.4832L10.8009 26.0135ZM14.4777 28.4702L14.1906 29.1632H14.1906L14.4777 28.4702ZM23.1518 28.4702L22.8648 27.7773V27.7773L23.1518 28.4702ZM26.8286 26.0135L27.3589 26.5438H27.3589L26.8286 26.0135ZM29.2854 22.3367L28.5925 22.0497L29.2854 22.3367ZM29.2854 13.6625L28.5925 13.9495L29.2854 13.6625ZM26.8286 9.98573L27.3589 9.4554L26.8286 9.98573ZM23.9291 8.62046C24.1805 9.04646 24.4023 9.4905 24.5925 9.94955L25.9783 9.37552C25.7612 8.85142 25.508 8.34444 25.2209 7.85806L23.9291 8.62046ZM24.5925 9.94954C25.1243 11.2336 25.3981 12.6098 25.3981 13.9996H26.8981C26.8981 12.4128 26.5855 10.8415 25.9783 9.37552L24.5925 9.94954ZM25.3981 13.9996C25.3981 15.3894 25.1243 16.7656 24.5925 18.0497L25.9783 18.6237C26.5855 17.1577 26.8981 15.5864 26.8981 13.9996H25.3981ZM24.5925 18.0497C24.0606 19.3337 23.281 20.5004 22.2983 21.4832L23.3589 22.5438C24.481 21.4218 25.371 20.0897 25.9783 18.6237L24.5925 18.0497ZM22.2983 21.4832C21.3155 22.4659 20.1488 23.2455 18.8648 23.7773L19.4388 25.1632C20.9048 24.5559 22.2369 23.6659 23.3589 22.5438L22.2983 21.4832ZM18.8648 23.7773C17.5808 24.3092 16.2046 24.5829 14.8147 24.5829V26.0829C16.4015 26.0829 17.9728 25.7704 19.4388 25.1632L18.8648 23.7773ZM14.8147 24.5829C13.4249 24.5829 12.0487 24.3092 10.7647 23.7773L10.1906 25.1632C11.6567 25.7704 13.2279 26.0829 14.8147 26.0829V24.5829ZM10.7647 23.7773C10.3056 23.5872 9.86159 23.3654 9.43558 23.114L8.67318 24.4058C9.15957 24.6928 9.66655 24.9461 10.1906 25.1632L10.7647 23.7773ZM11.3312 25.4832C10.6957 24.8477 10.1494 24.1397 9.7003 23.3787L8.40847 24.1411C8.92124 25.01 9.54501 25.8183 10.2705 26.5438L11.3312 25.4832ZM14.7647 27.7773C13.4806 27.2455 12.3139 26.4659 11.3312 25.4832L10.2705 26.5438C11.3926 27.6659 12.7246 28.5559 14.1906 29.1632L14.7647 27.7773ZM18.8147 28.5829C17.4249 28.5829 16.0487 28.3092 14.7647 27.7773L14.1906 29.1632C15.6567 29.7704 17.2279 30.0829 18.8147 30.0829V28.5829ZM22.8648 27.7773C21.5808 28.3092 20.2046 28.5829 18.8147 28.5829V30.0829C20.4015 30.0829 21.9728 29.7704 23.4388 29.1632L22.8648 27.7773ZM26.2983 25.4832C25.3155 26.4659 24.1488 27.2455 22.8648 27.7773L23.4388 29.1632C24.9048 28.5559 26.2369 27.6659 27.3589 26.5438L26.2983 25.4832ZM28.5925 22.0497C28.0606 23.3337 27.281 24.5004 26.2983 25.4832L27.3589 26.5438C28.481 25.4218 29.371 24.0897 29.9783 22.6237L28.5925 22.0497ZM29.3981 17.9996C29.3981 19.3894 29.1243 20.7656 28.5925 22.0497L29.9783 22.6237C30.5855 21.1577 30.8981 19.5864 30.8981 17.9996H29.3981ZM28.5925 13.9495C29.1243 15.2336 29.3981 16.6098 29.3981 17.9996H30.8981C30.8981 16.4128 30.5855 14.8415 29.9783 13.3755L28.5925 13.9495ZM26.2983 10.5161C27.281 11.4988 28.0606 12.6655 28.5925 13.9495L29.9783 13.3755C29.371 11.9095 28.481 10.5774 27.3589 9.4554L26.2983 10.5161ZM24.1938 8.88517C24.9548 9.33426 25.6628 9.88056 26.2983 10.5161L27.3589 9.4554C26.6334 8.72988 25.8251 8.10612 24.9562 7.59334L24.1938 8.88517Z"
                                          fill="#5C5D6B"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/change-sky/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="thay thế bầu trời trong ảnh"
                                  src="https://assets.snapedit.app/images/landing/product_sky_changer.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Thay đổi bầu trời
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M6.98727 11.9895C7.41643 11.9895 7.8206 12.0778 8.17393 12.2553C8.30689 11.396 8.74259 10.6125 9.40242 10.0462C10.0622 9.47993 10.9027 9.16809 11.7723 9.16699C13.7548 9.16699 15.3706 10.762 15.4214 12.7362C16.0072 12.8128 16.5448 13.1008 16.933 13.546C17.3213 13.9912 17.5335 14.5629 17.5298 15.1537C17.5304 15.7973 17.2754 16.4149 16.8208 16.8706C16.3662 17.3263 15.7493 17.5828 15.1056 17.5837H6.98727C6.24656 17.5823 5.53668 17.287 5.01355 16.7627C4.49041 16.2383 4.19682 15.5277 4.19727 14.787C4.19727 13.242 5.44727 11.9895 6.98727 11.9895Z"
                                          stroke="#5C5D6B"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M5.98935 9.33916C5.8873 9.01673 5.83398 8.67778 5.83398 8.33333C5.83398 7.44928 6.18517 6.60143 6.8103 5.97631C7.43542 5.35119 8.28326 5 9.16732 5C10.0514 5 10.8992 5.35119 11.5243 5.97631C11.6781 6.13009 11.8153 6.29736 11.9348 6.47532"
                                          stroke="#5C5D6B"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M9.13379 2.33366V1.66699"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M13.3838 4.09219L13.8505 3.61719"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M2.4668 8.33398H3.13346"
                                          stroke="#5C5D6B"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M4.4248 3.61719L4.89147 4.09219"
                                          stroke="#5C5D6B"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/background-remover/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Chỉnh sửa nền trên SnapEdit dễ dàng"
                                  src="https://assets.snapedit.app/images/landing/product_edit_bg.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Chỉnh sửa Nền Ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={19}
                                        height={18}
                                        viewBox="0 0 19 18"
                                        fill="none"
                                      >
                                        <path
                                          d="M6.15083 13.1667H3.16667C2.24583 13.1667 1.5 12.4208 1.5 11.5V3.16667C1.5 2.24583 2.24583 1.5 3.16667 1.5H11.5C12.4208 1.5 13.1667 2.24583 13.1667 3.16667V5.66667"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M12.0183 16.2316L17.0642 11.1857C17.4225 10.8274 17.4225 10.2474 17.0642 9.88991L15.61 8.43574C15.2517 8.07741 14.6717 8.07741 14.3142 8.43574L9.26833 13.4816C9.09583 13.6541 9 13.8866 9 14.1291V16.4999H11.3708C11.6133 16.4999 11.8458 16.4041 12.0183 16.2316Z"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.37496 6.29175L6.29163 8.37508"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M6.29163 6.29175L8.37496 8.37508"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/enhance/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="làm nét anime, manga, tranh vẽ và ảnh AI trực tuyến hd"
                                  src="https://assets.snapedit.app/images/landing/product-art-enhance.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Làm nét ảnh nghệ thuật
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={18}
                                        height={17}
                                        viewBox="0 0 18 17"
                                        fill="none"
                                      >
                                        <path
                                          d="M11.4863 3.48926H13.9347V6.00009"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M10.667 6.8167L13.9337 3.4917"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M8.16667 10.1941V12.6391C8.16667 13.1149 7.78167 13.4999 7.30583 13.4999H4.86083C4.385 13.4999 4 13.1149 4 12.6391V10.1941C4 9.71825 4.385 9.33325 4.86083 9.33325H7.30583C7.78167 9.33325 8.16667 9.71825 8.16667 10.1941Z"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M16.5 2.66667V14.3333C16.5 15.2542 15.7542 16 14.8333 16H3.16667C2.24583 16 1.5 15.2542 1.5 14.3333V2.66667C1.5 1.74583 2.24583 1 3.16667 1H14.8333C15.7542 1 16.5 1.74583 16.5 2.66667Z"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/convert-image/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Chuyển đổi hình ảnh sang các định dạng khác trực tuyến"
                                  src="https://assets.snapedit.app/images/landing/product_convert_image.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Chuyển đổi Ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={20}
                                        height={21}
                                        viewBox="0 0 20 21"
                                        fill="none"
                                      >
                                        <path
                                          d="M5.21191 5.67262C7.87387 3.02412 12.1789 3.03503 14.8273 5.69699C16.5809 7.4595 17.2327 10.0386 16.5269 12.4226"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M14.7326 15.3886C12.0371 18.005 7.731 17.9409 5.11464 15.2454C3.40316 13.4822 2.77576 10.933 3.47341 8.5769"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M4.72116 9.82354L3.19449 8.29688L1.66699 9.82438"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M15.2793 11.1769L16.806 12.7035L18.3335 11.176"
                                          stroke="#252638"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M10.0005 12.2017C10.9403 12.2017 11.7022 11.4398 11.7022 10.5C11.7022 9.5602 10.9403 8.79834 10.0005 8.79834C9.06069 8.79834 8.29883 9.5602 8.29883 10.5C8.29883 11.4398 9.06069 12.2017 10.0005 12.2017Z"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/compress-image/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="nén ảnh trực tuyến"
                                  src="https://assets.snapedit.app/images/landing/product_compress_image.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Nén Ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <g clipPath="url(#clip0_12691_2490)">
                                          <path
                                            d="M16.7107 13.3333C15.4832 15.8008 12.9432 17.4999 9.9999 17.4999C7.05656 17.4999 4.51656 15.8008 3.28906 13.3333"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M16.7107 6.66667C15.4832 4.19917 12.9432 2.5 9.9999 2.5C7.05656 2.5 4.51656 4.19917 3.28906 6.66667"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M8.33333 10H2.5"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M6.66602 8.33325L8.33268 9.99992L6.66602 11.6666"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M11.666 10H17.4993"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M13.3327 11.6666L11.666 9.99992L13.3327 8.33325"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_12691_2490">
                                            <rect
                                              width={20}
                                              height={20}
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/add-watermark/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="thêm watermark vào ảnh"
                                  src="https://assets.snapedit.app/images/landing/product_add_watermark.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Thêm watermark
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                      >
                                        <path
                                          d="M12.3346 11.2975V10.6567C12.3346 10.3384 12.1305 10.0542 11.828 9.9542L10.1121 9.38253V7.9017L10.628 7.57087C11.008 7.3267 11.1855 6.86337 11.063 6.42837C10.9388 5.9842 10.5355 5.6792 10.0746 5.6792H7.92797C7.46797 5.6792 7.0638 5.98503 6.9388 6.42837C6.81714 6.86337 6.9938 7.3267 7.3738 7.57087L7.88964 7.9017V9.38337L6.1738 9.95503C5.87214 10.0542 5.66797 10.3375 5.66797 10.6567V11.2975C5.66797 11.4934 5.74547 11.6825 5.88547 11.8217L6.19214 12.1284C6.3313 12.2675 6.51964 12.3459 6.7163 12.3459H11.288C11.4838 12.3459 11.673 12.2684 11.8121 12.1284L12.1188 11.8217C12.2571 11.6825 12.3346 11.4942 12.3346 11.2975Z"
                                          stroke="#0051EE"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M14.3033 3.70842C17.2322 6.63735 17.2322 11.3861 14.3033 14.315C11.3744 17.2439 6.62562 17.2439 3.6967 14.315C0.767767 11.3861 0.767767 6.63734 3.6967 3.70842C6.62563 0.779485 11.3744 0.779485 14.3033 3.70842Z"
                                          stroke="#0051EE"
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
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="/vi/enhance/upload">
                        <div className="cursor-pointer flex flex-col w-full items-start relative rounded-3xl border-[1px] border-neutral-ink-100 overflow-hidden hover:shadow-shadow-slide-hover group">
                          <div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="relative self-stretch w-full rounded-4 overflow-hidden rounded-2xl">
                              <div className="relative w-full -top-px -left-px rounded-2xl">
                                <img
                                  className="flex-1 grow h-auto object-cover rounded-2xl transition-transform transform group-hover:scale-[120%] aspect-square"
                                  alt="Tô màu ảnh"
                                  src="https://assets.snapedit.app/images/landing/product_colorize_photo.webp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center pt-2 pb-5 px-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start justify-center gap-1 relative flex-1 grow">
                                <div className="flex justify-between items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="font-semibold text-[14px] leading-[18px] leading-5 text-neutral-ink-600">
                                    Tô màu ảnh
                                  </p>
                                  <div className="flex w-9 h-9 items-center justify-center px-4 py-0 relative rounded-lg bg-neutral-ink-100">
                                    <div
                                      color="inherit"
                                      //   mode="outline"
                                      className="sc-eac7f02c-0 bRLGlB text-center"
                                    >
                                      <svg
                                        className="align-middle"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                      >
                                        <g id="Group">
                                          <path
                                            id="Vector"
                                            d="M5.04927 12.1816L1.93094 9.06329C1.24177 8.37412 1.24177 7.25746 1.93094 6.56829L6.62594 1.87329L12.2393 7.48663L7.54427 12.1816C6.8551 12.87 5.7376 12.87 5.04927 12.1816Z"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            id="Vector_2"
                                            d="M14.7368 9.97827C14.7368 9.97827 12.9727 11.8924 12.9727 13.0658C12.9727 14.0358 13.7668 14.8299 14.7368 14.8299C15.7068 14.8299 16.501 14.0358 16.501 13.0649C16.501 11.8924 14.7368 9.97827 14.7368 9.97827Z"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            id="Vector_3"
                                            d="M6.62513 1.87495L5.7168 0.949951"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            id="Vector_4"
                                            d="M12.2434 7.48328H1.44336"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            id="Vector_5"
                                            d="M1.85156 16.3666H9.00156"
                                            stroke="#252638"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
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
