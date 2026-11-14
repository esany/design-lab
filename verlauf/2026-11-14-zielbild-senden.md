# 2026-11-14 · Zielbild: Rückmeldung senden statt kopieren

**Was:** Generator und Build erzeugen auf Wunsch eine private Fassung des Zielbilds mit „Rückmeldung senden“; der Dienst dazu liegt im Werke-Repo (Cloudflare, Zugang nur für den Eigentümer) und legt die Rückmeldung als Datei mit Pull Request ab. Der geplante Orchestrierungslauf arbeitet solche Rückmeldungen ein (neuer Schritt 2a). Öffentliche Seite unverändert beim Kopieren.

**Warum:** Eigentümer 13.11. „Ohne Kopie noch besser“ und 14.11. „ok“ (Chat); Entwurf „ein Zielbild“, Abschnitt 3, Variante A, nach dem Werk-Test.

**Rückgängig:** PR revertieren; ohne Schlüssel bei Cloudflare bleibt der Dienst ohnehin wirkungslos.
