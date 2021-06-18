import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  cnpj: string,
  name: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(cnpj, name);
};

afterEach(() => jest.clearAllMocks());

describe("IndividualCustomer", () => {
  it("should have property firstName, lastName, cpf", () => {
    const sut = createIndividualCustomer("Pedro", "Henrique", "111.111.111-11");
    expect(sut).toHaveProperty("firstName");
    expect(sut).toHaveProperty("lastName");
    expect(sut).toHaveProperty("cpf");
  });

  it("should have methods getName and getIdn", () => {
    const sut = createIndividualCustomer("Pedro", "Henrique", "111.111.111-11");
    expect(sut.getName()).toBe("Pedro Henrique");
    expect(sut.getIDN()).toBe("111.111.111-11");
  });
});

describe("EnterpriseCustomer", () => {
  afterEach(() => jest.clearAllMocks());

  it("should have property cnpj, ", () => {
    const sut = createEnterpriseCustomer("901.12312.123123", "Bramil");
    expect(sut).toHaveProperty("cnpj");
    expect(sut).toHaveProperty("enterPriseName");
  });

  it("should have methods getName and getIdn", () => {
    const sut = createEnterpriseCustomer("901.12312.123123", "Bramil");
    expect(sut.getName()).toBe("Bramil");
    expect(sut.getIDN()).toBe("901.12312.123123");
  });
});
