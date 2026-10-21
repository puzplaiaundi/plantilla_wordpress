class Libro {
  constructor(titulo, precio, unidades) {
    this.titulo = titulo;
    this.precio = precio;
    this.unidades = unidades;
  }

  calcularImporte() {
    return this.precio * this.unidades;
  }

  estaDisponible() {
    return this.unidades > 0;
  }
}

const libros = [
  new Libro("El Quijote", 12, 3),
  new Libro("La Celestina", 20, 0)
];

const titulos = libros.map(libro => libro.titulo);
console.log("Títulos:", titulos);

const disponibles = libros.filter(libro => libro.estaDisponible());
console.log("Disponibles:", disponibles);

const total = libros.reduce((acumulado, libro) => acumulado + libro.calcularImporte(), 0);
console.log("Importe total:", total); // 36