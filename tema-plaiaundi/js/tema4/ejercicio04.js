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

const libro1 = new Libro("Libro A", 12, 3);
const libro2 = new Libro("Libro B", 20, 0);

const catalogo = [libro1, libro2];

const titulos = catalogo.map(libro => libro.titulo);
const disponibles = catalogo.filter(libro => libro.estaDisponible());
const importeTotal = catalogo.reduce((acc, libro) => acc + libro.calcularImporte(), 0);

console.log("Títulos:", titulos);
console.log("Disponibles:", disponibles);
console.log("Importe total:", importeTotal, "€");