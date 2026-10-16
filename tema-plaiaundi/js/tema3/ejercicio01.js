/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

const esParImplicito = num => num % 2 === 0;
const esParExplicito = (num) => {
    return num % 2 === 0;
};

//comprobaciones
console.log(esParImplicito(4));
console.log(esParExplicito(4));
console.log(esParImplicito(4) === esParExplicito(4));

console.log(esParImplicito(7));
console.log(esParExplicito(7));
console.log(esParImplicito(7) === esParExplicito(7));
