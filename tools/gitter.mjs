// Gemeinsame, nebenwirkungsfreie Prüfung der Standdaten.
export const MAX_MERKZETTEL = 3000;
export const MAX_STAND = 4000;
export function leseKopf(text, datei) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) throw new Error(`${datei}: Kopf fehlt`);
  const fields = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*?)\s*$/);
    if (!kv || kv[1] in fields) throw new Error(`${datei}: ungültige oder doppelte Kopfzeile: ${line}`);
    fields[kv[1]] = kv[2];
  }
  for (const k of ['thema', 'stand', 'naechster_schritt', 'offen'])
    if (!fields[k]) throw new Error(`${datei}: ${k} fehlt`);
  if (!/^\[(?:\s*\d+\s*(?:,\s*\d+\s*)*)?\]$/.test(fields.offen)) throw new Error(`${datei}: offen muss eine Liste von Issue-Nummern sein`);
  const offen = fields.offen.slice(1, -1).split(',').map(x => x.trim()).filter(Boolean).map(Number);
  if (offen.some(n => !Number.isSafeInteger(n) || n < 1)) throw new Error(`${datei}: ungültige Issue-Nummer`);
  return { ...fields, offen, body: text.slice(m[0].length) };
}
const cell = s => s.replace(/\|/g, '\\|');
export function themenBlock(themen) {
  return ['<!-- themen:start -->', '## Themen', '', '| Thema | Stand | Nächster Schritt | Merkzettel |', '|---|---|---|---|', ...themen.map(({datei, thema, stand, naechster_schritt}) => `| ${cell(thema)} | ${cell(stand)} | ${cell(naechster_schritt)} | [Merkzettel](anschluss/${encodeURIComponent(datei)}) |`), '<!-- themen:end -->'].join('\n');
}
export function aktualisiereStand(stand, themen) {
  const marker = /<!-- themen:start -->[\s\S]*?<!-- themen:end -->/g;
  if ([...stand.matchAll(marker)].length !== 1 || (stand.match(/<!-- themen:(?:start|end) -->/g) || []).length !== 2) throw new Error('stand.md: Themen-Marker fehlen oder sind mehrfach vorhanden');
  return stand.replace(marker, themenBlock(themen));
}
export function pruefeLaenge(stand, themen, maxStand = MAX_STAND, maxMerkzettel = MAX_MERKZETTEL) {
  const errors = [];
  if ([...stand].length > maxStand) errors.push(`stand.md: mehr als ${maxStand} Zeichen`);
  for (const t of themen) if ([...t.body].length > maxMerkzettel) errors.push(`anschluss/${t.datei}: mehr als ${maxMerkzettel} Zeichen ohne Kopf`);
  return errors;
}
export function pruefeGitHub(themen, issues, isPR, dateien, labels) {
  const errors = [];
  for (const n of new Set(themen.flatMap(t => t.offen))) {
    if (!(n in issues)) errors.push(`Issue #${n}: Status fehlt`);
    else if (issues[n] !== 'open') errors.push(`Issue #${n} ist ${issues[n]}`);
  }
  if (isPR && !dateien.includes('stand-verlauf.md') && !labels.includes('ohne-verlauf')) errors.push('Pull Request ändert stand-verlauf.md nicht und trägt kein Label ohne-verlauf');
  return errors;
}
