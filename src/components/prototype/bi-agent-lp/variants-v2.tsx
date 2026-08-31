"use client";

import {
  ChannelMock,
  ClosingCta,
  CtaRowV2,
  DramaSplit,
  HowItWorks,
  NavV2,
  ScenarioCards,
  Ticker,
  WhatsAppMockV2,
} from "./shared-v2";

/** E — Neon FOMO: fullscreen dark, mesh animado, phone flutuante, VS dramático */
export function VariantE() {
  return (
    <div className="v2 v2-e">
      <div className="v2-mesh" aria-hidden />
      <div className="v2-grain" aria-hidden />
      <NavV2 dark />
      <section className="v2-hero v2-hero--cinema">
        <div className="v2-hero-inner">
          <div className="v2-hero-copy">
            <p className="v2-eyebrow">
              <span className="v2-pill">WhatsApp · Power BI · validado</span>
            </p>
            <h1>
              Decida no{" "}
              <span className="v2-gradient-text">WhatsApp</span>
              <br />
              com o número certo.
            </h1>
            <p className="v2-lede">
              Enquanto alguém abre o Power BI, você já fechou a call. Linguagem
              natural · recorte declarado · prova contra o report.
            </p>
            <p className="v2-fomo-line">
              Quem decide com <s>0,0%</s> decide tarde.
            </p>
            <CtaRowV2 />
          </div>
          <div className="v2-hero-stage">
            <div className="v2-stage-glow" aria-hidden />
            <WhatsAppMockV2 glow />
            <div className="v2-floating-badge v2-floating-badge--bad">Card 0,0%</div>
            <div className="v2-floating-badge v2-floating-badge--good">Report 11,2% ✓</div>
          </div>
        </div>
      </section>
      <Ticker />
      <section id="confianca" className="v2-section v2-section--dark">
        <DramaSplit />
      </section>
      <section className="v2-section v2-section--dark">
        <h2 className="v2-section-title">Mobilidade que vira vantagem</h2>
        <ScenarioCards />
      </section>
      <section className="v2-section v2-section--dark">
        <h2 className="v2-section-title">Como funciona</h2>
        <HowItWorks />
      </section>
      <section id="demo" className="v2-section v2-section--demo">
        <h2 className="v2-section-title">Demo · seu canal</h2>
        <p className="v2-section-sub">WhatsApp · Telegram · SMS · E-mail</p>
        <div className="v2-demo-grid">
          <WhatsAppMockV2 glow />
          <ChannelMock channel="telegram" />
          <ChannelMock channel="sms" />
        </div>
      </section>
      <ClosingCta dark />
    </div>
  );
}

/** F — Brutalist editorial: tipografia oversized, blocos amber, assimetria */
export function VariantF() {
  return (
    <div className="v2 v2-f">
      <NavV2 />
      <section className="v2-brutal-hero">
        <div className="v2-brutal-grid">
          <div>
            <p className="v2-brutal-tag">BI Agent / 01</p>
            <h1>
              Faça tomadas
              <br />
              de decisão
              <br />
              <em>no WhatsApp.</em>
            </h1>
          </div>
          <div className="v2-brutal-aside">
            <blockquote>
              “O board não perdoa <strong>0,0%</strong> quando a tabela diz{" "}
              <strong>2,1%</strong>.”
            </blockquote>
            <CtaRowV2 theme="light" />
          </div>
        </div>
        <div className="v2-brutal-phone-row">
          <WhatsAppMockV2 />
          <div className="v2-brutal-stat">
            <span>Validado</span>
            <strong>11,2%</strong>
          </div>
        </div>
      </section>
      <section className="v2-brutal-band">
        <span>Comercial</span>
        <span>Fiscal</span>
        <span>TI</span>
        <span>Controladoria</span>
        <span>Jurídico</span>
        <span>Perdas</span>
      </section>
      <section className="v2-section">
        <DramaSplit />
        <HowItWorks />
        <ScenarioCards />
      </section>
      <section id="demo" className="v2-section">
        <h2 className="v2-section-title">Multi-canal</h2>
        <div className="v2-demo-grid">
          <WhatsAppMockV2 />
          <ChannelMock channel="telegram" />
          <ChannelMock channel="email" />
        </div>
      </section>
      <ClosingCta />
    </div>
  );
}

/** G — Product theatre: palco claro, phone gigante, spotlight */
export function VariantG() {
  return (
    <div className="v2 v2-g">
      <div className="v2-spotlight" aria-hidden />
      <NavV2 />
      <section className="v2-theatre">
        <div className="v2-theatre-copy">
          <h1>
            Seu BI,
            <br />
            na palma.
            <br />
            <span className="v2-accent">Validado.</span>
          </h1>
          <p>Valor que bate com o report — no canal que sua equipe já usa.</p>
          <CtaRowV2 theme="light" />
        </div>
        <div className="v2-theatre-phone">
          <WhatsAppMockV2 glow />
        </div>
      </section>
      <section className="v2-trust-bar">
        <div>
          <span className="v2-trust-label">Card errado</span>
          <strong className="v2-trust-bad">0,0%</strong>
        </div>
        <div className="v2-trust-arrow">→</div>
        <div>
          <span className="v2-trust-label">BI Agent</span>
          <strong className="v2-trust-good">11,2%</strong>
        </div>
      </section>
      <Ticker />
      <section className="v2-section">
        <h2 className="v2-section-title">Onde você decide</h2>
        <ScenarioCards />
      </section>
      <section id="demo" className="v2-section">
        <h2 className="v2-section-title">Demo · multi-canal</h2>
        <div className="v2-demo-grid">
          <WhatsAppMockV2 glow />
          <ChannelMock channel="telegram" />
          <ChannelMock channel="sms" />
        </div>
      </section>
      <ClosingCta />
    </div>
  );
}
