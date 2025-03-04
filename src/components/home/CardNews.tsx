import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/home/CardNews.css";

gsap.registerPlugin(ScrollTrigger);

export default function CardNews() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 타이틀 애니메이션
      const titleElements = titleRefs.current;
      titleElements.forEach((el, index) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "+=200",
            scrub: 1,
          },
        });
      });

      // 카드 슬라이드 애니메이션
      gsap.to(cardsWrapperRef.current, {
        x: "-150%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=50%",
          scrub: 1,
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      num: "01",
      title: "컨설팅부",
      desc: "다양한 경험과 노하우를 바탕으로 기후변화 대응 최적전략 수립 및 탄소배출권 관리 및 국가와 기업의 경쟁력을 고취합니다.",
      imgSrc: "https://test.chalix.co.kr/images/mom-cards-news/scale1.jpg",
    },
    {
      num: "02",
      title: "글로벌연구센터",
      desc: "기후변화 대응 및 ESG 경영 선도를 위해 국제개발협력, 정책연구, 신재생에너지 및 탄소감축 사업 등 다양한 현지 맞춤형 솔루션을 제공합니다.",
      imgSrc: "https://test.chalix.co.kr/images/mom-cards-news/scale2.jpg",
    },
    {
      num: "03",
      title: "정책연구부",
      desc: "국가, 지방자치단체, 사업장 등이 환경분야 및 기후변화에 선도적으로 대응할 수 있도록 정책 개발 및 대안 마련합니다.",
      imgSrc: "https://test.chalix.co.kr/images/mom-cards-news/scale3.jpg",
    },
    {
      num: "04",
      title: "기술개발부",
      desc: "세균 및 바이러스 제거, 지속적인 효과, 환경 친화적인 항균·항바이러스 나노물질의 개발로 새로운 제품과 서비스를 제공합니다.",
      imgSrc: "https://test.chalix.co.kr/images/mom-cards-news/scale4.jpg",
    },
  ];

  return (
    <section className="mom-cards-news" ref={sectionRef}>
      <div className="mom-card-wrapper">
        <div className="mom-sticky-card-wrapper">
          <div className="sticky-rotate-wrap">
            <div className="mom-top-wrapper">
              <p className="ten-top-text sub gray-text">
                {[..."Our Expertise"].map((char, index) => (
                  <span
                    key={`expertise-${index}`}
                    ref={(el: HTMLSpanElement | null) => {
                      titleRefs.current[index] = el;
                    }}
                    className="project-portfolio-list-subject active"
                  >
                    {char}
                  </span>
                ))}
              </p>
              <p className="ten-top-text sub">
                {[..."깊이 있는 전문 지식으로"].map((char, index) => (
                  <span
                    key={`depth-${index}`}
                    ref={(el: HTMLSpanElement | null) => {
                      titleRefs.current[index + 13] = el;
                    }}
                    className="project-portfolio-list-subject active"
                  >
                    {char}
                  </span>
                ))}
              </p>
              <p className="ten-top-text sub">
                {[..."지속 가능한 미래를 설계합니다"].map((char, index) => (
                  <span
                    key={`future-${index}`}
                    ref={(el: HTMLSpanElement | null) => {
                      titleRefs.current[index + 26] = el;
                    }}
                    className="project-portfolio-list-subject active"
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>

            <div className="mom-cards-wrapper" ref={cardsWrapperRef}>
              {cards.map((card, index) => (
                <a key={index} className="mom-cards-unit active" href="/">
                  <div className="txt-box">
                    <div className="mom-card-top-num">
                      <p>{card.num}</p>
                    </div>
                    <p className="mom-card-main-text">{card.title}</p>
                    <p className="mom-card-context">{card.desc}</p>
                  </div>
                  <div className="main-bottom-unit-back">
                    <div className="main-bottom-unit-img-wrap">
                      <img src={card.imgSrc} alt={`${card.title} 이미지`} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
