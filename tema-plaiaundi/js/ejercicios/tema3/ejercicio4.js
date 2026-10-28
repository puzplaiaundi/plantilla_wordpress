const productos = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
];

const precios = productos.map(p => p.precio);

console.log(precios);


const baratos = productos.filter(p => p.precio < 40);

console.log(baratos);
