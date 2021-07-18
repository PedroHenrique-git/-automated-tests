/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { Order } from "./Order";
import IProduct from "./interfaces/IProduct";
import { MessagingProtocol } from "./interfaces/messaging_protocol";
import { PersistencyProtocol } from "./interfaces/persistency_protocol";
import { CustomerOrder } from "./interfaces/customer_protocol";

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<Array<IProduct>> {
    return [];
  }
  addProduct(product: IProduct): void {
    //
  }
  removeProduct(index: number): void {
    //
  }
  totalPrice(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return true;
  }
  clear(): void {
    //
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage() {
    //
  }
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {
    //
  }
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return "";
  }

  getIDN(): string {
    return "";
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  };
};

describe("Order", () => {
  it("should not checkout if cart is empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("open");
  });

  it("should checkout if cart is not empty", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("closed");
  });

  it("should send an email to customer", () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, "sendMessage");
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it("should save order", () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, "saveOrder");
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it("should clear cart", () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, "clear");
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
