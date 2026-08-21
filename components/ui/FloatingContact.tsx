"use client";

import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contacts = [
  {
    label: "Call",
    href: "tel:+919561081759",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919561081759",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "mailto:saishradhaengg@rediffmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/2b5ZBAPVzP4JdDyR6",
    icon: MapPin,
  },
];

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {contacts.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Location" || label === "WhatsApp" ? "_blank" : undefined}
          rel={
            label === "Location" || label === "WhatsApp"
              ? "noopener noreferrer"
              : undefined
          }
          aria-label={label}
          className="group flex items-center gap-2"
        >
          <span className="pointer-events-none translate-x-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--foreground)] opacity-0 shadow-sm transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] text-[var(--foreground)] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[var(--foreground)]">
            <Icon size={17} strokeWidth={1.6} />
          </span>
        </a>
      ))}
    </div>
  );
}