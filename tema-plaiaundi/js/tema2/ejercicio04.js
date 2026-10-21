/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

const litrosPorOperacion = 7;
const totalOperaciones = 5;
let contenidoDeposito = 100;
let contador = 0

// Las cantidades fijas usan const; el contenido y el contador cambian con let.
for (;contador < totalOperaciones; contador++) {
    contenidoDeposito -= litrosPorOperacion;
    console.log("Operación " + (contador + 1) + ": " + contenidoDeposito + " litros");
}
