import type { Deck, Text } from "../types";

const L = {
  intro: { en: "Thesis", pt: "Tese" } satisfies Text,
  experience: { en: "Experience", pt: "Experiência" } satisfies Text,
  engine: { en: "Engine", pt: "Motor" } satisfies Text,
  connectors: { en: "Connectors", pt: "Conectores" } satisfies Text,
  contract: { en: "Data contract", pt: "Contrato de dados" } satisfies Text,
  delivery: { en: "Delivery", pt: "Entrega" } satisfies Text,
};

export const biAgentArchitectureDeck: Deck = {
  slug: "bi-agent-architecture",
  title: {
    en: "BI Agent architecture",
    pt: "Arquitetura do BI Agent",
  },
  blurb: {
    en: "From the question in the pocket to the number in the source — layer by layer, in plain language.",
    pt: "Da pergunta no bolso ao número na fonte — camada por camada, em linguagem simples.",
  },
  slides: [
    {
      id: "cover",
      section: "intro",
      sectionLabel: L.intro,
      eyebrow: { en: "BI Agent / architecture", pt: "BI Agent / arquitetura" },
      title: {
        en: "The engine stays. Channel and source change.",
        pt: "O motor não muda. Canal e fonte mudam.",
      },
      body: {
        en: "An AI agent answers business questions in the channel the team already uses, against the analytics source the company already has — with the slice written out.\n\nToday’s sandbox proves the pattern on Telegram + Power BI. The product is the same engine with other channels and connectors.",
        pt: "Um agente de IA responde perguntas de negócio no canal que o time já usa, na fonte analítica que a empresa já tem — com o recorte escrito na resposta.\n\nO sandbox de hoje prova o padrão em Telegram + Power BI. O produto é o mesmo motor com outros canais e conectores.",
      },
      badges: ["today", "target"],
      diagram: "cover",
      legend: [
        {
          term: { en: "Engine", pt: "Motor" },
          meaning: {
            en: "The conversational core that picks tools and writes the answer. It does not change per client.",
            pt: "O núcleo conversacional que escolhe ferramentas e escreve a resposta. Não muda por cliente.",
          },
        },
        {
          term: { en: "Sandbox", pt: "Sandbox" },
          meaning: {
            en: "The working demo. Proof of the pattern — not the limit of the product.",
            pt: "A demo que já roda. Prova o padrão — não limita o produto.",
          },
        },
      ],
    },
    {
      id: "l0-map",
      section: "intro",
      sectionLabel: L.intro,
      eyebrow: { en: "The cut", pt: "O corte" },
      title: {
        en: "One path. Five layers.",
        pt: "Um caminho. Cinco camadas.",
      },
      body: {
        en: "A person asks. The message enters through a channel. The engine reads the pack, calls a connector, and the client’s source returns the number. The report stays the source of truth.",
        pt: "Alguém pergunta. A mensagem entra por um canal. O motor lê o pack, chama um conector, e a fonte do cliente devolve o número. O report continua sendo a fonte da verdade.",
      },
      diagram: "layer-map",
      layerActive: ["person", "channel", "engine", "pack", "connector", "source"],
      legend: [
        {
          term: { en: "Pack", pt: "Pack" },
          meaning: {
            en: "The configuration for one area: metrics, names, what is in scope, what is out.",
            pt: "A configuração de uma área: métricas, nomes, o que entra e o que fica de fora.",
          },
        },
        {
          term: { en: "Connector", pt: "Conector" },
          meaning: {
            en: "How the engine speaks to that source (Power BI today; SQL, APIs, other BI later).",
            pt: "Como o motor fala com aquela fonte (Power BI hoje; SQL, APIs, outros BIs depois).",
          },
        },
        {
          term: { en: "Source", pt: "Fonte" },
          meaning: {
            en: "The BI, warehouse, or governed spreadsheet the company already pays for.",
            pt: "O BI, o warehouse ou a planilha governada que a empresa já paga.",
          },
        },
      ],
    },
    {
      id: "l1-what",
      section: "experience",
      sectionLabel: L.experience,
      eyebrow: { en: "Layer 1 — Experience", pt: "Camada 1 — Experiência" },
      title: {
        en: "Ask in the pocket. Do not replace the report.",
        pt: "Pergunte no bolso. Não substituímos o report.",
      },
      body: {
        en: "Someone asks in natural language on the channel the team already uses. The agent queries the analytics stack you already have. We do not become your BI. We consult it.",
        pt: "Alguém pergunta em linguagem natural no canal que o time já usa. O agente consulta a stack analítica que vocês já têm. Não viramos o BI de vocês. Consultamos o que já existe.",
      },
      diagram: "what-it-is",
      layerActive: ["person", "channel", "source"],
      legend: [
        {
          term: { en: "Natural language", pt: "Linguagem natural" },
          meaning: {
            en: "Ordinary Portuguese or English. No query syntax for the person asking.",
            pt: "Português ou inglês do dia a dia. Sem sintaxe de consulta para quem pergunta.",
          },
        },
        {
          term: { en: "Report", pt: "Report" },
          meaning: {
            en: "The dashboard or model that remains the official number.",
            pt: "O dashboard ou modelo que continua sendo o número oficial.",
          },
        },
      ],
    },
    {
      id: "l1-steps",
      section: "experience",
      sectionLabel: L.experience,
      eyebrow: { en: "Layer 1 — Experience", pt: "Camada 1 — Experiência" },
      title: {
        en: "Three steps. Slice declared. Number proved.",
        pt: "Três passos. Recorte declarado. Número provado.",
      },
      body: {
        en: "This is not generic chat about BI. It is a query to your data layer — with a numeric contract.",
        pt: "Não é chat genérico sobre BI. É consulta à sua camada de dados — com contrato numérico.",
      },
      diagram: "three-steps",
      layerActive: ["person", "channel", "engine"],
      legend: [
        {
          term: { en: "Slice", pt: "Recorte" },
          meaning: {
            en: "Period, unit, and line written in the answer (April, Rio, margin — not a naked number).",
            pt: "Período, unidade e linha escritos na resposta (abril, Rio, margem — não um número solto).",
          },
        },
        {
          term: { en: "Proof", pt: "Prova" },
          meaning: {
            en: "The value is checked against the source before it goes out.",
            pt: "O valor é conferido na fonte antes de ir ao ar.",
          },
        },
      ],
    },
    {
      id: "l1-channels",
      section: "experience",
      sectionLabel: L.experience,
      eyebrow: { en: "Layer 1 — Experience", pt: "Camada 1 — Experiência" },
      title: {
        en: "One agent. The channel the team already uses.",
        pt: "Um agente. O canal que a equipe já usa.",
      },
      body: {
        en: "WhatsApp is the commercial hero. Telegram, SMS, and email run the same engine and the same validation. The number that leaves is the number in the source.",
        pt: "WhatsApp é o canal principal na venda. Telegram, SMS e e-mail usam o mesmo motor e a mesma validação. O número que sai é o número da fonte.",
      },
      badges: ["today", "target"],
      diagram: "channels",
      layerActive: ["channel"],
      legend: [
        {
          term: { en: "Channel", pt: "Canal" },
          meaning: {
            en: "Where the person types. The engine behind it does not change.",
            pt: "Onde a pessoa escreve. O motor atrás não muda.",
          },
        },
        {
          term: { en: "Today", pt: "Hoje" },
          meaning: {
            en: "Sandbox is live on Telegram. WhatsApp, SMS, and email are the same engine, not yet the demo envelope.",
            pt: "O sandbox está no Telegram. WhatsApp, SMS e e-mail são o mesmo motor — ainda não o envelope da demo.",
          },
        },
      ],
    },
    {
      id: "l1-packs",
      section: "experience",
      sectionLabel: L.experience,
      eyebrow: { en: "Layer 1 — Experience", pt: "Camada 1 — Experiência" },
      title: {
        en: "One pack per area. The sector only changes the report.",
        pt: "Um pack por área. O setor só muda o report.",
      },
      body: {
        en: "Controllership says margin. Sales says quota. HR says headcount. We configure metrics, aliases, and numeric checks for that area. Industry or retail is the same product — a different report.",
        pt: "Controladoria fala margem. Comercial fala meta. RH fala headcount. Configuramos métricas, aliases e prova numérica daquela área. Indústria ou varejo é o mesmo produto — outro report.",
      },
      diagram: "packs",
      layerActive: ["pack"],
      legend: [
        {
          term: { en: "Alias", pt: "Alias" },
          meaning: {
            en: "How that team names a metric (“revenue” vs “net sales”). The pack maps it.",
            pt: "Como aquele time chama a métrica (“receita” vs “venda líquida”). O pack mapeia.",
          },
        },
        {
          term: { en: "Out of scope", pt: "Fora de escopo" },
          meaning: {
            en: "Questions the pack must refuse instead of inventing a number.",
            pt: "Perguntas que o pack deve recusar em vez de inventar um número.",
          },
        },
      ],
    },
    {
      id: "l2-motor",
      section: "engine",
      sectionLabel: L.engine,
      eyebrow: { en: "Layer 2 — Engine", pt: "Camada 2 — Motor" },
      title: {
        en: "The AI picks tools. It does not invent the query.",
        pt: "A IA escolhe ferramentas. Não inventa a consulta.",
      },
      body: {
        en: "The model never writes free SQL or DAX in the default path. It chooses a named tool. Each tool runs a versioned query already bound to the pack. That is how we keep the number honest and the cost bounded.",
        pt: "O modelo não escreve SQL ou DAX solto no caminho padrão. Ele escolhe uma ferramenta nomeada. Cada ferramenta roda uma consulta versionada, amarrada ao pack. Assim o número fecha e o custo não dispara.",
      },
      diagram: "motor",
      layerActive: ["engine", "pack"],
      legend: [
        {
          term: { en: "Tool", pt: "Ferramenta" },
          meaning: {
            en: "A fixed action the engine may call: KPI, slice, rank, chart… Not a blank query box.",
            pt: "Uma ação fixa que o motor pode chamar: KPI, fatia, ranking, gráfico… Não é uma caixa de consulta em branco.",
          },
        },
        {
          term: { en: "DAX / SQL", pt: "DAX / SQL" },
          meaning: {
            en: "The language of the source. Built by our query layer, not by the language model.",
            pt: "A língua da fonte. Montada pela nossa camada de consulta, não pelo modelo de linguagem.",
          },
        },
      ],
    },
    {
      id: "l2-stays",
      section: "engine",
      sectionLabel: L.engine,
      eyebrow: { en: "Layer 2 — Engine", pt: "Camada 2 — Motor" },
      title: {
        en: "What stays. What swaps.",
        pt: "O que fica. O que troca.",
      },
      body: {
        en: "Every client keeps the same engine, the same pack idea, and the same numeric proof. We swap the channel they talk on and the connector that speaks to their stack.",
        pt: "Todo cliente mantém o mesmo motor, a mesma ideia de pack e a mesma prova numérica. Trocamos o canal em que falam e o conector que fala com a stack deles.",
      },
      diagram: "stays-swaps",
      layerActive: ["engine", "pack", "channel", "connector"],
      legend: [
        {
          term: { en: "Numeric proof", pt: "Prova numérica" },
          meaning: {
            en: "Anchors and golden tests: the answer must match the agreed visual in the source.",
            pt: "Âncoras e testes dourados: a resposta tem que bater com o visual combinado na fonte.",
          },
        },
      ],
    },
    {
      id: "l3-families",
      section: "connectors",
      sectionLabel: L.connectors,
      eyebrow: { en: "Layer 3 — Connectors", pt: "Camada 3 — Conectores" },
      title: {
        en: "The stack the company already pays for.",
        pt: "A stack que a empresa já paga.",
      },
      body: {
        en: "The engine does not require a migration. We plug into the analytics layer already in use — BI platforms, warehouses, governed sheets, or an API / SQL / semantic layer as an escape hatch.",
        pt: "O motor não exige migração. Plugamos na camada analítica que já está em uso — plataformas de BI, warehouses, planilhas governadas, ou API / SQL / semantic layer como saída de emergência.",
      },
      badges: ["target"],
      diagram: "connectors",
      layerActive: ["connector", "source"],
      legend: [
        {
          term: { en: "Semantic layer", pt: "Semantic layer" },
          meaning: {
            en: "A governed metrics layer (LookML, Fabric semantic model, dbt metrics…) sitting above raw tables.",
            pt: "Uma camada governada de métricas (LookML, modelo semântico Fabric, métricas dbt…) acima das tabelas cruas.",
          },
        },
        {
          term: { en: "Governed sheet", pt: "Planilha governada" },
          meaning: {
            en: "A spreadsheet that is the agreed source of the number — not a private export on someone’s desktop.",
            pt: "Uma planilha que é a fonte combinada do número — não um export particular no desktop de alguém.",
          },
        },
      ],
    },
    {
      id: "l3-today",
      section: "connectors",
      sectionLabel: L.connectors,
      eyebrow: { en: "Layer 3 — Connectors", pt: "Camada 3 — Conectores" },
      title: {
        en: "Today: Power BI. Target: the same experience on your source.",
        pt: "Hoje: Power BI. Alvo: a mesma experiência na fonte de vocês.",
      },
      body: {
        en: "The live sandbox talks to a Power BI semantic model through executeQueries (DAX). Other families in the previous slide are the architecture target — not claimed as the current demo.",
        pt: "O sandbox ao vivo fala com um modelo semântico Power BI via executeQueries (DAX). As outras famílias do slide anterior são o alvo da arquitetura — não a demo atual.",
      },
      badges: ["today", "target"],
      diagram: "today-target",
      layerActive: ["connector", "source"],
      legend: [
        {
          term: { en: "Semantic model", pt: "Modelo semântico" },
          meaning: {
            en: "The Power BI dataset: tables, relationships, and measures the report already uses.",
            pt: "O dataset do Power BI: tabelas, relações e medidas que o report já usa.",
          },
        },
        {
          term: { en: "executeQueries", pt: "executeQueries" },
          meaning: {
            en: "The Power BI REST call that runs a DAX query and returns rows. What the MVP connector uses.",
            pt: "A chamada REST do Power BI que roda uma consulta DAX e devolve linhas. O que o conector do MVP usa.",
          },
        },
      ],
    },
    {
      id: "l4-contract",
      section: "contract",
      sectionLabel: L.contract,
      eyebrow: { en: "Layer 4 — Data contract", pt: "Camada 4 — Contrato de dados" },
      title: {
        en: "The catalog speaks business. The connector translates.",
        pt: "O catálogo fala negócio. O conector traduz.",
      },
      body: {
        en: "A pack catalog names metrics, dimensions, slices, and views. The connector turns that into DAX, SQL, or the BI’s API. The language model never authors the query.",
        pt: "O catálogo do pack nomeia métricas, dimensões, recortes e views. O conector vira isso em DAX, SQL ou na API do BI. O modelo de linguagem não escreve a consulta.",
      },
      diagram: "contract",
      layerActive: ["pack", "connector", "source"],
      legend: [
        {
          term: { en: "Metric", pt: "Métrica" },
          meaning: {
            en: "A number the pack is allowed to return (headcount, margin, quota attainment).",
            pt: "Um número que o pack pode devolver (headcount, margem, atingimento de meta).",
          },
        },
        {
          term: { en: "Dimension", pt: "Dimensão" },
          meaning: {
            en: "A cut: region, month, business unit, product line.",
            pt: "Um corte: região, mês, unidade, linha de produto.",
          },
        },
        {
          term: { en: "View", pt: "View" },
          meaning: {
            en: "A known shape from the report (a card, a ranking, a roster) already mapped in the pack.",
            pt: "Um formato conhecido do report (um card, um ranking, uma lista) já mapeado no pack.",
          },
        },
      ],
    },
    {
      id: "l4-tools",
      section: "contract",
      sectionLabel: L.contract,
      eyebrow: { en: "Layer 4 — Data contract", pt: "Camada 4 — Contrato de dados" },
      title: {
        en: "What the engine may ask the source.",
        pt: "O que o motor pode pedir à fonte.",
      },
      body: {
        en: "Each tool is a sentence the source understands. The model chooses which sentence. The catalog fills the nouns.",
        pt: "Cada ferramenta é uma frase que a fonte entende. O modelo escolhe a frase. O catálogo preenche os substantivos.",
      },
      diagram: "tools",
      layerActive: ["engine", "pack", "source"],
      legend: [
        {
          term: { en: "KPI", pt: "KPI" },
          meaning: {
            en: "A total, with the slice if there is one. “Margin in April for Rio.”",
            pt: "Um total, com recorte se houver. “Margem em abril no Rio.”",
          },
        },
        {
          term: { en: "Chart tools", pt: "Ferramentas de gráfico" },
          meaning: {
            en: "Propose, then render. Numbers still come from the BI tools — the chart does not invent series.",
            pt: "Propor, depois renderizar. Os números ainda vêm das tools de BI — o gráfico não inventa séries.",
          },
        },
      ],
    },
    {
      id: "l4-security",
      section: "contract",
      sectionLabel: L.contract,
      eyebrow: { en: "Layer 4 — Data contract", pt: "Camada 4 — Contrato de dados" },
      title: {
        en: "The agent queries the client source. It is not a warehouse.",
        pt: "O agente consulta a fonte do cliente. Não é um warehouse.",
      },
      body: {
        en: "Credentials live in the agreed environment. The bot does not copy the company’s model into a DeepFlowRun database. Authentication in the MVP is a signed-in user; production uses an app identity (service principal) on the source.",
        pt: "As credenciais ficam no ambiente combinado. O bot não copia o modelo da empresa para um banco da DeepFlowRun. No MVP a autenticação é um usuário logado; em produção, uma identidade de aplicativo (service principal) na fonte.",
      },
      diagram: "security",
      layerActive: ["connector", "source"],
      legend: [
        {
          term: { en: "Service principal", pt: "Service principal" },
          meaning: {
            en: "An app login, not a human. Needed so the bot can read the source 24/7 without someone clicking “allow”.",
            pt: "Um login de aplicativo, não de pessoa. Preciso para o bot ler a fonte 24/7 sem alguém clicar “permitir”.",
          },
        },
        {
          term: { en: "Delegated (MVP)", pt: "Delegated (MVP)" },
          meaning: {
            en: "A person signs in once; the bot reuses that permission. Fast to stand up. Not the production pattern.",
            pt: "Uma pessoa entra uma vez; o bot reusa essa permissão. Rápido de levantar. Não é o padrão de produção.",
          },
        },
      ],
    },
    {
      id: "l5-outputs",
      section: "delivery",
      sectionLabel: L.delivery,
      eyebrow: { en: "Layer 5 — Delivery", pt: "Camada 5 — Entrega" },
      title: {
        en: "What comes back in the channel.",
        pt: "O que volta no canal.",
      },
      body: {
        en: "The default is a short answer with the slice written. When the question needs more: a chart, a spreadsheet, a one-line SMS, or a structured email for a board pack.",
        pt: "O padrão é uma resposta curta com o recorte escrito. Quando a pergunta pede mais: um gráfico, uma planilha, um SMS de uma linha, ou um e-mail estruturado para board.",
      },
      diagram: "outputs",
      layerActive: ["channel"],
      legend: [
        {
          term: { en: "Executive surface", pt: "Superfície executiva" },
          meaning: {
            en: "What a director sees: caption and number, not technical IDs.",
            pt: "O que um diretor vê: legenda e número, sem IDs técnicos.",
          },
        },
      ],
    },
    {
      id: "l5-pipeline",
      section: "delivery",
      sectionLabel: L.delivery,
      eyebrow: { en: "Layer 5 — Delivery", pt: "Camada 5 — Entrega" },
      title: {
        en: "From the model to a live channel.",
        pt: "Do modelo ao canal no ar.",
      },
      body: {
        en: "We inventory the model, write the catalog, pin numeric anchors, run golden tests, then open the channel. The language model only chooses among truths already proved.",
        pt: "Inventariamos o modelo, escrevemos o catálogo, cravamos âncoras numéricas, rodamos testes dourados e só então abrimos o canal. O modelo de linguagem só escolhe entre verdades já provadas.",
      },
      diagram: "pipeline",
      layerActive: ["pack", "source"],
      legend: [
        {
          term: { en: "Anchor", pt: "Âncora" },
          meaning: {
            en: "A slot in the report we treat as truth: this visual, these filters, this measure.",
            pt: "Um slot do report que tratamos como verdade: este visual, estes filtros, esta medida.",
          },
        },
        {
          term: { en: "Golden test", pt: "Teste dourado" },
          meaning: {
            en: "An automated check: this question, this tool, this number — must still match after a change.",
            pt: "Uma checagem automática: esta pergunta, esta ferramenta, este número — tem que continuar batendo depois de uma mudança.",
          },
        },
      ],
    },
    {
      id: "l5-handoff",
      section: "delivery",
      sectionLabel: L.delivery,
      eyebrow: { en: "Layer 5 — Delivery", pt: "Camada 5 — Entrega" },
      title: {
        en: "Data partner brings the model. We bring the agent.",
        pt: "O parceiro de dados traz o modelo. Nós trazemos o agente.",
      },
      body: {
        en: "Whoever owns the warehouse and the rules of the business opens access and says which visual is the truth. DeepFlowRun configures the pack, the channel, the agent, and the numeric proof. The chrome of this deck does not assume a named partner.",
        pt: "Quem é dono do warehouse e das regras de negócio libera o acesso e diz qual visual é a verdade. A DeepFlowRun configura o pack, o canal, o agente e a prova numérica. O chrome deste deck não assume um parceiro nomeado.",
      },
      diagram: "handoff",
      layerActive: ["pack", "channel", "source"],
      legend: [
        {
          term: { en: "Whitelabel", pt: "Whitelabel" },
          meaning: {
            en: "The partner can take the relationship. We still deliver the product, the validation, and the onboarding.",
            pt: "O parceiro pode levar o relacionamento. Nós seguimos entregando o produto, a validação e o onboarding.",
          },
        },
      ],
    },
    {
      id: "glossary",
      section: "delivery",
      sectionLabel: L.delivery,
      eyebrow: { en: "Glossary", pt: "Glossário" },
      title: {
        en: "Words used in this deck.",
        pt: "Palavras usadas neste deck.",
      },
      body: {
        en: "Plain-language meanings. Technical terms stay in the left column.",
        pt: "Significados em linguagem de reunião. O termo técnico fica na coluna da esquerda.",
      },
      diagram: "glossary",
    },
  ],
};
