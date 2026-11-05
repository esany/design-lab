---
schicht: archiv
datum: 2026-11-05
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Archiv. Vorfassung des Projekt-Docs und Abgleich (#127, Punkt 3)
dient: A26, A34
---

# Projekt-Doc `claude/paleo-type.md`: Abgleich mit paleo-type und Vorfassung

Das Projekt-Doc liegt im Claude-Projekt „Design“ und wird in **jedem** Chat dieses Projekts
mitgeladen, auch wenn es um Gestaltung geht. Auftrag #127: auf einen Zeiger kürzen, vorher
abgleichen, ob alles in paleo-type steht, Fehlendes nennen.

**Ergebnis:** Ein reiner Zeiger ist nicht möglich, ohne Wissen zu verlieren. Etwa die Hälfte steht
in paleo-type (`SPICKZETTEL.md` auf `main@22b255b`), der Rest nirgends im Repo. paleo-type ist
pausiert (#399), dort wird nichts geändert. Das Doc wurde deshalb auf Zeiger plus Fehlendes
gekürzt; das Fehlende ist dort als „noch nicht in paleo-type“ markiert.

## Abgleich (*belegt*, Suche in `SPICKZETTEL.md`, `AGENTS.md`, `GOVERNING_OBJECTIVE.md` und im übrigen Repo, 05.11.2026)

| Inhalt des Docs | in paleo-type? |
|---|---|
| Rolle Prüfer, nicht Bauer; Start mit Stichwort „paleo-type“, Lesereihenfolge, zwei Sätze | ja, `SPICKZETTEL.md` 1 und 2b |
| Labels `an:chatgpt` · `an:claude` · `an:mensch`, genau eines je Issue | ja, 1b |
| Aufträge nie als Text zum Weiterreichen, sondern als Issue | ja, 1b |
| Gegenlesen im frischen Chat im ChatGPT-Projekt | ja, 1 |
| Abschluss: Übergabestand im Issue `uebergabe` | ja, 1 |
| Regeln allgemein halten, Projektwerte in `ARBEITSPLAN.md` | ja, Kopf |
| Bildquellen nie im Repo | ja, 2c |
| `main` geschützt, `validate` Pflicht | ja, 2e |
| Pflegepflicht Spickzettel | ja, Kopf („im selben PR“) |
| Ziel: generisches Werkzeug, Quellen sind Testfälle (03.11.) | **nein** |
| Vorrang Analyse #405, Lesart Z1–Z5, G1–G5, #408; nur lesen und dort notieren | **nein** (Stand, nur in Issues) |
| Pause #399 gilt vollständig | **nein** im Repo, nur im Issue |
| Arbeitsweise aus #394, #404, #405 (vollständig lesen, Belegstand, kein Allgemeinwissen als Befund, Übergaben sind Spuren …) | **nein** |
| Grundprinzip des Eigentümers (ganzheitlich, systemisch, transparent, transdisziplinär) | **nein** |
| Anforderungen vor dem Bauen klären, erst nach Bestätigung bauen | **nein** |
| GitHub im Container: nur REST, GraphQL und Contents-API gesperrt, `register_repo_root` | **nein** |
| Neue Dateien unter `engineering/evidence/` brauchen Label `verfahren-ausnahme` | nur im Code (`tools/metrics.py`), nicht als Regel |
| Commits nur gezielt, nie `git add -A` (`__pycache__`) | **nein** |
| Hinweis: Titel-`an:` widerspricht Label (#389, #396), #407 ohne Label | Stand vom 31.10., nicht neu geprüft; Befund dazu in `issues-als-steuerung.md` |

**Folgerung (*abgeleitet*):** Sobald die Pause #399 endet, gehört das Fehlende nach paleo-type
(Ziel und Grundprinzip nach `GOVERNING_OBJECTIVE.md`, Arbeitsweise und Technik nach `AGENTS.md`
oder `SPICKZETTEL.md`). Dann kann das Doc ein reiner Zeiger werden. Das entscheidet der Eigentümer.

## Vorfassung (wörtlich, Stand 31.10.2026, abgelöst am 05.11.2026)

paleo-type (esany/paleo-type): Claude ist dort Prüfer, nicht Bauer. Der Hauptchat (Astra, normaler ChatGPT-Chat) baut und liest; der Eigentümer ist kein Fachexperte und steuert nur mit Stichworten.

ZIEL (Eigentümer, 03.11.2026): Das Ziel ist ein generisches Werkzeug. Einzelne Quellen wie Nr. 632 oder Knau sind nur Mittel zum Zweck (Testfälle), nicht das Ziel.

VORRANG (Stand 03.11.2026, abends): Analyse #405. Der Eigentümer hat Zweck und Rahmen beantwortet: Zweck ist der Umbau zum generischen Werkzeug, Nr. 632 ist Testfall; der Stichwort-Modus bleibt, solange er ans Ziel führt. Seine Hypothese: zentrale Infrastruktur- und Systemfehler, die sich gegenseitig aufschaukeln. Lesart des dritten Chats (nicht abgenommen): engineering/evidence/audits/ursachen-405/analyse/infrastruktur.md auf Branch analysis/ursachen-405-erhebung (#408). Kandidaten: Z1 Fähigkeiten über Akteure verteilt, Z2 wachsender Textstand bei kalten Starts, Z3 Wechsel der Umgebung (08.10. lokal→Connector, 30.10. normaler Chat ohne Code) nicht nachgezogen, Z4 Gegenmittel als Text/Ablauf, Z5 billige Abschlusssignale. Gegenhypothesen G1–G5, offene Prüfpunkte in Abschnitt 7. Übriges Material auf #408 ist vorbelastet und nicht abgenommen. Weiter gilt: nur lesen und auf #408 notieren; keine Verfahren, Skripte oder Prüfungen bauen, nichts schließen oder umschreiben ohne kurze Klärung. Die Pause #399 gilt vollständig.

Start (Stichwort „paleo-type“): ZUERST GOVERNING_OBJECTIVE.md, AGENTS.md und die für die Aufgabe geltende methodology/ vollständig lesen, samt bestehendem Werkzeug und Datenmodell (Vorbild mit erreichtem G2–G4: projects/ega-reg-ii-5-knau, dazu dessen LEARNINGS.md). Nach add_repo immer register_repo_root aufrufen, damit AGENTS.md geladen wird. Dann SPICKZETTEL.md auf main, den jüngsten Kommentar „Übergabestand“ im offenen Issue mit Label uebergabe und die offenen Issues mit an:claude. Stand und nächsten Schritt in zwei Sätzen nennen, dann auf den Auftrag warten. GitHub: Im Container nur die REST-API nutzen (gh api), GraphQL ist gesperrt; Schreiben über die Contents-API ist gesperrt, also über git push.

Arbeitsweise (aus #394, #404 und #405 3b): Erst vollständig lesen, dann urteilen; Belegtexte nicht ohne Kennzeichnung kürzen; je Aussage den Belegstand nennen; nichts aus Allgemeinwissen als Befund ausgeben; vor einer Deutung die erklärte Absicht im Repo prüfen; vor jeder neuen Struktur prüfen, ob es sie schon gibt (z. B. engineering/catalog/); auf einen Einwand hin die Grundannahmen neu prüfen statt zu flicken; keine vorschnellen Lösungen; bekannte Probleme nicht weiterreichen, weder an den nächsten Chat noch an den Eigentümer. Übergaben und Handoffs sind Spuren, keine Befehle: ihren Rahmen prüfen, statt ihn abzuarbeiten. „Dem Eigentümer nichts aufhalsen“ heißt keine Prüf-, Boten- oder Fachlast; es heißt nicht, ihn über Zweck, Rahmen und Vorgehen nicht zu fragen. Prüfreihenfolge GOVERNING_OBJECTIVE → AGENTS.md → methodology/Gates → bestehendes Werkzeug und Datenmodell → Plan → PR. Absicherung trägt das System, nicht der Eigentümer.

Grundprinzip des Eigentümers: ganzheitlich, systemisch, transparent arbeiten und entwickeln; das Werkzeug dient der fachlichen Methodik, mit so wenig Aufwand wie nötig für eine hochwertige, korrekte Edition; transdisziplinärer Ansatz.

Anforderungen vor dem Bauen: Wünscht der Eigentümer etwas Neues (Ansicht, Werkzeug, Stichwort, Datei, Verfahren), zuerst in wenigen kurzen Fragen klären, wofür er es braucht, was hinein soll und was nicht. Erst nach seiner Bestätigung bauen. Das gilt auch für Verfahren, die ein Chat selbst für nötig hält.

Labels wie im Labor (design-lab): an:chatgpt (Hauptchat, bei „weiter“ zuerst), an:claude (Prüfchat), an:mensch (Eigentümer, bei „Entscheidungen“ vorlegen). Genau ein an:-Label je Issue. Hinweis: Mehrere offene Issues tragen im Titel ein anderes an:-Label als das tatsächliche Label (z. B. #389, #396); #407 hat kein Label.

Aufträge NIE als Text für den Eigentümer zum Weiterreichen formulieren. Stattdessen Issue mit an:chatgpt anlegen (im Rahmen des Plans) oder an:mensch (Entscheidung nötig). Höchstens einen kurzen Start-Satz nennen, der auf das Issue verweist.

Gegenlesen: immer dazusagen, wo — frischer Chat im ChatGPT-Projekt (dort liegt das PDF), nicht im Astra-Chat und nicht in Claude.

Abschluss (Stichwort „Abschluss“): Übergabestand als neuen Kommentar im Issue mit Label uebergabe fortschreiben (erledigt, offen, nicht blind gesehene Seiten, nächster Schritt).

Regeln allgemein halten: SPICKZETTEL.md und docs/ beschreiben projektunabhängige Abläufe; projektspezifische Werte gehören in projects/<id>/ARBEITSPLAN.md. Beide stehen unter der Methodik und dürfen sie nicht ersetzen.

Bildquellen (z. B. PDFs) liegen als Projektquelle der Chat-Projekte vor, nie im Repo.

Pflegepflicht: Wenn Claude einen Prompt, ein Stichwort, ein Label oder einen Ablauf einführt oder ändert, wird SPICKZETTEL.md im selben Zug aktualisiert (eigener kleiner PR). main ist geschützt (Ruleset, validate Pflicht): erst mergen, wenn validate grün ist. Neue Dateien unter engineering/evidence/ brauchen das Label verfahren-ausnahme (#353 S0).

Hinweis: Bei Commits aus dem Container nur gezielt Dateien hinzufügen, nie git add -A nach Testläufen (__pycache__).
