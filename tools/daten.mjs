// Datensätze je Thema (daten/<thema>.json): Aussagen und Fragen an den Eigentümer.
// Schema: daten/schema.md. Eingeführt am 06.11.2026 (Pilot, Entscheidung des Eigentümers im Chat).
// Ohne Abhängigkeiten; wird von build.mjs und daten-test.mjs benutzt.

export const STATUS = ["belegt", "abgeleitet", "nicht belegt"];
const DATUM = /^\d{4}-\d{2}-\d{2}$/;
const THEMA = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const FELDER = {
  aussage: { pflicht: ["id", "aussage", "status", "seit"], frei: ["quellen", "abgeloest_durch", "herleitung", "notiz"] },
  frage: { pflicht: ["id", "frage", "gestellt"], frei: ["antwort", "beantwortet", "notiz"] },
};

// dateien: [{ name: "arbeitsweise.json", text }]; kontext: { korpus: Set, themen: Set, dateiDa: (pfad) => bool }
// Rückgabe: { errors, warnings, daten: Map<thema, {aussagen, fragen}> }
export function pruefeDaten(dateien, { korpus, themen, dateiDa }) {
  const errors = [], warnings = [], daten = new Map(), ids = new Map();
  for (const { name, text } of dateien) {
    const thema = name.replace(/\.json$/, "");
    const at0 = `daten/${name}`;
    let d;
    try { d = JSON.parse(text); } catch (e) { errors.push(`${at0}: kein gültiges JSON (${e.message})`); continue; }
    if (!THEMA.test(thema)) errors.push(`${at0}: Dateiname nur Kleinbuchstaben, Ziffern, Bindestrich`);
    if (d.thema !== thema) errors.push(`${at0}: „thema“ muss „${thema}“ sein (wie der Dateiname)`);
    if (!themen.has(thema)) errors.push(`${at0}: kein Merkzettel anschluss/${thema}.md`);
    for (const k of Object.keys(d)) if (!["thema", "aussagen", "fragen"].includes(k)) warnings.push(`${at0}: unbekanntes Feld „${k}“`);
    const aussagen = Array.isArray(d.aussagen) ? d.aussagen : [], fragen = Array.isArray(d.fragen) ? d.fragen : [];
    if (d.aussagen !== undefined && !Array.isArray(d.aussagen)) errors.push(`${at0}: „aussagen“ muss eine Liste sein`);
    if (d.fragen !== undefined && !Array.isArray(d.fragen)) errors.push(`${at0}: „fragen“ muss eine Liste sein`);

    const pruefeGemeinsam = (art, x, i, kuerzel) => {
      const at = `${at0} ${art} #${i + 1}${x?.id ? ` (${x.id})` : ""}`;
      if (!x || typeof x !== "object") { errors.push(`${at}: kein Objekt`); return null; }
      for (const k of FELDER[art].pflicht) if (x[k] === undefined || x[k] === null || x[k] === "") errors.push(`${at}: Feld „${k}“ fehlt`);
      for (const k of Object.keys(x)) if (![...FELDER[art].pflicht, ...FELDER[art].frei].includes(k)) warnings.push(`${at}: unbekanntes Feld „${k}“`);
      if (x.id) {
        if (!new RegExp(`^${thema}-${kuerzel}\\d{2,}$`).test(x.id)) errors.push(`${at}: id als „${thema}-${kuerzel}01“, „${thema}-${kuerzel}02“ …`);
        if (ids.has(x.id)) errors.push(`${at}: id doppelt`);
        ids.set(x.id, art);
      }
      return at;
    };

    for (const [i, a] of aussagen.entries()) {
      const at = pruefeGemeinsam("aussage", a, i, "a");
      if (!at) continue;
      if (a.status && !STATUS.includes(a.status)) errors.push(`${at}: status muss ${STATUS.join(" | ")} sein`);
      if (a.seit && !DATUM.test(a.seit)) errors.push(`${at}: seit als JJJJ-MM-TT`);
      if (a.quellen !== undefined && !Array.isArray(a.quellen)) errors.push(`${at}: quellen muss eine Liste sein`);
      const quellen = Array.isArray(a.quellen) ? a.quellen : [];
      if (a.status === "belegt" && !quellen.length) errors.push(`${at}: „belegt“ braucht mindestens eine Quelle mit Stelle`);
      for (const q of quellen) {
        if (!q || typeof q !== "object") { errors.push(`${at}: Quelle ist kein Objekt`); continue; }
        if (!q.stelle) errors.push(`${at}: jede Quelle braucht „stelle“ (Seite, Abschnitt oder Zitatort)`);
        if (q.id && q.datei) errors.push(`${at}: Quelle hat entweder „id“ (Korpus) oder „datei“ (Repo), nicht beides`);
        else if (q.id) { if (!korpus.has(q.id)) errors.push(`${at}: Quelle „${q.id}“ nicht im Korpus`); }
        else if (q.datei) { if (!dateiDa(q.datei)) errors.push(`${at}: Datei „${q.datei}“ fehlt`); }
        else errors.push(`${at}: Quelle braucht „id“ (Korpus) oder „datei“ (Repo)`);
      }
      if (a.herleitung && !dateiDa(a.herleitung)) errors.push(`${at}: Herleitung „${a.herleitung}“ fehlt`);
    }
    for (const [i, f] of fragen.entries()) {
      const at = pruefeGemeinsam("frage", f, i, "f");
      if (!at) continue;
      if (f.gestellt && !DATUM.test(f.gestellt)) errors.push(`${at}: gestellt als JJJJ-MM-TT`);
      if (f.beantwortet && !DATUM.test(f.beantwortet)) errors.push(`${at}: beantwortet als JJJJ-MM-TT`);
      if (f.antwort && !f.beantwortet) errors.push(`${at}: eine Antwort braucht „beantwortet“ (Datum)`);
      if (f.beantwortet && !f.antwort) errors.push(`${at}: „beantwortet“ ohne Antwort im Wortlaut`);
    }
    daten.set(thema, { aussagen, fragen });
  }
  // Ablösungen: Ziel muss eine Aussage sein, nicht die Aussage selbst
  for (const [thema, { aussagen }] of daten) for (const a of aussagen) {
    if (!a?.abgeloest_durch) continue;
    if (a.abgeloest_durch === a.id) errors.push(`daten/${thema}.json (${a.id}): kann sich nicht selbst ablösen`);
    else if (ids.get(a.abgeloest_durch) !== "aussage") errors.push(`daten/${thema}.json (${a.id}): abgeloest_durch „${a.abgeloest_durch}“ ist keine Aussage`);
  }
  return { errors, warnings, daten, ids };
}

// Verweise [a:id] in Markdown prüfen
export function pruefeVerweise(rel, text, ids) {
  const errors = [];
  for (const m of text.matchAll(/\[a:([a-z0-9-]+)\]/g)) if (ids.get(m[1]) !== "aussage") errors.push(`${rel}: Verweis [a:${m[1]}] — keine solche Aussage in daten/`);
  return errors;
}
