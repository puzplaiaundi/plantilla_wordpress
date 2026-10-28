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
      this.#stock -= unidades;
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

// Ejemplo de uso y comprobación:
const teclado = new Producto(1, "Teclado", 35, 4);

teclado.stock = 8;
console.log(teclado.stock); // 8

teclado.stock = -1;
console.log(teclado.stock); // 8

teclado.stock = 2.5;
console.log(teclado.stock); // 8

teclado.stock = "6";
console.log(teclado.stock); // 8

console.log(teclado.vender(3));              // true
console.log(teclado.stock);                 // 5
console.log(teclado.vender(10));             // false (supera existencias)
console.log(teclado.vender(-2));             // false (inválido)
console.log(teclado.estaDisponible());      // true
console.log(teclado.calcularValorStock()); // 175 (35 * 5)