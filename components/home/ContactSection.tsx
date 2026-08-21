"use client";

import { useState } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="container py-24 md:py-32 lg:py-40">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--foreground)]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Contact
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)]">
              Have a fabrication requirement?
              <br />
              Let&apos;s discuss it.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Tell us about your requirement and our team can discuss the
              appropriate fabrication solution with you.
            </p>
          </div>
        </div>

        {/* Contact content */}
        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div className="bg-[var(--background)] p-7 md:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-start justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)]">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.6}
                    className="text-[var(--foreground)]"
                  />
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-[var(--foreground)]">
                  Thank you for your enquiry.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
                  Your enquiry has been recorded. We&apos;ll connect with you
                  regarding your requirement.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-medium text-[var(--foreground)] underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="h-12 w-full border-b border-[var(--border-strong)] bg-transparent px-0 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="h-12 w-full border-b border-[var(--border-strong)] bg-transparent px-0 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                    />
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="h-12 w-full border-b border-[var(--border-strong)] bg-transparent px-0 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-12 w-full border-b border-[var(--border-strong)] bg-transparent px-0 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    Requirement
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    required
                    defaultValue=""
                    className="h-12 w-full border-b border-[var(--border-strong)] bg-[var(--background)] px-0 text-sm text-[var(--foreground)] outline-none focus:border-[var(--foreground)]"
                  >
                    <option value="" disabled>
                      Select a requirement
                    </option>
                    {company.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us briefly about your requirement..."
                    className="w-full resize-none border-b border-[var(--border-strong)] bg-transparent px-0 py-3 text-sm leading-6 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                  />
                </div>

                <button
                  type="submit"
                  className="primary-button group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Send Enquiry

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <aside className="bg-[var(--surface)] p-7 md:p-10 lg:p-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Direct Contact
            </p>

            <div className="mt-10 space-y-8">
              <a
                href={`tel:${company.contact.phone}`}
                className="group block"
              >
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Phone size={16} strokeWidth={1.6} />

                  <span className="text-xs uppercase tracking-[0.14em]">
                    Main Phone
                  </span>
                </div>

                <p className="mt-3 text-lg font-medium text-[var(--foreground)]">
                  {company.contact.phone}
                </p>
              </a>

              <a
                href={`tel:${company.contact.alternatePhone}`}
                className="group block"
              >
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Phone size={16} strokeWidth={1.6} />

                  <span className="text-xs uppercase tracking-[0.14em]">
                    Alternate Phone
                  </span>
                </div>

                <p className="mt-3 text-lg font-medium text-[var(--foreground)]">
                  {company.contact.alternatePhone}
                </p>
              </a>

              <a
                href={`mailto:${company.contact.email}`}
                className="group block"
              >
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Mail size={16} strokeWidth={1.6} />

                  <span className="text-xs uppercase tracking-[0.14em]">
                    Email
                  </span>
                </div>

                <p className="mt-3 break-all text-base font-medium text-[var(--foreground)]">
                  {company.contact.email}
                </p>
              </a>
            </div>

            <div className="mt-12 border-t border-[var(--border)] pt-8">
              <p className="text-xs leading-6 text-[var(--muted)]">
                For fabrication enquiries, drawings, specifications, or
                project requirements, contact us directly or use the enquiry
                form.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}