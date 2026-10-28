# Intent, Ziel und Anforderungen — der Maßstab

Diese Datei hält fest, **was das Labor leisten soll** — in den Worten des
Eigentümers, aus dem Gründungsgespräch (27.10.2026). Sie ist der Maßstab für
Qualität und Passgenauigkeit: Jede Arbeit, jede Pflege und jede Auswertung
prüft gegen diese Anforderungen. Änderungen nur durch den Eigentümer.

Status: **erfüllt** · **teilweise** · **offen** — Stand 2026-10-27, ehrlich
bewertet. Die monatliche Pflege aktualisiert die Spalte „Stand“.

## Intent

> Ein persönliches Tooling des Experimentierens — eine unabhängige Struktur,
> vornehmlich mit Open-Source-Strukturen, die Anschlussfähigkeit an aktuelle
> KI-Entwicklungen in der strategischen wie operativen Gestaltungsdomäne und in
> Entwurfsprozessen gibt.

Der Gestalter will **gestalten und den Entwicklungsstand gemeinsam
durchgehen** — nicht Technik bedienen. Er versteht sich als **systemischer,
ganzheitlicher Gestalter**.

## Zielstellung

**Maximale Qualität und Ergebnisse mit minimalen Ressourcen und Invest — ohne
geizig zu sein.** Unabhängig von monetär geleiteten Diensten, weil die Zukunft
volatil ist und die Bindung an ein Tooling riskant.

## Anforderungen

### Werk und Fachlichkeit

| Nr. | Anforderung | Prüffrage (Maßstab) | Stand |
|---|---|---|---|
| A01 | Unterstützung im **gesamten Entwurfsprozess**: Analyse und Synthese, Typografie, Grafikdesign, Print, Animation, freies Arbeiten, elementare Geometrie, konkrete Kunst, Suprematismus, Inspiration, Kunst- und Bildwissenschaft, Diagrammatik, Informationsdesign, Wissensvermittlung, Ausstellungsdesign, Informationsvisualisierung, organische Visualisierungssysteme, HMI | Gibt es für das Feld ein Fachpaket und mindestens ein Werk? | **offen** — 1 Studie (konkrete Kunst/Farbe); Methoden für 5 Felder |
| A02 | **Übergeordnete, strategische Fragestellungen** bearbeiten, unabhängig vom Tooling; Figma ist nur ein Kanal; Design-System egal ob Penpot, Figma oder Code | Funktioniert die Arbeit ohne ein bestimmtes Werkzeug? | **teilweise** — Prinzip ja, kein strategisches Werk |
| A03 | **Profi-Werkzeuge, keine Bastellösung** (Niveau: Mermaid, Observable Plot, D3, Vega-Lite und darüber) | Nutzt das Werk das jeweils professionelle offene Werkzeug? | **offen** — Studie in einfachem JavaScript |
| A04 | **Fachexpertise, Best Practice und Stand der Technik als Tooling** verfügbar — belegt aus Community, Repos, Papern, Projekten | Hat jedes Feld Kanon, Best Practice, Stand der Technik, Qualitätskriterien — mit Quellen? | **teilweise** — Fachpakete „Vermitteln“ und „Form“ (2 von 6); „Form“ an einem echten Flyer erprobt und gemessen |
| A05 | **Rolle der KI je Kontext** benennen — was sie leistet und was nicht, bezogen auf Best Practice | Ist pro Feld beschrieben, was die KI tut, was der Mensch, wo die Grenze ist? | **teilweise** — pro Feld beschrieben für „Vermitteln“ und „Form“ (2 von 6) |
| A06 | **Mehrwert gegen das Mittelmaß**: Gestaltung, Kunst, Kreativität, Haltung stärken, nicht ersetzen | Zeigt das Werk bewusste Abweichung vom Erwartbaren? | **teilweise** — Prinzip 1, Negativfolie in einer Studie |
| A07 | **Verlässliche Ergebnisse** (Erfahrung: NotebookLM mit willkürlichen Inhalten) | Sind Aussagen belegt, geprüft, Lücken sichtbar? Gibt es einen Prüffall? | **teilweise** — Regel und Skill, kein Prüffall, nicht erprobt |
| A28 | **Gestaltung dient**: menschenzentriert, Wahrnehmung und Kognition als Maßstab; Medium, Abstand, Licht, Umgebung, Kontext, Publikum werden berücksichtigt; Lesbarkeit vor Ästhetik, Abweichungen mit benanntem Risiko | Ist die Wahrnehmungssituation geklärt und die kleinste wichtige Information auf Sehwinkel und Kontrast geprüft? | **teilweise** — Manifest, Prinzip 0, Kritik-Schritt 0; Prüfung bisher nur am Flyer |
| A29 | **Strukturen sichtbar und selbst änderbar**: Raster, Regeln und Systeme werden in den Werkzeugen strukturell nachgebaut, sind hervorhebbar und vom Menschen ohne Agent veränderbar — keine „Magie“ | Kann der Mensch die Struktur einblenden und eine Regel selbst ändern? | **offen** — Konzept `research/2026-10-raster-als-programm/` |
| A30 | **Raster als Programm**: Gestaltungsraster medien- und werkzeugunabhängig übertragbar (Druck, Bildschirm, responsiv), Brüche als bewusste Entscheidung ausgewiesen | Erzeugt dieselbe Rasterbeschreibung in zwei Werkzeugen und zwei Formaten ein stimmiges Ergebnis? | **offen** — Konzept, Pilot vorgeschlagen |
| A08 | **Alle Einstellungen und Funktionen nachvollziehbar**: Kontext und Erklärung, gestuft nach Bedarf (progressive Offenlegung, zeitgemäße Interaktionsmuster) | Erklärt sich jede Funktion in Stufen? | **teilweise** — in der Studie; Labor-Website und Übersicht nicht |

