/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 11 · Acumulador con while
 */

let contador = 0;
let total = 0;
let media = 0;

let numero = Number(prompt("Introduce un número"));

while (numero !== 0) {
    contador++;
    total += numero;
    numero = Number(prompt("Introduce un número"));
}

media = total / contador;

console.log("Total de números introducidos:", contador);
console.log("Suma de los números introducidos:", total);
console.log("Media de los números introducidos:", media);

/*
* la mejor opcion para iterar aqui es while, ya que no sabemos cuantas veces se va a ejecutar el bucle, ya que depende de la entrada del usuario
*/
