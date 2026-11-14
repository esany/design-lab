#!/usr/bin/env node
// Stellt die Website zusammen und prüft, dass jeder Link auf eine Seite zeigt, die mit veröffentlicht wird.
// „Fertig“ endet am Ort des Eigentümers (Folgerung 2 aus Bug Flickenteppich, #216): Ein Link auf der
// Website, dessen Ziel nicht im Paket liegt, ist ein Fehler, kein Hinweis.
//   node tools/website.mjs [ziel]     Vorgabe: _site
// Grenze: geprüft wird das Paket, nicht die ausgelieferte Seite im Netz. Ob GitHub Pages sie wirklich
// zeigt, sieht nur, wer sie aufruft; was nicht aufgerufen wurde, heißt „nicht geprüft“.
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
/** Was veröffentlicht wird. Eine Liste, damit Workflow und Prüfung nicht auseinanderlaufen. */
export const INHALT = ["index.html", "assets", "studies", "leitfaden"];
/** Nie veröffentlicht: Zielbilder sind der Arbeitsplatz des Eigentümers, privat bei Cloudflare (Eigentümer 14.11.).
 *  Die Daten liegen im öffentlichen Repo; die Seite holt esany/werke, functions/labor/index.js, aus dem Repo. */
export const NICHT = (quelle) => !/(^|\/)zielbild(\/|$)/.test(relative(root, quelle));

/** Archivierte Zielbilder im Labor: An ihrer alten Adresse steht eine erzeugte Hinweisseite, die mit
 *  veröffentlicht wird, damit früher genannte Adressen auf das eine Zielbild führen (Gegenprüfung des Baus, Probe 5). */
export function archivSeiten(dir = root, rel = "") {
  const funde = [];
  for (const n of readdirSync(dir)) {
    if (n.startsWith(".") || n === "node_modules" || n === "_site" || n === "fixtures") continue;
    const voll = join(dir, n), r = rel ? `${rel}/${n}` : n;
    if (statSync(voll).isDirectory()) funde.push(...archivSeiten(voll, r));
    else if (n === "punkte.json" && dirname(r).split("/").pop() === "zielbild") {
      try { if (JSON.parse(readFileSync(voll, "utf8")).archiviert) funde.push(`${dirname(r)}/index.html`); } catch {}
    }
  }
  return funde;
}

/** Sucht relative Verweise (href, src, Weiterleitung) in einer HTML-Seite. */
export function verweise(html) {
  const ohneSkript = html.replace(/<script[\s\S]*?<\/script>/g, "");
  const weiter = [...ohneSkript.matchAll(/http-equiv="refresh"\s+content="\d+;\s*url=([^"]+)"/gi)].map((m) => m[1]);
  return [...[...ohneSkript.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]), ...weiter]
    .filter((u) => !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(u));
}

/** Prüft ein zusammengestelltes Paket. Gibt Fehler in Alltagssprache zurück. */
export function pruefePaket(ziel) {
  const fehler = [];
  (function gehe(dir) {
    for (const n of readdirSync(dir)) {
      const p = join(dir, n);
      if (statSync(p).isDirectory()) { gehe(p); continue; }
      if (!n.endsWith(".html")) continue;
      for (const u of verweise(readFileSync(p, "utf8"))) {
        const pfad = decodeURIComponent(u.replace(/&amp;/g, "&").split(/[?#]/)[0]);
        if (!pfad) continue;
        const t = resolve(dirname(p), pfad);
        const da = existsSync(t) && (statSync(t).isFile() || existsSync(join(t, "index.html")));
        if (!da || !t.startsWith(resolve(ziel))) fehler.push(`${relative(ziel, p)}: Link „${u}“ führt auf keine veröffentlichte Seite`);
      }
    }
  })(ziel);
  return fehler;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const ziel = resolve(process.argv[2] ?? join(root, "_site"));
  rmSync(ziel, { recursive: true, force: true });
  mkdirSync(ziel, { recursive: true });
  for (const x of INHALT) {
    if (!existsSync(join(root, x))) { console.error(`✗ ${x} fehlt, wird aber veröffentlicht`); process.exit(1); }
    cpSync(join(root, x), join(ziel, x), { recursive: true, filter: NICHT });
  }
  const fehler = pruefePaket(ziel);
  if (fehler.length) { console.error(`✗ ${fehler.length} tote(r) Link(s):\n  - ${fehler.join("\n  - ")}`); process.exit(1); }
  console.log(`✓ Website zusammengestellt in ${relative(root, ziel) || ziel}: ${INHALT.join(", ")}, ohne Zielbilder; alle Links führen auf veröffentlichte Seiten (nicht geprüft: die ausgelieferte Seite im Netz)`);
}
