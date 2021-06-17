export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}
export interface IndivialCustomer {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriceCustomer {
  enterPriseName: string;
  cnpj: string;
}
