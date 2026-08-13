import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import "./globals.css";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BudgetProvider } from "@/components/BudgetProvider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

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
      <html lang="pt-BR" className={GeistSans.variable}>
        <body className="font-sans antialiased">
          <RevealOnScroll />
          <BudgetProvider>{children}</BudgetProvider>
          <WhatsAppFloat />
        </body>
      </html>
    );
}

