import { catalogo } from "./data/datos.js";
import {
  obtenerNombres,
  obtenerDisponibles,
  buscarPorId,
  calcularValorStock,
  obtenerNombresDisponibles
} from "./logica/catalogo.js";

// Catálogo inicial
console.log("--- Catálogo inicial ---");
const nombres = obtenerNombres(catalogo);
const disponibles = obtenerDisponibles(catalogo);
const totalInicial = calcularValorStock(catalogo);
console.log("Nombres:", nombres);
console.log("Disponibles:", obtenerNombresDisponibles(catalogo));
console.log("Total:", totalInicial, "€");
console.assert(nombres.length === 4, "Debe haber 4 nombres");
console.assert(disponibles.length === 3, "Debe haber 3 disponibles");
console.assert(totalInicial === 588, "El valor inicial debe ser 588");

// Buscar id 2 / id 99
console.log("--- Buscar por id ---");
const raton = buscarPorId(catalogo, 2);
const noExiste = buscarPorId(catalogo, 99);
console.log("id 2:", raton.nombre);
console.log("id 99:", noExiste);
console.assert(raton.nombre === "Ratón", "El id 2 debe ser Ratón");
console.assert(noExiste === undefined, "El id 99 debe ser undefined");

// Lista vacía
console.log("--- Lista vacía ---");
const vacia = [];
console.log("Nombres:", obtenerNombres(vacia));
console.log("Disponibles:", obtenerDisponibles(vacia));
console.log("Buscar:", buscarPorId(vacia, 1));
console.log("Total:", calcularValorStock(vacia));
console.assert(obtenerNombres(vacia).length === 0, "Nombres vacío");
console.assert(obtenerDisponibles(vacia).length === 0, "Disponibles vacío");
console.assert(buscarPorId(vacia, 1) === undefined, "Búsqueda undefined");
console.assert(calcularValorStock(vacia) === 0, "El total debe ser 0");

// Vender 2 teclados
console.log("--- Vender 2 teclados ---");
const teclado = buscarPorId(catalogo, 1);
const venta1 = teclado.vender(2);
console.log("Venta:", venta1, "| Stock:", teclado.stock);
console.log("Total:", calcularValorStock(catalogo), "€");
console.assert(venta1 === true, "La venta de 2 debe ser true");
console.assert(teclado.stock === 2, "Deben quedar 2 teclados");
console.assert(calcularValorStock(catalogo) === 518, "El total debe ser 518");

// Vender luego 5 teclados
console.log("--- Vender 5 teclados ---");
const venta2 = teclado.vender(5);
console.log("Venta:", venta2, "| Stock:", teclado.stock);
console.log("Total:", calcularValorStock(catalogo), "€");
console.assert(venta2 === false, "La venta de 5 debe ser false");
console.assert(calcularValorStock(catalogo) === 518, "El total sigue en 518");

// Asignar stock = -3
console.log("--- Asignar stock -3 ---");
teclado.stock = -3;
console.log("Stock:", teclado.stock);
console.assert(teclado.stock === 2, "El stock debe seguir en 2");