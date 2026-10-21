/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 * Ampliación:  
 * Los decimales funcionan sin cambiar nada, siempre que uses punto
 * Si cancelas un prompt() devuelve null, y Number(null) es 0, así que lo toma como un 0 válido
 */

const texto1 = prompt("Primer número");
const texto2 = prompt("Segundo número");

const num1 = Number(texto1);
const num2 = Number(texto2);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Alguno de los valores no es un número válido");
} else {
    console.log("Suma:", num1 + num2);
    console.log("Resta:", num1 - num2);
    console.log("Multiplicación:", num1 * num2);

    if (num2 === 0) {
        console.log("No se puede dividir entre 0");
    } else {
        console.log("División:", num1 / num2);
    }
}