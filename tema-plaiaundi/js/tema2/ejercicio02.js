/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 * 
 * Respuesta: Number("25px") intenta convertir todo el texto a número, pero como px no es un número, da Nan
 * parseInt("25px") lee solo el número que hay al principio del texto y se para en la primera letra, así que da 25
 * 
 */

const texto = "25.75 euros";

console.log("Number():", Number(texto));
console.log("parseInt():", parseInt(texto));
console.log("parseFloat():", parseFloat(texto));

console.log(Number("25"), typeof Number("25"), Number.isNaN(Number("25")));
console.log(Number("25.7"), typeof Number("25.7"), Number.isNaN(Number("25.7")));
console.log(Number("25px"), typeof Number("25px"), Number.isNaN(Number("25px")));
console.log(parseInt("25px"), typeof parseInt("25px"), Number.isNaN(parseInt("25px")));
console.log(parseInt("25.7"), typeof parseInt("25.7"), Number.isNaN(parseInt("25.7")));
console.log(parseFloat("25.7kg"), typeof parseFloat("25.7kg"), Number.isNaN(parseFloat("25.7kg")));
console.log(Number(""), typeof Number(""), Number.isNaN(Number("")));
console.log(Number(" "), typeof Number(" "), Number.isNaN(Number(" ")));