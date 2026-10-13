/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 12 · || frente a ??
 */

// Caso 1: cantidad = 0
const cantidad = 0;

const a = cantidad || 10;
const b = cantidad ?? 10;

console.log("cantidad:", cantidad);
console.log("cantidad || 10:", a);
console.log("cantidad ?? 10:", b);

/*Después resuelve este caso: 0 debe considerarse un valor válido, pero si no se ha proporcionado ningún valor (null o undefined) deben utilizarse 10 unidades por defecto. Elige || o ?? y justifica tu decisión.
 * RESPUESTA:
 * En este caso, se debe utilizar el operador de fusión nula (??) en lugar del operador lógico OR (||). Esto se debe a que el operador ?? solo considera null y undefined como valores "nulos",
 * mientras que el operador || considera cualquier valor falso (como 0, "", false) como nulo. Dado que 0 es un valor válido en este contexto,
 * queremos asegurarnos de que se utilice 0 en lugar de reemplazarlo con 10. Por lo tanto, la elección correcta es usar ?? para mantener el valor 0 cuando se proporciona, 
 * y solo usar 10 si no se ha proporcionado ningún valor (null o undefined).*/