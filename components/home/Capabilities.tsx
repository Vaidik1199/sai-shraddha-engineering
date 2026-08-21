import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export default function Capabilities() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Our Capabilities
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex flex-col gap-8">
              <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
                Fabrication solutions for demanding requirements.
              </h2>

              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                We provide MS and SS fabrication services across industrial,
                commercial, and engineering applications, adapting our work
                to customer requirements and specifications.
              </p>
            </div>

            {/* Capability list */}
            <div className="mt-16 border-t border-[var(--border)]">
              {company.services.slice(0, 7).map((service, index) => (
                <div
                  key={service}
                  className="group flex items-center justify-between gap-6 border-b border-[var(--border)] py-5 md:py-6"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="w-6 text-[10px] font-medium tracking-[0.12em] text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-medium tracking-[-0.02em] text-[var(--foreground)] md:text-lg">
                      {service}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                    className="shrink-0 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--foreground)]"
                  />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
              >
                Explore all capabilities

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}