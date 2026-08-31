import { ArrowRight, CheckCircle, WhatsApp } from "./icons";
import { GOOGLE_BOOKING_URL, whatsAppUrl, WHATSAPP_MSG_DIAGNOSTICO } from "@/lib/contact";

export function ClosingCta() {
  return (
    <section id="diagnostico" className="block dark closing">
      <svg
        className="closing-bg"
        viewBox="0 0 1920 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dotgrid-closing"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <rect width="1920" height="700" fill="url(#dotgrid-closing)" />
        <g stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" fill="none">
          <path d="M 0 180 C 280 220, 480 350, 600 460" />
          <path d="M 0 320 C 300 320, 480 420, 600 460" />
          <path d="M 0 460 C 260 460, 480 460, 600 460" />
          <path d="M 0 600 C 300 620, 480 540, 600 460" />
        </g>
        <line
          x1="660"
          y1="320"
          x2="660"
          y2="600"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.45"
        />
        <line
          x1="700"
          y1="320"
          x2="700"
          y2="600"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.45"
        />
        <line
          x1="760"
          y1="460"
          x2="1920"
          y2="460"
          stroke="#22D3EE"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      <div className="wrap">
        <div className="inner">
          <span className="eyebrow">Run deep</span>
          <h2>
            Sua concorrência já está implementando IA. A pergunta é:{" "}
            <span className="accent">
              você vai escolher onde e como — ou descobrir quando já for tarde?
            </span>
          </h2>
          <p className="sub">
            O primeiro passo é um diagnóstico sem compromisso. Você entende
            onde está perdendo, a gente entende se faz sentido trabalhar
            juntos.
          </p>
          <div className="closing-cta">
            <a className="btn btn-primary" href={GOOGLE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Quero meu diagnóstico
              <ArrowRight className="ico" />
            </a>
            <a
              className="btn btn-ghost-dark"
              href={whatsAppUrl(WHATSAPP_MSG_DIAGNOSTICO)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="ico" />
              Prefiro falar pelo WhatsApp primeiro
            </a>
          </div>
          <div className="closing-micro">
            <CheckCircle />
            Sem compromisso de contratação · sem script de vendas · uma
            conversa honesta sobre a sua operação.
          </div>
        </div>
      </div>
    </section>
  );
}
