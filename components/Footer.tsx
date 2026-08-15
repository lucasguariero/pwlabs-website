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
        <path d="M12 2.04c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2.04 12 2.04zm-2 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm6.09 4.15c-.26.79-.88 1.41-1.67 1.67-.1.03-.2.01-.28-.06l-.5-.5c-.14-.14-.14-.36 0-.51.14-.14.36-.14.51 0l.28.28c.42-.18.76-.52.94-.94.07-.18.03-.39-.1-.53l-.18-.18c-.14-.14-.37-.14-.51 0-.14.14-.14.37 0 .51l.06.06c-.54.22-.94.66-1.12 1.2-.02.06-.08.1-.15.1-.06 0-.12-.04-.15-.1-.26-.65-.87-1.14-1.58-1.23-.08-.01-.15.04-.18.11-.03.07.01.15.08.19.59.07 1.1.42 1.34.96.03.07-.02.14-.09.16-.07.02-.14-.02-.16-.09-.2-.46-.61-.78-1.12-.87-.07-.01-.13.03-.15.1-.02.07.02.13.09.15.42.07.76.32 1.02.66.04.05.11.06.17.02.05-.04.06-.11.02-.17-.29-.39-.7-.66-1.18-.74-.07-.01-.13.04-.15.1-.02.07.03.14.1.15.4.06.71.31.96.64.04.05.11.06.17.03.05-.04.06-.11.03-.17-.3-.39-.72-.68-1.22-.76-.07-.01-.13.04-.15.1-.02.07.03.14.1.15.42.07.76.31 1.02.64.04.05.11.06.17.03.05-.04.06-.11.02-.17-.3-.39-.72-.68-1.22-.76-.07-.01-.13.04-.15.1-.02.07.03.14.1.15z" />
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
          </div>
        </div>
      </div>
    </footer>
  );
}