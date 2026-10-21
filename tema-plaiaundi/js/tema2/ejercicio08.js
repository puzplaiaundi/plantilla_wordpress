/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 8 · Clasificación de una nota
 */
let nota = Number(prompt("Introduce tu nota entre 0 y 10 "));

if (isNaN(nota) || nota < 0 || nota > 10){
    console.log("Nota no valida");
}else if(nota >= 9){
    console.log("Sobresaliente");
}else if(nota >= 7){
    console.log("notable")
}else if(nota >= 5){
    console.log("Notable")
}else{
    console.log("Suspenso")
}