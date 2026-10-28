# Drei Perspektiven, Entscheidungen, Dokumentation und Projektgedächtnis

Frage des Eigentümers (28.10.): Sind „Lab Entwicklung“ und „Lab Gebrauch“ hinreichend
unterschieden? Es gibt kein Dokumentationsverzeichnis und kein Projektgedächtnis, Entscheidungen
halten gestalterisches Wissen fest und nur bedingt Systementscheidungen, ADRs werden nicht
dokumentiert. Was ist Stand der Technik? Und sind es eigentlich drei Perspektiven?

Status: Ist-Zustand **belegt** (Dateien im Labor, gelesen am 28.10.), Stand der Technik **belegt**
mit Quellen unten, Einordnungen und Optionen **abgeleitet**. Nach Entscheidung 0028 sind das
Hinweise und Optionen, keine Vorgaben. Eine Entscheidung trifft der Eigentümer.

## Kurz, in Worten

- **Nein, die Unterscheidung ist noch nicht hinreichend.** Sie steht bisher nur als Prinzip 9
  („Werk oder System?“) und als offene Recherche (#49, Astra zugeordnet). Im Alltag des Labors
  gibt es keine Stelle, an der man sieht, zu welcher Perspektive eine Entscheidung, eine Regel
  oder ein Dokument gehört.
- **Drei Perspektiven treffen es besser als zwei.** Systementwicklung (das Labor bauen),
  fachliche Entwicklung (das Gestaltungswissen im Labor aufbauen) und Gebrauch (mit dem Labor
  gestalten) haben verschiedene Ziele, Maßstäbe und Kompetenzen. Das deckt sich mit dem, was das
  Portfolio-Repo des Eigentümers bereits für sich getrennt hat (zwei Linien, dort noch ohne die
  fachliche Seite als eigene Perspektive).
- **Zur Einschätzung „Entscheidungen halten vor allem Gestalterisches fest“:** Das stimmt nur
  zum Teil. Von 29 Entscheidungen sind rund 18 Systementscheidungen, 9 fachlich oder Haltung und 2
  Werke (Einordnung nach Titel, *abgeleitet*). Das Problem ist ein anderes: Alle stehen in einer
  Liste, ohne Kennzeichnung. Wer nur die Systementscheidungen sucht, muss alle 29 lesen.
- **Zu „ADRs werden nicht dokumentiert“:** `decisions/` ist schon ein leichtes Entscheidungsprotokoll
  (Status, Anlass, Entscheidung, Rückgängig). Es fehlt der Abschnitt **Folgen**: In keiner der 29
  Dateien kommt „Folge“, „Konsequenz“ oder „Wirkung“ als Abschnitt vor. Alternativen stehen nur in
  einem Teil der Dateien, nicht überall in fester Form.
- **Ein Dokumentationsverzeichnis gibt es nicht, ein Projektgedächtnis schon,** aber verteilt:
  `AGENTS.md` (Arbeitsvertrag), `stand.md` und `anschluss/` (Stand), `decisions/` (Gründe),
  `research/gespraeche/` (Chatwissen). Was fehlt, ist die Seite des Gebrauchs: Werkbank und
  Laborbuch (Idee in #23).

## Ist-Zustand (belegt)

### Entscheidungen nach Perspektive (Einordnung nach Titel, abgeleitet)

| Perspektive | Entscheidungen | Anzahl |
|---|---|---|
| **System** (Labor bauen: Regeln, Prüfungen, Arbeitsteilung, Ablage) | 0001, 0002, 0003, 0004, 0009, 0010, 0012, 0013, 0014, 0015, 0018, 0019, 0024, 0025, 0026, 0027, 0028, 0029 | 18 |
| **Fachlich / Haltung** (Gestaltungswissen und Methode) | 0005, 0006, 0007, 0016, 0017, 0020, 0021, 0022, 0023 | 9 |
| **Gebrauch / Werk** (etwas mit dem Labor gestalten) | 0008 (Website), 0011 (erste Studie) | 2 |

Grenzfälle: 0007 (Belegpflicht) und 0021 (Fachpakete) betreffen Wissen und Verfahren zugleich.
Gerade solche Fälle brauchen eine Regel, wohin sie gehören.

### Aufbau der Entscheidungen

| Bestandteil | vorhanden? |
|---|---|
| Status (freigegeben, auf Probe, gültig, abgelöst) | ja, in allen |
| Datum, wer entschieden hat | ja, in allen |
| Anlass (entspricht „Kontext“) | ja, in den meisten |
| Entscheidung | ja |
| Rückgängig-Satz | ja (Besonderheit des Labors) |
| `dient:` (welche Anforderung) | seit der Verknüpfung (A33) ja |
| **Folgen** (was wird leichter, was schwerer) | **nein, in keiner** |
| **Alternativen** (verworfen, mit Grund) | nur teilweise, nicht in fester Form |
| **Perspektive** (System, fachlich, Gebrauch) | **nein** |

### Wo das Gedächtnis liegt

| Aufgabe | Ort heute |
|---|---|
| Arbeitsvertrag für alle Modelle | `AGENTS.md` (`CLAUDE.md` verweist darauf) |
| Stand und nächster Schritt | `stand.md`, `anschluss/<thema>.md` |
| Gründe für Regeln | `decisions/` |
| Maßstab | `intent.md`, `manifest.md`, `principles.md`, `verknuepfung.md` (erzeugt) |
| Wissen aus Chats | `research/gespraeche/` |
| Wissen für das Gestalten | `.agents/skills/fachpaket-*`, `corpus/`, `experiments/`, `studies/` |
| **Erklärung „so benutzt man das Labor“** | **fehlt** |
| **Werkbank und Laborbuch (Gebrauch)** | **fehlt** (Idee in #23, ruht) |

## Stand der Technik (belegt)

1. **Entscheidungsprotokolle (ADR).** Michael Nygards Vorlage hat fünf Abschnitte: *Title,
   Status, Context, Decision, Consequences*. Der Abschnitt „Consequences“ fragt: „What becomes
   easier or more difficult to do because of this change?“ Als Status nennt die Seite „proposed,
   accepted, rejected, deprecated, superseded“. Quelle: [Decision record template by Michael
   Nygard](https://clan.lol/docs/26.05/decisions/template) (gelesen 28.10.; die Seite nennt
   weder Alternativen noch die Unveränderlichkeit von Einträgen, das ergänzen andere Vorlagen und
   wurde hier nicht geprüft).
2. **Dokumentation nach Bedarf (Diátaxis).** Vier Arten: Tutorials, How-to-Guides, Reference,
   Explanation. Der Beitrag stellt zwei Leitfragen: Braucht die Leserin *Anleitung zum Handeln*
   oder *Wissen*? Ist sie *beim Lernen* oder *bei der Arbeit*? Das Problem, das gelöst werden
   soll: Dokumentation vermischt Arten und verfehlt dadurch den Bedarf. Quelle: [Canonical,
   Diátaxis, a new foundation for Canonical
   documentation](https://canonical.com/blog/diataxis-a-new-foundation-for-canonical-documentation).
3. **Gedächtnis für Agenten im Repo.** Nach der Dokumentation von Claude Code gibt es zwei
   ergänzende Wege: `CLAUDE.md` (Anweisungen, vom Menschen geschrieben) und Auto-Memory
   (Gelerntes, vom Modell geschrieben, pro Repository). Beide gelten als „context, not enforced
   configuration“; wer etwas erzwingen will, nutzt einen Hook. Empfohlen werden eine kurze,
   konkrete Datei („target under 200 lines“) und Auslagerung in Regeln oder Skills, die nur bei
   Bedarf laden. Eine `AGENTS.md` kann gelesen werden. Quelle: [How Claude remembers your
   project](https://code.claude.com/docs/en/memory?r=0).
4. **Beispiel aus dem eigenen Portfolio-Repo des Eigentümers** (privat, nur als Muster, mit Pfad
   `project/decisions/README.md`): Dort trennt eine eigene Regel Anforderungen, Issues,
   Entscheidungen (ADR), Programm und Git-Verlauf voneinander; ADRs haben die Status Accepted,
   Proposed, Superseded, Deprecated, Rejected, sind nicht still umzuschreiben und enthalten
   „Alternatives considered“ und „Consequences“. Es gibt dort eine Regel, wann ein ADR sich
   lohnt, und ausdrücklich, wann nicht.

**Nicht geprüft:** weitere Vorlagen (MADR, arc42), Dokumentationsrahmen für KI-gestützte Arbeit
und die Frage, ob Diátaxis für ein Gestaltungslabor passt (das ist eine Übertragung, keine
belegte Empfehlung). Das wäre Teil der Recherche #49 oder eines Folgeauftrags.

## Drei Perspektiven (Vorschlag zur Unterscheidung, abgeleitet)

| | **Systementwicklung** | **Fachliche Entwicklung** | **Gebrauch** |
|---|---|---|---|
| Frage | Wie arbeiten Mensch und Modelle zuverlässig zusammen? | Welches Gestaltungswissen trägt, ist belegt und wird genutzt? | Wie gestalte ich mit dem Labor ein Werk? |
| Maßstab | Nachvollziehbar, rückgängig, sparsam, prüfbar (A18–A21, A31–A34) | Belegt, mit Quelle, Mehrwert gegen das Mittelmaß (A04, A06, A07) | Wahrnehmung, Wirkung, Qualität des Werks (A28) |
| Kompetenz | Prozess, Werkzeuge, Rechte, Prüfung | Fachwissen, Quellenarbeit, Kritik | Gestalterisches Urteil, Entwurf |
| Ergebnis | Regeln, Skills, Prüfungen, Entscheidungen | Fachpakete, Korpus, Methoden, Prinzipien | Werke, Studien, Experimente |
| Gedächtnis heute | `decisions/`, `AGENTS.md`, `anschluss/` | Skills `fachpaket-*`, `corpus/`, `principles.md` | `experiments/`, `studies/`, privat `esany/werke` |
| Fehlt | Folgen und Alternativen in Entscheidungen | Kennzeichnung als „fachlich“ | Werkbank/Laborbuch, Erklärung „so benutzt man das Labor“ |
| Passende Dokumentationsart (Diátaxis, Übertragung) | Erklärung + Referenz | Referenz + Erklärung | Anleitung zum Handeln + Lernpfad |

Ein Satz zur Abgrenzung, den der Eigentümer geprägt hat und der hier gilt: Es sind **Modi, die
man nicht verwechseln oder gleichsetzen darf** (#49). Dieselbe Person wechselt zwischen den
Rollen; die Maßstäbe wechseln mit.

## Optionen (Hinweise, keine Entscheidung)

### A · Kennzeichnen statt umbauen (kleinster Schritt)
- Jede Entscheidung bekommt im Kopf `perspektive: system | fach | gebrauch`. Der Index in
  `decisions/README.md` wird danach gruppiert.
- Die Vorlage für neue Entscheidungen bekommt feste Abschnitte **Folgen** und **Alternativen**
  (je zwei Zeilen genügen). Alte Entscheidungen bleiben unverändert, werden also nicht
  umgeschrieben.
- **Aufwand:** klein (29 Köpfe, eine Vorlage, ein Prüfpunkt im Build).
- **Folge des Nichtstuns:** Die Vermischung wächst mit jeder Entscheidung weiter.
- **Risiko:** Grenzfälle (0007, 0021) führen zu Streit über das Etikett; eine neue Pflicht, die
  jemand pflegen muss. Das fängt die Regel ab, dass im Zweifel beides genannt wird.
- Berührt `decisions/`, `.github/` (Vorlage) und `tools/`: Rückfrage-Zone.

### B · Dokumentationsverzeichnis `docs/` nach Perspektiven
- Ein Verzeichnis mit drei Teilen (System, Fach, Gebrauch), darin Anleitung, Referenz und
  Erklärung getrennt, nach dem Muster von Diátaxis.
- **Aufwand:** mittel bis hoch.
- **Risiko:** noch ein Ort neben `AGENTS.md`, `README.md`, `stand.md` und `anschluss/`; Gefahr
  von Doppelungen (A33 „nichts verrottet“). Widerspricht der Zielstellung „keine weitere
  Governance“, solange kein Bedarf belegt ist.
- **Voraussetzung:** Erst klären, wer das liest (Eigentümer, andere Modelle, Dritte) und ob
  `README.md` plus Website (`index.html`) den Zweck schon erfüllen.

### C · Abwarten, bis die Recherche (#49) vorliegt
- **Aufwand:** keiner jetzt.
- **Folge:** Entscheidungen ab 0030 entstehen weiter ohne Perspektive und ohne Folgen.
- **Risiko:** Die Recherche beantwortet die Frage nach dem Modus, nicht die nach der
  Dokumentation; die Lücke bliebe.

### Hinweis des Orchestrators
Ich würde **A** vorschlagen (klein, rückholbar, deckt „Entscheidungen vermischt“ und „keine
Folgen“ ab) und **B nur auf Bedarf**. Das Projektgedächtnis für den Gebrauch (Werkbank,
Laborbuch) gehört in das ruhende Werke-Thema (#23); es braucht jetzt keine eigene Struktur.
Ob die drei Perspektiven die richtige Einteilung sind, soll die Recherche #49 prüfen; hier sind
sie eine Arbeitsannahme.

## Wechselwirkungen
- #49 (Modi, Möglichkeitsraum) bekommt diesen Befund als Material, nicht als Vorgabe.
- #59 und der Skill `issue`: der Teil, der nicht vom Audit abhängt, ist ausgelagert.
- #23 (Entwurfsprozess, Werkbank, Laborbuch) berührt die Gebrauchsseite.
- 0028 (Hinweise statt Vorgaben) und 0029 (Merkzettel je Thema) bleiben unberührt.
