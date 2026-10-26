import { Producto } from "modelos/Producto.js";
import { ProductoConRecargo } from "modelos/ProductoConRecargo.js";

const lista = [
    new Producto(1, "Teclado", 35, 4),
    new ProductoConRecargo(2, "Especial", 10, 2)
];

const total = lista.reduce((acc, p) => acc + p.calcularValorStock(), 0);
console.log("Resultado desde ejercicio07.js (Módulos ES):", total);
