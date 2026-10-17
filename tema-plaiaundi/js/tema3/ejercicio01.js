/*
 * Tema 3 · Reescribe esPar como función flecha con retorno implícito. 
  Después escribe una flecha con llaves y return. Comprueba que ambas producen el mismo boolean.
 */

function esPar(numero) {
  return numero % 2 === 0;
}
 
const esParImplicita = numero => numero % 2 === 0;
 
const esParLlaves = numero => {
  return numero % 2 === 0;
};
 
console.log(esPar(4), esParImplicita(4), esParLlaves(4));
console.log(esPar(7), esParImplicita(7), esParLlaves(7));
 