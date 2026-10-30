---
thema: Wissen erschließen · Bibliothekar
stand: Quellen aus #49 gesichert (39 Einträge, #122); Befund und Optionen liegen vor, nichts beschlossen
naechster_schritt: Der Eigentümer beantwortet vier Fragen (Lesestand, Belegpflicht, Fachpaket, PDFs); danach setzt Claude um.
offen: [49]
---

# Thema: Wissen erschließen · der Bibliothekar

**Zuletzt fortgeschrieben:** 30.10.2026 (Claude, Prüfung und Übernahme #122)

## In Worten

**Worum es geht:** Die Assistenz soll vor allem mit Wissen unterstützen: Verweise und Ideen des
Eigentümers erschließen, die Herkunft jeder Aussage absichern und das Wissen in die konkrete
Gestaltungssituation einordnen. Alles muss nachprüfbar sein. Keine Verdichtung aus wenigen
Stellen zu einer glatten Aussage.

**Was der Eigentümer will (Wortlaut, 30.10.):** „Ich will nur nachfragen können und die KI hat
dann die Provenienz und kann mit mir diskutieren.“ Daran misst sich das Thema: Jede Quelle steht
mit Herkunft und Lesestand im Repo, sodass jedes Modell auf Nachfrage Auskunft geben kann.

**Gesichert?** Ja, soweit es ohne die PDFs geht (#120, #122). 39 Quellen stehen im Korpus,
jede mit Lesestand in Worten und Verweis auf ihre Lesenotiz. Die Lesefunde aus Astras Chat stehen
in `research/2026-10-entwurfsbewegung/chat-ruecksicherung-2026-10-30.md`, die acht Felder und
sechs Forschungsrichtungen der fünf Bücher in `fuenf-buecher-wissenslandkarte-handoff-claude.md`.
**Nicht unabhängig geprüft:** was in den Kapiteln selbst steht. Dafür braucht ein zweites Modell
die PDFs. Bekannte Unschärfe: Das Feld `status` mischt bei den neuen Einträgen Existenz und
Lesetiefe. Das klärt Frage 1.

**Wo wir stehen:** Der Befund liegt in `research/2026-10-wissensbestand/befund.md`. Vorbild
sind paleo-type (Lesestand je Quelle, Hochstufung erst nach Lektüre) und Wissensarbeit
(Fehlerfamilien). Anlass waren die Funde zu #49 und ein Fehler darin: Eine richtige
Quellenangabe wurde als falsch „berichtigt“.

**Offene Fragen an den Eigentümer:**
1. Sollen Quellen künftig ihren Lesestand tragen (gelesen, nur Abstract, nur Referat)?
2. Soll der bestehende Skill `belegpflicht` dafür geschärft werden, statt einen neuen anzulegen?
3. Sollen die fünf Bücher der Grundstock eines Fachpakets „Entwerfen“ werden, wenn die ersten
   Kapitel gelesen sind?
4. Wo liegen die fünf PDFs, damit ein zweites Modell die Kapitel selbst lesen kann?

<details><summary>Für die Modelle: Nummern</summary>

- Material: #49, PR #93 (`lab/entwurfsbewegung`), Dateien `fuenf-buecher-wissenslandkarte-handoff-claude.md`, `pdf-korpus-erstaufnahme-2026-10-30.md`, `primaerquellen-dynamik-und-moeglichkeitsraeume.md`.
- Vorbilder: `esany/paleo-type` `methodology/evidence-policy.md` (Codes P/E/F/K/R/S/H), `methodology/source-and-provenance.md` (drei Schichten); `esany/wissensarbeit` `tests/evals/failure_corpus.json` (FF-EPISTEMIC-INTEGRITY, FF-FALSE-ASSURANCE, FF-SOLUTIONISM-BLOAT).
- Abgrenzung: Das Thema „Möglichkeitsraum“ führt #49 inhaltlich; dieses Thema führt, **wie** Wissen erschlossen und belegt wird.
</details>
