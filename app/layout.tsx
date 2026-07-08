import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amino — Peptide therapy, advised by doctors",
  description:
    "The UAE's first blood-panel-led, physician-designed peptide protocol platform. Physician-reviewed protocols, compounded by a fully licensed UAE pharmacy, delivered cold-chain.",
  metadataBase: new URL("https://amino.health"),
  openGraph: {
    title: "Amino — Peptide therapy, advised by doctors",
    description:
      "The UAE's first blood-panel-led, physician-designed peptide protocol platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
