import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bombay Dreams — Bombay's talent agency",
  description:
    "Bombay's agency that treats your career like a business. Models · Actors · Creators — Transparent. Proactive. Cross-format.",
  keywords: "talent agency, models, actors, creators, Bombay, Mumbai, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen" style={{ background: "#0c0c0c", color: "#f5f0eb" }}>
        {children}
      </body>
    </html>
  );
}
