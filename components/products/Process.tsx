const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Send us your drawings, dimensions, specifications, reference images, or describe the fabrication requirement.",
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "We understand the application, material requirements, dimensions, and practical fabrication considerations.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "The work is carried out using suitable materials, fabrication techniques, welding, and assembly methods.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "The completed work is prepared for delivery with focus on quality, reliability, and the agreed requirements.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                How We Work
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              From requirement
              <br />
              to fabrication.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              A straightforward approach focused on understanding your
              requirement and delivering a practical fabrication solution.
            </p>

            <div className="mt-16 border-t border-[var(--border)]">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-[var(--border)] py-7 md:grid-cols-[60px_0.8fr_1.2fr] md:items-start md:gap-8"
                >
                  <span className="text-[10px] font-medium tracking-[0.16em] text-[var(--muted)]">
                    {step.number}
                  </span>

                  <h3 className="text-lg font-medium tracking-[-0.025em] text-[var(--foreground)]">
                    {step.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
                    {step.description}
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