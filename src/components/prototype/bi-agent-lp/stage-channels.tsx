"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
} from "react";
import {
  ArrowLeftIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlusIcon,
  VideoCameraIcon,
} from "@/components/bi-agent/icons";

type ChannelId = "wa" | "tg" | "sms" | "em";

const CHANNELS: Array<{
  id: ChannelId;
  name: string;
  ideal: string;
  lead: string;
  caseLine: string;
  user: string;
  agent: string;
  recorte: string;
}> = [
  {
    id: "wa",
    name: "WhatsApp",
    ideal: "Adoção imediata",
    lead: "A diretoria já está lá. Zero app novo, zero fricção de adoção.",
    caseLine: "Na call, o CFO valida a margem no WhatsApp — sem abrir o report.",
    user: "Margem Rio abril?",
    agent: "R$ 352 mil · abril",
    recorte: "Rio · abril · margem",
  },
  {
    id: "tg",
    name: "Telegram",
    ideal: "Grupos e power users",
    lead: "Ranking, lista, resposta rápida — quem já vive no Telegram pede o recorte e recebe na hora.",
    caseLine: "Antes da meta no grupo: top 3 regiões, linha margem, sem export.",
    user: "Top 3 regiões · margem março?",
    agent: "Sul 14,2%",
    recorte: "março · margem · ranking",
  },
  {
    id: "sms",
    name: "SMS",
    ideal: "Alcance onde o app não chega",
    lead: "Uma linha, um número. Funciona no chão de fábrica e no pátio, sem dado móvel estável.",
    caseLine: "OTIF da linha SP: uma mensagem, sem Wi-Fi da sala.",
    user: "OTIF SP fev?",
    agent: "8,4% vs meta",
    recorte: "Planta SP · fev · OTIF",
  },
  {
    id: "em",
    name: "E-mail",
    ideal: "Trilha e formalidade",
    lead: "Board, auditoria, anexo com filtro escrito — formalidade que o inbox já carrega.",
    caseLine: "DRE no inbox com linha, período e unidade — mesmo número da fonte.",
    user: "Assunto: DRE Rio · maio",
    agent: "Resultado R$ 352k",
    recorte: "anexo: recorte + linha DRE",
  },
];

function WhatsAppGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 2.1.62 4.06 1.7 5.74L2 22l4.56-1.5a9.86 9.86 0 0 0 5.48 1.64h.01c5.46 0 9.89-4.4 9.89-9.83S17.51 2 12.04 2zm0 17.94c-1.66 0-3.22-.45-4.56-1.24l-.33-.2-2.7.71.72-2.63-.21-.34a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.66-8.1 8.16-8.1 2.17 0 4.22.84 5.76 2.37a8.05 8.05 0 0 1 2.4 5.74c0 4.47-3.66 8.09-8.2 8.09zm4.47-6.09c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.72 2.63 4.17 3.69.58.25 1.04.4 1.4.51.58.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function TelegramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.8 4.3 2.9 11.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.7.4.9 1 .9.6 0 .9-.3 1.2-.6l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9L23.4 5.6c.3-1.3-.5-1.9-1.6-1.3zM9.1 14.5l-.2 3.1-1.1-3.6 12.5-7.9-11.2 8.4z" />
    </svg>
  );
}

function ChannelMark({ id }: { id: ChannelId }) {
  const common = { width: 22, height: 22 } as const;
  if (id === "wa") return <WhatsAppGlyph {...common} />;
  if (id === "tg") return <TelegramGlyph {...common} />;
  if (id === "sms") return <ChatBubbleLeftRightIcon {...common} />;
  return <EnvelopeIcon {...common} />;
}

function PhoneChrome({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="stg-ch-phone" aria-hidden={label ? undefined : true} aria-label={label}>
      <span className="stg-ch-phone-btn stg-ch-phone-btn--silent" />
      <span className="stg-ch-phone-btn stg-ch-phone-btn--vol-up" />
      <span className="stg-ch-phone-btn stg-ch-phone-btn--vol-down" />
      <span className="stg-ch-phone-btn stg-ch-phone-btn--power" />
      <div className="stg-ch-phone-screen">{children}</div>
    </div>
  );
}

