import { Producto } from "./modelos/Producto.js";
import { ProductoConRecargo } from "./modelos/ProductoConRecargo.js";

const productos = [
  new Producto(1, "Teclado", 35, 4),               // 140 €
  new ProductoConRecargo(2, "Teclado Pro", 10, 2)  // 22 €
];

const valorTotal = productos.reduce((acc, p) => acc + p.calcularValorStock(), 0);
console.log("Valor total del inventario:", valorTotal, "€"); // 162 €