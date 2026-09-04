export interface TemplateItem {
  id: string;
  title: string;
  category: "paginas" | "hero" | "features" | "pricing" | "depoimentos" | "faq" | "cta" | "botoes";
  categoryLabel: string;
  isPro: boolean;
  description: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  codeReact: string;
  elementorJson: object;
}

export const TEMPLATE_CATEGORIES = [
  { id: "todos", label: "Todos os Recursos", count: 19 },
  { id: "paginas", label: "Páginas Prontas", count: 3 },
  { id: "hero", label: "Seções Hero", count: 3 },
  { id: "features", label: "Recursos & Bento", count: 3 },
  { id: "pricing", label: "Tabelas de Preços", count: 2 },
  { id: "depoimentos", label: "Social Proof", count: 2 },
  { id: "faq", label: "Acordeons FAQ", count: 1 },
  { id: "cta", label: "Chamadas (CTA)", count: 2 },
  { id: "botoes", label: "Botões & CSS", count: 3 },
] as const;

export const TEMPLATES_DATA: TemplateItem[] = [
  // 1. HERO DARK BENTO GRID
  {
    id: "hero-dark-bento",
    title: "Hero Dark Bento Grid — Developer & Tech",
    category: "hero",
    categoryLabel: "Seção Hero",
    isPro: false,
    description: "Header de alto impacto com headline tipográfica pesada, badge de status pulsante e bento cards com métricas de velocidade.",
    tags: ["Hero", "Bento Grid", "Next.js", "Dark Mode"],
    gradient: "from-[#FF0570]/20 via-[#161619] to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `export function HeroDarkBento() {
  return (
    <section className="relative bg-[#0C0C0F] text-[#F4EFE6] py-24 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF0570]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8A857C]">
          <span className="w-2 h-2 rounded-full bg-[#FF0570] animate-ping" />
          PWLabs Component Hub v1.0
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05]">
          Sites profissionais, <span className="text-[#FF0570]">sem começar do zero</span>.
        </h1>
        <p className="text-base md:text-lg text-[#8A857C] max-w-xl mx-auto">
          Biblioteca modular de seções e páginas em Next.js e Tailwind. Copie e cole em segundos.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button className="px-6 py-3.5 bg-[#F4EFE6] text-[#0C0C0F] font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all">
            Explorar Catálogo
          </button>
          <button className="px-6 py-3.5 bg-transparent border border-white/10 text-[#F4EFE6] font-bold text-xs uppercase tracking-wider rounded-xl hover:border-white/30 transition-all">
            Ver Documentação
          </button>
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: {
      version: "0.4",
      title: "PWLabs Hero Dark Bento",
      type: "section",
      content: [
        {
          id: "pw_hero_1",
          elType: "section",
          settings: {
            layout: "boxed",
            background_background: "classic",
            background_color: "#0C0C0F",
            padding: { unit: "px", top: "100", bottom: "100", isLinked: false }
          },
          elements: []
        }
      ]
    }
  },

  // 2. HERO STATEMENT TYPOGRAPHIC
  {
    id: "hero-statement",
    title: "Hero Statement — Tipografia Gigante",
    category: "hero",
    categoryLabel: "Seção Hero",
    isPro: false,
    description: "Layout editorial com tipografia display massiva, espaçamento comprimido e contraste extremo no estilo Linear/Apple.",
    tags: ["Hero", "Editorial", "Minimal", "High Contrast"],
    gradient: "from-zinc-800/40 via-zinc-900 to-[#0C0C0F]",
    accentColor: "#F4EFE6",
    codeReact: `export function HeroStatement() {
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-32 px-6 border-b border-white/5">
      <div className="max-w-5xl mx-auto space-y-8">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#8A857C]">Manifesto / 2026</p>
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] text-[#F4EFE6]">
          A maioria das agências foca em estética.<br />
          <span className="text-[#FF0570]">Nós focamos em faturamento.</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-6 border-t border-white/10">
          <p className="text-sm text-[#8A857C] max-w-md">
            Páginas com carregamento sub-segundo e copy validada para transformar cliques de tráfego pago em vendas reais.
          </p>
          <a href="#contato" className="px-7 py-3.5 bg-[#FF0570] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:opacity-90">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: {
      version: "0.4",
      title: "Hero Statement Typographic",
      type: "section",
      content: []
    }
  },

  // 3. HERO 3D FLOATING MOCKUP (PRO)
  {
    id: "hero-3d-mockup",
    title: "Hero 3D Floating Canvas — Tech SaaS",
    category: "hero",
    categoryLabel: "Seção Hero",
    isPro: true,
    description: "Hero com card translúcido de vidro flutuando, reflexos de luz volumétrica e métricas dinâmicas em tempo real.",
    tags: ["PRO", "Hero", "3D Canvas", "Glassmorphism"],
    gradient: "from-[#FF0570]/30 via-purple-900/30 to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `export function Hero3DFloatingMockup() {
  return (
    <section className="relative bg-[#0C0C0F] text-[#F4EFE6] py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="px-3 py-1 bg-[#FF0570]/15 text-[#FF0570] text-xs font-extrabold rounded-full uppercase tracking-wider">
            Exclusivo PRO
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none">
            Engenharia digital para marcas que lideram.
          </h1>
          <p className="text-base text-[#8A857C] max-w-lg">
            Combinamos arquitetura Next.js com design systems componentizados no Stitch para entregas em até 15 dias.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-white/10 to-transparent border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-28 bg-[#0C0C0F]/80 rounded-xl border border-white/5 p-4 flex items-center justify-between">
              <span className="text-sm font-bold">Lighthouse Score</span>
              <span className="text-3xl font-extrabold font-mono text-emerald-400">99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: {
      version: "0.4",
      title: "Hero 3D Floating Mockup",
      type: "section",
      content: []
    }
  },

  // 4. BENTO GRID 4-CARDS
  {
    id: "bento-grid-cards",
    title: "Bento Grid 4-Cards — Diferenciais de Produto",
    category: "features",
    categoryLabel: "Recursos & Bento",
    isPro: false,
    description: "Grid modular assimétrico de 4 cards com cantos arredondados, bordas de 1px translúcidas e badges de métricas.",
    tags: ["Bento Grid", "Features", "Dark Mode", "Grid"],
    gradient: "from-blue-900/20 via-[#111116] to-[#0C0C0F]",
    accentColor: "#38BDF8",
    codeReact: `export function BentoGridCards() {
  const items = [
    { title: "Desempenho Sub-segundo", desc: "98+ no PageSpeed com carregamento instantâneo.", stat: "0.4s", col: "col-span-1 md:col-span-2" },
    { title: "Design no Stitch", desc: "Componentes desenhados antes da primeira linha de código.", stat: "100%", col: "col-span-1" },
    { title: "Entrega em 15 Dias", desc: "Processo ágil sem retrabalho ou reuniões inúteis.", stat: "15d", col: "col-span-1" },
    { title: "Pronto para Tráfego Pago", desc: "UTMs e pixels de conversão já integrados na raiz.", stat: "Meta/Google", col: "col-span-1 md:col-span-2" },
  ];
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight">Arquitetura de Alta Performance</h2>
          <p className="text-sm text-[#8A857C]">Construído com os padrões mais avançados de UX e engenharia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className={\`\${it.col} bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all\`}>
              <span className="text-2xl font-extrabold font-mono text-[#FF0570]">\${it.stat}</span>
              <h3 className="text-lg font-bold text-[#F4EFE6]">\${it.title}</h3>
              <p className="text-xs text-[#8A857C] leading-relaxed">\${it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Bento Grid 4 Cards", type: "section", content: [] }
  },

  // 5. FEATURE LIST MINIMAL
  {
    id: "feature-list-minimal",
    title: "Feature List Minimalista com Divisórias Finas",
    category: "features",
    categoryLabel: "Recursos & Bento",
    isPro: false,
    description: "Lista de benefícios sem ícones genéricos ou emojis. Utiliza divisórias finas e numeração elegante no estilo Karine Sackt.",
    tags: ["List", "Minimal", "Typography", "Clean"],
    gradient: "from-zinc-900 via-[#111116] to-[#0C0C0F]",
    accentColor: "#F4EFE6",
    codeReact: `export function FeatureListMinimal() {
  const steps = [
    { num: "01", title: "Alinhamento de Hipóteses", desc: "Mapeamos exatamente qual dor o seu cliente quer resolver em 20 minutos de ligação." },
    { num: "02", title: "Design System no Stitch", desc: "Criamos a identidade visual completa e aprovamos o protótipo navegável." },
    { num: "03", title: "Codificação no Next.js", desc: "Sem templates lentos do WordPress. Código limpo, componentizado e veloz." },
    { num: "04", title: "Deploy e Conversão", desc: "Configuração de domínio, SSL, Core Web Vitals e rastreamento de anúncios." },
  ];
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">O Processo Passo a Passo</h2>
        <div className="divide-y divide-white/10">
          {steps.map((st, i) => (
            <div key={i} className="py-6 flex flex-col md:flex-row gap-4 items-start justify-between">
              <span className="font-mono text-sm font-bold text-[#FF0570]">\${st.num} /</span>
              <div className="flex-1 md:pl-6 space-y-1">
                <h3 className="text-base font-bold text-[#F4EFE6]">\${st.title}</h3>
                <p className="text-xs text-[#8A857C]">\${st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Feature List Minimal", type: "section", content: [] }
  },

  // 6. TIMELINE PROCESSO 4 ETAPAS (PRO)
  {
    id: "timeline-processo-pro",
    title: "Timeline Interativa com Status Dinâmico",
    category: "features",
    categoryLabel: "Recursos & Bento",
    isPro: true,
    description: "Linha do tempo vertical com indicadores luminosos, badges de prazo e descrição expandível.",
    tags: ["PRO", "Timeline", "Processo", "Interativo"],
    gradient: "from-purple-950/30 via-[#111116] to-[#0C0C0F]",
    accentColor: "#A855F7",
    codeReact: `export function TimelineProcessoPro() {
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#FF0570] uppercase tracking-widest font-bold">Cronograma</span>
          <h2 className="text-3xl font-extrabold uppercase">Entrega Garantida em 15 Dias</h2>
        </div>
        <div className="relative border-l border-white/15 pl-6 space-y-10">
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#FF0570] ring-4 ring-[#0C0C0F]" />
            <h3 className="text-base font-bold">Dia 01-03: Arquitetura & Copy</h3>
            <p className="text-xs text-[#8A857C] mt-1">Estruturação de títulos e objeções do público-alvo.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-[#0C0C0F]" />
            <h3 className="text-base font-bold">Dia 04-09: Design no Stitch</h3>
            <p className="text-xs text-[#8A857C] mt-1">Desenho de cada seção e validação mobile.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-[#0C0C0F]" />
            <h3 className="text-base font-bold">Dia 10-15: Código & Publicação</h3>
            <p className="text-xs text-[#8A857C] mt-1">Deploy na Vercel e entrega das chaves do projeto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Timeline Processo", type: "section", content: [] }
  },

  // 7. TABELA DE PREÇOS 3 PLANOS
  {
    id: "pricing-3-planos",
    title: "Tabela de Preços 3 Planos — SaaS & Serviços",
    category: "pricing",
    categoryLabel: "Tabelas de Preços",
    isPro: false,
    description: "Grid de preços moderno com destaque central para o plano mais vendido, badges de economia e botão de conversão.",
    tags: ["Pricing", "Planos", "SaaS", "Checkout"],
    gradient: "from-[#161619] via-[#111116] to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `export function Pricing3Planos() {
  const plans = [
    { name: "Landing Page", price: "R$ 2.490", desc: "Ideal para tráfego pago e campanhas diretas.", featured: false, btn: "Contratar LP" },
    { name: "Site Institucional", price: "R$ 4.990", desc: "Presença digital completa para sua empresa.", featured: true, btn: "Mais Escolhido" },
    { name: "Plataforma Custom", price: "Sob Consulta", desc: "Sistemas web e áreas de membros exclusivas.", featured: false, btn: "Falar com Time" },
  ];
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold uppercase">Planos & Investimento</h2>
          <p className="text-sm text-[#8A857C]">Sem mensalidades ocultas. Pagamento único pelo projeto pronto.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((p, i) => (
            <div key={i} className={\`rounded-2xl p-6 space-y-6 \${p.featured ? "bg-[#16161c] border-2 border-[#FF0570] shadow-2xl relative" : "bg-[#111116] border border-white/10"}\`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF0570] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase">
                  Recomendado
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <div className="text-3xl font-extrabold font-mono text-[#F4EFE6]">{p.price}</div>
              <p className="text-xs text-[#8A857C]">{p.desc}</p>
              <button className={\`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all \${p.featured ? "bg-[#FF0570] text-white hover:bg-[#ff2080]" : "bg-white/10 text-white hover:bg-white/20"}\`}>
                {p.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Pricing 3 Planos", type: "section", content: [] }
  },

  // 8. CARD DE OFERTA COM ESCASSEZ (PRO)
  {
    id: "pricing-card-escassez",
    title: "Card de Oferta com Cronômetro & Escassez",
    category: "pricing",
    categoryLabel: "Tabelas de Preços",
    isPro: true,
    description: "Componente de checkout focado em quebra de objeções, vagas restantes na semana e garantia de 7 dias.",
    tags: ["PRO", "Escassez", "Conversão", "Oferta"],
    gradient: "from-emerald-950/30 via-[#111116] to-[#0C0C0F]",
    accentColor: "#10B981",
    codeReact: `export function PricingCardEscassez() {
  return (
    <div className="max-w-md mx-auto bg-[#111116] border border-emerald-500/30 rounded-2xl p-6 text-center space-y-5 shadow-2xl">
      <span className="bg-emerald-500/15 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
        Apenas 2 vagas nesta quinzena
      </span>
      <h3 className="text-2xl font-extrabold uppercase text-[#F4EFE6]">Diagnóstico de CRO Gratuito</h3>
      <p className="text-xs text-[#8A857C]">Sessão individual de 20 minutos com engenheiro de produto.</p>
      <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0C0C0F] font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all">
        Garantir Minha Vaga
      </button>
    </div>
  );
}`,
    elementorJson: { version: "0.4", title: "Pricing Escassez", type: "section", content: [] }
  },

  // 9. CARROSSEL MARQUEE DE LOGOS
  {
    id: "marquee-logos",
    title: "Marquee Infinito de Logos & Clientes",
    category: "depoimentos",
    categoryLabel: "Social Proof",
    isPro: false,
    description: "Faixa contínua com animação CSS suave exibindo marcas atendidas e métricas de autoridade.",
    tags: ["Marquee", "Logos", "Social Proof", "CSS Animation"],
    gradient: "from-[#111116] via-[#0C0C0F] to-[#111116]",
    accentColor: "#F4EFE6",
    codeReact: `export function MarqueeLogos() {
  const logos = ["Vercel", "Next.js", "Stripe", "Elementor", "Tailwind", "Cloudflare"];
  return (
    <section className="bg-[#0C0C0F] py-12 border-y border-white/5 overflow-hidden">
      <div className="flex gap-12 items-center whitespace-nowrap animate-marquee">
        {[...logos, ...logos].map((lg, i) => (
          <span key={i} className="text-lg font-bold font-mono text-[#8A857C] hover:text-[#F4EFE6] transition-colors">
            {lg}
          </span>
        ))}
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Marquee Logos", type: "section", content: [] }
  },

  // 10. GRID DE REVIEWS (PRO)
  {
    id: "reviews-grid-pro",
    title: "Grid de Reviews 5-Estrelas com Foto e Cargo",
    category: "depoimentos",
    categoryLabel: "Social Proof",
    isPro: true,
    description: "Depoimentos de fundadores com fotos em alta resolução, score verificado e depoimento em aspas.",
    tags: ["PRO", "Reviews", "Depoimentos", "Credibilidade"],
    gradient: "from-amber-950/20 via-[#111116] to-[#0C0C0F]",
    accentColor: "#F59E0B",
    codeReact: `export function ReviewsGridPro() {
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex text-amber-400 gap-1 text-sm">★★★★★</div>
          <p className="text-xs text-[#8A857C] italic">"O site antigo demorava 6s pra abrir. Após o redesign da PWLabs, o CPL nos anúncios caiu 42% no primeiro mês."</p>
          <div className="text-xs font-bold text-[#F4EFE6]">Rodrigo M. — CEO, FinTech</div>
        </div>
        <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex text-amber-400 gap-1 text-sm">★★★★★</div>
          <p className="text-xs text-[#8A857C] italic">"Entregaram o projeto no 14º dia sem nenhum atraso. O processo com o Stitch evitou qualquer retrabalho."</p>
          <div className="text-xs font-bold text-[#F4EFE6]">Beatriz S. — CMO, HealthTech</div>
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Reviews Grid", type: "section", content: [] }
  },

  // 11. ACORDEON FAQ
  {
    id: "faq-acordeon-clean",
    title: "Acordeon FAQ com Transição Fluida",
    category: "faq",
    categoryLabel: "Acordeons FAQ",
    isPro: false,
    description: "Perguntas frequentes em container minimalista com abertura suave sem bibliotecas pesadas.",
    tags: ["FAQ", "Acordeon", "Clean", "Suporte"],
    gradient: "from-[#161619] via-[#111116] to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `export function FaqAcordeonClean() {
  const faqs = [
    { q: "Qual o prazo médio de entrega?", a: "Nossos projetos são entregues em até 15 dias corridos utilizando nossa metodologia de componentização." },
    { q: "O site funciona no Elementor ou só em código?", a: "Disponibilizamos o código nativo em Next.js para alta performance ou a exportação em JSON direto para o Elementor do WordPress." },
    { q: "Vocês cuidam da hospedagem e domínio?", a: "Sim, configuramos domínio, SSL, CDN global e integrações de formulários na entrega final." },
  ];
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-2xl font-extrabold uppercase">Dúvidas Frequentes</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-[#111116] border border-white/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-bold text-sm flex justify-between items-center list-none">
                {f.q}
                <span className="text-[#FF0570] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs text-[#8A857C] mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "FAQ Acordeon", type: "section", content: [] }
  },

  // 12. BANNER FINAL CTA
  {
    id: "banner-final-cta",
    title: "Banner Final CTA com Glow e Botão WhatsApp",
    category: "cta",
    categoryLabel: "Chamadas (CTA)",
    isPro: false,
    description: "Seção de encerramento de página de alta conversão com luz de fundo Magenta e botão direto para o WhatsApp comercial.",
    tags: ["CTA", "WhatsApp", "Conversão", "Footer"],
    gradient: "from-[#FF0570]/30 via-[#111116] to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `export function BannerFinalCTA() {
  return (
    <section className="bg-[#0C0C0F] text-[#F4EFE6] py-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-[#111116] border border-[#FF0570]/30 rounded-3xl p-10 space-y-6 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase">Pronto para acelerar seu site?</h2>
        <p className="text-sm text-[#8A857C] max-w-lg mx-auto">
          Converse diretamente com os desenvolvedores da PWLabs e tire suas dúvidas em 15 minutos.
        </p>
        <a href="https://wa.me/5567996910585" target="_blank" className="inline-block px-8 py-4 bg-[#FF0570] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-[#ff2080] shadow-xl">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}`,
    elementorJson: { version: "0.4", title: "Banner Final CTA", type: "section", content: [] }
  },

  // 13. CARD CTA COM FORM (PRO)
  {
    id: "cta-form-lead-pro",
    title: "Card CTA com Formulário de 1-Campo e Validação",
    category: "cta",
    categoryLabel: "Chamadas (CTA)",
    isPro: true,
    description: "Bloco de captura de leads ultrarrápido focado em newsletters, diagnósticos gratuitos ou listas de espera.",
    tags: ["PRO", "Lead", "Form", "Captura"],
    gradient: "from-blue-950/30 via-[#111116] to-[#0C0C0F]",
    accentColor: "#38BDF8",
    codeReact: `export function CtaFormLeadPro() {
  return (
    <div className="max-w-lg mx-auto bg-[#111116] border border-white/15 rounded-2xl p-6 text-center space-y-4">
      <h3 className="text-lg font-bold text-[#F4EFE6]">Receba Novos Componentes Toda Semana</h3>
      <p className="text-xs text-[#8A857C]">Mais de 1.200 desenvolvedores inscritos na nossa newsletter de UI.</p>
      <div className="flex gap-2">
        <input type="email" placeholder="seu@email.com" className="flex-1 bg-[#0C0C0F] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF0570]" />
        <button className="px-5 py-2.5 bg-[#F4EFE6] text-[#0C0C0F] font-bold text-xs uppercase rounded-xl">Inscrever</button>
      </div>
    </div>
  );
}`,
    elementorJson: { version: "0.4", title: "CTA Form Lead", type: "section", content: [] }
  },

  // 14. BOTÃO NEON GLOW
  {
    id: "botao-neon-glow",
    title: "Botão Neon Glow Pulsante — CSS Puro",
    category: "botoes",
    categoryLabel: "Botões & CSS",
    isPro: false,
    description: "Botão com sombra neon em camadas e animação de respiração suave para CTAs principais.",
    tags: ["Botão", "Neon", "CSS", "Micro-interação"],
    gradient: "from-[#FF0570]/20 via-[#111116] to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `<button className="px-6 py-3 bg-[#FF0570] hover:bg-[#ff2080] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(255,5,112,0.45)] hover:shadow-[0_0_45px_rgba(255,5,112,0.7)] transition-all">
  Botão Neon Glow
</button>`,
    elementorJson: { version: "0.4", title: "Botao Neon Glow", type: "widget", content: [] }
  },

  // 15. GLASSMORPHISM SHADER
  {
    id: "glassmorphism-card",
    title: "Container Glassmorphism com Granulado Noise",
    category: "botoes",
    categoryLabel: "Botões & CSS",
    isPro: false,
    description: "Código de estilização CSS para reproduzir o efeito de vidro fumê fosco com borda brilhante e textura de ruído analógico.",
    tags: ["CSS", "Glassmorphism", "Noise", "Card"],
    gradient: "from-white/10 via-[#111116] to-[#0C0C0F]",
    accentColor: "#F4EFE6",
    codeReact: `<div className="relative bg-[#111116]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
  <p className="text-sm font-bold text-[#F4EFE6]">Card de Vidro Fosco</p>
  <p className="text-xs text-[#8A857C] mt-1">Efeito moderno e leve sem sobrecarregar o render do browser.</p>
</div>`,
    elementorJson: { version: "0.4", title: "Glassmorphism Container", type: "section", content: [] }
  },

  // 16. BOTÃO SHIMMER BORDER (PRO)
  {
    id: "botao-shimmer-border",
    title: "Botão Shimmer Border com Gradiente Giratório",
    category: "botoes",
    categoryLabel: "Botões & CSS",
    isPro: true,
    description: "Borda animada com gradiente rotativo contínuo no estilo Linear e Vercel.",
    tags: ["PRO", "Botão", "Shimmer", "Linear"],
    gradient: "from-purple-950/40 via-[#111116] to-[#0C0C0F]",
    accentColor: "#A855F7",
    codeReact: `<div className="relative inline-flex p-[1px] rounded-xl overflow-hidden group">
  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0570_0%,#38BDF8_50%,#FF0570_100%)]" />
  <button className="relative px-6 py-3 bg-[#0C0C0F] text-[#F4EFE6] font-bold text-xs uppercase tracking-wider rounded-xl group-hover:bg-[#161619] transition-colors">
    Shimmer Border Button
  </button>
</div>`,
    elementorJson: { version: "0.4", title: "Shimmer Button", type: "widget", content: [] }
  },

  // 17. PÁGINA COMPLETA INSTITUCIONAL
  {
    id: "pagina-institucional-agencia",
    title: "Página Institucional Completa — Agência Tech",
    category: "paginas",
    categoryLabel: "Páginas Prontas",
    isPro: false,
    description: "Estrutura completa de Home com Hero, Grid de Serviços, Métricas de Velocidade, Timeline de Processo e Footer.",
    tags: ["Página", "Institucional", "Agência", "Next.js"],
    gradient: "from-[#161619] via-[#111116] to-[#0C0C0F]",
    accentColor: "#F4EFE6",
    codeReact: `// Página completa institucional PWLabs pronta para o App Router (/app/page.tsx)
import { HeroDarkBento } from "@/components/HeroDarkBento";
import { BentoGridCards } from "@/components/BentoGridCards";
import { Pricing3Planos } from "@/components/Pricing3Planos";
import { BannerFinalCTA } from "@/components/BannerFinalCTA";

export default function PaginaInstitucional() {
  return (
    <main className="bg-[#0C0C0F] min-h-screen text-[#F4EFE6]">
      <HeroDarkBento />
      <BentoGridCards />
      <Pricing3Planos />
      <BannerFinalCTA />
    </main>
  );
}`,
    elementorJson: { version: "0.4", title: "Pagina Completa Institucional", type: "page", content: [] }
  },

  // 18. PÁGINA COMPLETA SAAS MINIMALISTA (PRO)
  {
    id: "pagina-saas-minimalista-pro",
    title: "Página Completa SaaS Minimalista — Dark Mode",
    category: "paginas",
    categoryLabel: "Páginas Prontas",
    isPro: true,
    description: "Landing Page para startups de tecnologia com captura de leads, tabela de features comparativa e integração com Stripe.",
    tags: ["PRO", "Página", "SaaS", "Startup"],
    gradient: "from-[#FF0570]/30 via-indigo-950/30 to-[#0C0C0F]",
    accentColor: "#FF0570",
    codeReact: `// Template SaaS Minimalista PWLabs PRO
export default function PaginaSaas() {
  return (
    <div className="bg-[#0C0C0F] text-[#F4EFE6] min-h-screen">
      {/* Hero + Features + Pricing + Testimonials */}
    </div>
  );
}`,
    elementorJson: { version: "0.4", title: "Pagina SaaS Minimalista", type: "page", content: [] }
  },

  // 19. PÁGINA DE VENDAS ALTA CONVERSÃO (PRO)
  {
    id: "pagina-vendas-conversao-pro",
    title: "Página de Vendas (LP) para Tráfego Pago",
    category: "paginas",
    categoryLabel: "Páginas Prontas",
    isPro: true,
    description: "Estrutura testada para campanhas no Meta Ads e Google Ads com foco em quebra de objeções e checkout direto.",
    tags: ["PRO", "Vendas", "Tráfego Pago", "CRO"],
    gradient: "from-emerald-950/40 via-[#111116] to-[#0C0C0F]",
    accentColor: "#10B981",
    codeReact: `// Landing Page de Alta Conversão para Tráfego Pago
export default function PaginaVendas() {
  return (
    <div className="bg-[#0C0C0F] text-[#F4EFE6] min-h-screen">
      {/* VSL + Objeções + Garantia + Checkout */}
    </div>
  );
}`,
    elementorJson: { version: "0.4", title: "Pagina Vendas Alta Conversao", type: "page", content: [] }
  }
];
