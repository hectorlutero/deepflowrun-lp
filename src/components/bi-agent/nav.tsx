import Image from "next/image";
import Link from "next/link";
import { GOOGLE_BOOKING_URL } from "@/lib/contact";
import { ThemeToggle } from "./theme-toggle";

export function BiAgentNav() {
  return (
    <header className="ba-nav">
      <Link href="/bi-agent" className="ba-brand">
        <Image src="/brand/logo-mark.svg" alt="" width={32} height={32} />
        <span>
          BI Agent
          <small>DeepFlowRun</small>
        </span>
      </Link>
      <div className="ba-nav-right">
        <nav className="ba-nav-links" aria-label="Seções">
          <a href="#demo">Demo</a>
          <a href="#confianca">Confiança</a>
          <a href="#plataformas">Plataformas</a>
          <a href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
