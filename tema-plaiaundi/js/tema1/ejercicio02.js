/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 */

const texto = '25.75 euros';

console.log('Number():', Number(texto));
console.log('parseInt():', parseInt(texto));
console.log('parseFloat():', parseFloat(texto));

/* Number("25px") devuelve NaN (Not a Number) porque no puede convertir la cadena "25px" a un número válido.
 parseInt("25px") devuelve 25 porque toma el número inicial de la cadena y lo convierte a un entero.*/