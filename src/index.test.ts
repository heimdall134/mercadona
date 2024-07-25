import { main } from "./index";

describe("index", () => {
  it("should log hello world", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();

    await main();

    expect(logSpy).toHaveBeenCalledWith("hello world!");

    logSpy.mockRestore();
  });
});