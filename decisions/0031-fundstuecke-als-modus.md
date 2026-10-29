---
status: Vorschlag
datum: 2026-10-29
entschieden_von: (nach der Antwort des Menschen eintragen)
dient: A04, A07, A10, A27
perspektive: fach, system
---

# 0031 · Fundstücke als fester Modus: Eingang, Sichtung, Prüfung, Aufnahme

`perspektive:` fach, system — der Anlass ist der Wissensfundus (Fach), der Weg dahin ist ein Ablauf (System).

**Anlass:** Der Eigentümer sammelt Fundstücke aus dem Netz (Skills, Repos, Texte, Werkzeuge,
Projekte) zunächst ungeprüft und kann oft nicht einschätzen, ob es ein echter Schatz oder
Marketing ist (Chat, 29.10.). Der Skill `fundstueck` bewertet bisher nur Werkzeuge und fremde
Skills, kennt keinen Eingang, keine Prüfung „Schatz oder Marketing“, keine Texte und Konzepte und
keine Regel, *welcher Bestandteil wohin* ins Labor geht.

**Entscheidung (Vorschlag):**

1. **Kein neuer Skill.** Der Skill `fundstueck` wird erweitert (A10, keine Doppelung).
2. **Eingang:** Der Eigentümer wirft einen Link mit einem Satz („was mich daran angesprungen
   hat“) in einen Chat, Claude oder Astra. Das Modell legt ein Issue `[Fundstück] <Name>` an
   (neue Vorlage „Fundstück“: Link, Satz des Eigentümers, Art, Feld). Ein Stapel wild gesammelter
   Links geht als **ein** Issue mit Liste hinein.
3. **Stufe 1 Sichtung (billig, Astra):** je Fundstück höchstens eine Viertelseite: Was ist es,
   wer steht dahinter, **Schatz-oder-Marketing-Prüfung** (unten), Vorschlag `vertiefen` ·
   `beobachten` · `verwerfen`. Beim Stapel: Sichtung für alle, vertieft wird nur Ausgewähltes.
4. **Stufe 2 Prüfung (nur bei `vertiefen`):** der bestehende Ablauf des Skills (Vergleich mit
   dem bisherigen Weg, Sicherheit, Unabhängigkeit, Integrationsgrad), wo möglich mit kleinstem
   eigenem Test (rendern, ausführen, nachlesen) statt Behauptung.
5. **Stufe 3 Aufnahme (Claude):** Stichprobe der Belege durch ein **anderes Modell** als das
   sichtende, dann je Bestandteil an den passenden Ort (Tabelle unten), PR, Zeile in `stand.md`.
   Zum Menschen gehen nur: Installation, Konten, Kosten, Sicherheit und alles, was eine Regel oder
   einen Skill ändert.
6. **Nichts geht verloren:** Auch Verworfenes bekommt eine Zeile (mit Grund), damit es nicht
   zweimal geprüft wird.

**Schatz oder Marketing — Prüffragen (jede mit Status belegt / abgeleitet / nicht belegt):**

| Prüfung | Schatz-Hinweis | Marketing-Hinweis |
|---|---|---|
| Wer steht dahinter, Geschäftsmodell | Person/Institution mit Werk, offenes Projekt | Firma mit Warteliste, Bezahlschranke, „Plattform“ |
| Behauptung gegen Beleg | Code, Paper, Beispiele, Daten, reproduzierbar | Superlative, Demo-Video ohne Code, „revolutionär“ |
| Unabhängige Stimmen | Rezeption in Fachkreisen, Zitate, Issues von Nutzern | nur eigene Kanäle, gekaufte Listen |
| Lebendigkeit | Commits, Antworten auf Issues, Versionsgeschichte | Sterne ohne Aktivität, letzte Änderung lange her |
| Neuigkeit gegenüber dem Labor | löst etwas, das wir nicht können | verpackt Vorhandenes (Prompt-Sammlung, Wrapper) |
| Lizenz, Datenwege | offen, lokal, austauschbar | Konto Pflicht, Daten gehen zum Anbieter |
| Kleinster Test | funktioniert wie beschrieben | nicht prüfbar oder scheitert |

Ergebnis in einem Wort: **Schatz** · **solide** · **unklar** · **Marketing**.

**Wohin welcher Bestandteil:**

| Bestandteil | Ort im Labor |
|---|---|
| Text, Paper, Person, Projekt als Referenz | `corpus/recherche.json` (oder `referenzen.json`, wenn der Eigentümer es auswählt) |
| Werkzeug, Dienst, MCP | `radar.md` (Ring nach Prüfung) |
| Methode, Ablaufprinzip aus fremdem Skill | Erweiterung eines bestehenden Skills oder Fachpakets (Rückfrage, D-033) |
| Fachwissen, Kanon, Qualitätskriterium | passendes Fachpaket |
| Idee für ein Werk | neues Experiment-Issue (`entwurf`) |
| nichts davon | Zeile „verworfen“ mit Grund |

**Alternativen:**
- Neuer Skill „Fundstücke“: verworfen, doppelt zu `fundstueck` (A10, A33).
- Alles direkt durch Claude: verworfen, teuer (0025); Sichtung ist Routine und passt zu Astra.
- Nur Sammeln ohne Stufen: verworfen, genau das ist das heutige Problem.

**Folgen:** Leichter: Fundstücke einwerfen ohne selbst zu prüfen; der Fundus wächst geordnet.
Schwerer: ein Issue je Fundstück (beim Stapel eins je Stapel). Ändert: Skill `fundstueck`, neue
Issue-Vorlage `.github/ISSUE_TEMPLATE/fundstueck.yml`, ggf. Feld für Verworfenes im Korpus-Schema.
Erprobt wird es zuerst an drei echten Fundstücken des Eigentümers, erst danach wird der Skill
geändert (Astras Hinweis vom 29.10.: erst anwenden, dann regeln).

**Rückgängig:** Datei auf „abgelöst“ setzen; Skill und Vorlage per Revert-PR zurück.
