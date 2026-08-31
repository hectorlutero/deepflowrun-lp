/** BI Agent LP — structured copy (source: docs/bi-agent-lp-COPY.md v3.2) */

export const META = {
  title: "BI Agent — Seu BI no WhatsApp, recorte certo",
  description:
    "Integramos Power BI, Qlik, Looker, Tableau, Fabric, BigQuery e mais. Pergunte no WhatsApp — resposta com recorte certo, sem erro de filtro.",
};

export const CONNECTORS = [
  "Power BI",
  "Fabric",
  "Qlik",
  "Looker",
  "Tableau",
  "Excel",
  "DW",
  "BigQuery",
] as const;

export const SCENARIOS = [
  { icon: "plane" as const, title: "No avião", copy: "Número validado no bolso, sem laptop.", accent: "cyan" as const },
  { icon: "meeting" as const, title: "Na reunião", copy: "Pergunta na mesa, resposta em segundos.", accent: "teal" as const },
  { icon: "bolt" as const, title: "Antes deles", copy: "Quem exporta planilha decide depois.", accent: "green" as const },
];

export const PROBLEM_POINTS = [
  "Toda pergunta vira export, planilha paralela ou “deixa eu abrir o report”.",
  "O número chega tarde ou errado: card genérico, recorte trocado, meta que não bate com a linha certa.",
  "A diretoria decide no WhatsApp e no corredor. O BI ficou no desktop.",
];

export const HOW_IT_WORKS = [
  { n: "01", icon: "chat" as const, title: "Pergunta", copy: "Você pergunta em linguagem natural no canal que a equipe já usa." },
  { n: "02", icon: "tag" as const, title: "Recorte", copy: "Nós devolvemos período, unidade e linha declarados na resposta." },
  { n: "03", icon: "check" as const, title: "Prova", copy: "Cruzamos o valor com a fonte analítica antes de ir ao ar." },
];

export type ChatMessage = { role: "user" | "agent"; html: string };

export type ParadigmScene = {
  label: string;
  messages: ChatMessage[];
};

export type Paradigm = {
  id: string;
  name: string;
  desc: string;
  scenes: ParadigmScene[];
};

