# #49 – Quellenforensik: zwei vom Eigentümer bereitgestellte Synthese-ZIP-Archive

**Prüfdatum:** 2026-10-29. **Status:** Quellenprüfung, nicht Kanonisierung. **Vertraulichkeit:** `esany/Synthese` ist privat; das Design-Lab ist öffentlich. Hier werden nur Dateizahlen, Prüfsummen und abstrakte Befunde abgelegt, **keine vertraulichen Fachtexte**.

## Identität und Integrität der tatsächlich gelesenen Originalarchive

| Originaldatei | Byte | SHA-256 (durch lokales Hashing) | ZIP-Einträge | Integrität |
|---|---:|---|---:|---|
| `bildsysteme_ssot_repro_full_20260703_v0_3_plan_alignment.zip` | 59.655.965 | `8f0ff6610e2284bf7c8d1ea416092adf1b21d6cf92aed5304b38308dc247e362` | 494, einschließlich Verzeichnisse und eingebetteter Archive | `ZipFile.testzip()` ohne Fehler |
| `SSOT_MODEL_BILDSYSTEM_LAYER_REBASE_v0_1.zip` | 364.543 | `bdf1d5fdc04cdf887a4c54820bf166074976bc689cd276d100cbd95791d9dd17` | 245 | `ZipFile.testzip()` ohne Fehler |

Die Prüfsumme des großen Pakets **stimmt bytegenau** mit der in `Synthese` für den noch fehlenden historischen v0.3-Snapshot angegebenen SHA-256 überein. Das ist ein **positiver Identitätsbeleg**, keine automatische fachliche Validierung und kein Nachweis eines Imports nach Git.

## Erschließungstiefe

**Belegt durch direkte Inspektion:** Das große Paket enthält 54 eingebettete ZIP-Archive; alle 54 ließen sich als ZIP öffnen, zusammen mit 6.978 darin verzeichneten Einträgen (einschließlich sich überschneidender Versionen). Der Baum enthält historische Rohtexte, Versionen und Artefakte aus Modell-, Formfindungs-, Runtime-, Renderer- und Testarbeiten. Die Zahl 6.978 ist keine Zahl einzigartiger wissenschaftlicher Dokumente. Das kleinere ZIP enthält 198 Markdown-, 30 YAML-, 11 Diff- und 6 JSON-Dateien; vor allem modulweise Provenienz, Arbeitskernel, Bildsystem-Querschichten, Formverhalten und Prüfmechanismen.

**Gelesene Originalpassagen:** README und Provenienzregister des Layer-Rebase, Kernel-Definition, Prozess-Provenienz, Design-Knowledge-Arbeitsstand, Artefaktinventar und Integritätshinweis aus dem v0.3-Paket; ergänzend gezielte Dateinamensuche und Formalkontrolle der verschachtelten ZIPs. **Nicht geprüft:** alle ca. 7.000 eingebetteten Einzeltexte semantisch, jede interne Hash-Zeile gegen jedes Einzelartefakt, lauffähige Renderer oder externe wissenschaftliche Fundstellen. Es wäre falsch, diese Untersuchung als vollständiges Deep-Audit aller nested Quellen auszugeben.

## Sind das fehlende Inhalte? Befund nach Belegebene

| Befund | Status | Erklärung |
|---|---|---|
| Das im privaten Repo explizit als noch nicht importiert markierte maßgebliche v0.3-Paket liegt nun vor. | **belegt** | Exakte SHA-256-Übereinstimmung und lesbares ZIP. |
| v0.3 enthält ursprüngliche Arbeitsmaterialien, die im privaten Repo nur per Inventar/Manifest erwähnt wurden. | **belegt** | Tatsächliche Rohtext- und nested-Paket-Einträge gegenüber dem Git-Dateibaum. |
| Das Layer-Rebase-ZIP enthält eine ausführlichere modulweise Modell- und Provenienzebene als die konsolidierte Git-Arbeitsfassung. | **belegt** | Dateistruktur, Modulquellen und zusätzliche Kernel-/Querschicht-Dateien direkt geprüft. |
| Das Layer-Rebase ist eine neuere, **gültige** fachliche Endfassung. | **nicht belegt** | ZIP bezeichnet sich selbst als candidate; Versionsname `v0.1` und Dateiinhalt beweisen weder Entstehungszeit noch Approval oder Überlegenheit. |
| Das große v0.3-Paket beinhaltet sämtliche historisch jemals vorhandenen Texte. | **nicht belegt** | Paketbeschreibung beschränkt Vollständigkeit auf die damals **erreichbare Arbeitsumgebung**. |
| Eine vollständige, wissenschaftlich belastbare Bibliografie aller zentralen Theoriequellen sei enthalten. | **nicht belegt** | Es existieren Provenienzlisten von Paket-/Prozessquellen; eine systematisch geprüfte externwissenschaftliche Zitationskette wurde bisher nicht ermittelt. |

