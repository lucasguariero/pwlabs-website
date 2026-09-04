"use client";

import React, { useState, useEffect, useMemo } from "react";

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================
export type ActiveTab = "home" | "paginas" | "secoes" | "componentes" | "ferramentas";
export type SecaoFilter = "todos" | "hero" | "beneficios" | "depoimentos" | "bio" | "oferta" | "faq" | "cta" | "contato";

interface TemplateCard {
  id: string;
  title: string;
  category: "institucional" | "landing" | "ecommerce" | "saas";
  secaoType?: SecaoFilter;
  img: string;
  isPaid: boolean;
  tag: string;
}

const TEMPLATE_ITEMS: TemplateCard[] = [
  {
    id: "home-1",
    title: "Home Institucional Tech & SaaS",
    category: "institucional",
    secaoType: "hero",
    img: "/assets/easybuilder-cards/card-1.png",
    isPaid: false,
    tag: "Institucional"
  },
  {
    id: "planos-1",
    title: "Preços & Planos Modernos",
    category: "institucional",
    secaoType: "oferta",
    img: "/assets/easybuilder-cards/card-2.png",
    isPaid: true,
    tag: "Tabela de Preços"
  },
  {
    id: "sobre-1",
    title: "Sobre Nós & Manifesto",
    category: "institucional",
    secaoType: "bio",
    img: "/assets/easybuilder-cards/card-3.png",
    isPaid: true,
    tag: "Bio / Autoridade"
  },
  {
    id: "home-2",
    title: "Home Agência Digital Black & Lime",
    category: "institucional",
    secaoType: "hero",
    img: "/assets/easybuilder-cards/card-4.png",
    isPaid: true,
    tag: "Agência"
  },
  {
    id: "contato-1",
    title: "Contato & Suporte Comercial",
    category: "institucional",
    secaoType: "contato",
    img: "/assets/easybuilder-cards/card-5.png",
    isPaid: true,
    tag: "Contato"
  },
  {
    id: "servicos-1",
    title: "Serviços & Soluções Digitais",
    category: "institucional",
    secaoType: "beneficios",
    img: "/assets/easybuilder-cards/card-6.png",
    isPaid: true,
    tag: "Benefícios"
  },
  {
    id: "funcionalidades-1",
    title: "Funcionalidades & Recursos do Produto",
    category: "saas",
    secaoType: "beneficios",
    img: "/assets/easybuilder-cards/card-7.png",
    isPaid: true,
    tag: "SaaS / Recursos"
  },
  {
    id: "faq-1",
    title: "Perguntas Frequentes & Acordeon",
    category: "institucional",
    secaoType: "faq",
    img: "/assets/easybuilder-cards/card-8.png",
    isPaid: true,
    tag: "FAQ"
  },
  {
    id: "lp-vendas-1",
    title: "Página de Vendas Alta Conversão",
    category: "landing",
    secaoType: "cta",
    img: "/assets/easybuilder-cards/card-9.png",
    isPaid: true,
    tag: "Vendas"
  },
  {
    id: "depoimentos-1",
    title: "Depoimentos & Prova Social",
    category: "landing",
    secaoType: "depoimentos",
    img: "/assets/easybuilder-cards/card-10.png",
    isPaid: true,
    tag: "Social Proof"
  },
  {
    id: "cta-1",
    title: "Seção CTA Final com Garantia",
    category: "landing",
    secaoType: "cta",
    img: "/assets/easybuilder-cards/card-11.png",
    isPaid: true,
    tag: "CTA Final"
  },
  {
    id: "ecommerce-1",
    title: "Loja Virtual & Vitrine de Produtos",
    category: "ecommerce",
    secaoType: "oferta",
    img: "/assets/easybuilder-cards/card-12.png",
    isPaid: true,
    tag: "E-commerce"
  }
];

