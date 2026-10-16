/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 14 · Diagnóstico de código
 */

function calcularOriginal(precio, unidades) {
    const subtotal = precio * unidades;
    let descuento = 0;
 
    if (subtotal > 100) {
        descuento = subtotal * 0.10;
    }
    return { subtotal, descuento, total: subtotal - descuento };
}
 
function calcularCorregido(precio, unidades) {
    const subtotal = precio * unidades;
    let descuento = 0;
 
    if (subtotal >= 100) {
        descuento = subtotal * 0.10;
    }
    return { subtotal, descuento, total: subtotal - descuento };
}
 
const pruebas = [[25, 2], [25, 4], [25, 5]];
for (const [precio, unidades] of pruebas) {
    console.log(`${precio} € x ${unidades}`);
    console.log("  Original :", calcularOriginal(precio, unidades));
    console.log("  Corregido:", calcularCorregido(precio, unidades));
}

const precio = Number(prompt("Precio del producto"));
const unidades = Number(prompt("Número de unidades"));
const { subtotal, descuento, total } = calcularCorregido(precio, unidades);
console.log("Subtotal:", subtotal);
console.log("Descuento:", descuento);
console.log("Total:", total);