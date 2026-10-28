# Verknüpfung — Anforderungen und Mechanismen

> Erzeugt von `node tools/build.mjs` aus `intent.md` und der Kopfzeile `dient:` jeder
> Entscheidung und jedes Skills. Nicht von Hand ändern. Zweck: A33 „Nichts verrottet“.

**Stand der 34 Anforderungen:** 11 erfüllt · 14 teilweise · 9 offen (laut `intent.md`).

## Auffällig — die Pflege prüft das monatlich

- **Anforderungen ohne Entscheidung oder Skill:** A02, A03, A29, A30, A09
- **Auf Probe ohne Auswertungsdatum** (`auswerten:` fehlt): [0003](decisions/0003-autonomie-nach-umkehrbarkeit.md), [0004](decisions/0004-gemeinsame-anweisung-und-skills.md), [0007](decisions/0007-belegpflicht.md), [0013](decisions/0013-vorlagen.md), [0016](decisions/0016-erklaerbarkeit-in-stufen.md), [0018](decisions/0018-freigabe-in-alltagssprache.md), [0024](decisions/0024-kein-wissen-nur-im-chat.md)
- **Vorschläge, die auf Antwort warten:** keine

## Je Anforderung

| Nr. | Anforderung | Stand | Entscheidungen | Skills |
|---|---|---|---|---|
| A01 | gesamten Entwurfsprozess | offen | [0006](decisions/0006-start-methoden.md), [0011](decisions/0011-erste-studie.md) | [bertin-semiologie](.agents/skills/bertin-semiologie/SKILL.md), [bildanalyse](.agents/skills/bildanalyse/SKILL.md), [konkrete-kunst](.agents/skills/konkrete-kunst/SKILL.md), [studie](.agents/skills/studie/SKILL.md) |
| A02 | Übergeordnete, strategische Fragestellungen | teilweise | — | — |
| A03 | Profi-Werkzeuge, keine Bastellösung | offen | — | — |
| A04 | Fachexpertise, Best Practice und Stand der Technik als Tooling | teilweise | [0006](decisions/0006-start-methoden.md), [0017](decisions/0017-itten-in-oklch.md), [0021](decisions/0021-fachpakete.md), [0023](decisions/0023-duden-als-basis.md) | [bertin-semiologie](.agents/skills/bertin-semiologie/SKILL.md), [bildanalyse](.agents/skills/bildanalyse/SKILL.md), [fachpaket-form](.agents/skills/fachpaket-form/SKILL.md), [fachpaket-vermitteln](.agents/skills/fachpaket-vermitteln/SKILL.md), [farbkontraste-itten](.agents/skills/farbkontraste-itten/SKILL.md), [isotype](.agents/skills/isotype/SKILL.md), [konkrete-kunst](.agents/skills/konkrete-kunst/SKILL.md) |
| A05 | Rolle der KI je Kontext | teilweise | [0021](decisions/0021-fachpakete.md) | [fachpaket-form](.agents/skills/fachpaket-form/SKILL.md), [fachpaket-vermitteln](.agents/skills/fachpaket-vermitteln/SKILL.md) |
| A06 | Mehrwert gegen das Mittelmaß | teilweise | [0005](decisions/0005-prinzipien.md) | [kritik](.agents/skills/kritik/SKILL.md) |
| A07 | Verlässliche Ergebnisse | teilweise | [0007](decisions/0007-belegpflicht.md), [0023](decisions/0023-duden-als-basis.md) | [belegpflicht](.agents/skills/belegpflicht/SKILL.md) |
| A28 | Gestaltung dient | teilweise | [0022](decisions/0022-gestaltung-dient.md) | [fachpaket-form](.agents/skills/fachpaket-form/SKILL.md) |
| A29 | Strukturen sichtbar und selbst änderbar | offen | — | — |
| A30 | Raster als Programm | offen | — | — |
| A08 | Alle Einstellungen und Funktionen nachvollziehbar | teilweise | [0008](decisions/0008-website-gestaltung.md), [0016](decisions/0016-erklaerbarkeit-in-stufen.md) | [studie](.agents/skills/studie/SKILL.md) |
| A09 | KI-Tooling und Assistenz | teilweise | — | — |
| A10 | Nicht nachbauen, was es fertig gibt | teilweise | — | [fundstueck](.agents/skills/fundstueck/SKILL.md) |
| A11 | Unabhängigkeit, Open Source, kein Lock-in | teilweise | [0004](decisions/0004-gemeinsame-anweisung-und-skills.md), [0009](decisions/0009-tokens-und-build.md) | — |
| A12 | Vorhandene Abos nutzen | offen | [0014](decisions/0014-kreuzpruefung-claude-codex.md), [0025](decisions/0025-arbeitsteilung-modelle.md) | — |
| A13 | Kosten im Griff | erfüllt | [0025](decisions/0025-arbeitsteilung-modelle.md) | — |
| A14 | Online, geräteunabhängig, ohne Git-Wissen | erfüllt | [0008](decisions/0008-website-gestaltung.md) | — |
| A15 | Sicherheit | erfüllt | [0001](decisions/0001-oeffentlich-und-lizenzen.md), [0027](decisions/0027-main-schuetzen.md) | [fundstueck](.agents/skills/fundstueck/SKILL.md) |
| A16 | Vertraulichkeit | erfüllt | [0001](decisions/0001-oeffentlich-und-lizenzen.md), [0026](decisions/0026-werke-eigenes-repo.md) | — |
| A17 | Arbeitsteilung Gestalter–Maschine | erfüllt | [0005](decisions/0005-prinzipien.md), [0020](decisions/0020-d3sign-prinzipien.md), [0028](decisions/0028-hinweise-statt-vorgaben.md) | — |
| A18 | Kein Klick-Durchreicher | erfüllt | [0003](decisions/0003-autonomie-nach-umkehrbarkeit.md), [0019](decisions/0019-selbststaendig-im-rahmen.md) | — |
| A19 | Transparent, nachvollziehbar, rückgängig | erfüllt | [0002](decisions/0002-freigabe-per-pull-request.md), [0003](decisions/0003-autonomie-nach-umkehrbarkeit.md), [0010](decisions/0010-automatische-pruefungen.md), [0024](decisions/0024-kein-wissen-nur-im-chat.md), [0026](decisions/0026-werke-eigenes-repo.md), [0027](decisions/0027-main-schuetzen.md) | — |
| A20 | Offene Punkte und Unsicherheiten gemeinsam klären | erfüllt | [0013](decisions/0013-vorlagen.md), [0019](decisions/0019-selbststaendig-im-rahmen.md) | [issue](.agents/skills/issue/SKILL.md) |
| A21 | Keine Strukturen ohne Freigabe | teilweise | [0002](decisions/0002-freigabe-per-pull-request.md) | — |
| A22 | Kein Entwickler-Review | erfüllt | [0013](decisions/0013-vorlagen.md), [0018](decisions/0018-freigabe-in-alltagssprache.md) | [issue](.agents/skills/issue/SKILL.md) |
| A23 | Lebendig und frisch | teilweise | [0012](decisions/0012-radar-bewertungen.md), [0015](decisions/0015-geplante-pflege.md) | [pflege](.agents/skills/pflege/SKILL.md) |
| A24 | Alles ist Experiment | erfüllt | [0011](decisions/0011-erste-studie.md) | [studie](.agents/skills/studie/SKILL.md) |
| A25 | Modular | teilweise | [0009](decisions/0009-tokens-und-build.md) | — |
| A26 | Gemeinsames Projektgedächtnis | teilweise | [0004](decisions/0004-gemeinsame-anweisung-und-skills.md), [0010](decisions/0010-automatische-pruefungen.md), [0014](decisions/0014-kreuzpruefung-claude-codex.md), [0024](decisions/0024-kein-wissen-nur-im-chat.md), [0025](decisions/0025-arbeitsteilung-modelle.md), [0029](decisions/0029-merkzettel-je-thema.md), [0030](decisions/0030-perspektive-und-folgen-in-entscheidungen.md) | [issue](.agents/skills/issue/SKILL.md), [kritik](.agents/skills/kritik/SKILL.md) |
| A27 | Fundstücke jederzeit einbringen | erfüllt | [0012](decisions/0012-radar-bewertungen.md) | [fundstueck](.agents/skills/fundstueck/SKILL.md) |
| A31 | Abhängigkeiten und Reihenfolge | offen | — | [issue](.agents/skills/issue/SKILL.md) |
| A32 | Freigabe ist nicht Umsetzungsreife | offen | — | [issue](.agents/skills/issue/SKILL.md) |
| A33 | Nichts verrottet | offen | [0024](decisions/0024-kein-wissen-nur-im-chat.md), [0029](decisions/0029-merkzettel-je-thema.md), [0030](decisions/0030-perspektive-und-folgen-in-entscheidungen.md) | [issue](.agents/skills/issue/SKILL.md), [pflege](.agents/skills/pflege/SKILL.md) |
| A34 | Tokenökonomie | offen | [0025](decisions/0025-arbeitsteilung-modelle.md), [0029](decisions/0029-merkzettel-je-thema.md), [0030](decisions/0030-perspektive-und-folgen-in-entscheidungen.md) | [issue](.agents/skills/issue/SKILL.md) |
