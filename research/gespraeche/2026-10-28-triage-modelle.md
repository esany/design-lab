# Triage 28.10., spätabends: Blocker, Zuständigkeit, welches Modell

Frage des Eigentümers: Was kann Claude noch abarbeiten, das Limit liegt bei über 50 % des
Monats? Welche Blocker liegen bei Claude, damit Astra arbeiten kann? Sind die Aufträge zu groß
geschnitten? Wie müssen Aufträge für Work/Codex aussehen, wenn dort nur Luna 5.6 läuft?
Grundlage: alle offenen Issues und PRs, frisch abgefragt (21:10). Einordnungen sind
*abgeleitet*. Was die Modelle können, ist *nicht belegt*, solange die Prüffälle nicht gelaufen
sind.

## Kurz, in Worten

- **Opus ist zu teuer für das meiste, was ansteht.** Fast alles Offene ist Aufräumen,
  Umetikettieren, Übernehmen oder Prüfen nach festem Raster. Das kann Sonnet. Opus braucht es nur
  noch für zwei Dinge: das Muster „wie schreibe ich Aufträge“ (unten als Entwurf, schon erledigt)
  und später die Zusammenfassung der Untersuchung.
- **Der größte Blocker für Astra ist nicht ein Issue, sondern eine Unbekannte:** Ob Astra ins
  Labor schreiben kann, wissen wir nicht. Kann Astra es nicht, müsstest du jedes Ergebnis von Hand
  hineinkopieren. Das klärt genau ein kleiner Auftrag: die Prüffälle mit einem zweiten Modell.
  Der sollte zuerst an Astra gehen.
- **Ein Blocker ist hausgemacht:** Die Prüffälle warten auf das Ende der Issue-Arbeit, und die
  Issue-Arbeit wartet auf die Prüffälle. Das ist ein Kreis. Ihn aufzulösen, ist meine Aufgabe.
- **Die Untersuchungsaufträge sind zu groß geschnitten**, für kleinere Modelle sowieso und mit
  dem jetzigen Limit auch für Claude. Vorschlag zum Zuschnitt unten.

## Was bei Claude liegt (Aufräumen, Sonnet reicht)

| Was | warum | Wirkung |
|---|---|---|
| Den Kreis zwischen Issue-Arbeit und Prüffällen auflösen: Issue-Arbeit schließen (Skill, Vorlage und Prüffall sind geliefert), die Abnahme geht an die Prüffälle | Kreisabhängigkeit | die Prüffälle werden frei für Astra |
| Bug „#31 falsch gelesen“ schließen | seine einzige Frage (Plan freigeben) ist beantwortet | weniger offene Punkte |
| Bug „arbeitet aus dem Chat“ und die TODO-Verwechslung als Fallmaterial an Untersuchung bzw. Prüffälle hängen und schließen | sind Fälle, keine Aufgaben | dto. |
| Plan von „an:mensch“ auf „an:claude“ | alle drei Fragen beantwortet | richtige Zuständigkeit |
| Vorschlag „Merkzettel: Bestandsaufnahme liegt vor“ übernehmen | Arbeit nicht wegwerfen (Eigentümer) | Merkzettel aktuell |
| „Freigabehinweise angleichen“ neu verknüpfen: Es wartet nicht auf die Klicks, sondern auf die Übernahme der Audit-Antwort (dort steht die Entscheidung zum Branch-Schutz) | falsche Abhängigkeit | Astra kann nach deinem Ja zur Audit-Antwort starten |
| Die Aufträge für Astra und Codex im Format unten neu schreiben | sonst unklar für kleinere Modelle | Delegation wird möglich |

## Was bei dir liegt

1. **Audit-Antwort übernehmen?** („Hinweise statt Vorgaben“, Branch-Schutz begründet) Davon
   hängt der erste Auftrag an Astra ab. *Empfehlung: ja.*
2. **Sicherung der Werke formal übernehmen?** Praktisch ist sie schon umgesetzt, es gibt das
   Werke-Repo, und der Flyer liegt dort. *Empfehlung: ja.*
3. **Verknüpfung Anforderungen ↔ Regeln übernehmen?** Erst nach 1 und 2. *Empfehlung: ja.*
4. **Branch-Schutz:** die zwei Minuten Klicks.
5. **Einmal prüfen, ob Astra (ChatGPT) mit GitHub verbunden ist.** Nur dein Konto kann das sehen.
6. **Bug „Sicherungs-Repo“:** Ist er mit dem Werke-Repo erledigt?

## Wer macht was (Vorschlag)

