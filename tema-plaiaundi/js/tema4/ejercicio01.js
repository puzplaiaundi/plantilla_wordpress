const libro = {
    titulo: "El Quijote",
    precio: 12,
    unidades: 3,
    
    calcularImporte() {
        return this.precio * this.unidades;
    }
};

console.log("Importe inicial (debe ser 36):", libro.calcularImporte());

libro.unidades = 5;
console.log("Importe modificado (debe ser 60):", libro.calcularImporte());

libro.editorial = "Planeta";

const campo = "editorial"; 
console.log("Acceso mediante variable y corchetes:", libro[campo]);

delete libro.editorial;
console.log("Tras eliminar la propiedad (debe ser undefined):", libro.editorial);
