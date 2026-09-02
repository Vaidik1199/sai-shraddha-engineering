import Image from "next/image";

const services = [
  "MS Fabrication Work",
  "SS Fabrication Work",
  "Structural Fabrication",
  "Industrial Fabrication",
  "Customized Fabrication",
  "Welding & Assembly Work",
  "Machine & Equipment Fabrication",
];

export default function Services() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="sticky top-28 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                What We Do
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Fabrication for industrial and engineering applications.
            </h2>

            <div className="relative mt-12 aspect-[16/8] overflow-hidden border border-[var(--border)] bg-[var(--background)]">
              <Image
                src="/images/work/fabricated-components-loaded-for-dispatch.jpeg"
                alt="Fabricated components prepared for dispatch"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  Fabrication Work
                </p>

                <p className="mt-2 text-sm text-white">
                  Customized work prepared to meet project requirements.
                </p>
              </div>

              <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-white/70" />
              <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-white/70" />
              <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/70" />
              <span className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/70" />
            </div>

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
                  <span className="text-[10px] font-medium tabular-nums tracking-[0.14em] text-[var(--muted)]">
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