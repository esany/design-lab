// Farbe als Bedeutung (Eigentümer, 14.11.2026; Entwurf research/2026-11-zielbild-bausteine/entwurf-ein-zielbild.md, Abschnitt 4).
// Jede Farbrolle trägt im ganzen Labor genau eine Bedeutung. Diese Prüfung liest die Stilangaben der
// Systemseiten und meldet, wenn eine Rolle an einer Stelle benutzt wird, deren Selektor eine andere
// Bedeutung hat. Grenze: CSS sagt nicht, ob der Eigentümer wirklich dran ist; das entscheiden die
// Daten (tools/zielbild.mjs, Funktion dran). Die gerenderte Seite muss trotzdem angesehen werden.

/** Rolle → woran ein Selektor die Bedeutung erkennen lässt. */
export const ROLLEN = {
  signal: { bedeutung: "du bist dran", selektor: /dran/ },
  bestaetigt: { bedeutung: "von dir bestätigt", selektor: /bestaetigt|passt|fest/ },
  offen: { bedeutung: "Vorschlag oder Hypothese", selektor: /vorschlag|ableitung|offen/ },
};

/** Ausdrückliche Ausnahmen mit Grund. Jede ist eine offene Frage an den Eigentümer, keine Regel. */
export const AUSNAHMEN = [
  { datei: "assets/lab.css", selektor: ".mark", rolle: "signal", grund: "Marke im Kopf der Startseite; Frage an den Eigentümer vom 14.11." },
];

/** Farbwerte der Rollen dürfen nicht als Zahl in Stilangaben stehen, nur über die Rolle. */
export const ROHWERTE = ["#d92d17", "#2f6b3a", "#7fbf8a", "#8a5a00", "#e0b060"];

/** Prüft einen Stiltext. Gibt Fehler in Alltagssprache zurück. */
export function pruefeFarbrollen(css, datei) {
  const fehler = [];
  const ohneKommentar = css.replace(/\/\*[\s\S]*?\*\//g, "");
  for (const m of ohneKommentar.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selektor = m[1].trim().replace(/\s+/g, " ");
    const angaben = m[2];
    if (/var\(--(lab-)?accent\)/.test(angaben)) fehler.push(`${datei}: „${selektor}“ nutzt die alte Akzentfarbe; eine Rolle wählen (signal, bestaetigt, offen) oder Grundfarbe`);
    for (const [rolle, r] of Object.entries(ROLLEN)) {
      if (!new RegExp(`var\\(--(lab-)?${rolle}\\)`).test(angaben)) continue;
      if (r.selektor.test(selektor)) continue;
      if (AUSNAHMEN.some((a) => a.datei === datei && a.selektor === selektor && a.rolle === rolle)) continue;
      fehler.push(`${datei}: „${selektor}“ nutzt die Farbrolle „${rolle}“ (${r.bedeutung}), der Selektor sagt das aber nicht`);
    }
    for (const hex of ROHWERTE) if (angaben.toLowerCase().includes(hex)) fehler.push(`${datei}: „${selektor}“ setzt ${hex} direkt; nur über die Farbrolle`);
  }
  return fehler;
}

/** Stilangaben aus einer HTML-Datei (alle <style>-Blöcke). */
export const stileAusHtml = (html) => [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join("\n");
