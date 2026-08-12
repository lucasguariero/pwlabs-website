"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container-page site-header-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/" className="site-logo" onClick={() => setOpen(false)}>
          <img src="/assets/logo-pwlabs.svg" alt="PWlabs" />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="site-nav-item">
              <a href={item.href} className="site-nav-link">
                {item.label}
              </a>
              {item.children && (
                <div className="site-nav-dropdown">
                  <div className="site-nav-dropdown-inner">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="site-nav-dropdown-link"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="/servicos" className="site-nav-link">Serviços</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          className="site-header-cta"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 12h15" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>

        <button
          type="button"
          className="site-menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`site-menu-bars ${open ? "is-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        className={`site-mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="site-mobile-nav" aria-label="Menu mobile">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="site-mobile-group">
              <a
                href={item.href}
                className="site-mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
              {item.children && (
                <div className="site-mobile-children">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="site-mobile-sublink"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="/servicos"
            className="site-mobile-link"
            onClick={() => setOpen(false)}
          >
            Serviços
          </a>
          <a
            href={WHATSAPP_URL}
            className="site-mobile-cta"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Chamar no WhatsApp
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 12h15" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
