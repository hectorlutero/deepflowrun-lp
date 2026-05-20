import { ArrowRight } from "./icons";

const steps = [
  {
    num: "01",
    label: "Imersão e Diagnóstico",
    title: "Entramos na sua operação",
    body: "Mapeamos processos, identificamos gargalos e calculamos onde a IA tem maior potencial de impacto real no seu negócio.",
  },
  {
    num: "02",
    label: "Implementação",
    title: "IA e automação aplicadas",
    body: "Desenvolvemos as soluções que fazem sentido para o seu contexto — sem amarração a ferramentas. IA generativa, automações de fluxo, integrações: o que resolve, vai.",
  },
  {
    num: "03",
    label: "Você vê funcionando",
    title: "A primeira automação no ar",
    body: "O momento que mais importa: você acompanha ao vivo o que mudou. Sem esperar meses para ver resultado.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="block muted method">
      <div className="wrap">
        <span className="eyebrow dark-on-light">Como funciona</span>
        <h2 className="title">Como a DeepFlowRun funciona — sem enrolação.</h2>

        <div className="method-steps">
          {steps.map((s) => (
            <article key={s.num} className="step">
              <div className="badge">
                <span className="num">N°</span>
                {s.num}
              </div>
              <div className="label">{s.label}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <div className="method-cta">
          <a className="btn btn-primary" href="#diagnostico">
            Quero um diagnóstico
            <ArrowRight className="ico" />
          </a>
        </div>
      </div>
    </section>
  );
}
