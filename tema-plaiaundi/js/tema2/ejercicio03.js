/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

let var1 = Number(prompt("Introduce un número"));
let var2 = Number(prompt("Introduce un número"));

console.log("var1 (", var1, ") es válido?", !Number.isNaN(var1));
console.log("var2 (", var2, ") es válido?", !Number.isNaN(var2));

if (Number.isNaN(var1) || Number.isNaN(var2)) {
    console.log("Alguno de los valores introducidos no es un número válido");
} else{
    console.log("La suma de los valores es:", var1 + var2);
    console.log("La resta de los valores es:", var1 - var2);
    console.log("La multiplicación de los valores es:", var1 * var2);

    if (var2 !== 0) {
        console.log("La división de los valores es:", var1 / var2);
    } else {
        console.log("No se puede dividir por cero");
    }
}
