// Dados do clone pwlabs — estrutura fiel do heyd.com.br,
// copy da pwlabs, paleta magenta no lugar de verde.

export const WHATSAPP_URL =
  "https://wa.me/5567996910585?text=Ol%C3%A1%2C%20vim%20pela%20landing%20da%20PWlabs";
export const WHATSAPP_DISPLAY = "(67) 99691-0585";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Soluções",
    href: "#solucoes",
    children: [
      { label: "Sites institucionais", href: "#solucoes" },
      { label: "Lojas virtuais", href: "#solucoes" },
      { label: "Landing pages", href: "#solucoes" },
      { label: "Tráfego pago", href: "#solucoes" },
      { label: "Automação", href: "#solucoes" },
      { label: "SEO", href: "#solucoes" },
      { label: "Aplicativos", href: "#solucoes" },
    ],
  },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export type Stat = {
  num: string;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { num: "500", suffix: "+", label: "projetos entregues" },
  { num: "A+", suffix: "", label: "Performance A+ garantida" },
  { num: "< 1", suffix: "s", label: "Carrega em menos de 1 segundo" },
  { num: "98", suffix: "", label: "Score médio das páginas" },
];

export type Service = {
  num: string;
  slug: string;
  title: string;
  description: string;
  icon: "site" | "loja" | "landing" | "trafego" | "auto" | "seo" | "logos" | "copy" | "app";
  longDescription: string;
  whenMakesSense: string[];
};

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "sites-institucionais",
    icon: "site",
    title: "Sites institucionais",
    description: "Marca sólida, navegação clara, resultado que sustenta.",
    longDescription:
      "Um site institucional não é só um cartão de visita digital. É a primeira impressão que define se o cliente vai te levar a sério ou fechar a aba em três segundos. A gente desenha e escreve cada página pensando em clareza, navegação intuitiva e em passar confiança — do hero até a página de contato.",
    whenMakesSense: [
      "Você tá começando agora e precisa de presença online sólida",
      "Sua marca cresceu e o site atual não acompanha mais",
      "Você quer consolidar tudo num lugar que o cliente entende",
    ],
  },
  {
    num: "02",
    slug: "lojas-virtuais",
    icon: "loja",
    title: "Lojas virtuais",
    description: "E-commerce completo, do produto ao checkout.",
    longDescription:
      "Loja virtual bem feita não é só colocar produtos numa página. É garantir que o cliente encontre o que procura, se sinta seguro pra comprar e finalize sem fricção. A gente estrutura categorias, copy de produto, fluxo de checkout e integrações pra sua loja vender de verdade.",
    whenMakesSense: [
      "Você quer vender online e precisa de uma loja que funciona",
      "Sua loja atual tem boa aparência mas não vende",
      "Você quer expandir de venda presencial pra online",
    ],
  },
  {
    num: "03",
    slug: "landing-pages",
    icon: "landing",
    title: "Landing pages",
    description: "Página única, objetivo único é conversão.",
    longDescription:
      "Landing page é o tipo de página mais direta que existe: um objetivo, uma ação. A gente trabalha copy, design e estrutura pra cada elemento ter uma função — e removemos o que não contribui. Resultado: mais cliques, mais Leads, mais vendas.",
    whenMakesSense: [
      "Você vai rodar tráfego pago e precisa de página pra receber",
      "Você tá lançando produto e quer página de captura",
      "Você quer testar uma oferta específica",
    ],
  },
  {
    num: "04",
    slug: "trafego-pago",
    icon: "trafego",
    title: "Tráfego pago",
    description: "Campanhas que levam a pessoa certa até você.",
    longDescription:
      "Tráfego pago sem estratégia é dinheiro queimado. A gente planeja cada campanha com segmentação, copy e criativos que conversam com o público certo. Meta Ads e Google Ads, com leitura clara do que tá funcionando e do que precisa ajustar.",
    whenMakesSense: [
      "Você tem um produto/serviço pronto e quer escalar aquisição",
      "Você quer testar canais de tráfego antes de investir alto",
      "Suas campanhas atuais não estão performando",
    ],
  },
  {
    num: "05",
    slug: "automacao",
    icon: "auto",
    title: "Automação",
    description: "Fluxos inteligentes pra liberar tempo do time.",
    longDescription:
      "Automação não é mágica — é processo bem desenhado que roda no piloto automático. A gente identifica gargalos do seu fluxo (captação, follow-up, integração entre ferramentas) e cria automações que economizam horas toda semana.",
    whenMakesSense: [
      "Seu time perde tempo com tarefas repetitivas",
      "Você tem ferramentas que não conversam entre si",
      "Você quer escalar sem aumentar headcount",
    ],
  },
  {
    num: "06",
    slug: "seo",
    icon: "seo",
    title: "SEO",
    description: "Posicionamento orgânico construído com método.",
    longDescription:
      "SEO não é feitiço, é método. A gente trabalha os fundamentos técnicos (performance, estrutura, schema), pesquisa de palavras-chave com intenção de compra e produção de conteúdo alinhada ao seu funil. Resultado: tráfego orgânico que converte, não só visitas.",
    whenMakesSense: [
      "Você quer aparecer quando o cliente te procura no Google",
      "Seu site tem bom tráfego orgânico mas não converte",
      "Você quer reduzir dependência de tráfego pago no longo prazo",
    ],
  },
  {
    num: "07",
    slug: "identidade-visual",
    icon: "logos",
    title: "Identidade visual",
    description: "Identidade visual que sustenta a marca em qualquer ponto de contato.",
    longDescription:
      "Identidade visual não é só logo. É o sistema que faz sua marca parecer a mesma pessoa em qualquer lugar — site, redes sociais, embalagem, apresentação. A gente cria do zero (ou refina o que você tem) com aplicação prática em todos os pontos.",
    whenMakesSense: [
      "Você tá começando e quer marca profissional desde o dia 1",
      "Sua marca atual tá inconsistente entre materiais",
      "Você tá expandindo e precisa de identidade escalável",
    ],
  },
  {
    num: "08",
    slug: "copywriting",
    icon: "copy",
    title: "Copywriting",
    description: "Texto estratégico escrito pra vender, com a voz da sua marca.",
    longDescription:
      "Copy bom não decora — opera. A gente pesquisa o que faz seu cliente decidir, escreve com a voz da sua marca e testa antes de publicar. Copy de página, e-mail, anúncio, blog, apresentação — qualquer texto que precisa convencer.",
    whenMakesSense: [
      "Você tem um produto bom mas o texto não vende",
      "Sua marca precisa de voz consistente em vários canais",
      "Você quer escalar conteúdo sem perder qualidade",
    ],
  },
];

