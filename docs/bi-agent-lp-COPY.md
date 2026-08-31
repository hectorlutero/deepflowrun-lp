# BI Agent LP — Copy (fonte de verdade)

**Status:** ✅ **fechada** · v3.2 · 27-ago-2026  
**Tom:** editorial · **1ª pessoa (nós)** onde couber · motores E + B leve  
**Design:** ✅ implementado em `/bi-agent` · mix E+F · light default · dark mode  
**Marca:** **BI Agent** · by DeepFlowRun

**Princípio v3:** BI Agent integra com **qualquer stack analítica principal** — não somos “bot do Power BI”. Power BI entra como um dos conectores, junto com Qlik, Looker, Tableau, Excel, DW, BigQuery, Fabric, etc.

---

## Meta

| Campo | Valor |
|-------|-------|
| **Rota** | `deepflowrun.com/bi-agent` |
| **Público** | C-level + analista/BI lead · pinça parceiros |
| **CTA primário** | Agendar Demonstração (play no mock → booking) |
| **CTA secundários** | Entrar em contato (WhatsApp) · Agendar Demonstração |
| **Canal hero** | WhatsApp (principal) · Telegram · SMS · E-mail |

---

## 01 · Hero ✅

**Tag:** `BI Agent / 01`

### Visual
- **Layout:** split editorial (F) + mock WhatsApp com glow leve (E)
- **Imagem principal:** mock conversa WhatsApp (não stock photo) · badge “recorte declarado” no bubble de resposta
- **CTAs:** 2 botões à esquerda (**Entrar em contato** + **Agendar Demonstração**) · play no mock que no hover vira **Agende uma demonstração** → booking
- **Ícones:** logo BI Agent · ícones discretos dos conectores (linha abaixo do sub ou faixa “Conectamos com”)

### Headline
```
Coloque o seu BI no WhatsApp.
Decida antes de abrirem o report.
```
*(“report” no lugar de Power BI — stack-agnóstico)*

### Pull quote *(B leve · 2ª pessoa reconhecível)*
> Errou no filtro do BI e apresentou número errado para a diretoria.

### Subheadline *(nós implícito no produto)*
Pergunte em linguagem natural no WhatsApp. A resposta traz o **mesmo número da sua base analítica**, sem o risco de recorte errado por engano.

### Faixa conectores *(nova · visual: logos monocromáticos)*
Conectamos com **Power BI, Fabric, Qlik, Looker, Tableau, Excel, DW, BigQuery** e outras fontes que sua empresa já usa.

### CTAs
| Posição | Botão |
|---------|--------|
| Coluna copy | **Entrar em contato** (ícone WhatsApp) · **Agendar Demonstração** (calendário) |
| Mock WhatsApp | Play → hover **Agende uma demonstração** → booking |

---

## 02 · Praticidade

### Visual
- **3 cards** com ícone por cenário: ✈ avião · ◉ sala de reunião · ⚡ relógio/competição
- **Foto/ilustração:** opcional — silhueta corredor de aeroporto ou sala de reunião (desfocada, editorial)
- **Sem** screenshot de Power BI

### Copy
**Título:** Onde a decisão acontece  
**Sub:** Velocidade com número que fecha. Sem abrir o desktop.

| Cenário | Ícone | Copy |
|---------|-------|------|
| **No avião** | ✈ | Número validado no bolso, sem laptop. |
| **Na reunião** | ◉ | Pergunta na mesa, resposta em segundos. |
| **Antes deles** | ⚡ | Quem exporta planilha decide depois. |

**Fechamento:** Nós colocamos a decisão no ritmo do negócio — não no ritmo do export.

---

## 03 · Problema

### Visual
- **Ilustração:** gestor olhando celular vs colega preso no notebook (split simples)
- **Ícone:** cadeado no desktop / cadeado aberto no WhatsApp

### Copy
**Título:** Seu BI não deveria depender de quem está na frente do PC

1. Toda pergunta vira export, planilha paralela ou “deixa eu abrir o report”.
2. O número chega tarde ou errado: card genérico, recorte trocado, meta que não bate com a linha certa.
3. A diretoria decide no WhatsApp e no corredor. O BI ficou no desktop.

**Nota de voz:** manter **você/seu** (dor do cliente) · “nós” entra nas seções de solução.

---

## 04 · Como funciona

