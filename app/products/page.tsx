import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProductList from "@/components/products/ProductList";
import Process from "@/components/products/Process";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
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
                Products & Capabilities
              </span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--foreground)]">
              Fabrication built
              <br />
              around your requirements.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              From mild steel and stainless steel fabrication to customized
              industrial solutions, Sai Shradha Engineering works according
              to your drawings, dimensions, specifications, and application
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product list */}
      <section>
        <div className="container pb-24 md:pb-32">
          <ProductList />
        </div>
        <Process />
      </section>

      {/* Requirement CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Have a requirement?
              </p>

              <h2 className="text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[var(--foreground)]">
                Tell us what
                <br />
                you need fabricated.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                Share your drawings, dimensions, specifications, or project
                requirements with our team.
              </p>
            </div>

            <Link
              href="/#contact"
              className="theme-cta group inline-flex h-12 w-fit items-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Discuss a Requirement

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}