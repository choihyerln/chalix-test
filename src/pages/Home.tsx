import CardNewsSection from "@/components/home/CardNews";
import PlaidPatternSection from "@/components/home/PlaidPattern";
import SlideImgSection from "@/components/home/SlideImg";
import VideoSection from "@/components/home/VideoSection";

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
