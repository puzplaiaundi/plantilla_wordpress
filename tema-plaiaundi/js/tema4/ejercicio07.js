/*
 * Tema 4
 * Ejercicio 7
 */

import { Producto } from "./modelos/Producto.js";
import { ProductoConRecargo } from "./modelos/ProductoConRecargo.js";

const prodNormal = new Producto(1, "Teclado", 35, 4);
const prodRecargo = new ProductoConRecargo(2, "Ratón", 10, 2);

const inventario = [prodNormal, prodRecargo];

const total = inventario.reduce((suma, producto) => suma + producto.calcularValorStock(), 0);
console.log("Valor total del inventario:", total);
