import { WHATSAPP_DISPLAY } from "@/lib/data";

const FOOTER_COLS = [
  {
    title: "Sobre",
    links: [
      { label: "Quem somos", href: "#" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Sites institucionais", href: "/servicos/sites-institucionais" },
      { label: "Landing pages", href: "/servicos/landing-pages" },
      { label: "Lojas virtuais", href: "/servicos/lojas-virtuais" },
      { label: "Tráfego pago", href: "/servicos/trafego-pago" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "FAQ", href: "/" },
      { label: "Contato", href: "#contato" },
      { label: WHATSAPP_DISPLAY, href: "#contato" },
    ],
  },
];

function Social({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="footer-social" aria-label={label}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page">
        <div className="footer-grid">
          <div className="footer-brand-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-pwlabs.svg" alt="PWlabs" />
            <p>
              PWlabs — páginas que vendem, marcas que ficam. Sete anos fazendo
              landing pages, sites e copy que viram resultado.
            </p>
            <div className="footer-socials">
              <Social label="Instagram" href="#" />
              <Social label="Facebook" href="#" />
              <Social label="LinkedIn" href="#" />
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 PWlabs · feito com café</span>
          <div className="footer-links">
            <a href="/politica-de-privacidade">Política de privacidade</a>
            <a href="/blog">Blog</a>
            <a href="/servicos">Serviços</a>
          </div>
        </div>
      </div>
    </footer>
  );
}