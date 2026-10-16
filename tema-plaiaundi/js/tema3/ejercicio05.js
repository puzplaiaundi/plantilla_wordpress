const catalogo = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
  { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

const obtenerNombres = (lista) => lista.map(p => p.nombre);

const obtenerDisponibles = (lista) => lista.filter(p => p.stock > 0);

const buscarPorId = (lista, id) => lista.find(p => p.id === id);

const calcularValorStock = (lista) => lista.reduce((total, p) => total + (p.precio * p.stock), 0);

const obtenerNombresDisponibles = (lista) => {
    return lista
    .filter(p => p.stock > 0)
    .map(p => p.nombre);
};

console.log("=== PRUEBAS CON CATÁLOGO COMPLETO ===");
console.log("Nombres:", obtenerNombres(catalogo));
console.log("Disponibles:", obtenerDisponibles(catalogo));
console.log("Valor Total Stock:", calcularValorStock(catalogo));
console.log("Nombres Disponibles:", obtenerNombresDisponibles(catalogo));

console.log("\n=== PRUEBAS DE BÚSQUEDA ===");
const prod2 = buscarPorId(catalogo, 2);
console.log("Búsqueda ID 2:", prod2); 

const prod99 = buscarPorId(catalogo, 99);
if (prod99) {
  console.log("Búsqueda ID 99:", prod99.nombre);
} else {
  console.log("Búsqueda ID 99: Producto no encontrado (undefined)");
}

console.log("\n=== PRUEBAS CON ARRAY VACÍO ===");
const catalogoVacio = [];
console.log("Nombres (vacío):", obtenerNombres(catalogoVacio));
console.log("Disponibles (vacío):", obtenerDisponibles(catalogoVacio));
console.log("Valor Stock (vacío):", calcularValorStock(catalogoVacio));
console.log("Búsqueda ID 1 (vacío):", buscarPorId(catalogoVacio, 1));

console.log("\n=== COMPROBACIÓN DE INMUTABILIDAD ===");
console.log("¿El catálogo original sigue intacto?:", catalogo.length === 4); 