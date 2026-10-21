const producto = {
  nombre: "Teclado",
  precio: 35,
  proveedor: { nombre: "A" }
};

const alias = producto;
const copia = { ...producto };

copia.precio = 40;
copia.proveedor.nombre = "B";

console.log(producto.precio);
console.log(producto.proveedor.nombre);
console.log(alias === producto);
console.log(copia === producto);

const independiente = { ...producto, proveedor: { ...producto.proveedor } };
independiente.proveedor.nombre = "C";
console.log(independiente.proveedor.nombre);
console.log(producto.proveedor.nombre);

const { nombre: nombreProducto, precio } = producto;
console.log(nombreProducto, precio);