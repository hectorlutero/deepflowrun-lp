"use client";

import { useState } from "react";
import {
  PaperAirplaneIcon,
  BoltIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  TagIcon,
} from "./icons";

type Palette = {
  id: string;
  name: string;
  thesis: string;
  vsConsulting: string;
  tokens: {
    paper: string;
    ink: string;
    muted: string;
    accent: string;
    accentSoft: string;
    secondary: string;
    surface: string;
    wa: string;
  };
};

const PALETTES: Palette[] = [
  {
    id: "sinal",
    name: "Sinal",
    thesis: "Cyan como voz do produto — dado que chega como sinal, não como dashboard.",
    vsConsulting:
      "Consultoria usa cyan + emerald em equilíbrio. Aqui o cyan lidera; emerald só no WhatsApp/sucesso.",
    tokens: {
      paper: "#f4f8fb",
      ink: "#0b1f3a",
      muted: "rgba(11, 31, 58, 0.62)",
      accent: "#22d3ee",
      accentSoft: "rgba(34, 211, 238, 0.14)",
      secondary: "#0fb5d4",
      surface: "#ffffff",
      wa: "#10b981",
    },
  },
  {
    id: "prova",
    name: "Prova",
    thesis: "Emerald lidera — confiança, validação, número que fecha contra a fonte.",
    vsConsulting:
      "Inverte a hierarquia: emerald vira identidade do BI Agent; cyan fica em demos/links secundários.",
    tokens: {
      paper: "#f3faf7",
      ink: "#0b1f3a",
      muted: "rgba(11, 31, 58, 0.62)",
      accent: "#10b981",
      accentSoft: "rgba(16, 185, 129, 0.14)",
      secondary: "#059669",
      surface: "#ffffff",
      wa: "#059669",
    },
  },
  {
    id: "canal",
    name: "Canal",
    thesis: "Teal conversacional — ponte entre WhatsApp e BI, sem parecer app de chat genérico.",
    vsConsulting:
      "Tom mais ‘produto de canal’. Teal (#0d9488) é exclusivo do BI Agent; consultoria fica no cyan elétrico.",
    tokens: {
      paper: "#f2f7f6",
      ink: "#0b1f3a",
      muted: "rgba(11, 31, 58, 0.62)",
      accent: "#0d9488",
      accentSoft: "rgba(13, 148, 136, 0.14)",
      secondary: "#14b8a6",
      surface: "#ffffff",
      wa: "#10b981",
    },
  },
  {
    id: "gelo",
    name: "Gelo",
    thesis: "Papel frio + cyan cirúrgico — precisão analítica, quase instrumento de laboratório.",
    vsConsulting:
      "A consultoria é mais ‘humana/operacional’. Gelo deixa o BI Agent mais técnico e product-led.",
    tokens: {
      paper: "#eef2f7",
      ink: "#050d1c",
      muted: "rgba(5, 13, 28, 0.58)",
      accent: "#22d3ee",
      accentSoft: "rgba(34, 211, 238, 0.12)",
      secondary: "#5be3f4",
      surface: "#f8fafc",
      wa: "#10b981",
    },
  },
];

function MiniHero({ p }: { p: Palette }) {
  const t = p.tokens;
  return (
    <div
      className="pal-mini"
      style={
        {
          "--p-paper": t.paper,
          "--p-ink": t.ink,
          "--p-muted": t.muted,
          "--p-accent": t.accent,
          "--p-accent-soft": t.accentSoft,
          "--p-secondary": t.secondary,
          "--p-surface": t.surface,
          "--p-wa": t.wa,
        } as React.CSSProperties
      }
    >
      <div className="pal-mini-nav">
        <strong>BI Agent</strong>
        <span>DeepFlowRun</span>
      </div>
      <div className="pal-mini-grid">
        <div>
          <p className="pal-mini-eye">BI Agent / 01</p>
          <h3>
            Coloque o seu BI
            <br />
            no WhatsApp.
          </h3>
          <p className="pal-mini-lede">
            Pergunte em linguagem natural. Resposta com recorte certo.
          </p>
          <div className="pal-mini-btns">
            <span className="pal-btn pal-btn--wa">WhatsApp</span>
            <span className="pal-btn pal-btn--accent">Agendar</span>
          </div>
        </div>
        <div className="pal-mini-phone">
          <div className="pal-bubble pal-bubble--user">Margem Rio abril — bate?</div>
          <div className="pal-bubble pal-bubble--agent">
            <small>Rio · abril · margem</small>
            <strong>R$ 352 mil</strong>
          </div>
        </div>
      </div>
      <div className="pal-mini-cards">
        <article>
          <PaperAirplaneIcon />
          <b>No avião</b>
        </article>
        <article>
          <BuildingOffice2Icon />
          <b>Na reunião</b>
        </article>
        <article>
          <BoltIcon />
          <b>Antes deles</b>
        </article>
      </div>
    </div>
  );
}

