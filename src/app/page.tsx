import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import WhyChooseUs from "@/components/WhyChooseUs";
import InstagramFeed from "@/components/InstagramFeed";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCollections />
      <WhyChooseUs />
      <InstagramFeed />
      <EmailCapture />
    </div>
  );
}
