import { Producto } from "./modelos/Producto.js";
import { ProductoConRecargo } from "./modelos/ProductoConRecargo.js";

const teclado = new Producto(1, "Teclado", 35, 4);
const pantalla = new ProductoConRecargo(2, "Pantalla", 10, 2);

console.log(pantalla.calcularValorStock());

const productos = [teclado, pantalla];

const valorTotalStock = productos.reduce(
    (total, producto) => total + producto.calcularValorStock(),
    0
);

console.log("Valor total del stock:", valorTotalStock);