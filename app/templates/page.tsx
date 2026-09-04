"use client";

import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TEMPLATES_DATA, TEMPLATE_CATEGORIES, TemplateItem } from "@/lib/templates-data";
import { WHATSAPP_URL } from "@/lib/data";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [formatFilter, setFormatFilter] = useState<"todos" | "react" | "elementor">("todos");
  const [activePreview, setActivePreview] = useState<TemplateItem | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showProModal, setShowProModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<TemplateItem | null>(null);

  // Keyboard shortcut Ctrl+K to search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("template-search-input")?.focus();
      }
      if (e.key === "Escape") {
        setActivePreview(null);
        setShowProModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredTemplates = useMemo(() => {
    return TEMPLATES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === "todos" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyReact = (item: TemplateItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.isPro) {
      setModalItem(item);
      setShowProModal(true);
      return;
    }
    navigator.clipboard.writeText(item.codeReact);
    showToast(`✓ Código React / Tailwind de "${item.title}" copiado para o clipboard!`);
  };

  const handleCopyElementor = (item: TemplateItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.isPro) {
      setModalItem(item);
      setShowProModal(true);
      return;
    }
    navigator.clipboard.writeText(JSON.stringify(item.elementorJson, null, 2));
    showToast(`✓ JSON Elementor de "${item.title}" copiado! Cole no seu WordPress.`);
  };

  return (
    <div className="bg-[#0C0C0F] text-[#F4EFE6] min-h-screen font-sans">
      <Header />

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16161c] border border-[#FF0570]/50 text-[#F4EFE6] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0570]" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      <main className="pt-28 pb-20">
        {/* Ambient Glows */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#FF0570]/10 rounded-full blur-[160px] pointer-events-none -z-0" />

        {/* HERO SECTION */}
        <section className="relative z-10 max-w-6xl mx-auto px-4 text-center pt-8 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF0570]/10 border border-[#FF0570]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF0570] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF0570] uppercase">
              PWLabs Component Hub · 1.180+ Recursos
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase mb-5 font-display">
            Sites profissionais, <br />
            <span className="text-[#FF0570]">sem começar do zero.</span>
          </h1>

          <p className="text-base md:text-lg text-[#8A857C] max-w-2xl mx-auto mb-8 leading-relaxed">
            Biblioteca modular de páginas, seções e componentes prontos. Copie com 1 clique para <strong className="text-white">Next.js / Tailwind</strong> ou <strong className="text-white">Elementor</strong> e construa interfaces de altíssimo nível.
          </p>

          {/* SEARCH BAR & SHORTCUT */}
          <div className="max-w-xl mx-auto relative mb-8">
            <div className="relative flex items-center">
              <svg className="w-5 h-5 absolute left-4 text-[#8A857C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="template-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por hero, bento, pricing, botões, tags..."
                className="w-full h-14 pl-12 pr-24 bg-[#111116] border border-white/10 rounded-2xl text-sm text-[#F4EFE6] placeholder-[#8A857C] focus:outline-none focus:border-[#FF0570] transition-colors shadow-2xl"
              />
              <span className="absolute right-4 text-[10px] font-mono font-bold text-[#8A857C] border border-white/10 px-2 py-1 rounded-md bg-[#0C0C0F]">
                Ctrl K
              </span>
            </div>
          </div>

          {/* FORMAT TOGGLE (REACT vs ELEMENTOR) */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-xs text-[#8A857C] mr-2">Exportar como:</span>
            <button
              onClick={() => setFormatFilter("todos")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                formatFilter === "todos"
                  ? "bg-[#F4EFE6] text-[#0C0C0F]"
                  : "bg-[#111116] text-[#8A857C] hover:text-white border border-white/5"
              }`}
            >
              Todos os Formatos
            </button>
            <button
              onClick={() => setFormatFilter("react")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                formatFilter === "react"
                  ? "bg-[#FF0570] text-white"
                  : "bg-[#111116] text-[#8A857C] hover:text-white border border-white/5"
              }`}
            >
              <span>⚡</span> Next.js / Tailwind
            </button>
            <button
              onClick={() => setFormatFilter("elementor")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                formatFilter === "elementor"
                  ? "bg-[#92003B] text-white"
                  : "bg-[#111116] text-[#8A857C] hover:text-white border border-white/5"
              }`}
            >
              <span>📦</span> Elementor JSON
            </button>
          </div>

          {/* CATEGORY PILLS */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {TEMPLATE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-white/10 text-[#F4EFE6] border border-white/20 shadow-lg"
                    : "bg-[#111116] text-[#8A857C] hover:text-white border border-white/5 hover:border-white/15"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* TEMPLATES GRID */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6 text-xs text-[#8A857C]">
            <span>Mostrando {filteredTemplates.length} componentes disponíveis</span>
            <span className="hidden sm:inline">Toque no card para abrir o preview ao vivo</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePreview(item)}
                className="group bg-[#111116] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-2xl relative"
              >
                {/* PRO BADGE */}
                {item.isPro && (
                  <div className="absolute top-3 right-3 z-20 bg-[#FF0570] text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    PRO
                  </div>
                )}

                {/* PREVIEW CANVAS */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${item.gradient} p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5`}>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8A857C]">
                    <span className="bg-[#0C0C0F]/80 px-2 py-0.5 rounded border border-white/10 font-bold uppercase">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Visual Simulation Thumbnail */}
                  <div className="my-auto text-center px-4">
                    <p className="text-xs font-extrabold uppercase tracking-tight text-[#F4EFE6] line-clamp-1">
                      {item.title}
                    </p>
                    <div className="flex justify-center gap-1.5 mt-2">
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="text-[8px] bg-[#0C0C0F]/80 px-2 py-0.5 rounded border border-white/5 text-[#8A857C]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-[#8A857C]">
                    <span>Score: 99</span>
                    <span className="text-[#FF0570] font-bold group-hover:translate-x-1 transition-transform">
                      Ver Preview →
                    </span>
                  </div>
                </div>

                {/* INFO & ACTIONS */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#F4EFE6] line-clamp-1">{item.title}</h3>
                    <p className="text-xs text-[#8A857C] mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* DUAL EXPORT BUTTONS */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    <button
                      onClick={(e) => handleCopyReact(item, e)}
                      title="Copiar código React com Tailwind"
                      className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-extrabold text-[#F4EFE6] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>⚡</span> React
                    </button>
                    <button
                      onClick={(e) => handleCopyElementor(item, e)}
                      title="Copiar JSON compatível com Elementor"
                      className="py-2.5 px-3 bg-[#FF0570]/10 hover:bg-[#FF0570]/20 border border-[#FF0570]/30 rounded-xl text-[10px] font-extrabold text-[#FF0570] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>📦</span> Elementor
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE PREVIEW MODAL */}
        {activePreview && (
          <div
            onClick={() => setActivePreview(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111116] border border-white/15 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* MODAL HEADER */}
              <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FF0570] font-bold uppercase tracking-wider">
                    {activePreview.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-[#F4EFE6]">{activePreview.title}</h3>
                </div>

                {/* DEVICE SWITCHER */}
                <div className="flex items-center gap-1 bg-[#0C0C0F] border border-white/10 p-1 rounded-xl">
                  <button
                    onClick={() => setPreviewDevice("desktop")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      previewDevice === "desktop" ? "bg-white/15 text-white" : "text-[#8A857C]"
                    }`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setPreviewDevice("tablet")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      previewDevice === "tablet" ? "bg-white/15 text-white" : "text-[#8A857C]"
                    }`}
                  >
                    Tablet
                  </button>
                  <button
                    onClick={() => setPreviewDevice("mobile")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      previewDevice === "mobile" ? "bg-white/15 text-white" : "text-[#8A857C]"
                    }`}
                  >
                    Mobile
                  </button>
                </div>

                <button
                  onClick={() => setActivePreview(null)}
                  className="text-[#8A857C] hover:text-white p-2 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {/* MODAL BODY (CODE & PREVIEW) */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div
                  className={`mx-auto bg-[#0C0C0F] border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
                    previewDevice === "mobile"
                      ? "max-w-[380px]"
                      : previewDevice === "tablet"
                      ? "max-w-[640px]"
                      : "w-full"
                  }`}
                >
                  <div className="text-center space-y-3 py-6">
                    <span className="text-xs font-mono text-[#FF0570]">Preview Responsivo Ativo</span>
                    <h2 className="text-2xl font-extrabold uppercase">{activePreview.title}</h2>
                    <p className="text-xs text-[#8A857C] max-w-md mx-auto">{activePreview.description}</p>
                    <div className="pt-2">
                      <button className="px-6 py-3 bg-[#FF0570] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl">
                        Ação do Componente
                      </button>
                    </div>
                  </div>
                </div>

                {/* CODE BOX */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-[#8A857C]">
                    <span className="font-mono">Código Fonte (React / Tailwind):</span>
                  </div>
                  <pre className="bg-[#0a0a0d] border border-white/10 rounded-xl p-4 text-xs font-mono text-[#F4EFE6] overflow-x-auto max-h-60">
                    {activePreview.codeReact}
                  </pre>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 border-t border-white/10 flex justify-between items-center bg-[#0d0d12]">
                <div className="flex gap-2">
                  {activePreview.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-[#8A857C]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={(e) => handleCopyReact(activePreview, e)}
                    className="px-5 py-2.5 bg-[#F4EFE6] text-[#0C0C0F] font-extrabold text-xs uppercase rounded-xl hover:bg-white"
                  >
                    Copiar React
                  </button>
                  <button
                    onClick={(e) => handleCopyElementor(activePreview, e)}
                    className="px-5 py-2.5 bg-[#FF0570] text-white font-extrabold text-xs uppercase rounded-xl hover:bg-[#ff2080]"
                  >
                    Copiar Elementor
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRO LOCK MODAL */}
        {showProModal && modalItem && (
          <div
            onClick={() => setShowProModal(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111116] border border-[#FF0570]/40 rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF0570]/15 border border-[#FF0570]/30 flex items-center justify-center text-[#FF0570] mx-auto text-xl font-bold">
                🔒
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#FF0570] uppercase tracking-widest">Recurso Exclusivo PRO</span>
                <h3 className="text-xl font-bold text-[#F4EFE6]">{modalItem.title}</h3>
                <p className="text-xs text-[#8A857C] leading-relaxed">
                  Este componente é exclusivo para clientes e assinantes do plano PWLabs PRO. Tenha acesso a todos os 1.180+ componentes, código React completo e suporte direto.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-[#FF0570] hover:bg-[#ff2080] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg"
                >
                  Liberar Acesso PRO no WhatsApp
                </a>
                <button
                  onClick={() => setShowProModal(false)}
                  className="block w-full py-2 text-xs text-[#8A857C] hover:text-white"
                >
                  Continuar navegando no plano Free
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BANNER TOOLS PWLABS */}
        <section className="max-w-6xl mx-auto px-4 mt-24">
          <div className="bg-gradient-to-r from-[#111116] via-[#16161c] to-[#111116] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-mono text-[#FF0570] font-bold uppercase tracking-wider">
                Ecossistema PWLabs
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-display">
                Precisa auditar a conversão da sua Landing Page?
              </h2>
              <p className="text-xs text-[#8A857C] max-w-lg">
                Utilize nosso Analisador de CRO inteligente para encontrar gargalos de velocidade e copywriting antes de subir seus anúncios.
              </p>
            </div>
            <a
              href="/lp/analise-cro"
              className="whitespace-nowrap px-8 py-4 bg-[#F4EFE6] hover:bg-white text-[#0C0C0F] font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-xl transition-all"
            >
              Testar Analisador de CRO →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
