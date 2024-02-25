# Beispiele

Diese Seite dokumentiert einige meiner Projekte und gibt, wo es sinnvoll ist, Links zu den Demoseiten und zum Quellcode an.

## Biome Builder <img :src="$withBase('/biome-builder.png')" height="20" alt="im Industriezeitalter">

<Badge text="C#"/>
<Badge text="Unity"/>

Mein Itch-Profil ist voll von Prototypen aus Gamejams, und ich habe dabei viele Techniken der Spieleentwicklung gelernt.

Der Höhepunkt dieses Lernens ist ein funktionsreiches, aber einfaches [Rhythmusspiel](https://richard-webb.itch.io/biomebuilder), in dem verschiedene Biome aufgebaut werden, wenn der Beat im richtigen Takt geschlagen wird. Es gibt eine übersetzte Sprachausgabe, dynamischen Ton, Post-Processing und 3D-Effekten, und zeigt, wie ein fertiges Spiel aussehen könnte.

<img :src="$withBase('/biome-builder.png')" height="367" alt="in the industrial era">

Ich lasse mich stark vom Prozess der Spieleentwicklung und der Industrie inspirieren. Die angewandten Trends und Techniken lassen sich oft auf den Lebenszyklus der Softwareentwicklung übertragen, sind aber in der Regel noch hautnäher.

## Dobble-Klon <img :src="$withBase('/dobble-clone.png')" height="20" alt="das gesamte Spielfeld mit 3 Dobble-Karten">

<Badge text="React"/>
<Badge text="Typescript"/>

Dobble ist ein schnelles, einfaches Zuordnungsspiel und lässt sich gut in verschiedenen Sprachen spielen. Jetzt habe ich es immer auf [Website](https://eager-ritchie-aaa505.netlify.app/) verfügbar!

<img :src="$withBase('/dobble-clone.gif')" height="367" alt="ein paar Runden mit passenden Karten in Dobble, gemacht von Richard Webb">

Das Ziel dieses Projekts war es, zu sehen, was ich in nur ein paar Abenden schaffen kann, angefangen von nichts, bis hin zu einer gehosteten, designten und funktionierenden Website. Der [Quelltext](https://github.com/Jaeger2305/match-language) deckt den globalen Zustand mit React-Kontext ab, sowie die Verwendung von React-Hooks und eine leicht verständliche Komponentenhierarchie.

## Industrialist <img :src="$withBase('/industrialist.png')" height="20" alt="android logo spelling industrialist over a cloud background with green forest">

<Badge text="Go"/>
<Badge text="Kafka"/>
<Badge text="NativeScript"/>
<Badge text="Docker"/>

Ein gemischtes echtzeit- und rundenbasiertes Spiel mit eigenen Assets und skalierbarer Architektur

Nachdem ich viel über Native-Entwicklung gehört hatte, war ich neugierig, wie schwer es sein würde, meine Web-Fähigkeiten in die native Entwicklung zu übertragen. Ich wagte den Sprung mit NativeScript und NativeScript Vue. Es gibt zwar eine Kernanhängerschaft, aber es ist schwierig, dies für ein Projekt dieses Umfangs zu empfehlen, bei dem es um viele individuelle Anforderungen ging. Für einen Proof of Concept würde ich gerne zu NativeScript zurückkehren. Allerdings scheinen andere Alternativen wie React Native, Flutter und Ionic eine größere Anhängerschaft zu haben.

Der zweite interessante Teil war das Schreiben der Websocket-API innerhalb von Go, was, wie versprochen, wirklich einfach war und Spaß gemacht hat. Ich würde ernsthaft in Erwägung ziehen, Go für zukünftige Projekte zu verwenden, obwohl das Mocking einiger Schnittstellen zum Testen von Drittanbieter-Plugins nicht einfach war.

<img :src="$withBase('/industrialist-play.png')" height="300" alt="der Hauptspielbereich mit Kohleminen, Handelsposten und mehr">

Derzeit nur für ausgewählte Nutzer im Google Play Store verfügbar - wenn Sie Interesse am Testen haben, lassen Sie es mich wissen!

## Mental Health Tracker <img :src="$withBase('/mht.png')" height="20" alt="die 4 Brenner, die für die mentale Gesundheit wichtig sind; Bewegung, Schlaf, Soziales und Essen">

<Badge text="Svelte"/>
<Badge text="Typescript"/>

Die Corona-Zeiten waren für niemanden einfach, und ich habe lange geglaubt, dass meine eigene mentale Gesundheit auf nur 4 Themen hinausläuft: Bewegung, Schlaf, Soziales und Essen. Ich dachte, es wäre eine gute Idee, diese über die Zeit zu verfolgen, um zu beobachten, ob meine Stimmung durch die Verbesserung einer dieser Schlüsselmetriken gesteigert werden könnte.

Ich fand die Animationen und die Reaktivität super einfach zu handhaben, ebenso wie die einfache Typescript-Integration, und würde mich freuen, bei einem größeren Projekt damit zu arbeiten.

<img :src="$withBase('/mht.gif')" height="367" alt="Konfiguration der 4 Brenner mit SVG-Animationen">

Probieren Sie es auf Ihrem [lokalen Rechner](http://mht-mental-health-tracker.herokuapp.com/) aus und schauen Sie sich den [Quellcode](https://github.com/Jaeger2305/mental-health-tracker) an.

## Sprint-Rollen <img :src="$withBase('/react-roles-svg.png')" height="20" alt="das Haupt-Viewport von react-roles, das die grundlegenden Rollen in einem Sprint als bunte Kreise darstellt, mit denen interagiert werden kann, unter Ausnutzung von d3.js">

<Badge text="GraphQL"/>
<Badge text="React"/>
<Badge text="Node.js"/>
<Badge text="MongoDB"/>
<Badge text="Mongoose"/>
<Badge text="Express"/>
<Badge text="D3.js"/>

Haben Sie schon einmal an einem Projekt gearbeitet, das sich in der Hälfte seines 10. Sprints befindet, und es gibt 20 Leute, die einen Mix von Rollen übernehmen? Ich ertappe mich dabei, wie ich mich frage,

1. Wer macht was?
1. Wer redet mit wem?
1. Wie unterscheidet sich dies von meinem letzten Projekt?
1. Welche Lücke gibt es für mich zu füllen?

<img :src="$withBase('/react-roles-sidebar.png')" height="450" alt="die Seitenleiste aus dem obigen Gif-Video. Es gibt React Formik-Dropdowns, die mit Minimal-UI gestylt sind">

<img :src="$withBase('/react-roles-svg.png')" height="450" alt="das Haupt-Viewport von react-roles, das die grundlegenden Rollen in einem Sprint als bunte Kreise darstellt, mit denen interagiert werden kann, unter Verwendung von d3.js">

Dieses Projekt war eine Chance, mit verschiedenen Technologien zu spielen, aber auch eine visuelle und interaktive Schnittstelle bereitzustellen, um die oben genannten Fragen weniger frustrierend zu machen.

Sie können eine [Live-Version](https://react-roles.herokuapp.com) sehen oder den [Quellcode](https://bitbucket.org/Jaeger2305/react-roles/src/master/) auschecken. Es ist eine Hobby-Tier-Herokuapp, also erlauben Sie beim ersten Laden eine Minute, während der darunterliegende Container aktiv wird.

<img :src="$withBase('/react-roles-demo.gif')" alt="ein 1-minütiges Video, das zeigt, wie 4 miteinander verbundene Knoten (Katze, Hund, Maus, Elefant) aus einer benutzerdefinierten Oberfläche aufgebaut werden, erstellt von Richard Webb">

### Funktionen

- Hinzufügen/Löschen/Bearbeiten der Rollen/Mitglieder/Verantwortlichkeiten in einem Projekt
- Zuweisen von Namen und Verantwortlichkeiten zu diesen Rollen
- Verknüpfen Sie Rollen miteinander, um eine Beziehung anzuzeigen
- Persistieren in einer Datenbank
- Initialisieren mit einer Standardkonfiguration

## Vue nav-wheel <img :src="$withBase('/vue-nav-wheel-main.png')" height="20" alt="ein einfaches, glattes Navigationsrad, mit Links zu untergeordneten Seiten, die sich vom Zentrum ausbreiten">

<Badge text="Vue.js"/>
<Badge text="D3.js"/>
<Badge text="Vue Test Utils"/>

Sind Sie von der typischen Navigationsleiste gelangweilt, mit unzugänglichen Hover-Overs und die Hälfte des Bildschirms bedeckend? Ich wollte eine Navigationsoption, die als Modal aufpoppen kann, mit großen Buttons, um durch eine Website zu navigieren, auf eine neuartige Weise.

<img :src="$withBase('/vue-nav-wheel-shape-customisation.gif')" alt="ein Schnellfeuer-Gif-Video von hundert zufälligen Konfigurationen, die mit dem Open-Source-Paket vue-nav-wheel möglich sind, erstellt von Richard Webb">

Das Ergebnis ist ein [Paket auf npm](https://www.npmjs.com/package/vue-nav-wheel), das eine existierende vue-router-Konfiguration nimmt und sie in einer radialen und rekursiven Weise rendert, mit einer Reihe von konfigurierbaren Optionen sowohl für Funktion als auch Stil. Hier ist der [Quellcode](https://github.com/Jaeger2305/vue-nav-wheel).

Stilistisches Design ist nicht meine Stärke, daher wollte ich, dass das Styling und das Look and Feel konfigurierbar sind, falls jemand auf der Idee aufbauen möchte. Die typischen Anwendungen, die ich entwickle, haben eine signifikante Domänenlogik und komplexe reine JavaScript-Logik, und als Ergebnis gibt es manchmal keinen Spielraum für eine kreative SVG-Implementierung.

<img :src="$withBase('/nav-wheel-style-1.png')" height="240" alt="ein Navigationsrad mit einem lila Zentrum und zunehmend helleren Grüntönen außen">
<img :src="$withBase('/nav-wheel-style-2.png')" height="240" alt="ein Navigationsrad mit grauem Hintergrund und tiefschwarzen Ringen mit roter Umrandung">
<img :src="$withBase('/nav-wheel-style-3.png')" height="240" alt="ein Navigationsrad mit geglätteten Rändern und einem SVG-Symbol eines Strichmännchens mit Kaffeetassen in der Mitte">

Die Integration mit D3-shape und die Handhabung der Reaktivität von SVG-Elementen in Vue hat mich überrascht, wie wenig Probleme ich hatte. Das Unit-Testing der SVG-Vue-Komponenten erwies sich zwar an einigen Stellen als fummelig, war aber auch meist in Ordnung.

### Features

- Ein SVG-Viewport, der eine vue-router-Konfiguration rendert
- Zeigt bedingte Routen abhängig von
- Passt die Form und Größe der Routen je nach Kontext und Konfiguration an
- Interaktives Look and Feel
- Hochgradig anpassbar und stilisierbar, unter Verwendung der BEM-Notation
- Plug and Play wie bei Vue üblich

## English4all administration <img :src="$withBase('/e4a-classes-table.png')" height="20" alt="eine einfache Liste von Karten, mit Details zu den Klassen in jeder">

<Badge text="Vue.js"/>
<Badge text="Node.js"/>
<Badge text="MongoDB"/>
<Badge text="Mongoose"/>
<Badge text="Express"/>
<Badge text="Docker"/>

Die Wohltätigkeitsorganisation, für die ich seit 2,5 Jahren tätig bin, litt unter mangelnder Nachvollziehbarkeit, manuellen Prozessen und Papierverbrauch. Mit einem kleinen Budget und einem Umweltgewissen wollte ich etwas bauen, das die Planung von Kursen vereinfacht und die Hektik am Freitagabend bei der Vorbereitung auf den Samstagmorgen reduziert.

Der Haken: 0 Budget.

<img :src="$withBase('/e4a-student-registration.gif')" width="367" alt="gif-Video des Anmeldeprozesses für neue Studenten - ein blaues Formular mit mehreren Schritten">
<img :src="$withBase('/e4a-assistant-registration.gif')" width="367" alt="gif-Video des Registrierungsprozesses für neue Assistenten - ein grünes Formular mit mehreren Schritten">

Da es sich um ein Hobbyprojekt für eine kleine Wohltätigkeitsorganisation handelt und ich nebenbei meine Programmiermuskeln spielen lassen wollte, war ich vor allem daran interessiert, ein Tool zu haben, das mir Zeit spart und dessen Hosting nichts kostet.

Es gibt nicht viele Lektionen, die man hier über UI/UX lernen kann, aber die Server- und Infrastruktur-Architektur und die Abbildung der Domänenlogik von Anfang bis Ende war eine wertvolle Erfahrung.

Wir verwenden dies jetzt als internes Tool, das in den kommenden Monaten nicht mehr unterstützt wird. Für den Moment, keine Quelle, nur die [aktive Seite](https://english4allinleeds.herokuapp.com/).

<img :src="$withBase('/e4a-class-email.gif')" width="740" alt="gif-Video des Filterns einer Klasse und der Erstellung einer benutzerdefinierten E-Mail nach Änderungen an der Benutzeroberfläche">

Das Ergebnis ist eine voll funktionsfähige App, die es Administratoren ermöglicht, den Fortschritt von Schülern/Freiwilligen zu organisieren, zu protokollieren und zu verfolgen, während sie verschiedene Klassen über das Jahr hinweg besuchen.

### Funktionen

- Soziale Anmeldung
- Formular-Registrierung
- Benutzerdefinierte Berechtigungen
- Kombinatorische und interoperable Filterung
- E-Mail-Unterstützung über SendGrid
- Google Maps-Integration
- Unterstützung für Übersetzungen
- Cloudinary-Integration zum Herunter-/Hochladen von Bildern

## Sonstiges

Vieles von dem, woran ich gearbeitet habe, findet hinter verschlossenen Türen statt. In Wirklichkeit verbringe ich die meiste Zeit meines Tages damit, Anforderungen zu scopen, mich auf unsere Entwicklungsmethodik zu konzentrieren und die Bereitstellung und Wartung einer Reihe von interessanten Projekten zu unterstützen.

Einige kleinere Projekte, nach denen Sie mich außerhalb des Tagesgeschäfts fragen könnten:

- Ein gemeinsamer Ausflug in die Spieleentwicklung mit Unity
- Sever-side gerenderter Pokédex
- Maschinelles Lernen im Browser und Speicherung von Modellen in Mongo
