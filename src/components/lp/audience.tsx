import { Check, X } from "./icons";

const fits = [
  "Você tem operação B2B com alto volume de processos repetitivos",
  "Sente que está deixando dinheiro na mesa, mas não sabe exatamente onde",
  "Ouve falar em IA todo dia e ainda não sabe como isso se traduz em resultado real",
  "Já tentou automações antes e não chegou a lugar nenhum",
  "Precisa de alguém que execute — não só que recomende",
];

const dontFits = [
  "Está buscando uma ferramenta pronta para instalar sozinho",
  "Quer uma consultoria que entrega um relatório e some",
  "Ainda não tem processos recorrentes minimamente estruturados",
];

export function Audience() {
  return (
    <section id="para-quem" className="block light audience">
      <div className="wrap">
        <span className="eyebrow dark-on-light">Fit</span>
        <h2 className="title">A DeepFlowRun é para sua empresa se:</h2>

        <div className="audience-grid">
          <div className="acard is">
            <div className="a-eyebrow">Encaixa</div>
            <h3 className="a-head">
              Sua operação tem essas características
            </h3>
            <div className="a-list">
              {fits.map((row) => (
                <div key={row} className="a-row">
                  <span className="check">
                    <Check />
                  </span>
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="acard">
            <div className="a-eyebrow">Não encaixa</div>
            <h3 className="a-head">Não é para você se</h3>
            <div className="a-list">
              {dontFits.map((row) => (
                <div key={row} className="a-row">
                  <span className="x">
                    <X />
                  </span>
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
