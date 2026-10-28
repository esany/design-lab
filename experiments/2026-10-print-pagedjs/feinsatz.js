/* ============================================================
   Feinsatz — Satzregeln für deutschen Text, unabhängig von der Schrift.

   Quellen: Duden (Satz- und Korrekturregeln), DIN 5008, Forssman/de Jong
   „Detailtypografie“. Regeln, die den Inhalt ändern würden, stehen hier
   NICHT — die entscheidet der Mensch.

   window.feinsatz.anwenden(wurzel)  wendet die Regeln auf alle Textknoten an
   window.feinsatz.protokoll         was wie oft geändert wurde
   ============================================================ */
(function () {
  const protokoll = {};
  const zaehle = (name, n = 1) => { protokoll[name] = (protokoll[name] || 0) + n; };

  // Regeln auf Zeichenebene (alle Zeichen sind in den üblichen Schriften enthalten)
  const zeichenregeln = [
    // Gedankenstrich nie am Zeilenanfang: geschütztes Leerzeichen davor
    ["Gedankenstrich gebunden", /(\S) ([–—]) /g, "$1 $2 "],
    // Ordnungszahl + Wort: nicht trennen („13. Jahrhundert“, „2. Weltkrieg“)
    ["Ordnungszahl gebunden", /(^|[^\d])(\d{1,2}\.) (?=\p{L})/gu, "$1$2 "],
    // Zeitspanne zwischen Jahreszahlen: Bis-Strich ohne Leerzeichen
    ["Bis-Strich", /\b(\d{4}) ?[-–] ?(\d{4})\b/g, "$1–$2"],
    // Auslassungspunkte als ein Zeichen
    ["Auslassungszeichen", /\.\.\./g, "…"],
    // doppelte Leerzeichen
    ["doppelte Leerzeichen", /(\S) {2,}(?=\S)/g, "$1 "],
  ];

  // Zahl + Einheit: schmaler, geschützter Abstand. Viele Schriften haben das
  // Zeichen U+202F nicht — deshalb als Element mit fester Breite (wie InDesign).
  const EINHEIT = /(\d)[  ](mm|cm|km|m|kg|g|t|ha|l|%|€|°C)(?![\p{L}])/gu;

  function textknoten(wurzel) {
    const liste = [];
    const gang = document.createTreeWalker(wurzel, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement && n.parentElement.closest("script, style, svg, .nowrap, [data-roh]")
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    let n; while ((n = gang.nextNode())) liste.push(n);
    return liste;
  }

  function anwenden(wurzel) {
    for (const k of textknoten(wurzel)) {
      let t = k.data;
      for (const [name, muster, ersatz] of zeichenregeln) {
        const neu = t.replace(muster, ersatz);
        if (neu !== t) { zaehle(name, (t.match(muster) || []).length); t = neu; }
      }
      k.data = t;
      // Zahl + Einheit
      EINHEIT.lastIndex = 0;
      if (EINHEIT.test(t)) {
        EINHEIT.lastIndex = 0;
        const frag = document.createDocumentFragment();
        let pos = 0, m;
        while ((m = EINHEIT.exec(t))) {
          frag.append(t.slice(pos, m.index + 1));
          const paar = document.createElement("span");
          paar.className = "nowrap";
          const raum = document.createElement("span");
          raum.className = "spatium";
          paar.append(raum, m[2]);
          frag.append(paar);
          pos = m.index + m[0].length;
          zaehle("Zahl und Einheit gebunden");
        }
        frag.append(t.slice(pos));
        k.replaceWith(frag);
      }
    }
  }

  window.feinsatz = { anwenden, protokoll };
})();
