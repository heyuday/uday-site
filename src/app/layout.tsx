import type { Metadata } from "next";
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_URL, identity } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

const description =
  "Uday Tyagi — ML and software engineer working on interpretability, steering, evaluations, and oversight. M.S. CS at Cornell, software engineer at KLA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Uday Tyagi — AI safety, steering & evals",
    template: "%s — Uday Tyagi",
  },
  description,
  keywords: [
    "Uday Tyagi",
    "AI safety",
    "mechanistic interpretability",
    "steering vectors",
    "LLM evaluations",
    "AI control",
    "Cornell",
  ],
  authors: [{ name: identity.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Uday Tyagi",
    title: "Uday Tyagi — AI safety, steering & evals",
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Uday Tyagi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Tyagi — AI safety, steering & evals",
    description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#faf9f5" />
        {/* Fail open: the reveal animation is a progressive enhancement, so
            without JS every section must still be visible. */}
        <noscript>
          <style>{`.u-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
