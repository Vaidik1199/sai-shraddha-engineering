import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const workCategories = [
  {
    number: "01",
    title: "Industrial Fabrication",
    description:
      "Fabrication solutions developed for industrial and engineering applications.",
    image: "/images/work/large-cylindrical-fabrication.jpeg",
    href: "/products/industrial-fabrication",
  },
  {
    number: "02",
    title: "Custom Fabrication",
    description:
      "Customized fabrication based on drawings, dimensions, specifications, and requirements.",
    image: "/images/work/custom-curved-fabrication.jpeg",
    href: "/products/custom-fabrication",
  },
  {
    number: "03",
    title: "Machine & Equipment",
    description:
      "Fabrication of machines and equipment designed around specific operational needs.",
    image: "/images/work/large-custom-industrial-machine-assembly.jpeg",
    href: "/products/machine-equipment",
  },
  {
    number: "04",
    title: "Structural Work",
    description:
      "Reliable structural fabrication with a focus on precision, strength, and durability.",
    image: "/images/work/large-structural-fabrication-frame.jpeg",
    href: "/products/structural-fabrication",
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-24 md:py-32 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="sticky top-28 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Featured Work
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[var(--foreground)]">
              Built for real-world requirements.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              From customized fabrication to industrial engineering work,
              every project is approached with precision, practical
              execution, and attention to detail.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {workCategories.map((work) => (
            <Link
              key={work.number}
              href={work.href}
              aria-label={`View ${work.title}`}
              className="group relative block min-h-[340px] overflow-hidden bg-[var(--background)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset md:min-h-[410px]"
            >
              <Image
                src={work.image}
                alt={`${work.title} - Sai Shradha Engineering`}
                fill
                sizes="(max-width: 639px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5 transition-opacity duration-500 group-hover:opacity-90" />

              <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between p-6 sm:p-7 md:min-h-[410px] md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                    Project {work.number}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white/80 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/50 group-hover:text-white">
                    <ArrowUpRight size={17} strokeWidth={1.6} />
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65">
                    Fabrication
                  </p>

                  <h3 className="text-[1.35rem] font-medium leading-tight tracking-[-0.035em] text-white sm:text-2xl md:text-3xl">
                    {work.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                    {work.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Project showcase
          </p>

          <p className="text-xs text-[var(--muted)]">
            Selected fabrication and engineering work
          </p>
        </div>
      </div>
    </section>
  );
}