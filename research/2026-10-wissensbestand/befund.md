---
dient: A04, A07, A26
datum: 2026-10-30
anlass: "Eigentümer im Chat, 30.10.: Die Assistenz soll vor allem mit Wissen unterstützen, als strukturierter, kreativer Bibliothekar mit Provenienz und Einordnung."
gelesen: "design-lab main@1d14911 und lab/entwurfsbewegung (PR #93); esany/paleo-type main@65c5167 (methodology/evidence-policy.md, source-and-provenance.md); esany/wissensarbeit main@b448915 (tests/evals/failure_corpus.json, skills/failure-pattern-check)"
status: Befund und Optionen von Claude; nichts beschlossen
---

# Wissen erschließen: der Bibliothekar mit Provenienz und Einordnung

## In Worten

**Was der Eigentümer braucht (Wortlaut, 30.10.):**

> „Ich bin Generalist, mit 1000 Ideen und Verweisen. Aber das Abrufen und Verfügbarmachen,
> all dieses Wissenskosmos habe ich natürlich nicht. Ich brauche jemand, der hier ein
> strukturierter kreativer Bibliothekar ist, der sowohl die Provenienz […] absichert, wie auch
> die Einordnung des Wissens in den situativen Gestaltungs- und Entwurfskontext. Ich muss es
> auch nachvollziehen und prüfen können. Also nicht aus 3 Details eine sumpfige Aussage
> generieren.“

Das ist kein neuer Zweck. Es schärft das Leitbild in `intent.md` („fachliche Assistenz […], wo ich
nicht Experte bin“), A04 (Fachexpertise als Werkzeug) und A07 (verlässliche Ergebnisse). Neu
ist die Gewichtung: **Wissen erschließen ist eine Hauptleistung**, nicht Beiwerk der Recherche.

**Was die Recherche zu #49 gezeigt hat (belegt, Fundstellen unten):**

1. Astra hat sauber nachgearbeitet: Fehler offen zurückgezogen, Primärquellen ergänzt, fünf
   Bücher erstmals aufgenommen, Quelle und Einordnung getrennt.
2. Trotzdem sind drei typische Fehler aufgetreten, und zwar auch **nach** der Korrektur:
   - **Zitat gefunden statt Aussage getragen** (Alexander, Musik). Meine erste Stichprobe vom
     29.10. hat denselben Fehler gemacht: Sie hat Wortlaut geprüft, nicht Deckung.
   - **Verlagsabstract und Herausgeber-Einleitung als „belegt“.** Ein Abstract oder ein Referat
     belegt nur, was dort steht, nicht das Argument des Buchs oder Kapitels.
   - **Überkorrektur:** Astra hat den Korpuseintrag zu Schön (1992) als „fälschlich“ berichtigt.
     Es gibt aber **zwei** Veröffentlichungen mit demselben Titel im selben Jahr. Beide Angaben
     stimmen (Prüfung unten). Die Berichtigung hat eine richtige Angabe gelöscht.
3. Die Funde aus den fünf Büchern liegen nur auf einem Branch (PR #93, Entwurf, Konflikt mit
   `main`). Auf `main` sieht man sie nicht.

**Was der Bibliothekar leisten muss:** drei Schichten getrennt halten und den Lesestand jeder
Quelle offen ausweisen. Das Vorbild steht in paleo-type und ist dort erprobt.

## 1 · Drei Schichten, keine darf die andere überschreiben

Vorbild: paleo-type trennt archivische, textliche und historische Wahrheit (`methodology/
source-and-provenance.md`: „No layer may silently rewrite another.“). Übertragen auf das Labor
(*abgeleitet*):

