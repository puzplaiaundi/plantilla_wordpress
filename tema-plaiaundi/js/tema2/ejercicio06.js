/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */

function calcularDescuento(importe) {
    let porcentaje;
    if (importe >= 200) {
        porcentaje = 15;
    } else if (importe >= 100) {
        porcentaje = 10;
    } else if (importe >= 50) {
        porcentaje = 5;
    } else {
        porcentaje = 0;
    }
    const descuento = importe * porcentaje / 100;
    return { importe, porcentaje, descuento, total: importe - descuento };
}
 
function mostrar({ importe, porcentaje, descuento, total }) {
    console.log(
        `Importe: ${importe.toFixed(2)} € | Descuento: ${porcentaje}% | ` +
        `Descontado: ${descuento.toFixed(2)} € | Final: ${total.toFixed(2)} €`
    );
}
 
console.log("--- Casos de prueba ---");
[49, 50, 99.99, 100, 199.99, 200].forEach(v => mostrar(calcularDescuento(v)));
 
console.log("--- Con prompt ---");
const texto = prompt("Importe de la compra (€)");
const importe = Number(texto);
if (texto === null || texto.trim() === "" || Number.isNaN(importe) || importe < 0) {
    console.log("Importe no válido.");
} else {
    mostrar(calcularDescuento(importe));
}