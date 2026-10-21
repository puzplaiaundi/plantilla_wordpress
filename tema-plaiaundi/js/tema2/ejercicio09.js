/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 9 · Menú con switch
 */
let opcion = promt("Selecciona una opcion: A - Alta, B - Baja, C - Consultar, S - Salir");

if (opcion !== null){
    opcion = opcion.toUpperCase();
}

switch(opcion){
    case "A":
        console.log("Alta");
        break;
    case "B":
        console.log("Baja");
        break;
    case "C":
        console.log("Consulta");
        break;
    case "S":
        console.log("Saliendo...");
        break;
    default:
        console.log("Opción no vália")
}