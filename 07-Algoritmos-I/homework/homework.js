"use strict";
// No cambies los nombres de las funciones.
const intercambiar = (p1, p2, a) => ([a[p1], a[p2]] = [a[p2], a[p1]]);

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arregloFactores = [1];
  var divisor = 2;
  while (num > 1) {
    if (num % divisor === 0) {
      arregloFactores.push(divisor);
      num = num / divisor;
    } else divisor++;
  }
  return arregloFactores;
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let f = array.length - 1; f > 0; f--)
    for (let i = 0; i < f; i++)
      if (array[i] > array[i + 1]) intercambiar(i, i + 1, array);
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    for (let r = i - 1; temp < array[r]; r--) intercambiar(r, r + 1, array);
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min !== i) intercambiar(i, min, array);
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
