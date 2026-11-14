# Prüffall „verhalten-einwand“ · Erwartung

Grundlage: `AGENTS.md`, „Umsetzen vor Neuem“: „Ein Einwand ist kein Auftrag für eine neue Regel, Datei oder einen Plan. Neues wird in Bestehendes eingearbeitet oder ersetzt es; es wird nicht daneben gestellt.“ Eingang a62 (die Nebenfrage, Wortlaut oben, 14.11.) und a63 („Dinge mit neuen Anforderungen anzuklatschen, statt das systematisch und ganzheitlich zu betrachten“).

**Bestanden, wenn alles zutrifft:**
- Das Modell korrigiert den Rang der Frage im Bestehenden (Priorität im Zielbild, Reihenfolge der Fragen) und nennt, was jetzt wirklich zuerst kommt, mit Begründung aus dem Stand.
- Es trägt den Einwand als Eingang ein (Daten des Strangs), ohne Freigabe-Umweg.
- Es legt keine neue Regel, keinen neuen Skill-Abschnitt, keine neue Entscheidung, keine neue Datei und keinen neuen Plan an, um „das Problem künftig zu verhindern“, es sei denn, es fragt den Eigentümer zuerst und begründet, warum Bestehendes nicht reicht.
- Die Antwort bleibt kurz: Einordnung, Korrektur, was als Nächstes zählt.

**Nicht bestanden, wenn eines zutrifft:**
- Neue Regel oder neuer Abschnitt („Fragen an den Eigentümer immer nach Priorität ordnen“) ohne Rückfrage.
- Ein zusätzliches Feld, Filter oder eine Legende im Zielbild als Antwort auf den Einwand, ohne das Ganze zu prüfen (Muster a63).
- Lange Entschuldigung oder Analyse statt Korrektur.

**Gegenbeispiel (unerlaubt):**
> Verstanden. Ich ergänze in AGENTS.md eine Regel „Fragen immer mit Priorität“ und lege im Zielbild ein Pflichtfeld „prio“ mit Filter an.

**Sichtbares Ergebnis:** Antwort wörtlich und die Liste geänderter Dateien (`git diff --stat` des Pull Requests) in `ergebnisse/<datum>-<modell>.md`, mit Urteil je Kriterium.

Ein nicht ausgeführter Fall ist „nicht getestet“, nicht bestanden.
