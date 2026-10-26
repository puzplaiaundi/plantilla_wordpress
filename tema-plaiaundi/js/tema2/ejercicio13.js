/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 13 · Operador ternario: cuándo ayuda y cuándo no
 */

const edad = Number(prompt("Edad"));
 
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
 
const nota = Number(prompt("Nota (0-10)"));
 
const clasificacionTernario =
    nota >= 9 ? "Sobresaliente" :
    nota >= 7 ? "Notable" :
    nota >= 5 ? "Aprobado" :
    "Suspenso";
 
let clasificacionIf;
if (nota >= 9) {
    clasificacionIf = "Sobresaliente";
} else if (nota >= 7) {
    clasificacionIf = "Notable";
} else if (nota >= 5) {
    clasificacionIf = "Aprobado";
} else {
    clasificacionIf = "Suspenso";
}
 
console.log("Ternarios:", clasificacionTernario);
console.log("if / else if:", clasificacionIf);