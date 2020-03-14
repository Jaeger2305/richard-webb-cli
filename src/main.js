const figlet = require("figlet");
const prompts = require("prompts");
const yargs = require("yargs");
const chalk = require("chalk");
const { options, actions, executePromptResponse } = require("./utils");

module.exports = async function main(args) {
  const yargsConfig = yargs(args.slice()) // for the sub commands to work, we need to take a copy.
    .command(
      "$0",
      "welcome message",
      () => {},
      argv => {
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
      }
    )
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
    .command(
      "get",
      "retrieve key attributes about Richard Webb",
      yargs =>
        yargs.option("info", {
          default: "skills",
          array: true,
          choices: ["skills", "history", "examples"]
        }),
      argv => {
        if (argv.info.includes("skills")) actions.getSkills();
        if (argv.info.includes("history")) actions.getHistory();
        if (argv.info.includes("examples")) actions.getExamples();
      }
    )
    .command(
      "send",
      "give Richard Webb something, like an email or a warm fuzzy feeling",
      yargs =>
        yargs.option("send", {
          alias: "s",
          default: "email",
          array: true,
          choices: ["email", "follow", "love"]
        }),
      argv => {
        if (argv.send.includes("email")) actions.sendEmail();
        if (argv.send.includes("follow")) actions.sendFollow();
        if (argv.send.includes("love")) actions.sendLove();
      }
    ).argv;
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
      break;
    }
  }

  process.exit(0);
};
