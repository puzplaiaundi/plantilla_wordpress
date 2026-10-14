let opcion = prompt("Elige una opción:\nA - Alta\nB - Baja\nC - Consultar\nS - Salir");

opcion = opcion.toLowerCase();

switch (opcion) {
    case "a":
        console.log("Alta");
        break;

    case "b":
        console.log("Baja");
        break;

    case "c":
        console.log("Consultar");
        break;

    case "s":
        console.log("Salir");
        break;

    default:
        console.log("Opción no válida");
}