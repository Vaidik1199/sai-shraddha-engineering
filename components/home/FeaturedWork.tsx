import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const workCategories = [
  {
    number: "01",
    title: "Industrial Fabrication",
    description:
      "Fabrication solutions developed for industrial and engineering applications.",
    image: null,
  },
  {
    number: "02",
    title: "Custom Fabrication",
    description:
      "Customized fabrication based on drawings, dimensions, specifications, and requirements.",
    image: null,
  },
  {
    number: "03",
    title: "Machine & Equipment",
    description:
      "Fabrication of machines and equipment designed around specific operational needs.",
    image: null,
  },
  {
    number: "04",
    title: "Structural Work",
    description:
      "Reliable structural fabrication with a focus on precision, strength, and durability.",
    image: null,
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Featured Work
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Built for real-world requirements.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              From customized fabrication to industrial engineering work,
              every project is approached with precision, practical
              execution, and attention to detail.
            </p>
          </div>
        </div>

        {/* Work grid */}
        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {workCategories.map((work) => (
            <article
              key={work.number}
              className="group relative min-h-[320px] overflow-hidden bg-[var(--background)] p-7 transition-colors duration-300 hover:bg-[var(--surface-elevated)] md:min-h-[380px] md:p-9"
            >
              {/* Future project image */}
              {work.image && (
                <>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-black/45 transition-opacity duration-500 group-hover:bg-black/35" />
                </>
              )}

              {/* Placeholder while images are unavailable */}
              {!work.image && (
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, var(--border) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span
                    className={`text-[11px] font-medium tracking-[0.16em] ${
                      work.image
                        ? "text-white/70"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {work.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                    className={`transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      work.image
                        ? "text-white/80 group-hover:text-white"
                        : "text-[var(--muted)] group-hover:text-[var(--foreground)]"
                    }`}
                  />
                </div>

                <div>
                  <p
                    className={`mb-3 text-[10px] font-medium uppercase tracking-[0.18em] ${
                      work.image
                        ? "text-white/70"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    Fabrication
                  </p>

                  <h3
                    className={`text-2xl font-medium tracking-[-0.035em] md:text-3xl ${
                      work.image
                        ? "text-white"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {work.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-md text-sm leading-6 ${
                      work.image
                        ? "text-white/75"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {work.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            Project showcase
          </p>

          <p className="text-xs text-[var(--muted)]">
            Real project imagery coming soon
          </p>
        </div>
      </div>
    </section>
  );
}