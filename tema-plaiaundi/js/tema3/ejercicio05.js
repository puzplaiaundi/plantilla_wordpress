const catalogo = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
    { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

// ----- Funciones -----

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
    return lista.reduce((total, p) => total + p.precio * p.stock, 0);
}

function obtenerNombresDisponibles(lista) {
    return obtenerDisponibles(lista).map(p => p.nombre);
}

// ----- Pruebas -----

console.log("Nombres:", obtenerNombres(catalogo));
console.log("Disponibles:", obtenerDisponibles(catalogo));
console.log("Valor de stock:", calcularValorStock(catalogo));
console.log("Nombres disponibles:", obtenerNombresDisponibles(catalogo));

console.log("Id 2:", buscarPorId(catalogo, 2));

const inexistente = buscarPorId(catalogo, 99);
if (inexistente === undefined) {
    console.log("Id 99: no existe ese producto");
} else {
    console.log("Id 99:", inexistente.nombre);
}

const vacio = [];
console.log("Vacío - nombres:", obtenerNombres(vacio));
console.log("Vacío - disponibles:", obtenerDisponibles(vacio));
console.log("Vacío - búsqueda:", buscarPorId(vacio, 1));
console.log("Vacío - valor de stock:", calcularValorStock(vacio));

console.log("Catálogo después:", catalogo);
/* ===== COMPROBACIÓN FINAL ===== */

// 1. ¿Qué diferencia hay entre parámetro, argumento y retorno?
// Parámetro: nombre que recibe el dato al definir la función (lista, id).
// Argumento: valor real que pasamos al llamarla (catalogo, 2).
// Retorno: valor que la función devuelve con return.

// 2. ¿Por qué una flecha con llaves puede devolver undefined?
// Porque con llaves hay que escribir return. Si no, no devuelve nada.

// 3. ¿Por qué const permite ejecutar push sobre un array?
// Porque const impide reasignar la variable, pero no modificar el contenido.

// 4. ¿Qué recibe p en productos.filter(p => p.stock > 0)?
// Cada producto (objeto) del array, uno en cada vuelta.

// 5. ¿Cuándo obtienes un array, un objeto, undefined o un número?
// Array: map y filter. Objeto: find si lo encuentra.
// undefined: find si no lo encuentra o función sin return. Número: reduce al sumar.

// 6. ¿Qué aporta el valor inicial de reduce?
// El punto de partida del acumulador. Con un array vacío devuelve 0 en vez de error.