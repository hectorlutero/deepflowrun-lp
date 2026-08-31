import Image from "next/image";
import { GOOGLE_BOOKING_URL, whatsAppUrl, WHATSAPP_MSG_BI_AGENT_DEMO } from "@/lib/contact";

export function ProtoNav({ dark }: { dark?: boolean }) {
  return (
    <header className={`proto-nav ${dark ? "proto-nav--dark" : ""}`}>
      <div className="proto-nav-inner">
        <a href="#" className="proto-brand">
          <Image src="/brand/logo-mark.svg" alt="" width={28} height={28} />
          <span>
            BI Agent
            <small>by DeepFlowRun</small>
          </span>
        </a>
        <nav className="proto-nav-links">
          <a href="#demo">Demo</a>
          <a href="#confianca">Confiabilidade</a>
          <a href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}

export function WrongNumberDrama({ layout }: { layout: "pill" | "split" | "toast" | "inline" }) {
  if (layout === "pill") {
    return (
      <div className="proto-drama proto-drama--pill">
        <span className="proto-drama-bad">Card: 0,0%</span>
        <span className="proto-drama-arrow">→</span>
        <span className="proto-drama-good">Report: 2,1% ✓</span>
      </div>
    );
  }
  if (layout === "split") {
    return (
      <div className="proto-drama proto-drama--split">
        <div className="proto-drama-card proto-drama-card--bad">
          <span className="proto-drama-label">Sem validação</span>
          <strong>0,0%</strong>
          <span className="proto-drama-hint">Vergonha na reunião</span>
        </div>
        <div className="proto-drama-card proto-drama-card--good">
          <span className="proto-drama-label">BI Agent</span>
          <strong>2,1%</strong>
          <span className="proto-drama-hint">= pivot do PBI</span>
        </div>
      </div>
    );
  }
  if (layout === "toast") {
    return (
      <div className="proto-drama proto-drama--toast">
        <span>⚠</span>
        <p>
          Quem decide com print desatualizado decide <em>tarde</em>.
        </p>
      </div>
    );
  }
  return (
    <p className="proto-drama proto-drama--inline">
      Resposta = report · <s>0,0%</s> → <strong>2,1%</strong> validado
    </p>
  );
}

export function WhatsAppMock({ compact }: { compact?: boolean }) {
  return (
    <div className={`proto-wa ${compact ? "proto-wa--compact" : ""}`} aria-hidden>
      <div className="proto-wa-header">
        <div className="proto-wa-avatar">DF</div>
        <div>
          <strong>BI Agent</strong>
          <span>online · validado vs report</span>
        </div>
      </div>
      <div className="proto-wa-body">
        <div className="proto-wa-bubble proto-wa-bubble--out">
          Margem Rio · maio/23 — % vs meta?
        </div>
        <div className="proto-wa-bubble proto-wa-bubble--in">
          <span className="proto-wa-recorte">Rio · maio · 2023 · Margem</span>
          <strong>% Meta vs Realizado: 11,2</strong>
          <span className="proto-wa-foot">Fonte: linha DRE (= tabela PBI)</span>
        </div>
      </div>
    </div>
  );
}

export function HeroCopy() {
  return (
    <>
      <p className="proto-eyebrow">Produto · WhatsApp · Power BI</p>
      <h1>
        Faça tomadas de decisão do BI no WhatsApp — com a tranquilidade de que o
        valor está certo.
      </h1>
      <p className="proto-lede">
        Enquanto alguém abre o Power BI, você já fechou a call. Linguagem
        natural, recorte declarado, número validado contra o report.
      </p>
    </>
  );
}

export function CtaRow({ inverted }: { inverted?: boolean }) {
  return (
    <div className={`proto-ctas ${inverted ? "proto-ctas--inverted" : ""}`}>
      <a className="proto-btn proto-btn--primary" href="#demo">
        Ver demo
      </a>
      <a
        className="proto-btn proto-btn--ghost"
        href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="proto-btn proto-btn--accent"
        href={GOOGLE_BOOKING_URL}
        target="_blank"
        rel="noreferrer"
      >
        Agendar 15 min
      </a>
    </div>
  );
}

export function CarouselTeaser() {
  return (
    <section id="demo" className="proto-carousel-teaser">
      <div className="proto-carousel-head">
        <h2>Demo · 5 canais</h2>
        <p>WhatsApp · Telegram · SMS · E-mail · (autoplay no prod)</p>
      </div>
      <div className="proto-carousel-track">
        {["WhatsApp", "Telegram", "SMS"].map((ch, i) => (
          <div
            key={ch}
            className={`proto-carousel-slide ${i === 0 ? "is-active" : ""}`}
          >
            <span className="proto-carousel-tag">{ch}</span>
            <WhatsAppMock compact />
          </div>
        ))}
      </div>
      <div className="proto-carousel-dots">
        <span className="is-active" />
        <span />
        <span />
      </div>
    </section>
  );
}