export function PaletteLab() {
  const [active, setActive] = useState(PALETTES[0].id);
  const current = PALETTES.find((p) => p.id === active) ?? PALETTES[0];

  return (
    <div className="pal-lab">
      <header className="pal-lab-head">
        <p className="pal-lab-kicker">Protótipo · paletas BI Agent</p>
        <h1>Como o produto se diferencia da consultoria</h1>
        <p>
          A DeepFlowRun (consultoria) já fala <strong>navy + cyan + emerald</strong>. O BI Agent
          precisa da mesma família — sem amarelo — mas com <em>um sotaque</em> próprio. Abaixo:
          quatro direções. Clique para comparar no mock.
        </p>
      </header>

      <div className="pal-lab-tabs">
        {PALETTES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`pal-lab-tab ${p.id === active ? "pal-lab-tab--on" : ""}`}
            onClick={() => setActive(p.id)}
            style={{ ["--tab-accent" as string]: p.tokens.accent }}
          >
            <span className="pal-swatch-row">
              <i style={{ background: p.tokens.paper }} />
              <i style={{ background: p.tokens.ink }} />
              <i style={{ background: p.tokens.accent }} />
              <i style={{ background: p.tokens.wa }} />
            </span>
            {p.name}
          </button>
        ))}
      </div>

      <div className="pal-lab-body">
        <div>
          <h2>{current.name}</h2>
          <p className="pal-thesis">{current.thesis}</p>
          <p className="pal-vs">
            <strong>vs consultoria:</strong> {current.vsConsulting}
          </p>
          <div className="pal-token-grid">
            {Object.entries(current.tokens).map(([k, v]) => (
              <div key={k} className="pal-token">
                <span className="pal-token-chip" style={{ background: v }} />
                <code>{k}</code>
                <small>{v}</small>
              </div>
            ))}
          </div>
          <ul className="pal-icons-demo">
            <li>
              <ChatBubbleLeftRightIcon /> Pergunta
            </li>
            <li>
              <TagIcon /> Recorte
            </li>
            <li>
              <CheckBadgeIcon /> Prova
            </li>
            <li>
              <LockClosedIcon /> Desktop
            </li>
            <li>
              <DevicePhoneMobileIcon /> Canal
            </li>
          </ul>
        </div>
        <MiniHero p={current} />
      </div>

      <section className="pal-compare">
        <h2>Comparativo rápido</h2>
        <div className="pal-compare-grid">
          {PALETTES.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`pal-compare-card ${p.id === active ? "pal-compare-card--on" : ""}`}
              onClick={() => setActive(p.id)}
            >
              <div className="pal-compare-bar" style={{ background: p.tokens.accent }} />
              <strong>{p.name}</strong>
              <span>{p.thesis}</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="pal-lab-foot">
        <p>
          <strong>Recomendação:</strong> <em>Canal</em> (teal) se quiser o BI Agent claramente
          “produto conversacional”; <em>Sinal</em> (cyan) se quiser máxima continuidade com a marca
          DeepFlowRun. Evite amarelo — ele compete com o cyan e puxa tom “alerta genérico”.
        </p>
        <a href="/bi-agent">← Voltar à LP</a>
      </footer>
    </div>
  );
}
