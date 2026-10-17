/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 17 · Funcion flecha
 */

let num = prompt("Introduce un numero: ")

const esPar = numero => numero%2 === 0;

const llaves = numero => {
    return numero % 2 === 0;
};

console.log(esPar(num));
console.log(llaves(num));
