/*
 * Tema 4
 * Ejercicio 4
 */

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

const biblioteca = [libro1, libro2];

const titulos = biblioteca.map(libro => libro.titulo);
console.log(titulos);

const disponibles = biblioteca.filter(libro => libro.estaDisponible());
console.log(disponibles);

const importeTotal = biblioteca.reduce((total, libro) => total + libro.calcularImporte(), 0);
console.log(importeTotal);
