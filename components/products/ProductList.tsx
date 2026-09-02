import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductList() {
  return (
    <section className="mt-16 border-t border-[var(--border)] sm:mt-20">
      <div className="divide-y divide-[var(--border)]">
        {products.map((product) => (
          <article
            key={product.id}
            className="group grid gap-7 py-8 transition-colors duration-300 hover:bg-[var(--surface)] sm:gap-8 sm:py-10 md:grid-cols-[64px_1fr_320px] md:items-start md:px-6 lg:grid-cols-[80px_1fr_360px]"
          >
            {/* Number */}
            <div className="text-[11px] font-medium tracking-[0.16em] text-[var(--muted)] md:pt-1">
              {product.number}
            </div>

            {/* Content */}
            <div className="min-w-0">
              <Link
                href={`/products/${product.id}`}
                className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
              >
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <h2 className="text-[1.4rem] font-semibold leading-tight tracking-[-0.035em] text-[var(--foreground)] sm:text-2xl md:text-3xl">
                    {product.title}
                  </h2>

                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                    {product.shortTitle}
                  </span>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
                  {product.description}
                </p>

                <p className="mt-3 max-w-2xl text-xs leading-6 text-[var(--muted)] md:mt-4 md:text-sm">
                  {product.details}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)] sm:mt-6">
                  View fabrication
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>

            {/* Product image */}
            <Link
              href={`/products/${product.id}`}
              aria-label={`View ${product.title}`}
              className="relative block w-full overflow-hidden border border-[var(--border)] bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image!}
                  alt={`${product.title} - Sai Shradha Engineering`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 320px, 360px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-70" />

                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:right-4 sm:top-4">
                  <ArrowUpRight size={16} strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}