export type Client = {
  name: string;
};

export const CLIENTS: Client[] = [
  { name: "Felipe Souto" },
  { name: "Marina Velasco" },
  { name: "Rafael Andrade" },
  { name: "Camila Reis" },
  { name: "Dr. Lucas Meira" },
  { name: "Beatriz Campos" },
  { name: "Gustavo Tanaka" },
  { name: "Helena Ribeiro" },
  { name: "Joana Mendes" },
  { name: "Pedro Alvarenga" },
  { name: "Renata Vidal" },
  { name: "Thiago Nasser" },
];

export type Case = {
  name: string;
  tagline: string;
  category: string;
  variant: number;
};

export const CASES: Case[] = [
  { name: "Loja de Moda Feminina", tagline: "E-commerce · Coleção cápsula", category: "Lojas Virtuais", variant: 1 },
  { name: "Infoproduto de Emagrecimento", tagline: "Lançamento · Lista de espera", category: "Landing Pages", variant: 2 },
  { name: "Clínica de Estética Avançada", tagline: "Saúde · Captação particular", category: "Landing Pages", variant: 3 },
  { name: "Consultório Odontológico", tagline: "Saúde · Convênios e particular", category: "Sites", variant: 4 },
  { name: "Escola de Idiomas Online", tagline: "Educação · Matrículas", category: "Landing Pages", variant: 5 },
  { name: "Restaurante Japonês", tagline: "Alimentação · Delivery e reservas", category: "Sites", variant: 6 },
  { name: "Academia de Crossfit", tagline: "Serviço · Captação local", category: "Landing Pages", variant: 7 },
  { name: "Agência de Marketing", tagline: "Serviço · B2B qualificado", category: "Sites", variant: 8 },
  { name: "Curso de Investimentos", tagline: "Infoproduto · Lançamento perpétuo", category: "Landing Pages", variant: 9 },
];

