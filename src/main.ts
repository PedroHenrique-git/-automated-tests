/*
  Open/Closed principle
  Entidades devem estar abertas para extensões mas fechadas para modificação
*/

import { Messaging } from "./services/messaging";
import { Order } from "./classes/Order";
import { Persistency } from "./services/persistency";
import { Product } from "./product";
import { ShoppingCart } from "./classes/shopping_cart";
import { FiftyPercentDiscount } from "./classes/discount";
import { IndividualCustomer } from "./classes/customer";
import { MessagingProtocol } from "./classes/interfaces/messaging_protocol";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const customer = new IndividualCustomer("Pedro", "Henrique", "111.111.111-11");
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency, customer);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log("A mensagem foi enviada pelo mock");
  }
}

const messagingMock = new MessagingMock();
messagingMock.sendMessage();

shoppingCart.addProduct(new Product("Camisa", 50));
shoppingCart.addProduct(new Product("Calça", 90));
shoppingCart.addProduct(new Product("Cueca", 100));
shoppingCart.addProduct(new Product("Celular", 800));
shoppingCart.addProduct(new Product("Televisao", 999));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
