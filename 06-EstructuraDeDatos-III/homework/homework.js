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
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
  constructor(head = null) {
    this.head = head;
  }

  size(arbol = this.head) {
    if (arbol.left) return 1 + this.size(arbol.left);
    if (arbol.right) return 1 + this.size(arbol.right);
    return 0;
  }

  insert(nodo, arbol = this.head) {
    if (!this.head) this.head = nodo;
    if (arbol.data < nodo.data) {
      if (arbol.left) this.insert(nodo, arbol.left);
      else arbol.left = nodo;
    }
    if (arbol.data > nodo.data) {
      if (arbol.right) this.insert(nodo, arbol.right);
      else arbol.right = nodo;
    }
  }

  contains(valor, arbol = this.head) {
    if (arbol.data === valor) return true;
    if (arbol.left) return contains(valor, arbol.left);
    if (arbol.right) return contains(valor, arbol.right);
  }

  depthFirstForEach() {}

  breadthFirstForEach() {}
}

const arbolito = new BinarySearchTree();
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
