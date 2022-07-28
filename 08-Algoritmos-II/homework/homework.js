"use strict";
// No cambies los nombres de las funciones.
function quickSort(array) {
  if (array.length > 1) {
    let pivote = array.splice(Math.floor(Math.random() * array.length), 1);
    let aL = [];
    let aR = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] <= pivote[0]) aL.push(array[i]);
      else aR.push(array[i]);
    }
    return quickSort(aL).concat(pivote).concat(quickSort(aR));
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
