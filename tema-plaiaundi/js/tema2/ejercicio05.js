/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 5 · Igualdad estricta y coerción
 */
console.log(5 === 5);
console.log(5 === "5");
console.log(5 == "5");
console.log(0 === false);
console.log(0 == false);
console.log("" === false);
console.log("" == false);
console.log(null === undefined);
console.log(null == undefined);

// usamos === y !== porque comparan valor y tipo sin convertir nada
// == convierte los tipos antes de comparar y da cosas raras (0 == false es true)
// con === el resultado es predecible