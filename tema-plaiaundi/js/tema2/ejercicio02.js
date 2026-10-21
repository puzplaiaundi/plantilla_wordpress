/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 */

let valor1 = Number("25");
let valor2 = Number("25.7");
let valor3 = Number("25px");
let valor4 = parseInt("25px");
let valor5 = parseInt("25.7");
let valor6 = parseFloat("25.7kg");
let valor7 = Number("");
let valor8 = Number(" ");

console.log('Number("25")');
console.log("Resultado:", valor1);
console.log("Tipo:", typeof valor1);
console.log("¿Es NaN?:", Number.isNaN(valor1));

console.log('Number("25.7")');
console.log("Resultado:", valor2);
console.log("Tipo:", typeof valor2);
console.log("¿Es NaN?:", Number.isNaN(valor2));

console.log('Number("25px")');
console.log("Resultado:", valor3);
console.log("Tipo:", typeof valor3);
console.log("¿Es NaN?:", Number.isNaN(valor3));

console.log('parseInt("25px")');
console.log("Resultado:", valor4);
console.log("Tipo:", typeof valor4);
console.log("¿Es NaN?:", Number.isNaN(valor4));

console.log('parseInt("25.7")');
console.log("Resultado:", valor5);
console.log("Tipo:", typeof valor5);
console.log("¿Es NaN?:", Number.isNaN(valor5));

console.log('parseFloat("25.7kg")');
console.log("Resultado:", valor6);
console.log("Tipo:", typeof valor6);
console.log("¿Es NaN?:", Number.isNaN(valor6));

console.log('Number("")');
console.log("Resultado:", valor7);
console.log("Tipo:", typeof valor7);
console.log("¿Es NaN?:", Number.isNaN(valor7));

console.log('Number(" ")');
console.log("Resultado:", valor8);
console.log("Tipo:", typeof valor8);
console.log("¿Es NaN?:", Number.isNaN(valor8));

console.log("EXPLICACIÓN:");
console.log('Number("25px") devuelve NaN porque Number() intenta convertir toda la cadena a número.');
console.log('parseInt("25px") devuelve 25 porque lee el número desde el principio y se detiene al encontrar las letras.');