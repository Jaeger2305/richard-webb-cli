const figlet = require("figlet");
const chalk = require("chalk");
const prompts = require("prompts");
const { readFileSync } = require("fs");
const open = require("open");
const version = require("../package").version;

async function executePromptResponse(response) {
  const responseValue = await (response && typeof response.value === "function"
    ? response.value()
    : undefined);
  if (responseValue) await executePromptResponse(responseValue);
  return responseValue;
}

const actions = {
  handleDefault: argv => {
    if (!argv.quiet) {
      console.log(
        chalk.blue(
          figlet.textSync("Richard Webb CLI", {
            font: "Small",
            horizontalLayout: "default",
            verticalLayout: "default"
          })
        )
      );
    }
    console.log(
      'Thanks for trying this CLI! Run "rwc --help" to see the available commands'
    );
  },
  handleSend: async argv => {
    if (argv.action.includes("email")) await actions.sendEmail();
    if (argv.action.includes("follow")) await actions.sendFollow();
    if (argv.action.includes("star")) await actions.sendStar();
  },
  handleGet: argv => {
    if (argv.info.includes("skills")) actions.getSkills();
    if (argv.info.includes("history")) actions.getHistory();
    if (argv.info.includes("examples")) actions.getExamples();
  },
  getSkills: () =>
    console.log(readFileSync("./docs/basics/API-skills.md", "utf8")),
  getHistory: () =>
    console.log(readFileSync("./docs/basics/API-history.md", "utf8")),
  getExamples: () =>
    console.log(readFileSync("./docs/examples/API.md", "utf8")),
  sendEmail: () =>
    open("mailto:rwebb2305@gmail.com?subject=richard-webb-cli", { wait: true }),
  sendFollow: () =>
    open("https://www.linkedin.com/in/richard-webb-09516a115/", { wait: true }), // follow on linkedin - required API keys embedded in the repo make this a bad idea.
  sendStar: () =>
    open("https://github.com/Jaeger2305/richard-webb-cli", { wait: true }), // star github repo - required API keys embedded in the repo make this a bad idea.
  getVersion: () => console.log(version),
  exit: () => process.exit(0)
};

const options = {
  getVersion: {
    title: "version",
    value: actions.getVersion
  },
  getAttribute: {
    title: "get",
    value: () =>
      prompts({
        type: "select",
        name: "value",
        message: "Pick a command",
        hint: "- Space to select. Return to submit",
        choices: [
          { title: "Skills", value: actions.getSkills },
          { title: "History", value: actions.getHistory },
          { title: "Examples", value: actions.getExamples }
        ]
      })
  },
  sendInfo: {
    title: "action",
    value: () =>
      prompts({
        type: "select",
        name: "value",
        message: "Pick a command",
        hint: "- Space to select. Return to submit",
        choices: [
          { title: "Email", value: actions.sendEmail },
          { title: "Connect on LinkedIn", value: actions.sendFollow },
          { title: "Star package", value: actions.sendStar }
        ]
      })
  },
  exit: {
    title: "exit",
    value: actions.exit
  }
};

module.exports = {
  options,
  actions,
  executePromptResponse
};
