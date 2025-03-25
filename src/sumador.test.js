import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 3)).toEqual(6);
  });

  it("deberia sumar dos numeros", () => {
    expect(sumar(6, 3)).toEqual(9);
  });

  it("deberia sumar dos numeros", () => {
    expect(sumar(6, 3)).toEqual(9);
  });
});


