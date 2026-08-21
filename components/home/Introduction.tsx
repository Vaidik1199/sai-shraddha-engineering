import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export default function Introduction() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Section label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                About Us
              </span>
            </div>
          </div>

          {/* Main content */}
          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Engineering solutions built around your requirements.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              {company.description}
            </p>

            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
              >
                Learn more about us

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Capabilities */}
            <div className="mt-16 grid border-y border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
              {company.services.slice(0, 6).map((service, index) => (
                <div
                  key={service}
                  className={`px-0 py-5 sm:px-5 ${
                    index % 3 !== 0
                      ? "lg:border-l lg:border-[var(--border)]"
                      : ""
                  } ${
                    index % 2 !== 0
                      ? "sm:border-l sm:border-[var(--border)]"
                      : ""
                  } ${
                    index >= 3
                      ? "border-t border-[var(--border)]"
                      : ""
                  }`}
                >
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {service}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    Capability
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}