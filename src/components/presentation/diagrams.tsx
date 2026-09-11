import { tx, type Locale } from "./locale";
import type { DiagramId, LayerKey } from "./types";

const LAYER_LABEL: Record<LayerKey, { en: string; pt: string }> = {
  person: { en: "Person", pt: "Pessoa" },
  channel: { en: "Channel", pt: "Canal" },
  engine: { en: "Engine", pt: "Motor" },
  pack: { en: "Pack", pt: "Pack" },
  connector: { en: "Connector", pt: "Conector" },
  source: { en: "Source", pt: "Fonte" },
};

const LAYER_ORDER: LayerKey[] = [
  "person",
  "channel",
  "engine",
  "pack",
  "connector",
  "source",
];

export function LayerMap({
  locale,
  active = [],
}: {
  locale: Locale;
  active?: LayerKey[];
}) {
  return (
    <ol className="pres-map" aria-label={tx(locale, { en: "Architecture layers", pt: "Camadas da arquitetura" })}>
      {LAYER_ORDER.map((key, i) => (
        <li key={key} className="pres-map-item" data-on={active.includes(key) ? "1" : "0"}>
          {i > 0 ? <span className="pres-map-join" aria-hidden /> : null}
          <span className="pres-map-node">
            <span className="pres-map-i">{String(i + 1).padStart(2, "0")}</span>
            <span className="pres-map-n">{LAYER_LABEL[key][locale]}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function CoverDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="pres-cover-d">
      <LayerMap locale={locale} active={["engine"]} />
      <p className="pres-cover-note">
        {tx(locale, {
          en: "Same engine · swap the edges",
          pt: "Mesmo motor · trocam as pontas",
        })}
      </p>
    </div>
  );
}

export function WhatItIsDiagram({ locale }: { locale: Locale }) {
  const rows = [
    {
      ok: true,
      title: { en: "This", pt: "Isto" },
      text: {
        en: "Ask on the phone. Agent reads your BI.",
        pt: "Pergunta no celular. O agente lê o seu BI.",
      },
    },
    {
      ok: false,
      title: { en: "Not this", pt: "Não isto" },
      text: {
        en: "A new dashboard. A bot that replaces Power BI.",
        pt: "Um dashboard novo. Um bot que substitui o Power BI.",
      },
    },
  ];
  return (
    <div className="pres-split-cards">
      {rows.map((r) => (
        <article key={r.title.en} className="pres-card" data-ok={r.ok ? "1" : "0"}>
          <p className="pres-card-k">{r.title[locale]}</p>
          <p className="pres-card-t">{r.text[locale]}</p>
        </article>
      ))}
    </div>
  );
}

export function ThreeStepsDiagram({ locale }: { locale: Locale }) {
  const steps = [
    {
      n: "01",
      t: { en: "Ask", pt: "Pergunta" },
      d: {
        en: "Natural language in the channel the team uses.",
        pt: "Linguagem natural no canal que o time usa.",
      },
    },
    {
      n: "02",
      t: { en: "Slice", pt: "Recorte" },
      d: {
        en: "Period, unit, and line declared in the answer.",
        pt: "Período, unidade e linha declarados na resposta.",
      },
    },
    {
      n: "03",
      t: { en: "Proof", pt: "Prova" },
      d: {
        en: "Value crossed with the analytics source before it ships.",
        pt: "Valor cruzado com a fonte analítica antes de ir ao ar.",
      },
    },
  ];
  return (
    <ol className="pres-steps">
      {steps.map((s) => (
        <li key={s.n}>
          <span className="pres-steps-n">{s.n}</span>
          <span className="pres-steps-t">{s.t[locale]}</span>
          <span className="pres-steps-d">{s.d[locale]}</span>
        </li>
      ))}
    </ol>
  );
}

export function ChannelsDiagram({ locale }: { locale: Locale }) {
  const items = [
    { name: "WhatsApp", role: { en: "Primary", pt: "Principal" }, badge: "target" as const },
    { name: "Telegram", role: { en: "Sandbox today", pt: "Sandbox hoje" }, badge: "today" as const },
    { name: "SMS", role: { en: "One line", pt: "Uma linha" }, badge: "target" as const },
    { name: "Email", role: { en: "Board / audit", pt: "Board / auditoria" }, badge: "target" as const },
  ];
  return (
    <ul className="pres-tiles">
      {items.map((c) => (
        <li key={c.name} data-badge={c.badge}>
          <span className="pres-tiles-n">{c.name}</span>
          <span className="pres-tiles-r">{c.role[locale]}</span>
        </li>
      ))}
    </ul>
  );
}

export function PacksDiagram({ locale }: { locale: Locale }) {
  const areas = [
    { en: "Sales", pt: "Comercial" },
    { en: "Controllership", pt: "Controladoria" },
    { en: "HR", pt: "RH" },
    { en: "Finance", pt: "Finanças" },
    { en: "Operations", pt: "Operações" },
    { en: "Supply", pt: "Supply" },
  ];
  return (
    <div className="pres-packs">
      <p className="pres-packs-k">
        {tx(locale, { en: "One pack per area", pt: "Um pack por área" })}
      </p>
      <ul>
        {areas.map((a) => (
          <li key={a.en}>{a[locale]}</li>
        ))}
      </ul>
      <p className="pres-packs-f">
        {tx(locale, {
          en: "Industry, retail, health — the report changes. The product does not.",
          pt: "Indústria, varejo, saúde — muda o report. O produto não.",
        })}
      </p>
    </div>
  );
}

export function MotorDiagram({ locale }: { locale: Locale }) {
  const cols = [
    {
      k: { en: "The model", pt: "O modelo" },
      items: [
        { en: "Reads the question", pt: "Lê a pergunta" },
        { en: "Picks a named tool", pt: "Escolhe uma ferramenta" },
        { en: "Writes the slice in the answer", pt: "Escreve o recorte na resposta" },
      ],
    },
    {
      k: { en: "Not the model", pt: "Não é o modelo" },
      items: [
        { en: "Free SQL", pt: "SQL solto" },
        { en: "Free DAX", pt: "DAX solto" },
        { en: "Inventing a number", pt: "Inventar um número" },
      ],
    },
  ];
  return (
    <div className="pres-split-cards">
      {cols.map((c, i) => (
        <article key={c.k.en} className="pres-card" data-ok={i === 0 ? "1" : "0"}>
          <p className="pres-card-k">{c.k[locale]}</p>
          <ul className="pres-card-list">
            {c.items.map((it) => (
              <li key={it.en}>{it[locale]}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function StaysSwapsDiagram({ locale }: { locale: Locale }) {
  const stays = [
    { en: "Engine", pt: "Motor" },
    { en: "Pack / catalog", pt: "Pack / catálogo" },
    { en: "Numeric proof", pt: "Prova numérica" },
  ];
  const swaps = [
    { en: "Channel", pt: "Canal" },
    { en: "Connector", pt: "Conector" },
  ];
  return (
    <div className="pres-stays">
      <section>
        <h3>{tx(locale, { en: "Stays", pt: "Fica" })}</h3>
        <ul>
          {stays.map((s) => (
            <li key={s.en}>{s[locale]}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{tx(locale, { en: "Swaps", pt: "Troca" })}</h3>
        <ul>
          {swaps.map((s) => (
            <li key={s.en}>{s[locale]}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function ConnectorsDiagram({ locale }: { locale: Locale }) {
  const groups = [
    {
      k: { en: "BI platforms", pt: "Plataformas BI" },
      items: ["Power BI", "Fabric", "Qlik Sense", "Looker", "Tableau"],
    },
    {
      k: { en: "Warehouses & systems", pt: "Warehouses e sistemas" },
      items: ["BigQuery", "Snowflake", "Redshift", "Databricks", "DW", "SAP", "Oracle"],
    },
    {
      k: { en: "Governed sheets", pt: "Planilhas governadas" },
      items: ["Excel", "Google Sheets"],
    },
    {
      k: { en: "Escape hatch", pt: "Saída extra" },
      items: ["API", "SQL", "Semantic layer"],
    },
  ];
  return (
    <div className="pres-families">
      {groups.map((g) => (
        <section key={g.k.en}>
          <h3>{g.k[locale]}</h3>
          <ul>
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function TodayTargetDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="pres-stays pres-stays--tt">
      <section data-badge="today">
        <h3>{tx(locale, { en: "Today", pt: "Hoje" })}</h3>
        <ul>
          <li>Telegram</li>
          <li>Power BI</li>
          <li>executeQueries / DAX</li>
        </ul>
      </section>
      <section data-badge="target">
        <h3>{tx(locale, { en: "Target", pt: "Alvo" })}</h3>
        <ul>
          <li>WhatsApp · SMS · Email</li>
          <li>{tx(locale, { en: "The families on the previous slide", pt: "As famílias do slide anterior" })}</li>
          <li>{tx(locale, { en: "Same experience", pt: "Mesma experiência" })}</li>
        </ul>
      </section>
    </div>
  );
}

export function ContractDiagram({ locale }: { locale: Locale }) {
  const steps = [
    { en: "Catalog", pt: "Catálogo" },
    { en: "Tool", pt: "Ferramenta" },
    { en: "Query builder", pt: "Montagem" },
    { en: "Source", pt: "Fonte" },
  ];
  return (
    <div className="pres-flow">
      {steps.map((s, i) => (
        <span key={s.en} className="pres-flow-step">
          {i > 0 ? <span className="pres-flow-join" aria-hidden /> : null}
          <span className="pres-flow-box">{s[locale]}</span>
        </span>
      ))}
      <p className="pres-flow-cap">
        {tx(locale, {
          en: "Metric · dimension · slice · view  →  DAX, SQL, or BI API",
          pt: "Métrica · dimensão · recorte · view  →  DAX, SQL ou API do BI",
        })}
      </p>
    </div>
  );
}

export function ToolsDiagram({ locale }: { locale: Locale }) {
  const tools = [
    { id: "get_kpi", ask: { en: "A total, with the slice.", pt: "Um total, com o recorte." } },
    { id: "get_slice", ask: { en: "A cut across dimensions.", pt: "Um corte entre dimensões." } },
    { id: "get_breakdown", ask: { en: "One metric split by one dimension.", pt: "Uma métrica partida em uma dimensão." } },
    { id: "get_rank", ask: { en: "Top or bottom N.", pt: "Topo ou fundo N." } },
    { id: "get_timeseries", ask: { en: "Values over time.", pt: "Valores no tempo." } },
    { id: "get_matrix", ask: { en: "A two-axis grid.", pt: "Uma grade de dois eixos." } },
    { id: "run_view", ask: { en: "A known report view.", pt: "Uma visão já mapeada do report." } },
    { id: "export_roster", ask: { en: "A list / spreadsheet.", pt: "Uma lista / planilha." } },
    { id: "render_chart", ask: { en: "A chart from fetched numbers.", pt: "Um gráfico com números já buscados." } },
    { id: "lookup_term", ask: { en: "What a field means.", pt: "O que um campo significa." } },
  ];
  return (
    <ul className="pres-tools">
      {tools.map((t) => (
        <li key={t.id}>
          <code>{t.id}</code>
          <span>{t.ask[locale]}</span>
        </li>
      ))}
    </ul>
  );
}

export function SecurityDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="pres-sec">
      <div className="pres-sec-box">
        {tx(locale, { en: "Client source", pt: "Fonte do cliente" })}
        <small>
          {tx(locale, {
            en: "BI · warehouse · governed sheet",
            pt: "BI · warehouse · planilha governada",
          })}
        </small>
      </div>
      <span className="pres-sec-arrow" aria-hidden>
        ↔
      </span>
      <div className="pres-sec-box" data-role="agent">
        {tx(locale, { en: "BI Agent", pt: "BI Agent" })}
        <small>
          {tx(locale, {
            en: "Queries. Does not store the model.",
            pt: "Consulta. Não guarda o modelo.",
          })}
        </small>
      </div>
    </div>
  );
}

export function OutputsDiagram({ locale }: { locale: Locale }) {
  const outs = [
    { en: "Text + slice", pt: "Texto + recorte" },
    { en: "Chart (PNG)", pt: "Gráfico (PNG)" },
    { en: "Spreadsheet", pt: "Planilha" },
    { en: "SMS one-liner", pt: "SMS de uma linha" },
    { en: "Structured email", pt: "E-mail estruturado" },
  ];
  return (
    <ul className="pres-tiles pres-tiles--5">
      {outs.map((o) => (
        <li key={o.en}>
          <span className="pres-tiles-n">{o[locale]}</span>
        </li>
      ))}
    </ul>
  );
}

export function PipelineDiagram({ locale }: { locale: Locale }) {
  const steps = [
    { en: "Inventory", pt: "Inventário" },
    { en: "Catalog", pt: "Catálogo" },
    { en: "Anchors", pt: "Âncoras" },
    { en: "Golden tests", pt: "Testes dourados" },
    { en: "Channel live", pt: "Canal no ar" },
  ];
  return (
    <ol className="pres-pipe">
      {steps.map((s, i) => (
        <li key={s.en}>
          <span className="pres-pipe-n">{String(i + 1).padStart(2, "0")}</span>
          <span>{s[locale]}</span>
        </li>
      ))}
    </ol>
  );
}

export function HandoffDiagram({ locale }: { locale: Locale }) {
  return (
    <div className="pres-stays">
      <section>
        <h3>{tx(locale, { en: "Data partner", pt: "Parceiro de dados" })}</h3>
        <ul>
          <li>{tx(locale, { en: "Model and rules", pt: "Modelo e regras" })}</li>
          <li>{tx(locale, { en: "Access to the source", pt: "Acesso à fonte" })}</li>
          <li>{tx(locale, { en: "Which visual is the truth", pt: "Qual visual é a verdade" })}</li>
        </ul>
      </section>
      <section data-role="dfr">
        <h3>DeepFlowRun</h3>
        <ul>
          <li>{tx(locale, { en: "Pack and channel", pt: "Pack e canal" })}</li>
          <li>{tx(locale, { en: "Agent", pt: "Agente" })}</li>
          <li>{tx(locale, { en: "Numeric proof", pt: "Prova numérica" })}</li>
        </ul>
      </section>
    </div>
  );
}

const GLOSSARY: { term: { en: string; pt: string }; meaning: { en: string; pt: string } }[] = [
  {
    term: { en: "Channel", pt: "Canal" },
    meaning: { en: "WhatsApp, Telegram, SMS, or email.", pt: "WhatsApp, Telegram, SMS ou e-mail." },
  },
  {
    term: { en: "Engine", pt: "Motor" },
    meaning: { en: "The conversational core. Same for every client.", pt: "O núcleo conversacional. Igual para todo cliente." },
  },
  {
    term: { en: "Pack", pt: "Pack" },
    meaning: { en: "Config for one area of the business.", pt: "Configuração de uma área de negócio." },
  },
  {
    term: { en: "Connector", pt: "Conector" },
    meaning: { en: "How we speak to that source.", pt: "Como falamos com aquela fonte." },
  },
  {
    term: { en: "Analytics source", pt: "Fonte analítica" },
    meaning: { en: "The BI, warehouse, or governed sheet.", pt: "O BI, o warehouse ou a planilha governada." },
  },
  {
    term: { en: "Slice", pt: "Recorte" },
    meaning: { en: "Period, unit, line — written in the answer.", pt: "Período, unidade, linha — escritos na resposta." },
  },
  {
    term: { en: "Anchor", pt: "Âncora" },
    meaning: { en: "The visual we treat as truth.", pt: "O visual que tratamos como verdade." },
  },
  {
    term: { en: "Golden test", pt: "Teste dourado" },
    meaning: { en: "Automated check that the number still matches.", pt: "Checagem automática de que o número ainda bate." },
  },
  {
    term: { en: "Tool", pt: "Ferramenta" },
    meaning: { en: "A named action the engine may call.", pt: "Uma ação nomeada que o motor pode chamar." },
  },
  {
    term: { en: "Semantic model", pt: "Modelo semântico" },
    meaning: { en: "Governed metrics and relationships.", pt: "Métricas e relações governadas." },
  },
  {
    term: { en: "DAX / SQL", pt: "DAX / SQL" },
    meaning: { en: "Query languages of the source — built by us, not by the LLM.", pt: "Línguas de consulta da fonte — montadas por nós, não pela LLM." },
  },
  {
    term: { en: "Whitelabel", pt: "Whitelabel" },
    meaning: { en: "Partner owns the relationship; we deliver the product.", pt: "O parceiro leva o relacionamento; nós entregamos o produto." },
  },
];

export function GlossaryDiagram({ locale }: { locale: Locale }) {
  return (
    <dl className="pres-gloss">
      {GLOSSARY.map((g) => (
        <div key={g.term.en} className="pres-gloss-row">
          <dt>{g.term[locale]}</dt>
          <dd>{g.meaning[locale]}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Diagram({
  id,
  locale,
  layerActive,
}: {
  id: DiagramId;
  locale: Locale;
  layerActive?: LayerKey[];
}) {
  switch (id) {
    case "cover":
      return <CoverDiagram locale={locale} />;
    case "layer-map":
      return <LayerMap locale={locale} active={layerActive} />;
    case "what-it-is":
      return <WhatItIsDiagram locale={locale} />;
    case "three-steps":
      return <ThreeStepsDiagram locale={locale} />;
    case "channels":
      return <ChannelsDiagram locale={locale} />;
    case "packs":
      return <PacksDiagram locale={locale} />;
    case "motor":
      return <MotorDiagram locale={locale} />;
    case "stays-swaps":
      return <StaysSwapsDiagram locale={locale} />;
    case "connectors":
      return <ConnectorsDiagram locale={locale} />;
    case "today-target":
      return <TodayTargetDiagram locale={locale} />;
    case "contract":
      return <ContractDiagram locale={locale} />;
    case "tools":
      return <ToolsDiagram locale={locale} />;
    case "security":
      return <SecurityDiagram locale={locale} />;
    case "outputs":
      return <OutputsDiagram locale={locale} />;
    case "pipeline":
      return <PipelineDiagram locale={locale} />;
    case "handoff":
      return <HandoffDiagram locale={locale} />;
    case "glossary":
      return <GlossaryDiagram locale={locale} />;
    default:
      return null;
  }
}
