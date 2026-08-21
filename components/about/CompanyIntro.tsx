import { company } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Who We Are
              </span>
            </div>
          </div>

          {/* Content */}
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
          </div>
        </div>
      </div>
    </section>
  );
}