/*
* - Ejercicio 7 -
*/
import { Producto } from "./modelos/Producto.js";
import { ProductoConRecargo } from "./modelos/ProductoConRecargo.js";
 
const teclado = new Producto(1, "Teclado", 35, 4);
const cable = new ProductoConRecargo(2, "Cable", 10, 2);
 
// 35 * 4 = 140
console.log(teclado.calcularValorStock());
// 10 * 2 + 10% = 22
console.log(cable.calcularValorStock());
 