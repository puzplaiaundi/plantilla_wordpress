import { Producto } from "../modelos/Producto.js";
import { ProductoConRecargo } from "../modelos/ProductoConRecargo.js";

export const catalogo = [
  new Producto(1, "Teclado", 35, 4),
  new Producto(2, "Ratón", 18, 0),
  new Producto(3, "Monitor", 180, 2),
  new ProductoConRecargo(4, "Cable", 8, 10)
];