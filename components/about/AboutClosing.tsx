import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export default function AboutClosing() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="max-w-5xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            {company.tagline}
          </p>

          <h2 className="mt-7 text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--foreground)]">
            Reliable fabrication.
            <br />
            Built around your needs.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Have a fabrication requirement? Share your drawings, dimensions,
            specifications, or project details with us.
          </p>

          <Link
            href="/#contact"
            className="theme-cta group mt-9 inline-flex h-12 items-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            Discuss a Requirement

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}