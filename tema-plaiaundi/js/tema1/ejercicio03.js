/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

let input1 = prompt("Introduce el primer número:");
let input2 = prompt("Introduce el segundo número:");

if (input1 === null || input2 === null) {
    alert("Operación cancelada o entrada vacía. Debes introducir valores numéricos.");
} else {
    let num1 = Number(input1);
    let num2 = Number(input2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        alert("Error: Uno o ambos valores ingresados no son números válidos.");
    } else {
        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacion = num1 * num2;
        let division = num2 === 0 ? "No es posible dividir entre 0" : num1 / num2;

        alert(
            `Resultados para los números ${num1} y ${num2}:\n` +
            `• Suma: ${suma}\n` +
            `• Resta: ${resta}\n` +
            `• Multiplicación: ${multiplicacion}\n` +
            `• División: ${division}`
        );
    }
}