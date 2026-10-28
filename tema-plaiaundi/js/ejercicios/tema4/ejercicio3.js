const producto = {
    nombre: "Teclado",
    precio: 35,
    proveedor: {
        nombre: "Proveedor A"
    }
};

const alias = producto;

const copia = { ...producto };

copia.precio = 50;
copia.proveedor.nombre = "Proveedor B";

console.log("Original:", producto);
console.log("Alias:", alias);
console.log("Copia:", copia);

const copiaIndependiente = {
    ...producto,
    proveedor: { ...producto.proveedor }
};

copiaIndependiente.proveedor.nombre = "Proveedor C";

console.log("Original:", producto.proveedor.nombre);
console.log("Copia independiente:", copiaIndependiente.proveedor.nombre);

const {
    nombre: nombreProducto,
    precio
} = producto;

console.log(nombreProducto);
console.log(precio);