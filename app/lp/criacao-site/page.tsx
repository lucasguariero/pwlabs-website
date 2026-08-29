import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Criação de Site Profissional — PWlabs",
  description: "Site profissional em 15 dias. Design exclusivo, copy estratégico e performance premium.",
};

export default function LPCriacaoSite() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '80px', background: '#0f172a', color: 'white' }}>
          <div className="container-page">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow" style={{ color: '#38bdf8' }}>Criação de Site</span>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px' }}>
                Seu negócio no ar em <span style={{ color: '#38bdf8' }}>15 dias</span>
              </h1>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Site profissional com design exclusivo, copy que vende e performance premium. Já pensou em ter seu site no topo do Google?
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <a href={WHATSAPP_URL} className="btn" style={{ background: '#38bdf8', color: '#0f172a', padding: '16px 32px', fontWeight: '600' }}>
                  Quero meu site
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '40px 0', background: '#f9fafb' }}>
          <div className="container-page">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
              {[
                { num: "500+", label: "Projetos" },
                { num: "15", label: "Dias" },
                { num: "98", label: "Score" },
                { num: "<1s", label: "Carregamento" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a' }}>{item.num}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section style={{ padding: '80px 0' }}>
          <div className="container-page">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700' }}>Como funciona</h2>
              <p style={{ color: '#6b7280', marginTop: '8px' }}>4 etapas simples em 15 dias</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { num: "1", title: "Ligação", desc: "20 min para entender seu negócio" },
                { num: "2", title: "Briefing", desc: "Estrutura e texto aprovados" },
                { num: "3", title: "Desenvolvimento", desc: "Página em ambiente de teste" },
                { num: "4", title: "Entrega", desc: "No ar, configurado" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '32px 24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#0f172a', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 'bold' }}>{item.num}</div>
                  <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que inclui */}
        <section style={{ padding: '80px 0', background: '#f9fafb' }}>
          <div className="container-page">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700' }}>O que está incluído</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                "Design exclusivo", "Copywriting estratégico", "Responsivo (mobile)",
                "SEO técnico", "Velocidade premium", "Domínio configurado",
                "Google Search Console", "Botão WhatsApp", "1 ano de hospedagem"
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '16px 20px', borderRadius: '8px' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: '#0f172a', color: 'white', textAlign: 'center' }}>
          <div className="container-page">
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '16px' }}>
              Seu site profissional espera
            </h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', fontSize: '1.125rem' }}>
              Entrega em 15 dias. Sem dor de cabeça.
            </p>
            <a
              href={WHATSAPP_URL}
              className="btn"
              style={{ background: '#38bdf8', color: '#0f172a', padding: '18px 40px', fontSize: '1.125rem', fontWeight: '600' }}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "click_whatsapp", {
                    event_category: "whatsapp",
                    event_label: "lp_criacao_site",
                  });
                }
              }}
            >
              Pedir orçamento
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
