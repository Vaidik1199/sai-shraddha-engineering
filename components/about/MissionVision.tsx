import { company } from "@/data/company";

export default function MissionVision() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Mission */}
          <div className="border-t border-[var(--border)] pt-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Mission
            </p>

            <h2 className="mt-6 max-w-xl text-[clamp(1.8rem,3.5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--foreground)]">
              Build with quality.
              <br />
              Deliver with confidence.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
              {company.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="border-t border-[var(--border)] pt-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Vision
            </p>

            <h2 className="mt-6 max-w-xl text-[clamp(1.8rem,3.5vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--foreground)]">
              A trusted name
              <br />
              in fabrication.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
              {company.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}