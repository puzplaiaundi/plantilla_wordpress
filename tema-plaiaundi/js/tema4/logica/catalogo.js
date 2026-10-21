// Funciones que reciben la lista por parámetro. No importan datos.js.

export function obtenerNombres(lista) {
  return lista.map(producto => producto.nombre);
}

export function obtenerDisponibles(lista) {
  return lista.filter(producto => producto.estaDisponible());
}

export function buscarPorId(lista, id) {
  return lista.find(producto => producto.id === id);
}

export function calcularValorStock(lista) {
  return lista.reduce(
    (acumulado, producto) => acumulado + producto.calcularValorStock(),
    0
  );
}

export function obtenerNombresDisponibles(lista) {
  return lista
    .filter(producto => producto.estaDisponible())
    .map(producto => producto.nombre);
}