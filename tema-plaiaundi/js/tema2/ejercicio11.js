/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 11 · Acumulador con while
 */
let suma = 0;
let contador = 0;
let numero = Number(prompt("Introduce un número (0 para terminar): "));

while (numero !== 0) {
    suma += numero;
    contador++;

    numero = Number(prompt("Introduce otro número (0 para terminar): "));
}

let media = 0;

if (contador > 0) {
    media = suma / contador;
}

console.log("Suma total:", suma);
console.log("Cantidad de números:", contador);
console.log("Media:", media);