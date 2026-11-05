---
dient: A07, A21, A26, A33, A34
datum: 2026-11-05
modell: Claude Opus 5.5 (Claude-App, Cloud-Sitzung)
status: Befund mit Vorschlag; Stoff für den Leitfaden „Systeme entwickeln“. Nichts beschlossen.
---

# Anforderungen sichern: wie aus Anforderungen ein echtes Werkzeug wird

Fragen des Eigentümers (Chat, 05.11.): In welcher Form sichern wir Anforderungen, als Issues oder
anders? Wie wird daraus ein echtes Werkzeug statt einer losen Hülle? Was braucht die KI wann an
Strukturen und Impulsen, nachhaltig, sparsam mit Tokens und pflegbar? Welchen Kontext braucht der
Code, was braucht nur der Mensch?

## Stand der Technik (November 2026)

- **Spezifikation zuerst** („spec-driven development“): Werkzeuge wie Kiro und GitHub Spec Kit
  führen durch Anforderungen → Entwurf → Aufgaben, jeweils als Markdown-Datei (*belegt*,
  Böckeler 2025). Kiro schreibt die Abnahmekriterien in EARS, einer festen Satzform „Wenn …, soll
  das System …“ aus dem Flugzeugbau (*belegt*, Wikipedia-Spiegel, codemyspec).
- **Drei Stufen** nach Böckeler (*belegt*): *spec-first*, die Spezifikation leitet eine Aufgabe und
  darf danach weg; *spec-anchored*, sie bleibt und begleitet die Weiterentwicklung; *spec-as-source*,
  nur noch die Spezifikation wird bearbeitet, der Code ist Ergebnis.
- **Kritik** (*belegt*, Böckeler): viele gleichförmige Markdown-Dateien, deren Durchsicht mühsamer
  ist als die des Codes; ein kleiner Fehler wurde zu vier Nutzergeschichten mit 16
  Abnahmekriterien; Agenten übergingen Hinweise der Spezifikation oder wandten Grundregeln zu
  weit an; die Gefahr einer falschen Sicherheit. Sie bevorzugt kleine, schrittweise Arbeit.
- **EARS ist Satzform, keine Prüfung** (*belegt*, codemyspec): Die Kriterien laufen nicht von
  selbst. Es braucht Tests, die sie ausführen.
- **Anthropic** (*belegt*, Claude-Code-Anleitung, Fassung 05.11.2026): eine kurze Datei
  `SPEC.md` aus einem Interview, danach eine frische Sitzung zum Bauen; eine dauerhafte
  Anweisungsdatei nur mit dem, was die KI nicht selbst aus dem Repo lesen kann; Prüfungen, die
  die KI ausführen kann; was nie brechen darf, als technische Sperre.

## Folgerung: Text trägt nur, wenn er eine von drei Rollen hat (*abgeleitet*)

| Rolle | Beispiel | Warum er nicht zur Hülle wird |
|---|---|---|
| **ausgeführt** | Test, Prüffall, Build-Prüfung, Schema | Er schlägt an, wenn das Werkzeug abweicht |
| **erzeugt** | Statusseite, Übersicht, Vorführung aus den echten Daten | Er kann nicht von den Daten abweichen |
| **entschieden** | Entscheidung mit Warum, Alternativen, Folgen | Er wird nicht befolgt, sondern nachgeschlagen |

Text, der nur *befolgt* werden soll (Regeln, Verfahren, Checklisten), ist die Hülle, die der
Eigentümer beobachtet. Er hält, solange jemand ihn liest und ernst nimmt; die Audits zeigen,
dass das nicht reicht (Labor-Audits Zusammenarbeit und paleo-type).

## Vorschlag: Wo Anforderungen leben

| Was | Form | Wo | Lebt wie lange |
|---|---|---|---|
| Absicht, Nutzer, Situation | Alltagssprache | Intent des Projekts (wie `intent.md`) | Jahre |
| Anforderung | eine Zeile mit Kennung und **Prüffrage** | Anforderungsliste im Repo (Daten oder Tabelle) | solange sie gilt |
| Abnahme einer Anforderung | **Prüffall**, der ausgeführt wird; dazu ein Satz „Wenn …, soll …“ | Tests / `evals/`, verweist auf die Kennung | wie die Anforderung |
| Auftrag | Issue: Ziel, Abnahme (Verweis auf Kennung), Grenzen | GitHub | bis erledigt |
| Aufgaben-Spezifikation | kurze Datei für eine Aufgabe | Branch | geht nach Abschluss in Tests und Entscheidungen auf |
| Begründung | Entscheidung | `decisions/` | Jahre |

**Issues sind also Aufträge, keine Anforderungen.** Sie werden geschlossen, liegen außerhalb des
Repos und wären eine weitere „Uhr“ für den Stand. Das Labor macht es für sich schon so:
Anforderungen A01–A34 in `intent.md`, Mechanismen nennen `dient: A..`, der Build erzeugt
`verknuepfung.md`. Was fehlt, ist der Schritt von der Prüffrage zum **ausgeführten** Prüffall.

## Welcher Kontext für wen

| Für | Was | Wann geladen |
|---|---|---|
| **KI, immer** | Prüfbefehle; irreführende Stellen; Entscheidungen, die nicht im Code stehen; was zweimal korrigiert werden musste. Nicht: Architekturbeschreibung, die KI liest das Repo selbst | jede Sitzung, deshalb kurz |
| **KI, je Aufgabe** | Ziel, Abnahme, Grenzen, Prüfbefehl | nur in dieser Aufgabe |
| **Code selbst** | Tests, Schemas für Daten, Namen, die sprechen; Kommentare nur, wo der Code täuscht | wird ausgeführt, nicht gelesen |
| **Mensch** | Intent, Warum, Entscheidungen in Alltagssprache, Vorführungen und erzeugte Ansichten, Abnahme mit Screenshot | wenn er urteilt |

## Phasen und Impulse

1. **Klären:** „Frag mich, bis du die Abnahme formulieren kannst. Schreib sie als ‚Wenn …, soll …‘.“
2. **Durchstich:** „Bau den kleinsten Weg von der Eingabe bis zur Ansicht und zeig ihn mir.“
3. **Ausbauen:** je Schritt eine Abnahme; erst den Prüffall, der fehlschlägt, dann der Code; frische
   Sitzung je Schritt.
4. **Abnehmen:** Vorführung, Fehler mit Absicht, Zweitblick durch ein anderes Modell.
5. **Pflegen:** Die Aufgaben-Spezifikation löst sich in Prüffälle und Entscheidungen auf; Text,
   der keine der drei Rollen hat, wird gestrichen.

## Grenzen

- Ob der Weg in paleo-type trägt, ist nicht erprobt. paleo-type ist pausiert (#399); dort wird
  nichts gebaut.
- Die Zahlen und Urteile zu Kiro und Spec Kit stammen aus Böckeler (Oktober 2025) und Zweitquellen;
  neuere Fassungen sind nicht geprüft.

## Quellen

- Böckeler, B.: [Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl](https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html), martinfowler.com, 15.10.2025
- Anthropic: [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices), Fassung 05.11.2026
- [EARS Notation Explained](https://codemyspec.com/blog/ears-notation), CodeMySpec
- Labor: `research/2026-10-audit-zusammenarbeit/befunde.md`, `research/2026-10-audit-paleo-type/befunde.md`, `intent.md`, `verknuepfung.md`
