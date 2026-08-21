import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedWork from "@/components/home/FeaturedWork";
import Capabilities from "@/components/home/Capabilities";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <FeaturedWork />
      <Capabilities />
    </main>
  );
}