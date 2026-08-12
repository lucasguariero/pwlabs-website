import { CASES } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="section section-alt">
      <div className="container-page">
        <div className="section-header-center">
          <span className="eyebrow">Portfólio</span>
          <h2 className="section-title">
            Alguns dos <strong>projetos</strong> que a gente entregou.
          </h2>
          <p className="section-intro">
            Cada projeto abaixo foi escrito do zero, com mensagem própria e visual
            pensado pro objetivo do cliente.
          </p>
        </div>

        <div className="portfolio-grid reveal">
          {CASES.map((c, i) => (
            <article key={i} className="portfolio-card">
              <div className={`portfolio-visual portfolio-v-${c.variant}`}>
                <span className="portfolio-mockup">
                  <span className="b s" />
                  <span className="b m" />
                  <span className="b l" />
                  <span className="accent" />
                </span>
                <span className="portfolio-badge">{c.category}</span>
              </div>
              <div className="portfolio-body">
                <div className="portfolio-name">{c.name}</div>
                <div className="portfolio-tagline">{c.tagline}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