export type TimelineStep = {
  num: string;
  when: string;
  title: string;
  description: string;
};

export const TIMELINE_STEPS: TimelineStep[] = [
  { num: "01", when: "DIA 1", title: "Conversa de 20 min", description: "Você conta o que precisa e pra quem vende. No final da ligação, escopo, prazo e preço tão fechados." },
  { num: "02", when: "DIAS 2 A 4", title: "Esboço pra aprovar", description: "Você vê o texto e a estrutura da página antes de qualquer coisa ser codificada. Aprova ou pede ajustes até ficar do seu jeito." },
  { num: "03", when: "DIAS 5 A 12", title: "Construção", description: "Página no ar em ambiente de teste, com velocidade, SEO técnico e botão de WhatsApp. Você acompanha cada dia." },
  { num: "04", when: "DIA 15", title: "Publicação", description: "Domínio configurado, Google Search Console conectado, e você recebe o acesso pra editar o que quiser depois." },
];

export type DetailBlock = {
  eyebrow: string;
  title: string;
  bold: string;
  description: string;
  bullets: string[];
  emoji: string;
  reversed: boolean;
};

export const DETAIL_BLOCKS: DetailBlock[] = [
  {
    eyebrow: "Tráfego pago",
    title: "Seu público certo, no momento certo.",
    bold: "momento certo",
    description:
      "Campanhas pensadas pra levar a pessoa certa até a página certa — sem desperdiçar orçamento em clique que não converte.",
    bullets: [
      "Gestão de Meta Ads e Google Ads com olhar estratégico",
      "Segmentação refinada com base em intenção",
      "Landing pages alinhadas com a campanha",
      "Relatórios mensais com leitura clara do que importa",
    ],
    emoji: "📈",
    reversed: false,
  },
  {
    eyebrow: "Criação de sites",
    title: "Sua marca, do jeito certo.",
    bold: "jeito certo",
    description:
      "Site institucional ou landing page desenhada pra converter — visual único, copy estratégico, performance no topo.",
    bullets: [
      "Design exclusivo, do briefing ao lançamento",
      "Copy escrito pra vender, não pra impressionar",
      "Responsivo em todas as telas",
      "Otimização técnica pra performance e SEO",
    ],
    emoji: "🏢",
    reversed: true,
  },
  {
    eyebrow: "SEO orgânico",
    title: "Quem te procura no Google te encontra primeiro.",
    bold: "primeiro",
    description:
      "SEO não é feitiço — é método. A gente trabalha os fundamentos pra trazer tráfego que converte de verdade.",
    bullets: [
      "Pesquisa de palavras-chave com foco em intenção",
      "Estrutura técnica de página e performance",
      "Conteúdo de blog alinhado ao funil",
      "Relatórios mensais com leitura clara",
    ],
    emoji: "🔍",
    reversed: false,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Minha página antiga era bonita, mas ninguém fechava. A nova virou a principal fonte de leads.",
    name: "Dr. Felipe Souto",
    role: "Dermatologista",
    avatar: "F",
  },
  {
    quote: "Já queimei dinheiro com designer que só entregava visual. Aqui a página foi escrita pensando em venda.",
    name: "Marina Velasco",
    role: "Infoprodutora",
    avatar: "M",
  },
  {
    quote: "Ficou pronto rápido e demos qualificadas começaram a chegar logo. Comunicação direta.",
    name: "Rafael Andrade",
    role: "CEO, plataforma SaaS",
    avatar: "R",
  },
  {
    quote: "A equipe entendeu o que eu precisava antes mesmo de eu terminar de explicar. Recomendo sem pensar.",
    name: "Camila Reis",
    role: "Coach de Carreira",
    avatar: "C",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  { question: "Como é a dinâmica do projeto?", answer: "A gente conduz você por quatro etapas claras: conversa, estratégia, desenvolvimento e entrega. Você acompanha cada fase, sem intermediário." },
  { question: "Vocês entregam só o visual ou também o código?", answer: "A gente cuida de tudo: estratégia, copy, design e publicação. Você recebe o site no ar, com domínio e tudo configurado." },
  { question: "Posso pedir ajustes depois da entrega?", answer: "Sim. Você vai ajustando os detalhes com a gente até bater o martelo, e depois que o site tá no ar você tem direito a uma rodada de ajustes gratuita pra qualquer necessidade que aparecer — ou fecha um plano de manutenção mensal." },
  { question: "Como funciona o pagamento?", answer: "50% no início do projeto e 50% na entrega. Aceito Pix, transferência ou cartão. Nota fiscal emitida se precisar." },
  { question: "Vocês atendem cliente de fora do Brasil?", answer: "Sim, já atendemos clientes em Portugal, EUA e Reino Unido. Comunicação 100% remota funciona bem." },
  { question: "Preciso ter o logo ou identidade visual prontos antes de começar?", answer: "Não necessariamente. Identidade visual é um serviço separado — se ainda não tiver, a gente resolve isso pra você antes de partir pra página." },
];

export type BlogSection = {
  title?: string;
  text: string;
  highlight?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  emoji: string;
  body: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "o-que-e-site-institucional-e-quando-voce-precisa-de-um",
    title: "Site institucional: pra que serve e quando vale a pena fazer um",
    excerpt: "É a página que mostra quem você é, o que faz e como te contratar. Sem complicação.",
    date: "12 ago 2026",
    tag: "Sites Institucionais",
    emoji: "🏢",
    body: [
      {
        text: "Site institucional é o 'site da empresa' que todo mundo conhece. Aquele que tem a home, a página 'sobre nós', os serviços, e um formulário de contato. É o cartão de visita que abre quando alguém digita o nome da sua empresa no Google. Se você tem um negócio e quer que a pessoa te ache sem precisar te chamar no WhatsApp antes, é isso que você precisa.",
        highlight: "É a página que sustenta a decisão de quem tá comparando você com a concorrência.",
      },
      {
        title: "O que separa um site que só existe de um que ajuda a vender",
        text: "O que só existe tem foto bonita, mas não diz pra que serve. Você entra, olha, e sai sem entender. O que ajuda a vender responde quatro perguntas em cinco segundos: o que vocês fazem, pra quem, por que confiar, e como contratar. Sem essas respostas, o visitante fecha a aba.",
      },
      {
        title: "Quando vale a pena fazer",
        text: "Funciona bem quando o cliente chega pesquisando — no Google, no Instagram, no LinkedIn — e precisa de uma página que sustente a decisão de te chamar. Se o lead vem todo de indicação e a página só precisa confirmar que a empresa existe, talvez um modelo mais simples resolva. A gente ajuda a decidir o que faz sentido pro seu caso.",
      },
    ],
  },
  {
    slug: "o-que-e-loja-virtual-e-o-que-faz-ela-vender-de-verdade",
    title: "Loja virtual: a sua loja de rua, só que na internet",
    excerpt: "É a versão online da sua loja física: vitrine, prateleira e caixa. Mas o caixa trava se você não cuidar.",
    date: "12 ago 2026",
    tag: "Lojas Virtuais",
    emoji: "🛒",
    body: [
      {
        text: "Loja virtual é a versão online da sua loja física. Tem a vitrine (a home), a prateleira (o catálogo de produtos), e o caixa (o checkout). A diferença é que na loja física o cliente pede ajuda pro vendedor, e na loja virtual ele se vira sozinho. Se algum desses três não funciona bem, ele abandona a compra e vai pra outra.",
        highlight: "A pessoa se vira sozinha. Se travar, ela vai pra outra loja.",
      },
      {
        title: "Onde a maioria das lojas perde venda",
        text: "A maioria das lojas online parece pronta — visual bonito, produtos no ar — mas perde venda em detalhe pequeno. Frete que só aparece no final do checkout, foto do produto sem noção de tamanho, botão de comprar que demora pra carregar, formulário pedindo cadastro antes de mostrar o preço. Cada uma dessas barreiras tira um pedaço da venda.",
      },
      {
        title: "O caminho de uma loja que vende bem",
        text: "A pessoa chega pela home, acha o que procura em dois cliques, entende o produto sem precisar perguntar, vê o frete e o prazo antes de decidir, e fecha o pagamento em poucos passos. Nada disso é mágica. É processo bem desenhado.",
      },
      {
        title: "Quando vale a pena fazer",
        text: "Vale a pena quando você já tem o que vender e quer parar de depender só de marketplace. Se você ainda tá testando o produto ou não tem estoque consistente, talvez começar com uma loja mais simples resolva primeiro. A gente ajuda a escolher o caminho.",
      },
    ],
  },
  {
    slug: "o-que-e-landing-page-e-quando-usar",
    title: "Landing page: pra que serve e quando ela vale mais que um site inteiro",
    excerpt: "É uma página feita pra uma ação só. Sem menu, sem distração, sem opção de 'ficar olhando'.",
    date: "12 ago 2026",
    tag: "Landing Pages",
    emoji: "🎯",
    body: [
      {
        text: "Landing page é uma página feita pra uma coisa só: levar a pessoa a uma ação. Comprar, baixar, se cadastrar, agendar. Sem menu com cinco opções, sem 'voltar pra home', sem link pra outras páginas. A pessoa entra, lê, e decide. É o contrário de um site comum, que oferece vários caminhos.",
        highlight: "Quanto mais botões, menos cliques.",
      },
      {
        title: "Quando ela vale mais que um site inteiro",
        text: "Quando você vai rodar um anúncio no Google ou no Instagram e precisa de um lugar específico pra receber quem clicou. Em vez de mandar o clique pra home do seu site (que tem mil opções e nenhuma convicção), você manda pra uma página que fala exatamente daquela oferta, pra aquela pessoa.",
      },
      {
        title: "O que decide se ela converte",
        text: "Três coisas. A primeira é a primeira dobra: o visitante precisa entender em cinco segundos o que é, pra quem é, e o que ele ganha. A segunda é a quantidade de opções: quanto mais botões, menos cliques. A terceira é o que vem depois — formulário curto, passo único, sem pedir o que a pessoa não tá pronta pra dar.",
      },
      {
        title: "Quando vale a pena fazer",
        text: "Vale a pena quando você vai investir em anúncio e quer saber se o clique virou cliente. Se você ainda não tem o que anunciar, ou se a oferta ainda tá confusa, primeiro resolve isso. Landing page é a entrega final de uma campanha — não o começo.",
      },
    ],
  },
  {
    slug: "o-que-e-trafego-pago-e-quando-faz-sentido-anunciar",
    title: "Tráfego pago: por que tanto dinheiro some sem dar retorno",
    excerpt: "É pagar pra aparecer pra pessoa certa na hora certa. Parece simples, mas é onde a maioria perde dinheiro.",
    date: "12 ago 2026",
    tag: "Tráfego Pago",
    emoji: "📈",
    body: [
      {
        text: "Tráfego pago é pagar pra sua empresa aparecer na frente de uma pessoa enquanto ela navega. No Instagram, no Google, no YouTube, no Facebook. Você escolhe pra quem mostrar, monta o anúncio, e cada vez que alguém clica você paga um valor. O resto é estratégia.",
        highlight: "Anunciar não é a mesma coisa que ter resultado.",
      },
      {
        title: "Por que tanto dinheiro some sem dar retorno",
        text: "Muita gente coloca anúncio no ar, gasta um valor, e não entende por que não apareceu cliente. Na maioria das vezes o problema é um de três: a oferta não tá clara, o público tá errado, ou a página que recebe o clique não convence. Corrigir uma dessas três resolve a maioria dos casos.",
      },
      {
        title: "Como funciona quando dá certo",
        text: "Você tem uma oferta. A oferta atende um tipo de pessoa. Essa pessoa usa Instagram, ou pesquisa no Google, ou assiste vídeo no YouTube. Você monta um anúncio que fala com ela, manda pra uma página que fecha a venda, e mede o que acontece. Se não tá fechando, ajusta uma peça por vez até funcionar.",
      },
      {
        title: "Quando vale a pena anunciar",
        text: "Vale a pena quando você tem o que vender, sabe pra quem, e a página aguenta receber. Se a oferta ainda não foi testada, ou se você não tem estrutura pra atender o que aparecer, o dinheiro entra antes da hora. A gente ajuda a montar a ordem certa antes de gastar.",
      },
    ],
  },
  {
    slug: "o-que-e-automacao-de-processos-e-quando-faz-diferenca",
    title: "Automação de processos: o que vale colocar no piloto automático (e o que não vale)",
    excerpt: "É deixar o computador fazer o que você faz toda semana igual. Não é mágica — é processo bem desenhado.",
    date: "12 ago 2026",
    tag: "Automação",
    emoji: "⚙️",
    body: [
      {
        text: "Automação é o computador fazer por você aquela tarefa que se repete toda semana. Mandar a mesma mensagem de boas-vindas pra cada cliente novo, copiar dado de um sistema pra outro, lembrar o lead que sumiu, mandar boleto na data certa. Tudo que é chato e repetitivo pode virar um fluxo que roda sozinho.",
        highlight: "Automação não conserta processo ruim. Só escala ele.",
      },
      {
        title: "O que vale a pena automatizar",
        text: "Funciona bem em coisas claras. Lead novo entra no sistema, recebe uma mensagem automática, cai na lista do vendedor, e dois dias depois recebe um follow-up — tudo sem ninguém clicar em nada. Cliente fecha compra, recebe o boleto, o acesso, e a pesquisa de satisfação — tudo na sequência certa, sem ninguém esquecer.",
      },
      {
        title: "O que não vale",
        text: "Se a tarefa que você faz toda semana é confusa, automatizar só faz a confusão rodar mais rápido. Antes de colocar no piloto automático, precisa entender o passo a passo, ver onde trava, e decidir o que vale mesmo deixar com a máquina e o que tem que continuar com gente.",
      },
      {
        title: "Quando vale a pena fazer",
        text: "Vale a pena quando você ou alguém do seu time perde horas toda semana com a mesma tarefa. Se o processo ainda muda toda hora, ou se cada caso é muito diferente do outro, talvez não tenha como automatizar ainda. A gente ajuda a mapear antes de mexer.",
      },
    ],
  },
  {
    slug: "o-que-e-seo-e-quanto-tempo-leva-pra-funcionar",
    title: "SEO: quanto tempo leva até aparecer no Google (e por que não é da noite pro dia)",
    excerpt: "É fazer seu site aparecer quando alguém pesquisa no Google. Não é mágica — e não é da noite pro dia.",
    date: "12 ago 2026",
    tag: "SEO",
    emoji: "🔍",
    body: [
      {
        text: "SEO é o trabalho de fazer seu site aparecer nas primeiras posições do Google quando alguém pesquisa por aquilo que você vende. Se você tem uma loja de colchões em Campo Grande e a pessoa digita 'colchão campo grande', SEO é o que faz você aparecer no topo — em vez de ficar na página 5, onde ninguém clica.",
        highlight: "A maioria das pessoas clica nos primeiros resultados e nem olha o resto.",
      },
      {
        title: "Por que SEO não é da noite pro dia",
        text: "O que frustra muita gente é esperar resultado em uma semana. Não funciona assim. SEO leva meses até começar a aparecer, e o resultado cresce com o tempo. Não é maratona cega — é construção com marco de checagem, dá pra saber todo mês se tá evoluindo.",
      },
      {
        title: "As três partes que precisam ser construídas juntas",
        text: "SEO funciona em três camadas. A primeira é a técnica: site rápido, organizado, que o Google entende. A segunda é o conteúdo: páginas que respondem o que a pessoa tá pesquisando. A terceira é a autoridade: outros sites relevantes apontando pro seu. As três juntas. Uma só, não sustenta.",
      },
      {
        title: "Quando SEO faz sentido pra você",
        text: "Vale a pena quando você quer aparecer quando o cliente te procura sozinho, sem precisar pagar por cada clique. Se você precisa de resultado rápido, SEO não é a saída — tráfego pago resolve mais rápido. SEO é pra construir presença que dura. A gente monta a estratégia dosando os dois.",
      },
    ],
  },
  {
    slug: "o-que-e-identidade-visual-e-como-saber-se-voce-precisa",
    title: "Identidade visual: por que o logo sozinho não segura a marca",
    excerpt: "É o que faz sua marca parecer a mesma em todo lugar. Não é só o logo.",
    date: "12 ago 2026",
    tag: "Identidade Visual",
    emoji: "🎨",
    body: [
      {
        text: "Identidade visual é o conjunto de coisas que faz sua marca parecer a mesma em todo lugar. A cor, o tipo de letra, o estilo das fotos, o jeito do logo, o tom das postagens. Quando você vê um post e em cinco segundos sabe que é daquela marca — é identidade visual funcionando. Quando você vê o mesmo negócio e parece três empresas diferentes em cada lugar — é o que tá faltando.",
        highlight: "Logo é só uma parte. O pacote é maior.",
      },
      {
        title: "O que entra no pacote",
        text: "O logo, as cores que podem e as que não podem ser usadas, o tipo de letra dos títulos e do texto, o estilo de foto, o estilo de ícone, como o logo se comporta em fundo claro, fundo escuro, tamanho pequeno. Tudo isso junto.",
      },
      {
        title: "Por que o logo sozinho não segura",
        text: "Funciona bem quando a marca precisa parecer profissional em vários pontos de contato ao mesmo tempo: site, Instagram, cartão, apresentação, embalagem. Sem isso, cada material é resolvido do jeito do designer da vez, e o resultado vira uma colcha de retalhos.",
      },
      {
        title: "Quando vale a pena fazer",
        text: "Vale a pena quando a marca tá nascendo e quer começar certa, ou quando já existe e os materiais não conversam entre si. Se a marca é super pequena e tem um material só, talvez baste o logo bem feito. A gente avalia o que faz sentido pra cada momento.",
      },
    ],
  },
  {
    slug: "o-que-e-copywriting-e-quando-ele-muda-resultado",
    title: "Copywriting: o que é, de verdade, e quando faz diferença no resultado",
    excerpt: "É o texto que faz a pessoa decidir. Botão, e-mail, página, anúncio — tudo que lê é copy.",
    date: "12 ago 2026",
    tag: "Copywriting",
    emoji: "✍️",
    body: [
      {
        text: "Copywriting é o trabalho de escrever os textos que fazem a pessoa decidir. O título da página, a frase do anúncio, o texto do botão, o e-mail de cobrança, a legenda do Instagram, a mensagem que o lead recebe no WhatsApp. Tudo que é lido e tem objetivo de levar a uma ação é copy.",
        highlight: "O texto pode ser feio, desde que funcione. E pode ser lindo, e não funcionar.",
      },
      {
        title: "O que não é copywriting",
        text: "Não é 'escrever bem'. Escrever bem é redação. Copywriting é escrever pra um objetivo: comprar, clicar, mandar mensagem, baixar. O que importa é o resultado que o texto gera, não se está poeticamente correto.",
      },
      {
        title: "Onde a coisa aparece de verdade",
        text: "Na primeira frase que a pessoa lê. Se ela não conecta com o que a pessoa tá procurando, o resto da página não importa. A pessoa vai embora em dois segundos. Por isso o título, o subtítulo, a primeira linha de cada seção — tudo isso é copy, e tudo isso decide se a pessoa continua.",
      },
      {
        title: "Quando vale a pena investir",
        text: "Vale a pena quando o que você oferece é bom, mas o texto não tá comunicando isso. Às vezes a oferta é fraca — aí copy não resolve. Mas se o problema é a forma de falar, copy pode mudar a conversão. A gente avalia antes de escrever.",
      },
    ],
  },
];
