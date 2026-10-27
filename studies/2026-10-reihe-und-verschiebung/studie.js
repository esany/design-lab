/* Reihe und Verschiebung — Logik.
   Aufbau:  1 Farbe (OKLCH ↔ sRGB)   2 Itten-Kreis   3 Farbsysteme
            4 Bedienelemente (mit Pflicht-Erklärung)   5 Regel   6 Darstellung
   Jede Einstellung muss in texte.js eine Erklärung haben — sonst meldet die
   Studie einen Fehler (und die automatische Prüfung schlägt an). */
(() => {
"use strict";
const T = window.TEXTE;
const $ = (id) => document.getElementById(id);
const fmt = (x, d = 2) => Number(x).toFixed(d);

/* ---------- 1 Farbe ---------- */
function oklabToLinear(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return [
     4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
  ];
}
const lchToLab = (L, C, h) => [L, C * Math.cos(h * Math.PI / 180), C * Math.sin(h * Math.PI / 180)];
const inGamut = (rgb) => rgb.every((v) => v >= -1e-4 && v <= 1 + 1e-4);
const fits = (L, C, h) => inGamut(oklabToLinear(...lchToLab(L, C, h)));

function maxChroma(L, h) { // größte darstellbare Buntheit bei L und h
  let lo = 0, hi = 0.4;
  for (let i = 0; i < 22; i++) { const mid = (lo + hi) / 2; fits(L, mid, h) ? (lo = mid) : (hi = mid); }
  return lo;
}
const cuspCache = new Map();
function cusp(h) { // Helligkeit, bei der der Ton am buntesten sein kann
  if (cuspCache.has(h)) return cuspCache.get(h);
  let best = { L: 0.5, C: 0 };
  for (let L = 0.25; L <= 0.985; L += 0.005) { const C = maxChroma(L, h); if (C > best.C) best = { L, C }; }
  cuspCache.set(h, best); return best;
}
/* Farbe erzeugen: OKLCH → sRGB. Außerhalb des Gamuts wird nur C verringert. */
function color(name, L, C, h) {
  let c = Math.max(0, C);
  while (c > 0 && !fits(L, c, h)) c = Math.max(0, c - 0.001);
  const hex = "#" + oklabToLinear(...lchToLab(L, c, h)).map((v) => {
    v = Math.min(1, Math.max(0, v));
    v = v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
    return Math.round(v * 255).toString(16).padStart(2, "0");
  }).join("");
  return { name, L, C: c, h: ((h % 360) + 360) % 360, hex, reduced: c < C - 0.002 };
}
function mixLab(A, B, t) { // lineare Mischung im OKLab-Raum
  const a = lchToLab(A.L, A.C, A.h), b = lchToLab(B.L, B.C, B.h);
  const [L, x, y] = a.map((v, i) => v + (b[i] - v) * t);
  return { L, C: Math.hypot(x, y), h: (Math.atan2(y, x) * 180 / Math.PI + 360) % 360 };
}
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

/* ---------- 2 Itten-Kreis (angenähert in OKLCH) ---------- */
const ITTEN = [
  ["Gelb", 105], ["Gelborange", 80], ["Orange", 60], ["Rotorange", 42], ["Rot", 27], ["Rotviolett", 355],
  ["Violett", 310], ["Blauviolett", 285], ["Blau", 262], ["Blaugrün", 200], ["Grün", 150], ["Gelbgrün", 125],
];
const LICHTWERT = { 0: 9, 2: 8, 4: 6, 6: 3, 8: 4, 10: 6 }; // nach Itten/Goethe
const itten = (i) => { const [n, h] = ITTEN[i]; const c = cusp(h); return color(n, c.L, c.C, h); };

/* ---------- 3 Farbsysteme ---------- */
const range = (n) => Array.from({ length: n }, (_, i) => i);
const SYSTEME = {
  tonreihe: { params: ["k", "L", "C", "h"], build: (s) => {
    const colors = range(s.k).map((i) => color(`Ton ${i}`, s.L, s.C, s.h + i * 360 / s.k));
    return { colors, seq: range(s.k) };
  } },
  "an-sich": { params: ["satz"], build: (s) => {
    const idx = { primaer: [0, 4, 8], sekundaer: [0, 2, 4, 6, 8, 10], zwoelf: range(12) }[s.satz];
    return { colors: idx.map(itten), seq: range(idx.length) };
  } },
  "hell-dunkel": { params: ["hdbasis", "stufen"], build: (s) => {
    const unbunt = s.hdbasis === "unbunt";
    const h = unbunt ? 0 : ITTEN[+s.hdbasis][1];
    const colors = range(s.stufen).map((i) => {
      const L = 0.22 + i * 0.73 / (s.stufen - 1);
      return color(`Stufe ${i + 1}${unbunt ? "" : " · " + ITTEN[+s.hdbasis][0]}`, L, unbunt ? 0 : maxChroma(L, h) * 0.9, h);
    });
    return { colors, seq: range(s.stufen) };
  } },
  "kalt-warm": { params: ["weite", "L"], build: (s) => {
    const warm = range(2 * s.weite + 1).map((d) => (3 - s.weite + d + 12) % 12);
    const kalt = range(2 * s.weite + 1).map((d) => (9 - s.weite + d + 12) % 12);
    const all = [...warm, ...kalt];
    const C = Math.min(...all.map((i) => maxChroma(s.L, ITTEN[i][1]))) * 0.97;
    const colors = []; warm.forEach((w, i) => { colors.push(color(`${ITTEN[w][0]} (warm)`, s.L, C, ITTEN[w][1])); colors.push(color(`${ITTEN[kalt[i]][0]} (kalt)`, s.L, C, ITTEN[kalt[i]][1])); });
    return { colors, seq: range(colors.length) };
  } },
  komplementaer: { params: ["paar", "gegen", "misch"], build: (s) => {
    const A = itten(+s.paar), m = s.misch;
    let B;
    if (s.gegen === "oklch") { // wahrnehmungsbasiert: genau gegenüber, gleiche Helligkeit
      const h = (A.h + 180) % 360;
      B = color(`Gegenfarbe zu ${A.name} (OKLCH +180°)`, A.L, maxChroma(A.L, h), h);
    } else B = itten(+s.paar + 6);
    const mids = range(m).map((i) => { const c = mixLab(A, B, (i + 1) / (m + 1)); return color(`Mischung ${i + 1}`, c.L, c.C, c.h); });
    const colors = [A, ...mids, B];
    return { colors, seq: range(colors.length) };
  } },
  simultan: { params: ["basis", "anteil"], build: (s) => {
    const A = itten(+s.basis), grau = color("Grau (neutral)", A.L, 0, 0);
    return { colors: [A, grau], seq: [...Array(s.anteil - 1).fill(0), 1] };
  } },
  qualitaet: { params: ["basis", "stufen"], build: (s) => {
    const [n, h] = ITTEN[+s.basis], c = cusp(h);
    const colors = range(s.stufen).map((i) => color(`${n} · Sättigung ${Math.round(100 * (1 - i / (s.stufen - 1)))} %`, c.L, c.C * (1 - i / (s.stufen - 1)), h));
    return { colors, seq: range(s.stufen) };
  } },
  quantitaet: { params: ["qpaar", "verh"], build: (s) => {
    const [a, b] = s.qpaar.split("-").map(Number);
    const la = LICHTWERT[a], lb = LICHTWERT[b];
    let [x, y] = s.verh === "harmonisch" ? [lb, la] : s.verh === "umgekehrt" ? [la, lb] : [1, 1];
    const g = gcd(x, y); x /= g; y /= g;
    return { colors: [itten(a), itten(b)], seq: [...Array(x).fill(0), ...Array(y).fill(1)], ratio: [x, y], licht: [la, lb] };
  } },
};

/* ---------- 4 Bedienelemente ---------- */
const ittenOpts = ITTEN.map(([n], i) => [String(i), n]);
const CTL = {
  n:      { label: "Raster n", type: "range", min: 2, max: 24, step: 1, def: 12 },
  s:      { label: "Verschiebung s", type: "range", min: 0, max: 3, step: 1, def: 1 },
  gap:    { label: "Fuge", type: "range", min: 0, max: 0.3, step: 0.01, def: 0.06 },
  seed:   { label: "Seed", type: "range", min: 1, max: 999, step: 1, def: 7 },
  k:      { label: "Farben k", type: "range", min: 2, max: 12, step: 1, def: 4 },
  L:      { label: "Helligkeit L", type: "range", min: 0.3, max: 0.9, step: 0.01, def: 0.66 },
  C:      { label: "Buntheit C", type: "range", min: 0, max: 0.25, step: 0.005, def: 0.14 },
  h:      { label: "Startton h", type: "range", min: 0, max: 359, step: 1, def: 25 },
  satz:   { label: "Farbsatz", type: "select", def: "primaer", options: [["primaer", "Primärfarben (3)"], ["sekundaer", "Primär + Sekundär (6)"], ["zwoelf", "Zwölferkreis (12)"]] },
  hdbasis:{ label: "Farbe", text: "basis", type: "select", def: "unbunt", options: [["unbunt", "unbunt (Grau)"], ...ittenOpts] },
  basis:  { label: "Grundfarbe", type: "select", def: "4", options: ittenOpts },
  stufen: { label: "Stufen", type: "range", min: 2, max: 10, step: 1, def: 6 },
  weite:  { label: "Spannweite", type: "range", min: 0, max: 2, step: 1, def: 1 },
  paar:   { label: "Gegenfarbenpaar", type: "select", def: "4", options: range(6).map((i) => [String(i), `${ITTEN[i][0]} / ${ITTEN[i + 6][0]}`]) },
  gegen:  { label: "Gegenfarbe nach", type: "select", def: "itten", options: [["itten", "Itten-Kreis (Malfarben)"], ["oklch", "Wahrnehmung (OKLCH +180°)"]] },
  misch:  { label: "Mischstufen", type: "range", min: 0, max: 5, step: 1, def: 0 },
  anteil: { label: "Grau-Anteil 1 von …", type: "range", min: 2, max: 8, step: 1, def: 5 },
  qpaar:  { label: "Farbpaar", text: "paar", type: "select", def: "0-6", options: [["0-6", "Gelb / Violett"], ["2-8", "Orange / Blau"], ["4-10", "Rot / Grün"]] },
  verh:   { label: "Verhältnis", type: "select", def: "harmonisch", options: [["harmonisch", "harmonisch (nach Lichtwert)"], ["gleich", "gleich (1 : 1)"], ["umgekehrt", "umgekehrt (Ausdruck)"]] },
};
const SYS_LABEL = Object.fromEntries(Object.entries(T.systeme).map(([k, v]) => [k, v.titel]));

function text(key) {
  const t = T[CTL[key]?.text ?? key];
  if (!t || !t.kurz) console.error(`Erklärung fehlt in texte.js: „${key}“`);
  return t ?? { kurz: "", mehr: "" };
}
function infoButton(id, label) {
  return `<button type="button" class="info" aria-expanded="false" aria-controls="${id}" aria-label="Erklärung zu ${label}">?</button>`;
}
function control(key) {
  const c = CTL[key], t = text(key), id = `c-${key}`;
  const input = c.type === "range"
    ? `<input type="range" id="${id}" name="${key}" min="${c.min}" max="${c.max}" step="${c.step}">`
    : `<select id="${id}" name="${key}">${c.options.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>`;
  return `<div class="ctl" data-key="${key}">
    <div class="ctl-head"><label for="${id}">${c.label}</label>${c.type === "range" ? `<output for="${id}"></output>` : ""}${infoButton(id + "-more", c.label)}</div>
    ${input}<p class="hint">${t.kurz}</p><div class="more" id="${id}-more" hidden>${t.mehr ?? ""}</div></div>`;
}

function buildForm() {
  const tm = text("modus");
  $("g-anordnung").innerHTML = `<h2 id="h-anordnung">Anordnung</h2>
    <div class="ctl" data-key="modus"><div class="ctl-head"><span style="flex:1;font-weight:700">Verteilung</span>${infoButton("c-modus-more", "Verteilung")}</div>
      <div class="modes" role="radiogroup" aria-label="Verteilung">
        <label><input type="radio" name="modus" value="regel"><span>Regel</span></label>
        <label><input type="radio" name="modus" value="folie"><span>Negativfolie</span></label>
      </div><p class="hint">${tm.kurz}</p><div class="more" id="c-modus-more" hidden>${tm.mehr}</div></div>
    ${["n", "s", "gap", "seed"].map(control).join("")}`;
  const tf = text("farbsystem");
  $("g-farbe").innerHTML = `<h2 id="h-farbe">Farbsystem</h2>
    <div class="ctl" data-key="fs"><div class="ctl-head"><label for="c-fs">Farbwahl</label>${infoButton("c-fs-more", "Farbwahl")}</div>
      <select id="c-fs" name="fs">${Object.entries(SYS_LABEL).map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>
      <p class="hint">${tf.kurz}</p><div class="more" id="c-fs-more" hidden>${tf.mehr}</div></div>
    ${Object.keys(CTL).filter((k) => !["n", "s", "gap", "seed"].includes(k)).map(control).join("")}`;
}

/* ---------- Zustand ---------- */
const form = $("controls");
const DEF = { modus: "regel", fs: "tonreihe", ...Object.fromEntries(Object.entries(CTL).map(([k, c]) => [k, c.def])) };
function readState() {
  const st = { modus: form.modus.value, fs: form.fs.value };
  for (const [k, c] of Object.entries(CTL)) st[k] = c.type === "range" ? Number(form[k].value) : form[k].value;
  return st;
}
function writeState(st) {
  form.querySelector(`[name=modus][value=${st.modus === "folie" ? "folie" : "regel"}]`).checked = true;
  if (SYSTEME[st.fs]) form.fs.value = st.fs;
  for (const k of Object.keys(CTL)) if (st[k] !== undefined && st[k] !== "") form[k].value = st[k];
}

/* ---------- 5 Regel ---------- */
function mulberry32(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function position(st, m, i, j, s = st.s) { return ((i * s + j) % m + m) % m; }
function grid(st, pal, sOverride) {
  const m = pal.seq.length, rnd = mulberry32(st.seed), cells = [];
  for (let i = 0; i < st.n; i++) for (let j = 0; j < st.n; j++) {
    const p = st.modus === "folie" ? Math.floor(rnd() * m) : position(st, m, i, j, sOverride ?? st.s);
    cells.push({ i, j, p, c: pal.seq[p] });
  }
  return cells;
}

/* ---------- 6 Darstellung ---------- */
let sel = { i: 1, j: 2 };
const art = $("art");
function rects(st, pal, cells, numbers) {
  const cell = 1000 / st.n, g = cell * st.gap, r = (v) => +v.toFixed(2);
  return cells.map(({ i, j, p, c }) => {
    const col = pal.colors[c];
    const isSel = i === sel.i && j === sel.j && numbers !== null;
    let s = `<rect data-i="${i}" data-j="${j}" x="${r(j * cell + g / 2)}" y="${r(i * cell + g / 2)}" width="${r(cell - g)}" height="${r(cell - g)}" fill="${col.hex}"${isSel ? ` stroke="var(--lab-accent)" stroke-width="${r(Math.max(4, cell * 0.06))}"` : ""}/>`;
    if (numbers) s += `<text x="${r(j * cell + cell / 2)}" y="${r(i * cell + cell / 2)}" font-size="${r(cell * 0.38)}" text-anchor="middle" dominant-baseline="central" fill="${col.L > 0.62 ? "#121211" : "#f4f2ed"}" font-family="ui-monospace,monospace" pointer-events="none">${p}</text>`;
    return s;
  }).join("");
}

function render() {
  const st = readState(), sys = SYSTEME[st.fs], pal = sys.build(st), m = pal.seq.length;
  // Verschiebung an Länge der Folge anpassen
  form.s.max = Math.max(m - 1, 0);
  if (st.s > m - 1) { form.s.value = m - 1; st.s = m - 1; }
  sel.i = Math.min(sel.i, st.n - 1); sel.j = Math.min(sel.j, st.n - 1);
  // Nur relevante Einstellungen zeigen (progressive Offenlegung)
  const visible = new Set(["n", "s", "gap", ...sys.params, ...(st.modus === "folie" ? ["seed"] : [])]);
  form.querySelectorAll(".ctl[data-key]").forEach((el) => { const k = el.dataset.key; if (k in CTL) el.hidden = !visible.has(k); });
  form.querySelectorAll("output").forEach((o) => { o.textContent = form[o.htmlFor.value.replace("c-", "")]?.value ?? ""; });

  const cells = grid(st, pal);
  const numbers = $("erklaer").checked && st.n <= 16;
  art.innerHTML = `<desc id="art-desc">${SYS_LABEL[st.fs]}, Raster ${st.n} × ${st.n}, Farbfolge der Länge ${m}, ${st.modus === "folie" ? "zufällig verteilt" : "Verschiebung " + st.s}</desc>
    <rect width="1000" height="1000" fill="var(--lab-bg)"/>${rects(st, pal, cells, numbers)}`;
  $("caption").textContent = `${SYS_LABEL[st.fs]} · n = ${st.n} · Folge ${m} lang · ` + (st.modus === "folie" ? `Negativfolie, Seed ${st.seed}` : `s = ${st.s}`) +
    ($("erklaer").checked && st.n > 16 ? " · Zahlen erst ab n ≤ 16 sichtbar" : "");

  renderSystem(st, pal);
  renderDerivation(st, pal, cells);
  renderField(st, pal);
  renderMeasure(st, pal, cells);
  history.replaceState(null, "", "?" + new URLSearchParams(Object.fromEntries(
    Object.entries(st).filter(([k, v]) => k === "modus" || k === "fs" || k === "n" || k === "s" || k === "gap" || (st.modus === "folie" && k === "seed") || sys.params.includes(k)))));
}

function swatch(c) { return `<i style="background:${c.hex}"></i>`; }
function values(c) { return `OKLCH ${fmt(c.L)} · ${fmt(c.C, 3)} · ${Math.round(c.h)}° → ${c.hex}${c.reduced ? " (Buntheit an sRGB angepasst)" : ""}`; }

function renderSystem(st, pal) {
  const t = T.systeme[st.fs];
  const seqText = pal.seq.map((x) => pal.colors[x].name).join(" · ");
  $("sys").innerHTML = `<h2>${t.titel}</h2><p class="lead">${t.kurz}</p><p>${t.mehr}</p>
    <h3 class="hint" style="margin-top:var(--lab-space-2)">Farben dieser Einstellung</h3>
    <ul class="swatches">${pal.colors.map((c, i) => `<li>${swatch(c)}<span>${i} · ${c.name}<small>${values(c)}</small></span></li>`).join("")}</ul>
    <details><summary>Farbfolge (${pal.seq.length} Glieder)</summary><p>${seqText}</p>
      <p>Die Anordnungsregel verteilt diese Folge. Position p im Raster bekommt das p-te Glied.</p></details>
    <details><summary>Wie die Studie es umsetzt</summary><p>${t.wie}</p></details>
    <details><summary>Quelle und Grenzen</summary><p>${t.quelle}</p></details>`;
}

function renderDerivation(st, pal, cells) {
  const m = pal.seq.length, { i, j } = sel;
  const cell = cells.find((c) => c.i === i && c.j === j), col = pal.colors[cell.c];
  const steps = [`Feld in Zeile <code>i = ${i}</code>, Spalte <code>j = ${j}</code> (gezählt ab 0).`];
  if (st.modus === "folie") steps.push(`Negativfolie: Position per Zufall (Seed ${st.seed}) → <code>p = ${cell.p}</code>. Keine Regel — das ist der Punkt.`);
  else steps.push(`Regel: <code>p = (i · s + j) mod ${m} = (${i} · ${st.s} + ${j}) mod ${m} = ${i * st.s + j} mod ${m} = ${cell.p}</code>`);
  steps.push(`Farbfolge an Position ${cell.p} → <span class="chip" style="background:${col.hex}"></span><b>${col.name}</b>`);
  steps.push(`Farbwert: <code>${values(col)}</code>`);
  if (col.C === 0 && st.fs === "simultan") steps.push(`Dieses Feld ist neutral grau (Buntheit 0). Erscheint es Ihnen farbig, erzeugt das Ihr Auge — Simultankontrast.`);
  $("derive-steps").innerHTML = steps.map((s) => `<li>${s}</li>`).join("");
}

function renderField(st, pal) {
  const m = pal.seq.length, field = $("field");
  field.innerHTML = "";
  for (let s = 0; s < Math.min(m, 12); s++) {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-pressed", String(st.modus === "regel" && s === st.s));
    b.setAttribute("aria-label", `Verschiebung ${s} übernehmen`);
    b.innerHTML = `<svg viewBox="0 0 1000 1000" aria-hidden="true">${rects(st, pal, grid({ ...st, modus: "regel" }, pal, s), null)}</svg><span>s = ${s}</span>`;
    b.onclick = () => { form.querySelector("[name=modus][value=regel]").checked = true; form.s.value = s; render(); };
    field.append(b);
  }
  if (m > 12) field.insertAdjacentHTML("beforeend", `<p class="hint">Erste 12 von ${m} Verschiebungen.</p>`);
}

function renderMeasure(st, pal, cells) {
  const total = cells.length, m = pal.seq.length;
  const counts = pal.colors.map((_, c) => cells.filter((x) => x.c === c).length);
  const soll = pal.colors.map((_, c) => pal.seq.filter((x) => x === c).length / m);
  const max = Math.max(...counts, 1);
  $("bars").innerHTML = counts.map((n, c) => `<div class="bar"><span title="${pal.colors[c].name}">${pal.colors[c].name}</span><i style="width:${(n / max) * 100}%;background:${pal.colors[c].hex}"></i><span>${n} / ${Math.round(soll[c] * total)}</span></div>`).join("");
  const exact = counts.every((n, c) => n === soll[c] * total);
  const ratio = pal.ratio ? ` Soll-Verhältnis ${pal.colors[0].name} : ${pal.colors[1].name} = ${pal.ratio[0]} : ${pal.ratio[1]} (Lichtwerte ${pal.licht[0]} und ${pal.licht[1]}).` : "";
  $("verdict").textContent = (exact
    ? `Soll erreicht: Jede Farbe belegt genau ihren Anteil (gemessen / Soll)${st.modus === "folie" ? " — hier zufällig, nicht durch eine Regel" : ""}.`
    : `Soll nicht exakt erreicht${st.modus === "regel" ? ` — die Folge ist ${m} lang, n = ${st.n} ist kein Vielfaches davon` : " — Zufall verteilt ungleich"}.`) + ratio;
}

/* ---------- Ereignisse ---------- */
function toggleInfo(btn, open) {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  const o = open ?? btn.getAttribute("aria-expanded") !== "true";
  btn.setAttribute("aria-expanded", String(o)); panel.hidden = !o;
}
document.addEventListener("click", (e) => { const b = e.target.closest("button.info"); if (b) toggleInfo(b); });
let allOpen = false;
$("alle").onclick = () => {
  allOpen = !allOpen;
  document.querySelectorAll("button.info").forEach((b) => toggleInfo(b, allOpen));
  document.querySelectorAll("details").forEach((d) => (d.open = allOpen));
  $("alle").textContent = allOpen ? "Alle Erklärungen schließen" : "Alle Erklärungen öffnen";
};
art.addEventListener("click", (e) => { const r = e.target.closest("rect[data-i]"); if (r) { sel = { i: +r.dataset.i, j: +r.dataset.j }; render(); } });
$("art-wrap").addEventListener("keydown", (e) => {
  const n = readState().n, d = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[e.key];
  if (!d) return; e.preventDefault();
  sel = { i: Math.min(n - 1, Math.max(0, sel.i + d[0])), j: Math.min(n - 1, Math.max(0, sel.j + d[1])) }; render();
});
form.addEventListener("input", render);
form.addEventListener("change", render);
$("erklaer").addEventListener("change", render);
$("export").onclick = () => {
  const st = readState(), pal = SYSTEME[st.fs].build(st);
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--lab-color-paper").trim() || "#f4f2ed";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000"><rect width="1000" height="1000" fill="${bg}"/>${rects(st, pal, grid(st, pal), null)}</svg>`;
  const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" })), download: `reihe-${st.fs}-n${st.n}-s${st.s}-${st.modus}.svg` });
  a.click(); URL.revokeObjectURL(a.href);
};

/* ---------- Start ---------- */
$("intro").textContent = T.studie.kurz;
$("intro-more").textContent = T.studie.mehr;
for (const [id, key] of [["erklaer", "erklaermodus"], ["zelle", "zelle"], ["feld", "feld"], ["mess", "messung"]]) {
  const t = text(key);
  const k = document.getElementById(`${id}-kurz`); if (k) k.textContent = t.kurz;
  const mo = document.getElementById(`${id}-more`); if (mo) mo.textContent = t.mehr ?? "";
}
buildForm();
const q = Object.fromEntries(new URLSearchParams(location.search));
writeState({ ...DEF, ...q });
render();
})();
