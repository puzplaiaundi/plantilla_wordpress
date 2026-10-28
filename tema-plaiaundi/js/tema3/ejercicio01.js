/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */
// 1. Función flecha con retorno implícito
const esParImplicit = n => n % 2 === 0;

// 2. Función flecha con llaves y return explícito
const esParExplicit = (n) => {
  return n % 2 === 0;
};

// Comprobación de que ambas devuelven el mismo resultado booleano
console.log(esParImplicit(4) === esParExplicit(4)); // true (ambas devuelven true)
console.log(esParImplicit(7) === esParExplicit(7)); // true (ambas devuelven false)

console.log(esParImplicit(4)); // true
console.log(esParExplicit(4)); // true
console.log(esParImplicit(7)); // false
console.log(esParExplicit(7)); // false
