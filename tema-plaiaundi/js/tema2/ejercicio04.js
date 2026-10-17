/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */
// precio: const, no cambia
// contador: let, va aumentando
// nombre del usuario: const, se asigna una vez
// saldo: let, se le va restando
// iva: const, es fijo
// resultado calculado una vez: const, no se reasigna
let litros = 100;
const retirada = 7;

for (let i = 1; i <= 5; i++) {
    litros = litros - retirada;
    console.log("operacion", i, "- litros:", litros);
}