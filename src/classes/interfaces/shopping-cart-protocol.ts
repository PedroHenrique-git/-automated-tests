import IProduct from "../../../open-closed-principle/classes/interfaces/IProduct";

export interface ShoppingCartProtocol {
  items: Readonly<Array<IProduct>>;
  addProduct(product: IProduct): void;
  removeProduct(index: number): void;
  totalPrice(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
