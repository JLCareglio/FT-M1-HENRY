"use strict";

function BinarioADecimal(num) {
  return parseInt(num, 2);

  // // Solución aplicando razonamiento lógico paso a paso:
  // let binario = num.toString().split("").map(Number);
  // let decimal = 0;
  // for (let i = binario.length - 1; i >= 0; i--) {
  //   const dígitoBinario = binario[i];
  //   const posición = binario.length - 1 - i;
  //   decimal += dígitoBinario * 2 ** posición;
  // }
  // return decimal;
}

function DecimalABinario(num) {
  return (num >>> 0).toString(2);

  // // Solución aplicando razonamiento lógico paso a paso:
  // let binario = "";
  // do {
  //   binario = num % 2 + binario;
  //   num = parseInt(num / 2);
  // } while (num != 0);
  // return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
