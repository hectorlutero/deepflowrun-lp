import {
  CHANNELS,
  CONNECTORS,
  DEPARTMENTS,
  FAQ_ITEMS,
  HOW_IT_WORKS,
  PLATFORMS,
  PROBLEM_POINTS,
  SCENARIOS,
  SEGMENTS,
} from "./copy";
import { BiIcon } from "./bi-icon";
import { CtaRow, StickyBar } from "./ctas";
import { ConversationSection } from "./conversation";
import { DemoCarousel } from "./demo-carousel";
import { HeroPhoneMock } from "./mocks";
import { BiAgentNav } from "./nav";

export function BiAgentLanding() {
  return (
    <>
      <BiAgentNav />
      <main>
        {/* 01 Hero */}
        <section className="ba-hero">
          <div className="ba-wrap">
            <div className="ba-hero-grid">
              <div>
                <p className="ba-eyebrow">BI Agent / 01</p>
                <h1 className="ba-display">
                  Coloque o seu BI no WhatsApp.
                  <br />
                  Decida antes de abrirem o report.
                </h1>
                <blockquote className="ba-pullquote">
                  Errou no filtro do BI e apresentou número errado para a diretoria.
                </blockquote>
                <p className="ba-lede">
                  Pergunte em linguagem natural no WhatsApp. A resposta traz o{" "}
                  <strong>mesmo número da sua base analítica</strong>, sem o risco de recorte errado por
                  engano.
                </p>
                <div style={{ marginTop: 24 }}>
                  <CtaRow showDemo={false} />
                </div>
                <div className="ba-connectors">
                  Conectamos com{" "}
                  <strong>{CONNECTORS.slice(0, -1).join(", ")} e {CONNECTORS.at(-1)}</strong> e outras
                  fontes que sua empresa já usa.
                  <div className="ba-connector-chips">
                    {CONNECTORS.map((c) => (
                      <span key={c} className="ba-connector-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ba-hero-stage">
                <div className="ba-stage-glow" aria-hidden />
                <HeroPhoneMock />
                <a className="ba-btn ba-btn--cyan ba-demo-pill" href="#demo">
                  Ver demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Praticidade */}
        <section className="ba-section">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Praticidade</p>
            <h2 className="ba-title ba-display">Onde a decisão acontece</h2>
            <p className="ba-lede">Velocidade com número que fecha. Sem abrir o desktop.</p>
            <div className="ba-scenarios">
              {SCENARIOS.map((s) => (
                <article key={s.title} className={`ba-scenario ba-scenario--${s.accent}`}>
                  <BiIcon name={s.icon} className="ba-icon ba-scenario-icon" />
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </article>
              ))}
            </div>
            <p className="ba-close-line">
              Nós colocamos a decisão no ritmo do negócio — não no ritmo do export.
            </p>
          </div>
        </section>

        {/* 03 Problema */}
        <section className="ba-section ba-section--muted">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Problema</p>
            <h2 className="ba-title ba-display">Seu BI não deveria depender de quem está na frente do PC</h2>
            <div className="ba-problem-split">
              <ol className="ba-problem-list">
                {PROBLEM_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
              <div className="ba-problem-visual">
                <div className="ba-problem-card ba-problem-card--locked">
                  <BiIcon name="lock" className="ba-icon ba-problem-icon" />
                  <p>
                    BI no
                    <br />
                    desktop
                  </p>
                </div>
                <div className="ba-problem-card ba-problem-card--open">
                  <BiIcon name="chat" className="ba-icon ba-problem-icon" />
                  <p>
                    Decisão no
                    <br />
                    WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Como funciona */}
        <section className="ba-section">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Como funciona</p>
            <h2 className="ba-title ba-display">Três passos</h2>
            <div className="ba-flow">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.n} className="ba-flow-step">
                  <span className="ba-flow-n">{step.n}</span>
                  <BiIcon name={step.icon} className="ba-icon ba-flow-icon" />
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              ))}
            </div>
            <p className="ba-aside">
              Não é chat genérico sobre BI. É consulta à <strong>sua</strong> camada de dados — com
              contrato numérico.
            </p>
          </div>
        </section>

        {/* 05 Na conversa */}
        <ConversationSection />

        {/* 06 Plataformas */}
        <section id="plataformas" className="ba-section">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Plataformas</p>
            <h2 className="ba-title ba-display">
              Estas são as ferramentas com as quais trabalhamos, além do Power BI.
            </h2>
            <div className="ba-platform-wall">
              {PLATFORMS.map((p) => (
                <span key={p} className="ba-platform-chip">
                  {p}
                </span>
              ))}
              <span className="ba-platform-chip">+ API / SQL / semantic layer</span>
            </div>
            <p className="ba-aside">
              Nós conectamos na camada analítica que sua empresa já usa. O agente funciona igual — muda a
              fonte, não a experiência.
            </p>
          </div>
        </section>

        {/* 07 Canais */}
        <section className="ba-section ba-section--muted">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Canais</p>
            <h2 className="ba-title ba-display">Um agente. O canal que a equipe já usa.</h2>
            <p className="ba-lede">
              WhatsApp (principal) · Telegram · SMS · E-mail — mesmo motor, mesma validação.
            </p>
            <div className="ba-channels">
              {CHANNELS.map((ch) => (
                <article
                  key={ch.id}
                  className={`ba-channel-card ${ch.primary ? "ba-channel-card--primary" : ""}`}
                >
                  <p className="ba-channel-name">{ch.name}</p>
                  <p className="ba-channel-copy">{ch.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 08 Departamentos & segmentos */}
        <section className="ba-section ba-section--dark">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Departamentos</p>
            <h2 className="ba-title ba-display">Um agente por área — falando a língua de cada departamento</h2>
            <p className="ba-lede" style={{ color: "rgba(226,232,240,0.72)" }}>
              Nós configuramos um pack por report: métricas, aliases e validação numérica daquela área.
            </p>
            <div className="ba-chip-grid">
              {DEPARTMENTS.map((d) => (
                <span key={d} className="ba-chip">
                  {d}
                </span>
              ))}
            </div>

            <div className="ba-dept-band">
              <p className="ba-eyebrow">Segmentos</p>
              <h2 className="ba-title ba-display">Segmentos que atendemos</h2>
              <p className="ba-lede" style={{ color: "rgba(226,232,240,0.72)" }}>
                O padrão é o mesmo: linguagem natural, recorte certo, prova contra a fonte. A diferença
                está no report — não no produto.
              </p>
              <div className="ba-chip-grid">
                {SEGMENTS.map((s) => (
                  <span key={s} className="ba-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 09 Demo */}
        <section id="demo" className="ba-section">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Demo</p>
            <h2 className="ba-title ba-display">Veja a conversa no seu canal</h2>
            <DemoCarousel />
          </div>
        </section>

        {/* 10 Parceiros */}
        <section className="ba-section ba-section--muted">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Parceiros</p>
            <h2 className="ba-title ba-display">
              Vamos conversar — para você vender como se fosse da sua empresa.
            </h2>
            <div className="ba-partners-card">
              <p>
                Whitelabel, multi-cliente, onboarding com prova numérica. Nós cuidamos da camada
                conversacional e da validação; você leva o relacionamento com o cliente.
              </p>
              <CtaRow demoPrimary={false} />
            </div>
          </div>
        </section>

        {/* 11 FAQ */}
        <section id="faq" className="ba-section">
          <div className="ba-wrap">
            <div className="ba-faq-grid">
              <div>
                <p className="ba-eyebrow">FAQ</p>
                <h2 className="ba-title ba-display">Perguntas frequentes</h2>
                <p className="ba-lede">Respostas diretas sobre o produto, a stack e o go-live.</p>
              </div>
              <div className="ba-faq-list">
                {FAQ_ITEMS.map((item, i) => (
                  <details key={item.q} className="ba-faq-item" {...(i === 0 ? { open: true } : {})}>
                    <summary>
                      {item.q}
                      <span className="ba-faq-toggle" aria-hidden>
                        +
                      </span>
                    </summary>
                    <div className="ba-faq-answer">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12 Fechamento */}
        <section className="ba-closing">
          <div className="ba-wrap">
            <p className="ba-eyebrow">Próximo passo</p>
            <h2 className="ba-display">
              Veja o recorte certo
              <br />
              antes da reunião.
            </h2>
            <CtaRow demoPrimary />
          </div>
        </section>
      </main>

      <footer className="ba-footer">
        <div className="ba-wrap">
          <strong>BI Agent</strong> by DeepFlowRun
        </div>
      </footer>

      <StickyBar />
    </>
  );
}
