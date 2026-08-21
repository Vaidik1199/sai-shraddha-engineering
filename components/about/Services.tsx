const services = [
  "MS Fabrication Work",
  "SS Fabrication Work",
  "Structural Fabrication",
  "Industrial Fabrication",
  "Customized Fabrication",
  "Welding & Assembly Work",
  "Machine & Equipment Fabrication",
  "Repair & Modification Work",
];

export default function Services() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                What We Do
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Fabrication for industrial and engineering applications.
            </h2>

            <div className="mt-14 grid border-t border-[var(--border)] sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service}
                  className={`flex items-center gap-4 border-b border-[var(--border)] py-5 ${
                    index % 2 === 0
                      ? "sm:border-r sm:pr-8"
                      : "sm:pl-8"
                  }`}
                >
                  <span className="text-[10px] font-medium tracking-[0.14em] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-[var(--foreground)] md:text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}