export class Producto {
  #stock;

  constructor(id, nombre, precio, stockInicial) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stockInicial;
  }

  get stock() {
    return this.#stock;
  }

  set stock(valor) {
    if (Number.isInteger(valor) && valor >= 0) {
      this.#stock = valor;
    }
  }

  calcularValorStock() {
    return this.precio * this.#stock;
  }
}
