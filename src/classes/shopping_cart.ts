import { Discount } from "./discount";
import IProduct from "./interfaces/IProduct";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: Array<IProduct> = [];

  constructor(private readonly discount: Discount) {}

  addProduct(product: IProduct): void {
    this._items.push(product);
  }

  removeProduct(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Array<IProduct>> {
    return this._items;
  }

  totalPrice(): number {
    return +this._items
      .reduce((ac, product) => ac + product.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.totalPrice());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
