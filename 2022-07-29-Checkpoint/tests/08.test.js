// const EJERCICIO = require('../10.js');
  
const  countDeep  = require("../08");

describe("EJERCICIO 8: countDeep", function () {
  let arr = [ "x",undefined, "b", "c", 4, "hi", [ 1, "a",true, "hola", [ "o",undefined, "n"] ], "6",[[["3"]]],false,"ma",undefined, [ 0 ], 200];
  let arr2 = [ 2,"l", "1", "3", 4, "hi", [ 1, "a", [ "o", "n"] ], "1",[["3"]],false,"u",undefined, [ 4 ], 125];
  let arr3 = [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"];
  it("Deberia contar la profundidad de nuestro array y realizar las ecuaciones correspondientes", function () {
    expect(countDeep(arr)).toEqual(4492.125);
  });
  it("Deberia contar la profundidad de nuestro array y realizar las ecuaciones correspondientes", function () {
    expect(countDeep(arr2)).toEqual(10);
  });
  it("Deberia contar la profundidad de nuestro array y realizar las ecuaciones correspondientes", function () {
    expect(countDeep(arr3)).toEqual(16);
  });
});

