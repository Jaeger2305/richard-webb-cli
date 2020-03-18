const prompts = require("prompts");
const version = require("../package").version;
const mockActions = {
  getSkills: jest.fn(),
  getHistory: jest.fn(),
  getExamples: jest.fn(),
  sendEmail: jest.fn(),
  sendFollow: jest.fn(),
  sendStar: jest.fn()
};
const mockExecutePromptResponse = jest.fn();
jest.mock("../src/utils", () => ({
  executePromptResponse: mockExecutePromptResponse,
  actions: mockActions,
  options: {}
}));
const cli = require("../src/main");

const aliases = {
  version: ["--version", "-v"],
  help: ["--help"],
  interactive: ["--interactive", "-i"],
  keepAlive: ["--keep-alive", "-k"],
  quiet: ["--quiet", "-q"]
};

beforeEach(() => {
  Object.values(mockActions).forEach(mock => mock.mockClear());
  mockExecutePromptResponse.mockClear();
});

describe("CLI", () => {
  aliases.version.forEach(versionAlias => {
    test(`will print the version when passing in ${versionAlias}`, async () => {
      const mockLog = jest.fn();
      console.log = mockLog;
      const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
      process.argv = ["rwc", versionAlias];
      await cli();
      expect(mockLog).toHaveBeenCalledWith(version);
      expect(mockExit).toHaveBeenCalledWith(0);
    });
  });
  test("will print help", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    console.log = jest.fn();
    process.argv = ["rwc", "--help"];
    await cli();
    expect(console.log.mock.calls[0][0]).toMatch(/Commands/);
    expect(console.log.mock.calls[0][0]).toMatch(/Options/);
    expect(console.log.mock.calls[0][0]).toMatch(/--help/);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will print skills from the CLI", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc", "get", "--info", "skills"];
    await cli();
    expect(mockActions.getSkills).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will print history from the CLI", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc", "get", "--info", "history"];
    await cli();
    expect(mockActions.getHistory).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will print examples from the CLI", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc", "get", "--info", "examples"];
    await cli();
    expect(mockActions.getExamples).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will handle sending an email from the CLI", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc", "send", "--action", "email"];
    await cli();
    expect(mockActions.sendEmail).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will handle sending a follow from the CLI", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc", "send", "--action", "follow"];
    await cli();
    expect(mockActions.sendFollow).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will handle sending a star from the CLI", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc", "send", "--action", "star"];
    await cli();
    expect(mockActions.sendStar).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  aliases.interactive.forEach(interactiveAlias => {
    test(`runs in interactive mode with an async question using ${interactiveAlias}`, async () => {
      const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
      const mockPromptSelection = jest.fn();
      const mockPromptResponse = jest
        .fn()
        .mockResolvedValue({ value: mockPromptSelection });
      prompts.inject([mockPromptResponse]);
      process.argv = ["rwc", interactiveAlias];
      await cli();
      expect(mockExecutePromptResponse).toHaveBeenCalled();
      expect(mockExit).toHaveBeenCalledWith(0);
    });
  });
  aliases.quiet.forEach(quietAlias => {
    test(`hides the ASCII art with argument ${quietAlias}`, async () => {
      const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
      console.log = jest.fn();
      process.argv = ["rwc", quietAlias];
      await cli();
      expect(mockActions.handleDefault).toBeCalledWith(
        expect.objectContaining({ quiet: true })
      );
      expect(mockExit).toHaveBeenCalledWith(0);
    });
  });
  test("exits automatically if no parameters are supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc"];
    await cli();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  aliases.keepAlive.forEach(keepAliveAlias => {
    test(`will prompt to keep alive if param supplied for ${keepAliveAlias}`, async () => {
      const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
      const mockPromptSelection = jest.fn();
      const mockPromptResponse = jest
        .fn()
        .mockResolvedValue({ value: mockPromptSelection });
      // Supplies a mock response, keeps alive once, supplies it again, then exits.
      prompts.inject([mockPromptResponse, false, mockPromptResponse, true]);
      process.argv = ["rwc", aliases.interactive[0], keepAliveAlias];
      await cli();
      expect(mockExecutePromptResponse.mock.calls.length).toBe(2);
      expect(mockExit).toHaveBeenCalledWith(0);
    });
  });
  test("will not prompt to keep alive if param not supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelection = jest.fn();
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse, false, mockPromptResponse, true]);
    process.argv = ["rwc", aliases.interactive[0]];
    await cli();
    expect(mockExecutePromptResponse.mock.calls.length).toBe(1);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
});
