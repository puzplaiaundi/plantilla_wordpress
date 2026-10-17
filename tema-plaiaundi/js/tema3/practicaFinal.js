const catalogo = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
  { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

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
  return obtenerNombres(obtenerDisponibles(lista));
}

// catalogo completo
console.log("nombres:", obtenerNombres(catalogo));
console.log("disponibles:", obtenerDisponibles(catalogo));
console.log("valor stock:", calcularValorStock(catalogo));
console.log("nombres disponibles:", obtenerNombresDisponibles(catalogo));

// busqueda id 2 (stock 0 pero existe)
const producto2 = buscarPorId(catalogo, 2);
console.log("id 2:", producto2);

// busqueda id 99 (no existe)
const producto99 = buscarPorId(catalogo, 99);
if (producto99 !== undefined) {
  console.log("id 99:", producto99.nombre);
} else {
  console.log("no existe el producto con id 99");
}

// array vacio
const vacio = [];
console.log("vacio nombres:", obtenerNombres(vacio));
console.log("vacio disponibles:", obtenerDisponibles(vacio));
console.log("vacio busqueda:", buscarPorId(vacio, 1));
console.log("vacio valor stock:", calcularValorStock(vacio));

// el catalogo no ha cambiado
console.log(catalogo);