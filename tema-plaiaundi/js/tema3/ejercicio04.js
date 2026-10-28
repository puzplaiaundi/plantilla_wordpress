const productos = [
  { id: 1, nombre: "Teclado", precio: 35 },
  { id: 2, nombre: "Monitor", precio: 200 },
  { id: 3, nombre: "Ratón", precio: 15 }
];

// 1. Array con los precios
const precios = productos.map(p => p.precio);

// 2. Array con productos de menos de 40 €
const productosBaratos = productos.filter(p => p.precio < 40);

// 3. Producto con id 2 (dos enfoques según el resultado esperado)
const productoId2Array = productos.filter(p => p.id === 2); // Devuelve un Array
const productoId2Objeto = productos.find(p => p.id === 2);   // Devuelve el Objeto directamente

console.log("Precios:", precios);
console.log("Productos < 40 €:", productosBaratos);
console.log("Producto ID 2 (Array):", productoId2Array);
console.log("Producto ID 2 (Objeto):", productoId2Objeto);
console.log("Array original intacto:", productos);