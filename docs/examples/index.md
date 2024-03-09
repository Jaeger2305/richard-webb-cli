<script setup>
import { withBase } from 'vitepress'
</script>

# Examples

This page documents some of my projects, giving links to the demo sites and source code where appropriate.

## Biome Builder

<Badge text="C#"/>
<Badge text="Unity"/>

My itch profile is full of prototypes from gamejams, learning many techniques of game development along the way.

The culmination of these learnings is a feature rich, but basic [rhythm game](https://richard-webb.itch.io/biomebuilder), where different biomes are constructed if the beat is hit on time. There are translated voiceovers, dynamic sound achieved via FMOD, post processing and 3d effects, demonstrating what a final game might look like.

<img :src="withBase('/biome-builder.png')"  height="367" alt="in the industrial era">

I take a lot of inspiration from the game development process and industry, the trends and techniques applied can often be applied to the software development lifecycle, but typically live even closer to the bone.

## Dobble clone

<Badge text="React"/>
<Badge text="Typescript"/>

Dobble is a fast paced simple matching game, and is great to play in different languages. Now I have it always available on [website](https://eager-ritchie-aaa505.netlify.app/)!

<img :src="withBase('/dobble-clone.gif')"  height="367" alt="a few rounds of matching cards in Dobble, made by Richard Webb">

The goal of this project was to see what I could get done in just a couple of evenings, starting from nothing, to a hosted, designed and functional website. The [source](https://github.com/Jaeger2305/match-language) covers global state with React context, as well as using React Hooks and an easy to understand component hierarchy.

## Industrialist

<Badge text="Go"/>
<Badge text="Kafka"/>
<Badge text="NativeScript"/>
<Badge text="Docker"/>

A mixed real-time/turn-based game with custom assets and scalable architecture

After hearing lots about Native development, I was curious to find out how hard it would be to transfer my web skills into native development. I took the plunge with NativeScript and NativeScript Vue. Whilst there is a core following, it's difficult to recommend this for a project of this scope, which dealt with many custom requirements. For a proof of concept, I would happily return to NativeScript. However, other alternatives like React Native, Flutter and Ionic do seem to have more of a following.

The second interesting part was writing the websocket API inside of Go which was, as promised, really easy and enjoyable. I would seriously consider using Go for future project work, although mocking some interfaces for testing from 3rd party plugins was not easy.

<img :src="withBase('/industrialist-play.png')" height="300" alt="the main play area with coal mines, trading posts and more">

Currently available only to select users on the Google Play store - if you're interested in testing, let me know!

## Mental Health Tracker

<Badge text="Svelte"/>
<Badge text="Typescript"/>

The Corona times haven't been easy for anyone, and I've long believed my own mental health boils down to just 4 topics: exercise, sleep, social and food. I thought it'd be a good idea to track these over time, to monitor if my mood could be boosted by improving any of these key metrics.

I found the animations and reactivity super easy to deal with, as well as easy Typescript integration, and would be happy to work with it on a bigger project.

<img :src="withBase('/mht.gif')"  height="367" alt="configure the 4 burners with SVG animations">

Have a play on your [local machine](http://mht-mental-health-tracker.herokuapp.com/) and check out the [source code](https://github.com/Jaeger2305/mental-health-tracker).

## Sprint roles

<Badge text="GraphQL"/>
<Badge text="React"/>
<Badge text="Node.js"/>
<Badge text="MongoDB"/>
<Badge text="Mongoose"/>
<Badge text="Express"/>
<Badge text="D3.js"/>

Have you ever started on a project that was half way through its 10th sprint, and there are 20 people doing a mix of roles? I find myself asking,

1. Who does what?
1. Who talks to who?
1. How is this different to my last project?
1. What gap is there for me to fill?

<img :src="withBase('/react-roles-sidebar.png')" height="450" alt="the sidebar from the above gif video. There are react Formik dropdowns styled using Minimal-UI">

<img :src="withBase('/react-roles-svg.png')" height="450" alt="the main viewport of react-roles, detailing the basic roles in a sprint as colourful circles that can be interacted with, taking advantage of d3.js">

This project was a chance to play with different technologies, but also provide a visual and interactive interface to make the above questions less frustrating.

You can see a [live version](https://react-roles.herokuapp.com) or checkout the [source code](https://bitbucket.org/Jaeger2305/react-roles/src/master/). It's a hobby tier herokuapp, so allow a minute on first load while the underlying container becomes active.

<img :src="withBase('/react-roles-demo.gif')" alt="a 1 minute video showing 4 interconnected nodes (cat, dog, mouse, elephant) being built from a custom UI, made by Richard Webb">

### Features

- Add/delete/edit the roles/members/responsibilities in a project
- Assign names and responsibilities to those roles
- Link roles together to indicate a relationship
- Persist to a database
- Initialise with a default config

## Vue nav-wheel

<Badge text="Vue.js"/>
<Badge text="D3.js"/>
<Badge text="Vue Test Utils"/>

Are you bored of the typical navbar, with inaccessible hover-overs and covering half the screen? I wanted a navigation option that could pop up as a modal, with large buttons to navigate through a website, in a novel way.

<img :src="withBase('/vue-nav-wheel-shape-customisation.gif')" alt="a quickfire gif video of a hundred random configurations possible with the vue-nav-wheel open source package, made by Richard Webb">

The result is a [package on npm](https://www.npmjs.com/package/vue-nav-wheel), which takes an existing vue-router config and renders it in a radial and recursive way, with a number of configurable options both for function and style. Here's the [source code](https://github.com/Jaeger2305/vue-nav-wheel).

Stylistic design isn't my strength, so I wanted the styling and the look and feel to be configurable in case someone wants to build on the idea. The typical apps I develop have significant domain logic and complex pure JavaScript logic, and as a result there sometimes isn't scope for a creative SVG implementation.

<img :src="withBase('/nav-wheel-style-1.png')" height="240" alt="a navigation wheel with a purple center and increasingly lighter shades of green on the outside">
<img :src="withBase('/nav-wheel-style-2.png')" height="240" alt="a navigation wheel with a grey background and jet black annulars with a red outline">
<img :src="withBase('/nav-wheel-style-3.png')" height="240" alt="a navigation wheel with smoothed edges and a SVG icon of a stickman holding coffee cups at the center">

Integrating with D3-shape and handling the reactivity of SVG elements in Vue surprised me with how little trouble I had. The unit testing of SVG Vue components did turn out to be fiddly in some parts, but was also mostly fine.

### Features

- An SVG viewport that renders a vue-router config
- Conditional shows routes depending on
- Adjusts the shape and size of routes depending on context and config
- Interactive look and feel
- Highly customisable and stylable, using BEM notation
- Plug and play in a standard Vue way

## English4all administration

<Badge text="Vue.js"/>
<Badge text="Node.js"/>
<Badge text="MongoDB"/>
<Badge text="Mongoose"/>
<Badge text="Express"/>
<Badge text="Docker"/>

The charity I've been involved with for 2.5 years was sufferring from a lack of traceability, manual processes, and paper usage. With a small budget and an environmental conscience, I wanted to build something that would help make scheduling classes easier, reducing the scurry on a Friday night to prepare for the Saturday morning.

The catch: 0 budget.

<img :src="withBase('/e4a-student-registration.gif')" width="367" alt="gif video of the registration process for new students - a blue form with multiple steps">
<img :src="withBase('/e4a-assistant-registration.gif')" width="367" alt="gif videio showing the registration process for new assistants - a green form with multiple steps">

As a hobby project for a small charity, and its intent being to flex my programming muscles on the side, I was most interested in having a tool to save me time that wouldn't cost anything to host.

There aren't many lessons to be learned on UI/UX here, but the server + infrastructure architecture and mapping domain logic from start to finish was valuable experience.

We use this as an internal tool now, which will become unsupported in the coming months. For now, no source, only the [active site](https://english4allinleeds.herokuapp.com/).

<img :src="withBase('/e4a-class-email.gif')" width="740" alt="gif video of filtering a class and crafting a custom email after edits to the UI">

The result is a full featured app allowing administrators to organise, log and track student/volunteer progress as they attend various classes throughout the year.

### Features

- Social login
- Form registration
- Custom permissions
- Combinatorial and interoperable filtering
- Email support via SendGrid
- Google maps integration
- Translation support
- Cloudinary integration for downloading/uploading images

## Other

A lot of the fun stuff I've worked on is behind closed doors. In reality, I spend most of my day scoping requirements, focusing on our development methodology and supporting the deployment and maintenance of a number of interesting projects.

Some smaller projects you might like to ask me about, outside of the day to day:

- A collaborative foray into game development with Unity
- Sever-side rendered Pokédex
- Machine learning in the browser and storing models in Mongo
