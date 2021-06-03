# Wo soll ich anfangen?

## Was das ist

Ich mag es, eine Dokumentation zu haben, und vielleicht tun Sie das auch. In meinem Lebenslauf ist nicht genug Platz, um mich ausreichend zu dokumentieren, also habe ich mir einen Grund ausgedacht, mehr über mich zu schreiben.

Diese Seite bietet 3 Dinge:

1. Ein lebendiger Lebenslauf
1. Einen Überblick über mein öffentliches Portfolio
1. Dokumentation über ein interaktives Kommandozeilen-Tool

Hier wird richard-webb-cli eingegeben.

## Wie man die Site benutzt

Die Site ist in Abschnitte unterteilt, die eine traditionelle Software-Dokumentation nachahmen.

| Sitelink                   | Inhalt     | Beschreibung                                                                                                                                    |
| -------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Grundlagen](/de/basics/)  | Lebenslauf | Die Markdown-Version meines Lebenslaufs 2021                                                                                                    |
| [Beispiele](/de/examples/) | Portfolio  | Eine Übersicht über meine öffentlichen Projekte. Was ich gemacht habe, was als nächstes ansteht, verwendete Technologien und gelernte Lektionen |
| [API](/de/api/)            | rwc docs   | Die Dokumentation für das CLI-Tool                                                                                                              |

## Wie man die CLI benutzt

richard-webb-cli (rwc) ist ein in JavaScript geschriebenes Werkzeug für die Verwendung auf der Kommandozeile. Es gibt Markdown-Informationen basierend auf seinen Parametern zurück, aber Sie können mich auch per E-Mail darüber erreichen.

::: Warnung
Eine gewisse Vertrautheit mit Node und der Kommandozeile wird hier vorausgesetzt. Überspringen Sie den [Lebenslauf](/de/basics/), oder [Projekte](/de/examples/), wenn Sie an diesem Teil nicht interessiert sind.
:::

Es wird empfohlen, rwc global zu installieren, damit Sie Richard Webb nicht vergessen.

```
npm install -g richard-webb-cli
rwc --help
@rwebb2305/cli --help
richard-webb-cli --help
```

Alternativ können Sie in ein Projekt installieren

```
npm init -y
npm install richard-webb-cli
rwc --help
```

Oder, installieren Sie es nur in Ihren Cache

```
npx richard-webb-cli --help
```
