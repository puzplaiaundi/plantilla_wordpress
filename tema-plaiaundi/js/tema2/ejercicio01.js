/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

const nombre = prompt("Nombre");
const edad = prompt("Edad");
const altura = prompt("Altura en metros");
 
console.log("--- Tipos originales ---");
console.log("nombre:", nombre, "->", typeof nombre);
console.log("edad:", edad, "->", typeof edad);
console.log("altura:", altura, "->", typeof altura);
 
const edadNum = Number(edad);
const alturaNum = Number(altura);
 
console.log("--- Tipos tras Number() ---");
console.log("edad:", edadNum, "->", typeof edadNum);
console.log("altura:", alturaNum, "->", typeof alturaNum);
 
console.log("--- Datos convertidos ---");
console.log(`Nombre: ${nombre}, edad: ${edadNum}, altura: ${alturaNum} m`);