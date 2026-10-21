/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · suma array
 */

let notas = [5, 8, 3, 10, 6];

let suma = 0;
let aprobados = 0;

for (let nota of notas) {
    suma += nota;

    if (nota >= 5) {
        aprobados++;
    }
}

let media;

if (notas.length === 0) {
    media = 0;
} else {
    media = suma / notas.length;
}

console.log("Suma: " + suma);
console.log("Media: " + media);
console.log("Cantidad de aprobados: " + aprobados);