import type { ReactNode } from "react";
import {
  ArrowUpRight,
  ChartUp,
  Clock,
  Coin,
  Shield,
} from "./icons";

const cards: Array<{ icon: ReactNode; title: string; body: string }> = [
  {
    icon: <Clock />,
    title: "Horas de volta",
    body: "Processos rodando sem intervenção manual — tempo de volta para o que importa.",
  },
  {
    icon: <Coin />,
    title: "Margem recuperada",
    body: "Atividades que hoje custam sem necessidade voltam para o resultado.",
  },
  {
    icon: <ArrowUpRight />,
    title: "Escala sem contratar",
    body: "IA executa o trabalho operacional que antes dependia de gente.",
  },
  {
    icon: <ChartUp />,
    title: "Decisão mais rápida",
    body: "Dados antes presos em planilhas e e-mails, agora disponíveis em tempo real.",
  },
  {
    icon: <Shield />,
    title: "Implementação responsável",
    body: "Sem experimento arriscado na sua operação — sobriedade técnica é parte do método.",
  },
];

export function Value() {
  return (
    <section className="block dark value" aria-label="Proposta de valor">
      <svg
        className="value-bg-leap"
        viewBox="0 0 700 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" fill="none">
          <path d="M 0 80 C 140 100, 240 180, 320 220" />
          <path d="M 0 140 C 160 130, 250 200, 320 222" />
          <path d="M 0 220 C 120 220, 240 220, 320 222" />
          <path d="M 0 300 C 160 310, 240 260, 320 222" />
          <path d="M 0 360 C 140 340, 240 270, 320 222" />
        </g>
        <line
          x1="360"
          y1="120"
          x2="360"
          y2="320"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <line
          x1="390"
          y1="120"
          x2="390"
          y2="320"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <line
          x1="420"
          y1="222"
          x2="700"
          y2="222"
          stroke="#22D3EE"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      <div className="wrap">
        <div className="value-top">
          <div>
            <span className="eyebrow">O salto</span>
            <h2 className="title">
              O que muda quando a IA começa a trabalhar pela sua operação.
            </h2>
          </div>
          <p className="lede">
            Não é &quot;fazer o mesmo, mais rápido&quot;. É o desligamento limpo
            do manual ineficiente para uma operação que roda fluida —
            diagnosticada na raiz e executada com critério.
          </p>
        </div>

        <div className="value-list">
          {cards.map((c) => (
            <article key={c.title} className="vcard">
              <div className="icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
