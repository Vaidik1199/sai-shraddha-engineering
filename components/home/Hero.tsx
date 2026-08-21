import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div className="container relative flex min-h-[calc(100svh-80px)] items-center pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="grid w-full gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Engineering & Fabrication
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[var(--foreground)]">
              Precision work.
              <br />
              Reliable fabrication.
            </h1>

            <p className="mt-8 max-w-xl text-[16px] leading-7 text-[var(--muted)] md:text-[18px]">
              {company.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="primary-button group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore Products

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-[var(--border-strong)] px-6 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface)]"
              >
                Discuss a Requirement

                <MoveRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[var(--border)] py-5">
              <div className="pr-4">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  MS
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  Fabrication
                </p>
              </div>

              <div className="border-l border-[var(--border)] px-4">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  SS
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  Fabrication
                </p>
              </div>

              <div className="border-l border-[var(--border)] pl-4">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  Custom
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  Solutions
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <div
                className="absolute inset-0 opacity-[0.45]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, var(--border) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--border) 1px, transparent 1px)
                  `,
                  backgroundSize: "48px 48px",
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)]">
                  <span className="text-lg font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    SS
                  </span>
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  Sai Shradha Engineering
                </p>

                <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
                  Your fabrication and engineering work will be featured here.
                </p>
              </div>

              <span className="absolute left-5 top-5 h-3 w-3 border-l border-t border-[var(--foreground)]" />
              <span className="absolute right-5 top-5 h-3 w-3 border-r border-t border-[var(--foreground)]" />
              <span className="absolute bottom-5 left-5 h-3 w-3 border-b border-l border-[var(--foreground)]" />
              <span className="absolute bottom-5 right-5 h-3 w-3 border-b border-r border-[var(--foreground)]" />

              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                Precision • Fabrication • Reliability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}