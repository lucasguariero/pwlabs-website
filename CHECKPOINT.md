# PW Labs Website — Checkpoint de Tarefas

## ✅ FEITO (Madrugada & Atual)
- [x] Formulário de orçamento conecta ao Supabase
- [x] Imagem no Hero ajustada (responsiva desktop/mobile)
- [x] Metadata e SEO configurados (Open Graph, favicon, sitemap dinâmico e robots.txt)
- [x] Rota dinâmica do Blog `/blog/[slug]` renderizando posts e gerando params estáticos
- [x] Links de navegação corrigidos no Header (NAV_ITEMS)
- [x] Verificar se LPs em `/lp/*` são necessárias ou duplicam `/servicos/*` (Análise concluída: são complementares)

---

## 🔴 URGENTE / SEO (Concluído)

---

## 🟡 NECESSÁRIO

### 4. Imagens
- [ ] Trocar `<img>` por `<Image />` do Next.js (otimização)
- [ ] Adicionar `loading="lazy"` onde aplicável
- [ ] Definir sizes corretos

### 5. Fontes
- [ ] Verificar se Geist está configurado com next/font (aparenta estar no layout, mas não usado no tailwind)

---

## 🟢 INDICADO / MELHORIA

### 6. Analytics
- [ ] Adicionar Google Analytics ou similar

### 7. UI/UX
- [ ] Página 404 customizada
- [ ] Loading states para páginas dinâmicas

### 8. Performance
- [ ] Verificar bundle size
- [ ] Testar Lighthouse

---

## 📝 PÁGINAS ATUAIS

| Rota | Status | Notas |
|------|--------|-------|
| `/` | ✅ Pronto | Homepage completa |
| `/servicos` | ✅ Pronto | Lista de serviços |
| `/servicos/[slug]` | ✅ Pronto | Página individual de serviço |
| `/blog` | ✅ Pronto | Lista de posts |
| `/blog/[slug]` | ⚠️ Parcial | Arquivo existe mas não renderiza posts |
| `/lp/trafego-pago` | ✅ Pronto | LP tráfego pago |
| `/lp/criacao-site` | ✅ Pronto | LP criação de site |
| `/lp/automacao-whatsapp` | ✅ Pronto | LP automação |
| `/obrigado` | ✅ Pronto | Página de obrigado |
| `/politica-de-privacidade` | ✅ Pronto | Política de privacidade |
| `/notes` | ⚠️ Verificar | O que é? |

---

## 🗑️ TECHNICAL DEBT

- [ ] Remover imagens de portfolio não usadas (muitas .webp em public/assets/portfolio-carrossel/)
- [ ] Limpar arquivos temporários na raiz (.html, .log)
- [ ] Verificar se `.env.local` está no .gitignore
- [ ] Arquivos em `/scripts` e `/ss` — avaliar necessidade
