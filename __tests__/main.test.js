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

beforeEach(() => {
  Object.values(mockActions).forEach(mock => mock.mockClear());
  mockExecutePromptResponse.mockClear();
});

describe("CLI", () => {
  test("will print the version", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    console.log = jest.fn();
    process.argv = ["rwc", "--version"];
    await cli();
    expect(console.log).toHaveBeenCalledWith(version);
    expect(mockExit).toHaveBeenCalledWith(0);
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
  test("runs in interactive mode with an async question", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelection = jest.fn();
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse]);
    process.argv = ["", "--interactive"];
    await cli();
    expect(mockExecutePromptResponse).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("exits automatically if no parameters are supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    process.argv = ["rwc"];
    await cli();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will prompt to keep alive if param supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelection = jest.fn();
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    // Supplies a mock response, keeps alive once, supplies it again, then exits.
    prompts.inject([mockPromptResponse, false, mockPromptResponse, true]);
    process.argv = ["rwc", "--interactive", "--keep-alive"];
    await cli();
    expect(mockExecutePromptResponse.mock.calls.length).toBe(2);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will not prompt to keep alive if param not supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelection = jest.fn();
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse, false, mockPromptResponse, true]);
    process.argv = ["rwc", "--interactive"];
    await cli();
    expect(mockExecutePromptResponse.mock.calls.length).toBe(1);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
});