### Visual
- **3 passos** numerados grandes (01–03) · linha conectora horizontal
- **Ícones:** balão de chat · etiqueta/recorte · check contra documento/report
- **Mini-mock:** um bubble WhatsApp por passo (carrossel estático ou scroll)

### Copy
**Título:** Três passos

| # | Ícone | Copy |
|---|-------|------|
| **01 Pergunta** | 💬 | Você pergunta em linguagem natural no canal que a equipe já usa. |
| **02 Recorte** | 🏷 | Nós devolvemos período, unidade e linha **declarados** na resposta. |
| **03 Prova** | ✓ | Cruzamos o valor com a fonte analítica antes de ir ao ar. |

**Rodapé:** Não é chat genérico sobre BI. É consulta à **sua** camada de dados — com contrato numérico.

---

## 05 · Na conversa

### Visual
- **Formato:** mock WhatsApp · bolhas usuário (verde claro) + agente (branco) · avatar “BI”
- **4 blocos:** Correção · Atenção · Insight · Cross-departamentos · *(1–3 cenas por bloco)*
- **Tom visual:** friendly · sem tabelas · números em monospace no bubble do agente

### Título
Pergunta simples. Resposta que vale uma decisão.

### Sub
Correção quando alguém erra o recorte na reunião. Alerta quando a pergunta esconde uma armadilha comum. Insight quando você precisa saber o que o número **significa** em ganho, economia ou eficiência. Ponte quando outro departamento precisa entrar na conversa.

---

### Paradigma · Correção

Na reunião alguém solta um número — você confere no WhatsApp antes de repetir ou decidir.

#### Cena · Controladoria

**👤 Usuário**  
Tão falando na reunião que a margem Rio em abril foi **R$ 470 mil**. Tá certo isso?

**🤖 BI Agent**  
Esse **470 mil** é **janeiro a abril juntos**, não abril sozinho.

Para a reunião, o certo é **R$ 352 mil** · Rio · abril · linha margem. Quer que eu monto a frase pronta?

#### Cena · Comercial

**👤 Usuário**  
Tão dizendo que batemos **112% da meta** em março. Fecha isso?

**🤖 BI Agent**  
**112%** só fecha se você misturar meta de janeiro com venda de março.

Março contra meta de março: **94%** · mesma região. Quer o recorte antes de mandar no grupo?

#### Cena · RH

**👤 Usuário**  
Na reunião falaram que o headcount tá **estável** esse mês. É isso mesmo?

**🤖 BI Agent**  
Quem olha rápido fala “estável” — mas são **−847** vs mês passado · Sul · ativos.

Desligados de fevereiro ainda estavam no fato. Quer por região ou por BU?

---

### Paradigma · Atenção

Pergunta inocente — o agente avisa o que costuma passar batido ou a confusão clássica daquele indicador.

#### Cena · Controladoria

**👤 Usuário**  
Quanto fechou a receita líquida em março?

**🤖 BI Agent**  
Março · Brasil · receita líquida: **R$ 12,4 mi**.

Antes de levar pra reunião: **38%** disso é reconhecimento de contrato longo, não venda nova do mês. Quer que eu separe só o recorrente?

---

### Paradigma · Insight

Você pede o número — o agente traduz em implicação prática para decidir.

#### Cena · Comercial

**👤 Usuário**  
Qual foi o ticket médio em março?

**🤖 BI Agent**  
Ticket médio março · enterprise · Sul: **R$ 4,2 mil** (+18% vs fev).

Do incremento, **2 contas** concentram **41%**. Sem elas, o ticket ficaria estável. Faz sentido blindar retenção antes de subir meta de aquisição?

---

### Paradigma · Cross-departamentos

O dado do seu recorte — ligado ao que outro time olha no dia a dia.

#### Cena · RH → Operações

**👤 Usuário**  
Absenteísmo subiu em abril?

**🤖 BI Agent**  
Absenteísmo abril · planta SP: **4,8%** (+1,1 pp vs mar).

Operações aponta **3 linhas** com meta apertada no mesmo turno — padrão que costuma virar absenteísmo, não desengajamento. Quer cruzar com OTIF da semana?

---

### Rodapé *(nós · 1 linha)*
Nós validamos cada resposta contra a sua fonte antes de ir ao ar — e o recorte vem escrito na conversa.

---

## 06 · Plataformas

