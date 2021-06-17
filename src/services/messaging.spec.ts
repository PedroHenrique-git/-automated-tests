import { Messaging } from "./messaging";

describe("Messaging", () => {
  afterEach(() => jest.clearAllMocks());

  const createSut = () => {
    return new Messaging();
  };

  it("should return undefined", () => {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage("teste")).toBeUndefined();
  });

  it("should call console.log once", () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage("teste");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should call console.log with 'teste'", () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.sendMessage("teste");
    expect(consoleSpy).toHaveBeenCalledWith("teste");
  });
});
