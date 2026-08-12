type CoverProps = { slug: string; className?: string };

function GlowDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF0570" />
        <stop offset="100%" stopColor="#4A001F" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="0.18" cy="0.18" r="0.85">
        <stop offset="0%" stopColor="#FF99C3" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#FF0570" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

export function BlogCover({ slug, className }: CoverProps) {
  const Art = Covers[slug];
  return (
    <svg
      className={className}
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Capa do artigo"
    >
      <GlowDefs id={slug} />
      <rect width="400" height="250" fill={`url(#${slug})`} />
      <rect width="400" height="250" fill={`url(#${slug}-glow)`} />
      {Art && <Art />}
    </svg>
  );
}

type Art = () => JSX.Element;

const Covers: Record<string, Art> = {
  // 1. Sites institucionais — duas janelas: site sem argumento (esmaecido) vs site com hierarquia (destaque)
  "o-que-faz-um-site-institucional-vender-de-verdade": () => (
    <g>
      {/* Card da esquerda: site que só existe */}
      <g opacity="0.45">
        <rect x="50" y="55" width="130" height="140" rx="8" fill="none" stroke="#fff" strokeWidth="1.5" />
        <line x1="50" y1="78" x2="180" y2="78" stroke="#fff" strokeWidth="1" />
        <rect x="62" y="94" width="60" height="6" rx="2" fill="#fff" fillOpacity="0.6" />
        <rect x="62" y="110" width="80" height="3" rx="1" fill="#fff" fillOpacity="0.3" />
        <rect x="62" y="120" width="70" height="3" rx="1" fill="#fff" fillOpacity="0.3" />
        <rect x="62" y="130" width="50" height="3" rx="1" fill="#fff" fillOpacity="0.3" />
        <rect x="62" y="160" width="40" height="14" rx="3" fill="#fff" fillOpacity="0.4" />
        <line x1="40" y1="125" x2="42" y2="125" stroke="#fff" strokeWidth="2" />
      </g>

      {/* Seta entre os dois */}
      <g transform="translate(200 125)">
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 -5 L10 0 L6 5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Card da direita: site que vende */}
      <rect x="220" y="55" width="130" height="140" rx="8" fill="#fff" fillOpacity="0.1" stroke="#fff" strokeOpacity="0.95" strokeWidth="1.5" />
      <line x1="220" y1="78" x2="350" y2="78" stroke="#fff" strokeOpacity="0.6" strokeWidth="1" />
      <rect x="232" y="94" width="80" height="10" rx="2" fill="#fff" fillOpacity="0.98" />
      <rect x="232" y="112" width="100" height="3" rx="1" fill="#fff" fillOpacity="0.6" />
      <rect x="232" y="122" width="90" height="3" rx="1" fill="#fff" fillOpacity="0.6" />
      <rect x="232" y="132" width="70" height="3" rx="1" fill="#fff" fillOpacity="0.6" />
      <rect x="232" y="162" width="56" height="16" rx="3" fill="#fff" fillOpacity="0.98" />
      <text x="260" y="173" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#C8004F">CTA</text>

      {/* Labels embaixo */}
      <text x="115" y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#fff" fillOpacity="0.5" letterSpacing="1.5">EXISTE</text>
      <text x="285" y="215" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="800" fill="#fff" fillOpacity="0.98" letterSpacing="1.5">Vende</text>
    </g>
  ),

  // 2. Lojas virtuais — três produtos em sequência
  "loja-virtual-completa-o-que-importa-quando-o-cliente-vai-comprar": () => (
    <g>
      {[
        { x: 50, opacity: 0.55 },
        { x: 150, opacity: 0.75, featured: true },
        { x: 250, opacity: 0.55 },
      ].map(({ x, opacity, featured }) => (
        <g key={x}>
          <rect x={x} y="55" width="100" height="150" rx="10" fill="#fff" fillOpacity={featured ? 0.18 : 0.1} stroke="#fff" strokeOpacity={opacity} strokeWidth="1.5" />
          <rect x={x + 12} y="70" width="76" height="76" rx="6" fill="#fff" fillOpacity={opacity * 0.7} />
          <rect x={x + 12} y="158" width="50" height="5" rx="2" fill="#fff" fillOpacity={opacity} />
          <rect x={x + 12} y="170" width="32" height="4" rx="2" fill="#fff" fillOpacity={opacity * 0.6} />
          <rect x={x + 12} y="184" width="60" height="10" rx="3" fill="#fff" fillOpacity={opacity * 0.95} />
        </g>
      ))}
    </g>
  ),

  // 3. Landing pages — funil convertendo em uma página
  "landing-page-de-conversao-nao-e-so-design-bonito": () => (
    <g>
      <rect x="60" y="55" width="280" height="140" rx="10" fill="#fff" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.5" />
      <rect x="80" y="78" width="160" height="14" rx="3" fill="#fff" fillOpacity="0.95" />
      <rect x="80" y="104" width="220" height="5" rx="2" fill="#fff" fillOpacity="0.4" />
      <rect x="80" y="116" width="200" height="5" rx="2" fill="#fff" fillOpacity="0.4" />
      <rect x="80" y="128" width="180" height="5" rx="2" fill="#fff" fillOpacity="0.4" />
      <rect x="80" y="150" width="100" height="22" rx="6" fill="#fff" fillOpacity="0.98" />
      <text x="130" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#C8004F">CTA</text>
      <g transform="translate(310 90)">
        <circle r="18" fill="#fff" fillOpacity="0.95" />
        <path d="M-6 0 L6 0 M2 -5 L6 0 L2 5" stroke="#C8004F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <line x1="200" y1="205" x2="200" y2="225" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="200" y="240" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff" fillOpacity="0.7" letterSpacing="2">1 OBJETIVO</text>
    </g>
  ),

  // 4. Tráfego pago — funil de público (frio → morno → quente → cliente)
  "trafego-pago-onde-o-dinheiro-realmente-some": () => (
    <g>
      {[
        { y: 55, w: 300, label: "frio", op: 0.35 },
        { y: 95, w: 240, label: "morno", op: 0.55 },
        { y: 135, w: 170, label: "quente", op: 0.78 },
        { y: 175, w: 90, label: "cliente", op: 0.98 },
      ].map(({ y, w, label, op }, i) => {
        const x = (400 - w) / 2;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height="28" rx="6" fill="#fff" fillOpacity={op} />
            <text
              x={x + w / 2}
              y={y + 18}
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize="11"
              fontWeight="700"
              fill="#4A001F"
              letterSpacing="1.5"
            >{label.toUpperCase()}</text>
          </g>
        );
      })}
      <line x1="200" y1="35" x2="200" y2="50" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="200" y1="210" x2="200" y2="225" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
    </g>
  ),

  // 5. Automação — duas engrenagens
  "automacao-de-processos-o-que-vale-a-pena-rodar-no-piloto-automatico": () => (
    <g>
      <g transform="translate(150 130)">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = Math.cos(a) * 38;
          const y1 = Math.sin(a) * 38;
          const x2 = Math.cos(a) * 50;
          const y2 = Math.sin(a) * 50;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeOpacity="0.9" strokeWidth="6" strokeLinecap="round" />;
        })}
        <circle r="38" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="3" />
        <circle r="10" fill="#fff" fillOpacity="0.95" />
      </g>
      <g transform="translate(255 175)">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4 + Math.PI / 8;
          const x1 = Math.cos(a) * 24;
          const y1 = Math.sin(a) * 24;
          const x2 = Math.cos(a) * 32;
          const y2 = Math.sin(a) * 32;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />;
        })}
        <circle r="24" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="2.5" />
        <circle r="6" fill="#fff" fillOpacity="0.75" />
      </g>
    </g>
  ),

  // 6. SEO — lupa grande com "1º" dentro
  "seo-o-que-funciona-depois-que-voce-parou-de-esperar-resultado-magico": () => (
    <g>
      <g transform="translate(140 115)">
        <circle r="60" fill="#fff" fillOpacity="0.08" />
        <circle r="60" fill="none" stroke="#fff" strokeOpacity="0.95" strokeWidth="5" />
        <text
          x="0"
          y="10"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="44"
          fontWeight="800"
          fill="#fff"
          fillOpacity="0.98"
        >1°</text>
        <line x1="42" y1="42" x2="90" y2="90" stroke="#fff" strokeOpacity="0.95" strokeWidth="8" strokeLinecap="round" />
      </g>
      <rect x="50" y="190" width="220" height="28" rx="14" fill="#fff" fillOpacity="0.12" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="68" y="209" fontFamily="sans-serif" fontSize="13" fill="#fff" fillOpacity="0.7">resultado mágico</text>
    </g>
  ),

  // 7. Identidade visual — paleta + logo geométrico
  "identidade-visual-muito-alem-de-um-logo-bonito": () => (
    <g>
      <rect x="50" y="55" width="55" height="55" rx="8" fill="#fff" fillOpacity="0.95" />
      <rect x="115" y="55" width="55" height="55" rx="8" fill="#fff" fillOpacity="0.7" />
      <rect x="180" y="55" width="55" height="55" rx="8" fill="#fff" fillOpacity="0.45" />
      <rect x="245" y="55" width="55" height="55" rx="8" fill="#fff" fillOpacity="0.25" />
      <rect x="310" y="55" width="40" height="55" rx="8" fill="#fff" fillOpacity="0.15" />
      <line x1="50" y1="135" x2="350" y2="135" stroke="#fff" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="78" cy="185" r="22" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="3" />
      <rect x="115" y="163" width="44" height="44" fill="#fff" fillOpacity="0.85" />
      <path d="M182 207 L200 165 L218 207 Z" fill="#fff" fillOpacity="0.9" />
      <rect x="245" y="163" width="44" height="44" fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="3" />
      <text x="317" y="195" textAnchor="middle" fontFamily="serif" fontSize="40" fontWeight="700" fill="#fff" fillOpacity="0.95">A</text>
    </g>
  ),

  // 8. Copywriting — bloco de texto com CTA destacado
  "copywriting-onde-o-texto-decide-se-a-pessoa-rola-ou-converte": () => (
    <g>
      <rect x="50" y="55" width="300" height="140" rx="10" fill="#fff" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="70" y="78" width="200" height="16" rx="3" fill="#fff" fillOpacity="0.95" />
      <rect x="70" y="108" width="260" height="5" rx="2" fill="#fff" fillOpacity="0.4" />
      <rect x="70" y="122" width="220" height="5" rx="2" fill="#fff" fillOpacity="0.4" />
      <rect x="70" y="136" width="180" height="5" rx="2" fill="#fff" fillOpacity="0.4" />
      <rect x="70" y="160" width="100" height="20" rx="5" fill="#fff" fillOpacity="0.98" />
      <text x="120" y="174" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#C8004F">CTA</text>
      <g transform="translate(280 90)">
        <line x1="0" y1="0" x2="0" y2="36" stroke="#fff" strokeOpacity="0.9" strokeWidth="3" strokeLinecap="round" />
        <path d="M-7 4 L0 -3 L7 4" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  ),

  // 9. Por que sua landing converte pouco — gráfico em queda
  "por-que-sua-landing-converte-pouco": () => (
    <g>
      <rect x="50" y="50" width="300" height="150" rx="10" fill="#fff" fillOpacity="0.06" />
      <line x1="50" y1="170" x2="350" y2="170" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="50" y1="80" x2="50" y2="170" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
      <polyline
        points="70,90 110,110 150,100 190,130 230,150 270,165 320,178"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.95"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="320" cy="178" r="6" fill="#fff" />
      <path d="M310 168 L320 178 L332 162" stroke="#4A001F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
    </g>
  ),

  // 10. As perguntas que economizam horas — checklist
  "perguntas-que-economizam-horas": () => (
    <g>
      <rect x="80" y="55" width="240" height="140" rx="10" fill="#fff" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
      {[
        { y: 85, checked: true },
        { y: 115, checked: true },
        { y: 145, checked: false },
        { y: 175, checked: false },
      ].map(({ y, checked }, i) => (
        <g key={i}>
          <rect x="100" y={y} width="14" height="14" rx="3" fill={checked ? "#fff" : "none"} stroke="#fff" strokeOpacity="0.7" strokeWidth="1.5" />
          {checked && (
            <path d={`M104 ${y + 8} L108 ${y + 12} L114 ${y + 5}`} stroke="#C8004F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <rect x="125" y={y + 3} width={i % 2 === 0 ? 140 : 100} height="6" rx="2" fill="#fff" fillOpacity={checked ? 0.85 : 0.4} />
        </g>
      ))}
    </g>
  ),

  // 11. Headline não é slogan — duas linhas, uma fraca e uma forte
  "headline-nao-e-slogan": () => (
    <g>
      <text x="200" y="100" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="34" fontWeight="500" fill="#fff" fillOpacity="0.45">
        Slogan.
      </text>
      <line x1="120" y1="118" x2="280" y2="118" stroke="#fff" strokeOpacity="0.3" strokeWidth="1" />
      <text x="200" y="180" textAnchor="middle" fontFamily="sans-serif" fontSize="32" fontWeight="800" fill="#fff" fillOpacity="0.98">
        HEADLINE
      </text>
      <path d="M70 175 L100 175" stroke="#fff" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" />
      <path d="M300 175 L330 175" stroke="#fff" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" />
    </g>
  ),
};
