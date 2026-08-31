"use client";

import { useId, useState } from "react";
import { PARADIGMS } from "@/components/bi-agent/copy";
import { CheckBadgeIcon } from "@/components/bi-agent/icons";
import { StageCtas } from "./stage-ctas";

type Moment = {
  id: string;
  badge: string;
  title: string;
  paradigmId: (typeof PARADIGMS)[number]["id"];
  sceneIdx: number;
};

/** Day moments → proof chat. Slide 3 = Insight. */
const MOMENTS: Moment[] = [
  { id: "reuniao", badge: "Na reunião", title: "Alguém soltou um número. Você confere.", paradigmId: "correcao", sceneIdx: 0 },
  { id: "grupo", badge: "No grupo", title: "Antes de postar a meta.", paradigmId: "correcao", sceneIdx: 1 },
  { id: "leitura", badge: "Na leitura", title: "O número — e o que ele significa.", paradigmId: "insight", sceneIdx: 0 },
  { id: "areas", badge: "Entre áreas", title: "Seu recorte no olhar do outro time.", paradigmId: "cross", sceneIdx: 0 },
];

const MODE_LINE: Record<string, string> = {
  correcao: "Esse número é o filtro errado.",
  atencao: "O que costuma passar batido naquele indicador.",
  insight: "O número — e o que fazer com ele.",
  cross: "Seu recorte, ligado ao que o outro time olha.",
};

const TAB_LABEL: Record<string, string> = {
  correcao: "Correção",
  atencao: "Atenção",
  insight: "Insight",
  cross: "Ponte",
};

function stripToMetric(html: string): { metric: string; body: string } {
  const strong = html.match(/<strong>([^<]+)<\/strong>/);
  const metric = strong?.[1] ?? "";
  const body = html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return { metric, body };
}

export function StageSituations() {
  const [paradigmId, setParadigmId] = useState(PARADIGMS[0].id);
  const [sceneIdx, setSceneIdx] = useState(0);
  const [tick, setTick] = useState(0);
  const titleId = useId();
  const panelId = useId();

  const paradigm = PARADIGMS.find((p) => p.id === paradigmId) ?? PARADIGMS[0];
  const scene = paradigm.scenes[Math.min(sceneIdx, paradigm.scenes.length - 1)];
  const multiScene = paradigm.scenes.length > 1;
  const agentMsg = scene.messages.find((m) => m.role === "agent");
  const userMsg = scene.messages.find((m) => m.role === "user");
  const { metric } = agentMsg ? stripToMetric(agentMsg.html) : { metric: "" };

  function pickMoment(i: number) {
    const m = MOMENTS[i];
    setParadigmId(m.paradigmId);
    setSceneIdx(m.sceneIdx);
    setTick((t) => t + 1);
  }

  function pickParadigm(id: string) {
    setParadigmId(id);
    setSceneIdx(0);
    setTick((t) => t + 1);
  }

  const activeMomentId =
    MOMENTS.find((m) => m.paradigmId === paradigmId && m.sceneIdx === sceneIdx)?.id ?? null;

  return (
    <section id="situacoes" className="stg-day" aria-labelledby={titleId}>
      <div className="stg-wrap">
        <header className="stg-day-head">
          <p className="stg-day-eye">Situações do dia</p>
          <h2 id={titleId}>
            Momentos em que o report <em>chega tarde</em>.
          </h2>
          <p className="stg-day-lede">
            Quatro horas do dia em que o report atrasa. Em cada uma, o número certo — e o filtro escrito.
          </p>
        </header>

        <div className="stg-day-grid">
          <ul className="stg-day-list" role="list">
            {MOMENTS.map((m, i) => (
              <li key={m.id}>
                <button
                  type="button"
                  className={activeMomentId === m.id ? "is-on" : ""}
                  aria-pressed={activeMomentId === m.id}
                  onClick={() => pickMoment(i)}
                >
                  <span className="stg-day-idx">0{i + 1}</span>
                  <span>
                    <strong>{m.badge}</strong>
                    <em>{m.title}</em>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div id={panelId} className="stg-day-proof" key={tick}>
            <div className="stg-day-proof-meta">
              <p className="stg-day-mode-line">{MODE_LINE[paradigmId]}</p>
              {multiScene ? (
                <div className="stg-day-chips" role="tablist" aria-label="Departamentos">
                  {paradigm.scenes.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      role="tab"
                      aria-selected={i === sceneIdx}
                      className={i === sceneIdx ? "is-on" : ""}
                      onClick={() => {
                        setSceneIdx(i);
                        setTick((t) => t + 1);
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="stg-day-scene-label">{scene.label}</p>
              )}
            </div>

            <div className="stg-day-phone">
              <div className="stg-day-phone-chrome" aria-hidden>
                <span />
              </div>
              <div className="stg-day-modes" role="tablist" aria-label="Tipo de resposta">
                {PARADIGMS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={p.id === paradigmId}
                    className={p.id === paradigmId ? "is-on" : ""}
                    onClick={() => pickParadigm(p.id)}
                  >
                    {TAB_LABEL[p.id] ?? p.name}
                  </button>
                ))}
              </div>
              <div className="stg-day-phone-bar">
                <span>BI Agent</span>
                <span>online</span>
              </div>
              <div className="stg-day-thread">
                {userMsg ? (
                  <div
                    className="stg-day-bubble stg-day-bubble--user"
                    dangerouslySetInnerHTML={{ __html: userMsg.html }}
                  />
                ) : null}
                {agentMsg ? (
                  <div className="stg-day-bubble stg-day-bubble--agent">
                    <span className="stg-day-tick">
                      <CheckBadgeIcon />
                      validado vs fonte
                    </span>
                    <div dangerouslySetInnerHTML={{ __html: agentMsg.html }} />
                  </div>
                ) : null}
              </div>
            </div>

            {metric ? (
              <p className="stg-day-metric-foot" aria-live="polite">
                <span className="stg-day-metric">{metric}</span>
                <span>Mesmo número do seu BI · filtro escrito</span>
              </p>
            ) : null}
          </div>
        </div>

        <div className="stg-day-close">
          <p>Quer esse tipo de resposta no BI que vocês já usam?</p>
          <StageCtas />
        </div>
      </div>
    </section>
  );
}
