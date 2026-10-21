/*
* Ejercicio 4 - Obtén un array con los precios, otro con los productos de menos de 40 € y 
otro con el producto con id 2. Predice primero el tipo y el contenido de cada resultado. 
No modifiques los datos originales.
*/
const productos = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
];

const precios = productos.map(p => p.precio);
const baratos = productos.filter(p => p.precio < 40);
const productoId2 = productos.find(p => p.id === 2);

console.log(precios);
console.log(baratos);
console.log(productoId2);
console.log(productos);