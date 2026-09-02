import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

const capabilityLinks: Record<string, string> = {
  "MS Fabrication Work": "/products/ms-fabrication",
  "SS Fabrication Work": "/products/ss-fabrication",
  "Structural Fabrication": "/products/structural-fabrication",
  "Industrial Fabrication": "/products/industrial-fabrication",
  "Customized Fabrication": "/products/custom-fabrication",
  "Welding & Assembly Work": "/products/welding-assembly",
  "Machine & Equipment Fabrication": "/products/machine-equipment",
};

export default function Capabilities() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="sticky top-28 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Our Capabilities
              </span>
            </div>
          </div>

          <div>
            <div>
              <h2 className="max-w-3xl text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[var(--foreground)]">
                Fabrication solutions for demanding requirements.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                We provide MS and SS fabrication services across industrial,
                commercial, and engineering applications, adapting our work
                to customer requirements and specifications.
              </p>
            </div>

            <div className="mt-16 border-t border-[var(--border)]">
              {company.services.slice(0, 7).map((service, index) => {
                const href = capabilityLinks[service];

                return (
                  <Link
                    key={service}
                    href={href ?? "/products"}
                    className="group relative flex items-center justify-between gap-4 border-b border-[var(--border)] py-5 transition-colors duration-300 hover:bg-[var(--surface)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-inset md:gap-6 md:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4 md:gap-10">
                      <span className="w-6 shrink-0 text-[10px] font-medium tabular-nums tracking-[0.12em] text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-sm font-medium leading-6 tracking-[-0.02em] text-[var(--foreground)] sm:text-base md:text-lg">
                        {service}
                      </h3>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 group-hover:border-[var(--border-strong)] group-hover:bg-[var(--background)] group-hover:text-[var(--foreground)]">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.6}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <Link
                href="/products"
                className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
              >
                Explore all capabilities

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                07 capabilities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}