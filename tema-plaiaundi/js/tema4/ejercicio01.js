const libro = {
  titulo: "El Señor de los Anillos",
  precio: 12,
  unidades: 3,
  
  calcularImporte() {
    return this.precio * this.unidades;
  }
};


console.log("Importe inicial:", libro.calcularImporte()); 

libro.unidades = 5;

console.log("Importe actualizado:", libro.calcularImporte());


libro.editorial = "Minotauro";

const campo = "editorial";
console.log("Valor de la editorial:", libro[campo]);

delete libro.editorial; 
console.log("Editorial tras eliminarla:", libro.editorial);