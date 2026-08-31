"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PARADIGMS } from "@/components/bi-agent/copy";
import { GOOGLE_BOOKING_URL, whatsAppUrl, WHATSAPP_MSG_BI_AGENT_DEMO } from "@/lib/contact";
import "./stage-situations-lab.css";

type VariantId = "cena" | "cutout" | "produto" | "filme";

const VARIANTS: { id: VariantId; name: string; pitch: string }[] = [
  { id: "cena", name: "01 · Cena", pitch: "Foto full-bleed + métrica tipográfica" },
  { id: "cutout", name: "02 · Cutout", pitch: "Executivo holográfico saindo da foto" },
  { id: "produto", name: "03 · Produto", pitch: "★ Preferida — system design LP (Sinal)" },
  { id: "filme", name: "04 · Filme", pitch: "Still 16:9 + rail de momentos" },
];

const MOMENTS = [
  {
    id: "reuniao",
    badge: "Na reunião",
    title: "Alguém soltou um número. Você confere.",
    result: "Número conferido antes de falar.",
    image: "/prototype/stage/situacoes/reuniao.jpg",
    metric: "R$ 352 mil",
    hint: "Rio · abril · margem",
  },
  {
    id: "grupo",
    badge: "No grupo",
    title: "Antes de postar a meta.",
    result: "94% — não o 112% do grupo.",
    image: "/prototype/stage/situacoes/grupo.jpg",
    metric: "94%",
    hint: "março · meta · região",
  },
  {
    id: "insight",
    badge: "Na leitura",
    title: "O número — e o que ele significa.",
    result: "Ticket sobe; duas contas concentram o salto.",
    image: "/prototype/stage/situacoes/comunicar.jpg",
    metric: "R$ 4,2 mil",
    hint: "+18% · 2 contas = 41%",
  },
  {
    id: "cruzar",
    badge: "Entre áreas",
    title: "Seu recorte no olhar do outro time.",
    result: "Absenteísmo cruzado com OTIF no mesmo turno.",
    image: "/prototype/stage/situacoes/cruzar.jpg",
    metric: "4,8%",
    hint: "planta SP · 3 linhas · OTIF",
  },
] as const;

function LabCtas({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className={`ssl-btns ${tone === "light" ? "ssl-btns--light" : ""}`}>
      <a
        className="ssl-btn ssl-btn--wa"
        href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)}
        target="_blank"
        rel="noreferrer"
      >
        Entrar em contato
      </a>
      <a className="ssl-btn ssl-btn--accent" href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
        Agendar Demonstração
      </a>
    </div>
  );
}

function MomentDots({
  active,
  onPick,
}: {
  active: number;
  onPick: (i: number) => void;
}) {
  return (
    <div className="ssl-dots" role="tablist" aria-label="Momentos">
      {MOMENTS.map((mom, idx) => (
        <button
          key={mom.id}
          type="button"
          role="tab"
          aria-selected={idx === active}
          aria-label={mom.badge}
          className={idx === active ? "is-on" : ""}
          onClick={() => onPick(idx)}
        />
      ))}
    </div>
  );
}

