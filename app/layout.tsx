import { GeistSans } from 'geist/font/sans';
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from 'next/font/local';
import "./globals.css";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BudgetProvider } from "@/components/BudgetProvider";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const klarheitPlakat = localFont({
  src: '../public/fonts/ESKlarheitPlakatFP-Extrabold.woff2',
  variable: '--font-klarheit',
  weight: '800',
  display: 'swap',
});


export const viewport: Viewport = {
  themeColor: '#FF007F',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://pwlabs.vercel.app'),
  title: {
    default: "PWlabs — Páginas que vendem, marcas que ficam",
    template: "%s | PWlabs"
  },
  description: "Landing pages, sites institucionais, e-commerce, tráfego pago e SEO. Páginas no ar em 15 dias.",
  keywords: ["Landing Page", "Criação de Sites", "SEO", "Tráfego Pago", "Design UX/UI", "Automação", "PWlabs"],
  authors: [{ name: "PWlabs" }],
  creator: "PWlabs",
  openGraph: {
    title: "PWlabs — Páginas que vendem, marcas que ficam",
    description: "Landing pages, sites institucionais, e-commerce, tráfego pago e SEO. Páginas de alta conversão.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://pwlabs.vercel.app",
    siteName: "PWlabs",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PWlabs — Soluções Digitais e Design de Produto",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PWlabs — Páginas que vendem, marcas que ficam",
    description: "Landing pages, sites institucionais, e-commerce, tráfego pago e SEO.",
    images: ["/assets/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${klarheitPlakat.variable}`}>
      <body className={`${GeistSans.className} antialiased`}>
        {/* NoScript fallback para usuários sem JS habilitado */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Script do GTM carregado de forma assíncrona após interatividade */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}

        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}

        <RevealOnScroll />
        <BudgetProvider>{children}</BudgetProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}