export const PARADIGMS: Paradigm[] = [
  {
    id: "correcao",
    name: "Correção",
    desc: "Na reunião alguém solta um número — você confere no WhatsApp antes de repetir ou decidir.",
    scenes: [
      {
        label: "Controladoria",
        messages: [
          {
            role: "user",
            html: 'Tão falando na reunião que a margem Rio em abril foi <strong>R$ 470 mil</strong>. Tá certo isso?',
          },
          {
            role: "agent",
            html: 'Esse <strong>470 mil</strong> é <strong>janeiro a abril juntos</strong>, não abril sozinho.<br><br>Para a reunião, o certo é <strong>R$ 352 mil</strong> · Rio · abril · linha margem. Quer que eu monto a frase pronta?',
          },
        ],
      },
      {
        label: "Comercial",
        messages: [
          {
            role: "user",
            html: "Tão dizendo que batemos <strong>112% da meta</strong> em março. Fecha isso?",
          },
          {
            role: "agent",
            html: "<strong>112%</strong> só fecha se você misturar meta de janeiro com venda de março.<br><br>Março contra meta de março: <strong>94%</strong> · mesma região. Quer o recorte antes de mandar no grupo?",
          },
        ],
      },
      {
        label: "RH",
        messages: [
          {
            role: "user",
            html: 'Na reunião falaram que o headcount tá <strong>estável</strong> esse mês. É isso mesmo?',
          },
          {
            role: "agent",
            html: 'Quem olha rápido fala “estável” — mas são <strong>−847</strong> vs mês passado · Sul · ativos.<br><br>Desligados de fevereiro ainda estavam no fato. Quer por região ou por BU?',
          },
        ],
      },
    ],
  },
  {
    id: "atencao",
    name: "Atenção",
    desc: "Pergunta inocente — o agente avisa o que costuma passar batido ou a confusão clássica daquele indicador.",
    scenes: [
      {
        label: "Controladoria",
        messages: [
          { role: "user", html: "Quanto fechou a receita líquida em março?" },
          {
            role: "agent",
            html: "Março · Brasil · receita líquida: <strong>R$ 12,4 mi</strong>.<br><br>Antes de levar pra reunião: <strong>38%</strong> disso é reconhecimento de contrato longo, não venda nova do mês. Quer que eu separe só o recorrente?",
          },
        ],
      },
    ],
  },
  {
    id: "insight",
    name: "Insight",
    desc: "Você pede o número — o agente traduz em implicação prática para decidir.",
    scenes: [
      {
        label: "Comercial",
        messages: [
          { role: "user", html: "Qual foi o ticket médio em março?" },
          {
            role: "agent",
            html: "Ticket médio março · enterprise · Sul: <strong>R$ 4,2 mil</strong> (+18% vs fev).<br><br>Do incremento, <strong>2 contas</strong> concentram <strong>41%</strong>. Sem elas, o ticket ficaria estável. Faz sentido blindar retenção antes de subir meta de aquisição?",
          },
        ],
      },
    ],
  },
  {
    id: "cross",
    name: "Cross-BI (Ponte)",
    desc: "O dado do seu recorte — ligado ao que outro time olha no dia a dia.",
    scenes: [
      {
        label: "RH → Operações",
        messages: [
          { role: "user", html: "Absenteísmo subiu em abril?" },
          {
            role: "agent",
            html: "Absenteísmo abril · planta SP: <strong>4,8%</strong> (+1,1 pp vs mar).<br><br>Operações aponta <strong>3 linhas</strong> com meta apertada no mesmo turno — padrão que costuma virar absenteísmo, não desengajamento. Quer cruzar com OTIF da semana?",
          },
        ],
      },
    ],
  },
];

export const PLATFORMS = [
  "Fabric",
  "Qlik",
  "Looker",
  "Tableau",
  "Excel",
  "DW",
  "BigQuery",
  "Power BI",
] as const;

export const PARTNERS = {
  kicker: "Parceiros",
  title: "Seja um Parceiro.",
  body: "Precisa oferecer IA sem construir o produto? Entregamos o BI Agent com a sua marca — você fica com o cliente.",
};

export const CHANNELS = [
  { id: "whatsapp", name: "WhatsApp", copy: "Decisão do dia a dia no bolso", primary: true },
  { id: "telegram", name: "Telegram", copy: "Resposta rápida, grupos, power user", primary: false },
  { id: "sms", name: "SMS", copy: "Uma linha, um número, recorte mínimo", primary: false },
  { id: "email", name: "E-mail", copy: "Recorte estruturado para board ou auditoria", primary: false },
] as const;

export const DEPARTMENTS = [
  "Comercial",
  "Controladoria",
  "Finanças",
  "Fiscal",
  "Contabilidade",
  "RH",
  "TI",
  "Jurídico",
  "Operações",
  "Supply chain",
  "Marketing",
  "Perdas",
  "Projetos",
  "Atendimento",
] as const;

export const SEGMENTS = [
  "Indústria",
  "Varejo",
  "Atacado",
  "Saúde",
  "Serviços financeiros",
  "Agronegócio",
  "Energia",
  "Logística",
  "Educação",
  "Telecom",
  "Construção",
  "Tech B2B",
] as const;

