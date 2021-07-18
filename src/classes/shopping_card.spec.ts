import { Discount } from "./discount";
import IProduct from "./interfaces/IProduct";
import { ShoppingCart } from "./shopping_cart";

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return {
    sut,
    discountMock,
  };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements IProduct {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  sut.addProduct(createCartItem("camisa", 30));
  sut.addProduct(createCartItem("Caneta", 1));

  return {
    sut,
    discountMock,
  };
};

describe("ShoppingCart", () => {
  it("should be an empty cart when no product is added", () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it("should have 2 cart items", () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it("should test total and totalWithDiscount", () => {
    const { sut } = createSutWithProducts();
    expect(sut.totalPrice()).toBe(31);
    expect(sut.totalWithDiscount()).toBe(31);
  });

  it("should add products and clear cart", () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it("should remove products", () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeProduct(1);
    expect(sut.items.length).toBe(1);
  });

  it("should call discount.calculate(price) once when totalWithDiscount is called", () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, "calculate");
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it("should call discount.calculate with total price when totalWithDiscount is called", () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, "calculate");
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.totalPrice());
  });
});
