/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 10 · Múltiplos y divisibilidad
 */
let contador = 0

for (let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 !== 0){
        console.log(i)
        contador++
    }
}
console.log("Cantidad de numeros que cumplen la condicion: ",contador);