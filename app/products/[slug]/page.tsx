import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://sai-shradha-engineering.vercel.app";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${product.title} in Pune`;
  const description = `${product.description} Sai Shradha Engineering provides ${product.shortTitle.toLowerCase()} fabrication solutions according to drawings, dimensions, specifications, and application requirements.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: `${product.title} | Sai Shradha Engineering`,
      description,
      url: `/products/${product.id}`,
      type: "website",
      images: product.image
        ? [
            {
              url: product.image,
              alt: `${product.title} - Sai Shradha Engineering`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Sai Shradha Engineering`,
      description,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="container pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
          <Link
            href="/products"
            className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={14} strokeWidth={1.6} />
            Back to Products
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--foreground)]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  {product.number} / {product.shortTitle}
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--foreground)]">
                {product.title}
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg lg:pb-2">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Image */}
      {product.image && (
        <section className="border-b border-[var(--border)]">
          <div className="container py-8 md:py-12 lg:py-16">
            <div className="relative aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <Image
                src={product.image}
                alt={`${product.title} - Sai Shradha Engineering`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 hover:scale-[1.01]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                  Sai Shradha Engineering
                </p>

                <p className="mt-2 text-sm text-white">{product.title}</p>
              </div>

              <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-sm md:right-8 md:top-8">
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="border-b border-[var(--border)]">
        <div className="container py-24 md:py-32 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--foreground)]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  Overview
                </span>
              </div>
            </div>

            <div className="max-w-4xl">
              <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[var(--foreground)]">
                Fabrication developed around your requirements.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
                {product.details}
              </p>

              <div className="mt-12 border-t border-[var(--border)]">
                <div className="grid gap-4 border-b border-[var(--border)] py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Requirement
                  </span>

                  <span className="text-sm leading-6 text-[var(--foreground)] md:text-base">
                    Drawings, dimensions, specifications, or project
                    requirements.
                  </span>
                </div>

                <div className="grid gap-4 border-b border-[var(--border)] py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Approach
                  </span>

                  <span className="text-sm leading-6 text-[var(--foreground)] md:text-base">
                    Fabrication developed according to the intended
                    application and customer requirements.
                  </span>
                </div>

                <div className="grid gap-4 border-b border-[var(--border)] py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    Focus
                  </span>

                  <span className="text-sm leading-6 text-[var(--foreground)] md:text-base">
                    Quality workmanship, precision, durability, and reliable
                    execution.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface)]">
        <div className="container py-24 md:py-32 lg:py-40">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Have a requirement?
              </p>

              <h2 className="text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[var(--foreground)]">
                Need something
                <br />
                fabricated?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                Share your drawings, dimensions, specifications, or project
                details with Sai Shradha Engineering.
              </p>
            </div>

            <Link
              href="/#contact"
              className="theme-cta group inline-flex h-12 w-fit shrink-0 items-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Discuss a Requirement

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}