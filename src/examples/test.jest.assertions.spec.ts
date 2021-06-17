describe("Primitive values", () => {
  it("should test jest assertions", () => {
    const number = 10;
    const falsy = "";
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(falsy).toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(8);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeCloseTo(10.001, 1);
    expect(number).toBeCloseTo(9.9996);
    expect(number).not.toBeNull();
    expect(number).toHaveProperty("toString");
  });
});

describe("objects", () => {
  it("should test jest assertions with objets", () => {
    const person = { name: "Luiz", age: 20 };
    const anotherPerson = { ...person };
    expect(person).toEqual(anotherPerson);
    //expect(person).toHaveProperty("age", 19);
    expect(person).not.toHaveProperty("age", 19);
    expect(person.name).toBe("Luiz");
  });
});
