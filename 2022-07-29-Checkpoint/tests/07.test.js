// const EJERCICIO = require('../09.js');
  
const restArray = require("../07");
describe('EJERCICIO 7: restArray', function() {
    it('Debería devolver 25 cuando el array es [1, [2, [3,4]], [5,6], 7]', function() {
      expect(restArray([1, [2, [3,4]], [5,6], 7])).toEqual(25);
    });
    it('Debería devolver -1 cuando el array está vacío', function() {
      expect(restArray([[]])).toEqual(-1);
    });
  });