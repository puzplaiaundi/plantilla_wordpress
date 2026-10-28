// Funciones puras (no dependen de variables globales)
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
  return lista.reduce((acc, p) => acc + p.precio * p.stock, 0);
}

function obtenerNombresDisponibles(lista) {
  return lista
    .filter(p => p.stock > 0)
    .map(p => p.nombre);
}


// Casos de prueba
const catalogo = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
  { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

// Catálogo completo
console.log("Nombres:", obtenerNombres(catalogo)); 
// ["Teclado", "Ratón", "Monitor", "Cable"]

console.log("Disponibles:", obtenerDisponibles(catalogo)); 
// Array con 3 productos (excluye Ratón)

console.log("Nombres disponibles:", obtenerNombresDisponibles(catalogo)); 
// ["Teclado", "Monitor", "Cable"]

console.log("Valor stock total:", calcularValorStock(catalogo), "€"); 
// 580 €

// Búsqueda de id 2
const prod2 = buscarPorId(catalogo, 2);
console.log("Búsqueda ID 2:", prod2); 
// Objeto { id: 2, nombre: "Ratón", ... }

// Búsqueda de id 99 (control seguro)
const prod99 = buscarPorId(catalogo, 99);
if (prod99) {
  console.log("Producto encontrado:", prod99.nombre);
} else {
  console.log("Búsqueda ID 99: El producto no existe.");
}

// Array vacío
const arrayVacio = [];
console.log("Vacio - Nombres:", obtenerNombres(arrayVacio)); 
// []
console.log("Vacio - Disponibles:", obtenerDisponibles(arrayVacio)); 
// []
console.log("Vacio - Búsqueda ID 1:", buscarPorId(arrayVacio, 1)); 
// undefined
console.log("Vacio - Valor stock:", calcularValorStock(arrayVacio), "€"); 
// 0 €

// 5. Comprobar inmutabilidad del catálogo
console.log("Longitud del catálogo tras pruebas:", catalogo.length); 
// 4