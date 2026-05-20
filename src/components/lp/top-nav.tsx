import { ArrowRight } from "./icons";
import { LogoMark, Wordmark } from "./logo-mark";
import { ScrollSpy } from "./scroll-spy";

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#metodo", label: "Método" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#faq", label: "FAQ" },
];

export function TopNav() {
  return (
    <nav className="topnav" aria-label="Primária">
      <div className="inner">
        <a className="brand" href="#top" aria-label="DeepFlowRun — início">
          <LogoMark className="mark" />
          <Wordmark className="word" />
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-spy={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <a className="btn btn-primary" href="#diagnostico">
            Quero um diagnóstico
            <ArrowRight className="ico" />
          </a>
        </div>
      </div>
      <ScrollSpy targets={links.map((l) => l.href)} />
    </nav>
  );
}
