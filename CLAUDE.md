# PW Labs Website

Site institucional da PW Labs (Pixel Wave Labs).

## Contexto & Diretrizes PWLabs

### 1. Sobre a PWLabs
- Ecossistema/marca para projetos de tecnologia, design de produtos digitais (UI/UX) e soluções web.
- Foco em criar produtos digitais eficientes, escaláveis e com forte apelo em experiência do usuário (UX), da ideação até a estruturação e desenvolvimento.

### 2. Stack de Ferramentas e Ecossistema
- **Design & Prototipagem:** Stitch (ferramenta principal para telas, componentes e fluxos).
- **IA e Desenvolvimento:** Claude e Antigravity (suporte técnico, arquitetura e automações).
- **Organização & Notas:** Obsidian (base de conhecimento, documentação de projetos e gestão de ideias).

### 3. Diretrizes de Design e Comportamento
- Foco em UX/UI limpa, acessível e orientada a dados/conversão.
- Padrões de design modernos (componentização estruturada, design systems consistentes no Stitch).
- Linguagem de comunicação técnica, direta e focada na resolução de problemas de produto.
- Em problemas de tela, fluxo ou arquitetura, realizar análise crítica da experiência do usuário, hierarquia visual e propor melhorias estruturais profissionais.

### 4. Fluxo de Trabalho Oficial
- **Descoberta & Alinhamento:** Entender o problema de negócio e mapear dores.
- **Arquitetura de Informação & UX:** Fluxos de telas, jornadas e wireframes.
- **UI Design & Prototipagem (Stitch):** Criação de telas e prototipagem interativa.
- **Tradução para Código / Execução:** Implementação técnica limpa do design no front-end.
- **Regra de Geração de Prompts (Economia de Tokens):** Sempre que o usuário pedir para criar prompts ou instruções para o Claude ("cole o prompt pro Claude"), registre/atualize APENAS o arquivo `.md` em `C:\Users\lguar\projetos\arquivos-iphone` e PARAR. Não codifique ou execute builds/deploys, pois o usuário usa outro Claude sem cobrança de tokens para executar a codificação.

### 5. Diretriz de Criação de Carrosséis para Instagram
Sempre que solicitado a criar um carrossel para redes sociais, siga rigorosamente esta estrutura de conversão e retenção:
- **Slide 1 — Gancho (Capa):** Uma única frase de impacto que gere tensão ou curiosidade imediata (ex: *"O erro que faz com que [problema] em [contexto] é..."* ou *"Ninguém te conta isso sobre [assunto]"*).
- **Slide 2 — Problema:** Apresentação da dor com extrema especificidade, gerando identificação instantânea.
- **Slides 3 a 5 — Desenvolvimento / Solução:** Nova perspectiva, quebra de crença ou insight acionável de nível profissional. Sem conselhos genéricos ou rasos.
- **Comportamento Geral:** Mesclar a autoridade técnica em engenharia/UX da PWLabs com a psicologia de conversão desse formato.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

## Estrutura

```
app/
├── page.tsx           # Home
├── layout.tsx         # Layout principal
├── globals.css        # Estilos globais
├── servicos/          # Página de serviços
│   └── [slug]/       # Páginas dinâmicas de serviço
├── blog/              # Blog
│   └── [slug]/       # Posts do blog
├── obrigado/          # Página de obrigado
├── politica-de-privacidade/  # Política
└── notes/            # Notas
```

## Componentes

Localizados em `components/`:
- Header, Hero, Stats, Services
- MockupsMarquee, Portfolio, Timeline
- DetailBlocks, Testimonials, Faq
- Blog, FinalCta, Footer

## Commands

```bash
npm run dev      # Dev server
npm run build    # Production build
npm run start    # Production server
```

## Deploy

- Vercel (automatico via GitHub)
- URL: pwlabs.com (configurar)
