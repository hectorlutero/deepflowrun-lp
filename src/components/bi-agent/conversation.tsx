"use client";

import { useEffect, useState } from "react";
import { PARADIGMS } from "./copy";
import { ChatBubble } from "./mocks";

export function ConversationSection() {
  const [paradigmId, setParadigmId] = useState(PARADIGMS[0].id);
  const paradigm = PARADIGMS.find((p) => p.id === paradigmId) ?? PARADIGMS[0];
  const [sceneIdx, setSceneIdx] = useState(0);

  useEffect(() => {
    setSceneIdx(0);
  }, [paradigmId]);

  const scene = paradigm.scenes[Math.min(sceneIdx, paradigm.scenes.length - 1)];
  const multiScene = paradigm.scenes.length > 1;

  return (
    <section id="confianca" className="ba-section ba-section--muted">
      <div className="ba-wrap">
        <p className="ba-eyebrow">Na conversa</p>
        <h2 className="ba-title ba-display">Pergunta simples. Resposta que vale uma decisão.</h2>
        <p className="ba-lede">
          Correção quando alguém erra o recorte na reunião. Alerta quando a pergunta esconde uma
          armadilha comum. Insight quando você precisa saber o que o número significa. Ponte quando
          outro departamento precisa entrar na conversa.
        </p>

        <div className="ba-paradigm-tabs" role="tablist" aria-label="Paradigmas">
          {PARADIGMS.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === paradigmId}
              className={`ba-paradigm-tab ${p.id === paradigmId ? "ba-paradigm-tab--active" : ""}`}
              onClick={() => setParadigmId(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <p className="ba-paradigm-desc">{paradigm.desc}</p>

        {multiScene && (
          <div className="ba-scene-tabs" role="tablist" aria-label="Departamentos">
            {paradigm.scenes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === sceneIdx}
                className={`ba-scene-tab ${i === sceneIdx ? "ba-scene-tab--active" : ""}`}
                onClick={() => setSceneIdx(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <div className="ba-chat-panel">
          {!multiScene && <p className="ba-chat-label">{scene.label}</p>}
          <div className="ba-chat-thread">
            {scene.messages.map((msg, i) => (
              <ChatBubble key={`${scene.label}-${i}`} role={msg.role} html={msg.html} />
            ))}
          </div>
        </div>

        <p className="ba-aside ba-aside--after-chat">
          Nós validamos cada resposta contra a sua fonte antes de ir ao ar — e o recorte vem escrito na
          conversa.
        </p>
      </div>
    </section>
  );
}