const TOOLS_DATA = [
  {
    title: "Compressor de Imagens",
    desc: "Reduza o peso das suas imagens sem perder qualidade visível.",
    isPremium: true,
    badge: "Premium"
  },
  {
    title: "YouTube Thumbnail Downloader",
    desc: "Baixe a miniatura de qualquer vídeo do YouTube em alta resolução.",
    isPremium: true,
    badge: "Premium"
  },
  {
    title: "WordPress Setup",
    desc: "Gere as configurações ideais para começar seu site no WordPress.",
    isPremium: true,
    badge: "Premium"
  },
  {
    title: "Clonador de Sites",
    desc: "Clone uma página publicada e baixe o site estático organizado em ZIP.",
    isPremium: true,
    badge: "Premium"
  },
  {
    title: "Analisador de Páginas [CRO]",
    desc: "Receba opiniões e críticas profissionais de uma IA treinada em CRO.",
    isPremium: true,
    badge: "Premium"
  },
  {
    title: "Deep Work Playlist",
    desc: "Trilhas de áudio focadas em alta concentração para desenvolvimento.",
    isPremium: false,
    badge: "Grátis"
  }
];

const AI_TOOLS_DATA = [
  {
    title: "Análise Estratégica",
    desc: "Descubra as dores do lead",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "ICP e Posicionamento",
    desc: "Posicione sua oferta",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Atendimento e Negociação",
    desc: "Feche mais projetos",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  },
  {
    title: "Copy Builder [Carrossel]",
    desc: "Conteúdo que prende",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: "Copy Builder [Ads]",
    desc: "Anúncios que convertem",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
  },
  {
    title: "Webson Vendedor",
    desc: "Argumentos para fechar vendas",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  },
  {
    title: "Easy Copy",
    desc: "Copys persuasivas para LPs",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  },
  {
    title: "Easy Coder",
    desc: "Gere CSS e JS sem esforço",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }
];

const COMPONENTES_DATA = [
  {
    title: "Botão Neon Glow Lime",
    category: "Botões",
    code: `<button className="px-6 py-3 bg-[#B2FE02] hover:bg-[#9fdc02] text-gray-950 font-extrabold text-sm rounded-xl shadow-[0_0_25px_rgba(178,254,2,0.5)] transition-all">Comece Agora</button>`
  },
  {
    title: "Card Glassmorphic com Borda Fina",
    category: "Cards",
    code: `<div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm">Conteúdo do Card</div>`
  },
  {
    title: "Badge de Status Pulsante",
    category: "Badges",
    code: `<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-xs font-bold"><span className="w-2 h-2 rounded-full bg-[#B2FE02] animate-ping" /> Online</span>`
  },
  {
    title: "Acordeon FAQ com Efeito Sanfona",
    category: "Interatividade",
    code: `<details className="group border border-gray-200 rounded-xl p-4 bg-white"><summary className="font-bold text-sm cursor-pointer list-none flex justify-between">Dúvida frequente?<span className="group-open:rotate-45 transition-transform">+</span></summary><p className="text-xs text-gray-600 mt-2">Resposta detalhada.</p></details>`
  }
];

