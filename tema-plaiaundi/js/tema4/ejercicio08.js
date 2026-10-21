/*
* - Ejercicio 7 -
*/
import { catalogo } from "./data/datos.js";
import {
  obtenerNombres,
  obtenerDisponibles,
  buscarPorId,
  calcularValorStock,
  obtenerNombresDisponibles
} from "./logica/catalogo.js";

// catalogo inicial
// aqui las funciones solo devuelven
console.log("nombres:", obtenerNombres(catalogo));
console.log("disponibles:", obtenerDisponibles(catalogo));
console.log("nombres disponibles:", obtenerNombresDisponibles(catalogo));
console.log("total:", calcularValorStock(catalogo));
// en caso de que algun assert falle salta un mensaje en consola
console.assert(obtenerNombres(catalogo).length === 4, "deben ser 4 nombres");
console.assert(obtenerDisponibles(catalogo).length === 3, "deben ser 3 disponibles");
console.assert(calcularValorStock(catalogo) === 588, "el valor inicial debe ser 588");

// buscar por id
const raton = buscarPorId(catalogo, 2);
console.log("id 2:", raton);
console.assert(raton.nombre === "Ratón", "el id 2 debe ser el raton");

// con el 99 devuelve undefined
const noExiste = buscarPorId(catalogo, 99);
if (noExiste !== undefined) {
  console.log("id 99:", noExiste.nombre);
} else {
  console.log("no existe el producto con id 99");
}
console.assert(noExiste === undefined, "el id 99 debe dar undefined");

// lista vacia
// las funciones no deben dar error
const vacia = [];
console.log("vacia nombres:", obtenerNombres(vacia));
console.log("vacia disponibles:", obtenerDisponibles(vacia));
console.log("vacia busqueda:", buscarPorId(vacia, 1));
console.log("vacia total:", calcularValorStock(vacia));
console.assert(buscarPorId(vacia, 1) === undefined, "en lista vacia debe dar undefined");
// el 0 inicial del reduce hace que no de error
console.assert(calcularValorStock(vacia) === 0, "en lista vacia el total debe ser 0");

// vender 2 teclados
// busco el teclado en el catalogo para modificar ese mismo objeto
const teclado = buscarPorId(catalogo, 1);
console.log("vender 2:", teclado.vender(2));
console.log("stock:", teclado.stock);
console.log("total:", calcularValorStock(catalogo));
console.assert(teclado.stock === 2, "deben quedar 2 teclados");
console.assert(calcularValorStock(catalogo) === 518, "el total debe ser 518");

// vender 5 mas, no hay suficiente
// devuelve false y no cambia nada
console.log("vender 5:", teclado.vender(5));
console.log("total:", calcularValorStock(catalogo));
console.assert(calcularValorStock(catalogo) === 518, "el total debe seguir en 518");

// stock negativo
// el setter lo rechaza y se queda el valor anterior
teclado.stock = -3;
console.log("stock tras asignar -3:", teclado.stock);
console.assert(teclado.stock === 2, "el stock debe seguir en 2");