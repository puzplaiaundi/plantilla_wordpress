/*
 * Tema 4
 * Ejercicio 6
 */

class Producto {
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

class ProductoConRecargo extends Producto {
  calcularValorStock() {
    return super.calcularValorStock() * 1.10;
  }
}

const prodNormal = new Producto(1, "Teclado", 35, 4);
const prodRecargo = new ProductoConRecargo(2, "Ratón", 10, 2);

console.log(prodRecargo.calcularValorStock());

const inventario = [prodNormal, prodRecargo];

const total = inventario.reduce((suma, producto) => suma + producto.calcularValorStock(), 0);
console.log(total);
