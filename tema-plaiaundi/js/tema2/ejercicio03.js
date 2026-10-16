/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

let valor1 = prompt("Introduce el primer número:");
let valor2 = prompt("Introduce el segundo número:");

let numero1 = Number(valor1);
let numero2 = Number(valor2);

if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    console.log("Error: uno de los valores introducidos no es un número válido.");
} else {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));

    if (numero2 === 0) {
        console.log("No se puede dividir entre 0.");
    } else {
        console.log("División: " + (numero1 / numero2));
    }
}