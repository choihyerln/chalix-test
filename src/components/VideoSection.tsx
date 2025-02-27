import "@/styles/VideoSection.css";

export default function VideoSection() {
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
                <div>
                  <span style={{ opacity: 1 }}>지</span>
                  <span style={{ opacity: 1 }}>속</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>가</span>
                  <span style={{ opacity: 1 }}>능</span>
                  <span style={{ opacity: 1 }}>한</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>미</span>
                  <span style={{ opacity: 1 }}>래</span>
                  <span style={{ opacity: 1 }}>와</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>고</span>
                  <span style={{ opacity: 1 }}>객</span>
                  <span style={{ opacity: 1 }}>의</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>비</span>
                  <span style={{ opacity: 1 }}>즈</span>
                  <span style={{ opacity: 1 }}>니</span>
                  <span style={{ opacity: 1 }}>스</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>성</span>
                  <span style={{ opacity: 1 }}>공</span>
                  <span style={{ opacity: 1 }}>을</span>
                </div>
                <div>
                  <span style={{ opacity: 1 }}>위</span>
                  <span style={{ opacity: 1 }}>한</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>혁</span>
                  <span style={{ opacity: 1 }}>신</span>
                  <span style={{ opacity: 1 }}>적</span>
                  <span style={{ opacity: 1 }}>인</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>환</span>
                  <span style={{ opacity: 1 }}>경</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>솔</span>
                  <span style={{ opacity: 1 }}>루</span>
                  <span style={{ opacity: 1 }}>션</span>
                  <span style={{ opacity: 1 }}>을</span>
                  <span style={{ opacity: 1 }}> </span>
                  <span style={{ opacity: 1 }}>제</span>
                  <span style={{ opacity: 1 }}>공</span>
                  <span style={{ opacity: 1 }}>합</span>
                  <span style={{ opacity: 1 }}>니</span>
                  <span style={{ opacity: 1 }}>다</span>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
