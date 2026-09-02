import Image from "next/image";
import { company } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="sticky top-28 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Who We Are
              </span>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[var(--foreground)]">
              Fabrication solutions built around real requirements.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
              {company.name} is a professionally managed fabrication company
              specializing in MS and SS fabrication work. We provide
              customized fabrication solutions based on customer requirements,
              drawings, dimensions, and specifications.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
              From customized fabrication jobs to industrial and engineering
              applications, our approach focuses on quality workmanship,
              precision, durability, and dependable execution.
            </p>

            <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--background)] md:mt-16">
              <Image
                src="/images/hero/engineering-fabrication-workshop.jpeg"
                alt="Sai Shradha Engineering fabrication workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  Our Facility
                </p>

                <p className="mt-2 text-sm text-white">
                  Engineering and fabrication in practice.
                </p>
              </div>

              <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-white/70" />
              <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-white/70" />
              <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/70" />
              <span className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}