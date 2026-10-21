const producto = {
    nombre: "teclado",
    precio: 20,
    proveedor: {
        nombre: "a"
    }
};

const alias = producto;
const copia = { ...producto };

copia.precio = 30;
copia.proveedor.nombre = "B";

console.log("Original:", producto);
console.log("Alias:", alias);
console.log("Copia:", copia);

const copiaIndependiente = {
    ...producto,
    proveedor: { ...producto.proveedor }
};

copiaIndependiente.proveedor.nombre = "C";

console.log("Proveedor original:", producto.proveedor.nombre);
console.log("Proveedor independiente:", copiaIndependiente.proveedor.nombre);

const { nombre: nombreProducto, precio } = producto;

console.log(nombreProducto);
console.log(precio);