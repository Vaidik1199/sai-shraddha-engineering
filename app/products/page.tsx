export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 pb-20 pt-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Our Products
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Fabrication solutions built around your requirements.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            Explore Sai Shradha Engineering&apos;s fabrication capabilities
            and customized engineering solutions.
          </p>
        </div>

        <div className="mt-20 border-t border-[var(--border)] pt-8">
          <p className="text-sm text-[var(--muted)]">
            Product information will be added here once the company&apos;s
            product details are finalized.
          </p>
        </div>
      </div>
    </main>
  );
}