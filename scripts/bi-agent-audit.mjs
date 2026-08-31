import { chromium } from "playwright";
import { mkdirSync } from "fs";

const OUT = "/tmp/bi-agent-shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/bi-agent", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

await page.evaluate(() => {
  const root = document.querySelector(".bi-agent");
  root?.classList.add("bi-agent--light");
  root?.classList.remove("bi-agent--dark");
});

const toggleCount = await page.locator(".ba-theme-toggle").count();
console.log("theme_toggle_count", toggleCount);
const toggleText = await page.locator(".ba-theme-toggle").first().textContent();
console.log("theme_toggle_text", toggleText?.trim());

await page.screenshot({ path: `${OUT}/00-full-light.png`, fullPage: true });
await page.screenshot({ path: `${OUT}/01-hero-viewport.png` });

const sectionLocators = page.locator("main > section");
const count = await sectionLocators.count();
const meta = [];

for (let i = 0; i < count; i++) {
  const section = sectionLocators.nth(i);
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  const info = await section.evaluate((el) => {
    const title =
      el.querySelector("h1, h2, .ba-eyebrow")?.textContent?.trim()?.slice(0, 80) ||
      `section-${i}`;
    return { title, id: el.id || "" };
  });
  meta.push({ i, ...info });
  const slug = (info.id || info.title).replace(/[^a-zA-Z0-9]+/g, "-").slice(0, 40);
  await section.screenshot({ path: `${OUT}/${String(i + 1).padStart(2, "0")}-${slug}.png` });
}

console.log(JSON.stringify(meta, null, 2));

// Dark mode via toggle click
await page.locator(".ba-theme-toggle").first().click();
await page.waitForTimeout(400);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/dark-01-hero.png` });

const confianca = page.locator("#confianca");
await confianca.scrollIntoViewIfNeeded();
await page.waitForTimeout(200);
await confianca.screenshot({ path: `${OUT}/dark-05-confianca.png` });

const isDark = await page.evaluate(() =>
  document.querySelector(".bi-agent")?.classList.contains("bi-agent--dark"),
);
console.log("dark_class_after_toggle", isDark);

await browser.close();
console.log("done", OUT);