export default function EasyBuilderReplica() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedSecao, setSelectedSecao] = useState<SecaoFilter>("todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("Institucionais");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [proModalOpen, setProModalOpen] = useState(false);
  const [selectedItemTitle, setSelectedItemTitle] = useState("");
  const [viewModeModalOpen, setViewModeModalOpen] = useState(false);

  // Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === "Escape") {
        setSearchModalOpen(false);
        setProModalOpen(false);
        setViewModeModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopy = (item: TemplateCard, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.isPaid) {
      setSelectedItemTitle(item.title);
      setProModalOpen(true);
      return;
    }
    const samplePayload = {
      version: "0.4",
      title: item.title,
      type: "section",
      content: []
    };
    navigator.clipboard.writeText(JSON.stringify(samplePayload, null, 2));
    triggerToast(`✓ Recurso "${item.title}" copiado para a área de transferência!`);
  };

  const copyCode = (code: string, title: string) => {
    navigator.clipboard.writeText(code);
    triggerToast(`✓ Código de "${title}" copiado com sucesso!`);
  };

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return TEMPLATE_ITEMS.filter((item) => {
      if (activeTab === "paginas") {
        const matchesSearch =
          searchQuery === "" ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
      }
      if (activeTab === "secoes") {
        const matchesSecao = selectedSecao === "todos" || item.secaoType === selectedSecao;
        const matchesSearch =
          searchQuery === "" ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSecao && matchesSearch;
      }
      // Home tab
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [activeTab, searchQuery, selectedSecao]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-lime-200 selection:text-gray-900">
      {/* SKIP TO CONTENT ACCESSIBILITY */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-medium"
      >
        Pular para o conteúdo principal
      </a>

      {/* TOAST FEEDBACK */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-950 text-white border border-lime-400 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#B2FE02]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white">
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 gap-4 md:gap-6 xl:gap-10">
              
              {/* LOGO */}
              <button
                type="button"
                onClick={() => setActiveTab("home")}
                className="cursor-pointer flex items-center gap-2.5 flex-shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-1"
                aria-label="Home"
              >
                <div className="w-9 h-9 rounded-xl bg-gray-950 flex items-center justify-center font-black text-lime-400 text-lg shadow-sm">
                  EB
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[17px] font-extrabold tracking-tight text-gray-950 leading-tight">
                    Easy<span className="text-[#84bd02]">Builder</span>
                  </span>
                  <span className="text-[9px] font-mono font-semibold text-gray-400 uppercase tracking-wider">
                    Templates & Componentes
                  </span>
                </div>
              </button>

              {/* CENTER NAVIGATION PILL */}
              <nav aria-label="Navegação principal" className="absolute inset-y-0 left-1/2 -translate-x-1/2 hidden sm:flex items-center">
                <div className="hidden sm:flex items-center gap-0.5 xl:gap-1 h-10 px-1 border border-gray-300 rounded-lg bg-white shadow-xs">
                  {/* HOME */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("home")}
                    title="Home"
                    className={`inline-flex items-center gap-1.5 h-8 px-2 xl:px-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "home"
                        ? "bg-lime-400/15 text-lime-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Home</span>
                  </button>

                  {/* PÁGINAS */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("paginas")}
                    title="Páginas"
                    className={`inline-flex items-center gap-1.5 h-8 px-2 xl:px-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "paginas"
                        ? "bg-lime-400/15 text-lime-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4v4M2 8h20M6 4v4" />
                    </svg>
                    <span>Páginas</span>
                  </button>

                  {/* SEÇÕES */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("secoes")}
                    title="Seções"
                    className={`inline-flex items-center gap-1.5 h-8 px-2 xl:px-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "secoes"
                        ? "bg-lime-400/15 text-lime-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>Seções</span>
                  </button>

                  {/* COMPONENTES */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("componentes")}
                    title="Componentes"
                    className={`inline-flex items-center gap-1.5 h-8 px-2 xl:px-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "componentes"
                        ? "bg-lime-400/15 text-lime-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="hidden xl:inline">Componentes</span>
                  </button>

                  {/* FERRAMENTAS */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("ferramentas")}
                    title="Ferramentas"
                    className={`inline-flex items-center gap-1.5 h-8 px-2 xl:px-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "ferramentas"
                        ? "bg-lime-400/15 text-lime-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Ferramentas</span>
                  </button>
                </div>
              </nav>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center flex-shrink-0 gap-2">
                {/* MODE SELECTOR BUTTON */}
                <button
                  type="button"
                  onClick={() => setViewModeModalOpen(true)}
                  aria-label="Modo de visualização"
                  title="Como abrir o Easy Builder"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="14" x="2" y="3" rx="2" strokeWidth="2" />
                    <line x1="8" x2="16" y1="21" y2="21" strokeWidth="2" />
                    <line x1="12" x2="12" y1="17" y2="21" strokeWidth="2" />
                  </svg>
                </button>

                {/* HAMBURGER MOBILE TRIGGER */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Abrir menu de navegação"
                  className="sm:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* DESKTOP BUTTONS */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedItemTitle("Plano Anual Ilimitado");
                      setProModalOpen(true);
                    }}
                    className="inline-flex items-center h-9 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-300 transition-colors"
                  >
                    Preços
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedItemTitle("Área de Membros");
                      setProModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-sm font-bold bg-[#B2FE02] hover:bg-[#9fdc02] text-gray-950 transition-colors shadow-xs"
                  >
                    <span>Entrar</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* MOBILE MENU ACCORDION */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t border-gray-200 bg-white p-4 space-y-2">
              <button
                onClick={() => { setActiveTab("home"); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${activeTab === "home" ? "bg-lime-400/20 text-lime-800 font-bold" : "text-gray-700"}`}
              >
                Home
              </button>
              <button
                onClick={() => { setActiveTab("paginas"); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${activeTab === "paginas" ? "bg-lime-400/20 text-lime-800 font-bold" : "text-gray-700"}`}
              >
                Páginas
              </button>
              <button
                onClick={() => { setActiveTab("secoes"); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${activeTab === "secoes" ? "bg-lime-400/20 text-lime-800 font-bold" : "text-gray-700"}`}
              >
                Seções
              </button>
              <button
                onClick={() => { setActiveTab("componentes"); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${activeTab === "componentes" ? "bg-lime-400/20 text-lime-800 font-bold" : "text-gray-700"}`}
              >
                Componentes
              </button>
              <button
                onClick={() => { setActiveTab("ferramentas"); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${activeTab === "ferramentas" ? "bg-lime-400/20 text-lime-800 font-bold" : "text-gray-700"}`}
              >
                Ferramentas
              </button>
              <div className="pt-2 border-t border-gray-100 flex gap-2">
                <button
                  onClick={() => setProModalOpen(true)}
                  className="flex-1 py-2 rounded-lg bg-[#B2FE02] text-black font-bold text-xs text-center"
                >
                  Entrar
                </button>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* MAIN CONTENT ROUTER */}
      <main id="main-content">
        
        {/* ======================================================== */}
        {/* TAB 1: HOME (DEFAULT VIEW)                               */}
        {/* ======================================================== */}
        {activeTab === "home" && (
          <>
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#f7f7f3] pt-12 pb-10 px-4 border-b border-gray-200">
              <div className="relative max-w-3xl mx-auto text-center">
                <h1 className="max-w-[700px] mx-auto text-[28px] sm:text-[40px] md:text-[48px] font-extrabold text-gray-950 leading-[1.25] tracking-tight mb-4">
                  Sites profissionais,{" "}
                  <mark className="bg-transparent bg-[linear-gradient(to_top,#B2FE02_55%,transparent_55%)] text-gray-950 px-1.5 py-0.5 rounded-sm [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                    sem começar do zero.
                  </mark>
                </h1>

                <p className="text-[14px] sm:text-[15px] text-gray-600 mb-8 max-w-md mx-auto leading-relaxed font-medium">
                  1.180 páginas, seções e componentes prontos pra importar no Elementor com um clique. Comece grátis, sem cartão.
                </p>

                {/* SEARCH INPUT */}
                <div className="relative mb-6 max-w-lg mx-auto">
                  <svg
                    className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>

                  <button
                    type="button"
                    onClick={() => setSearchModalOpen(true)}
                    className="w-full h-12 sm:h-13 pl-11 pr-20 rounded-2xl border border-gray-200 bg-white text-left text-sm shadow-xs hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-300 transition-all cursor-pointer flex items-center"
                  >
                    <span className="text-gray-400 text-xs sm:text-sm truncate">
                      {searchQuery || "Buscar templates, seções, componentes..."}
                    </span>
                  </button>

                  <kbd className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 h-7 px-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 text-xs font-medium pointer-events-none">
                    Ctrl K
                  </kbd>
                </div>

                {/* CATEGORY PILLS */}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setActiveTab("paginas")}
                    className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-3.5 rounded-full border border-gray-200 bg-white text-[12px] sm:text-[13px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4v4M2 8h20M6 4v4" />
                    </svg>
                    Páginas
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("secoes")}
                    className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-3.5 rounded-full border border-gray-200 bg-white text-[12px] sm:text-[13px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Seções
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("componentes")}
                    className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-3.5 rounded-full border border-gray-200 bg-white text-[12px] sm:text-[13px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                    </svg>
                    Botões
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("componentes")}
                    className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-3.5 rounded-full border border-gray-200 bg-white text-[12px] sm:text-[13px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Códigos CSS
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerToast("Você não possui favoritos salvos.")}
                    className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 sm:px-3.5 rounded-full border border-gray-200 bg-white text-[12px] sm:text-[13px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Favoritos
                  </button>
                </div>
              </div>
            </section>

            {/* CATALOG OF TEMPLATES */}
            <section className="relative bg-white pt-10 pb-14 px-4 sm:px-6 lg:px-8">
              <div className="relative max-w-[1920px] mx-auto">
                {/* SELECTOR HEADER */}
                <div className="relative inline-block mb-6">
                  <button
                    type="button"
                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                    className="inline-flex items-center gap-2 text-[19px] sm:text-[22px] font-bold text-gray-950 tracking-tight hover:text-gray-700 transition-colors"
                  >
                    <span>Sites {selectedCategory}</span>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {categoryDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-30 p-1.5">
                      {["Institucionais", "Landing Pages", "Lojas Virtuais", "SaaS"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCategoryDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          Sites {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* TEMPLATES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredTemplates.map((item) => (
                    <div key={item.id} className="group block relative">
                      <div className="relative aspect-[645/352] rounded-xl overflow-hidden bg-gray-100 ring-1 ring-black/5 transition-all duration-300 group-hover:ring-lime-400 group-hover:shadow-md">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="eager"
                          className={`block w-full h-full object-cover transition-transform duration-300 ${item.isPaid ? "group-hover:grayscale" : "group-hover:scale-105"}`}
                        />

                        {/* HOVER TITLE */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3 pointer-events-none z-10">
                          <p className="text-white text-xs font-medium line-clamp-2 leading-snug drop-shadow">
                            {item.title}
                          </p>
                        </div>

                        {/* PAID OVERLAY */}
                        {item.isPaid ? (
                          <>
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect width="18" height="11" x="3" y="11" rx="2" strokeWidth="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11V7a5 5 0 0110 0v4" />
                              </svg>
                              <span className="text-xs font-semibold text-white">Recurso pago</span>
                            </div>
                            <div className="absolute inset-0 z-20 hidden group-hover:flex items-end justify-center pb-4">
                              <button
                                type="button"
                                onClick={(e) => handleCopy(item, e)}
                                title="Copiar recurso (JSON)"
                                className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-gray-700 hover:bg-white shadow-lg transition-transform hover:scale-110"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <rect width="14" height="14" x="8" y="8" rx="2" strokeWidth="2" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                              </button>
                            </div>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) => handleCopy(item, e)}
                            title="Copiar recurso"
                            className="absolute bottom-2.5 right-2.5 z-20 inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/95 text-gray-700 text-xs font-semibold shadow-md ring-1 ring-black/10 hover:bg-white hover:scale-105 transition-all"
                          >
                            <svg className="w-3.5 h-3.5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect width="14" height="14" x="8" y="8" rx="2" strokeWidth="2" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                            <span>Copiar</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SUBSECTIONS PILL CAROUSEL */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex-shrink-0">
                    Filtrar Seções:
                  </span>
                  {[
                    { id: "todos", label: "Veja todos os elementos" },
                    { id: "hero", label: "Hero de abertura" },
                    { id: "beneficios", label: "Benefícios" },
                    { id: "depoimentos", label: "Depoimentos" },
                    { id: "bio", label: "Autoridade / Bio" },
                    { id: "oferta", label: "Planos & Preços" },
                    { id: "faq", label: "FAQ" },
                    { id: "cta", label: "CTA final" },
                    { id: "contato", label: "Captura de leads" }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSecao(s.id as SecaoFilter)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedSecao === s.id
                          ? "bg-gray-950 text-white font-semibold"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 2: ECOSYSTEM BANNER */}
            <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
              <div className="max-w-[1472px] mx-auto">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-[#f7ffdf] min-h-[340px] p-6 sm:p-10 md:p-14 flex items-center shadow-xs">
                  {/* TILTED TEMPLATES GRAPHIC */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-20 w-[720px] grid grid-cols-3 gap-3 pointer-events-none select-none max-lg:hidden will-change-transform [backface-visibility:hidden] [transform:rotate(7deg)_translateZ(0)]"
                  >
                    <div className="h-[140px] rounded-[10px] border border-gray-200 bg-white overflow-hidden shadow-md">
                      <img src="/assets/easybuilder-cards/card-1.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[140px] rounded-[10px] border border-gray-200 bg-white overflow-hidden shadow-md">
                      <img src="/assets/easybuilder-cards/card-2.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[140px] rounded-[10px] border border-gray-200 bg-white overflow-hidden shadow-md">
                      <img src="/assets/easybuilder-cards/card-3.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[140px] rounded-[10px] border border-gray-200 bg-white overflow-hidden shadow-md">
                      <img src="/assets/easybuilder-cards/card-4.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[140px] rounded-[10px] border border-gray-200 bg-white overflow-hidden shadow-md">
                      <img src="/assets/easybuilder-cards/card-5.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[140px] rounded-[10px] border border-gray-200 bg-white overflow-hidden shadow-md">
                      <img src="/assets/easybuilder-cards/card-6.png" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* BANNER CONTENT */}
                  <div className="relative z-10 max-w-xl space-y-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#324701] font-mono">
                      Plataforma + Ecossistema para Criar Sites
                    </span>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                      Crie sites profissionais,<br />
                      sem começar do zero.
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      Com a extensão do Easy Builder, o catálogo fica dentro do Elementor: sidebar, modal ou pop-up, como preferir. Copie e cole qualquer recurso sem sair do editor.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href="https://chromewebstore.google.com/detail/easy-builder/ngpbabbfpbihacogfnbgobceeadfidcb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gray-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-md"
                      >
                        <span>Baixe agora a extensão</span>
                        <svg className="w-4 h-4 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                      <button
                        type="button"
                        onClick={() => setViewModeModalOpen(true)}
                        className="inline-flex items-center h-11 px-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Ver como funciona
                      </button>
                    </div>

                    {/* 3 STEPS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-lime-600/20">
                      <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 border border-lime-600/15">
                        <span className="text-[11px] font-bold text-lime-700 font-mono">1.</span>
                        <p className="text-xs font-bold text-gray-900 mt-0.5">Aprenda com nossas aulas</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 border border-lime-600/15">
                        <span className="text-[11px] font-bold text-lime-700 font-mono">2.</span>
                        <p className="text-xs font-bold text-gray-900 mt-0.5">Construa com o catálogo</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur rounded-xl p-2.5 border border-lime-600/15">
                        <span className="text-[11px] font-bold text-lime-700 font-mono">3.</span>
                        <p className="text-xs font-bold text-gray-900 mt-0.5">Venda na Arena</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: IAS & FERRAMENTAS */}
            <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
              <div className="max-w-[1472px] mx-auto space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] sm:text-[22px] font-extrabold text-gray-950 tracking-tight">
                    Construa mais rápido com nossas IAs e Ferramentas!
                  </h2>
                  <button
                    type="button"
                    onClick={() => setActiveTab("ferramentas")}
                    className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Ver todas →
                  </button>
                </div>

                {/* AI TOOLS */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                    Recursos IA
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {AI_TOOLS_DATA.slice(0, 5).map((tool, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedItemTitle(tool.title);
                          setProModalOpen(true);
                        }}
                        className="group flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200 bg-white hover:border-lime-400 hover:shadow-sm text-left transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon} />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-black">
                            {tool.title}
                          </h4>
                          <p className="text-[11px] text-gray-500 truncate mt-0.5">
                            {tool.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* FERRAMENTAS SUITE */}
                <div className="space-y-3 pt-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                    Ferramentas Easy Builder
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {TOOLS_DATA.slice(0, 4).map((tool, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-gray-200 bg-[#fbfbf9] p-5 space-y-3 hover:border-gray-300 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#B2FE02] text-gray-950 uppercase tracking-wider font-mono">
                            {tool.badge}
                          </span>
                          <h4 className="text-sm font-bold text-gray-950">{tool.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{tool.desc}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedItemTitle(tool.title);
                            setProModalOpen(true);
                          }}
                          className="w-full mt-2 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-800 transition-colors"
                        >
                          Acessar Ferramenta
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ======================================================== */}
        {/* TAB 2: PÁGINAS                                           */}
        {/* ======================================================== */}
        {activeTab === "paginas" && (
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Catálogo Completo</span>
              <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Páginas Prontas</h2>
              <p className="text-sm text-gray-600 mt-2">
                Páginas completas desenvolvidas para alta conversão. Importe a estrutura inteira em um clique.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEMPLATE_ITEMS.map((item) => (
                <div key={item.id} className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-lime-400 hover:shadow-md transition-all">
                  <div className="aspect-[645/352] overflow-hidden bg-gray-100 relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    {item.isPaid && (
                      <span className="absolute top-3 right-3 bg-gray-950 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        PRO
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs text-gray-500">{item.tag}</span>
                    </div>
                    <button
                      onClick={(e) => handleCopy(item, e)}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-950 hover:bg-black text-white text-xs font-bold transition-all"
                    >
                      Copiar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: SEÇÕES                                            */}
        {/* ======================================================== */}
        {activeTab === "secoes" && (
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Biblioteca Modular</span>
              <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Seções Modulares</h2>
              <p className="text-sm text-gray-600 mt-2">
                Encaixe seções prontas no seu layout. Filtradas por objetivo de conversão.
              </p>
            </div>

            {/* SEÇÕES FILTERS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: "todos", label: "Todas as Seções" },
                { id: "hero", label: "Heros" },
                { id: "beneficios", label: "Benefícios" },
                { id: "depoimentos", label: "Depoimentos" },
                { id: "bio", label: "Bio & Autoridade" },
                { id: "oferta", label: "Oferta & Preços" },
                { id: "faq", label: "FAQ" },
                { id: "cta", label: "CTAs Finais" }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSecao(s.id as SecaoFilter)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedSecao === s.id
                      ? "bg-gray-950 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((item) => (
                <div key={item.id} className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-lime-400 hover:shadow-md transition-all">
                  <div className="aspect-[645/352] overflow-hidden bg-gray-100 relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs text-gray-500 capitalize">{item.secaoType}</span>
                    </div>
                    <button
                      onClick={(e) => handleCopy(item, e)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#B2FE02] hover:bg-[#9fdc02] text-gray-950 text-xs font-bold transition-all"
                    >
                      Copiar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: COMPONENTES                                       */}
        {/* ======================================================== */}
        {activeTab === "componentes" && (
          <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">UI Elements</span>
              <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Componentes & Códigos CSS</h2>
              <p className="text-sm text-gray-600 mt-2">
                Snippets e elementos visuais prontos para colar no seu projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPONENTES_DATA.map((comp, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-6 bg-white space-y-4 shadow-xs">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-gray-900">{comp.title}</h3>
                    <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{comp.category}</span>
                  </div>
                  <pre className="bg-gray-950 text-lime-400 p-4 rounded-xl text-xs font-mono overflow-x-auto max-h-36">
                    {comp.code}
                  </pre>
                  <button
                    onClick={() => copyCode(comp.code, comp.title)}
                    className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Copiar Código
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: FERRAMENTAS                                       */}
        {/* ======================================================== */}
        {activeTab === "ferramentas" && (
          <div className="max-w-[1472px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Suite Produtiva</span>
              <h2 className="text-3xl font-extrabold text-gray-950 mt-1">Ferramentas & IAs Especializadas</h2>
              <p className="text-sm text-gray-600 mt-2">
                Automatize tarefas repetitivas, gere copys, audite páginas e acelere sua entrega.
              </p>
            </div>

            {/* SUITE TOOLS */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                Ferramentas do Construtor
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOOLS_DATA.map((tool, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-6 bg-white space-y-3 hover:border-lime-400 hover:shadow-md transition-all">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#B2FE02] text-gray-950 uppercase font-mono">
                      {tool.badge}
                    </span>
                    <h4 className="text-base font-bold text-gray-950">{tool.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{tool.desc}</p>
                    <button
                      onClick={() => {
                        setSelectedItemTitle(tool.title);
                        setProModalOpen(true);
                      }}
                      className="mt-2 w-full py-2 rounded-xl bg-gray-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Abrir Ferramenta
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI AGENTS */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                Agentes e IAs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AI_TOOLS_DATA.map((ai, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-5 bg-white space-y-3 hover:border-gray-300 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-700 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={ai.icon} />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-gray-950">{ai.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{ai.desc}</p>
                    <button
                      onClick={() => {
                        setSelectedItemTitle(ai.title);
                        setProModalOpen(true);
                      }}
                      className="text-xs font-bold text-lime-700 hover:text-lime-800"
                    >
                      Iniciar conversa →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* GLOBAL SEARCH MODAL (CTRL + K)                           */}
      {/* ======================================================== */}
      {searchModalOpen && (
        <div
          onClick={() => setSearchModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-24 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-xl overflow-hidden animate-fadeIn"
          >
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar em mais de 1.180 recursos..."
                className="w-full text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <kbd className="text-[10px] font-mono text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">
                ESC
              </kbd>
            </div>
            <div className="p-4 max-h-80 overflow-y-auto space-y-2">
              {filteredTemplates.length === 0 ? (
                <p className="text-xs text-gray-500 py-6 text-center">Nenhum recurso encontrado.</p>
              ) : (
                filteredTemplates.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    onClick={(e) => {
                      handleCopy(item, e);
                      setSearchModalOpen(false);
                    }}
                    className="p-2.5 rounded-xl hover:bg-gray-50 flex items-center justify-between cursor-pointer border border-transparent hover:border-gray-200 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
                        <img src={item.img} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-gray-900 truncate">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-lime-700 bg-lime-50 px-2 py-0.5 rounded-full">
                      {item.isPaid ? "PRO" : "Grátis"}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PRO / SIGN-IN MODAL                                      */}
      {/* ======================================================== */}
      {proModalOpen && (
        <div
          onClick={() => setProModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-8 text-center space-y-5 relative"
          >
            <button
              onClick={() => setProModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-900"
            >
              ✕
            </button>
            <div className="w-14 h-14 rounded-2xl bg-[#B2FE02]/25 text-lime-900 flex items-center justify-center mx-auto text-2xl font-black">
              🔒
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-lime-700 uppercase tracking-widest">
                Easy Builder Pro
              </span>
              <h3 className="text-xl font-extrabold text-gray-950">{selectedItemTitle || "Recurso Exclusivo"}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Este recurso faz parte do plano completo do Easy Builder. Acesse todos os 1.180+ templates, IAs e extensões para criar páginas em minutos.
              </p>
            </div>
            <div className="pt-2 space-y-2">
              <a
                href="https://wa.me/5567996910585"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 rounded-xl bg-[#B2FE02] hover:bg-[#9fdc02] text-gray-950 font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Garantir Acesso Completo
              </a>
              <button
                type="button"
                onClick={() => setProModalOpen(false)}
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Continuar navegando no modo gratuito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE SELECTOR EXPLANATION MODAL (COMO ABRIR O EASYBUILDER) */}
      {/* ======================================================== */}
      {viewModeModalOpen && (
        <div
          onClick={() => setViewModeModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 text-center space-y-4 relative"
          >
            <button
              onClick={() => setViewModeModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-gray-950">Como abrir o Easy Builder</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Você pode usar o Easy Builder direto pelo navegador no catálogo ou através da nossa extensão do Google Chrome para Elementor.
            </p>
            <div className="grid grid-cols-2 gap-3 text-left pt-2">
              <div className="p-3 border border-gray-200 rounded-xl bg-gray-50 space-y-1">
                <span className="text-[10px] font-bold text-lime-700 uppercase font-mono">Modo 01</span>
                <p className="text-xs font-bold text-gray-900">Na Web</p>
                <p className="text-[11px] text-gray-500">Copie o JSON e cole no Elementor.</p>
              </div>
              <div className="p-3 border border-gray-200 rounded-xl bg-gray-50 space-y-1">
                <span className="text-[10px] font-bold text-lime-700 uppercase font-mono">Modo 02</span>
                <p className="text-xs font-bold text-gray-900">No Chrome</p>
                <p className="text-[11px] text-gray-500">Catálogo direto dentro do WordPress.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-10 px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
        <div className="max-w-[1472px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gray-950 text-lime-400 font-bold flex items-center justify-center text-xs">
              EB
            </div>
            <span className="font-bold text-gray-900">Easy Builder</span>
            <span>— 1.180+ templates para Elementor</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://docs.easybuilder.com.br/doc/onboarding" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              Documentação
            </a>
            <a href="https://wa.me/5567996910585" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              Suporte WhatsApp
            </a>
            <span className="text-gray-400">© 2026 Easy Builder. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
