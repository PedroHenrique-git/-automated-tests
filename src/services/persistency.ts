import { PersistencyProtocol } from "../classes/interfaces/persistency_protocol";

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }
}
