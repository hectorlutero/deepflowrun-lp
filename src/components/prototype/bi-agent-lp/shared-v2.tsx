import Image from "next/image";
import { GOOGLE_BOOKING_URL, whatsAppUrl, WHATSAPP_MSG_BI_AGENT_DEMO } from "@/lib/contact";

const AREAS = [
  "Comercial",
  "Controladoria",
  "Fiscal",
  "TI",
  "Jurídico",
  "RH",
  "Perdas",
  "Operações",
  "Saúde",
  "Varejo",
  "Indústria",
];

export function Ticker() {
  const row = [...AREAS, ...AREAS];
  return (
    <div className="v2-ticker" aria-hidden>
      <div className="v2-ticker-track">
        {row.map((a, i) => (
          <span key={`${a}-${i}`}>{a}</span>
        ))}
      </div>
    </div>
  );
}

export function WhatsAppMockV2({ glow }: { glow?: boolean }) {
  return (
    <div className={`v2-phone ${glow ? "v2-phone--glow" : ""}`}>
      <div className="v2-phone-notch" />
      <div className="v2-wa">
        <div className="v2-wa-header">
          <div className="v2-wa-avatar">BI</div>
          <div>
            <strong>BI Agent</strong>
            <span className="v2-wa-live">● validado vs report</span>
          </div>
        </div>
        <div className="v2-wa-body">
          <div className="v2-wa-bubble v2-wa-bubble--out">
            Margem Rio · maio/23 — % vs meta?
          </div>
          <div className="v2-wa-bubble v2-wa-bubble--in">
            <span className="v2-wa-tag">Rio · maio · 2023 · Margem</span>
            <span className="v2-wa-metric v2-pulse">11,2%</span>
            <span className="v2-wa-meta">Meta vs realizado · linha DRE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DramaSplit() {
  return (
    <div className="v2-drama">
      <div className="v2-drama-side v2-drama-side--bad">
        <span className="v2-drama-kicker">Sem validação</span>
        <span className="v2-drama-num">0,0%</span>
        <span className="v2-drama-copy">Card genérico · reunião em risco</span>
      </div>
      <div className="v2-drama-vs">VS</div>
      <div className="v2-drama-side v2-drama-side--good">
        <span className="v2-drama-kicker">BI Agent</span>
        <span className="v2-drama-num">2,1%</span>
        <span className="v2-drama-copy">= pivot Power BI · recorte explícito</span>
      </div>
    </div>
  );
}

export function CtaRowV2({ theme }: { theme?: "dark" | "light" }) {
  const t = theme === "light" ? "v2-ctas--light" : "";
  return (
    <div className={`v2-ctas ${t}`}>
      <a className="v2-btn v2-btn--primary" href="#demo">
        Ver demo ao vivo
      </a>
      <a
        className="v2-btn v2-btn--wa"
        href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="v2-btn v2-btn--amber"
        href={GOOGLE_BOOKING_URL}
        target="_blank"
        rel="noreferrer"
      >
        Agendar 15 min
      </a>
    </div>
  );
}

export function NavV2({ dark }: { dark?: boolean }) {
  return (
    <header className={`v2-nav ${dark ? "v2-nav--dark" : ""}`}>
      <a href="#" className="v2-brand">
        <Image src="/brand/logo-mark.svg" alt="" width={32} height={32} />
        <span>
          BI Agent
          <small>DeepFlowRun</small>
        </span>
      </a>
      <nav className="v2-nav-links">
        <a href="#demo">Demo</a>
        <a href="#confianca">Confiança</a>
      </nav>
    </header>
  );
}

export function ScenarioCards() {
  const items = [
    {
      icon: "✈",
      title: "No avião",
      copy: "Sem laptop. Decisão no bolso.",
      accent: "cyan",
    },
    {
      icon: "◉",
      title: "Na reunião",
      copy: "Ideia → número em 10 segundos.",
      accent: "amber",
    },
    {
      icon: "⚡",
      title: "Antes deles",
      copy: "Quem abre o PBI decide tarde.",
      accent: "green",
    },
  ];
  return (
    <div className="v2-scenarios">
      {items.map((it) => (
        <article key={it.title} className={`v2-scenario v2-scenario--${it.accent}`}>
          <span className="v2-scenario-icon">{it.icon}</span>
          <h3>{it.title}</h3>
          <p>{it.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function ChannelMock({ channel }: { channel: "telegram" | "sms" | "email" }) {
  const cfg = {
    telegram: {
      cls: "v2-channel--tg",
      head: "Telegram · BI Agent",
      q: "ROL jan/23?",
      a: "R$ 1,66M",
      sub: "Receita operacional líquida",
    },
    sms: {
      cls: "v2-channel--sms",
      head: "SMS",
      q: "Margem SP fev?",
      a: "8,4%",
      sub: "vs meta · validado",
    },
    email: {
      cls: "v2-channel--email",
      head: "E-mail · resumo",
      q: "Subject: DRE Rio · maio",
      a: "Resultado R$ 352k",
      sub: "anexo: recorte + linha DRE",
    },
  }[channel];

  return (
    <div className={`v2-channel ${cfg.cls}`}>
      <div className="v2-channel-head">{cfg.head}</div>
      <div className="v2-channel-body">
        <p className="v2-channel-q">{cfg.q}</p>
        <p className="v2-channel-a">{cfg.a}</p>
        <p className="v2-channel-sub">{cfg.sub}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", title: "Pergunta", copy: "Linguagem natural no canal que a equipe já usa." },
    { n: "02", title: "Recorte", copy: "Período, unidade e linha DRE declarados na resposta." },
    { n: "03", title: "Prova", copy: "Valor cruzado com o pivot do Power BI — não é card genérico." },
  ];
  return (
    <div className="v2-flow">
      {steps.map((s, i) => (
        <div key={s.n} className="v2-flow-step">
          <span className="v2-flow-n">{s.n}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
          </div>
          {i < steps.length - 1 && <span className="v2-flow-line" aria-hidden />}
        </div>
      ))}
    </div>
  );
}

export function ClosingCta({ dark }: { dark?: boolean }) {
  return (
    <section className={`v2-closing ${dark ? "v2-closing--dark" : ""}`}>
      <p className="v2-closing-kicker">Próximo passo</p>
      <h2>
        Veja o número certo
        <br />
        <span className="v2-gradient-text">antes da reunião.</span>
      </h2>
      <CtaRowV2 theme={dark ? "dark" : "light"} />
    </section>
  );
}
