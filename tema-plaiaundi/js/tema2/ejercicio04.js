/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

const LITROS_POR_OPERACION = 7;
const OPERACIONES = 5;
let contenido = 100;
 
console.log(`Contenido inicial: ${contenido} litros`);
for (let i = 1; i <= OPERACIONES; i++) {
    contenido = contenido - LITROS_POR_OPERACION;
    console.log(`Operación ${i}: quedan ${contenido} litros`);
}