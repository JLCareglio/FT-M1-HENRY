"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

// Solución con prototype
function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  const nuevoNodo = new Node(value);
  if (!this.head) this.head = nuevoNodo;
  else {
    let cursor = this.head;
    while (cursor.next) cursor = cursor.next;
    cursor.next = nuevoNodo;
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) return false;
  if (this.head.next === null) {
    let temp = this.head.value;
    this.head = null;
    return temp;
  } else {
    let cursor = this.head;
    while (cursor.next.next) cursor = cursor.next;
    let temp = cursor.next.value;
    cursor.next = null;
    return temp;
  }
};

LinkedList.prototype.search = function (value) {
  let callBack =
    typeof value !== "function" ? (datos) => datos === value : value;
  let cursor = this.head;
  while (cursor) {
    if (callBack(cursor.value)) return cursor.value;
    cursor = cursor.next;
  }
  return null;
};

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// Solución con class
class HashTable {
  constructor() {
    this.buckets = [];
    this.numBuckets = 35;
  }
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) sum += key.charCodeAt(i);
    return sum % this.numBuckets;
  }
  set(key, value) {
    if (typeof key !== "string")
      throw new TypeError("Key tiene que ser un string");

    let pos = this.hash(key);
    this.buckets[pos] = this.buckets[pos] || [];
    this.buckets[pos].unshift({ key: key, value: value });
  }
  get(key) {
    let pos = this.hash(key);

    for (let i = 0; i < this.buckets[pos].length; i++) {
      if (this.buckets[pos][i].key == key) {
        return this.buckets[pos][i].value;
      }
    }
    return false;
  }
  hasKey(key) {
    const r = this.get(key);
    if (r) return true;
    return false;
  }
}

//function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
