import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedWork from "@/components/home/FeaturedWork";
import Capabilities from "@/components/home/Capabilities";
import WhyUs from "@/components/home/WhyUs";
import ContactSection from "@/components/home/ContactSection";
import LocationSection from "@/components/home/LocationSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Fabrication Company in Pune",
  description:
    "Sai Shradha Engineering is a Pune-based fabrication company specializing in MS, SS, structural, industrial, and customized fabrication solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fabrication Company in Pune",
    description:
      "Sai Shradha Engineering provides MS, SS, structural, industrial, and customized fabrication solutions in Pune.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <FeaturedWork />
      <Capabilities />
      <WhyUs />
      <ContactSection />
      <LocationSection />
      <Footer />
    </main>
  );
}