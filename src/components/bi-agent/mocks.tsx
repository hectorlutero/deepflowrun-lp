type BubbleProps = {
  role: "user" | "agent";
  html: string;
};

export function ChatBubble({ role, html }: BubbleProps) {
  return (
    <div
      className={`ba-bubble ba-bubble--${role}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function HeroPhoneMock() {
  return (
    <div className="ba-phone">
      <div className="ba-phone-notch" />
      <div className="ba-wa">
        <div className="ba-wa-head">
          <div className="ba-wa-avatar">BI</div>
          <div>
            <strong>BI Agent</strong>
            <span className="ba-wa-status">● validado vs fonte</span>
          </div>
        </div>
        <div className="ba-wa-body">
          <div className="ba-bubble ba-bubble--user">Margem Rio · abril — bate com a reunião?</div>
          <div className="ba-bubble ba-bubble--agent">
            <span className="ba-wa-tag">Rio · abril · margem</span>
            <strong>R$ 352 mil</strong>
            <br />
            <span style={{ fontSize: 11, color: "#94a3b8" }}>470 mil era jan–abr acumulado</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type ChannelMockProps = {
  channel: "telegram" | "sms" | "email";
  user: string;
  agent: string;
  sub?: string;
};

export function ChannelMock({ channel, user, agent, sub }: ChannelMockProps) {
  const head =
    channel === "telegram" ? "Telegram · BI Agent" : channel === "sms" ? "SMS" : "E-mail · resumo";

  return (
    <div className={`ba-channel-mock ba-channel-mock--${channel === "telegram" ? "tg" : channel}`}>
      <div className="ba-channel-mock-head">{head}</div>
      <div className="ba-channel-mock-body">
        <p className="ba-channel-mock-q">{user}</p>
        <p className="ba-channel-mock-a">{agent}</p>
        {sub && <p className="ba-channel-mock-sub">{sub}</p>}
      </div>
    </div>
  );
}

export function DemoWhatsAppSlide({
  user,
  agent,
  tag,
}: {
  user: string;
  agent: string;
  tag: string;
}) {
  return (
    <div className="ba-phone" style={{ animation: "none", margin: "0 auto" }}>
      <div className="ba-phone-notch" />
      <div className="ba-wa">
        <div className="ba-wa-head">
          <div className="ba-wa-avatar">BI</div>
          <div>
            <strong>BI Agent</strong>
          </div>
        </div>
        <div className="ba-wa-body">
          <div className="ba-bubble ba-bubble--user">{user}</div>
          <div className="ba-bubble ba-bubble--agent">
            {tag && <span className="ba-wa-tag">{tag}</span>}
            {agent}
          </div>
        </div>
      </div>
    </div>
  );
}
