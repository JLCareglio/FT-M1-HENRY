const { LinkedList } = require('../01.js');
  
describe('EJERCICIO 1: sortList', function () {
  it('sortList debe ordenar los elementos de la lista de mayor a menor', function () {
    var linkedList = new LinkedList();
    linkedList.add(2);
    linkedList.add(5);
    linkedList.add(7);
    linkedList.add(8);
    linkedList.add(12);
    linkedList.add(3);
    linkedList.sortList();
    expect(linkedList.head.value).toEqual(12);
    expect(linkedList.head.next.value).toEqual(8);
    expect(linkedList.head.next.next.value).toEqual(7);
    expect(linkedList.head.next.next.next.value).toEqual(5);
    expect(linkedList.head.next.next.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next.next.next.value).toEqual(2);
    var linkedList2 = new LinkedList();
    linkedList2.add(1);
    linkedList2.add(2);
    linkedList2.add(3);
    linkedList2.add(4);
    linkedList2.add(5);
    linkedList2.sortList();
    expect(linkedList2.head.value).toEqual(5);
    expect(linkedList2.head.next.value).toEqual(4);
    expect(linkedList2.head.next.next.value).toEqual(3);
    expect(linkedList2.head.next.next.next.value).toEqual(2);
    expect(linkedList2.head.next.next.next.next.value).toEqual(1);
    var linkedList3 = new LinkedList();
    expect(linkedList3.sortList()).toEqual(false);
  })
});