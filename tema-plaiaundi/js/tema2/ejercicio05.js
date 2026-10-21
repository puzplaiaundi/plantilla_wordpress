/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 5 · Igualdad estricta y coerción
 */
console.log(5 === 5);           // true
console.log(5 === "5");         // false
console.log(5 == "5");          // true
console.log(0 === false);       // false
console.log(0 == false);        // true
console.log("" === false);      // false
console.log("" == false);       // true
console.log(null === undefined); // false
console.log(null == undefined);  // true
//utilizamos === y !== porque comparan el valor y el tipo de dato
//asi nos evitamos conversiones automáticas