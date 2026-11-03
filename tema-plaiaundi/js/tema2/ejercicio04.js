/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

/* 
 * el precio de un producto sería let ya que puede variar
 * un contador sería let ya que varia
 * un nombre de usuario sería const ya que no varia
 * un saldo al que se le van restando cantidades sería let ya que varia
 * el iva seria const ya que no varia
 * el resultado de una operacion que se calcula una sola vez sería const ya que no varia
*/

let deposito = 100
const cantidad_a_retirar = 7

console.log("Deposito inicial:", deposito)

for (let i = 0; i < 5; i++) {
    deposito -= cantidad_a_retirar
    console.log("Deposito actual:", deposito)
}
