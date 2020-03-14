const version = require("../package").version;
const prompts = require("prompts");
const { readFileSync } = require("fs");
const open = require("open");

async function executePromptResponse(response) {
  const responseValue = await (response && typeof response.value === "function"
    ? response.value()
    : undefined);
  if (responseValue) await executePromptResponse(responseValue);
  return responseValue;
}

const actions = {
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
  sendLove: () => open("https://github.com/Jaeger2305", { wait: true }), // star github repo - required API keys embedded in the repo make this a bad idea.
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
          { title: "Love package", value: actions.sendLove }
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