export const FAQ_ITEMS: Array<{ q: string; a: string }> = [
  {
    q: "O que é o BI Agent?",
    a: "Um agente de IA que responde perguntas sobre os seus dados em linguagem natural — no WhatsApp, Telegram, SMS ou e-mail — com número validado e recorte declarado.",
  },
  {
    q: "Substitui o Power BI (ou Qlik, Looker…)?",
    a: "Não. Consultamos a fonte analítica que você já tem. O report continua sendo o report.",
  },
  {
    q: "Com quais ferramentas vocês trabalham?",
    a: "Power BI, Fabric, Qlik, Looker, Tableau, Excel, DW, BigQuery e outras fontes via API ou semantic layer.",
  },
  {
    q: "Como sei que o número está certo?",
    a: "Validamos com âncoras na sua fonte e rodamos golden tests antes do go-live. Cada resposta mostra o recorte usado.",
  },
  {
    q: "Precisa ser Telegram?",
    a: "Não. WhatsApp é o canal principal; os demais são alternativas.",
  },
  {
    q: 'O que é um "pack"?',
    a: "A configuração do agente para um report ou área: métricas, aliases, validação e regras de recorte daquele BI.",
  },
  {
    q: "Quanto tempo para ir ao ar?",
    a: "Depende do report e da área. Uma demo de 15 min alinha escopo e prazo.",
  },
  {
    q: "Quem usa: diretor ou analista?",
    a: "Os dois. Diretor pergunta no bolso; analista confia que bate com a pivot — seja qual for a ferramenta.",
  },
  {
    q: "Funciona com planilha Excel?",
    a: "Sim, quando a planilha (ou modelo) é a fonte governada do dado. Avaliamos no diagnóstico.",
  },
  {
    q: "Dá para revenda / whitelabel?",
    a: "Sim. Conversamos para você vender com a sua marca — nós entregamos produto, validação e onboarding.",
  },
  {
    q: "Os dados passam por vocês?",
    a: "O agente consulta a fonte do cliente (cloud ou ambiente acordado). Detalhes de segurança alinhamos na demo.",
  },
  {
    q: "Qual a diferença para ChatGPT?",
    a: "ChatGPT não conhece o seu report. Nós consultamos a sua base, com recorte explícito e prova numérica.",
  },
  {
    q: "Precisa treinar a equipe?",
    a: "A pergunta é em linguagem natural. Opcional: sessão curta para o time saber o que o agente cobre.",
  },
  {
    q: "E depois do go-live?",
    a: "Suporte e evolução do pack conforme o report muda. Combinamos no contrato.",
  },
  {
    q: "Tem limite de perguntas?",
    a: "Definimos por cliente conforme volume e área. Transparente na proposta.",
  },
];

export const DEMO_SLIDES = [
  {
    id: "wa-correcao",
    channel: "whatsapp" as const,
    label: "WhatsApp · Correção",
    user: "O gerente falou que a margem da loja do Rio no mês passado foi de 10% só. Tá certo?",
    agent:
      "Rio · agosto · margem · 15%. Fechamento de mês concentra lançamentos — o salto de 10% para 15% costuma ser meta no fim do mês.",
    tag: "Rio · agosto · margem",
  },
  {
    id: "wa-atencao",
    channel: "whatsapp" as const,
    label: "WhatsApp · Atenção",
    user: "Quanto fechou a receita líquida em março?",
    agent: "R$ 12,4 mi — mas 38% é contrato longo, não venda nova.",
    tag: "Brasil · março · receita líquida",
  },
  {
    id: "telegram",
    channel: "telegram" as const,
    label: "Telegram · Ranking",
    user: "Top 3 regiões por margem em março?",
    agent: "1. Sul 14,2% · 2. Sudeste 11,8% · 3. Centro-Oeste 9,1%",
    tag: "março · margem · ranking",
  },
  {
    id: "sms",
    channel: "sms" as const,
    label: "SMS · Uma linha",
    user: "Margem SP fev?",
    agent: "8,4% vs meta · validado",
    tag: "",
  },
  {
    id: "email",
    channel: "email" as const,
    label: "E-mail · Board",
    user: "Subject: DRE Rio · maio",
    agent: "Resultado R$ 352k · recorte: Rio · maio · linha margem",
    tag: "anexo: recorte + linha DRE",
  },
];