function ParadigmBlock({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [id, setId] = useState(PARADIGMS[0].id);
  const [sceneIdx, setSceneIdx] = useState(0);
  const paradigm = PARADIGMS.find((p) => p.id === id) ?? PARADIGMS[0];
  const scene = paradigm.scenes[Math.min(sceneIdx, paradigm.scenes.length - 1)];

  useEffect(() => {
    setSceneIdx(0);
  }, [id]);

  return (
    <div className={`ssl-para ${tone === "light" ? "ssl-para--light" : ""}`}>
      <div className="ssl-para-copy">
        <p className="ssl-kicker">Na conversa</p>
        <h2>
          Quatro jeitos de <em>responder</em>.
        </h2>
        <p className="ssl-lede">Correção · Atenção · Insight · Cross-BI (Ponte). Um mock por vez.</p>
        <div className="ssl-tabs" role="tablist" aria-label="Paradigmas">
          {PARADIGMS.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === id}
              className={p.id === id ? "is-on" : ""}
              onClick={() => setId(p.id)}
            >
              {p.id === "cross" ? "Ponte" : p.name}
            </button>
          ))}
        </div>
        <p className="ssl-desc">{paradigm.desc}</p>
        {paradigm.scenes.length > 1 ? (
          <div className="ssl-chips" role="tablist" aria-label="Departamentos">
            {paradigm.scenes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === sceneIdx}
                className={i === sceneIdx ? "is-on" : ""}
                onClick={() => setSceneIdx(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        ) : null}
        <LabCtas tone={tone} />
      </div>
      <div className="ssl-phone">
        <div className="ssl-phone-bar">
          <span>BI Agent</span>
          <span>online</span>
        </div>
        <div className="ssl-thread">
          {scene.messages.map((m, i) => (
            <div
              key={`${scene.label}-${i}`}
              className={`ssl-bubble ssl-bubble--${m.role}`}
              dangerouslySetInnerHTML={{ __html: m.html }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function VariantCena() {
  const [i, setI] = useState(0);
  const m = MOMENTS[i];
  return (
    <div className="ssl-v">
      <section className="ssl-cena">
        <div className="ssl-cena-media" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={m.id} src={m.image} alt="" className="ssl-cena-img" />
          <div className="ssl-cena-shade" />
        </div>
        <div className="ssl-wrap ssl-cena-grid">
          <div className="ssl-cena-copy">
            <p className="ssl-kicker">Situações do dia</p>
            <h2>
              Onde o Agent entra.
              <br />
              <em>Sem aba. Sem delay.</em>
            </h2>
            <p className="ssl-lede">Reunião, grupo, leitura, ponte. Abrir o report chega tarde.</p>
            <p className="ssl-badge">{m.badge}</p>
            <h3>{m.title}</h3>
            <p className="ssl-metric">{m.metric}</p>
            <p className="ssl-hint">{m.hint}</p>
            <MomentDots active={i} onPick={setI} />
          </div>
          <aside className="ssl-teaser">
            <p className="ssl-badge">{m.badge}</p>
            <p className="ssl-metric ssl-metric--xl">{m.metric}</p>
            <p className="ssl-hint">{m.hint}</p>
            <p className="ssl-teaser-foot">{m.result}</p>
          </aside>
        </div>
      </section>
      <section className="ssl-band">
        <div className="ssl-wrap">
          <ParadigmBlock />
        </div>
      </section>
    </div>
  );
}

function VariantCutout() {
  const [i, setI] = useState(0);
  const m = MOMENTS[i];
  return (
    <div className="ssl-v">
      <section className="ssl-cut">
        <div className="ssl-cut-media" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={m.id} src={m.image} alt="" className="ssl-cut-bg" />
          <div className="ssl-cut-shade" />
        </div>
        <div className="ssl-wrap ssl-cut-grid">
          <div className="ssl-cut-copy">
            <p className="ssl-kicker">Situações do dia</p>
            <h2>
              O número na mão.
              <br />
              <em>Antes da sala.</em>
            </h2>
            <p className="ssl-badge">{m.badge}</p>
            <h3>{m.title}</h3>
            <p className="ssl-metric">{m.metric}</p>
            <p className="ssl-hint">{m.hint}</p>
            <p className="ssl-lede ssl-lede--tight">{m.result}</p>
            <MomentDots active={i} onPick={setI} />
          </div>
          <div className="ssl-cut-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/prototype/stage/situacoes/executivo-holograma-bi.png"
              alt="Executivo com holograma BI no celular"
              className="ssl-cut-png"
            />
          </div>
        </div>
      </section>
      <section className="ssl-band">
        <div className="ssl-wrap">
          <ParadigmBlock />
        </div>
      </section>
    </div>
  );
}

function VariantProduto() {
  const [i, setI] = useState(0);
  const m = MOMENTS[i];
  return (
    <div className="ssl-v ssl-v--produto-ds">
      <section className="ssl-prod">
        <div className="ssl-wrap">
          <header className="ssl-prod-head">
            <p className="ssl-kicker">Situações do dia</p>
            <h2>
              Momentos em que o report <em>chega tarde</em>.
            </h2>
            <p className="ssl-lede">
              Correção, atenção, insight e ponte — sem abrir aba. O Agent responde no canal com o
              número da fonte.
            </p>
          </header>
          <div className="ssl-prod-grid">
            <ul className="ssl-prod-list">
              {MOMENTS.map((mom, idx) => (
                <li key={mom.id}>
                  <button
                    type="button"
                    className={idx === i ? "is-on" : ""}
                    onClick={() => setI(idx)}
                  >
                    <span className="ssl-prod-idx">0{idx + 1}</span>
                    <span>
                      <strong>{mom.badge}</strong>
                      <em>{mom.title}</em>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="ssl-prod-panel">
              <p className="ssl-badge">{m.badge}</p>
              <p className="ssl-metric ssl-metric--xl">{m.metric}</p>
              <p className="ssl-hint">{m.hint}</p>
              <p className="ssl-prod-result">{m.result}</p>
              <div className="ssl-prod-fakephone" aria-hidden>
                <p className="ssl-prod-q">Confere esse número?</p>
                <p className="ssl-prod-a">
                  <small>{m.hint}</small>
                  <strong>{m.metric}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ssl-band ssl-band--prod">
        <div className="ssl-wrap">
          <ParadigmBlock tone="light" />
        </div>
      </section>
    </div>
  );
}

function VariantFilme() {
  const [i, setI] = useState(0);
  const m = MOMENTS[i];
  return (
    <div className="ssl-v">
      <section className="ssl-film">
        <div className="ssl-wrap">
          <p className="ssl-kicker">Situações do dia</p>
          <h2>
            Still do dia.
            <br />
            <em>Decisão no bolso.</em>
          </h2>
          <div className="ssl-film-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={m.id} src={m.image} alt="" className="ssl-film-img" />
            <div className="ssl-film-caption">
              <span>{m.badge}</span>
              <strong>{m.metric}</strong>
              <em>{m.hint}</em>
            </div>
          </div>
          <div className="ssl-film-rail">
            {MOMENTS.map((mom, idx) => (
              <button
                key={mom.id}
                type="button"
                className={idx === i ? "is-on" : ""}
                onClick={() => setI(idx)}
              >
                <span>{mom.badge}</span>
                <strong>{mom.metric}</strong>
              </button>
            ))}
          </div>
          <p className="ssl-film-title">{m.title}</p>
        </div>
      </section>
      <section className="ssl-band ssl-band--film">
        <div className="ssl-wrap">
          <ParadigmBlock />
        </div>
      </section>
    </div>
  );
}

export function StageSituationsLab() {
  const [variant, setVariant] = useState<VariantId>("produto");

  return (
    <div className="ssl">
      <header className="ssl-bar">
        <div className="ssl-bar-top">
          <Link href="/prototype/bi-agent-lp/stage">← Stage</Link>
          <span>Lab · escolha a direção das seções</span>
        </div>
        <div className="ssl-switch" role="tablist" aria-label="Variações">
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={variant === v.id}
              className={variant === v.id ? "is-on" : ""}
              onClick={() => setVariant(v.id)}
            >
              <strong>{v.name}</strong>
              <span>{v.pitch}</span>
            </button>
          ))}
        </div>
      </header>

      {variant === "cena" ? <VariantCena /> : null}
      {variant === "cutout" ? <VariantCutout /> : null}
      {variant === "produto" ? <VariantProduto /> : null}
      {variant === "filme" ? <VariantFilme /> : null}
    </div>
  );
}
