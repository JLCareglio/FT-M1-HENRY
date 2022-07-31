const { crearStack } = require("../04");
const { Stack } = require("../DS");

describe("EJERCICIO 04: crearStack", () => {
  it("Debería retornar false en caso de recibir un string vacío", () => {
    expect(crearStack("")).toBe(false);
  });

  it("En caso de querer retirar un elemento y el Stack esté vacío, debe retornar el string 'Stack vacío'", () => {
    expect(crearStack("EJ***EMP*LO")).toEqual("Stack vacío");
    expect(crearStack("OTR****OEJEM***PL*")).toEqual("Stack vacío");
    expect(crearStack("12***123**1111***")).toEqual("Stack vacío");
    expect(crearStack("ABC****DFG**HIJ***")).toEqual("Stack vacío");
  });

  it("En caso de operar correctamente, la función debe retornar una instancia de Stack", () => {
    expect(crearStack("123*") instanceof Stack).toBe(true);
  });

  it("Debe crear un stack y agregar o quitar elementos según la secuencia recibida y retonar el stack", () => {
    expect(crearStack("EJ*EMP*LO").array).toEqual(["E", "E", "M", "L", "O"]);
    expect(crearStack("OTR**OEJEM***PL*").array).toEqual(["O", "O", "E", "P"]);
    expect(crearStack("12*123**1111***").array).toEqual(["1", "1", "1"]);
    expect(crearStack("ABC***DFG**HIJ***").array).toEqual(["D"]);
  });
});
