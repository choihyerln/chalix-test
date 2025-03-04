import "@/styles/home/VideoSection.css";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function VideoSection() {
  useEffect(() => {
    gsap.fromTo(
      ".main-bottom-title span",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, stagger: 0.04, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="main-video-section">
      <div className="main-video-container">
        {/* 백그라운드 */}
        <div className="main-video-back">
          <video className="main-video" autoPlay loop muted playsInline>
            <source src="https://test.chalix.co.kr/images/main-video-section/mainvid.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 문구 */}
        <div className="main-video-up">
          <div className="main-up-bottom">
            <div className="main-bottom-left">
              <h1 className="main-bottom-title">
                {["지속 가능한 미래와 고객의 비즈니스 성공을", "위한 혁신적인 환경 솔루션을 제공합니다"].map(
                  (sentence, index) => (
                    <div key={index}>
                      {sentence.split("").map((char, idx) => (
                        <span key={idx} style={{ opacity: 1 }}>
                          {char}
                        </span>
                      ))}
                    </div>
                  )
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
