import { Plus } from "./icons";

const items: Array<{ q: string; a: string }> = [
  {
    q: "Já ouço falar em IA há anos. Por que agora seria diferente?",
    a: "Porque agora a IA generativa chegou a um nível de maturidade que permite aplicação real em operações como a sua — não só em grandes corporações. O que mudou não é o hype. É a capacidade de entrega.",
  },
  {
    q: "Já tentamos automação antes e não deu certo.",
    a: "A maioria das tentativas falha por falta de diagnóstico — automatizam o processo errado, ou a ferramenta certa no lugar errado. A DeepFlowRun começa pelo mapeamento justamente para evitar isso.",
  },
  {
    q: "Minha equipe não tem conhecimento técnico para absorver isso.",
    a: "Não precisa ter. A implementação é feita por nós. O que sua equipe precisa aprender é como operar o que entregamos — e isso faz parte do processo.",
  },
  {
    q: "Como sei que vou ter retorno sobre esse investimento?",
    a: "O diagnóstico existe exatamente para responder isso antes da implementação. Se não identificarmos potencial real de ganho, não avançamos para a fase de automação.",
  },
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "A primeira automação entra no ar ainda durante o processo de implementação — não é um projeto de seis meses que você vê só no final.",
  },
  {
    q: "E se minha operação for muito específica ou complexa?",
    a: "Complexidade operacional não é obstáculo — é o ambiente onde a DeepFlowRun trabalha melhor. A abordagem agnóstica garante que a solução é desenhada para o seu contexto, não adaptada de um template.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="block faq" aria-label="Perguntas frequentes">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-side">
            <span className="eyebrow dark-on-light">Objeções</span>
            <h2 className="title">Perguntas honestas, respostas diretas.</h2>
            <p className="lede">
              As dúvidas que a gente mais ouve antes de começar — respondidas
              sem rodeio.
            </p>
          </div>

          <div className="faq-list">
            {items.map((item, i) => (
              <details
                key={item.q}
                className="faq-item"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary>
                  {item.q}
                  <span className="toggle" aria-hidden="true">
                    <Plus />
                  </span>
                </summary>
                <div className="answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
