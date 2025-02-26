export default function Home() {
  return (
    <section>
      <div className="main ">
        <div className="main-video-back">
          <video className="main-video" autoPlay loop muted playsInline>
            <source src="https://test.chalix.co.kr/images/main-video-section/mainvid.mp4" type="video/mp4" />
          </video>
        </div>
        <h1>홈페이지</h1>
      </div>
    </section>
  );
}
