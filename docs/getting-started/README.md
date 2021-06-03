# Getting started

## What this is

I like having documentation, and maybe you do too. My CV doesn't have space to document myself sufficiently, so I contrived a reason to write more about myself.

This site provides 3 things:
1. A living CV
1. An overview of my public portfolio
1. Documentation on an interactive command line tool

Cue richard-webb-cli.

## How to use the site

The site is split into sections that mimic traditional software documentation.

| Sitelink                 | Content       | Description                                                                                                 |
| ------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------- |
| [Basics](/basics/)       | CV            | The markdown version of my 2021 CV                                                                          |
| [Examples](/examples/)   | Portfolio     | An overview of my public projects. What I've done, what's coming next, technologies used and lessons learnt |
| [API](/api/)             | rwc docs      | The documentation for the CLI tool                                                                          |

## How to use the CLI

richard-webb-cli (rwc) is a tool written in JavaScript for use at the command line. It returns markdown information based on its parameters, but you can also email me through it.

::: warning
Some familiarity with Node and the command line is assumed here. Skip to the [CV](/basics/), or [projects](/examples/) if you're not interested in this part.
:::

It's recommended to install rwc globally, so you never forget about Richard Webb.

```
npm install -g richard-webb-cli
rwc --help
@rwebb2305/cli --help
richard-webb-cli --help
```

Alternatively, install into a project

```
npm init -y
npm install richard-webb-cli
rwc --help
```

Or, install it only to your cache

```
npx richard-webb-cli --help
```