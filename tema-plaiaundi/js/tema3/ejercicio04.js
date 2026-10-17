
 /* Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · map(), filter() y find()
 */


const productos = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
];

const precios = productos.map(producto => producto.precio);

const baratos = productos.filter(producto => producto.precio < 40);

const productoEncontrado = productos.find(producto => producto.id === 2);

console.log("Precios:", precios);
console.log("Productos de menos de 40€:", baratos);
console.log("Producto con ID 2:", productoEncontrado);