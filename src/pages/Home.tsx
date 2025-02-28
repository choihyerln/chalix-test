import CardNewsSection from "@/components/CardNews";
import PlaidPatternSection from "@/components/PlaidPattern";
import SlideImgSection from "@/components/SlideImg";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <section className="main-container">
      <VideoSection />
      <CardNewsSection />
      <PlaidPatternSection />
      <SlideImgSection />
    </section>
  );
}
