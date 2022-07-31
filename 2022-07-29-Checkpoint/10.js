
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá:
  const mergeSort = (array) => {
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
  return mergeSort(array.concat(Object.values(obj)))
}


//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
