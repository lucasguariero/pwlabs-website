import { FAQ_ITEMS } from "@/lib/data";

export function Faq() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="section-header-center">
          <span className="eyebrow">Dúvidas comuns</span>
          <h2 className="section-title">
            Perguntas <strong>frequentes.</strong>
          </h2>
        </div>

        <div className="faq reveal">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.question}</summary>
              <div className="faq-content">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
