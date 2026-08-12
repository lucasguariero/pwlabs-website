"use client";

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

          {/* Lado direito — mockup de conversa WhatsApp */}
          <div>
            <div className="chat-mockup">
              <div className="chat-mockup-header">
                <div className="chat-mockup-avatar">P</div>
                <div>
                  <div className="chat-mockup-name">PWlabs</div>
                  <div className="chat-mockup-status">online</div>
                </div>
              </div>

              <div className="chat-mockup-body">
                <div className="chat-bubble them">
                  Oi! Vi o portfólio de vocês e gostaria de um orçamento pra uma landing page.
                  <span className="chat-bubble-time">14:21</span>
                </div>
                <div className="chat-bubble me">
                  Oi! Claro, posso te ajudar. Me conta rapidinho: é pra quê segmento e tem prazo?
                  <span className="chat-bubble-time">14:22</span>
                </div>
                <div className="chat-bubble them">
                  Lançamento de infoproduto, queria entregar em 15 dias.
                  <span className="chat-bubble-time">14:23</span>
                </div>
                <div className="chat-bubble me">
                  Perfeito, encaixa no nosso fluxo. Vou te mandar uma proposta agora.
                  <span className="chat-bubble-time">14:23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
