const { BinarySearchTree } = require("../09");

describe("EJERCICIO 09: insertWord", () => {
  it("Si el método recibe un string vacío, debe retornar false", () => {
    let arbolDePalabras = new BinarySearchTree("Palabra");
    expect(arbolDePalabras.insertWord("")).toBe(false);
  });

  it("Si el método recibe una palabra de tamaño igual a una palabra ya existente, debe retornar false", () => {
    let arbolDePalabras = new BinarySearchTree("Palabra");
    expect(arbolDePalabras.insertWord("Nicolas")).toBe(false);
    expect(arbolDePalabras.insertWord("1234567")).toBe(false);
    expect(arbolDePalabras.insertWord("ACGLJJK")).toBe(false);
  });

  it("Una vez insertada la palabra en su posición, debe retornar la palabra insertada", () => {
    let arbolDePalabras = new BinarySearchTree("Palabra");
    expect(arbolDePalabras.insertWord("Jorge")).toBe("Jorge");
    expect(arbolDePalabras.insertWord("Morita")).toBe("Morita");
    expect(arbolDePalabras.insertWord("Mate")).toBe("Mate");
  });
  it("La palabra debe ser insertada en la posición correspondiente", () => {
    let arbolDePalabras = new BinarySearchTree("Palabra");
    expect(
      (function () {
        arbolDePalabras.insertWord("Jorge");
        arbolDePalabras.insertWord("Morita");
        arbolDePalabras.insertWord("Mate");
        return arbolDePalabras;
      })()
    ).toEqual({
      value: "Palabra",
      left: {
        value: "Jorge",
        left: { value: "Mate", left: null, right: null },
        right: { value: "Morita", left: null, right: null },
      },
      right: null,
    });
    expect(
      (function () {
        arbolDePalabras.insertWord("FrancoMiño");

        return arbolDePalabras;
      })()
    ).toEqual({
      value: "Palabra",
      left: {
        value: "Jorge",
        left: { value: "Mate", left: null, right: null },
        right: { value: "Morita", left: null, right: null },
      },
      right: { value: "FrancoMiño", left: null, right: null },
    });
  });
});
