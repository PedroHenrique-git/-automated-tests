import { Persistency } from "./persistency";

describe("testing persistency class", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return undefined", () => {
    // System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it("should call console.log once", () => {
    // System under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should call console.log with 'Pedido salvo com sucesso'", () => {
    // System under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso");
  });
});
