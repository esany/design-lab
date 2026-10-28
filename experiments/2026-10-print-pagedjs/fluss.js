/* ============================================================
   Textfluss und Grundlinienraster — was InDesign „verkettete
   Textrahmen“ nennt, als kleines Skript für Paged.js.

   Rahmen:  data-fluss="name"     welcher Text hineinfließt (<template id="name">)
            data-reihe="1"        Reihenfolge der Rahmen
            data-grundlinie="18.3" erste Grundlinie in mm ab Oberkante Endformat
            data-letzte="135.3"   tiefste erlaubte Grundlinie in mm
   Absatz:  data-umbruch          beginnt im nächsten Rahmen (wie „Nächste Spalte“)
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

  // erstes Zeichen, das unter dem Rahmen liegt → Position zum Teilen
  function teilstelle(absatz, unten, zeile) {
    const gang = document.createTreeWalker(absatz, NodeFilter.SHOW_TEXT);
    const r = document.createRange();
    let knoten;
    while ((knoten = gang.nextNode())) {
      for (let i = 0; i < knoten.length; i++) {
        r.setStart(knoten, i); r.setEnd(knoten, i + 1);
        const rect = r.getClientRects()[0];
        if (rect && rect.top > unten - zeile / 2) return { knoten, i };
      }
    }
    return null;
  }

  function passt(rahmen) { return rahmen.scrollHeight <= rahmen.clientHeight + 0.5; }

  const texte = {}; // Textvorlagen, gesichert bevor Paged.js umbricht

  function fliessen(name) {
    const vorlage = texte[name];
    if (!vorlage) { console.error(`Text „${name}“ fehlt`); return; }
    const quelle = [...vorlage.cloneNode(true).children];
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
        const t = teilstelle(absatz, unten, zeile);
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

  class Textfluss extends Paged.Handler {
    beforeParsed(inhalt) {
      // Silbentrennung nach deutschen Trennmustern (Paket „hyphen“), statt der
      // Browser-Trennung, die je nach System falsch oder gar nicht trennt
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
      inhalt.querySelectorAll("template").forEach(t => {
        texte[t.id] = (t.content && t.content.children.length) ? t.content : t;
        t.remove();
      });
    }
    afterRendered() {
      document.querySelectorAll(".rahmen:not([data-fluss])").forEach(ausrichten);
      const namen = new Set([...document.querySelectorAll("[data-fluss]")].map(r => r.dataset.fluss));
      namen.forEach(fliessen);
    }
  }
  Paged.registerHandlers(Textfluss);
})();
