import { defineConfig } from 'vitepress'

export default defineConfig({
  host: "localhost",
  port: 8091,
  title: "Richard Webb CLI",
  description:
    "Documentation on a CLI tool to give information on Richard Webb, a full-stack developer in Leeds, UK looking for a job in Berlin, Germany.",
  locales: {
    root: {
      label: "English",
      lang: "en-GB",
      themeConfig: {
        sidebar: [
          {
            text: "Home", link: "/"
          },
          {
            text: "Getting started", link: '/getting-started/'
          },
          {
            text: "Basics", link: '/basics/'
          },
          {
            text: "Examples", link: '/examples/'
          },
          {
            text: "API", link: '/api/'
          }
        ]
      },
    },
    de: {
      label: "Deutsch",
      link: "/de",
      lang: "de-DE",
      themeConfig: {
      sidebar: [
        {
          text: "Startseite", link: "/de/"
        },
        {
          text: "Los geht's", link: '/de/getting-started/'
        },
        {
          text: "Grundlage", link: '/de/basics/'
        },
        {
          text: "Beispiele", link: '/de/examples/'
        },
        {
          text: "API", link: '/de/api/'
        }
      ]
    }
    }
  },
  themeConfig: {
    homepage: true,
    repo: "Jaeger2305/richard-webb-cli",
    footer: {
      message: "CC-BY-ND Licensed",
      copyright: "Copyright © 2021-present Richard Webb"
    }
  }
});