function StatusBar({ on = "dark" }: { on?: "dark" | "light" }) {
  return (
    <div className={`stg-ch-status stg-ch-status--on-${on}`}>
      <span>9:41</span>
      <span className="stg-ch-island" />
      <span className="stg-ch-status-right">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function ChannelScreen({ ch }: { ch: (typeof CHANNELS)[number] }) {
  if (ch.id === "wa") {
    return (
      <div className="stg-ch-ui stg-ch-ui--wa">
        <StatusBar on="dark" />
        <header className="stg-ch-bar stg-ch-bar--wa">
          <ArrowLeftIcon />
          <div className="stg-ch-avatar stg-ch-avatar--wa">BI</div>
          <div className="stg-ch-who">
            <strong>BI Agent</strong>
            <span>online</span>
          </div>
          <VideoCameraIcon />
          <PhoneIcon />
          <EllipsisVerticalIcon />
        </header>
        <div className="stg-ch-thread stg-ch-thread--wa">
          <p className="stg-ch-day">HOJE</p>
          <div className="stg-ch-row stg-ch-row--out">
            <div className="stg-ch-bubble stg-ch-bubble--wa-out">{ch.user}</div>
          </div>
          <div className="stg-ch-row stg-ch-row--in">
            <div className="stg-ch-bubble stg-ch-bubble--wa-in">
              <span className="stg-recorte">{ch.recorte}</span>
              <strong>{ch.agent}</strong>
            </div>
          </div>
        </div>
        <div className="stg-ch-composer stg-ch-composer--wa">
          <PlusIcon />
          <div className="stg-ch-input">Mensagem</div>
          <MicrophoneIcon />
        </div>
      </div>
    );
  }

  if (ch.id === "tg") {
    return (
      <div className="stg-ch-ui stg-ch-ui--tg">
        <StatusBar on="dark" />
        <header className="stg-ch-bar stg-ch-bar--tg">
          <ArrowLeftIcon />
          <div className="stg-ch-avatar stg-ch-avatar--tg">BI</div>
          <div className="stg-ch-who stg-ch-who--light">
            <strong>BI Agent</strong>
            <span>online</span>
          </div>
          <EllipsisVerticalIcon />
        </header>
        <div className="stg-ch-thread stg-ch-thread--tg">
          <div className="stg-ch-row stg-ch-row--out">
            <div className="stg-ch-bubble stg-ch-bubble--tg-out">{ch.user}</div>
          </div>
          <div className="stg-ch-row stg-ch-row--in">
            <div className="stg-ch-bubble stg-ch-bubble--tg-in">
              <span className="stg-recorte stg-recorte--on-dark">{ch.recorte}</span>
              <strong>{ch.agent}</strong>
              <span className="stg-ch-tg-extra">Sudeste 11,8% · CO 9,1%</span>
            </div>
          </div>
        </div>
        <div className="stg-ch-composer stg-ch-composer--tg">
          <div className="stg-ch-input stg-ch-input--tg">Mensagem</div>
          <span className="stg-ch-send stg-ch-send--tg">
            <PaperAirplaneIcon />
          </span>
        </div>
      </div>
    );
  }

  if (ch.id === "sms") {
    return (
      <div className="stg-ch-ui stg-ch-ui--sms">
        <StatusBar on="light" />
        <header className="stg-ch-bar stg-ch-bar--sms">
          <ArrowLeftIcon />
          <div className="stg-ch-who stg-ch-who--center">
            <strong>BI Agent</strong>
            <span>Mensagem de texto</span>
          </div>
          <PhoneIcon />
        </header>
        <div className="stg-ch-thread stg-ch-thread--sms">
          <div className="stg-ch-row stg-ch-row--out">
            <div className="stg-ch-bubble stg-ch-bubble--sms-out">{ch.user}</div>
          </div>
          <div className="stg-ch-row stg-ch-row--in">
            <div className="stg-ch-bubble stg-ch-bubble--sms-in">
              <strong>
                {ch.user.replace("?", "")}: {ch.agent}
              </strong>
              <span className="stg-ch-sms-meta">{ch.recorte}</span>
            </div>
          </div>
        </div>
        <div className="stg-ch-composer stg-ch-composer--sms">
          <div className="stg-ch-input stg-ch-input--sms">Mensagem de texto</div>
          <span className="stg-ch-send stg-ch-send--sms">
            <PaperAirplaneIcon />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="stg-ch-ui stg-ch-ui--em">
      <StatusBar on="light" />
      <header className="stg-ch-bar stg-ch-bar--em">
        <ArrowLeftIcon />
        <strong>Caixa de entrada</strong>
        <EllipsisVerticalIcon />
      </header>
      <div className="stg-ch-mail-body">
        <p className="stg-ch-mail-from">
          <EnvelopeIcon />
          BI Agent · validado
        </p>
        <p className="stg-ch-mail-sub">{ch.user}</p>
        <p className="stg-ch-mail-metric">{ch.agent}</p>
        <p className="stg-ch-mail-note">{ch.recorte}</p>
      </div>
    </div>
  );
}

export function StageChannelCarousel() {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const detailRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const ch = CHANNELS[active];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const selectChannel = useCallback(
    (index: number, opts?: { focus?: boolean; scrollMobile?: boolean }) => {
      setActive(index);
      if (opts?.focus) {
        tabRefs.current[index]?.focus();
      }
      if (!opts?.scrollMobile) return;
      const el = detailRef.current;
      if (!el || window.matchMedia("(min-width: 861px)").matches) return;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
      });
    },
    [reduceMotion],
  );

  return (
    <div className="stg-ch-block">
      <div className="stg-ch-picker" role="tablist" aria-label="Canais" aria-orientation="vertical">
        {CHANNELS.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={`stg-ch-card stg-ch-card--${item.id} ${selected ? "is-active" : ""}`}
              onClick={() => selectChannel(i, { scrollMobile: true })}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                  e.preventDefault();
                  selectChannel((i + 1) % CHANNELS.length, { focus: true });
                } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                  e.preventDefault();
                  selectChannel((i - 1 + CHANNELS.length) % CHANNELS.length, { focus: true });
                } else if (e.key === "Home") {
                  e.preventDefault();
                  selectChannel(0, { focus: true });
                } else if (e.key === "End") {
                  e.preventDefault();
                  selectChannel(CHANNELS.length - 1, { focus: true });
                }
              }}
            >
              <span className={`stg-ch-mark stg-ch-mark--${item.id}`} aria-hidden>
                <ChannelMark id={item.id} />
              </span>
              <span className="stg-ch-card-name">{item.name}</span>
            </button>
          );
        })}
      </div>

      <article
        ref={detailRef}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${ch.id}`}
        className={`stg-ch-detail stg-ch-detail--${ch.id}`}
      >
        <div className="stg-ch-detail-phone">
          <PhoneChrome label={`Mock ${ch.name}`}>
            <ChannelScreen ch={ch} />
          </PhoneChrome>
        </div>
        <div className="stg-ch-detail-copy">
          <h3 className="stg-ch-detail-name">{ch.name}</h3>
          <p className="stg-ch-detail-ideal">{ch.ideal}</p>
          <p className="stg-ch-detail-lead">{ch.lead}</p>
          <p className="stg-ch-detail-case">{ch.caseLine}</p>
        </div>
      </article>
    </div>
  );
}

function FlowParityCheck() {
  return (
    <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden>
      <path
        fill="currentColor"
        d="M6.2 11.3 2.9 8l1.1-1.1 2.2 2.2 5-5L12.3 5.2z"
      />
    </svg>
  );
}

export function FlowChatAnim() {
  return (
    <div className="stg-anim stg-anim--chat" aria-hidden>
      <div className="stg-anim-chat-frame">
        <span className="stg-anim-b stg-anim-b--u">Margem Rio?</span>
        <span className="stg-anim-b stg-anim-b--a">
          <small>Rio · abr</small>
          R$ 352k
        </span>
      </div>
    </div>
  );
}

const FILTER_STEP_MS = 900;
const FILTER_LABELS = ["período", "unidade", "linha"] as const;

/** Single timeline: step 0 idle → 1 período → 2 unidade → 3 linha → loop. */
export function FlowFilterAnim() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStep(3);
      return;
    }

    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, FILTER_STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="stg-anim stg-anim--filter" data-step={step} aria-hidden>
      <ul className="stg-filter">
        {FILTER_LABELS.map((label, i) => {
          const on = step > i;
          return (
            <li
              key={label}
              className={`stg-filter-chip${on ? " is-on" : ""}`}
              data-filter={label}
            >
              <i />
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
      <div className="stg-filter-chart">
        <span className="stg-filter-bar stg-filter-bar--1" />
        <span className="stg-filter-bar stg-filter-bar--2" />
        <span className="stg-filter-bar stg-filter-bar--3" />
        <span className="stg-filter-bar stg-filter-bar--cut" />
      </div>
    </div>
  );
}

export function FlowParityAnim() {
  return (
    <div className="stg-anim stg-anim--parity" aria-hidden>
      <div className="stg-parity">
        <div className="stg-parity-node" style={{ animationDelay: "0s" }}>
          <span className="stg-parity-ico" title="DB">
            <CircleStackIcon />
          </span>
          <strong>352</strong>
          <FlowParityCheck />
        </div>
        <span className="stg-parity-link" />
        <div className="stg-parity-node" style={{ animationDelay: "0.55s" }}>
          <span className="stg-parity-ico" title="BI">
            <ChartBarIcon />
          </span>
          <strong>352</strong>
          <FlowParityCheck />
        </div>
        <span className="stg-parity-link" />
        <div className="stg-parity-node" style={{ animationDelay: "1.1s" }}>
          <span className="stg-parity-ico" title="Agent">
            <DevicePhoneMobileIcon />
          </span>
          <strong>352</strong>
          <FlowParityCheck />
        </div>
      </div>
    </div>
  );
}
