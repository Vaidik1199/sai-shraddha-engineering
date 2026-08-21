import { company } from "@/data/company";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="border-b border-[var(--border)] pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="container">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                About Us
              </span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[var(--foreground)]">
              Engineering with precision.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="container grid gap-16 py-20 md:py-28 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Our Strength
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">
              Quality workmanship. Reliable execution.
            </h2>
          </div>

          <p className="text-base leading-7 text-[var(--muted)] md:text-lg">
            We use suitable materials, modern fabrication techniques, and
            skilled workmanship to ensure that every project meets the required
            standards. From customized jobs to larger industrial fabrication
            requirements, our focus remains on quality, precision, durability,
            and cost-effective execution.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="container grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Mission
            </p>

            <p className="mt-5 max-w-xl text-xl leading-8 tracking-[-0.02em] text-[var(--foreground)] md:text-2xl">
              {company.mission}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Vision
            </p>

            <p className="mt-5 max-w-xl text-xl leading-8 tracking-[-0.02em] text-[var(--foreground)] md:text-2xl">
              {company.vision}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-20 md:py-28">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            {company.tagline}
          </p>
        </div>
      </section>
    </main>
  );
}