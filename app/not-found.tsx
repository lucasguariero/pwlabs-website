import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Página não encontrada — PWlabs",
  description: "Desculpe, a página que você está procurando não existe.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="thanks-page">
          <div className="container-page thanks-inner">
            <span className="eyebrow" style={{ color: "var(--pink)" }}>Erro 404</span>
            <h1 className="thanks-title">
              Página não encontrada.
            </h1>
            <p className="thanks-sub">
              Desculpe, o link que você tentou acessar não existe ou foi removido. Você pode retornar para a página inicial ou nos chamar diretamente no WhatsApp para tirar dúvidas.
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
              <Link href="/" className="btn-ghost">Voltar para a Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}