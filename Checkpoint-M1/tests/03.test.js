 const LinkedList = require('../03.js');
  
describe('EJERCICIO 3: count', function () {
  it('LinkedList.count debe retornar la suma de todos los valores de la lista', function () {
    const list = new LinkedList();
    const list2 = new LinkedList();
    const list3 = new LinkedList();
    const list4 = new LinkedList();
    list.add(4);
    list.add(12);
    list.add(9);
    list.add(2);
    expect(list.count()).toEqual(27);
    list2.add(7);
    list2.add(29);
    list2.add(512151);
    list2.add(123126);
    expect(list2.count()).toEqual(635313);
    list3.add(1);
    list3.add(2);
    list3.add(3);
    list3.add(4);
    list3.remove();
    expect(list3.count()).toEqual(6);
    expect(list4.count()).toEqual(0);
  })
});