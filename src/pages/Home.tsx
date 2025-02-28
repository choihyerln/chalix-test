import CardNewsSection from "@/components/CardNews";
import PlaidPatternSection from "@/components/PlaidPattern";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <section className="main-container">
      <VideoSection />
      <CardNewsSection />
      <PlaidPatternSection />
    </section>
  );
}
