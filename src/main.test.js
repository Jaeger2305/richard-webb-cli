const prompts = require("prompts");
const cli = require("./main");

describe("CLI", () => {
  test("will print the version", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    console.log = jest.fn();
    expect(cli(["", "--version"]));
    expect(console.log).toHaveBeenCalledWith("0.0.1");
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will print help", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    console.log = jest.fn();
    expect(cli(["", "--help"]));
    expect(console.log.mock.calls[0][0]).toMatch(/Commands/);
    expect(console.log.mock.calls[0][0]).toMatch(/Options/);
    expect(console.log.mock.calls[0][0]).toMatch(/--help/);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("runs in interactive mode with an async question", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelection = jest.fn();
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse]);
    expect(await cli(["", "--interactive"]));
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("runs in interactive mode with nested async question", async () => {
    // The question might return another question, and so on.
    // This tests that recursion to one level deep.
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelectionNested = jest.fn();
    const mockPromptSelection = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelectionNested });
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse]);
    expect(await cli(["", "--interactive"]));
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockPromptSelectionNested).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("handles results that return a handler", async () => {
    // The question might return another question, and so on.
    // This tests that recursion to one level deep.
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelectionNested = jest.fn();
    const mockPromptSelection = jest
      .fn()
      .mockReturnValue({ value: mockPromptSelectionNested });
    const mockPromptResponse = jest
      .fn()
      .mockReturnValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse]);
    expect(await cli(["", "--interactive"]));
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockPromptSelectionNested).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("handles results that return a mixed handler and async", async () => {
    // The question might return another question, and so on.
    // This tests that recursion to one level deep.
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelectionNested = jest.fn();
    const mockPromptSelection = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelectionNested });
    const mockPromptResponse = jest
      .fn()
      .mockReturnValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse]);
    expect(await cli(["", "--interactive"]));
    expect(mockPromptSelection).toHaveBeenCalled();
    expect(mockPromptSelectionNested).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("exits automatically if no parameters are supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    expect(await cli([]));
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
    expect(await cli(["", "--interactive", "--keep-alive"]));
    expect(mockPromptSelection.mock.calls.length).toBe(2);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
  test("will not prompt to keep alive if param not supplied", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockPromptSelection = jest.fn();
    const mockPromptResponse = jest
      .fn()
      .mockResolvedValue({ value: mockPromptSelection });
    prompts.inject([mockPromptResponse, false, mockPromptResponse, true]);
    expect(await cli(["", "--interactive"]));
    expect(mockPromptSelection.mock.calls.length).toBe(1);
    expect(mockExit).toHaveBeenCalledWith(0);
  });
});
