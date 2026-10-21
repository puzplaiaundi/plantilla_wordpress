
import { Producto } from "./modelos/Producto.js";
import { ProductoConRecargo } from "./modelos/ProductoConRecargo.js";

const productos = [
  new Producto(1, "Teclado", 35, 4),
  new ProductoConRecargo(2, "Cable", 10, 2)
];

const valorTotal = productos.reduce(
  (acumulado, producto) => acumulado + producto.calcularValorStock(),
  0
);

console.log("Valor total:", valorTotal); // 162