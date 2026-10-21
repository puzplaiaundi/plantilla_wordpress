export class Producto {
  #stock;

  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  get stock() {
    return this.#stock;
  }

  set stock(valor) {
    if (Number.isInteger(valor) && valor >= 0) {
      this.#stock = valor;
    }
  }

  vender(unidades) {
    if (!Number.isInteger(unidades) || unidades <= 0 || unidades > this.#stock) {
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