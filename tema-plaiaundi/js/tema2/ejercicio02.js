/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 */

const texto = '25.75 euros';

console.log('Number():', Number(texto));
console.log('parseInt():', parseInt(texto));
console.log('parseFloat():', parseFloat(texto));

/*
 * Number("25px") y parseInt("25px") no producen el mismo resultado ya que Number() devuelve NaN y parseInt() devuelve 25
*/