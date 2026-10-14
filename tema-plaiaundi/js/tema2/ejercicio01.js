/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

let nombre= prompt("Introduce tu nombre");
let edad= prompt("Introduce tu edad");
let altura= prompt("Introduce tu altura");
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);

nombre=Number(nombre);
edad=Number(edad);
altura=Number(altura);
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);

/*
 * si escribes 20 en prompt("Edad"), el tipo de edad es string, ya que prompt devuelve un string
*/