### Visual
- **Logo wall:** Power BI · Fabric · Qlik · Looker · Tableau · Excel · DW · BigQuery
- **Estilo:** monocromático paper · hover color opcional

### Copy
**Título:** Estas são as ferramentas com as quais trabalhamos, além do Power BI.

**Lista:** Fabric · Qlik · Looker · Tableau · Excel · DW · BigQuery · Power BI · *(+ outras fontes via API / SQL / semantic layer)*

**Sub:** Nós conectamos na camada analítica que sua empresa já usa. O agente funciona igual — muda a fonte, não a experiência.

---

## 07 · Canais

### Visual
- **4 mocks** lado a lado (ou carrossel): chrome fiel WhatsApp · Telegram · SMS · E-mail
- **Ícones oficiais** de cada app (cores reais só nos mocks)

### Copy
**Título:** Um agente. O canal que a equipe já usa.

WhatsApp (principal) · Telegram · SMS · E-mail — mesmo motor, mesma validação.

| Canal | Copy |
|-------|------|
| WhatsApp | Decisão do dia a dia no bolso |
| Telegram | Resposta rápida, grupos, power user |
| SMS | Uma linha, um número, recorte mínimo |
| E-mail | Recorte estruturado para board ou auditoria |

---

## 08 · Departamentos & segmentos *(separados)*

### Visual
- **Duas faixas** distintas (não misturar):
  1. **Departamentos** — chips ícone + label (briefcase, calculator, users…)
  2. **Segmentos** — chips indústria (factory, cart, hospital…)
- **Ticker** opcional só em departamentos · segmentos em grid estático

### Departamentos *(dentro da empresa)*
Comercial · Controladoria · Finanças · Fiscal · Contabilidade · RH · TI · Jurídico · Operações · Supply chain · Marketing · Perdas · Projetos · Atendimento

**Copy departamentos:**  
**Título:** Um agente por área — falando a língua de cada departamento  
**Sub:** Nós configuramos um pack por report: métricas, aliases e validação numérica **daquela** área.

### Segmentos *(mercado)*
Indústria · Varejo · Atacado · Saúde · Serviços financeiros · Agronegócio · Energia · Logística · Educação · Telecom · Construção · Tech B2B

**Copy segmentos:**  
**Título:** Segmentos que atendemos  
**Sub:** O padrão é o mesmo: linguagem natural, recorte certo, prova contra a fonte. A diferença está no **report** — não no produto.

---

## 09 · Demo (carrossel)

### Visual
- **Autoplay lento** · dots · swipe mobile
- **Slide ativo** com borda cyan/amber · demais opacos
- Cada slide = mock UI do canal (não placeholder)

### Título
Veja a conversa no seu canal

| Slide | Canal | Destaque visual |
|-------|-------|-----------------|
| 1 | WhatsApp | Margem + recorte · interpretação do agente |
| 2 | WhatsApp | Ambiguidade receita · duas leituras |
| 3 | Telegram | KPI ranking |
| 4 | SMS | Uma linha |
| 5 | E-mail | Assunto + corpo estruturado |

*(Conteúdo numérico alinhado às cenas da seção 05.)*

---

## 10 · Parceiros *(pinça)*

### Visual
- Card compacto · tom convite · ícone handshake
- CTA destacado (amber)

### Copy
**Título:** Seja um Parceiro.

**Corpo:** Sua empresa está precisando fornecer serviços de IA mas ainda não tem um produto? Conheça o nosso modelo whitelabel. Nós entregamos o BI Agent com a sua marca — produto, validação numérica e onboarding. Você leva o relacionamento com o cliente.

**CTA:** Entrar em contato · Agendar Demonstração

---

## 11 · FAQ

### Visual
- Accordion · ícone +/−

