import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES, WHATSAPP_URL } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Serviço não encontrado — PWlabs" };
  return {
    title: `${service.title} — PWlabs`,
    description: service.description,
  };
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="service-page">
          <div className="container-page service-inner">
            <div className="section-header-center">
              <span className="eyebrow">Serviço · {service.num}</span>
              <h2 className="section-title">{service.title}</h2>
              <p className="section-intro">{service.description}</p>
            </div>

            <div className="article-body" style={{ marginTop: 32 }}>
              <p>{service.longDescription}</p>

              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 24,
                  fontWeight: 500,
                  color: "var(--cream)",
                  marginTop: 32,
                  marginBottom: 16,
                }}
              >
                Quando faz sentido pra você
              </h2>

              <ul className="service-when-list">
                {service.whenMakesSense.map((reason, i) => (
                  <li key={i} className="service-when-item">
                    <span className="hero-check-icon" style={{ background: "rgba(37, 211, 102, 0.18)" }}>
                      <svg viewBox="0 0 12 12" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, position: "relative", zIndex: 1 }}>
                        <path d="M2 6l3 3 5-6" />
                      </svg>
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="article-cta">
              <h3 className="article-cta-title">Faz sentido pra você?</h3>
              <p className="article-cta-text">
                Manda mensagem que a gente troca uma ideia sem compromisso. Resposta no mesmo dia.
              </p>
              <a href={WHATSAPP_URL} className="btn-primary" target="_blank" rel="noreferrer">
                Chamar no WhatsApp
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
      </main>
      <Footer />
    </>
  );
}