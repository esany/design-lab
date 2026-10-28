/* ============================================================
   Textfluss und Grundlinienraster — was InDesign „verkettete
   Textrahmen“ nennt, als kleines Skript für Paged.js.

   Rahmen:  data-fluss="name"     welcher Text hineinfließt (<template id="name">)
            data-reihe="1"        Reihenfolge der Rahmen
            data-grundlinie="18.3" erste Grundlinie in mm ab Oberkante Endformat
            data-letzte="135.3"   tiefste erlaubte Grundlinie in mm
   Absatz:  data-umbruch          beginnt im nächsten Rahmen (wie „Nächste Spalte“)

   Satzregeln beim Umbruch (wie die Umbruchoptionen in InDesign):
   - kein Hurenkind: letzte Absatzzeile allein oben im nächsten Rahmen
   - kein Schusterjunge: erste Absatzzeile allein unten im Rahmen
   - höchstens 3 Trennungen hintereinander je Spalte
   Ergebnis in document.body.dataset.satzbericht
   ============================================================ */
(function () {
  const MM = 96 / 25.4; // px pro mm

  function px2mm(v) { return v / MM; }

  // Abstand Zeilenoberkante → Grundlinie der ersten Zeile, in px
  function grundlinienAbstand(rahmen) {
    const erstes = rahmen.querySelector("p, h2, div") || rahmen;
    const sonde = document.createElement("span");
    sonde.style.cssText = "display:inline-block;width:0;height:0;vertical-align:baseline";
    erstes.insertBefore(sonde, erstes.firstChild);
    const abstand = sonde.getBoundingClientRect().top - rahmen.getBoundingClientRect().top;
    sonde.remove();
    return abstand;
  }

  // Rahmen so setzen, dass die erste Grundlinie exakt sitzt
  function ausrichten(rahmen) {
    const gl = parseFloat(rahmen.dataset.grundlinie);
    const letzte = parseFloat(rahmen.dataset.letzte);
    const zeile = parseFloat(getComputedStyle(rahmen).lineHeight);
    rahmen.style.top = "0mm";
    const ab = px2mm(grundlinienAbstand(rahmen));
    rahmen.style.top = (gl - ab) + "mm";
    rahmen.style.height = (letzte - gl + px2mm(zeile) + 0.3) + "mm"; // 0,3 mm Toleranz gegen Rundung
  }

  // Anfang jeder Zeile eines Elements: [{knoten, i, top}]
  function zeilenAnfaenge(el) {
    const gang = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const r = document.createRange();
    const liste = []; let knoten, letzte = null;
    while ((knoten = gang.nextNode())) {
      for (let i = 0; i < knoten.length; i++) {
        r.setStart(knoten, i); r.setEnd(knoten, i + 1);
        const rect = r.getClientRects()[0];
        if (!rect || rect.width === 0) continue;
        if (letzte === null || rect.top > letzte + 2) liste.push({ knoten, i, top: rect.top });
        letzte = rect.top;
      }
    }
    return liste;
  }

  const bericht = { hurenkinder: 0, schusterjungen: 0, trennsperren: [] };
  const sperre = new Set();  // Wörter, die nicht mehr getrennt werden dürfen

  function passt(rahmen) { return rahmen.scrollHeight <= rahmen.clientHeight + 0.5; }

  const texte = {}; // Textvorlagen, gesichert bevor Paged.js umbricht

  function fliessen(name) {
    const vorlage = texte[name];
    if (!vorlage) { console.error(`Text „${name}“ fehlt`); return; }
    const kopie = vorlage.cloneNode(true);
    if (sperre.size) {
      const g = document.createTreeWalker(kopie, NodeFilter.SHOW_TEXT); let n;
      while ((n = g.nextNode())) n.data = n.data.replace(/[\p{L}\u00AD]+/gu,
        w => sperre.has(w.replace(/\u00AD/g, "")) ? w.replace(/\u00AD/g, "") : w);
    }
    const quelle = [...kopie.children];
    const rahmen = [...document.querySelectorAll(`[data-fluss="${name}"]`)]
      .sort((a, b) => a.dataset.reihe - b.dataset.reihe);

    for (const r of rahmen) { r.innerHTML = '<p class="leer">&nbsp;</p>'; ausrichten(r); r.innerHTML = ""; }

    let rest = quelle;
    for (const r of rahmen) {
      while (rest.length) {
        const absatz = rest[0];
        if (absatz.hasAttribute("data-umbruch") && r.childElementCount && !absatz.dataset.gesetzt) {
          absatz.dataset.gesetzt = "1"; break;           // nächster Rahmen
        }
        absatz.dataset.gesetzt = "1";
        r.appendChild(absatz); rest.shift();
        if (passt(r)) continue;

        // geteilte Absätze werden ohne „pretty“ umbrochen, damit die
        // letzte Zeile im Rahmen voll bleibt
        absatz.classList.add("geteilt");
        const unten = r.getBoundingClientRect().bottom;
        const zeile = parseFloat(getComputedStyle(absatz).lineHeight);
        const anfaenge = zeilenAnfaenge(absatz);
        let idx = anfaenge.findIndex(z => z.top > unten - zeile / 2);
        if (idx > 0) {
          const unterhalb = anfaenge.length - idx;
          if (idx === 1 && !absatz.classList.contains("fortsetzung") && r.childElementCount > 1
              && !absatz.classList.contains("leer")) {
            idx = 0; bericht.schusterjungen++;                  // ganze Zeile nach vorn
          } else if (unterhalb === 1 && idx >= 2) {
            idx -= 1; bericht.hurenkinder++;                    // eine Zeile mitnehmen
          }
        }
        const t = idx > 0 ? { knoten: anfaenge[idx].knoten, i: anfaenge[idx].i } : null;
        if (!t || (t.knoten === absatz.firstChild && t.i === 0)) {  // passt gar nicht
          absatz.classList.remove("geteilt");
          absatz.remove(); rest.unshift(absatz); break;
        }
        // Bei „hyphens: manual“ trennt der Browser im Wort nur an weichen
        // Trennstellen (&shy;). Landet die gemessene Stelle mitten im Wort,
        // zurück zur nächsten Trennstelle davor.
        if (t.i > 0 && /\p{L}/u.test(t.knoten.data[t.i - 1])) {
          let j = t.i - 1;
          while (j >= 0 && /[\p{L}\u00AD]/u.test(t.knoten.data[j]) && t.knoten.data[j] !== "\u00AD") j--;
          if (j >= 0 && t.knoten.data[j] === "\u00AD") t.i = j + 1;
        }
        const bereich = document.createRange();
        bereich.setStart(t.knoten, t.i);
        bereich.setEndAfter(absatz.lastChild);
        const vorher = t.knoten.data[t.i - 1] || "";
        const jetzt = t.knoten.data[t.i] || "";
        const schwanz = bereich.extractContents();
        const neu = absatz.cloneNode(false);
        neu.removeAttribute("data-umbruch");
        neu.classList.add("fortsetzung");
        neu.classList.remove("geteilt");
        neu.appendChild(schwanz);
        // getrenntes Wort: Trennstrich setzen
        if (/\p{L}/u.test(jetzt) && (/\p{L}/u.test(vorher) || vorher === "­")) {
          absatz.appendChild(document.createTextNode("-"));
        }
        absatz.classList.add("geteilt");
        // führende Leerzeichen der Fortsetzung entfernen
        const erster = document.createTreeWalker(neu, NodeFilter.SHOW_TEXT).nextNode();
        if (erster) erster.data = erster.data.replace(/^[\s­]+/, "");
        rest.unshift(neu);
        break;
      }
    }
    if (rest.length) {
      const zeichen = rest.reduce((n, a) => n + a.textContent.length, 0);
      const msg = `Übersatz in „${name}“: ${zeichen} Zeichen passen nicht in die Rahmen (ab „${rest[0].textContent.trim().slice(0, 30)}…“).`;
      console.error(msg);
      document.body.dataset.uebersatz = msg;
    }
  }

  // Trennungen je Spalte zählen; bei mehr als 3 in Folge ein Wort sperren
  function trennfolgen(name, hoechstens = 3) {
    const neu = [];
    for (const r of document.querySelectorAll(`[data-fluss="${name}"]`)) {
      const z = zeilenAnfaenge(r);
      let folge = [];
      for (let n = 1; n <= z.length; n++) {
        let getrennt = false, wort = null;
        if (n < z.length) {
          const { knoten, i } = z[n];
          const t = knoten.data;
          const vor = t.slice(0, i).replace(/\u00AD/g, "").slice(-1);
          const nach = t[i] || "";
          if (/\p{L}/u.test(vor) && /\p{L}/u.test(nach)) {
            getrennt = true;
            const links = (t.slice(0, i).match(/[\p{L}\u00AD]*$/u) || [""])[0];
            const rechts = (t.slice(i).match(/^[\p{L}\u00AD]*/u) || [""])[0];
            wort = (links + rechts).replace(/\u00AD/g, "");
          }
        } else {
          getrennt = /-$/.test(r.textContent.trimEnd());   // Trennung am Rahmenende
        }
        if (getrennt) folge.push(wort);
        else folge = [];
        if (folge.length > hoechstens) {
          // kurze Wörter zuerst sperren: lange ungetrennte Wörter reißen Löcher
          const kandidat = folge.filter(w => w && !sperre.has(w) && w.length < 14)
            .sort((a, b) => a.length - b.length)[0];
          if (kandidat) { neu.push(kandidat); folge = []; }
        }
      }
    }
    return neu;
  }

  class Textfluss extends Paged.Handler {
    beforeParsed(inhalt) {
      // Silbentrennung nach deutschen Trennmustern (Paket „hyphen“), statt der
      // Browser-Trennung, die je nach System falsch oder gar nicht trennt
      if (window.feinsatz) {
        window.feinsatz.anwenden(inhalt);
        inhalt.querySelectorAll("template").forEach(t => window.feinsatz.anwenden(t.content));
      }
      if (window.silbentrennung) {
        const knoten = []; let k;
        inhalt.querySelectorAll(".rahmen").forEach(r => {
          const g = document.createTreeWalker(r, NodeFilter.SHOW_TEXT);
          while ((k = g.nextNode())) knoten.push(k);
        });
        inhalt.querySelectorAll("template").forEach(t => {
          const g = document.createTreeWalker(t.content, NodeFilter.SHOW_TEXT);
          while ((k = g.nextNode())) knoten.push(k);
        });
        // Mailadressen und Webadressen nie trennen
        knoten.forEach(n => { n.data = n.data.replace(/\S+/g, w => /[@\/]|www\./.test(w) ? w : window.silbentrennung(w).replace(/^([^\u00AD]{1,2})\u00AD/, '$1').replace(/\u00AD([^\u00AD]{1,2})$/, '$1')); });
      }
      // Letztes Wort eines Absatzes nie trennen: keine Silbe allein in der Ausgangszeile
      const absaetze = [...inhalt.querySelectorAll(".rahmen p")];
      inhalt.querySelectorAll("template").forEach(t => absaetze.push(...t.content.querySelectorAll("p")));
      for (const p of absaetze) {
        const g = document.createTreeWalker(p, NodeFilter.SHOW_TEXT); let n, letzter = null;
        while ((n = g.nextNode())) if (/\p{L}/u.test(n.data)) letzter = n;
        if (letzter) letzter.data = letzter.data.replace(/[\p{L}\u00AD]+(?=[^\p{L}\u00AD]*$)/u, w => w.replace(/\u00AD/g, ""));
      }
      inhalt.querySelectorAll("template").forEach(t => {
        texte[t.id] = (t.content && t.content.children.length) ? t.content : t;
        t.remove();
      });
    }
    afterRendered() {
      document.querySelectorAll(".rahmen:not([data-fluss])").forEach(ausrichten);
      const namen = new Set([...document.querySelectorAll("[data-fluss]")].map(r => r.dataset.fluss));
      for (const name of namen) {
        for (let runde = 0; runde < 15; runde++) {
          bericht.hurenkinder = 0; bericht.schusterjungen = 0;
          delete document.body.dataset.uebersatz;
          fliessen(name);
          const neu = trennfolgen(name);
          if (!neu.length) break;
          neu.forEach(w => { sperre.add(w); bericht.trennsperren.push(w); });
        }
      }
      bericht.feinsatz = window.feinsatz ? window.feinsatz.protokoll : null;
      document.body.dataset.satzbericht = JSON.stringify(bericht);
    }
  }
  Paged.registerHandlers(Textfluss);
})();
