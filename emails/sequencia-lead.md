# Sequência de Emails - Nutrição de Leads PW Labs

## Configuração Técnica

- **Ferramenta sugerida:** Resend, Brevo (ex-Mailchimp), ou Supabase Edge Function + SendGrid
- **Automações:** Via webhook do Supabase quando novo lead entra

---

## Email 1: Boas-Vindas (Dia 0 - Automático)

**Assunto:** 👋 Oi, [Nome]! Recebemos sua mensagem

**Corpo:**

```
Oi, [Nome]!

Obrigado por entrar em contato com a gente. Recebemos sua mensagem e vamos responder em até 2 horas durante o horário comercial.

Enquanto isso, me conta: o que te fez buscar por [serviço] agora? 
Você tá começando do zero ou já tem algo que não tá funcionando como deveria?

Qualquer dúvida, responde aqui mesmo.

Abraço,
[Seu nome]
PW Labs
```

---

## Email 2: Case de Sucesso (Dia 1)

**Assunto:** [Nome], te conto uma história

**Corpo:**

```
Oi, [Nome]!

Antes de te contar sobre o que fazemos, deixa eu te mostrar o que a gente já fez por alguém na sua situação:

[ESCOLHER CASE RELEVANTE - ver abaixo]

Isso foi em [X] dias. A pessoa chegou com o mesmo problema que você: [descreva dor].

Se quiser, podemos conversar sobre como fazer algo parecido pro seu negócio. 
É só responder esse email ou chamar no WhatsApp: (67) 99691-0585

Abraço,
[Seu nome]
PW Labs
```

### Cases por Serviço

| Serviço | Case |
|---------|------|
| Site institucional | Clínica que tripled conversão após novo site |
| Loja virtual | E-commerce que aumentou 200% em 3 meses |
| Landing page | Campanha de tráfego com ROAS 4x |
| SEO | Appear em 1ª página em 90 dias |
| Automação | Empresa que economizou 15h/semana |

---

## Email 3: Material Educacional (Dia 2)

**Assunto:** [Nome], um presente pra você

**Corpo:**

```
Oi, [Nome]!

Sei que você tá pesquisando sobre [serviço]. E sei também que tem muito百家 (ruim) circulando por aí.

Por isso, criei esse guia rápido: "[Título do Material]"

Nele você vai encontrar:
- Os 5 erros mais comuns que vejo pessoas cometerem
- O que fazer antes de contratar um serviço desses
- Como avaliar se a empresa realmente entende do assunto

Baixa aqui: [link para PDF no seu site ou Google Drive]

Espero que ajude!

Abraço,
[Seu nome]
PW Labs
```

### Materiais Sugeridos (criar)

| Material | Serviço Alvo |
|----------|--------------|
| "Guia: Como escolher uma agência de sites" | Sites |
| "Checklist: O que sua landing page precisa ter" | Landing Pages |
| "5 erros que matam conversões no e-commerce" | Lojas Virtuais |
| "Guia: SEO em 2024 - O que realmente funciona" | SEO |
| "Automação: Por onde começar" | Automação |

---

## Email 4: Proposta de Consultoria (Dia 3)

**Assunto:** [Nome], posso te ajudar com isso?

**Corpo:**

```
Oi, [Nome]!

跟进 (follow-up). Sei que você tá avaliando suas opções, e é completamente normal.

Quer te fazer uma proposta: Que tal uma conversa de 20 minutos, sem compromisso?

Nessa conversa a gente:
- Entende melhor sua situação
- Te conto o que usually funciona nesse tipo de projeto
- Te dou algumas ideias, mesmo que você não contrate a gente

Funciona pra você? 
→ [Link para agendamento] ou responde aqui mesmo com seus horários.

Abraço,
[Seu nome]
PW Labs
```

---

## Email 5: Follow-up Final (Dia 5)

**Assunto:** [Nome], última tentativa 😅

**Corpo:**

```
Oi, [Nome]!

Sei que você tá ocupado. Talvez esse email tenha checido no momento certo, talvez não.

Deixa eu te deixar com um thought:

A maioria das pessoas que esperam demais pra resolver issoacabam gastando mais tempo e dinheiro do que precisaria.

Se ainda tiver interesse em [serviço], me diz. Se não, tudo certo, desejo sorte no seu projeto!

Se quiser conversar só pra tirar dúvidas, o canal tá sempre aberto.

Abraço,
[Seu nome]
PW Labs
```

---

## Automação no Supabase

```sql
-- Criar tabela de sequência de emails
CREATE TABLE email_sequence (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  email_number INT,
  sent_at TIMESTAMP,
  opened_at TIMESTAMP,
  clicked_at TIMESTAMP
);

-- Trigger para iniciar sequência quando novo lead entra
CREATE OR REPLACE FUNCTION start_email_sequence()
RETURNS TRIGGER AS $$
BEGIN
  -- Agendar emails para os próximos dias
  INSERT INTO email_sequence (lead_id, email_number, scheduled_for)
  VALUES 
    (NEW.id, 1, NOW()),
    (NEW.id, 2, NOW() + INTERVAL '1 day'),
    (NEW.id, 3, NOW() + INTERVAL '2 days'),
    (NEW.id, 4, NOW() + INTERVAL '3 days'),
    (NEW.id, 5, NOW() + INTERVAL '5 days');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

---

## Configuração no Resend (ou similar)

### Variáveis de Personalização
- `{{nome}}` - Primeiro nome do lead
- `{{servico}}` - Serviço de interesse
- `{{telefone}}` - WhatsApp da PW Labs
- `{{agendamento}}` - Link do calendly

### Regras de Envio
- **Dia 0:** Imediato após lead entrar
- **Horário:** 9h ou 14h (evitar noite)
- **Se abrir →** aguardar próximo email normal
- **Se não abrir →** email alternativo com assunto diferente
- **Se responder →** pausar sequência e marcar como "quente"

---

## Próximos Passos

1. ✅ Sequência criada (este arquivo)
2. ⏳ Criar materiais (PDFs)
3. ⏳ Configurar automação no Supabase
4. ⏳ Conectar com Resend/Brevo
5. ⏳ Testar fluxo completo
