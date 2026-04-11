# Zenodo-Release-Anleitung (AGKI-DH)

Diese Datei beschreibt, wie das Repository auf Zenodo archiviert wird — inklusive Zuordnung zur **DHd-Community**. Sie ist nur einmal beim Erst-Setup nötig; danach erzeugt jeder GitHub-Release automatisch eine neue Zenodo-Version mit eigener DOI.

## Voraussetzungen im Repo (bereits erledigt)

- [x] [.zenodo.json](.zenodo.json) — steuert Titel, Autor:innen, Lizenz, Keywords, DHd-Community
- [x] [CITATION.cff](CITATION.cff) — wird zusätzlich von GitHub für die Sidebar-Zitation verwendet
- [x] [LICENSE](LICENSE) — CC-BY 4.0

**Wichtig:** Wenn beide Dateien vorhanden sind, verwendet Zenodo **nur** `.zenodo.json`. `CITATION.cff` bleibt trotzdem nützlich (GitHub-Sidebar, lokale Zotero-Imports aus dem Repo), wird aber beim Zenodo-Upload ignoriert.

## Schritt 1 — Zenodo mit GitHub verknüpfen

1. Auf <https://zenodo.org> mit dem GitHub-Account einloggen (oben rechts → „Log in with GitHub").
2. Oben rechts auf den Benutzernamen → **GitHub**.
3. In der Liste der eigenen Repositories nach `agki-dh.github.io` suchen und den Schalter auf **ON** stellen.
   - Falls das Repo unter einer Organisation (`agki-dh/agki-dh.github.io`) liegt, braucht Zenodo OAuth-Zugriff auf die Organisation. Das kann bei der ersten Verknüpfung nachgefragt werden.
4. **Jetzt noch nichts auf GitHub releasen** — erst sicherstellen, dass der Schalter wirklich AN ist.

## Schritt 2 — Ersten GitHub-Release erzeugen

Ab hier reicht eine einzige Aktion auf GitHub:

1. Im Repo auf **Releases → Draft a new release**.
2. **Tag**: `v1.0.0` (oder `v2026.04.0`, je nach bevorzugtem Schema — danach konsistent bleiben)
3. **Title**: `v1.0.0 — Initial Zenodo release`
4. **Description**: kurze Zusammenfassung, z.B.:
   > Erster archivierter Stand der AGKI-DH-Website. Enthält alle Webinare, Aktivitäten und Ressourcen bis zum Release-Datum.
5. **Publish release** klicken.

Zenodo bekommt automatisch per GitHub-Webhook Bescheid und archiviert den Tag-Zustand als ZIP. Nach 1–3 Minuten erscheint der neue Eintrag unter <https://zenodo.org/account/settings/github/> beim Repo mit einem DOI-Badge.

## Schritt 3 — DHd-Community bestätigen

Weil `.zenodo.json` die Community `dhd` bereits vorgibt, landet der Upload automatisch als **„pending submission"** in der DHd-Community. Die Community-Moderator:innen müssen den Eintrag aber noch **akzeptieren**, bevor er dort öffentlich erscheint.

- Status prüfen: <https://zenodo.org/communities/dhd>
- Alternativ: direkt beim Upload über <https://zenodo.org/uploads/new?community=dhd> als Fallback — aber das ist **nur nötig, wenn der Automatikweg fehlschlägt**.

## Schritt 4 — DOI in README eintragen

Nach erfolgreichem Release hat der Eintrag zwei DOIs:

- **Concept DOI** — zeigt immer auf die neueste Version (für den README-Badge)
- **Version DOI** — zeigt fest auf diesen Release (für Zitationen eines bestimmten Stands)

In [README.md](README.md) gibt es oben einen auskommentierten Badge-Platzhalter:

```markdown
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)
```

Die `XXXXXXX` durch die **Concept DOI** ersetzen und die umschließenden `<!-- ... -->` entfernen. Alternativ zeigt Zenodo den fertigen Markdown-Snippet direkt auf der Upload-Seite unter „Cite as" → „Markdown".

## Schritt 5 — Neue Versionen (alle künftigen Releases)

Ab jetzt ist nichts mehr zu tun, außer bei Bedarf einen neuen GitHub-Release zu erzeugen:

1. `git tag v1.1.0 && git push --tags` oder Release-Draft auf GitHub
2. Zenodo archiviert automatisch, erzeugt eine neue Version-DOI
3. Die Concept-DOI im README-Badge bleibt dieselbe und zeigt automatisch auf die neueste Version

## Wenn etwas schiefgeht

- **Upload erscheint nicht auf Zenodo**: Prüfen, ob der Schalter unter zenodo.org → GitHub wirklich AN ist, und ob der Release auf GitHub **published** (nicht draft) ist.
- **`.zenodo.json` wird nicht akzeptiert**: Zenodo ist strikt mit JSON. Die Datei muss valides JSON sein und nur dokumentierte Felder verwenden. Mit `python -m json.tool < .zenodo.json` lokal prüfen.
- **Lizenz-Fehler**: Zenodo erwartet SPDX-Lowercase-IDs — aktuell `cc-by-4.0`. Wenn sich das ändert, in [.zenodo.json](.zenodo.json) anpassen.
- **Community-Zuordnung bleibt pending**: Die DHd-Community-Moderation muss manuell akzeptieren. Bei Verzögerung: eine kurze Nachricht an die Community-Verantwortlichen.
