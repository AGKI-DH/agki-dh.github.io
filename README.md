# AGKI-DH — Website

<!-- Zenodo DOI badge — nach dem ersten Zenodo-Release einfügen:
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)
-->

Website der DHd-AG **Angewandte Generative KI in den Digitalen Geisteswissenschaften** (AGKI-DH).

Live: <https://agki-dh.github.io>

Die AG widmet sich der Erforschung und Anwendung generativer KI, insbesondere Large Language Models (LLMs), in den digitalen Geisteswissenschaften. Sie organisiert Webinare, Workshops und sammelt Ressourcen und Best Practices.

## Convenors

- Christopher Pollin
- Gerrit Brüning
- Sarah Oberbichler

## Mitmachen und Kontakt

- [Mailingliste der AGKI-AG](https://lists.digitalhumanities.org/mailman/lists/dhd-ag-agki.lists.digitalhumanities.org)
- [Zotero-Bibliothek](https://www.zotero.org/groups/5319178/agki-dh)
- [DHd-Seite der AG](https://digitalhumanities.de/ag-angewandte-generative-ki-in-den-digitalen-geisteswissenschaften-agki-dh/)

## Repo-Struktur

```
index.html             Startseite mit Webinar-, Aktivitäts- und Ressourcen-Listen
pages/webinar/         Einzelseiten für jedes Webinar (page-N.html)
pages/activities/      Einzelseiten für Workshops und AG-Meetings
assets/                style.css, script.js
img/                   Bilder und Thumbnails
slides/                PDFs der Vorträge
CITATION.cff           Maschinenlesbare Zitationsinformationen (GitHub-Sidebar)
.zenodo.json           Metadaten für Zenodo-Archivierung (DHd-Community)
knowledge/             Interne Anleitungen (z.B. ZENODO.md für Release-Workflow)
LICENSE                CC-BY 4.0
```

Die Seite ist rein statisches HTML ohne Build-Schritt und wird über GitHub Pages aus dem `main`-Branch ausgeliefert.

## Neues Webinar hinzufügen

1. Thumbnail (16:9 empfohlen) nach `img/` legen, Namensschema `NN-kurzname.jpg` (NN = laufende Nummer).
2. Folien (falls vorhanden) als PDF nach `slides/` legen.
3. Neue Datei `pages/webinar/page-NN.html` anlegen — am einfachsten die zuletzt bestehende Webinar-Seite kopieren und Titel, Datum, Autor:innen, Inhalte sowie die `citation_*`- und `DC.*`-Meta-Tags im `<head>` anpassen.
4. In [index.html](index.html) im Abschnitt `#webinars` eine neue Card **am Anfang des passenden Jahres-Blocks** ergänzen. Die oberste Card desselben Jahres als Vorlage kopieren und Bildpfad, Titel, Link und Datum anpassen.

## Lokale Vorschau

```bash
python -m http.server 8000
```

Dann <http://localhost:8000> öffnen.

## Zitieren

Siehe [CITATION.cff](CITATION.cff). GitHub zeigt rechts in der Sidebar automatisch einen „Cite this repository"-Button mit den Metadaten aus dieser Datei.

Für die dauerhafte, versionierte Zitation ist das Repo für [Zenodo](https://zenodo.org) vorbereitet (siehe [.zenodo.json](.zenodo.json) und [knowledge/ZENODO.md](knowledge/ZENODO.md)). Nach dem ersten Release wird jeder weitere GitHub-Release automatisch archiviert und erhält eine DOI in der [DHd-Community auf Zenodo](https://zenodo.org/communities/dhd).

## Lizenz

Inhalte (Texte, Folien, Abbildungen, Code): [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/), sofern auf der jeweiligen Unterseite nicht anders angegeben. Siehe [LICENSE](LICENSE).
