const mockOpen = jest.fn();
jest.mock("open", () => mockOpen);
const fs = require("fs");
const path = require("path");
const utils = require("../src/utils");

const isFileExisting = filePath =>
  new Promise(resolve =>
    fs.access(filePath, fs.F_OK, error => resolve(!error))
  );

describe("CLI actions", () => {
  test("all actions are a handler", () => {
    expect(
      Object.values(utils.actions).every(action => typeof action === "function")
    ).toBe(true);
  });
  test("get skills file exists", async () => {
    expect(
      await isFileExisting(
        path.join(__dirname, "..", "docs", "basics", "API-skills.md")
      )
    ).toBe(true);
  });
  test("get history file exists", async () => {
    expect(
      await isFileExisting(
        path.join(__dirname, "..", "docs", "basics", "API-history.md")
      )
    ).toBe(true);
  });
  test("get examples file exists", async () => {
    expect(
      await isFileExisting(
        path.join(__dirname, "..", "docs", "examples", "API.md")
      )
    ).toBe(true);
  });
  test("skills are logged to the console", () => {
    console.log = jest.fn();
    utils.actions.getSkills();
    expect(console.log).toHaveBeenCalled();
  });
  test("history is logged to the console", () => {
    console.log = jest.fn();
    utils.actions.getHistory();
    expect(console.log).toHaveBeenCalled();
  });
  test("examples are logged to the console", () => {
    console.log = jest.fn();
    utils.actions.getExamples();
    expect(console.log).toHaveBeenCalled();
  });
  test("send email opens a link", () => {
    utils.actions.sendEmail();
    expect(mockOpen).toHaveBeenCalled();
  });
  test("send follow opens a link", () => {
    utils.actions.sendFollow();
    expect(mockOpen).toHaveBeenCalled();
  });
  test("send love opens a link", () => {
    utils.actions.sendLove();
    expect(mockOpen).toHaveBeenCalled();
  });
  test("exit will exit the process", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    utils.actions.exit();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
});

describe("CLI prompt options", () => {
  test("all options have a title", () => {
    expect(Object.values(utils.options).every(option => option.title)).toBe(
      true
    );
  });
  test("all options have a value", () => {
    expect(Object.values(utils.options).every(option => option.value)).toBe(
      true
    );
  });
});
