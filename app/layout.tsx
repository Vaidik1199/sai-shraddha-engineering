import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import FloatingContact from "@/components/ui/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Shraddha Engineering",
  description:
    "Sai Shraddha Engineering — Precision engineering, quality workmanship, and reliable industrial solutions.",
  icons: {
    icon: "/images/logo/sai-shradha-logo.png",
    shortcut: "/images/logo/sai-shradha-logo.png",
    apple: "/images/logo/sai-shradha-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem("theme");
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}