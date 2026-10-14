/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 10 · Múltiplos y divisibilidad
 */

let contador = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
        console.log(i, "es múltiplo de 3 y no de 5");
        contador++;
    }
}

console.log("Total de números del 1 al 100 que son múltiplos de 3 y no de 5:", contador);

/*
 * en la primera iteración i=1, no es múltiplo de 3 ni de 5, no entra en el if
 * en la segunda iteración i=2, no es múltiplo de 3 ni de 5, no entra en el if
 * en la tercera iteración i=3, es múltiplo de 3 y no de 5, entra en el if y se imprime "3 es múltiplo de 3 y no de 5", contador=1
 * en la ultima iteración i=100, es múltiplo de 5 y no de 3, no entra en el if
*/
