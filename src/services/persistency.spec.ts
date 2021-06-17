describe("TESTANDO ALGUMA COISA", () => {
  it("should return two", () => {
    const n1 = 1;
    const n2 = 1;
    expect(n1 + n2).toBe(2);
  });
});

describe("TESTANDO OUTRA COISA", () => {
  test("should return string", () => {
    const nome = "Luiz";
    const type = typeof nome;
    expect(type).toBe("string");
  });
});
