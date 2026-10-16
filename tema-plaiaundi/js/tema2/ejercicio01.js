/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

let nombre = prompt("Introduce tu nombre:");
let edad = prompt("Introduce tu edad:");
let altura = prompt("Introduce tu altura en metros:");

console.log("Tipos antes de convertir:");
console.log(typeof nombre); 
console.log(typeof edad);   
console.log(typeof altura); 

edad = Number(edad);
altura = Number(altura);

console.log("Tipos después de convertir:");
console.log(typeof nombre);
console.log(typeof edad);  
console.log(typeof altura);

console.log("Datos convertidos:");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Altura: " + altura + " m");