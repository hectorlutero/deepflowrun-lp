import type { ReactNode } from "react";
import { ArrowRight, Grid, Lines, Search, Target, Users } from "./icons";

type Diff = {
  icon: ReactNode;
  title: string;
  body: string;
  span: "span3" | "span2";
  feature?: boolean;
};

const diffs: Diff[] = [
  {
    icon: <Search />,
    title: "Diagnóstico antes de qualquer entrega",
    body: "Não chegamos com solução pronta. Primeiro entendemos o que realmente precisa mudar — e onde a IA tem tração real no seu negócio.",
    span: "span3",
    feature: true,
  },
  {
    icon: <Lines />,
    title: "IA aplicada com critério, não com hype",
    body: "Não implementamos IA porque está na moda. Implementamos onde ela gera retorno mensurável. Sobriedade técnica é parte do método.",
    span: "span3",
  },
  {
    icon: <Grid />,
    title: "Tecnologia agnóstica",
    body: "Implementamos o que resolve o seu problema — não o que está na nossa prateleira.",
    span: "span2",
  },
  {
    icon: <Target />,
    title: "Você acompanha ao vivo",
    body: "A primeira automação entra no ar durante o processo. Resultado visível antes do projeto terminar.",
    span: "span2",
  },
  {
    icon: <Users />,
    title: "Parceria, não projeto",
    body: "Após a implementação, o suporte continua. Somos parceiros de operação, não fornecedores de entrega única.",
    span: "span2",
  },
];

export function Differentiators() {
  return (
    <section className="block muted auth" aria-label="Diferenciais">
      <div className="wrap">
        <span className="eyebrow dark-on-light">Diferenciais</span>
        <h2 className="title">
          Por que a DeepFlowRun — e não qualquer consultoria de IA.
        </h2>

        <div className="auth-grid">
          {diffs.map((d) => (
            <article
              key={d.title}
              className={`diff ${d.span}${d.feature ? " feature" : ""}`}
            >
              <div className="icon-sm">{d.icon}</div>
              <h4>{d.title}</h4>
              <p>{d.body}</p>
            </article>
          ))}
        </div>

        <div className="auth-cta">
          <a className="btn btn-primary" href="#diagnostico">
            Quero um diagnóstico
            <ArrowRight className="ico" />
          </a>
        </div>
      </div>
    </section>
  );
}
