class Producto {
  #stock = 0;

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
    if (Number.isInteger(unidades) && unidades > 0 && unidades <= this.#stock) {
      this.#stock = this.#stock - unidades;
      return true;
    }
    return false;
  }

  estaDisponible() {
    return this.#stock > 0;
  }

  calcularValorStock() {
    return this.precio * this.#stock;
  }
}

class ProductoConRecargo extends Producto {
  calcularValorStock() {
    // 10 % más que el valor de la clase base
    return (super.calcularValorStock() * 110) / 100;
  }
}

const conRecargo = new ProductoConRecargo(2, "Cable", 10, 2);
console.log("Con recargo:", conRecargo.calcularValorStock()); // 22

const productos = [
  new Producto(1, "Teclado", 35, 4),
  new ProductoConRecargo(2, "Cable", 10, 2)
];

const valorTotal = productos.reduce(
  (acumulado, producto) => acumulado + producto.calcularValorStock(),
  0
);
console.log("Valor total:", valorTotal); // 162