import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Política de privacidade — PWlabs",
  description: "Como a PWlabs coleta, usa e protege seus dados.",
};

export default function PoliticaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="legal-page">
          <div className="container-page legal-content">
            <h1>Política de privacidade</h1>
            <div className="legal-meta">Última atualização: 11 de agosto de 2026</div>

            <p>
              Esta política descreve como a PWlabs coleta, usa e protege as informações pessoais que você compartilha conosco ao usar nossos serviços ou entrar em contato via formulário ou WhatsApp.
            </p>

            <h2>1. Dados que coletamos</h2>
            <p>
              Ao preencher nosso formulário de orçamento, coletamos: nome, e-mail e a mensagem livre que você envia. Se você optar por falar pelo WhatsApp, coletamos apenas o número de telefone e o conteúdo da conversa.
            </p>

            <h2>2. Pra que usamos esses dados</h2>
            <p>
              Usamos seus dados exclusivamente pra responder seu pedido, entender seu projeto e, se você concordar, enviar comunicações comerciais sobre a PWlabs. Nunca vendemos seus dados.
            </p>

            <h2>3. Compartilhamento</h2>
            <p>
              Não compartilhamos seus dados com terceiros. Eventualmente usamos ferramentas de terceiros (e-mail marketing, CRM) só pra operar o nosso serviço — e essas ferramentas também estão obrigadas a proteger seus dados.
            </p>

            <h2>4. Seus direitos (LGPD)</h2>
            <p>
              Você pode a qualquer momento pedir acesso, correção ou exclusão dos seus dados. Pra exercer esses direitos, é só mandar um e-mail pra contato@pwlabs.com.br.
            </p>

            <h2>5. Prazo de retenção</h2>
            <p>
              Mantemos seus dados pelo tempo necessário pra responder seu pedido e cumprir obrigações legais. Depois, deletamos.
            </p>

            <h2>6. Contato</h2>
            <p>
              Dúvidas sobre privacidade? Fala com a gente em contato@pwlabs.com.br ou pelo WhatsApp.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}