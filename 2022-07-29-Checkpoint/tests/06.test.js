const { BinarySearchTree } = require("../06.js");

describe("EJERCICIO 06: searchMaxtwo", function () {
  it("searchMaxTwo debe encontrar los dos valores mas grandes y devolver dentro de un array", function () {
    var tree = new BinarySearchTree(16);
    var tree2 = new BinarySearchTree(16);
    var tree3 = new BinarySearchTree(16);
    var tree4 = new BinarySearchTree(16);

    tree.insert(6);
    tree.insert(23);
    tree.insert(22);
    tree.insert(14);
    tree.insert(-3);
    tree.insert(17);
    tree.insert(-4);
    tree.insert(33);
    tree.insert(5);
    tree.insert(15);
    tree.insert(-10);
    tree.insert(3);
    tree.insert(44);
    tree.insert(2);
    tree2.insert(6);
    tree2.insert(5);
    tree2.insert(42);
    tree2.insert(7);
    tree2.insert(1);
    tree2.insert(53);
    tree2.insert(12);
    tree3.insert(6);
    tree3.insert(14);
    tree3.insert(2);
    tree3.insert(5);

    expect(tree.searchMaxTwo()).toEqual([44, 33]);
    expect(tree2.searchMaxTwo()).toEqual([53, 42]);
    expect(tree3.searchMaxTwo()).toEqual([16, 14]);
  });
});