### Werkzeuge, Anbindung, Unabhängigkeit

| Nr. | Anforderung | Prüffrage (Maßstab) | Stand |
|---|---|---|---|
| A09 | **KI-Tooling und Assistenz**, das Arbeit abnimmt — Git-Projekte, Frameworks, Anbindungen (MCP), nicht manuell | Ist das Werkzeug angebunden und von Agenten bedienbar? | **teilweise** — Cloud-Agent, Prüfungen, Pflege; keine Fach-Anbindung (Blender, Penpot, Zotero, ComfyUI) |
| A10 | **Nicht nachbauen, was es fertig gibt** | Wurde vor dem Bau nach fertigen Skills/Projekten gesucht? | **teilweise** — fertige Design-Skills nicht eingebunden |
| A11 | **Unabhängigkeit, Open Source, kein Lock-in** | Ist das Ergebnis mit anderem Modell/Werkzeug reproduzierbar? | **teilweise** — offene Formate ja; Ausweg nie getestet |
| A12 | **Vorhandene Abos nutzen**: Claude Pro, ChatGPT Plus/Codex, Google AI Pro, Miro Education | Wird jedes dort eingesetzt, wo es am stärksten ist? | **offen** — nur Claude im Einsatz |
| A13 | **Kosten im Griff**, keine bösen Überraschungen | Entstehen Kosten über die Abos hinaus? | **erfüllt** |
| A14 | **Online, geräteunabhängig, ohne Git-Wissen** | Geht alles im Browser/Handy ohne Git-Befehle? | **erfüllt** |
| A15 | **Sicherheit**: keine unsicheren Systeme, nichts ins Netzwerk Dritter | Wurde Sicherheit vor Aufnahme geprüft? | **erfüllt** (OpenClaw verworfen) |
| A16 | **Vertraulichkeit**: keine Kunden- oder Arbeitsdaten öffentlich | Enthält das öffentliche Repo nur Eigenes? | **erfüllt** (D3sign privat) |

### Zusammenarbeit und Steuerung

| Nr. | Anforderung | Prüffrage (Maßstab) | Stand |
|---|---|---|---|
| A17 | **Arbeitsteilung Gestalter–Maschine** aus D3sign übernehmen | Ist klar, wer was führt? | **erfüllt** — AGENTS.md; D3sign-Prinzipien zu 29/33 übernommen (`herkunft-d3sign.md`) |
| A18 | **Kein Klick-Durchreicher**: Agent arbeitet selbstständig im Rahmen | Musste der Mensch Technik bedienen? | **erfüllt** seit 0019 |
| A19 | **Transparent, nachvollziehbar, rückgängig** — flexibel, ohne Fehlerquellen und Qualitätsverlust | Ist jede Änderung in `stand.md` mit Rückgängig-Weg? | **erfüllt** |
| A20 | **Offene Punkte und Unsicherheiten gemeinsam klären**, transparent gemacht | Stehen Unsicherheiten sichtbar als Frage? | **erfüllt** |
| A21 | **Keine Strukturen ohne Freigabe** | Wurde nichts Strukturelles still entschieden? | **teilweise** — anfangs verletzt, seitdem `decisions/` |
| A22 | **Kein Entwickler-Review**: Fragen in Alltagssprache | Wurde der Mensch mit Code/Dateien zum Durchlesen belastet? | **erfüllt** seit 0018 |
| A23 | **Lebendig und frisch** — Repo und Werkzeug bleiben aktuell | Läuft die Pflege, wird Veraltetes sichtbar? | **teilweise** — eingerichtet, noch nicht gelaufen |
| A24 | **Alles ist Experiment** | Ist der Experimentstatus sichtbar? | **erfüllt** |
| A25 | **Modular**: der alte Intent (Design-System-Grundbaustein) ist ein Modul im neuen | Gibt es das Modul „System“ mit seinen Prinzipien? | **teilweise** — Prinzipien in `system/prinzipien.md`, nicht erprobt |
| A26 | **Gemeinsames Projektgedächtnis**, Gegenprüfung durch zweites Modell, deterministische Prüfung (Impulse des Kollegen) | Liegt Wissen im Repo? Prüft ein zweites Modell? | **teilweise** — Gedächtnis und Prüfungen ja; zweites Modell offen |
| A27 | **Fundstücke jederzeit einbringen** — bewertet, nicht blind übernommen | Gibt es einen Bewertungsweg? | **erfüllt** — Skill `fundstueck` |

## Gesamtbild

- **erfüllt:** 11 · **teilweise:** 14 · **offen:** 5 (von 30) — Stand 2026-10-28
- Stark: Steuerung, Transparenz, Kosten, Sicherheit.
- Schwach: **das Werk und die Fachlichkeit** (A01, A03, A04, A12, A25) — der
  eigentliche Zweck des Labors.

## Wie dieser Maßstab benutzt wird

1. Jede Arbeit nennt im Pull Request, welche Anforderungen sie bedient.
2. Die monatliche Pflege aktualisiert die Spalte „Stand“ mit Beleg.
3. Das Experiment „Labor-Aufbau“ wird Ende November gegen diese Liste
   ausgewertet, nicht nur gegen seine eigenen Erfolgskriterien.
