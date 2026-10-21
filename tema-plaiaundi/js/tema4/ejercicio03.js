const producto = {
  nombre: "Teclado",
  precio: 35,
  proveedor: { nombre: "A" }
};

const alias = producto;
const copia = { ...producto };

console.log(alias === producto); // true (es el mismo objeto)
console.log(copia === producto); // false (es otro objeto)

// Modifico el precio en la copia
copia.precio = 40;
console.log("Original precio:", producto.precio); // 35 (no cambia)

// Modifico el nombre del proveedor en la copia
copia.proveedor.nombre = "B";
console.log("Original proveedor:", producto.proveedor.nombre); // "B" (¡sí cambia!)

// Copia con proveedor independiente (spread anidado)
const independiente = { ...producto, proveedor: { ...producto.proveedor } };
independiente.proveedor.nombre = "C";
console.log("Original proveedor:", producto.proveedor.nombre); // sigue "B"
console.log("Independiente proveedor:", independiente.proveedor.nombre); // "C"

// Desestructuración
const { nombre: nombreProducto, precio } = producto;
console.log(nombreProducto, precio); // Teclado 35