| Auftrag | Modell | Zuschnitt | Blocker |
|---|---|---|---|
| Prüffälle mit zweitem Modell (zeigt, was Astra kann und ob Astra schreiben kann) | **Astra** | passt | nur der Kreis (Claude) |
| Freigabehinweise angleichen | **Astra** | passt, klein | Audit-Antwort (du) |
| Recherche Möglichkeitsraum | **Astra** recherchiert, **Sonnet** liest gegen (Belegpflicht) | passt, Ausgabe festlegen | Zuständigkeit (du); Ausgabeweg (Prüffälle) |
| Farbkontrast der Textfarben messen, Optionen als Tabelle | **Codex/Luna** | passt, mechanisch | Freigabe (du); die Farbwahl bleibt bei dir |
| Studie unabhängig durchklicken, mit Screenshots | **Codex/Luna** | passt | Freigabe (du); ob Codex einen Browser hat, ist *nicht belegt* |
| Untersuchung der Modellfehler | aufteilen ↓ | **zu groß** | Umfang (du) |
| ↳ a · die Fehlerberichte dieses Labors auswerten (rund 10 Bugs, ≈ 26.000 Tokens) | **Sonnet** | klein | — |
| ↳ b · je früherem Repo die Prüfberichte als Karteikarten erfassen | **Astra**, wenn es Zugriff hat, sonst Sonnet | ein Auftrag je Repo | Zugriff (Prüffälle); D3sign: Freigabe auf GitHub (du) |
| ↳ c · Zusammenfassung, Stichproben gegen Quelle | **Opus** | klein | a, b |
| Modellprofile | über Kreuz: jedes Profil schreibt ein **anderes** Modell | ein Auftrag je Modell | Untersuchung, Prüffälle |
| Aufträge besser schreiben | **Opus** (Entwurf unten), Abnahme über einen Prüffall mit Luna | klein | — |
| Regeln prüfen | **Sonnet** nach festem Raster, Urteil bei dir | in Gruppen von je ≈ 8 Regeln | Verknüpfung (PR) |
| Sparmaßnahmen mit Messung | **Sonnet** oder Codex | später | Profile, Aufträge |
| Hilfe beim Entwerfen | **Opus** + du | später, am Werk | Recherche |
| Werke (Raster, Website …) | ruhen | — | System zuerst (deine Entscheidung) |

Modellwechsel: Zwischen Opus und Sonnet wechselst du im Chat (`/model`). Unteraufgaben kann
Claude selbst an Sonnet oder Haiku geben. Das zählt aber ebenfalls auf dein Claude-Limit, nur
weniger (*nicht gemessen*).

## Entwurf: Aufträge für kleinere Modelle (Luna 5.6 in Work/Codex, auch Astra)

Ein Vorschlag, noch keine Regel. Die Abnahme erfolgt über einen ersten echten Auftrag, etwa den
Farbkontrast, und später im Auftrag „Aufträge besser schreiben“.

**Grundsatz:** Ein kleineres Modell soll nichts erraten müssen. Alles Urteilen bleibt bei dir
oder beim Orchestrator. Das kleinere Modell führt aus, misst und erfasst.

1. **Ein Ergebnis, eine Datei, ein Branch, ein Pull Request.** Zielpfad wörtlich angeben.
2. **Eingang vollständig:** höchstens fünf Pfade, die das Modell liest. Kein „siehe Chat“, kein
   „du weißt ja“. Begriffe des Labors, die es braucht, stehen im Auftrag in einem Satz erklärt.
3. **Gerüst mitgeben:** Die Ausgabedatei liegt als Vorlage mit Überschriften und Tabellenköpfen
   bei. Das Modell füllt aus und erfindet keine Struktur.
4. **Tun und Nicht-tun als Liste:** zum Beispiel „keine Farben wählen“, „keine Regeln, Skills,
   `AGENTS.md` oder Entscheidungen ändern“, „nichts löschen“.
5. **Keine Geschmacks- oder Bedeutungsentscheidung.** Wo Optionen nötig sind: Tabelle mit festen
   Spalten (Option · Messwert · Folge · Risiko), Empfehlung nur nach genannten Kriterien.
6. **Prüfbare Abnahme:** zwei bis fünf Ja-Nein-Sätze, möglichst mit einem Befehl prüfbar (z. B.
   `node tools/build.mjs` ohne Fehler; jede Tabellenzeile hat einen Messwert; jede Aussage hat
   einen Status belegt · abgeleitet · nicht belegt).
7. **Stopp-Regel:** „Wenn X unklar ist oder Y fehlt: eine Frage als Kommentar, nicht raten,
   nicht weitermachen.“ Dazu eine Obergrenze für den Umfang.
8. **Nötige Werkzeuge nennen:** ins Repo schreiben, Browser, Screenshots, Node. Fehlt eines,
   sagt das Modell es zuerst.
9. **Rückmeldung in festem Format:** Ergebnis · geprüft / nicht geprüft · offen (höchstens drei
   Fragen). Das Modell erklärt seine Arbeit nicht für bestanden. Die Prüfung macht ein anderes
   Modell gegen die Abnahme.
10. **Eine Sprache:** kurze Sätze, Deutsch nach Duden (0023), keine Abkürzungen ohne Erklärung.

**Unterschied Astra und Luna (Angaben des Eigentümers, 0025):** Astra im normalen Chat ist ohne
Limit, kann aber womöglich nicht ins Repo schreiben (*nicht getestet*). Work/Codex kann ins Repo
schreiben, verbraucht Limits und läuft auf dem kleineren Luna 5.6. Daraus folgt: Lese- und
Rechercheaufträge an Astra, eng geschnittene Schreib- und Messaufträge an Codex.
