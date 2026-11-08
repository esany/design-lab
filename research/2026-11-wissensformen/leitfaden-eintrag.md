---
dient: A04, A08, A23, A33
datum: 2026-11-08
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Entwurf zum Testen, vom Eigentümer am 08.11. so gewollt („Wir testen das“). Nicht übernommen; nichts davon ist Regel, bis der Eigentümer zustimmt.
---

# Der Leitfaden-Eintrag: was ihn gut macht

Grundlage ist der [Konzeptstand 08.11.](konzeptstand-2026-11-08.md). Diese Seite beantwortet eine
Frage: Woraus besteht ein Eintrag, damit er eine richtige Grundlage der Entwurfsarbeit ist?
Maßstab ist Qualität, nicht eine niedrige Hürde. Jeder Teil steht hier nur, wenn er aus einer
Anforderung des Eigentümers folgt oder fachlich mit Quelle begründet ist.

## 1 · Was der Eigentümer verlangt hat

- **05.11., Entscheidung zum Leitfaden:** jede Regel in Stufen erklärt, Regel → Warum → Quellen;
  Belegstatus und Prüfdatum; Überholtes bleibt sichtbar mit Verweis „stattdessen“; Änderungen
  sichtbar; aktuell gehalten.
- **06.11.:** generisch, keine Beispiele aus der eigenen Arbeit; Fachbegriffe statt
  Umschreibungen, das Pattern nicht „weichgespült“; Ansätze aus dem Stand der Technik sind selbst
  Einträge; bekannte Anwendungen aus der Literatur, Laborerfahrungen verweisen nur auf den
  Eintrag; freie Tags statt Facetten, um bequem zu suchen; „natürlich irgendwelche Relationen“;
  dem Wachsen zuschauen; keine Ontologie, nichts vorschnell starr; ganzheitlich verstehen, wo die
  Abwägungen liegen.
- **08.11.:** Entwurfsarbeit ist der Gegenstand, die KI ein Werkzeug darin; Namen statt Nummern;
  der Leitfaden ist der Ort, an dem der Gestalter Erkenntnis gewinnt.

## 2 · Der Eintrag, Teil für Teil

Die drei Stufen aus der Entscheidung vom 05.11. bleiben die Gestalt des Eintrags. Neu ist, was in
jeder Stufe stehen muss, damit sie trägt.

| Teil | Was er leistet | Woher |
|---|---|---|
| **Kennung** | lesbarer Name, aus dem Fachbegriff gebildet (`folksonomy`) | Eigentümer 08.11.: Namen statt Nummern |
| **Fachbegriff** mit Quelle, dazu andere gebräuchliche Namen | macht den Eintrag anschlussfähig an die Fachwelt; andere Namen finden ihn auch, wenn jemand anders sucht | Eigentümer 06.11.; Pattern-Vorlage nach Gamma u. a. 1994: Name und „Also Known As“ (*belegt*, Hillside-Vorlage); Synonyme als Grundproblem freier Verschlagwortung (Golder, Huberman 2006, *belegt*) |
| **Regel**, ein Satz, generisch | Stufe 1: was zu tun ist | Entscheidung 05.11.; Eigentümer 06.11. |
| **Warum** | Stufe 2: welches Problem die Regel löst, in welcher Lage und warum sie trägt | Entscheidung 05.11.; der Leitfaden selbst: „Sag, wofür – nicht nur was“ |
| **Grenzen** | ebenfalls Stufe 2: wann die Regel nicht trägt und was sie kostet | Eigentümer 06.11.: Abwägungen verstehen; Pattern-Vorlage, Abschnitt „Consequences“: „What are the trade-offs and results of using the pattern?“ (*belegt*, Hillside-Vorlage); ohne Grenzen wird eine Regel zu eng oder zu weit angewandt (Begründung im Eintrag „Sag, wofür“) |
| **Bekannte Anwendungen** | Stufe 3: wo der Ansatz außerhalb des Labors erprobt ist, je mit Quelle | Eigentümer 06.11.; Pattern-Vorlage: „Known Uses“, dort mindestens zwei aus verschiedenen Domänen (*belegt*, Hillside-Vorlage) |
| **Quellen** | Stufe 3: Verweise auf den Korpus, keine zweite Quellenliste | Entscheidung 05.11., Punkt 4 |
| **Relationen** | verbinden die Einträge zu einem Ganzen (Abschnitt 4) | Eigentümer 06.11.; Alexander: Erst das Netz der Muster gibt dem einzelnen Sinn (*belegt*, über Iba 2021) |
| **Tags**, frei | Orientierung, Suche, Vermittlung | Eigentümer 06.11. |
| **Status, Belegstatus, seit, geprüft, Änderungen** | Stand sichtbar machen, Wachsen zeigen, Veralten bemerken | Entscheidung 05.11.; Intent: „Qualität wird sichtbar gemacht, nicht behauptet“ |
| **Beispiel** (statt / besser), wo es hilft | macht die Regel greifbar; nur generisch | besteht heute; Eigentümer 06.11.: keine Beispiele aus der eigenen Arbeit |

