import { useEffect, useState } from "react";
import "@/styles/board/SwiperSection.css";

export default function SwiperSection() {
  const slides = [
    {
      image: "https://test.chalix.co.kr/images/angel-swiper-section/7.png",
      title: "Creating impact",
      subtitle: "through meaningful solutions",
      category: "사업실적",
    },
    {
      image: "https://test.chalix.co.kr/images/angel-swiper-section/8.png",
      title: "Driving innovation",
      subtitle: "with impactful research",
      category: "발표논문",
    },
    {
      image: "https://test.chalix.co.kr/images/angel-swiper-section/9.png",
      title: "Providing real-time updates",
      subtitle: "on the latest industry developments",
      category: "NEWS",
    },
  ];

  // URL에서 category 파라미터 확인
  const getInitialSlide = () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const index = slides.findIndex((slide) => slide.category === category);
    return index >= 0 ? index : 0;
  };
  const [currentSlide, setCurrentSlide] = useState(getInitialSlide());

  // URL이 변경될 때마다 슬라이드 업데이트
  useEffect(() => {
    setCurrentSlide(getInitialSlide());
  }, [window.location.search]);

  const handlePaginationClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <section className="angel-swiper-section1">
        <div className="angel-swiper-container">
          <div className="angel-swiper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`angel-swiper-slide ${index === currentSlide ? "active" : ""}`}
                style={{
                  display: index === currentSlide ? "flex" : "none",
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <div className="angel-main-swiper-imgWrap">
                  <img className="angel-main-swiper-video" src={slide.image} alt={`${slide.category} img`} />
                </div>
                <div className="angel-main-swiper-cover"></div>
                <div className="angel-main-swiper-content">
                  <div className="angel-main-swiper-content-line angel-main-swiper-content-line1">
                    <p className="angel-main-swiper-title">{slide.title}</p>
                    <div className="angel-main-swiper-content-inner-line">
                      <p className="angel-main-swiper-title">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="angel-main-pagination-wrap">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`angel-main-pagination ${index === currentSlide ? "active" : ""}`}
                onClick={() => handlePaginationClick(index)}
              >
                <div className="angel-main-line-wrap">
                  <div className="angel-main-line"></div>
                </div>
                <a>
                  <p className="angel-main-pagination-name">{slide.category}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
