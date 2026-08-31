import { GOOGLE_BOOKING_URL, whatsAppUrl, WHATSAPP_MSG_BI_AGENT_DEMO } from "@/lib/contact";

type CtaProps = {
  showDemo?: boolean;
  showWa?: boolean;
  showBook?: boolean;
  demoPrimary?: boolean;
};

export function CtaRow({ showDemo = true, showWa = true, showBook = true, demoPrimary }: CtaProps) {
  return (
    <div className="ba-btns">
      {showDemo && (
        <a className={`ba-btn ${demoPrimary ? "ba-btn--cyan" : "ba-btn--ghost"}`} href="#demo">
          Ver demo
        </a>
      )}
      {showWa && (
        <a
          className="ba-btn ba-btn--wa"
          href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      )}
      {showBook && (
        <a className="ba-btn ba-btn--amber" href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
          Agendar 15 min
        </a>
      )}
    </div>
  );
}

export function StickyBar() {
  return (
    <div className="ba-sticky" aria-label="Ações rápidas">
      <a className="ba-btn ba-btn--cyan" href="#demo">
        Ver demo
      </a>
      <a
        className="ba-btn ba-btn--wa"
        href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
