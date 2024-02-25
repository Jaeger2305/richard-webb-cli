# Wo soll ich anfangen?

## Was das ist

Diese Website ist eine Spielerei, um meinen Lebenslauf zu verbessern:

1. Ein lebendiger Lebenslauf
1. Ein Überblick über mein öffentliches Portfolio
1. Dokumentation über ein interaktives Kommandozeilentool

## Wie man die Website benutzt

Die Website ist in Abschnitte unterteilt, die eine traditionelle Software-Dokumentation nachahmen.

| Sitelink                   | Inhalt     | Beschreibung                                                                                                                                    |
| -------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Grundlagen](/de/basics/)  | Lebenslauf | Die Markdown-Version meines Lebenslaufs 2024                                                                                                    |
| [Beispiele](/de/examples/) | Portfolio  | Eine Übersicht über meine öffentlichen Projekte. Was ich gemacht habe, was als nächstes ansteht, verwendete Technologien und gelernte Lektionen |
| [API](/de/api/)            | rwc docs   | Die Dokumentation für das CLI-Tool                                                                                                              |

## Wie man die CLI benutzt

richard-webb-cli (rwc) ist ein in JavaScript geschriebenes Werkzeug für die Verwendung auf der Kommandozeile. Es gibt Markdown-Informationen basierend auf seinen Parametern zurück, aber Sie können mich auch per E-Mail darüber erreichen.

::: Warnung
Eine gewisse Vertrautheit mit Node und der Kommandozeile wird hier vorausgesetzt. Überspringen Sie den [Lebenslauf](/de/basics/), oder [Projekte](/de/examples/), wenn Sie an diesem Teil nicht interessiert sind.
:::

Wenn Sie Richard Webb nie wieder vergessen wollen, installieren Sie ihn global.

```
npm install -g richard-webb-cli
rwc --help
@rwebb2305/cli --help
richard-webb-cli --help
```

Alternativ kann die Installation auch in ein Projekt erfolgen

```
npm init -y
npm install richard-webb-cli
rwc --help
```

Oder installieren Sie es nur in Ihrem Cache

```
npx richard-webb-cli --help
```
