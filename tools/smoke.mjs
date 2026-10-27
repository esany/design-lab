#!/usr/bin/env node
// Rendert die Startseite und jede Studie in Chromium, macht Screenshots und
// meldet JavaScript-Fehler. Benötigt Playwright (in CI automatisch installiert).
//   node tools/smoke.mjs [ausgabeordner]

import { chromium } from "playwright";
import { readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = process.argv[2] ?? join(root, ".smoke");
mkdirSync(out, { recursive: true });

const pages = [["start", join(root, "index.html")]];
for (const slug of readdirSync(join(root, "studies"))) {
  const f = join(root, "studies", slug, "index.html");
  if (existsSync(f)) pages.push([slug, f]);
}

const browser = await chromium.launch();
let failed = 0;
for (const [name, file] of pages) {
  for (const [label, viewport] of [["desktop", { width: 1280, height: 1000 }], ["mobil", { width: 390, height: 900 }]]) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    await page.goto(pathToFileURL(file).href, { waitUntil: "load" });
    await page.screenshot({ path: join(out, `${name}-${label}.png`), fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (overflow) errors.push("horizontaler Überlauf");
    if (errors.length) { failed++; console.error(`✗ ${name} (${label}): ${errors.join("; ")}`); }
    else console.log(`✓ ${name} (${label})`);
    await page.close();
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
