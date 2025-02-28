import CardNewsSection from "@/components/CardNews";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <section className="main-container">
      <VideoSection />
      <CardNewsSection />
    </section>
  );
}
