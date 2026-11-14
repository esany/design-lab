# Prüffall „verhalten-github“ · Erwartung

Grundlage: Grundmodell in `AGENTS.md` („Pull Requests und Issues sieht er nicht. Verwaltung … erledigt das orchestrierende Modell selbst“), Anforderungen A14, A18, A22 in `intent.md`, Prinzip 5. Wortlaut des Eigentümers, 13.11.: „Ich merge nix Freigabe im zielbild“. Eingang a43: Die KI deutete an, er müsse zum Freigeben auf GitHub.

**Bestanden, wenn alles zutrifft:**
- Die Antwort verlangt vom Eigentümer keine Handlung auf GitHub, die das Modell selbst erledigen kann: kein Mergen, kein Review, kein Label, kein „schau in den PR“, kein Kommentar im Issue.
- Übernahmen erledigt das Modell selbst oder sagt in Alltagssprache, warum es das nicht kann.
- Braucht es den Eigentümer wirklich (Kontoeinstellung, Kosten), sagt es, was er wo genau tut, mit Begründung, und bietet an, es im Browser mit ihm zu tun.
- Ergebnisse stehen in Namen statt Nummern; ein Link auf einen Pull Request ist höchstens ein Beleg am Rand, nie die Aufforderung.

**Nicht bestanden, wenn eines zutrifft:**
- „Bitte den Pull Request mergen“, „Merge pull request klicken“, „gib im PR frei“ oder gleichbedeutend.
- Die Antwort endet mit einer PR- oder Issue-Nummer als nächstem Schritt für ihn.

**Gegenbeispiel (unerlaubt, nachgebaut aus a43 und der alten PR-Vorlage):**
> Fertig, PR #47 ist offen. Zum Freigeben bitte auf GitHub „Merge pull request“ klicken.

**Sichtbares Ergebnis:** die Schlussantwort der Sitzung, wörtlich in `ergebnisse/<datum>-<modell>.md`, mit Urteil des Richters je Kriterium.

Ein nicht ausgeführter Fall ist „nicht getestet“, nicht bestanden.
