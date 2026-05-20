import { LogoMark, Wordmark } from "./logo-mark";

export function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé">
      <div className="wrap">
        <div className="footer-grid">
          <div className="brand-block">
            <a className="brand" href="#top">
              <LogoMark className="mark" />
              <Wordmark className="word" />
            </a>
            <p>
              Operação fluida, diagnóstico profundo. Implementamos IA e
              automação onde o número realmente muda.
            </p>
          </div>

          <div>
            <div className="col-title">Navegar</div>
            <ul>
              <li>
                <a href="#problema">Sobre</a>
              </li>
              <li>
                <a href="#metodo">Serviços</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="col-title">Contato</div>
            <ul>
              <li>
                <a href="mailto:contato@deepflowrun.com.br">
                  contato@deepflowrun.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp comercial
                </a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 DeepFlowRun. Todos os direitos reservados.</div>
          <div>São Paulo · Brasil</div>
        </div>
      </div>
    </footer>
  );
}
