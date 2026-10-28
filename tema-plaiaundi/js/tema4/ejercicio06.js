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

  calcularValorStock() {
    return this.precio * this.#stock;
  }
}

class ProductoConRecargo extends Producto {

  calcularValorStock() {
    return super.calcularValorStock() * 1.1;
  }
  
}

// 1. Comprobación de una instancia de ProductoConRecargo (10 € y stock 2)
const itemRecargo = new ProductoConRecargo(2, "Producto Especial", 10, 2);
console.log("Valor con recargo (esperado 22 €):", itemRecargo.calcularValorStock()); // 22

// 2. Array con Producto y ProductoConRecargo y cálculo del total con reduce
const productos = [
  new Producto(1, "Teclado", 35, 4),               // 35 * 4 = 140 €
  new ProductoConRecargo(2, "Teclado Pro", 10, 2)  // 10 * 2 * 1.1 = 22 €
];

const valorTotal = productos.reduce((acc, p) => acc + p.calcularValorStock(), 0);
console.log("Valor total del inventario (esperado 162 €):", valorTotal); // 162 €