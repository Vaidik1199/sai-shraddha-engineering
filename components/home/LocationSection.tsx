import { ExternalLink, MapPin } from "lucide-react";

const mapUrl = "https://maps.app.goo.gl/2b5ZBAPVzP4JdDyR6";

export default function LocationSection() {
    return (
        <section className="border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="container py-24 md:py-32 lg:py-40">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                    {/* Label */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[var(--foreground)]" />

                            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                                Find Us
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="flex items-start justify-between gap-8">
                            <div>
                                <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
                                    Visit our facility.
                                </h2>

                                <div className="mt-7 flex items-start gap-3">
                                    <MapPin
                                        size={18}
                                        strokeWidth={1.6}
                                        className="mt-1 shrink-0 text-[var(--foreground)]"
                                    />

                                    <address className="not-italic text-base leading-7 text-[var(--muted)]">
                                        <span className="font-medium text-[var(--foreground)]">
                                            Sai Shradha Engineering
                                        </span>
                                        <br />
                                        Sector No. 10, Plot No. 233/A, PCNTDA
                                        <br />
                                        Near Water Tank, Bhosari
                                        <br />
                                        Pune, Maharashtra — 411026
                                    </address>
                                </div>
                            </div>

                            {/* Desktop Maps button */}
                            <a
                                href={mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden shrink-0 items-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-2.5 text-xs font-medium text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--background)] sm:flex"
                            >
                                Open Maps
                                <ExternalLink size={14} strokeWidth={1.6} />
                            </a>
                        </div>

                        {/* Google Maps */}
                        <div className="mt-12 overflow-hidden border border-[var(--border)] bg-[var(--background)]">
                            <div className="relative aspect-[16/8] min-h-[300px]">
                                <iframe
                                    title="Sai Shradha Engineering location"
                                    src="https://www.google.com/maps?q=18.6493904,73.8362326&z=17&output=embed"
                                    className="absolute inset-0 h-full w-full border-0 grayscale"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                                {/* Location label */}
                                <div className="pointer-events-none absolute bottom-4 left-4 max-w-[calc(100%-2rem)] border border-[var(--border)] bg-[var(--background)]/95 px-4 py-3 shadow-sm backdrop-blur-sm">
                                    <div className="flex items-center gap-2">
                                        <MapPin
                                            size={14}
                                            strokeWidth={1.7}
                                            className="shrink-0 text-[var(--foreground)]"
                                        />

                                        <p className="text-xs font-medium text-[var(--foreground)]">
                                            Sai Shradha Engineering
                                        </p>
                                    </div>

                                    <p className="mt-1 pl-5 text-[10px] leading-4 text-[var(--muted)]">
                                        Sector No. 10, Plot No. 233/A · Bhosari · Pune
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Maps button */}
                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-3 text-xs font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--background)] sm:hidden"
                        >
                            Open in Google Maps
                            <ExternalLink size={14} strokeWidth={1.6} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}