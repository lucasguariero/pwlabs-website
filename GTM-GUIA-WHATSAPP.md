# Guia GTM — Rastrear cliques no WhatsApp como conversão

Este guia configura o Google Tag Manager para detectar cliques em links `wa.me`, disparar evento `lead_whatsapp` no GA4 e conversão `Lead` no Meta Pixel, incluindo os UTMs de origem.

---

## 1. Variáveis de URL (UTM)

No GTM, crie variáveis que capturam os parâmetros UTM da URL do visitante.

**Variáveis → New → Variable Type: URL**

| Nome da Variável | Component Type | Query Key |
|---|---|---|
| `utm_source` | URL | `utm_source` |
| `utm_medium` | URL | `utm_medium` |
| `utm_campaign` | URL | `utm_campaign` |
| `utm_term` | URL | `utm_term` |
| `utm_content` | URL | `utm_content` |

> Crie uma variável para cada parâmetro. Elas ficam vazias se o visitante entrou sem UTM.

---

## 2. Trigger — Clique no link do WhatsApp

**Triggers → New → Trigger Type: Click - All Elements**

Condições:
- **Some Clicks**
- `Click URL` **contains** `wa.me`

Nome: `Click - WhatsApp`

> Isso captura qualquer clique em `<a href="https://wa.me/...">` na página.

---

## 3. Tag GA4 — Evento de conversão

**Tags → New → Tag Type: Google Analytics: GA4 Event**

| Campo | Valor |
|---|---|
| Measurement ID | `G-XXXXXXXXXX` (seu ID do GA4) |
| Event Name | `lead_whatsapp` |
| Event Parameters | Ver tabela abaixo |

**Event Parameters** (clique em "Add Row" para cada):

| Parameter Name | Value |
|---|---|
| `utm_source` | `{{utm_source}}` |
| `utm_medium` | `{{utm_medium}}` |
| `utm_campaign` | `{{utm_campaign}}` |
| `utm_term` | `{{utm_term}}` |
| `utm_content` | `{{utm_content}}` |

**Triggering:** `Click - WhatsApp`

Nome da tag: `GA4 - Lead WhatsApp`

---

## 4. Tag Meta Pixel — Conversão

**Tags → New → Tag Type: Custom HTML**

Cole o código abaixo:

```html
<script>
  fbq('track', 'Lead', {
    content_name: 'whatsapp_click',
    utm_source: '{{utm_source}}',
    utm_medium: '{{utm_medium}}',
    utm_campaign: '{{utm_campaign}}'
  });
</script>
```

**Triggering:** `Click - WhatsApp`

Nome da tag: `Meta - Lead WhatsApp`

---

## 5. Tag Meta Pixel — Base (se ainda não tiver)

Se o Meta Pixel base não estiver instalado via GTM, adicione:

**Tags → New → Tag Type: Custom HTML**

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

**Triggering:** `All Pages`

Nome da tag: `Meta - Pixel Base`

---

## 6. Preview e teste

1. Clique em **Preview** no GTM
2. Abra o site (`pwlabs.vercel.app`)
3. Clique em qualquer botão de WhatsApp
4. No Tag Assistant, verifique:
   - `GA4 - Lead WhatsApp` → fired
   - `Meta - Lead WhatsApp` → fired
5. No GA4 → DebugView, confirme evento `lead_whatsapp` com os parâmetros
6. No Meta Events Manager, confirme evento `Lead`

---

## 7. Publicar

Tudo ok no Preview → **Submit** no GTM → Publish.

---

## Checklist rápido

- [ ] 5 variáveis de UTM criadas
- [ ] Trigger `Click - WhatsApp` com `wa.me`
- [ ] Tag GA4 com Measurement ID real
- [ ] Tag Meta com Pixel ID real
- [ ] Testado em Preview
- [ ] Publicado
