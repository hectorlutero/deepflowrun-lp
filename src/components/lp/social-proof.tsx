export function SocialProof() {
  return (
    <section className="block dark social" aria-label="Prova social">
      <div className="wrap">
        <span className="eyebrow">Resultados em campo</span>
        <h2 className="title">Operações que a DeepFlowRun já transformou.</h2>

        <article className="testimonial">
          <div>
            <blockquote>
              Entraram na operação, diagnosticaram a raiz do problema e em duas
              semanas a primeira automação já estava rodando. Recuperamos
              margem que a gente nem sabia que estava escapando.
            </blockquote>
            <div className="attr">
              <div className="avatar">––</div>
              <div>
                <div className="who-name">[Nome do cliente]</div>
                <div className="who-role">
                  [Cargo] · [Empresa] · [Setor]
                </div>
              </div>
            </div>
          </div>

          <aside className="metric" aria-label="Antes e depois">
            <div className="row">
              <span className="lbl">Antes</span>
              <span className="v">[X h/semana]</span>
            </div>
            <div className="arrow" />
            <div className="row after">
              <span className="lbl">Depois</span>
              <span className="v">[resultado mensurável]</span>
            </div>
          </aside>
        </article>

        <div className="placeholder-note">
          <span className="dot" />
          Placeholder — preencher com depoimento e métricas reais antes de
          publicar
        </div>
      </div>
    </section>
  );
}
