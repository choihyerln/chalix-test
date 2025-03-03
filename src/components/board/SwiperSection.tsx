import "@/styles/board/SwiperSection.css";

export default function SwiperSection() {
  return (
    <div>
      <section className="angel-swiper-section1">
        <div className="angel-swiper-container">
          <div className="swiper swiper-initialized swiper-horizontal swiper-watch-progress angel-swiper swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-1118px, 0px, 0px)",
                transitionDelay: "0ms",
              }}
            >
              {/* Slide 1 */}
              <div className="swiper-slide angel-swiper-slide swiper-slide-prev" style={{ width: "1118px" }}>
                <div className="angel-main-swiper-imgWrap">
                  <img
                    className="angel-main-swiper-video"
                    src="https://test.chalix.co.kr/images/angel-swiper-section/7.png"
                    alt=" 사업실적 img"
                  />
                </div>
                <div className="angel-main-swiper-cover"></div>
                <div className="angel-main-swiper-content">
                  <div className="angel-main-swiper-content-line angel-main-swiper-content-line1">
                    <p className="angel-main-swiper-title">Creating impact</p>
                    <div className="angel-main-swiper-content-inner-line">
                      <p className="angel-main-swiper-title">through meaningful solutions</p>
                    </div>
                  </div>
                  <div className="angel-main-btn-container"></div>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className="swiper-slide angel-swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                style={{ width: "1118px" }}
              >
                <div className="angel-main-swiper-imgWrap">
                  <img
                    className="angel-main-swiper-video"
                    src="https://test.chalix.co.kr/images/angel-swiper-section/8.png"
                    alt="발표논문 img"
                  />
                </div>
                <div className="angel-main-swiper-cover"></div>
                <div className="angel-main-swiper-content">
                  <div className="angel-main-swiper-content-line angel-main-swiper-content-line1">
                    <p className="angel-main-swiper-title">Driving innovation</p>
                    <div className="angel-main-swiper-content-inner-line">
                      <p className="angel-main-swiper-title">with impactful research</p>
                    </div>
                  </div>
                  <div className="angel-main-btn-container"></div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide angel-swiper-slide swiper-slide-next" style={{ width: "1118px" }}>
                <div className="angel-main-swiper-imgWrap">
                  <img
                    className="angel-main-swiper-video"
                    src="https://test.chalix.co.kr/images/angel-swiper-section/9.png"
                    alt="NEWS img"
                  />
                </div>
                <div className="angel-main-swiper-cover"></div>
                <div className="angel-main-swiper-content">
                  <div className="angel-main-swiper-content-line angel-main-swiper-content-line1">
                    <p className="angel-main-swiper-title">Providing real-time updates</p>
                    <div className="angel-main-swiper-content-inner-line">
                      <p className="angel-main-swiper-title">on the latest industry developments</p>
                    </div>
                  </div>
                  <div className="angel-main-btn-container"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="angel-main-pagination-wrap">
            <div className="angel-main-pagination">
              <div className="angel-main-line-wrap">
                <div className="angel-main-line"></div>
              </div>
              <a aria-current="page" className="active" href="/presentation">
                <p className="angel-main-pagination-name">사업실적</p>
              </a>
            </div>
            <div className="angel-main-pagination active">
              <div className="angel-main-line-wrap">
                <div className="angel-main-line"></div>
              </div>
              <a aria-current="page" className="active" href="/presentation">
                <p className="angel-main-pagination-name">발표논문</p>
              </a>
            </div>
            <div className="angel-main-pagination">
              <div className="angel-main-line-wrap">
                <div className="angel-main-line"></div>
              </div>
              <a aria-current="page" className="active" href="/presentation">
                <p className="angel-main-pagination-name">NEWS</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
