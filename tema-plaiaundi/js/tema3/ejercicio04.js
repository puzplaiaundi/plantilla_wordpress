/*
 * Tema 3
 * Ejercicio 4
 */

const productos = [
   { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
   { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
   { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
 ];

// predicciones:
console.log("predicciones:");
console.log("array de precios - tipo: object, contenido: [35, 18, 180]");
console.log("array de productos de menos de 40 € - tipo: object, contenido: (el teclado y el ratón)");
console.log("array con el producto con id 2 - tipo: object, contenido: (el ratón)\n");

// 1) Array de precios → map
const precios = productos.map(p => p.precio);
console.log("array de precios:", precios);
console.log("tipo:", typeof precios);

// 2) Productos de menos de 40 € → filter
const baratos = productos.filter(p => p.precio < 40);
console.log("array de productos de menos de 40€:", baratos);
console.log("tipo:", typeof baratos);

// 3) Array con el producto con id 2 → filter
const producto2 = productos.filter(p => p.id === 2);
console.log("array con el producto con id 2:", producto2);
console.log("tipo:", typeof producto2);
