# Funil de Vendas - PW Labs

## Visão Geral do Funil

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           FUNIL PW LABS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│   │  ATRAÇÃO │───▶│ CAPTAÇÃO │───▶│ QUALIF.  │───▶│ FECHAMENTO│          │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘          │
│                                                                             │
│   • Instagram    • Landing Page   • Email seq    • Proposta               │
│   • Google       • Blog           • WhatsApp      • Call                  │
│   • Indicações   • Formulário     • Material     • Negociação            │
│                                  • Retargeting                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## ETAPA 1: ATRAÇÃO (Topo do Funil)

### Canais de Tráfego
| Canal | Objetivo | Status |
|-------|----------|--------|
| Instagram | autoridade e awareness | ✅ Criado |
| Google Ads | buscas de serviço | ⏳ Configurar |
| Blog SEO | tráfego orgânico | ✅ Existindo |
| Indicações | inbound qualificado | ⏳ Sistema |

### Conteúdo para Atração
- Posts educativos sobre serviços
- Cases de sucesso (antes/depois)
- Reels de bastidores
- Carrosséis de dicas

---

## ETAPA 2: CAPTAÇÃO (Meio do Funil)

### Pontos de Captura
| Ponto | Ação | Implementação |
|-------|------|---------------|
| Site principal | Formulário contato | ✅ Supabase |
| Landing pages | Formulário serviço específico | ✅ Supabase |
| Blog | CTA para ebook/consulta | ⏳ Criar |
| Instagram | Link bio → landing | ⏳ Otimizar |
| WhatsApp | Click to chat | ✅ Configurado |

### Dados Coletados
- Nome
- Email
- Telefone
- Serviço de interesse
- Mensagem (opcional)

---

## ETAPA 3: QUALIFICAÇÃO (Nutrição)

### Sequência de Emails (5 dias)
```
Dia 0 (automático): Email de boas-vindas
Dia 1: Case de sucesso relevante
Dia 2: Material educacional (PDF)
Dia 3: Proposta de consultoria/gratuíta
Dia 4: Follow-up + urgência
```

### Sequência WhatsApp (paralela)
```
Dia 0: Msg boas-vindas + pergunta
Dia 2: Msg caso de sucesso
Dia 4: Proposta de call
```

### Materiais para Nutrição
- [ ] Ebook "Guia completo: [Serviço]"
- [ ] Checklist "5 erros a evitar em [Serviço]"
- [ ] Template "Briefing de projeto"

---

## ETAPA 4: FECHAMENTO

### Pipeline de Vendas
| Etapa | Ação | Tempo |
|-------|------|-------|
| Novo lead | Primeira resposta | < 15 min |
| Qualificação | Entender necessidade | Call 20min |
| Proposta | Enviar orçamento | 24-48h |
| Follow-up | Check resposta | 3 dias |
| Fechamento | Enviar contrato | - |

### Documentos
- [ ] Template proposta comercial
- [ ] Template contrato
- [ ] Template email de follow-up

---

## automações a Implementar

### No Supabase (via Edge Functions)
1. **Receber lead → enviar email boas-vindas**
2. **Lead sem resposta em 3 dias → alert no WhatsApp**
3. **Lead qualificado → notificação interna**

### No WhatsApp Business
1. **Msg automática de boas-vindas**
2. **Chatbot de qualificação inicial**
3. **Sequência de follow-up**

---

## Métricas do Funil

| Métrica | Meta | Como Medir |
|---------|------|------------|
| Visitantes → Leads | 3-5% | GA4 + Supabase |
| Leads → Clientes | 15-25% | CRM |
| Tempo ciclo de venda | 7-14 dias | Pipeline |
| Custo Lead | R$ 20-50 | Ads + Leads |
| ROI Ads | 3-5x | Receitas + Ads |

---

## Próximos Passos

1. ✅ Mapear funil (feito)
2. ⏳ Criar sequência de emails
3. ⏳ Configurar automação WhatsApp
4. ⏳ Criar template propostas
5. ⏳ Configurar CRM simples
6. ⏳ Definir métricas no GA4
