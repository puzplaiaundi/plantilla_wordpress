/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 11 · Acumulador con while
 */

let suma = 0;
let cantidad = 0;
 
let texto = prompt("Introduce un número (0 para terminar)");
 
while (texto !== null && Number(texto) !== 0) {
    const numero = Number(texto);
    if (texto.trim() === "" || Number.isNaN(numero)) {
        console.log("Valor no válido, se ignora.");
    } else {
        suma += numero;
        cantidad++;
    }
    texto = prompt("Introduce un número (0 para terminar)");
}
 
if (cantidad === 0) {
    console.log("No se introdujo ningún número.");
} else {
    const media = suma / cantidad;
    console.log(`suma = ${suma}, cantidad = ${cantidad}, media = ${media.toFixed(2)}`);
}