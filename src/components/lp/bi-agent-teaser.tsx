import Link from "next/link";

export function BiAgentTeaser() {
  return (
    <section className="block muted bi-agent-teaser" aria-label="BI Agent">
      <div className="wrap">
        <div className="bi-agent-teaser-inner">
          <div>
            <span className="eyebrow dark-on-light">Produto</span>
            <h2 className="title">BI Agent — seu BI no WhatsApp.</h2>
            <p className="lede">
              Pergunte em linguagem natural. Resposta com recorte certo e prova contra a sua base
              analítica — Power BI, Qlik, Looker, Fabric e mais.
            </p>
          </div>
          <Link className="btn btn-primary" href="/bi-agent">
            Conhecer o BI Agent
          </Link>
        </div>
      </div>
    </section>
  );
}
