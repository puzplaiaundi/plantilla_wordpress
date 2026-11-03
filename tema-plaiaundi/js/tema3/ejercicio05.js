/*
 * Tema 3
 * Practica final
 */

const catalogo = [
   { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
   { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
   { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
   { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

// ===== FUNCIONES =====
function obtenerNombres(lista) {
   return lista.map(p => p.nombre);
}

function obtenerDisponibles(lista) {
   return lista.filter(p => p.stock > 0);
}

function buscarPorId(lista, id) {
   return lista.find(p => p.id === id);
}

function calcularValorStock(lista) {
   return lista.reduce((suma, p) => suma + p.precio * p.stock, 0);
}

function obtenerNombresDisponibles(lista) {
   return obtenerDisponibles(lista).map(p => p.nombre);
}

// ===== PRUEBAS =====
console.log("--- Catálogo completo ---");
const nombres = obtenerNombres(catalogo);
console.log("Nombres:", nombres, "→", nombres.length, "nombres");

const disponibles = obtenerDisponibles(catalogo);
console.log("Disponibles:", disponibles.map(p => p.nombre), "→", disponibles.length);

const valor = calcularValorStock(catalogo);
console.log("Valor de stock:", valor);

const nombresDisp = obtenerNombresDisponibles(catalogo);
console.log("Nombres disponibles:", nombresDisp);

console.log("--- Búsqueda id 2 ---");
const p2 = buscarPorId(catalogo, 2);
console.log(p2);

console.log("--- Búsqueda id 99 ---");
const p99 = buscarPorId(catalogo, 99);
if (p99 === undefined) {
   console.log("No existe producto con id 99");
} else {
   console.log(p99.nombre);
}

console.log("--- Array vacío ---");
const vacio = [];
console.log("Nombres:", obtenerNombres(vacio));
console.log("Disponibles:", obtenerDisponibles(vacio));
console.log("Buscar id 1:", buscarPorId(vacio, 1));
console.log("Valor stock:", calcularValorStock(vacio));
console.log("Nombres disponibles:", obtenerNombresDisponibles(vacio));

console.log("--- Catálogo intacto ---");
console.log(catalogo);
