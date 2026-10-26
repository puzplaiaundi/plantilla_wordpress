/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 9 · Menú con switch
 */

const entrada = prompt("Opción:\nA - Alta\nB - Baja\nC - Consultar\nS - Salir");
const opcion = entrada === null ? "" : entrada.trim().toUpperCase();
 
switch (opcion) {
    case "A":
        console.log("Has seleccionado: Alta");
        break;
    case "B":
        console.log("Has seleccionado: Baja");
        break;
    case "C":
        console.log("Has seleccionado: Consultar");
        break;
    case "S":
        console.log("Has seleccionado: Salir");
        break;
    default:
        console.log("Opción no válida");
}