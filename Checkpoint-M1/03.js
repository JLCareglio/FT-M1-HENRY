const { LinkedList } = require("./DS");

// No modifiques nada arriba de esta linea //
/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  En caso de que la lista esté vacía, retornar 0
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

LinkedList.prototype.count = function () {
  // Tu código acá:
  if (!this.head) return 0;
  let current = this.head;
  let sum = 0;
  while (current) {
    sum += current.value;
    current = current.next;
  }
  return sum;
};

// No modifiques nada debajo de esta linea //

module.exports = LinkedList;
