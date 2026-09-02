import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

const navigation = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
];

const mapUrl = "https://maps.app.goo.gl/2b5ZBAPVzP4JdDyR6";

export default function Footer() {
    return (
        <footer className="bg-[var(--background)]">
            <div className="container py-16 md:py-20">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3">
                            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--surface)]">
                                <Image
                                    src="/images/logo/sai-shradha-logo.png"
                                    alt="Sai Shradha Engineering logo"
                                    fill
                                    sizes="40px"
                                    className="object-contain p-1"
                                />
                            </span>

                            <span>
                                <span className="block text-sm font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                                    Sai Shradha
                                </span>

                                <span className="block text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                                    Engineering
                                </span>
                            </span>
                        </Link>

                        <p className="mt-7 max-w-sm text-sm leading-6 text-[var(--muted)]">
                            Quality fabrication, precision work, and reliable engineering
                            solutions tailored to customer requirements.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                            Navigation
                        </p>

                        <nav className="mt-5 flex flex-col gap-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="w-fit text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <a
                                href="/#contact"
                                className="w-fit text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                            Contact
                        </p>

                        <div className="mt-5 space-y-4">
                            <a
                                href={`tel:${company.contact.phone}`}
                                className="flex items-start gap-3 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                            >
                                <Phone
                                    size={15}
                                    strokeWidth={1.6}
                                    className="mt-0.5 shrink-0 text-[var(--muted)]"
                                />

                                {company.contact.phone}
                            </a>

                            <a
                                href={`mailto:${company.contact.email}`}
                                className="flex items-start gap-3 break-all text-sm text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
                            >
                                <Mail
                                    size={15}
                                    strokeWidth={1.6}
                                    className="mt-0.5 shrink-0 text-[var(--muted)]"
                                />

                                {company.contact.email}
                            </a>

                            <a
                                href={mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Sai Shradha Engineering location in Google Maps"
                                className="group flex items-start gap-3 text-sm leading-6 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                            >
                                <MapPin
                                    size={15}
                                    strokeWidth={1.6}
                                    className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                                />

                                <span className="relative">
                                    Bhosari, Pune
                                    <br />
                                    Maharashtra — 411026

                                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 border-t border-[var(--border)] pt-7">
                    <div className="flex flex-col gap-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} {company.name}. All rights
                            reserved.
                        </p>

                        <p>
                            Quality Fabrication{" "}
                            <span className="mx-1">•</span> Precision Work{" "}
                            <span className="mx-1">•</span> Reliable Solutions
                        </p>
                    </div>

                    {/* Developer credit */}
                    <div className="mt-8 border-t border-[var(--border)] pt-5 text-center">
                        <a
                            href="https://vaidikchoudhary.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                        >
                            Designed & Developed by
                            <span className="relative text-[var(--foreground)]">
                                Vaidik Choudhary
                                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}