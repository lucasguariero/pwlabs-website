import { WHATSAPP_URL } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Recebemos seu pedido — PWlabs",
  description: "A gente viu seu pedido e vai responder no mesmo dia.",
};

export default function ObrigadoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="thanks-page">
          <div className="container-page thanks-inner">
            <span className="eyebrow">Pedido recebido</span>
            <h1 className="thanks-title">
              Recebemos seu pedido.
            </h1>
            <p className="thanks-sub">
              A gente viu sua mensagem e vai te responder no mesmo dia com uma primeira leitura do projeto e os próximos passos. Se quiser adiantar alguma coisa, manda no WhatsApp.
            </p>
            <div className="thanks-actions">
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
              <a href="/" className="btn-ghost">Voltar pra home</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}