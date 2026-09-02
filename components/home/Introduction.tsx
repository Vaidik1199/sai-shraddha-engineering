import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export default function Introduction() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="sticky top-28 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                About Us
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[var(--foreground)]">
              Engineering solutions built around your requirements.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              {company.description}
            </p>

            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
              >
                Learn more about us

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="mt-16 border-y border-[var(--border)]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {company.services.slice(0, 6).map((service, index) => (
                  <div
                    key={service}
                    className={`group relative px-0 py-6 sm:px-5 ${
                      index >= 2
                        ? "border-t border-[var(--border)]"
                        : ""
                    } ${
                      index % 2 === 1
                        ? "sm:border-l sm:border-[var(--border)]"
                        : ""
                    } ${
                      index >= 3
                        ? "lg:border-t-0"
                        : ""
                    } ${
                      index % 3 !== 0
                        ? "lg:border-l lg:border-[var(--border)]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="max-w-[220px] text-sm font-medium leading-6 text-[var(--foreground)]">
                        {service}
                      </p>

                      <span className="text-[10px] font-medium tabular-nums text-[var(--muted)]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Capability
                    </p>

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between gap-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Selected capabilities
              </p>

              <p className="text-xs text-[var(--muted)]">
                Built for practical industrial requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}