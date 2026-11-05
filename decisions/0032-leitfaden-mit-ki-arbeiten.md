---
status: freigegeben (auf Probe)
auswerten: 2026-12-05
datum: 2026-11-05
entschieden_von: Eigentümer im Chat (05.11.2026): Ort Labor-Website, Umfang Grundlagen und Werkzeugentwurf (Bezug paleo-type), Pflege monatlich
dient: A05, A08, A23, A27
perspektive: gebrauch, system
---

# 0032 · Leitfaden „Mit KI arbeiten“ auf der Labor-Website

`perspektive:` gebrauch, system. Der Leitfaden dient dem Eigentümer bei der Arbeit (Gebrauch).
Die monatliche Pflege hält ihn aktuell (System).

**Anlass:** Ein Fundstück (Palmer, „Expertenrollen machen KI langsamer“, 05.11.) brachte dem
Labor nichts Neues, wohl aber dem Eigentümer. Er will wissen, wie er KI am wirksamsten für seine
Projekte nutzt und was überholt ist. Das Wissen soll laufend aktuell gehalten werden,
Änderungen sollen sichtbar sein, jede Regel soll in Stufen erklärt werden (Regel → warum →
Quellen), und das Ganze soll im Browser lesbar sein.

**Entscheidung:**

1. Der Leitfaden liegt als Daten in `leitfaden/eintraege.json`. Der Build erzeugt daraus
   `leitfaden/index.html` auf der Labor-Website und prüft die Daten: Pflichtfelder, Status,
   Verweise auf den Korpus, Laborbelege, Verweise der Einträge untereinander.
2. Es gibt drei Bereiche: **Grundlagen**, **Werkzeuge entwerfen** (komplexe Vorhaben über viele
   Sitzungen, mit Erfahrungen aus paleo-type, Wissensarbeit und dem Labor) und **Überholt**.
3. Jeder Eintrag hat drei Stufen (A08): die Regel mit einem Satz, ausklappbar „Warum?“ und darin
   ausklappbar „Hintergrund und Quellen“. Dazu Belegstatus und Prüfdatum.
4. Externe Quellen stehen im Korpus (`corpus/recherche.json`, Feld `labor`) und werden nur per
   ID verwiesen. Es entsteht keine zweite Quellenliste.
5. Überholtes wird nicht gelöscht: Der Eintrag erhält `status: veraltet`, das Datum und einen
   Verweis „stattdessen“. Jede Änderung bekommt eine Zeile in `aenderungen`. Die Seite zeigt
   diese Liste, der Git-Verlauf der Datei zeigt den Rest.
6. Die monatliche Pflege prüft den Leitfaden (Skill `pflege`, Abschnitt „Leitfaden“). Prüfdaten
   und neue Quellen darf sie selbst übernehmen. Neue oder überholte Einträge legt sie dem
   Eigentümer als kurze Liste vor.

**Alternativen:**
- Privates Artifact außerhalb des Repos: verworfen. Es würde nur auf Zuruf aktualisiert, hätte
  keinen Verlauf und keine Prüfung.
- Markdown-Seite im Repo: verworfen. Sie lässt sich nicht in Stufen aufklappen, und Status und
  Verweise würden nicht geprüft.
- Einträge als Fachpaket (Skill): verworfen. Ein Skill richtet sich an Modelle, der Leitfaden an
  den Menschen. Was davon für Modelle gilt, steht bereits in den Laborregeln.

**Folgen:** Leichter: Wissen über die Arbeit mit KI an einem Ort, mit Herkunft und Datum, auch
auf dem Handy lesbar. Schwerer: Die Pflege hat einen Punkt mehr, und Einträge veralten sichtbar,
wenn sie nicht gepflegt werden (`geprueft`). Neu oder geändert: `leitfaden/`, ein Abschnitt
in `tools/build.mjs`, Stile in `assets/lab.css`, ein Link auf der Startseite, der Skill `pflege`
und zwölf Quellen im Korpus.

**Rückgängig:** Diese Datei auf „abgelöst“ setzen, den PR zurücknehmen. Die Korpuseinträge
können bleiben.
