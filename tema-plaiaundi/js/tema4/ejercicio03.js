const producto = {
    nombre: "Camiseta",
    precio: 30,
    proveedor: {
        nombre: "Proveedor A"
    ,}
};

const alias = producto;

const copia = { ...producto };

copia.precio = 25;
copia.proveedor.nombre = "Proveedor B";

console.log(producto);

const copiaAnidada = { ...producto,
    proveedor: { ...producto.proveedor }
};

copiaAnidada.precio = 20;
copiaAnidada.proveedor.nombre = "Proveedor C";

console.log(producto);