**Nicht mehr im Eintrag:** der Bereich (ersetzt durch Tags) und die Laborbelege (sie liegen in
`daten/` und verweisen auf die Kennung).

## 3 · Ein Eintrag darf werden, aber er gilt erst, wenn er vollständig ist

Der Eigentümer will dem Wachsen zuschauen; das geht nur, wenn Werdendes sichtbar ist. Der Intent
verlangt, dass Qualität sichtbar gemacht und nicht behauptet wird, und dass Verlässlichkeit in der
Technik steckt, nicht in Anweisungen. Daraus folgt (*abgeleitet*):

- **Werdend** (Arbeitsname): Regel, Tags und Datum genügen, damit ein Gedanke aus dem Chat nicht
  verloren geht. Die Seite zeigt ihn deutlich als werdend und nennt, was fehlt. Was fehlt, wird
  aus den Daten berechnet, nicht von Hand gepflegt.
- **Gilt:** Der Build lässt den Status nur zu, wenn alles da ist: Fachbegriff mit Quelle (oder der
  ausdrückliche Vermerk, dass es keinen etablierten Begriff gibt, mit dem, was gesucht wurde),
  Warum, Grenzen, mindestens eine Quelle, Belegstatus, Prüfdatum. Jede Quelle steht im Korpus und
  ist dort an der Fundstelle gesehen. Der Status kann also nicht mehr versprechen, als da ist.
- **Überholt:** wie bisher mit Datum und Verweis „stattdessen“; nichts wird gelöscht.

Quellen eines werdenden Eintrags kommen gleich in den Korpus, mit dem Status, den sie dort
tatsächlich haben (etwa „nicht belegt“, solange nur gesichtet). So gibt es auch für Keime keine
zweite Quellenliste.

## 4 · Welche Relationen

Freie Tags und wenige, feste Arten von Relationen sind kein Widerspruch: Die Tags ordnen nach
Nähe, die Relationen sagen, wie zwei Einträge zueinander stehen. Drei Traditionen, unabhängig
voneinander, kennen dieselben Grundarten:

| Art | Bedeutung | Alexander | IBIS | SKOS |
|---|---|---|---|---|
| **umfasst** / ist Teil von | ein Eintrag ist das größere Ganze eines anderen | größere und kleinere Muster | generalizes, specializes | broader, narrower |
| **ergänzt** | beide gehören zusammen, einer vervollständigt den anderen | Muster gleicher Ebene „complement“ (Salingaros) | supports | – |
| **in Spannung mit** | beide sind richtig, ziehen aber in verschiedene Richtungen; hier liegt die Abwägung | „compete“ (Salingaros) | objects-to | – |
| **verwandt** | nahe, ohne genauere Art | – | – | related |

Fundstellen (*belegt*, gesichtet, nicht vollständig gelesen, nicht im Korpus): Alexander 1979,
S. 315, zitiert bei Iba (PLoP 2021); Salingaros, *The Structure of Pattern Languages*
(patterns.architexturez.net); IBIS-Verknüpfungen nach Kunz, Rittel 1970, aufgezählt im Tagungsband
Pacific Knowledge Acquisition Workshop 2004 (arXiv cs/0504071); SKOS-Referenz, W3C 2009.

„In Spannung mit“ statt „widerspricht“ (Konzeptstand): Ein Widerspruch sagt, einer sei falsch.
Bei Abwägungen sind beide richtig, und genau dort entsteht Erkenntnis. Weitere Arten kommen erst
dazu, wenn mehrere Einträge sie brauchen. Der Build prüft, dass das Ziel existiert und die Art
bekannt ist; die Gegenrichtung (umfasst ↔ ist Teil von) erzeugt er selbst.

