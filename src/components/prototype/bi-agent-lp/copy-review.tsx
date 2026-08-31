"use client";

import { GOOGLE_BOOKING_URL, whatsAppUrl, WHATSAPP_MSG_BI_AGENT_DEMO } from "@/lib/contact";
import "./copy-review.css";

/** Copy v3 — revisão completa com notas visuais inline. */
export function CopyReviewPage() {
  return (
    <article className="copy-review">
      <header className="copy-review-meta">
        <p className="copy-tag">BI Agent / copy v3.1</p>
        <p className="copy-note">
          Stack-agnóstico · nós · cenas confiança · direção visual · hero 2+1 CTAs
        </p>
      </header>

      {/* 01 HERO */}
      <section>
        <p className="copy-section-id">01 · Hero</p>
        <p className="copy-visual">
          Visual: split editorial + mock WhatsApp · CTA &quot;Ver demo&quot; flutuante no mock · 2
          botões na coluna copy · logo wall conectores abaixo
        </p>
        <h1>
          Coloque o seu BI no WhatsApp.
          <br />
          <em>Decida antes de abrirem o report.</em>
        </h1>
        <blockquote className="copy-pull">
          Errou no filtro do BI e apresentou número errado para a diretoria.
        </blockquote>
        <p className="copy-lede">
          Pergunte em linguagem natural no WhatsApp. A resposta traz o{" "}
          <strong>mesmo número da sua base analítica</strong>, sem o risco de recorte errado por
          engano.
        </p>
        <p className="copy-connectors">
          Conectamos com Power BI, Fabric, Qlik, Looker, Tableau, Excel, DW, BigQuery e outras
          fontes.
        </p>
        <p className="copy-visual">
          CTAs coluna: WhatsApp + Agendar · Mock: <strong>Ver demo</strong> (primário)
        </p>
        <div className="copy-ctas">
          <a href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
            Agendar 15 min
          </a>
        </div>
      </section>

      {/* 02 */}
      <section>
        <p className="copy-section-id">02 · Praticidade</p>
        <p className="copy-visual">Visual: 3 cards · ícones ✈ ◉ ⚡</p>
        <h2>Onde a decisão acontece</h2>
        <p className="copy-sub">Velocidade com número que fecha. Sem abrir o desktop.</p>
        <ul className="copy-cards">
          <li>
            <strong>No avião</strong> — Número validado no bolso, sem laptop.
          </li>
          <li>
            <strong>Na reunião</strong> — Pergunta na mesa, resposta em segundos.
          </li>
          <li>
            <strong>Antes deles</strong> — Quem exporta planilha decide depois.
          </li>
        </ul>
        <p>Nós colocamos a decisão no ritmo do negócio — não no ritmo do export.</p>
      </section>

      {/* 03 */}
      <section>
        <p className="copy-section-id">03 · Problema</p>
        <p className="copy-visual">Visual: split celular vs notebook · ícone cadeado</p>
        <h2>Seu BI não deveria depender de quem está na frente do PC</h2>
        <ol>
          <li>Toda pergunta vira export, planilha paralela ou “deixa eu abrir o report”.</li>
          <li>
            O número chega tarde ou errado: card genérico, recorte trocado, meta que não bate com a
            linha certa.
          </li>
          <li>
            A diretoria decide no WhatsApp e no corredor. O BI ficou no desktop.
          </li>
        </ol>
      </section>

      {/* 04 */}
      <section>
        <p className="copy-section-id">04 · Como funciona</p>
        <p className="copy-visual">Visual: 01–03 horizontal · ícones 💬 🏷 ✓ · mini bubbles</p>
        <h2>Três passos</h2>
        <ol className="copy-steps">
          <li>
            <span>01</span>
            <div>
              <strong>Pergunta</strong> — Você pergunta em linguagem natural no canal que a equipe
              já usa.
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Recorte</strong> — Nós devolvemos período, unidade e linha declarados na
              resposta.
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Prova</strong> — Cruzamos o valor com a fonte analítica antes de ir ao ar.
            </div>
          </li>
        </ol>
        <p className="copy-aside">
          Não é chat genérico sobre BI. É consulta à sua camada de dados — com contrato numérico.
        </p>
      </section>

      {/* 05 */}
      <section id="confianca">
        <p className="copy-section-id">05 · Na conversa</p>
        <p className="copy-visual">Visual: mock WhatsApp · 4 paradigmas · bolhas usuário + agente</p>
        <h2>Pergunta simples. Resposta que vale uma decisão.</h2>
        <p className="copy-sub">
          Correção quando alguém erra o recorte na reunião. Alerta quando a pergunta esconde uma
          armadilha comum. Insight quando você precisa saber o que o número significa em ganho,
          economia ou eficiência. Ponte quando outro departamento precisa entrar na conversa.
        </p>

        <p className="copy-paradigm">Paradigma · Correção</p>
        <p className="copy-paradigm-desc">
          Na reunião alguém solta um número — você confere no WhatsApp antes de repetir ou decidir.
        </p>

        <div className="copy-chat">
          <p className="copy-chat-label">Controladoria</p>
          <div className="copy-bubble copy-bubble--user">
            Tão falando na reunião que a margem Rio em abril foi <strong>R$ 470 mil</strong>. Tá certo
            isso?
          </div>
          <div className="copy-bubble copy-bubble--agent">
            Esse <strong>470 mil</strong> é <strong>janeiro a abril juntos</strong>, não abril
            sozinho.
            <br />
            <br />
            Para a reunião, o certo é <strong>R$ 352 mil</strong> · Rio · abril · linha margem. Quer
            que eu monto a frase pronta?
          </div>
        </div>

        <div className="copy-chat">
          <p className="copy-chat-label">Comercial</p>
          <div className="copy-bubble copy-bubble--user">
            Tão dizendo que batemos <strong>112% da meta</strong> em março. Fecha isso?
          </div>
          <div className="copy-bubble copy-bubble--agent">
            <strong>112%</strong> só fecha se você misturar meta de janeiro com venda de março.
            <br />
            <br />
            Março contra meta de março: <strong>94%</strong> · mesma região. Quer o recorte antes de
            mandar no grupo?
          </div>
        </div>

        <div className="copy-chat">
          <p className="copy-chat-label">RH</p>
          <div className="copy-bubble copy-bubble--user">
            Na reunião falaram que o headcount tá <strong>estável</strong> esse mês. É isso mesmo?
          </div>
          <div className="copy-bubble copy-bubble--agent">
            Quem olha rápido fala “estável” — mas são <strong>−847</strong> vs mês passado · Sul ·
            ativos.
            <br />
            <br />
            Desligados de fevereiro ainda estavam no fato. Quer por região ou por BU?
          </div>
        </div>

        <p className="copy-paradigm">Paradigma · Atenção</p>
        <p className="copy-paradigm-desc">
          Pergunta inocente — o agente avisa o que costuma passar batido ou a confusão clássica daquele
          indicador.
        </p>

        <div className="copy-chat">
          <p className="copy-chat-label">Controladoria</p>
          <div className="copy-bubble copy-bubble--user">Quanto fechou a receita líquida em março?</div>
          <div className="copy-bubble copy-bubble--agent">
            Março · Brasil · receita líquida: <strong>R$ 12,4 mi</strong>.
            <br />
            <br />
            Antes de levar pra reunião: <strong>38%</strong> disso é reconhecimento de contrato longo,
            não venda nova do mês. Quer que eu separe só o recorrente?
          </div>
        </div>

        <p className="copy-paradigm">Paradigma · Insight</p>
        <p className="copy-paradigm-desc">
          Você pede o número — o agente traduz em implicação prática para decidir.
        </p>

        <div className="copy-chat">
          <p className="copy-chat-label">Comercial</p>
          <div className="copy-bubble copy-bubble--user">Qual foi o ticket médio em março?</div>
          <div className="copy-bubble copy-bubble--agent">
            Ticket médio março · enterprise · Sul: <strong>R$ 4,2 mil</strong> (+18% vs fev).
            <br />
            <br />
            Do incremento, <strong>2 contas</strong> concentram <strong>41%</strong>. Sem elas, o ticket
            ficaria estável. Faz sentido blindar retenção antes de subir meta de aquisição?
          </div>
        </div>

        <p className="copy-paradigm">Paradigma · Cross-departamentos</p>
        <p className="copy-paradigm-desc">
          O dado do seu recorte — ligado ao que outro time olha no dia a dia.
        </p>

        <div className="copy-chat">
          <p className="copy-chat-label">RH → Operações</p>
          <div className="copy-bubble copy-bubble--user">Absenteísmo subiu em abril?</div>
          <div className="copy-bubble copy-bubble--agent">
            Absenteísmo abril · planta SP: <strong>4,8%</strong> (+1,1 pp vs mar).
            <br />
            <br />
            Operações aponta <strong>3 linhas</strong> com meta apertada no mesmo turno — padrão que
            costuma virar absenteísmo, não desengajamento. Quer cruzar com OTIF da semana?
          </div>
        </div>

        <p className="copy-aside">
          Nós validamos cada resposta contra a sua fonte antes de ir ao ar — e o recorte vem escrito na
          conversa.
        </p>
      </section>

      {/* 06 */}
      <section>
        <p className="copy-section-id">06 · Plataformas</p>
        <p className="copy-visual">Visual: logo wall monocromático</p>
        <h2>Estas são as ferramentas com as quais trabalhamos, além do Power BI.</h2>
        <p className="copy-connectors">
          Fabric · Qlik · Looker · Tableau · Excel · DW · BigQuery · Power BI · (+ outras fontes)
        </p>
        <p>
          Nós conectamos na camada analítica que sua empresa já usa. O agente funciona igual — muda a
          fonte, não a experiência.
        </p>
      </section>

      {/* 07 */}
      <section>
        <p className="copy-section-id">07 · Canais</p>
        <p className="copy-visual">Visual: 4 mocks · ícones apps</p>
        <h2>Um agente. O canal que a equipe já usa.</h2>
        <p>WhatsApp (principal), Telegram, SMS, E-mail — mesmo motor.</p>
      </section>

      {/* 08 */}
      <section>
        <p className="copy-section-id">08 · Departamentos & segmentos</p>
        <p className="copy-visual">Visual: 2 faixas chips distintas · ícones dept + indústria</p>
        <h2>Um agente por área</h2>
        <p>Nós configuramos um pack por report — métricas, aliases e validação daquela área.</p>
        <p className="copy-ticker">
          <strong>Departamentos:</strong> Comercial, Controladoria, Finanças, Fiscal, RH, TI,
          Jurídico, Operações, Supply chain, Marketing, Perdas, Projetos, Atendimento
        </p>
        <h3>Segmentos de mercado</h3>
        <p className="copy-ticker">
          Indústria, Varejo, Atacado, Saúde, Serviços financeiros, Agronegócio, Energia, Logística,
          Educação, Telecom, Construção, Tech B2B
        </p>
      </section>

      {/* 09 */}
      <section id="demo">
        <p className="copy-section-id">09 · Demo</p>
        <p className="copy-visual">Visual: carrossel autoplay · chrome fiel por canal</p>
        <h2>Veja a conversa no seu canal</h2>
        <p>Slides alinhados às cenas da seção 05 · WhatsApp, Telegram, SMS, E-mail.</p>
      </section>

      {/* 10 */}
      <section>
        <p className="copy-section-id">10 · Parceiros</p>
        <p className="copy-visual">Visual: card convite · CTA amber</p>
        <h2>Vamos conversar — para você vender como se fosse da sua empresa.</h2>
        <p>
          Whitelabel, multi-cliente, onboarding com prova numérica. Nós cuidamos da camada
          conversacional e da validação; você leva o relacionamento com o cliente.
        </p>
      </section>

      {/* 11 FAQ */}
      <section>
        <p className="copy-section-id">11 · FAQ</p>
        <dl className="copy-faq">
          <dt>O que é o BI Agent?</dt>
          <dd>
            Agente de IA que responde sobre os seus dados em linguagem natural — WhatsApp, Telegram,
            SMS ou e-mail — com número validado e recorte declarado.
          </dd>
          <dt>Substitui o Power BI (ou Qlik, Looker…)?</dt>
          <dd>Não. Consultamos a fonte que você já tem. O report continua sendo o report.</dd>
          <dt>Com quais ferramentas vocês trabalham?</dt>
          <dd>
            Power BI, Fabric, Qlik, Looker, Tableau, Excel, DW, BigQuery e outras via API ou
            semantic layer.
          </dd>
          <dt>Como sei que o número está certo?</dt>
          <dd>
            Âncoras na sua fonte + golden tests antes do go-live. Cada resposta mostra o recorte.
          </dd>
          <dt>Precisa ser Telegram?</dt>
          <dd>Não. WhatsApp é principal; demais canais são alternativas.</dd>
          <dt>O que é um “pack”?</dt>
          <dd>
            Configuração do agente para um report/área: métricas, aliases, validação e regras de
            recorte.
          </dd>
          <dt>Quanto tempo para ir ao ar?</dt>
          <dd>Depende do report. Demo de 15 min alinha escopo e prazo.</dd>
          <dt>Quem usa: diretor ou analista?</dt>
          <dd>
            Os dois. Diretor pergunta no bolso; analista confia que bate com a pivot.
          </dd>
          <dt>Funciona com planilha Excel?</dt>
          <dd>Sim, quando a planilha é fonte governada. Avaliamos no diagnóstico.</dd>
          <dt>Dá para revenda / whitelabel?</dt>
          <dd>
            Sim. Você vende com a sua marca — nós entregamos produto, validação e onboarding.
          </dd>
          <dt>Os dados passam por vocês?</dt>
          <dd>
            O agente consulta a fonte do cliente. Segurança alinhamos na demo.
          </dd>
          <dt>Qual a diferença para ChatGPT?</dt>
          <dd>
            ChatGPT não conhece o seu report. Nós consultamos a sua base, com recorte e prova
            numérica.
          </dd>
          <dt>Precisa treinar a equipe?</dt>
          <dd>Pergunta em linguagem natural. Sessão curta opcional para o time.</dd>
          <dt>E depois do go-live?</dt>
          <dd>Suporte e evolução do pack conforme o report muda.</dd>
          <dt>Tem limite de perguntas?</dt>
          <dd>Definimos por cliente conforme volume. Transparente na proposta.</dd>
        </dl>
      </section>

      {/* 12 */}
      <section className="copy-closing">
        <p className="copy-section-id">12 · Fechamento</p>
        <p className="copy-tag">Próximo passo</p>
        <h2>
          Veja o recorte certo
          <br />
          antes da reunião.
        </h2>
        <div className="copy-ctas">
          <a href="#demo">Ver demo</a>
          <a href={whatsAppUrl(WHATSAPP_MSG_BI_AGENT_DEMO)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={GOOGLE_BOOKING_URL} target="_blank" rel="noreferrer">
            Agendar 15 min
          </a>
        </div>
      </section>

      <footer className="copy-footer">
        <p>
          Fonte: <code>web/docs/bi-agent-lp-COPY.md</code> · recarregue após editar o doc
        </p>
      </footer>
    </article>
  );
}