| Schicht | Frage | Beispiel | Status |
|---|---|---|---|
| **Quelle** | Was existiert? Welche Ausgabe, welche Seite, welches Exemplar? | Schön 1992, *Research in Engineering Design* 3, S. 131–147 | belegt durch Titelblatt oder Katalog |
| **Aussage** | Was steht an genau dieser Stelle? Was steht dort nicht? | „seeing-moving-seeing“, mit Seitenangabe | belegt nur mit Lesestand P, E oder F |
| **Einordnung** | Was heißt das für **diese** Gestaltungssituation? Was spricht dagegen? | Für den Flyer: … | immer *abgeleitet*, Situation nach `manifest.md` benannt |

Die kreative Arbeit des Bibliothekars liegt in der dritten Schicht: Querverbindungen,
Gegenfragen, Kontraste. Astras Übergabe (K1–K6, Kontrastfragen) zeigt, wie das aussieht. Sie
bleibt wertvoll, solange sie als Einordnung ausgewiesen ist und auf einzelne Zeilen der
zweiten Schicht verweist.

## 2 · Lesestand: was eine Quelle tragen kann

Vorbild: paleo-type, `methodology/evidence-policy.md`, Tabelle „Source-status codes“, mit
Hochstufungsregel („A source may move from `K/S` to `P/E/F` only after the underlying material
has actually been opened and the relevant passage inspected.“). Für das Labor gelesen
(*abgeleitet*, Codes unverändert, damit beide Projekte dieselbe Sprache sprechen):

| Code | Lesestand | trägt |
|---|---|---|
| P | Primärquelle selbst geöffnet (Werk, Archivale, Original-Artefakt) | was an der gesehenen Stelle sichtbar ist |
| E | wissenschaftliche Edition geöffnet | Text und Apparat an der gesehenen Stelle |
| F | Fachtext an der Stelle gelesen (Kapitel, Aufsatz, Seiten) | die Aussage der Autorin **an dieser Stelle** |
| K | Katalog, Normdaten, Metadaten | Existenz und bibliografische Angaben, sonst nichts |
| R | Referat: Rezension, Herausgeber-Einleitung, Kompendium (z. B. Dubberly) | nur, was der Referent sagt, nicht die referierte Autorin |
| S | Suchtreffer, Abstract, Inhaltsverzeichnis, Klappentext | Hinweis, kein Beleg |
| H | Ableitung oder Hypothese | keinen eigenen Belegwert |

**Folge für #49 (*abgeleitet*):** Viele Zeilen, die heute „belegt“ heißen, sind Lesestand S oder
R, zum Beispiel P1, P4–P6, P8 und P9 (dort selbst als Verlagsabstract ausgewiesen) und die Herausgeberreferate zu
Bredies, Mareis und Stapenhorst. Sie bleiben wertvoll als **Leseliste**, belegen aber noch
keine Aussage der Autorinnen.

**Bisher im Labor:** `corpus/schema.md` kennt nur `status: belegt (an der Fundstelle gesehen)`.
Das vermischt „existiert“ (K) mit „gelesen“ (F). Hier sitzt die Lücke.

## 3 · Keine sumpfige Synthese

Was der Eigentümer „aus 3 Details eine sumpfige Aussage“ nennt, beschreibt Wissensarbeit als
Fehlerfamilie (`tests/evals/failure_corpus.json`):

- **FF-EPISTEMIC-INTEGRITY:** „Uncertainty, provenance, alternatives or unresolved relations are
  flattened, invented or laundered.“
- **FF-FALSE-ASSURANCE:** „Evidence is described more strongly than it supports.“
- **FF-SOLUTIONISM-BLOAT:** „Technology, abstraction or governance is introduced before
  demonstrated need and fit.“ Das gilt auch für diesen Vorschlag.

Daraus folgen vier Prüffragen an jede Synthese (*abgeleitet*):

1. Steht jede Einzelaussage als eigene Zeile mit Lesestand da?
2. Nennt die Synthese die Zeilen, auf die sie sich stützt, und **nur** diese?
3. Steht daneben, was dagegen spricht oder offen bleibt (Gegenposition, andere Lesart)?
4. Steht nirgends „die Forschung zeigt“ oder „die Literatur ist sich einig“, wenn nur einzelne
   Stellen gelesen sind?

