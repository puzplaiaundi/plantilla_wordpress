let nota = Number(prompt("Introduce una nota del 0 al 10"));

if (nota < 5) {
    console.log("Suspenso");
} else if (nota < 7) {
    console.log("Aprobado");
} else if (nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}