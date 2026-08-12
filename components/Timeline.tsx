import { TIMELINE_STEPS } from "@/lib/data";

export function Timeline() {
  return (
    <section id="processo" className="section">
      <div className="container-page">
        <div className="section-header-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section-title">
            Quinze dias, quatro etapas,<br /><strong>zero surpresa.</strong>
          </h2>
          <p className="section-intro" style={{ maxWidth: "none" }}>
            Você acompanha cada etapa, sabe o que esperar em cada dia, e aprova antes de seguir pro próximo passo.
          </p>
        </div>

        <div className="timeline-grid reveal">
          {TIMELINE_STEPS.map((step) => (
            <article key={step.num} className="timeline-card">
              <span className="dot-marker" />
              <span className="when">{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
