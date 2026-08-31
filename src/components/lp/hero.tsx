import { AnimatedLogo } from "./animated-logo";
import { ArrowRight, WhatsApp } from "./icons";
import { whatsAppUrl, WHATSAPP_MSG_DIAGNOSTICO } from "@/lib/contact";

const trust = [
  { value: "14", suffix: "d", label: "Do diagnóstico ao ar" },
  { value: "+38", suffix: "%", label: "Throughput automatizado" },
  { value: "−62", suffix: "%", label: "Toques manuais" },
  { value: "B2B", suffix: null, label: "Mid-market e enterprise" },
];

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Hero">
      <svg
        className="hero-bg-grid"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dotgrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="1920" height="1080" fill="url(#dotgrid)" />
      </svg>
      <div className="hero-bg-radial" />

      <div className="wrap hero-content">
        <div className="hero-text">
          <span className="eyebrow reveal reveal-1">
            Diagnóstico · IA aplicada · Brasil
          </span>
          <h1 className="reveal reveal-2">
            Sua operação está te custando
            <br />
            <span className="lift">mais</span> do que você imagina.
          </h1>
          <p className="lede reveal reveal-3">
            A DeepFlowRun entra na sua empresa, mapeia onde o dinheiro está
            escapando em processos manuais e implementa Inteligência Artificial
            e automações que mudam isso — de verdade.
          </p>

          <div className="hero-cta reveal reveal-4">
            <a className="btn btn-primary" href="#diagnostico">
              Quero um diagnóstico
              <ArrowRight className="ico" />
            </a>
            <a
              className="btn btn-ghost-dark"
              href={whatsAppUrl(WHATSAPP_MSG_DIAGNOSTICO)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="ico" />
              Falar com especialista no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-art reveal reveal-3" aria-hidden="true">
          <AnimatedLogo />
        </div>

        <div className="hero-trust reveal reveal-5">
          {trust.map((t) => (
            <div key={t.label} className="item">
              <div className="v">
                {t.value}
                {t.suffix && <span className="pct">{t.suffix}</span>}
              </div>
              <div className="lbl">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
