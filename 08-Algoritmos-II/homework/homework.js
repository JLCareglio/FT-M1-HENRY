"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  if (array.length > 1) {
    let pivote = Math.floor(Math.random() * array.length);
    let aL = [];
    let aR = [];
    let aIguales = array.splice(pivote, 1);
    for (let i = 0; i < array.length; i++) {
      if (array[i] < aIguales[0]) aL.push(array[i]);
      else if (array[i] > aIguales[0]) aR.push(array[i]);
      else aIguales.push(array[i]);
    }
    
  } else return array;
}

function mergeSort(array) {
  if (array.length > 1) {
    let aL = array.splice(0, array.length / 2);
    let aR = array;
    aL = mergeSort(aL);
    aR = mergeSort(aR);
    let aFinal = [];
    while (aL.length && aR.length)
      aFinal.push(aL[0] < aR[0] ? aL.shift() : aR.shift());
    return aFinal.concat(aL).concat(aR);
  } else return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
