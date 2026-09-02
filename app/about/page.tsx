import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CompanyIntro from "@/components/about/CompanyIntro";
import Strength from "@/components/about/Strength";
import Services from "@/components/about/Services";
import MissionVision from "@/components/about/MissionVision";
import AboutClosing from "@/components/about/AboutClosing";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Engineering & Fabrication in Pune",
  description:
    "Learn about Sai Shradha Engineering, a Pune-based fabrication company providing MS, SS, structural, industrial, and customized engineering fabrication solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sai Shradha Engineering | Fabrication in Pune",
    description:
      "Learn about Sai Shradha Engineering and our approach to quality MS, SS, structural, industrial, and customized fabrication work in Pune.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Page Hero */}
      <section className="border-b border-[var(--border)]">
        <div className="container pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={14} strokeWidth={1.6} />
            Back to Home
          </Link>

          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                About Us
              </span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--foreground)]">
              Engineering with
              <br />
              precision.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <CompanyIntro />

      {/* Strength */}
      <Strength />

      {/* Services */}
      <Services />

      {/* Mission + Vision */}
      <MissionVision />

      {/* Closing */}
      <AboutClosing />
    </main>
  );
}