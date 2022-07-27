"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size() {
    if (!this.left && !this.right) return 1;
    else if (this.left && this.right)
      return 1 + this.left.size() + this.right.size();
    else if (this.left) return 1 + this.left.size();
    else if (this.right) return 1 + this.right.size();
  }

  insert(value) {
    const hoja = new BinarySearchTree(value);
    if (this.value > value) {
      if (!this.left) this.left = hoja;
      else this.left.insert(value);
    } else if (this.value < value) {
      if (!this.right) this.right = hoja;
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (this.value === value) return true;
    if (this.value > value && this.left) return this.left.contains(value);
    else if (this.right) return this.right.contains(value);
    else return false;
  }

  depthFirstForEach(cb, dfs) {
    // if (dfs === "post-order") {
    //   // Post-Order
    //   // Bottom -> Top
    //   // Left -> Right
    // } else if (dfs === "pre-order") {
    //   // Pre-Order
    //   // Top -> Bottom
    //   // Left -> Right
    // } else {
    //   // In-Order
    //   // Left -> Node -> Right
    // }

    if (dfs === "pre-order") {
      cb(this.value);
      if (this.left) {
        this.left.depthFirstForEach(cb, dfs);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, dfs);
      }
    } else if (dfs === "post-order") {
      if (this.left) {
        this.left.depthFirstForEach(cb, dfs);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, dfs);
      }
      cb(this.value);
    } else {
      // in-order
      if (this.left) {
        this.left.depthFirstForEach(cb, dfs);
      }
      cb(this.value);
      if (this.right) {
        this.right.depthFirstForEach(cb, dfs);
      }
    }
  }

  breadthFirstForEach(cb, array) {
    if (array == null) {
      var array = [];
    }
    if (this.left) {
      array.push(this.left);
    }
    if (this.right) {
      array.push(this.right);
    }
    cb(this.value);
    array.length > 0 && array.shift().breadthFirstForEach(cb, array);
    // if(array.length > 0) array.shift().breadthFirstForEach(cb, array)
  }
}
const arbolito = new BinarySearchTree(20);
console.log(arbolito.size());
arbolito.insert(22);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