## Wissenschaftlich entscheidender Unterschied

**Prozessprovenienz ≠ Theoriebeleg.** Verweise von Modulen auf ältere ZIPs und Plug-in-Fassungen können die Versionierung des entworfenen Systems rekonstruieren. Sie belegen aber **nicht automatisch**, ob eine theoretische Aussage aus einer identifizierbaren publizierten Originalquelle stammt und in ihrem Kontext richtig eingesetzt ist. Die ältere Sicherung verbessert damit die historische Rekonstruierbarkeit erheblich, löst aber die im Forschungs-Issue #49 identifizierte Beleg-zu-Aussage-Lücke nicht selbst.

**Kein Kurzschluss bei den Versionen:** Die ältere Sicherung, eine eigenständige Layer-Rebase-Kandidatenfassung und das aktuelle Git-Arbeitsmodell sind getrennte Evidenzobjekte. Eine jüngere Zusammenfassung kann eine ältere Quellenschicht verdichten; fehlende Volltextdateien im Git beweisen für sich weder Wissensverlust noch inhaltliche Verdrängung. Aussagen über tatsächliche Änderungen brauchen paarweise Textvergleiche am selben Fachbegriff, einschließlich Geltungs- und Versionsstatus.

## Forschungsfolgen innerhalb der bestehenden Leitfragen 1–3

- **Modi:** Historische Produkt-/Praxisfälle und Systemmodell-Konsolidierung müssen getrennt untersucht werden; die ZIPs liefern hierfür Material, keine fertige Deutung.
- **Entwurfsbewegung:** Die Dateifamilien ermöglichen eine zukünftige Prüfung von Revisionen, Rücksprüngen und veränderten Gestaltannahmen. Aus der bloßen Zahl an Versionen folgt noch keine fachlich nachvollzogene Dynamik.
- **Möglichkeitsraum:** Explizite Form-, Status- und Transformationsmodelle stehen als Kandidaten für einen konkreten Vergleich bereit. Ihre wissenschaftliche Begründung und konkrete Wirksamkeit sind noch zu prüfen.

## Priorität für weitere Quellenprüfung

1. V0.3 anhand SHA und bereits vorhandenen Git-Hinweisen als **wiedergefunden, aber nicht importiert** klassifizieren; nicht unbesehen kanonisieren.
2. Für jede tatsächlich relevante Fachbehauptung eine Quellenkette **älterer Originaltext → spätere Arbeitsfassung → konkretes Zitat → Kontext → zulässige Aussage** prüfen.
3. Das separate Layer-Rebase als **Candidate** gegen sein ausgewiesenes Basisartefakt und die aktuelle Arbeitsfassung vergleichen; ohne expliziten Status keine Entscheidung über Vorrang.
4. Fachliche externe Literatur von internen Provenienzverweisen trennen und einen nachweisbaren Mangel nur dann behaupten, wenn die relevanten historischen Dateien und Register ausreichend geprüft sind.

**Prüfstatus:** ZIP-Integrität und großem Snapshot zugehöriger Hash **getestet**; inhaltliche Vollständigkeit, wissenschaftliche Quellenqualität und Systemwirksamkeit **nicht getestet**. Kein Import ins private Repo, kein neuer Skill oder Regelbeschluss, keine Änderung am Auftrag #49.
