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

const libro1 = new Libro("JavaScript", 12, 3);
const libro2 = new Libro("PHP", 20, 0);

const libros = [libro1, libro2];

const titulos = libros.map(libro => libro.titulo);

console.log("Títulos:", titulos);

const disponibles = libros.filter(
    libro => libro.estaDisponible()
);

console.log("Disponibles:", disponibles);

const total = libros.reduce(
    (suma, libro) => suma + libro.calcularImporte(),
    0
);

console.log("Importe total:", total);

