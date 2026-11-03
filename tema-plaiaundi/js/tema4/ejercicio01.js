/*
 * Tema 4
 * Ejercicio 1
 */

const libro =  {
    titulo: "El Quijote", 
    precio: 19.95, 
    unidades: 5, 
    calcularImporte: function() {
        return this.precio * this.unidades;
    }
};

console.log("Importe inicial:", libro.calcularImporte());

libro.unidades = 5;

console.log("Importe tras cambiar unidades:", libro.calcularImporte());

const campo = "editorial"

libro[campo] = "Anaya";
console.log("Editorial:", libro[campo]);

delete libro.editorial;

console.log("¿Sigue existiendo editorial?", libro.editorial);
console.log("¿Existe la clave?", "editorial" in libro);
