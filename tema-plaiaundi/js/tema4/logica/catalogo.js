export function obtenerNombres(lista) {
  return lista.map(p => p.nombre);
}

export function obtenerDisponibles(lista) {
  return lista.filter(p => p.estaDisponible());
}

export function buscarPorId(lista, id) {
  return lista.find(p => p.id === id);
}

export function calcularValorStock(lista) {
  return lista.reduce((total, p) => total + p.calcularValorStock(), 0);
}

export function obtenerNombresDisponibles(lista) {
  return obtenerNombres(obtenerDisponibles(lista));
}