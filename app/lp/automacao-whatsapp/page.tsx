import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Automação WhatsApp Business — PWlabs",
  description: "Chatbot para WhatsApp que trabalha 24/7. Atende, qualifica e vende por você.",
};

export default function LPAutomacaoWhatsApp() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)', color: 'white' }}>
          <div className="container-page">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow" style={{ color: '#6ee7b7' }}>Automação WhatsApp</span>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px' }}>
                Seu WhatsApp trabalhando <span style={{ color: '#6ee7b7' }}>enquanto você dorme</span>
              </h1>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Chatbot inteligente que atende 24/7, qualifica leads e agenda consultas automaticamente.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <a
                  href={WHATSAPP_URL}
                  className="btn"
                  style={{ background: 'white', color: '#065f46', padding: '16px 32px', fontWeight: '600' }}
                >
                  Quero automatizar agora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problema */}
        <section style={{ padding: '80px 0' }}>
          <div className="container-page">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700' }}>Você está perdendo clientes?</h2>
              <p style={{ color: '#6b7280', marginTop: '12px', fontSize: '1.1rem' }}>A maioria dos negócios perde até 70% dos leads por falta de atendimento</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { prob: "🔴", title: "Fora do ar", desc: "Não atende à noite e nos fins de semana" },
                { prob: "🔴", title: "Lento", desc: "Demora pra responder e lead vai embora" },
                { prob: "🔴", title: "Repetitivo", desc: "Mesmas perguntas, mesmas respostas, todo dia" },
              ].map((item, i) => (
                <div key={i} style={{ padding: '24px', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.prob}</div>
                  <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solução */}
        <section style={{ padding: '80px 0', background: '#ecfdf5' }}>
          <div className="container-page">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#065f46' }}>A solução: WhatsApp Automatizado</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { title: "Atende 24/7", desc: "Nunca mais perde um lead por falta de atendimento", icon: "🕐" },
                { title: "Respostas Imediatas", desc: "Instante, nem 1 minuto de espera", icon: "⚡" },
                { title: "Qualifica Automaticamente", desc: "Pergunta o que precisa e te passa só lead quente", icon: "🎯" },
                { title: "Agenda Consultas", desc: "Marca horário direto no calendário", icon: "📅" },
                { title: "Nutre Clientes", desc: "Sequências de mensagens automáticas", icon: "📤" },
                { title: "Integra com CRM", desc: "Pipedrive, HubSpot, etc", icon: "🔗" },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: '600', marginBottom: '8px', color: '#065f46' }}>{item.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preço */}
        <section style={{ padding: '80px 0' }}>
          <div className="container-page">
            <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '16px' }}>Investimento</h2>
              <div style={{ background: '#065f46', color: 'white', padding: '40px', borderRadius: '16px' }}>
                <p style={{ opacity: 0.8, marginBottom: '8px' }}>Setup + Mensalidade</p>
                <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '16px' }}>
                  R$ 2.497<span style={{ fontSize: '1rem', fontWeight: '400' }}>/único</span>
                </div>
                <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Não precisa pagar mensalidade</p>
              </div>
              <ul style={{ textAlign: 'left', marginTop: '24px', listStyle: 'none', padding: 0 }}>
                {["Chatbot completo", "Fluxo de qualificação", "Integração CRM", "Suporte por 30 dias"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: '#065f46', color: 'white', textAlign: 'center' }}>
          <div className="container-page">
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '16px' }}>
              Automatize agora
            </h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', fontSize: '1.125rem' }}>
             红ples passos: a gente configura e seu WhatsApp já trabalha sozinho
            </p>
            <a
              href={WHATSAPP_URL}
              className="btn"
              style={{ background: '#6ee7b7', color: '#065f46', padding: '18px 40px', fontSize: '1.125rem', fontWeight: '600' }}
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
