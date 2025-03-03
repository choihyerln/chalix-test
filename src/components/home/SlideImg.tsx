import "@/styles/home/SlideImg.css";

export default function SlideImg() {
  return (
    <section className="slide-image-section">
      <div className="slide-image-position" style={{ backgroundColor: "rgb(32, 32, 32)" }}>
        <div className="slide-image-sticky">
          <h1 className="slide-image-title">
            Environmental
            <br className="mobile-only" /> consultancy firm <br />
            offering high-value
            <br className="mobile-only" /> advisory services
          </h1>
          <div className="hover-business-content-btnWrap">
            <a className="hover-business-content-btn">
              <span>사업실적</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
          <div
            className="slide-img-wrap wrap1"
            style={{ top: "53.3334%", filter: "brightness(1)", height: "33.3704%", width: "26.9058%" }}
          >
            <img className="slide-image" src="https://test.chalix.co.kr/images/slide-image-section/1.png" alt="" />
          </div>
          <div className="slide-img-wrap wrap2" style={{ top: "2.4432%" }}>
            <img className="slide-image" src="https://test.chalix.co.kr/images/slide-image-section/2.png" alt="" />
          </div>
          <div className="slide-img-wrap wrap3" style={{ top: "50.5788%" }}>
            <img className="slide-image" src="https://test.chalix.co.kr/images/slide-image-section/3.png" alt="" />
          </div>
          <div className="slide-img-wrap wrap4" style={{ top: "18.5154%" }}>
            <img className="slide-image" src="https://test.chalix.co.kr/images/slide-image-section/4.png" alt="" />
          </div>
          <div className="slide-img-wrap wrap5" style={{ top: "46.3392%" }}>
            <img className="slide-image" src="https://test.chalix.co.kr/images/slide-image-section/5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
