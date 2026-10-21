/*
 * Tema 3: Funciones, arrays y tratamiento de datos
 * Ejercicio 1 · Formas de escribir una funcion
 */
const esPar1 = numero => numero % 2 === 0;
const esPar2 = numero => {
    return numero % 2 === 0;
};
//comprobacion
console.log (esPar1(4));
console.log (esPar2(4));
console.log (esPar1(5));
console.log (esPar2(5));
