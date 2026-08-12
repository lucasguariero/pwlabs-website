import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BudgetProvider } from "@/components/BudgetProvider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PWlabs — Páginas que vendem, marcas que ficam",
  description:
    "Landing pages, sites institucionais, e-commerce, tráfego pago e SEO. Páginas no ar em 15 dias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <RevealOnScroll />
        <BudgetProvider>{children}</BudgetProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
