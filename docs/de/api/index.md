## API

## Ausführen der CLI

Die Richard Webb CLI ist über 3 Aliase zugänglich:

- `richard-webb-cli`
- `@rwebb2305/cli`
- `rwc`

Das Ausführen ohne Parameter gibt eine Willkommensnachricht zurück.

Jeder von ihnen kann mit den folgenden Befehlen ausgeführt werden.

## Basis-Optionen

## Hilfe

`rwc --help`

Gibt die Hilfe zur CLI zurück.

### Interaktiv
`rwc --interactive` oder `rwc -i`

Ermöglicht die Ausführung der CLI über Eingabeaufforderungen, wobei die Optionen zur Laufzeit ausgewählt werden.

### Am Leben bleiben
`rwc --keep-alive` oder `rwc -k`

Verhindert, dass die CLI beendet wird, sobald die interaktiven Befehle gewählt wurden.

### Leise

`rwc --quiet` oder `rwc -q`

Deaktiviert die Blockbuchstaben des App-Namens beim Ausführen des CLI-Tools.

### Version
`rwc --version` oder `rwc -v`

Gibt die Version der CLI zurück.

## Unterbefehle

Die Befehle können mit den Basisoptionen kombiniert werden:

`rwc --interactive get --info skills`

## Holen

`rwc get --info skills history`

Ruft Informationen über Richard Webb ab. Verfügbare Optionen sind

- skills - Richard Webb's Kernkompetenzen
- history - Kurzer Lebenslauf von Richard Webb
- examples - Schneller Überblick und Links zu Richard Webbs Projekten

## Senden

`rwc send --action email follow`

Führt Befehle zur Interaktion mit Richard Webb aus.

Verfügbare Optionen sind

- email - Öffnet einen mailto-Link mit einem beliebigen Programm, das auf dem System des Benutzers zum Öffnen konfiguriert ist.
- follow - Öffnet einen Link zur LinkedIn-Profilseite von Richard Webb.
- star - Öffnet einen Link zum rwc GitHub.

Aus Sicherheitsgründen sind weitere Optionen für ein CLI, das öffentlich freigegeben ist, nicht praktikabel.
