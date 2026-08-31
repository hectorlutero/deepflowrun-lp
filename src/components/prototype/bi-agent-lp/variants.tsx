"use client";

import {
  CarouselTeaser,
  CtaRow,
  HeroCopy,
  ProtoNav,
  WhatsAppMock,
  WrongNumberDrama,
} from "./shared";

export function VariantA() {
  return (
    <div className="proto-root proto-variant-a">
      <div className="proto-grid-bg" aria-hidden />
      <ProtoNav dark />
      <section className="proto-hero proto-hero--dark">
        <div className="proto-hero-grid">
          <div className="proto-hero-copy">
            <HeroCopy />
            <WrongNumberDrama layout="toast" />
            <CtaRow inverted />
          </div>
          <div className="proto-hero-visual">
            <div className="proto-glow" aria-hidden />
            <WhatsAppMock />
            <WrongNumberDrama layout="pill" />
          </div>
        </div>
      </section>
      <section id="confianca" className="proto-strip proto-strip--dark">
        <h2>Confiabilidade</h2>
        <ul>
          <li>Validação live antes do deploy</li>
          <li>Recorte sempre declarado</li>
          <li>Card errado ≠ resposta do agente</li>
        </ul>
      </section>
      <CarouselTeaser />
    </div>
  );
}

export function VariantB() {
  return (
    <div className="proto-root proto-variant-b">
      <ProtoNav />
      <section className="proto-hero proto-hero--editorial">
        <div className="proto-hero-stack">
          <HeroCopy />
          <WrongNumberDrama layout="split" />
          <CtaRow />
          <div className="proto-hero-mock-wrap">
            <WhatsAppMock />
          </div>
        </div>
      </section>
      <section className="proto-quote-block">
        <blockquote>
          “O board não perdoa <em>0,0%</em> quando a tabela diz <strong>2,1%</strong>.”
        </blockquote>
      </section>
      <CarouselTeaser />
    </div>
  );
}

export function VariantC() {
  return (
    <div className="proto-root proto-variant-c">
      <ProtoNav dark />
      <section className="proto-hero proto-hero--dark proto-hero--split-bottom">
        <div className="proto-hero-grid">
          <div className="proto-hero-copy">
            <HeroCopy />
            <WrongNumberDrama layout="inline" />
            <CtaRow inverted />
          </div>
          <div className="proto-hero-visual">
            <WhatsAppMock />
          </div>
        </div>
      </section>
      <section className="proto-body-light">
        <div className="proto-body-inner">
          <div className="proto-scenario-row">
            <article>
              <span>✈</span>
              <h3>No avião</h3>
              <p>Sem laptop. Decisão no WhatsApp.</p>
            </article>
            <article>
              <span>◉</span>
              <h3>Na reunião</h3>
              <p>Ideia → número em 10s.</p>
            </article>
            <article>
              <span>⚡</span>
              <h3>Concorrência</h3>
              <p>Quem abre o PBI decide tarde.</p>
            </article>
          </div>
          <WrongNumberDrama layout="split" />
        </div>
      </section>
      <CarouselTeaser />
    </div>
  );
}

export function VariantD() {
  return (
    <div className="proto-root proto-variant-d">
      <ProtoNav />
      <section className="proto-hero proto-hero--product">
        <div className="proto-product-layout">
          <WhatsAppMock />
          <div className="proto-product-copy">
            <HeroCopy />
            <CtaRow />
            <WrongNumberDrama layout="toast" />
          </div>
        </div>
      </section>
      <section className="proto-minimal-bar">
        <span>11,2% · Rio · maio/23</span>
        <span>Validado ✓</span>
        <span>vs card 0,0% ✗</span>
      </section>
      <CarouselTeaser />
    </div>
  );
}
