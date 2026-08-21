import { company } from "@/data/company";

const strengths = [
  {
    number: "01",
    title: "Quality Workmanship",
    description:
      "Every fabrication requirement is approached with attention to workmanship, material suitability, and finish.",
  },
  {
    number: "02",
    title: "Precision",
    description:
      "Work is carried out according to customer drawings, dimensions, specifications, and practical requirements.",
  },
  {
    number: "03",
    title: "Customized Solutions",
    description:
      "We adapt our fabrication approach to suit the specific requirements of each project and application.",
  },
  {
    number: "04",
    title: "Reliable Execution",
    description:
      "Our focus remains on dependable solutions, timely delivery, and building long-term customer relationships.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Why Sai Shradha
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Built on quality. Driven by precision.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              We combine suitable materials, modern fabrication techniques,
              and skilled workmanship to deliver dependable fabrication
              solutions for our customers.
            </p>
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-16 grid border-y border-[var(--border)] md:grid-cols-2">
          {strengths.map((strength, index) => (
            <article
              key={strength.number}
              className={`group px-0 py-8 md:px-8 md:py-10 ${
                index % 2 !== 0
                  ? "md:border-l md:border-[var(--border)]"
                  : ""
              } ${
                index >= 2
                  ? "border-t border-[var(--border)]"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-medium tracking-[0.16em] text-[var(--muted)]">
                  {strength.number}
                </span>

                <span className="h-2 w-2 rounded-full border border-[var(--border-strong)] transition-colors duration-300 group-hover:bg-[var(--foreground)]" />
              </div>

              <h3 className="mt-12 text-xl font-medium tracking-[-0.03em] text-[var(--foreground)] md:text-2xl">
                {strength.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
                {strength.description}
              </p>
            </article>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="mt-20 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
          <article className="bg-[var(--background)] p-8 md:p-10 lg:p-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Our Mission
            </p>

            <p className="mt-8 max-w-xl text-xl leading-8 tracking-[-0.025em] text-[var(--foreground)] md:text-2xl md:leading-9">
              {company.mission}
            </p>
          </article>

          <article className="bg-[var(--background)] p-8 md:p-10 lg:p-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Our Vision
            </p>

            <p className="mt-8 max-w-xl text-xl leading-8 tracking-[-0.025em] text-[var(--foreground)] md:text-2xl md:leading-9">
              {company.vision}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}