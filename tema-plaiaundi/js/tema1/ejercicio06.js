/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */

const importe = parseFloat(prompt("Introduce el importe de la compra en €:"));

if (isNaN(importe) || importe < 0) {
  console.log("Por favor, introduce un importe válido.");
} else {
  let porcentaje = 0;

  // Evaluación estricta de rangos límite
  if (importe >= 200) {
    porcentaje = 15;
  } else if (importe >= 100) {
    porcentaje = 10;
  } else if (importe >= 50) {
    porcentaje = 5;
  } else {
    porcentaje = 0;
  }

  const cantidadDescontada = (importe * porcentaje) / 100;
  const precioFinal = importe - cantidadDescontada;

  const resultado = `
Importe inicial: ${importe.toFixed(2)} €
Porcentaje aplicado: ${porcentaje}%
Cantidad descontada: ${cantidadDescontada.toFixed(2)} €
Precio final: ${precioFinal.toFixed(2)} €`;

  console.log(resultado);
  alert(resultado);
}