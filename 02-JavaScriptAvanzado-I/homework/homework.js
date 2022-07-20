x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1

//---------------------------------------

console.log(bar); // undefined
console.log(baz); // ERROR, baz no esta definido
foo(); // No se ejecuta por el error anterior
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//---------------------------------------

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
// Nota: los var pueden volver a declararse, let no.
// Nota 2: volver a declarar variables es una mala practica

//---------------------------------------

var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
// Nota: La function auto invocada (AIFE) del ejercicio es una función de expresión (por estar encerrada entre paréntesis) es  por eso <var instructor = "Franco"> no cambia al <instructor> global

//---------------------------------------

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco

//---------------------------------------

console.log(6 / "3") //--------> 2
console.log("2" * "3") //------> 6
console.log(4 + 5 + "px") //---> "9px"
console.log("$" + 4 + 5) //----> "$45"
console.log("4" - 2) //--------> 2
console.log("4px" - 2) //------> NaN -> (Not a Number) se 
console.log(7 / 0) //----------> Infinity
console.log({}[0]) //----------> [0] --> {} NO es un objeto, es un bloque de código (en este ej vació)
console.log(parseInt("09")) //-> 9
console.log(5 && 2) //---------> 2 -> Muestra el ultimo si todo es verdadero
console.log(2 && 5) //---------> 5 -> Muestra el ultimo si todo es verdadero
console.log(5 || 0) //---------> 5 -> Muestra el primero que sea verdadero
console.log(0 || 5) //---------> 5 -> Muestra el primero que sea verdadero
console.log([3]+[3]-[10]) //---> 23 -> concatena "3" con "3" y con la resta convierte todo a Number para operar -> "3"+"3" = "33" -> "33"-10 = 23
console.log(3>2>1) //----------> false -> 3>2 = true = 1 -> 1>1 = false

console.log([] == ![]) //------> true -> 0==0 = true
// Nota 1: typeof de [] -> "object"
// Nota 2: typeof de ![] -> "false"

//---------------------------------------

function test() {
  console.log(a); // undefined
  console.log(foo()); // 2

  var a = 1;
  function foo() {
     return 2;
  }
}

test();

//---------------------------------------

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

//---------------------------------------

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // Juan Perez

//---------------------------------------

function printing() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printing();
// 1
// 4
// 3
// 2