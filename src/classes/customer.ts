import * as Customer from "./interfaces/customer_protocol";

export class IndividualCustomer
  implements Customer.IndivialCustomer, Customer.CustomerOrder
{
  public firstName: string;
  public lastName: string;
  public cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + " " + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements Customer.EnterpriceCustomer, Customer.CustomerOrder
{
  public enterPriseName: string;
  public cnpj: string;

  constructor(cnpj: string, name: string) {
    this.enterPriseName = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.enterPriseName;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
