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
    new Libro("Libro A", 12, 3),
    new Libro("Libro B", 20, 0)
];

const titulos = libros.map(l => l.titulo);
const disponibles = libros.filter(l => l.estaDisponible());
const importeTotal = libros.reduce((acc, l) => acc + l.calcularImporte(), 0);

console.log("Títulos:", titulos);
console.log("Disponibles:", disponibles);
console.log("Importe Total (debe ser 36):", importeTotal);
