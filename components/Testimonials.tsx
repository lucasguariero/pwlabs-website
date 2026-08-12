import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section section-alt">
      <div className="container-page">
        <div className="section-header-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="section-title">
            Profissionais que <strong>testaram na vida real.</strong>
          </h2>
          <p className="section-intro">
            O que dizem clientes que confiaram o projeto pra gente — sem edição,
            sem filtro.
          </p>
        </div>

        <div className="testimonials-grid reveal">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="testimonial-card">
              <div className="testimonial-stars" aria-label="Avaliação 5 estrelas">
                {[...Array(5)].map((_, k) => (
                  <span key={k} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
