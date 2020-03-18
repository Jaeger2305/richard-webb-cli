const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const figlet = require("figlet");

const mockOpen = jest.fn();
jest.mock("open", () => mockOpen);
const mockPrompt = jest.fn();
jest.mock("prompts", () => mockPrompt);

const utils = require("../src/utils");
const version = require("../package").version;

// Just pass through the console markups.
Object.defineProperty(chalk, "blue", { value: text => text });
Object.defineProperty(figlet, "textSync", { value: text => text });

beforeEach(() => {
  mockOpen.mockClear();
  mockPrompt.mockClear();
});

const isFileExisting = filePath =>
  new Promise(resolve =>
    fs.access(filePath, fs.F_OK, error => resolve(!error))
  );

// Handlers can orchestrate other actions.
const handlers = [
  {
    handlerName: "handleSend",
    action: "sendEmail",
    param: { action: ["email"] }
  },
  {
    handlerName: "handleSend",
    action: "sendFollow",
    param: { action: ["follow"] }
  },
  {
    handlerName: "handleSend",
    action: "sendStar",
    param: { action: ["star"] }
  },
  {
    handlerName: "handleGet",
    action: "getSkills",
    param: { info: ["skills"] }
  },
  {
    handlerName: "handleGet",
    action: "getHistory",
    param: { info: ["history"] }
  },
  {
    handlerName: "handleGet",
    action: "getExamples",
    param: { info: ["examples"] }
  }
];

describe("CLI actions", () => {
  test("all actions are a handler", () => {
    expect(
      Object.values(utils.actions).every(action => typeof action === "function")
    ).toBe(true);
  });
  test("handle default displays ASCII art and a welcome message", () => {
    console.log = jest.fn();
    utils.actions.handleDefault({});
    expect(console.log.mock.calls[0][0]).toBe("Richard Webb CLI");
    expect(console.log.mock.calls[1][0]).toMatch(/Thanks for trying this CLI/);
  });
  test("the default action prints a welcome message with no ASCII art if quiet is specified", () => {
    console.log = jest.fn();
    utils.actions.handleDefault({ quiet: true });
    expect(console.log.mock.calls[0][0]).toMatch(/Thanks for trying this CLI/);
  });
  handlers.forEach(({ handlerName, action, param }) => {
    test(`the ${handlerName} handler will ${action} if its argument is supplied`, () => {
      console.log = jest.fn();
      const mockAction = jest.spyOn(utils.actions, action);
      utils.actions[handlerName](param);
      expect(mockAction).toHaveBeenCalled();
      mockAction.mockRestore();
    });
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
  test("send star opens a link", () => {
    utils.actions.sendStar();
    expect(mockOpen).toHaveBeenCalled();
  });
  test("exit will exit the process", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    utils.actions.exit();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("version prints the version", () => {
    console.log = jest.fn();
    utils.actions.getVersion();
    expect(console.log.mock.calls[0][0]).toBe(version);
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
  test("get attribute is a prompt where all values are actions", () => {
    utils.options.getAttribute.value();
    expect(Object.values(utils.actions)).toEqual(
      expect.arrayContaining(
        mockPrompt.mock.calls[0][0].choices.map(({ value }) => value)
      )
    );
  });
  test("send info is a prompt where all values are actions", () => {
    utils.options.sendInfo.value();
    expect(Object.values(utils.actions)).toEqual(
      expect.arrayContaining(
        mockPrompt.mock.calls[0][0].choices.map(({ value }) => value)
      )
    );
  });
});

describe("the prompt handler", () => {
  test("doesn't fail if not a handler", async () => {
    const promptResponseExecutor = jest.spyOn(utils, "executePromptResponse");
    await utils.executePromptResponse(undefined);
    expect(promptResponseExecutor).toBeCalledTimes(1);
  });
  test("handles handler responses", async () => {
    const mockPromptSelectionNested = jest.fn();
    const mockPromptSelection = jest
      .fn()
      .mockReturnValue({ value: mockPromptSelectionNested });
    const mockPromptResponse = jest
      .fn()
      .mockReturnValue({ value: mockPromptSelection });
    await utils.executePromptResponse({ value: mockPromptResponse });
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockPromptSelectionNested).toHaveBeenCalled();
  });
  test("handles nested async responses", async () => {
    const mockPromptSelectionNested = jest.fn();
    const mockPromptSelection = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelectionNested });
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    await utils.executePromptResponse({ value: mockPromptResponse });
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockPromptSelectionNested).toHaveBeenCalled();
  });
  test("handles mixed handler and async", async () => {
    // The question might return another question, and so on.
    // This tests that recursion to one level deep.
    const mockPromptSelectionNested = jest.fn();
    const mockPromptSelection = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelectionNested });
    const mockPromptResponse = jest
      .fn()
      .mockReturnValue({ value: mockPromptSelection });
    await utils.executePromptResponse({ value: mockPromptResponse });
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockPromptSelectionNested).toHaveBeenCalled();
  });
});