| Pergunta | Resposta |
|----------|----------|
| **O que é o BI Agent?** | Um agente de IA que responde perguntas sobre os seus dados em linguagem natural — no WhatsApp, Telegram, SMS ou e-mail — com número validado e recorte declarado. |
| **Substitui o Power BI (ou Qlik, Looker…)?** | Não. Consultamos a fonte analítica que você já tem. O report continua sendo o report. |
| **Com quais ferramentas vocês trabalham?** | Power BI, Fabric, Qlik, Looker, Tableau, Excel, DW, BigQuery e outras fontes via API ou semantic layer. |
| **Como sei que o número está certo?** | Validamos com âncoras na sua fonte e rodamos golden tests antes do go-live. Cada resposta mostra o recorte usado. |
| **Precisa ser Telegram?** | Não. WhatsApp é o canal principal; os demais são alternativas. |
| **O que é um “pack”?** | A configuração do agente para um report ou área: métricas, aliases, validação e regras de recorte daquele BI. |
| **Quanto tempo para ir ao ar?** | Depende do report e da área. Uma demo de 15 min alinha escopo e prazo. |
| **Quem usa: diretor ou analista?** | Os dois. Diretor pergunta no bolso; analista confia que bate com a pivot — seja qual for a ferramenta. |
| **Funciona com planilha Excel?** | Sim, quando a planilha (ou modelo) é a fonte governada do dado. Avaliamos no diagnóstico. |
| **Dá para revenda / whitelabel?** | Sim. Conversamos para você vender com a sua marca — nós entregamos produto, validação e onboarding. |
| **Os dados passam por vocês?** | O agente consulta a fonte do cliente (cloud ou ambiente acordado). Detalhes de segurança alinhamos na demo. |
| **Qual a diferença para ChatGPT?** | ChatGPT não conhece o seu report. Nós consultamos **a sua** base, com recorte explícito e prova numérica. |
| **Precisa treinar a equipe?** | A pergunta é em linguagem natural. Opcional: sessão curta para o time saber o que o agente cobre. |
| **E depois do go-live?** | Suporte e evolução do pack conforme o report muda. Combinamos no contrato. |
| **Tem limite de perguntas?** | Definimos por cliente conforme volume e área. Transparente na proposta. |

*(Sem pricing na LP — CTA demo.)*

---

## 12 · Fechamento

### Visual
- Fundo paper ou navy suave · CTA grande
- Repetir mock WhatsApp pequeno ou ícone check

**Kicker:** Próximo passo

### Headline
```
Veja o recorte certo
antes da reunião.
```
*(alinhado ao drama filtro/recorte — não “número certo” genérico)*

### CTAs
Entrar em contato · Agendar Demonstração

### Footer
**BI Agent** by DeepFlowRun

---

## Microcopy global

| Onde | Texto |
|------|-------|
| Nav | Demo · Confiança · Plataformas · Agendar |
| Sticky mobile | Entrar em contato · Agendar Demonstração |
| WhatsApp msg | Olá! Quero uma demo de 15 min do BI Agent. |
| Meta title | BI Agent — Seu BI no WhatsApp, recorte certo |
| Meta description | Integramos Power BI, Qlik, Looker, Tableau, Fabric, BigQuery e mais. Pergunte no WhatsApp — resposta com recorte certo, sem erro de filtro. |

---

## Mapa visual rápido (LP inteira)

| Seção | Imagem / mídia | Ícones |
|-------|----------------|--------|
| 01 Hero | Mock WhatsApp hero + CTA demo flutuante | Conectores (logo wall) |
| 02 Praticidade | 3 cards cenário | ✈ ◉ ⚡ |
| 03 Problema | Split mobile vs desktop | cadeado / unlock |
| 04 Como funciona | 3 steps + mini bubbles | 💬 🏷 ✓ |
| 05 Na conversa | 4 paradigmas · mocks WhatsApp | correção / alerta / insight / ponte |
| 06 Plataformas | Logo wall | logos stack |
| 07 Canais | 4 mocks canal | app icons |
| 08 Dept + Segmentos | 2 chip grids | dept + industry icons |
| 09 Demo | Carrossel autoplay | dots canal |
| 10 Parceiros | card mínimo | handshake |
| 11 FAQ | accordion | +/− |
| 12 Fechamento | CTA band | — |

**Evitar:** stock “pessoa sorrindo com tablet” · dashboard Power BI genérico como hero · gráficos 3D decorativos.

---

## Decisões v3

- [x] Stack-agnóstico (não só Power BI)
- [x] Departamentos ≠ segmentos
- [x] Voz **nós** nas seções de solução/entrega
- [x] Drama confiança = cenas interpretação (sem 0,0%)
- [x] Direção visual por seção
- [x] Hero: 2 CTAs copy + Ver demo no mock
- [x] Seção 05: 4 paradigmas (Correção · Atenção · Insight · Cross-departamentos)
- [x] Copy completa validada
