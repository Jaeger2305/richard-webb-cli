module.exports = {
  host: "localhost",
  port: 8091,
  title: "Richard Webb CLI",
  description:
    "Documentation on a CLI tool to give information on Richard Webb, a full-stack developer in Leeds, UK looking for a job in Berlin, Germany.",
  locales: {
    "/": {
      lang: "en-DB"
    },
    "/de/": {
      lang: "de-DE"
    }
  },
  themeConfig: {
    homepage: true,
    repo: "Jaeger2305/richard-webb-cli",
    locales: {
      "/": {
        selectText: "Languages (in progress)",
        label: "English",
        ariaLabel: "Languages",
        sidebar: ["/", "/getting-started/", "/basics/", "/examples/", "/api/"]
      },
      "/de/": {
        selectText: "Sprachen (Bauzustand)",
        label: "Deutsch",
        ariaLabel: "Sprachen",
        sidebar: [
          "/de/",
          "/de/getting-started/",
          "/de/basics/",
          "/de/examples/",
          "/de/api/"
        ]
      }
    }
  }
};
