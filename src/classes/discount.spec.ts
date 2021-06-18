import { Discount, NoDiscount, FiftyPercentDiscount } from "./discount";

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe("product", () => {
  afterEach(() => jest.clearAllMocks());

  it("should have no discount", () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it("should apply 50% discount on price", () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });
});
