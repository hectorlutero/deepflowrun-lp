"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  CheckBadgeIcon,
  EllipsisVerticalIcon,
  MicrophoneIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  TagIcon,
  VideoCameraIcon,
} from "@/components/bi-agent/icons";
import { GOOGLE_BOOKING_URL } from "@/lib/contact";

/** Single source of truth — composer types this; sent bubble shows the same string. */
const USER_MSG =
  "O gerente falou que a margem da loja do Rio no mês passado foi de 10% só. Tá certo?";

const WAIT_MSG = "Deixe eu conferir...";

const AGENT_BODY =
  "A margem foi 15%. Fechamento de mês concentra lançamentos — vendedores empurrando venda pra bater meta. Isso explica o salto de 10% para 15%.";

const RECORTE = "Rio · agosto · margem";

type Phase = "type" | "sent" | "wait" | "reply" | "hold";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function StageHeroPhone() {
  const [phase, setPhase] = useState<Phase>("type");
  const [typed, setTyped] = useState("");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduce(true);
      setPhase("hold");
      setTyped(USER_MSG);
      return;
    }

    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        setTyped("");
        setPhase("type");
        for (let i = 1; i <= USER_MSG.length; i++) {
          if (cancelled) return;
          setTyped(USER_MSG.slice(0, i));
          await sleep(22 + (USER_MSG[i - 1] === " " ? 40 : 0));
        }
        await sleep(380);
        if (cancelled) return;
        // typed is already the full USER_MSG — bubble reuses it
        setPhase("sent");
        await sleep(720);
        if (cancelled) return;
        setPhase("wait");
        await sleep(1400);
        if (cancelled) return;
        setPhase("reply");
        await sleep(5600);
        if (cancelled) return;
        setPhase("hold");
        await sleep(2800);
      }
    }

    void loop();
    return () => {
      cancelled = true;
    };
  }, []);

  const isTyping = phase === "type";
  const showUser = phase !== "type";
  const showWait = phase === "wait";
  const showAgent = phase === "reply" || phase === "hold";
  const showTags = phase === "reply" || phase === "hold";
  /** Sent bubble must match what was typed — never a second string. */
  const userBubble = typed.length === USER_MSG.length ? typed : USER_MSG;

  return (
    <div className="stg-stage">
      <div className="stg-stage-glow" aria-hidden />

      <span className={`stg-float-tag stg-float-tag--a ${showTags ? "is-on" : ""}`}>
        <TagIcon />
        {RECORTE}
      </span>
      <span className={`stg-float-tag stg-float-tag--b ${showTags ? "is-on" : ""}`}>
        <CheckBadgeIcon />
        validado vs fonte
      </span>

      <div className={`stg-iphone ${reduce ? "stg-iphone--static" : ""}`} aria-hidden={false}>
        <span className="stg-iphone-btn stg-iphone-btn--silent" aria-hidden />
        <span className="stg-iphone-btn stg-iphone-btn--vol-up" aria-hidden />
        <span className="stg-iphone-btn stg-iphone-btn--vol-down" aria-hidden />
        <span className="stg-iphone-btn stg-iphone-btn--power" aria-hidden />

        <div className="stg-iphone-screen">
          <div className="stg-wa-status">
            <span>9:41</span>
            <span className="stg-wa-island" aria-hidden />
            <span className="stg-wa-status-right">
              <i />
              <i />
              <i />
            </span>
          </div>

          <header className="stg-wa-bar">
            <ArrowLeftIcon />
            <div className="stg-wa-avatar">BI</div>
            <div className="stg-wa-who">
              <strong>BI Agent</strong>
              <span>online</span>
            </div>
            <VideoCameraIcon />
            <PhoneIcon />
            <EllipsisVerticalIcon />
          </header>

          <div className="stg-wa-thread">
            <p className="stg-wa-day">HOJE</p>

            {showUser && (
              <div className="stg-wa-row stg-wa-row--out">
                <div className="stg-wa-bubble stg-wa-bubble--out">
                  {userBubble}
                  <time>9:41</time>
                </div>
              </div>
            )}

            {showWait && (
              <div className="stg-wa-row stg-wa-row--in">
                <div className="stg-wa-bubble stg-wa-bubble--in">
                  {WAIT_MSG}
                  <time>9:41</time>
                </div>
              </div>
            )}

            {showAgent && (
              <div className="stg-wa-row stg-wa-row--in">
                <div className="stg-wa-bubble stg-wa-bubble--in">
                  <span className="stg-recorte">{RECORTE}</span>
                  <span className="stg-metric">15%</span>
                  {AGENT_BODY}
                  <time>9:41</time>
                </div>
              </div>
            )}
          </div>

          <div className="stg-wa-composer">
            <PlusIcon />
            <div className={`stg-wa-input${isTyping ? " is-typing" : " is-ph"}`}>
              {isTyping ? (
                <span className="stg-wa-draft">
                  {typed}
                  <span className="stg-wa-caret" aria-hidden />
                </span>
              ) : (
                "Mensagem"
              )}
            </div>
            <MicrophoneIcon />
          </div>
        </div>
      </div>

      <a className="stg-demo-play" href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
        <PlayIcon className="stg-demo-play-icon" />
        <span className="stg-demo-play-label">Agende uma demonstração</span>
      </a>
    </div>
  );
}
