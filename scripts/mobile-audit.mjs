import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const TARGET_URL = process.env.URL ?? "https://deepflowrun.com";
const OUT = join(
  new URL("../screenshots/mobile-audit-2026-08-26/", import.meta.url).pathname,
);

const viewport = { width: 375, height: 812 };

const sections = [
  { id: "top", label: "01-hero" },
  { id: "problema", label: "02-problem" },
  { id: "metodo", label: "03-method" },
  { id: "valor", label: "04-value" },
  { id: "para-quem", label: "05-audience" },
  { id: "prova", label: "06-social-proof" },
  { id: "diferenciais", label: "07-differentiators" },
  { id: "faq", label: "08-faq" },
  { id: "diagnostico", label: "09-closing-cta" },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport,
  deviceScaleFactor: 3,
  locale: "pt-BR",
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
});
const page = await ctx.newPage();

const consoleIssues = [];
const requestFailures = [];
const perf = { loadTime: 0, resources: 0, totalBytes: 0 };

page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning") {
    consoleIssues.push(`${msg.type()}: ${msg.text()}`);
  }
});
page.on("requestfailed", (req) => {
  requestFailures.push(`${req.method()} ${req.url()} — ${req.failure()?.errorText ?? ""}`);
});
page.on("response", (res) => {
  perf.resources++;
  const len = Number(res.headers()["content-length"] || 0);
  if (len) perf.totalBytes += len;
});

const t0 = Date.now();
await page.goto(TARGET_URL, { waitUntil: "networkidle" });
perf.loadTime = Date.now() - t0;
await page.evaluate(() => document.fonts.ready);

await page.screenshot({ path: join(OUT, "00-home-fold.png"), fullPage: false });
await page.screenshot({ path: join(OUT, "00-home-full.png"), fullPage: true });

const audit = await page.evaluate(() => {
  const issues = [];
  const docWidth = document.documentElement.scrollWidth;
  const viewWidth = window.innerWidth;
  if (docWidth > viewWidth + 1) {
    issues.push({
      type: "overflow",
      severity: "high",
      detail: `Horizontal overflow: scrollWidth ${docWidth}px > viewport ${viewWidth}px`,
    });
  }

  const navLinks = document.querySelector(".nav-links");
  const navVisible = navLinks && getComputedStyle(navLinks).display !== "none";
  if (navVisible && viewWidth <= 880) {
    issues.push({
      type: "nav",
      severity: "medium",
      detail: "Nav links still visible on mobile — expected hidden at ≤880px",
    });
  }
  if (!navVisible && viewWidth <= 880) {
    issues.push({
      type: "nav",
      severity: "high",
      detail: "No mobile menu/hamburger — anchor links hidden with no alternative navigation",
    });
  }

  const tapTargets = [];
  document.querySelectorAll("a, button, summary").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    if (r.width < 44 || r.height < 44) {
      tapTargets.push({
        tag: el.tagName.toLowerCase(),
        text: (el.textContent || "").trim().slice(0, 60),
        w: Math.round(r.width),
        h: Math.round(r.height),
      });
    }
  });
  if (tapTargets.length) {
    issues.push({
      type: "tap-targets",
      severity: "medium",
      detail: `${tapTargets.length} interactive elements below 44×44px`,
      samples: tapTargets.slice(0, 8),
    });
  }

  const navCta = document.querySelector(".nav-cta .btn");
  if (navCta) {
    const r = navCta.getBoundingClientRect();
    if (r.width > viewWidth - 40) {
      issues.push({
        type: "layout",
        severity: "medium",
        detail: `Nav CTA nearly full width (${Math.round(r.width)}px) — may clip brand on narrow screens`,
      });
    }
  }

  const wa = document.querySelector(".wa-float");
  if (wa) {
    const r = wa.getBoundingClientRect();
    if (r.width < 44 || r.height < 44) {
      issues.push({
        type: "tap-targets",
        severity: "medium",
        detail: `WhatsApp float button ${Math.round(r.width)}×${Math.round(r.height)}px`,
      });
    }
  }

  const heroH1 = document.querySelector(".hero h1");
  const heroSize = heroH1 ? parseFloat(getComputedStyle(heroH1).fontSize) : 0;
  if (heroSize < 28) {
    issues.push({
      type: "typography",
      severity: "low",
      detail: `Hero h1 font-size ${heroSize}px may feel small on mobile`,
    });
  }

  const bodySize = parseFloat(getComputedStyle(document.body).fontSize);
  if (bodySize < 16) {
    issues.push({
      type: "typography",
      severity: "medium",
      detail: `Body font-size ${bodySize}px — below 16px can trigger iOS zoom on inputs`,
    });
  }

  return {
    issues,
    metrics: {
      scrollWidth: docWidth,
      viewport: viewWidth,
      heroFontSize: heroSize,
      bodyFontSize: bodySize,
      navLinksVisible: navVisible,
    },
  };
});

for (const s of sections) {
  const el = page.locator(`#${s.id}`);
  if ((await el.count()) === 0) {
    console.error(`SECTION NOT FOUND: #${s.id}`);
    continue;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await page.screenshot({ path: join(OUT, `${s.label}.png`), fullPage: false });
}

// Nav state screenshot
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(150);
await page.locator(".topnav").screenshot({ path: join(OUT, "nav-fold.png") });

// FAQ open state
const faqItem = page.locator(".faq-item").first();
if ((await faqItem.count()) > 0) {
  await faqItem.scrollIntoViewIfNeeded();
  await faqItem.locator("summary").click();
  await page.waitForTimeout(250);
  await page.screenshot({ path: join(OUT, "08-faq-open.png"), fullPage: false });
}

// Check /bi-agent route
const biResp = await page.goto(`${TARGET_URL}/bi-agent`, { waitUntil: "networkidle" });
const biAgentCheck = await page.evaluate(() => ({
  title: document.title,
  hasBiAgentContent: /BI Agent|bi-agent|DeepRunBI/i.test(document.body.innerText),
  isHomepage: !!document.querySelector("#top") && !!document.querySelector("#problema"),
  h1: document.querySelector("h1")?.textContent?.trim(),
}));
await page.screenshot({ path: join(OUT, "bi-agent-route.png"), fullPage: false });

const report = {
  url: TARGET_URL,
  viewport,
  perf,
  consoleIssues,
  requestFailures,
  biAgent: {
    status: biResp?.status(),
    ...biAgentCheck,
    note: "Caddy try_files falls back to index.html — route does not exist as separate page",
  },
  ...audit,
  screenshotsDir: OUT,
};

await writeFile(join(OUT, "audit-report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

await ctx.close();
await browser.close();
