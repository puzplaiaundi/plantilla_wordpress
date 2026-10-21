const productos = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
];
// PREDICCIÓN (antes de ejecutar):
// precios   → Array de números: [35, 18, 180]
// baratos   → Array de 2 objetos: Teclado (35€) y Ratón (18€)
// producto2 → Un objeto (no array): { id: 2, nombre: "Ratón", precio: 18, stock: 0 }



// Array con los precios
const precios = productos.map(p => p.precio);

// Productos de menos de 40 €
const baratos = productos.filter(p => p.precio < 40);

// Producto con id 2
const producto2 = productos.find(p => p.id === 2);

console.log("Precios:", precios);
console.log("Productos de menos de 40 €:", baratos);
console.log("Producto con id 2:", producto2);
