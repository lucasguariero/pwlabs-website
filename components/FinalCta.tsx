import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/data";

export function FinalCta() {
  return (
    <section id="contato" className="final-cta">
      <div className="container-page final-cta-inner">
        <span className="eyebrow">Próximo passo</span>
        <h2>
          Vamos combinar <strong>20 minutos?</strong>
        </h2>
        <p>
          Me conta o que você precisa. Se fizer sentido, a gente começa já no
          próximo briefing — sem compromisso.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a
            href={WHATSAPP_URL}
            className="btn-primary btn-on-magenta"
            target="_blank"
            rel="noreferrer"
          >
            {WHATSAPP_DISPLAY}
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
          </a>
        </div>
      </div>
    </section>
  );
}
