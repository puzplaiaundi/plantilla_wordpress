/*
 * Tema 4
 * Ejercicio 3
 */

const producto = {
  nombre: "Teclado",
  precio: 50,
  proveedor: { nombre: "A" }
};

const alias = producto;
const copia = { ...producto };

copia.precio = 100;
copia.proveedor.nombre = "B";

console.log(producto.precio);
console.log(producto.proveedor.nombre);

const copiaIndependiente = {
  ...producto,
  proveedor: { ...producto.proveedor }
};

copiaIndependiente.proveedor.nombre = "C";
console.log(producto.proveedor.nombre);

const { nombre: nombreProducto, precio } = producto;
console.log(nombreProducto, precio);
