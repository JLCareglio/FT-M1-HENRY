const mayorMenorOIgual = require("../05.js");

describe("EJERCICIO 05: mayorMenorOIgual", function () {
  it("La función generada debe devolver la suma de ambos parametros y si es menor a 10 debe retornar: la suma es menor a 10. si es mayor debe retornar: la suma es mayor a 10. si es igual debe retornar: 10", function () {
    var sumaCinco = mayorMenorOIgual(5);
    var sumaDiez = mayorMenorOIgual(10);
    expect(sumaCinco(2)).toBe("la suma es menor a 10");
    expect(sumaCinco(5)).toBe(10);
    expect(sumaCinco(11)).toBe("la suma es mayor a 10");
    expect(sumaDiez(2)).toBe("la suma es mayor a 10");
    expect(sumaDiez(11)).toBe("la suma es mayor a 10");
  });
  it("Si el argumento numFijo es igual a null devolver un arreglo vacio", function () {
    var clousureNull = mayorMenorOIgual(null);
    var clousureUndefined = mayorMenorOIgual(undefined);
    expect(clousureNull()).toEqual([]);
    expect(clousureUndefined()).toEqual([]);
  });
});
