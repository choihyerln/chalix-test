import "@/styles/home/CardNews.css";

export default function CardNews() {
  return (
    <section className="mom-cards-news">
      <div className="mom-card-wrapper">
        <div className="mom-sticky-card-wrapper">
          <div className="sticky-rotate-wrap">
            {/* 상단 문구 */}
            <div className="mom-top-wrapper">
              <p className="ten-top-text sub gray-text">
                {"Our Expertise".split("").map((char, index) => (
                  <span key={index} className="project-portfolio-list-subject">
                    {char}
                  </span>
                ))}
              </p>
              <p className="ten-top-text sub">
                {"깊이 있는 전문 지식으로".split("").map((char, index) => (
                  <span key={index} className="project-portfolio-list-subject">
                    {char}
                  </span>
                ))}
              </p>
              <p className="ten-top-text sub">
                {"지속 가능한 미래를 설계합니다".split("").map((char, index) => (
                  <span key={index} className="project-portfolio-list-subject active">
                    {char}
                  </span>
                ))}
              </p>
            </div>

            {/* 애니메이션 카드 */}
            <div className="mom-cards-wrapper" style={{ width: "250%" }}>
              {[
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
              ].map(({ num, title, desc, imgSrc }, index) => (
                <a key={index} className="mom-cards-unit active" href="/">
                  <div className="txt-box">
                    <div className="mom-card-top-num">
                      <p>{num}</p>
                    </div>
                    <p className="mom-card-main-text">{title}</p>
                    <p className="mom-card-context">{desc}</p>
                  </div>
                  <div className="main-bottom-unit-back">
                    <div className="main-bottom-unit-img-wrap">
                      <img src={imgSrc} alt={`${title} 이미지`} />
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
