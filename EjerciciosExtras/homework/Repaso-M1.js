const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
  // Tu código aca:
  let sum = 0;
  array.forEach((element) => {
    sum += Array.isArray(element) ? countArray(element) : element;
  });
  return sum;
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  let acum = 0;
  acum += Object.keys(obj).length;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (typeof element === "object" && !Array.isArray(element)) {
        acum += countProps(element);
      }
    }
  }
  return acum;
};
// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kiricocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  let puntero = this.head;
  let cant = 0;
  while (puntero) {
    if (isNaN(Number(puntero.value))) {
      puntero.value = "Kiricocho";
      cant++;
    }
    puntero = puntero.next;
  }
  return cant;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  const newQueue = new Queue();
  while (queueOne.size() || queueTwo.size()) {
    if ((q1 = queueOne.dequeue())) newQueue.enqueue(q1);
    if ((q2 = queueTwo.dequeue())) newQueue.enqueue(q2);
  }
  return newQueue;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return (num) => multiplier * num;
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  let sum = this.value;
  if (this.left) sum += this.left.sum();
  if (this.right) sum += this.right.sum();
  return sum;
};

BinarySearchTree.prototype.delete = function (value) {
  // Comparar el valor del árbol con el valor a eliminar
  // Si son iguales,
  // evaluar si el árbol tiene nodos a la izquierda
  // Si los tiene, recorrer la rama izquierda hasta el nodo hoja de mayor valor
  // Si no los tiene, evaluar si tiene nodos a la derecha
  // Si los tiene, recorrer la rama derecha hasta el nodo hoja de menor valor
  // Si no los tiene,
  // Si el valor a eliminar es mayor que el valor del árbol,
  // almacenar una referencia al árbol
  // tomar el nodo de la derecha como nuevo árbol
  // Si el valor a eliminar es menor que el valor del árbol,
  // almacenar una referencia al árbol
  // tomar el nodo de la izquierda como nuevo árbol
  //
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
