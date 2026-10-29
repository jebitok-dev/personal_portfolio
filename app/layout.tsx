import type { Metadata } from "next";
import { Archivo, Azeret_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-archivo" });
const azeret = Azeret_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-azeret" });

export const metadata: Metadata = {
  title: "Sharon Jebitok · Security & Software Engineering",
  description:
    "Sharon Jebitok: security researcher and software engineer. Bug bounty, smart contract audits, SOC and AI/ML security.",
  openGraph: {
    title: "Sharon Jebitok · Security & Software Engineering",
    description: "Security researcher and software engineer.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${azeret.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
