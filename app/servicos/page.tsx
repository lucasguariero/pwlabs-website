import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "Serviços — PWlabs",
  description: "Todas as frentes de atuação da PWlabs, com descrição de quando cada uma faz sentido.",
};

export default function ServicosListPage() {
  return (
    <>
      <Header />
      <main>
        <section className="services-list-page">
          <div className="container-page">
            <div className="section-header-center">
              <span className="eyebrow">Serviços</span>
              <h2 className="section-title">
                Oito frentes, <strong>uma assinatura.</strong>
              </h2>
              <p className="section-intro">
                Cada serviço pensado pra resolver um problema específico. Escolhe o que precisa — ou combina mais de um.
              </p>
            </div>

            <div className="services-list-grid">
              {SERVICES.map((service) => (
                <a key={service.slug} href={`/servicos/${service.slug}`} className="service-list-card">
                  <span className="num">{service.num}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="blog-link">
                    Ver detalhes
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12h15" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}