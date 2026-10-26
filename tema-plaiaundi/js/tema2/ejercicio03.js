/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

function leerNumero(mensaje) {
    const texto = prompt(mensaje);
 
    if (texto === null || texto.trim() === "") {
        return NaN;
    }
    return Number(texto.trim().replace(",", "."));
}
 
const a = leerNumero("Primer número");
const b = leerNumero("Segundo número");
 
if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Error: debes introducir dos números válidos.");
} else {
    console.log(`Suma: ${a + b}`);
    console.log(`Resta: ${a - b}`);
    console.log(`Multiplicación: ${a * b}`);
 
    if (b === 0) {
        console.log("División: no se puede dividir entre 0.");
    } else {
        console.log(`División: ${a / b}`);
    }
}