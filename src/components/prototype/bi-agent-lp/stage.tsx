import Image from "next/image";
import Link from "next/link";
import {
  CONNECTORS,
  DEPARTMENTS,
  FAQ_ITEMS,
  PARTNERS,
  SEGMENTS,
} from "@/components/bi-agent/copy";
import {
  AcademicCapIcon,
  BanknotesIcon,
  BoltIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  CpuChipIcon,
  CubeIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  LockClosedIcon,
  MegaphoneIcon,
  ScaleIcon,
  ShoppingBagIcon,
  SignalIcon,
  SunIcon,
  TagIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@/components/bi-agent/icons";
import { StageChannelCarousel, FlowChatAnim, FlowFilterAnim, FlowParityAnim } from "./stage-channels";
import { StageCtas } from "./stage-ctas";
import { StageHeroPhone } from "./stage-phone";
import { StageProblemLockedArt, StageProblemOpenArt } from "./stage-problem-art";
import { StageSituations } from "./stage-situations";
import { StageStack } from "./stage-stack";
import { StageThemeToggle } from "./stage-theme";
import { GOOGLE_BOOKING_URL } from "@/lib/contact";
import "./stage.css";

/** Core objections on-page; rest behind “Mais perguntas”. */
const FAQ_CORE_QS = [
  "O que é o BI Agent?",
  "Substitui o Power BI (ou Qlik, Looker…)?",
  "Como sei que o número está certo?",
  "Os dados passam por vocês?",
  "Qual a diferença para ChatGPT?",
  "Com quais ferramentas vocês trabalham?",
  "Precisa ser Telegram?",
  "Dá para revenda / whitelabel?",
];
const FAQ_CORE = FAQ_CORE_QS.map((q) => FAQ_ITEMS.find((i) => i.q === q)).filter(
  (i): i is (typeof FAQ_ITEMS)[number] => Boolean(i),
);
const FAQ_MORE = FAQ_ITEMS.filter((i) => !FAQ_CORE_QS.includes(i.q));

const DEPT_ICONS = {
  Comercial: ChartBarIcon,
  Controladoria: ScaleIcon,
  Finanças: BanknotesIcon,
  Fiscal: DocumentCheckIcon,
  Contabilidade: BookOpenIcon,
  RH: UserGroupIcon,
  TI: CpuChipIcon,
  Jurídico: ScaleIcon,
  Operações: Cog6ToothIcon,
  "Supply chain": TruckIcon,
  Marketing: MegaphoneIcon,
  Perdas: ExclamationTriangleIcon,
  Projetos: ClipboardDocumentListIcon,
  Atendimento: ChatBubbleLeftRightIcon,
} as const;

const SEG_ICONS = {
  Indústria: BuildingOffice2Icon,
  Varejo: ShoppingBagIcon,
  Atacado: CubeIcon,
  Saúde: HeartIcon,
  "Serviços financeiros": BuildingLibraryIcon,
  Agronegócio: SunIcon,
  Energia: BoltIcon,
  Logística: TruckIcon,
  Educação: AcademicCapIcon,
  Telecom: SignalIcon,
  Construção: WrenchScrewdriverIcon,
  "Tech B2B": CommandLineIcon,
} as const;

export function StagePrototype({ lab = false }: { lab?: boolean }) {
  const ticker = CONNECTORS;
  const homeHref = lab ? "/prototype/bi-agent-lp/stage" : "/bi-agent";

  return (
    <div className="stg">
      <div className="stg-mesh" aria-hidden />
      <div className="stg-grain" aria-hidden />

      {lab ? (
        <div className="stg-proto-bar">
          <span>Lab visual · espelho do stage — LP de produção em /bi-agent</span>
          <span>
            <Link href="/bi-agent">LP produção</Link>
            {" · "}
            <Link href="/bi-agent/legado">LP anterior</Link>
            {" · "}
            <Link href="/prototype/bi-agent-lp/stage/situacoes-lab">Lab situações</Link>
            {" · "}
            <Link href="/prototype/bi-agent-lp/palettes">Paletas</Link>
          </span>
        </div>
      ) : null}

      <header className="stg-nav">
        <Link href={homeHref} className="stg-brand">
          <Image src="/brand/logo-mark.svg" alt="" width={32} height={32} />
          <span>
            BI Agent
            <small>DeepFlowRun</small>
          </span>
        </Link>
        <div className="stg-nav-right">
          <nav className="stg-nav-links">
            <a href="#situacoes">Situações</a>
            <a href="#prova">Prova</a>
            <a href="#integracoes">Stack</a>
            <a href="#faq">FAQ</a>
            <a href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
              Agendar
            </a>
          </nav>
          <StageThemeToggle />
        </div>
      </header>

      <section className="stg-hero">
        <div className="stg-watermark" aria-hidden>
          15%
        </div>
        <div className="stg-wrap">
          <div className="stg-hero-grid">
            <div>
              <p className="stg-kicker">
                <CheckBadgeIcon className="stg-icon" />
                Validado vs fonte
              </p>
              <h1>
                Coloque o seu BI no WhatsApp.
                <br />
                <em>Decida antes</em> de abrirem o report.
              </h1>
              <p className="stg-pull">
                Errou no filtro do BI e apresentou número errado para a diretoria.
              </p>
              <p className="stg-lede">
                Pergunte como pergunta no grupo. A resposta traz o mesmo número do seu BI — com período e
                unidade escritos, sem filtro errado por engano.
              </p>
              <StageCtas />
            </div>
            <StageHeroPhone />
          </div>
        </div>
      </section>

      <div className="stg-ticker" aria-hidden>
        <div className="stg-ticker-track">
          {[0, 1, 2, 3].map((copy) => (
            <div key={copy} className="stg-ticker-group">
              {ticker.map((c) => (
                <span key={`${copy}-${c}`}>{c}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="stg-problem">
        <div className="stg-problem-split">
          <div className="stg-problem-locked">
            <StageProblemLockedArt />
            <div className="stg-problem-copy">
              <LockClosedIcon className="stg-problem-icon" />
              <p className="stg-label">O report</p>
              <h2>Trancado em quem está na frente do PC</h2>
              <p>Toda pergunta vira export, planilha paralela ou “deixa eu abrir o report”.</p>
              <p>O número chega tarde — ou chega com o filtro trocado.</p>
            </div>
          </div>
          <div className="stg-problem-open">
            <StageProblemOpenArt />
            <div className="stg-problem-copy">
              <ChatBubbleLeftRightIcon className="stg-problem-icon" />
              <p className="stg-label">A decisão</p>
              <h2>A decisão já saiu no WhatsApp. O BI ficou no desktop.</h2>
              <p>A diretoria não espera o desktop. Nós colocamos o número certo no canal que a equipe já usa.</p>
              <p>O report continua no BI. O filtro certo entra no bolso.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="prova" className="stg-flow">
        <div className="stg-wrap">
          <div className="stg-flow-head">
            <p className="stg-label">Número certo</p>
            <h2>Três passos. Filtro escrito na resposta.</h2>
          </div>
          <div className="stg-flow-row">
            <article className="stg-flow-step">
              <div className="stg-flow-hd">
                <div className="stg-flow-hd-text">
                  <span className="stg-flow-n">01</span>
                  <h3>
                    <ChatBubbleLeftRightIcon className="stg-icon" />
                    Pergunta
                  </h3>
                </div>
                <FlowChatAnim />
              </div>
              <p>Você pergunta no canal que a equipe já usa — como no grupo.</p>
            </article>
            <article className="stg-flow-step">
              <div className="stg-flow-hd">
                <div className="stg-flow-hd-text">
                  <span className="stg-flow-n">02</span>
                  <h3>
                    <TagIcon className="stg-icon" />
                    Recorte
                  </h3>
                </div>
                <FlowFilterAnim />
              </div>
              <p>Nós devolvemos período, unidade e linha escritos na resposta.</p>
            </article>
            <article className="stg-flow-step">
              <div className="stg-flow-hd">
                <div className="stg-flow-hd-text">
                  <span className="stg-flow-n">03</span>
                  <h3>
                    <CheckBadgeIcon className="stg-icon" />
                    Prova
                  </h3>
                </div>
                <FlowParityAnim />
              </div>
              <p>Conferimos o valor no seu BI antes de responder.</p>
            </article>
          </div>
          <p className="stg-flow-note">
            Não é chat genérico sobre BI. É consulta ao <strong>seu</strong> BI — com o filtro escrito.
          </p>
        </div>
      </section>

      <StageSituations />

      <section className="stg-cover">
        <div className="stg-wrap">
          <div className="stg-split">
            <div className="stg-icon-grid" aria-hidden>
              {DEPARTMENTS.map((d) => {
                const Icon = DEPT_ICONS[d];
                return (
                  <div key={d} className="stg-icon-tile">
                    <Icon />
                    <span>{d}</span>
                  </div>
                );
              })}
            </div>
            <div className="stg-split-copy">
              <p className="stg-label">Um pack por área</p>
              <h2>Falando a língua de cada departamento</h2>
              <p className="stg-cover-lede">
                Controladoria fala margem; comercial fala meta; RH fala headcount. O agente responde na
                língua de quem pergunta — com o número daquela área.
              </p>
              <StageCtas ghost />
            </div>
          </div>

          <div className="stg-split stg-split--flip">
            <div className="stg-split-copy">
              <p className="stg-label">Segmentos</p>
              <h2>O padrão é o mesmo. Muda o report.</h2>
              <p className="stg-cover-lede">
                Indústria, varejo, saúde ou agronegócio — o motor não muda. Muda o report que aquela
                operação usa de verdade. A pergunta é a mesma; a resposta traz o número certo do BI de
                vocês.
              </p>
              <StageCtas ghost />
            </div>
            <div className="stg-icon-grid" aria-hidden>
              {SEGMENTS.map((s) => {
                const Icon = SEG_ICONS[s];
                return (
                  <div key={s} className="stg-icon-tile">
                    <Icon />
                    <span>{s}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="stg-channels">
        <div className="stg-wrap">
          <p className="stg-label">Mesmo número</p>
          <h2>O canal que a equipe já usa.</h2>
          <p className="stg-channels-lede">
            WhatsApp, Telegram, SMS ou e-mail — canais complementares. Cada um tem o seu lugar; o número
            que sai é o mesmo do seu BI.
          </p>
          <StageChannelCarousel />
        </div>
      </section>

      <StageStack />

      <div className="stg-paper">
        <section className="stg-partners">
          <div className="stg-wrap">
            <div className="stg-partners-card">
              <div>
                <p className="stg-label">{PARTNERS.kicker}</p>
                <h2>{PARTNERS.title}</h2>
                <p>{PARTNERS.body}</p>
              </div>
              <StageCtas ghost />
            </div>
          </div>
        </section>

        <section id="faq" className="stg-faq">
          <div className="stg-wrap">
            <div className="stg-faq-grid">
              <div className="stg-faq-intro">
                <p className="stg-label">Objeções</p>
                <h2>Perguntas que travam a demo.</h2>
                <p className="stg-lede">
                  Substitui o Power BI? É ChatGPT? Dados passam por vocês? Resposta direta.
                </p>
                <StageCtas ghost />
              </div>
              <div className="stg-faq-list">
                {FAQ_CORE.map((item, i) => (
                  <details key={item.q} className="stg-faq-item" open={i === 0}>
                    <summary>
                      {item.q}
                      <span className="stg-faq-plus" aria-hidden>
                        +
                      </span>
                    </summary>
                    <div className="stg-faq-a">{item.a}</div>
                  </details>
                ))}
                {FAQ_MORE.length > 0 ? (
                  <details className="stg-faq-more">
                    <summary>Mais {FAQ_MORE.length} perguntas</summary>
                    <div className="stg-faq-more-body">
                      {FAQ_MORE.map((item) => (
                        <details key={item.q} className="stg-faq-item">
                          <summary>
                            {item.q}
                            <span className="stg-faq-plus" aria-hidden>
                              +
                            </span>
                          </summary>
                          <div className="stg-faq-a">{item.a}</div>
                        </details>
                      ))}
                    </div>
                  </details>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="stg-close">
        <div className="stg-wrap">
          <p className="stg-label">Próximo passo</p>
          <h2>
            Veja o recorte certo
            <br />
            antes da reunião.
          </h2>
          <StageCtas />
        </div>
      </section>

      <footer className="stg-footer">
        <strong>BI Agent</strong> by DeepFlowRun
        {lab ? " · lab" : null}
      </footer>
    </div>
  );
}