## 4 · Prüfung des Schön-Eintrags (Claude, 30.10.)

| Angabe | Ergebnis | Fundstelle | Lesestand |
|---|---|---|---|
| *Research in Engineering Design* 3 (1992), S. 131–147 | **bestätigt**, Kopfzeile: „Res Eng Des (1992) 3:131-147“ | [PDF, Universität Oslo](https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/pensum/schon_design-conversation.pdf) | P (Kopfzeile gesehen) |
| *Knowledge-Based Systems* 5(1) (1992), S. 3–14 | **bestätigt**, Inhaltsverzeichnis des Hefts listet „Schön, D.A. – Designing as reflective conversation with the materials of a design situation (pp. 3-14)“ | [KB, Digitale Bibliotheek](https://ibl.kb.nl/articles/0000000010951/5/1) | K |
| DOI 10.1016/0950-7051(92)90020-G | gehört zum Aufsatz in *Knowledge-Based Systems* | [Datensatz](https://www.datalearner.com/academic/journal-papers/0950-7051/volumes-and-issues/18/paper-detail/95016) | K |

**Ergebnis:** Zwei Veröffentlichungen, beide echt. Ob die Texte gleich sind, ist **nicht
geprüft**. Richtig wäre: beide Einträge behalten und als zwei Fassungen verknüpfen.
Die Berichtigung auf dem Branch (`corpus/schoen-1992-reflective-conversation.md`) ist zu
korrigieren.

## 5 · Was mit den Befunden geschieht (Optionen)

| Befund | Option | Folge | Risiko |
|---|---|---|---|
| Quellen aus #49 | in `corpus/recherche.json` nach Schema, mit Lesestand | auffindbar, vom Build geprüft | keins; die `.md`-Dateien in `corpus/` auf dem Branch passen nicht zum Schema |
| fünf Bücher | in `corpus/referenzen.json` als Verweise des Eigentümers, mit einer **Leseliste** je Kapitel (Lesestand R oder S, bis gelesen) | sichtbar, was gelesen ist und was nicht | keins |
| Wissenslandkarte (acht Felder, sechs Richtungen) | (a) bleibt Recherche · (b) Grundstock eines Fachpakets „Entwerfen und Designforschung“ | (b) macht das Wissen im Gebrauch abrufbar (A04) | (b) zu früh: Fachpaket auf Herausgeberreferaten gebaut |
| PR #93 | teilen: Korpus · #49-Antwort · Bücher | jede Änderung einzeln rückgängig | keins |
| Bibliothekar als Rolle | (a) Skill `belegpflicht` präzisieren: drei Schichten, Lesestand, Hochstufung, vier Prüffragen, zwei Durchgänge (Wortlaut, dann Deckung) · (b) neuer Skill · (c) nichts ändern | (a) ohne neue Schicht, an #49 erprobbar | (b) Parallelschicht wie in paleo-type #341; (c) derselbe Fehler kommt wieder |
| Technik statt Text | Build verlangt im Korpus das Feld `lesestand` und meldet „belegt“ mit Lesestand K, S oder R | Fehler fällt auf, ohne dass jemand daran denken muss | Formular-Scheingenauigkeit, wenn niemand liest |

**Empfehlung (*abgeleitet*):** Belegpflicht präzisieren (a), Lesestand ins Korpus-Schema und in
den Build, PR #93 teilen. Das Fachpaket erst, wenn mindestens zwei Kapitel im Original gelesen
und von einem zweiten Modell gegengelesen sind.

## 6 · Offen

- Die fünf PDFs lagen nur in Astras Chat. Ich konnte keine Buchstelle selbst prüfen. Alle
  Aussagen zu den Büchern sind für mich **nicht geprüft**.
- Ob die Lesestand-Codes für Gestaltungswissen reichen (Werke, Bilder, Gespräche, Erfahrung des
  Eigentümers), ist **nicht erprobt**. Erfahrungswissen hat in paleo-type keinen Code.
