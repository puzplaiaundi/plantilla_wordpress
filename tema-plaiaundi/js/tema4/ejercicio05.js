/*
* - Ejercicio 5 -
*/
class Producto {
    // # -> Para marcar el campo como privado en js 
    #stock;

    constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    // activa el setter
    this.stock = stock;
  }

  // para acceder al valor privado
  get stock() {
    return this.#stock;
  }

  set stock(valor) {
    if (Number.isInteger(valor) && valor >= 0) {
        this.#stock = valor;
    }
  }

  vender(unidades) {
    if (Number.isInteger(unidades) || unidades <= 0 || unidades > this.#stock) {
      return false;
    }
    this.#stock = this.#stock - unidades;
    return true;
  }

  estaDisponible() {
    return this.#stock > 0;
  }

  calcularValorStock() {
    return this.precio * this.#stock;
  }

}

// Pruebas
const teclado = new Producto(1, "Teclado", 35, 4);
console.log(teclado.stock);
teclado.stock = 8;
console.log(teclado.stock);
teclado.stock = -1;
console.log(teclado.stock);
teclado.stock = 2.5;
console.log(teclado.stock);
teclado.stock = "6";
console.log(teclado.stock);