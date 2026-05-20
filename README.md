# DeepFlowRun — Landing Page

Landing page institucional da DeepFlowRun (consultoria de IA aplicada B2B, Brasil).

## Stack

- **Next.js 16** (App Router, Turbopack, React Compiler)
- **React 19**
- **Tailwind CSS v4** + design tokens em CSS variables
- **TypeScript**
- **Inter Variable** + **JetBrains Mono** via `next/font`

## Comandos

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
pnpm start
```

## Estrutura

```
src/
├── app/
│   ├── globals.css        Design tokens + estilos das seções
│   ├── layout.tsx         Fontes + metadata
│   ├── page.tsx           Composição
│   └── icon.svg           Favicon
├── components/lp/
│   ├── animated-logo.tsx  Logo com pour líquido cyan sobre base cinza
│   ├── audience.tsx       Bloco 05 — Fit / Não fit
│   ├── closing-cta.tsx    Bloco 10 — CTA final
│   ├── differentiators.tsx Bloco 07 — Por quê
│   ├── faq.tsx            Bloco 09 — Objeções
│   ├── footer.tsx         Bloco 11
│   ├── hero.tsx           Bloco 01 — Hero + animação
│   ├── icons.tsx          Biblioteca de SVGs
│   ├── logo-mark.tsx      Mark + Wordmark
│   ├── method.tsx         Bloco 03 — 3 etapas
│   ├── problem.tsx        Bloco 02
│   ├── scroll-spy.tsx     Highlight ativo no nav (client)
│   ├── social-proof.tsx   Bloco 06 — Depoimentos
│   ├── top-nav.tsx        Nav fixa
│   ├── value.tsx          Bloco 04 — Proposta de valor
│   └── wa-float.tsx       Botão flutuante do WhatsApp
public/brand/              Assets de marca (SVG/PNG)
scripts/visual-check.mjs   Playwright — validação visual + cores + fonts
```

## Design System

Cores, tipografia e tokens espelham o sistema visual da DeepFlowRun.

- **Navy 950** `#050D1C` — superfícies escuras
- **Navy 900** `#0B1F3A` — marca canônica
- **Cyan 500** `#22D3EE` — acento / CTA
- **Emerald 500** `#10B981` — métricas positivas / WhatsApp
- **Graphite 600/700** — texto corpo

## Validação visual

```bash
pnpm dev
node scripts/visual-check.mjs   # gera screenshots/ (gitignored)
```

Captura 4 viewports (desktop, laptop, tablet, mobile) + estados (hover, FAQ aberto), checa fonts carregadas, cores aplicadas e console.
