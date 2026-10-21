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
    new Libro("El hobbit", 12, 3),
    new Libro("El señor de los anillos", 20, 0)
];

const titulos = libros.map(libro => libro.titulo);
const disponibles = libros.filter(libro => libro.estaDisponible());
const importeTotal = libros.reduce(
    (total, libro) => total + libro.calcularImporte(),
    0
);

console.log("Títulos:", titulos);
console.log("Disponibles:", disponibles);
console.log("Importe total:", importeTotal);