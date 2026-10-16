/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 8 · Clasificación de una nota
 */

const texto = prompt("Introduce una nota (0-10)");
const nota = Number(texto);
 
if (texto === null || texto.trim() === "" || Number.isNaN(nota)) {
    console.log("Error: no es un número válido.");
} else if (nota < 0 || nota > 10) {
    console.log("Error: la nota debe estar entre 0 y 10.");
} else if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}