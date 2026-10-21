const libro = {
  titulo: "El Quijote",
  precio: 12,
  unidades: 3,
  calcularImporte() {
    return this.precio * this.unidades;
  }
};

console.log("Importe inicial:", libro.calcularImporte()); // 36

libro.unidades = 5;
console.log("Importe con 5 unidades:", libro.calcularImporte()); // 60

// Propiedad editorial
libro.editorial = "Anaya";
const campo = "editorial";
console.log("Editorial:", libro[campo]); // Anaya

// La eliminamos
delete libro.editorial;
console.log("Editorial después de borrar:", libro[campo]); // undefined