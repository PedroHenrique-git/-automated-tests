import { Product } from "./product";

describe("product", () => {
  //afterEach(() => jest.clearAllMocks());
  const createSut = (name: string, price: number) => {
    return new Product(name, price);
  };

  it("should have property name", () => {
    const sut = createSut("camiseta", 49.9);
    expect(sut).toHaveProperty("name", sut.name);
  });

  it("should have property price", () => {
    const sut = createSut("camiseta", 49.9);
    expect(sut).toHaveProperty("price", sut.price);
  });

  it("should return closed number", () => {
    const sut = createSut("camiseta", 49.9);
    expect(sut.price).toBeCloseTo(sut.price);
  });
});
