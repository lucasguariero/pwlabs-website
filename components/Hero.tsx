"use client";

import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/data";
import { useBudget } from "@/components/BudgetProvider";

export function Hero() {
  const { openModal } = useBudget();

  return (
    <section className="hero">
      <div className="container-page">
        <div className="hero-grid">
          {/* Lado esquerdo — copy + CTAs */}
          <div>
            <span className="eyebrow">Resposta no mesmo dia</span>
            <h1>
              Sua página <strong>no topo do Google</strong>, seu negócio no ar em 15 dias.
            </h1>
            <p className="hero-sub">
              Copy estratégico, design único e performance que sustenta o resultado.
            </p>

            <ul className="hero-checks">
              <li>
                <span className="hero-check-icon">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6l3 3 5-6" />
                  </svg>
                </span>
                Layout exclusivo, sem template reaproveitado
              </li>
              <li>
                <span className="hero-check-icon">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6l3 3 5-6" />
                  </svg>
                </span>
                SEO técnico e velocidade desde a primeira página
              </li>
              <li>
                <span className="hero-check-icon">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6l3 3 5-6" />
                  </svg>
                </span>
                Escopo, prazo e preço fechados antes de começar
              </li>
            </ul>

            <div className="hero-actions">
              <button
                type="button"
                onClick={openModal}
                className="btn-primary"
              >
                Pedir meu orçamento
                <svg
                  className="arrow"
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
              </button>
              <a
                href={WHATSAPP_URL}
                className="btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Lado direito — imagem do header */}
          <div className="relative md:w-[120%] md:-mr-[10%]">
            <Image
              src="/assets/pwlabs-header-1.png"
              alt="PWlabs — páginas que vendem"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: "cover", borderRadius: "1rem" }}
              className="w-full h-auto max-w-[900px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
