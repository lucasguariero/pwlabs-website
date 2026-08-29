import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Tráfego Pago que Vende — PWlabs",
  description: "Campanhas no Google e Meta Ads que trazem resultados reais. Comece a vender mais hoje.",
};

export default function LPTráfegoPago() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', color: 'white' }}>
          <div className="container-page">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow" style={{ color: '#fbbf24' }}>Tráfego Pago</span>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px' }}>
                Anúncios que <span style={{ color: '#fbbf24' }}>trazem clientes</span>, não só cliques
              </h1>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Campanhas estratégias no Google e Meta Ads. Você só paga pelos resultados que importam.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <a
                  href={WHATSAPP_URL}
                  className="btn"
                  style={{ background: '#fbbf24', color: '#1e1b4b', padding: '16px 32px', fontWeight: '600' }}
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "click_whatsapp", {
                        event_category: "whatsapp",
                        event_label: "lp_trafego_pago",
                      });
                    }
                  }}
                >
                  Quero resultados
                </a>
              </div>
              <p style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '16px' }}>
                Já entregamos +R$ 2M em vendas para nossos clientes
              </p>
            </div>
          </div>
        </section>

        {/* Problema */}
        <section style={{ padding: '80px 0' }}>
          <div className="container-page">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700' }}>Por que seus anúncios não vendem?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ padding: '24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>💸</div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Gasta sem retorno</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Coloca dinheiro no anúncio mas o lead não vira venda</p>
              </div>
              <div style={{ padding: '24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Público errado</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Anúncio aparece pra quem não tem interesse</p>
              </div>
              <div style={{ padding: '24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📝</div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Copy fraco</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Texto não convence a pessoa a clicar</p>
              </div>
            </div>
          </div>
        </section>

        {/* O que fazemos */}
        <section style={{ padding: '80px 0', background: '#f9fafb' }}>
          <div className="container-page">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700' }}>O que a gente faz diferente</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { title: "Pesquisa de Público", desc: "Segmentação baseada em dados reais do seu cliente ideal", icon: "🎯" },
                { title: "Copy que Vende", desc: "Textos testados para converter visitantes em clientes", icon: "✍️" },
                { title: "Criativos de Alto Impacto", desc: "Design que prende atenção e gera cliques", icon: "🎨" },
                { title: "Landing Otimizada", desc: "Página alinhada com o anúncio para maximizar conversão", icon: "📱" },
                { title: "Gestão Diária", desc: "Acompanhamento constante e ajustes em tempo real", icon: "⚡" },
                { title: "Relatório Claro", desc: "Você entende exatamente onde seu dinheiro está indo", icon: "📊" },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section style={{ padding: '80px 0' }}>
          <div className="container-page">
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '24px' }}>Por que a PWlabs?</h2>
              <div style={{ textAlign: 'left' }}>
                {[
                  "7+ anos criando sites que convertem",
                  "500+ projetos entregues",
                  "团队 brasileiro com experiência internacional",
                  "Atendimento direto, sem terceirização",
                  "Pagamento só após resultado"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.1rem' }}>
                    <span style={{ color: '#10b981' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: '#1e1b4b', color: 'white', textAlign: 'center' }}>
          <div className="container-page">
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '16px' }}>
              Pronto para vender mais?
            </h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', fontSize: '1.125rem' }}>
              Agende uma ligação de 20 minutos. Sem compromisso.
            </p>
            <a
              href={WHATSAPP_URL}
              className="btn"
              style={{ background: '#fbbf24', color: '#1e1b4b', padding: '18px 40px', fontSize: '1.125rem', fontWeight: '600' }}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "click_whatsapp", {
                    event_category: "whatsapp",
                    event_label: "lp_trafego_pago",
                  });
                }
              }}
            >
              Falar com especialista
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
