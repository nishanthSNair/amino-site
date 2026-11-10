import type { Metadata } from "next";
import { DM_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Chrome } from "@/components/chrome";

const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Amino | The most trusted peptide clinic in the UAE",
  description: "Physician-reviewed peptides, from AED 1,500 a month. Amino, powered by Valeo.",
  metadataBase: new URL("https://amino.health"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll>
          <Chrome />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
