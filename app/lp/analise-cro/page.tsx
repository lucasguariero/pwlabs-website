"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/data";

export default function LPAnaliseCRO() {
  const [url, setUrl] = useState("");
  const [contact, setContact] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsAnalyzing(true);
    setShowResult(false);

    // Simulate scanning/AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    <div className="bg-[#0C0C0F] text-[#F4EFE6] min-h-screen font-sans">
      <Header />

      <main className="pt-28 pb-20 overflow-hidden">
        {/* Ambient background glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF0570]/10 rounded-full blur-[160px] pointer-events-none -z-0" />

        {/* HERO SECTION */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-8 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF0570]/10 border border-[#FF0570]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF0570] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF0570] uppercase">
              Auditoria de CRO com Inteligência Artificial
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] uppercase mb-6 font-display">
            Sua Landing Page está<br />
            <span className="text-[#FF0570]">queimando tráfego?</span>
          </h1>

          <p className="text-lg md:text-xl text-[#8A857C] max-w-2xl mx-auto mb-10 leading-relaxed">
            Analise a taxa de conversão da sua página em segundos. Nossa IA treinada nos 0.1% melhores especialistas de CRO gera um raio-x completo e 10 recomendações práticas para escalar suas vendas.
          </p>

          {/* ANALYZER FORM */}
          <div className="max-w-2xl mx-auto bg-[#111116] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl relative noise">
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="url"
                  placeholder="https://sua-landing-page.com.br"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="flex-1 bg-[#0C0C0F] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#F4EFE6] placeholder-[#8A857C] focus:outline-none focus:border-[#FF0570] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Seu WhatsApp ou E-mail"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full md:w-56 bg-[#0C0C0F] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#F4EFE6] placeholder-[#8A857C] focus:outline-none focus:border-[#FF0570] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full py-4 bg-[#FF0570] hover:bg-[#ff2080] active:scale-[0.99] transition-all text-white font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Analisando Copy, UX e Velocidade...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Gerar Diagnóstico Gratuito de CRO</span>
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center justify-between text-[11px] text-[#8A857C] mt-4 pt-3 border-t border-white/5">
              <span>⚡ Análise em 30 segundos</span>
              <span>🔒 100% Gratuito & Confidencial</span>
              <span>🎯 Sem enrolação genérica</span>
            </div>
          </div>
        </section>

        {/* DEMO / RESULT PREVIEW */}
        {showResult && (
          <section className="max-w-4xl mx-auto px-4 mb-20 animate-fadeIn">
            <div className="bg-[#111116] border border-[#FF0570]/30 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#FF0570] font-bold uppercase tracking-widest">Resultado do Diagnóstico</span>
                  <h3 className="text-xl font-bold text-[#F4EFE6] mt-0.5">{url}</h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#FF0570] font-mono">54/100</span>
                  <p className="text-[10px] text-[#8A857C] uppercase tracking-wider">Score de Conversão</p>
                </div>
              </div>

              {/* BLOCO 1: AVALIAÇÃO */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF0570]" />
                  <h4 className="text-lg font-bold text-[#F4EFE6]">Bloco 1 · A Avaliação Sincera (Análise Detalhada)</h4>
                </div>
                <div className="bg-[#0C0C0F] border border-white/5 rounded-xl p-5 text-sm text-[#8A857C] leading-relaxed space-y-3">
                  <p>
                    <strong className="text-[#F4EFE6]">Onde sua página está falhando:</strong> Sua headline principal é genérica e não responde a objeção principal do visitante nos primeiros 3 segundos. Além disso, o botão de ação principal está escondido abaixo da dobra no celular.
                  </p>
                  <p>
                    O tempo de carregamento da primeira dobra está em <span className="text-red-400 font-mono font-bold">4.2s</span>, fazendo você perder até 40% do tráfego pago investido em anúncios.
                  </p>
                </div>
              </div>

              {/* BLOCO 2: RECOMENDAÇÕES */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <h4 className="text-lg font-bold text-[#F4EFE6]">Bloco 2 · 10 Recomendações Práticas de CRO (Amostra)</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#0C0C0F] border border-white/5 rounded-xl p-4">
                    <span className="text-xs font-mono text-[#FF0570] font-bold">01 / Copy Reformulada</span>
                    <p className="text-xs text-[#8A857C] mt-1">Substitua a promessa abstrata por um gancho numérico concreto de resultado imediato.</p>
                  </div>
                  <div className="bg-[#0C0C0F] border border-white/5 rounded-xl p-4">
                    <span className="text-xs font-mono text-[#FF0570] font-bold">02 / Redução de Fricção</span>
                    <p className="text-xs text-[#8A857C] mt-1">Remova 3 campos desnecessários do formulário para elevar a conversão mobile em +35%.</p>
                  </div>
                </div>
              </div>

              {/* CTA UNLOCK FULL REPORT */}
              <div className="bg-gradient-to-r from-[#FF0570]/20 to-purple-900/20 border border-[#FF0570]/40 rounded-2xl p-6 text-center space-y-4">
                <h4 className="text-lg font-bold text-[#F4EFE6]">Quer aplicar essas recomendações ou recriar sua página em 15 dias?</h4>
                <p className="text-xs text-[#8A857C] max-w-lg mx-auto">
                  A equipe da PWLabs projeta Landing Pages em Next.js com carregamento sub-segundo e copy validado para dobrar suas conversões.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-[#F4EFE6] text-[#0C0C0F] font-extrabold text-xs tracking-widest uppercase rounded-xl hover:bg-[#e2ddd3] transition-colors"
                >
                  Falar com Engenheiro de CRO no WhatsApp
                </a>
              </div>
            </div>
          </section>
        )}

        {/* BENTO GRID — DIFERENCIAIS DA ANÁLISE */}
        <section className="max-w-5xl mx-auto px-4 my-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase font-display text-[#F4EFE6]">
              Por que este analisador é diferente?
            </h2>
            <p className="text-sm text-[#8A857C] mt-2">Sem conselhos óbvios ou listas genéricas que não trazem faturamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF0570]/10 border border-[#FF0570]/20 flex items-center justify-center text-[#FF0570] font-bold text-lg">01</div>
              <h3 className="text-base font-bold text-[#F4EFE6]">Treinado nos 0.1% Melhores</h3>
              <p className="text-xs text-[#8A857C] leading-relaxed">
                Baseado nos princípios rigorosos de CRO de grandes empresas globais de tecnologia e SaaS.
              </p>
            </div>

            <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF0570]/10 border border-[#FF0570]/20 flex items-center justify-center text-[#FF0570] font-bold text-lg">02</div>
              <h3 className="text-base font-bold text-[#F4EFE6]">10 Recomendações Práticas</h3>
              <p className="text-xs text-[#8A857C] leading-relaxed">
                Você recebe instruções prontas de copy, mudanças de layout e ajustes de UX fáceis de aplicar.
              </p>
            </div>

            <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF0570]/10 border border-[#FF0570]/20 flex items-center justify-center text-[#FF0570] font-bold text-lg">03</div>
              <h3 className="text-base font-bold text-[#F4EFE6]">Focado em Campanhas de Anúncios</h3>
              <p className="text-xs text-[#8A857C] leading-relaxed">
                Feito sob medida para quem roda tráfego no Meta Ads e Google Ads e precisa reduzir o CPL/CAC.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="max-w-4xl mx-auto px-4 text-center my-16">
          <div className="bg-[#111116] border border-white/10 rounded-3xl p-10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0570]/10 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-display text-[#F4EFE6] leading-tight">
              Quer uma Landing Page nova<br />
              <span className="text-[#FF0570]">pronta em 15 dias?</span>
            </h2>

            <p className="text-sm text-[#8A857C] max-w-xl mx-auto">
              Nossa equipe constrói sua nova página em Next.js com score 98+ de velocidade e arquitetura de alta conversão.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#FF0570] hover:bg-[#ff2080] text-white font-extrabold text-xs tracking-widest uppercase rounded-xl transition-all shadow-xl hover:scale-105"
            >
              Agendar Diagnóstico com a Equipe
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
