const libro = {
    titulo: "JavaScript",
    precio: 12,
    unidades: 3,

    calcularImporte() {
        return this.precio * this.unidades;
    }
};

console.log(libro.calcularImporte());

libro.unidades = 5;

console.log(libro.calcularImporte());

libro.editorial = "Editorial Técnica";

const campo = "editorial";

console.log(libro[campo]);

delete libro.editorial;

console.log(libro.editorial);