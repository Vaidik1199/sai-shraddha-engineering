import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductList() {
  return (
    <section className="mt-20 border-t border-[var(--border)]">
      <div className="divide-y divide-[var(--border)]">
        {products.map((product) => (
          <article
            key={product.id}
            className="group grid gap-8 py-10 transition-colors duration-300 hover:bg-[var(--surface)] md:grid-cols-[80px_1fr_auto] md:items-start md:px-6"
          >
            {/* Number */}
            <div className="text-xs font-medium tracking-[0.16em] text-[var(--muted)]">
              {product.number}
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--foreground)] md:text-3xl">
                  {product.title}
                </h2>

                <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                  {product.shortTitle}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
                {product.description}
              </p>

              <p className="mt-4 max-w-2xl text-xs leading-6 text-[var(--muted)] md:text-sm">
                {product.details}
              </p>
            </div>

            {/* Arrow */}
            <Link
              href={`/products/${product.id}`}
              aria-label={`View ${product.title}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--foreground)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]"
            >
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}