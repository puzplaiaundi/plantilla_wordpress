const catalogo = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
    { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

function obtenerNombres(lista) {
    return lista.map(producto => producto.nombre);
}

function obtenerDisponibles(lista) {
    return lista.filter(producto => producto.stock > 0);
}

function buscarPorId(lista, id) {
    return lista.find(producto => producto.id === id);
}

function calcularValorStock(lista) {
    return lista.reduce((total, producto) => total + producto.precio * producto.stock, 0);
}

function obtenerNombresDisponibles(lista) {
    return lista.filter(producto => producto.stock > 0)
                .map(producto => producto.nombre);
}

console.log("Nombres:", obtenerNombres(catalogo));

console.log("Disponibles:", obtenerDisponibles(catalogo));

console.log("Producto ID 2:", buscarPorId(catalogo, 2));

const producto99 = buscarPorId(catalogo, 99);

if (producto99 !== undefined) {
    console.log("Producto ID 99:", producto99);
} else {
    console.log("Producto ID 99 no encontrado");
}

console.log("Valor del stock:", calcularValorStock(catalogo));

console.log("Nombres disponibles:", obtenerNombresDisponibles(catalogo));

const catalogoVacio = [];

console.log("Nombres array vacío:", obtenerNombres(catalogoVacio));

console.log("Disponibles array vacío:", obtenerDisponibles(catalogoVacio));

console.log("Búsqueda array vacío:", buscarPorId(catalogoVacio, 2));

console.log("Valor stock array vacío:", calcularValorStock(catalogoVacio));

console.log("Catálogo original:", catalogo);