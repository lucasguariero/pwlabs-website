# 🌐 Plano de Infraestrutura de Domínios e DNS — PWLabs

Para implementar a arquitetura de alta performance sugerida (separação de app/marketing, blindagem de reputação de e-mails e indexação dinâmica), siga esta configuração de DNS e domínios quando for adquirir o domínio oficial da **PWLabs**.

---

## 1. Estrutura de Subdomínios (Divisão App vs. Marketing)

O domínio principal deve ser limpo e focado no site institucional (landing pages de conversão), enquanto qualquer aplicação interna ou dashboard futuro deve rodar em subdomínio isolado.

| Serviço | Domínio Recomendado | Destino (Hospedagem) |
| :--- | :--- | :--- |
| **Site Institucional / LPs** | `pwlabs.co` (ou `pwlabs.com.br`) | Vercel (Next.js App Router) |
| **Plataforma / App Interno** | `app.pwlabs.co` | Plataforma de App (Vercel/Heroku/Supabase) |
| **API do Produto** | `api.pwlabs.co` | Servidor de Backend / Serverless |

### 🛠️ Configuração no seu Provedor de DNS (ex: Cloudflare):
* **Registro A / CNAME** no root (`@` ou `pwlabs.co`) apontando para os servidores da Vercel (`cname.vercel-dns.com`).
* **Registro CNAME** no `app` apontando para o servidor/serviço da sua aplicação.

---

## 2. Blindagem de Reputação de E-mails (DKIM / SPF / DMARC)

Nunca envie e-mails frios (cold mails), newsletters ou marketing direto pelo domínio `pwlabs.co`. Se o seu domínio principal for sinalizado como spam, e-mails essenciais (como propostas de clientes ou redefinições de senha) também serão bloqueados.

### A. Domínios Recomendados para Aquisição:
1. **Domínio Principal (Apenas institucional/transacional):** `pwlabs.co`
2. **Domínio de Vendas / Prospecção 1:** `getpwlabs.co` (ou `pwlabs.cc`)
3. **Domínio de Vendas / Prospecção 2:** `pwlabshq.co` (ou `pwlabs.net`)

### B. Configuração dos Registros de Segurança no DNS:
Para cada domínio que disparar e-mails, configure as chaves na sua zona de DNS do Cloudflare:

#### 1. SPF (Sender Policy Framework)
Autoriza quais servidores podem enviar e-mails em seu nome (ex: Google Workspace e Resend).
* **Tipo:** `TXT`
* **Nome:** `@`
* **Valor:** `v=spf1 include:_spf.google.com include:sendgrid.net include:amazonses.com ~all` *(ajuste conforme as ferramentas ativas)*

#### 2. DKIM (DomainKeys Identified Mail)
Assinatura criptográfica que valida que o e-mail não foi alterado no caminho.
* O provedor de e-mail (Resend, Google Workspace) fornecerá 3 registros do tipo **CNAME** ou **TXT** com chaves exclusivas para você colar no DNS.

#### 3. DMARC (Domain-based Message Authentication, Reporting, and Conformance)
Informa aos provedores de e-mail (Gmail, Outlook) o que fazer com mensagens que falharem no SPF/DKIM.
* **Tipo:** `TXT`
* **Nome:** `_dmarc`
* **Valor:** `v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@pwlabs.co`
  * *Explicação:* `p=quarantine` instrui o Gmail/Outlook a mandar para o spam e-mails falsificados fingindo ser da PWLabs. `pct=100` aplica a regra a 100% dos e-mails.

---

## 3. Configuração de Indexação Dinâmica (Next.js)

O `sitemap.xml` da PWLabs foi preparado para carregar de forma dinâmica. Quando o domínio oficial for configurado, a URL base será lida de forma dinâmica via variável de ambiente, garantindo que o Google indexe o domínio definitivo sem necessidade de alterar código.
