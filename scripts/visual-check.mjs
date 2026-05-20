import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const TARGET_URL = process.env.URL ?? "http://localhost:3000";
const OUT = new URL("../screenshots/", import.meta.url).pathname;

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "mobile", width: 390, height: 844 },
];

const sections = [
  { id: "top", label: "hero" },
  { id: "problema", label: "problem" },
  { id: "metodo", label: "method" },
  { id: "para-quem", label: "audience" },
  { id: "faq", label: "faq" },
  { id: "diagnostico", label: "closing" },
];

const expectedTexts = [
  "Sua operação está te custando",
  "O problema não é falta de tecnologia",
  "Como a DeepFlowRun funciona",
  "O que muda quando a IA",
  "A DeepFlowRun é para sua empresa",
  "Por que a DeepFlowRun",
  "Perguntas honestas, respostas diretas",
  "Sua concorrência já está implementando IA",
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const consoleIssues = [];
const requestFailures = [];

try {
  for (const vp of viewports) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      locale: "pt-BR",
    });
    const page = await ctx.newPage();

    page.on("console", (msg) => {
      if (msg.type() === "error" || msg.type() === "warning") {
        consoleIssues.push(`[${vp.name}] ${msg.type()}: ${msg.text()}`);
      }
    });
    page.on("pageerror", (err) => {
      consoleIssues.push(`[${vp.name}] pageerror: ${err.message}`);
    });
    page.on("requestfailed", (req) => {
      requestFailures.push(
        `[${vp.name}] ${req.method()} ${req.url()} — ${req.failure()?.errorText ?? ""}`,
      );
    });

    await page.goto(TARGET_URL, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    if (vp.name === "desktop") {
      for (const expected of expectedTexts) {
        const found = await page
          .locator(`text=${expected}`)
          .first()
          .count();
        if (!found) console.error(`MISSING TEXT: "${expected}"`);
      }
    }

    await page.screenshot({
      path: `${OUT}lp-${vp.name}-fold.png`,
      fullPage: false,
    });

    await page.screenshot({
      path: `${OUT}lp-${vp.name}-full.png`,
      fullPage: true,
    });

    if (vp.name === "desktop") {
      for (const s of sections) {
        const el = page.locator(`#${s.id}`);
        if ((await el.count()) === 0) {
          console.error(`SECTION NOT FOUND: #${s.id}`);
          continue;
        }
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(150);
        await el.screenshot({ path: `${OUT}section-${s.label}.png` });
      }

      const faqItem = page.locator(".faq-item").nth(1);
      await faqItem.scrollIntoViewIfNeeded();
      await faqItem.locator("summary").click();
      await page.waitForTimeout(220);
      await faqItem.screenshot({ path: `${OUT}faq-item-open.png` });

      const heroCta = page.locator(".hero .btn-primary").first();
      await heroCta.scrollIntoViewIfNeeded();
      await heroCta.hover();
      await page.waitForTimeout(220);
      await page.locator(".hero").screenshot({
        path: `${OUT}hero-cta-hover.png`,
      });

      const fonts = await page.evaluate(() => {
        const get = (sel) => {
          const el = document.querySelector(sel);
          return el ? getComputedStyle(el).fontFamily : null;
        };
        return {
          body: get("body"),
          h1: get(".hero h1"),
          eyebrow: get(".eyebrow"),
        };
      });
      console.log("FONTS:", JSON.stringify(fonts, null, 2));

      const colorOf = (sel, prop) =>
        page.evaluate(
          ([s, p]) => {
            const el = document.querySelector(s);
            return el ? getComputedStyle(el).getPropertyValue(p) : null;
          },
          [sel, prop],
        );
      const heroBg = await colorOf(".hero", "background-color");
      const ctaBg = await colorOf(".hero .btn-primary", "background-color");
      console.log("COLORS:", { heroBg, ctaBg });
    }

    await ctx.close();
  }
} finally {
  await browser.close();
}

if (consoleIssues.length) {
  console.error("\nCONSOLE ISSUES:");
  consoleIssues.forEach((i) => console.error(" -", i));
} else {
  console.log("\nCONSOLE: clean");
}
if (requestFailures.length) {
  console.error("\nREQUEST FAILURES:");
  requestFailures.forEach((i) => console.error(" -", i));
} else {
  console.log("REQUESTS: all ok");
}

console.log(`\nScreenshots: ${OUT}`);
