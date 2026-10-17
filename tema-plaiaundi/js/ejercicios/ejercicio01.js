/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 * 
 * Respuesta: si escribes 20 en prompt("Edad"), typeof devuelve string,
 * prompt() siempre devuelve texto aunque escribas cifras
 * 
 */

const nombre = prompt("Nombre");
const edadTexto = prompt("Edad");
const alturaTexto = prompt("Altura en metros");

console.log("nombre:", typeof nombre);
console.log("edad:", typeof edadTexto);
console.log("altura:", typeof alturaTexto);

const edad = Number(edadTexto);
const altura = Number(alturaTexto);

console.log("edad convertida:", typeof edad);
console.log("altura convertida:", typeof altura);
console.log("datos:", nombre, edad, altura);