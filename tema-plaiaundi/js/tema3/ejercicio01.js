/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1
 */

const esParFlechaReturnImplicito = n => n % 2 === 0;

const esParFlechaLlavesReturn = (n) => {
  return n % 2 === 0;
};

console.log('esParFlechaReturnImplicito(6):', esParFlechaReturnImplicito(6));
console.log('esParFlechaLlavesReturn(6):', esParFlechaLlavesReturn(6));

console.log('esParFlechaReturnImplicito(5):', esParFlechaReturnImplicito(5));
console.log('esParFlechaLlavesReturn(5):', esParFlechaLlavesReturn(5));
