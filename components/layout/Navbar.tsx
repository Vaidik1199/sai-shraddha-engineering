"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-3"
            aria-label="Sai Shradha Engineering home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src="/images/logo/sai-shradha-logo.png"
                alt="Sai Shradha Engineering logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>

            <div className="block min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-[15px]">
                Sai Shradha
              </p>

              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.16em]">
                Engineering
              </p>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/#contact"
              className="primary-button rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Contact Us
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
            >
              {isDark ? (
                <Sun size={16} strokeWidth={1.7} />
              ) : (
                <Moon size={16} strokeWidth={1.7} />
              )}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {isDark ? (
                <Sun size={17} strokeWidth={1.7} />
              ) : (
                <Moon size={17} strokeWidth={1.7} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
            >
              {isMenuOpen ? (
                <X size={19} strokeWidth={1.7} />
              ) : (
                <Menu size={19} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
            <nav
              className="container flex flex-col py-5"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-[var(--border)] py-4 text-base font-medium text-[var(--foreground)] last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/#contact"
                onClick={closeMenu}
                className="primary-button mt-5 flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-90"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}