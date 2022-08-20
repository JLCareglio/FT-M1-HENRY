const { LinkedList } = require('../02.js');
  
describe('EJERCICIO 2: simplifyList', function () {
  it('simplifyList debe retornar una nueva lista con los valores repetidos filtrados', function () {
    var linkedList = new LinkedList();
    var linkedList2 = new LinkedList();
    var linkedList3 = new LinkedList();
    linkedList.add(2);
    linkedList.add(10);
    linkedList.add(2);
    linkedList.add(8);
    linkedList.add(8);
    linkedList.add(1);
    linkedList.simplifyList();
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(10);
    expect(linkedList.head.next.next.value).toEqual(8);
    expect(linkedList.head.next.next.next.value).toEqual(1);
    expect(linkedList.head.next.next.next.next).toEqual(null);
    expect(linkedList2.simplifyList()).toEqual(false);
    linkedList3.add(3);
    linkedList3.add(3);
    linkedList3.add(3);
    linkedList3.add(3);
    linkedList3.simplifyList();
    expect(linkedList3.head.value).toEqual(3);
    expect(linkedList3.head.next).toEqual(null);
  });
});