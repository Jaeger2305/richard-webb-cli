const prompts = require("prompts");
const { options, actions, executePromptResponse } = require("./utils");

module.exports = async function main() {
  const yargsConfig = await require("yargs")(process.argv.slice(1))
    .command({
      command: "*",
      description: "welcome message",
      builder: () => {},
      handler: actions.handleDefault
    })
    .option("version", {
      description: "get the package version",
      alias: "v",
      type: "boolean"
    })
    .option("keep-alive", {
      description: "keep the prompt menu open when in interactive mode",
      alias: "k",
      type: "boolean"
    })
    .option("interactive", {
      description:
        "enabled prompt mode, where the options are exposed in an interactive prompt menu",
      alias: "i",
      type: "boolean"
    })
    .option("quiet", {
      description: "hide the ASCII art",
      alias: "q",
      type: "boolean"
    })
    .command({
      command: "send",
      description:
        "give Richard Webb something, like an email or a warm fuzzy feeling",
      builder: yargs =>
        yargs.option("action", {
          default: "email",
          array: true,
          choices: ["email", "follow", "star"]
        }),
      handler: actions.handleSend
    })
    .command({
      command: "get",
      description: "retrieve key attributes about Richard Webb",
      builder: yargs =>
        yargs.option("info", {
          default: "skills",
          array: true,
          choices: ["skills", "history", "examples"]
        }),
      handler: actions.handleGet
    }).argv;
  const { interactive: isInteractive, "keep-alive": isKeptAlive } = yargsConfig;

  // Show options until process exit.
  while (isInteractive) {
    const response = await prompts({
      type: "select",
      name: "value",
      message: "Pick a command",
      hint: "- Space to select. Return to submit",
      choices: [
        options.getVersion,
        options.getAttribute,
        options.sendInfo,
        options.exit
      ]
    });

    await executePromptResponse(response);

    const { value: isExited } = isKeptAlive
      ? await prompts({
          type: "confirm",
          name: "value",
          message: "Exit",
          initial: true
        })
      : { value: true };

    if (isExited) {
      process.exit(0);
      break; // seems pointless, but important for tests.
    }
  }
};
