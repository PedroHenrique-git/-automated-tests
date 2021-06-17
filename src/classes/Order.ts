import { TorderStatus } from "./interfaces/TorderStatus";
import { CustomerOrder } from "./interfaces/customer_protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging_protocol";
import { PersistencyProtocol } from "./interfaces/persistency_protocol";

export class Order {
  private _orderStatus: TorderStatus = "open";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): TorderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.message.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} está sendo processado`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente ${this.customer.getName()}, com ID: ${this.customer.getIDN()} finalizou a compra`,
    );
  }
}
