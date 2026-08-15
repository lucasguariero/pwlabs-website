import { DETAIL_BLOCKS } from "@/lib/data";

export function DetailBlocks() {
  return (
    <>
      {DETAIL_BLOCKS.map((block, i) => (
        <section key={i} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="container-page">
            <div className={`detail-block ${block.reversed ? "reverse" : ""}`}>
              <div className="detail-content">
                <span className="eyebrow">{block.eyebrow}</span>
                <h2 className="section-title">
                  {block.title.split(block.bold).map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && <strong>{block.bold}</strong>}
                    </span>
                  ))}
                </h2>
                <p className="section-intro">{block.description}</p>
                <ul className="detail-bullets">
                  {block.bullets.map((b, k) => (
                    <li key={k} className="detail-bullet">
                      <span className="check">
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 6l3 3 5-6" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`detail-visual ${block.eyebrow === "Tráfego pago" || block.eyebrow === "Criação de sites" || block.eyebrow === "SEO orgânico" ? "has-image" : ""}`}>
                {block.eyebrow === "Tráfego pago" ? (
                  <img
                    src="/assets/sections/section-1.svg"
                    alt="Tráfego pago"
                    className="detail-section-image"
                    loading="lazy"
                  />
                ) : block.eyebrow === "Criação de sites" ? (
                  <img
                    src="/assets/sections/section-2.svg"
                    alt="Criação de sites"
                    className="detail-section-image"
                    loading="lazy"
                  />
                ) : block.eyebrow === "SEO orgânico" ? (
                  <img
                    src="/assets/sections/section-3.svg"
                    alt="SEO orgânico"
                    className="detail-section-image"
                    loading="lazy"
                  />
                ) : (
                  <svg
                    className="detail-visual-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