## 5 · Beispiel: ein werdender Eintrag

Bewusst werdend gewählt, damit sichtbar wird, was fehlt.

```json
{
  "id": "folksonomy",
  "status": "werdend",
  "begriff": { "name": "Folksonomy", "auch": ["kollaboratives Tagging", "Social Tagging"], "quelle": "vanderwal-2004" },
  "regel": "Verschlagworte frei; die Ordnung zeigt sich im gemeinsamen Vorkommen der Schlagwörter.",
  "warum": "Wo die Ordnung eines Bestands noch nicht bekannt ist, legt ein festes Vokabular sie zu früh fest. Freie Schlagwörter halten sie offen, und wiederkehrende Kombinationen zeigen, welche Ordnung das Material selbst hat.",
  "grenzen": "Synonyme zerstreuen, was zusammengehört, mehrdeutige Wörter mischen, was getrennt gehört (Golder, Huberman 2006). Sie braucht Pflege: ähnliche Schlagwörter zusammenführen, häufige festigen.",
  "anwendungen": [
    { "was": "Lesezeichen-Dienst Delicious: stabile Verteilung der Schlagwörter je Adresse", "quelle": "golder-huberman-2006" }
  ],
  "quellen": ["vanderwal-2004", "golder-huberman-2006"],
  "relationen": [
    { "art": "in-spannung-mit", "ziel": "kontrolliertes-vokabular" },
    { "art": "verwandt", "ziel": "offenes-kodieren" }
  ],
  "tags": ["tagging", "ordnung", "erkenntnis"],
  "beleg": "abgeleitet",
  "seit": "2026-11-08"
}
```

Die Seite würde dazu zeigen: *werdend · es fehlen: zweite bekannte Anwendung aus einer anderen
Domäne, geprüfte Quelle für den Begriff, Prüfdatum.*

## 6 · Offen, für den Eigentümer

1. **Grenzen als eigener Teil:** Soll jeder geltende Eintrag sagen müssen, wann er nicht trägt und
   was er kostet? Ich empfehle ja (Abschnitt 2).
2. **Die vier Arten von Relationen:** Passen sie als Anfang?
3. **Name für „werdend“:** Das ist eine Bedeutungsfrage. „Keim“ war ein Wort der KI.

Danach, nicht jetzt: der Name des Leitfadens, ein oder mehrere Leitfäden, die 24 bestehenden
Einträge.

## Nicht geprüft

- Die Pattern-Vorlage ist über die Hillside-Seite und Vorlesungsfolien gesichtet, nicht am Buch
  von Gamma u. a.; Alexander nur über Iba 2021 und Salingaros, nicht am Original.
- Vander Wal als Urheber des Begriffs ist Standardwissen, nicht an einer Fundstelle geprüft.
- Das Beispiel ist ein Entwurf; keine seiner Quellen steht bisher im Korpus.

<details><summary>Für die Modelle: Fundstellen</summary>

- Entscheidung 05.11.: `decisions/0032-leitfaden-mit-ki-arbeiten.md`, Anlass und Punkte 3–5.
- Eigentümer 06.11.: `daten/arbeitsweise.json`, f18, f19, f20, f22, f24, f25; Wortlaut auch in
  `leitfaden-wachsend.md`, Abschnitt 1. 08.11.: f16, f28–f31, f36.
- Intent: `intent.md`, Abschnitt „Leitbild“, Punkte „Verlässlichkeit steckt in der Technik“ und
  „Qualität wird sichtbar gemacht“.
- Hillside-Vorlage: https://hillside.net/patterns/46-patterns-library/patterns-information ·
  Iba 2021: https://Hillside.net/plop/2021/plopourri/PLoP21_PLOPOURRI_Iba_Methodology2.pdf ·
  Salingaros: https://patterns.architexturez.net/node/172638 · IBIS: https://arxiv.org/pdf/cs/0504071 ·
  SKOS: https://www.w3.org/2004/02/skos/core · Golder, Huberman 2006: DOI 10.1177/0165551506062337.
- Verlauf dieser Klärung im Chat 08.11.: zwei Vorschläge des Modells verworfen (Minimalform mit
  optionalem Fachbegriff; übergestülpte Lehrbuchform), dann Rückgang auf den Wortlaut.
</details>
