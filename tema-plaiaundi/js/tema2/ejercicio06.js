/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */
const importe = Number(prompt("Importe de la compra"));

if (Number.isNaN(importe)) {
    console.log("El importe no es un número válido");
} else {
    let porcentaje = 0;

    if (importe >= 200) {
        porcentaje = 15;
    } else if (importe >= 100) {
        porcentaje = 10;
    } else if (importe >= 50) {
        porcentaje = 5;
    }

    const descuento = importe * porcentaje / 100;
    const total = importe - descuento;

    console.log("Importe inicial:", importe);
    console.log("Porcentaje aplicado:", porcentaje);
    console.log("Descuento:", descuento);
    console.log("Precio final:", total);
}