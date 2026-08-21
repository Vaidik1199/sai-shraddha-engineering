const strengths = [
  {
    number: "01",
    title: "Quality Workmanship",
    description:
      "Every fabrication job is approached with attention to workmanship, material suitability, and finishing.",
  },
  {
    number: "02",
    title: "Precision",
    description:
      "Work is carried out according to customer drawings, dimensions, specifications, and application requirements.",
  },
  {
    number: "03",
    title: "Reliable Solutions",
    description:
      "We focus on practical, durable, and cost-effective fabrication solutions suited to the intended application.",
  },
  {
    number: "04",
    title: "Timely Execution",
    description:
      "Our goal is to complete work efficiently while maintaining the required quality and agreed requirements.",
  },
];

export default function Strength() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Our Strength
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Quality workmanship.
              <br />
              Reliable execution.
            </h2>

            <div className="mt-14 border-t border-[var(--border)]">
              {strengths.map((strength) => (
                <div
                  key={strength.number}
                  className="grid gap-5 border-b border-[var(--border)] py-7 md:grid-cols-[60px_0.8fr_1.2fr] md:items-start md:gap-8"
                >
                  <span className="text-[10px] font-medium tracking-[0.16em] text-[var(--muted)]">
                    {strength.number}
                  </span>

                  <h3 className="text-lg font-medium tracking-[-0.025em] text-[var(--foreground)]">
                    {strength.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
                    {strength.description}
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