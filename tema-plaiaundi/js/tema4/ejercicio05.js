class Producto {
  #stock = 0;

  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock; // Activa el setter
  }

  get stock() {
    return this.#stock;
  }

  set stock(valor) {
    // Solo acepto enteros no negativos; si no, conservo el valor anterior
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

const teclado = new Producto(1, "Teclado", 35, 4);

teclado.stock = 8;
console.log(teclado.stock); // 8
teclado.stock = -1;
console.log(teclado.stock); // sigue 8
teclado.stock = 2.5;
console.log(teclado.stock); // sigue 8
teclado.stock = "6";
console.log(teclado.stock); // sigue 8

console.log("Vender 3:", teclado.vender(3)); // true
console.log("Stock:", teclado.stock); // 5
console.log("Vender 10:", teclado.vender(10)); // false (no hay tantas)
console.log("Vender 0:", teclado.vender(0)); // false
console.log("Vender 1.5:", teclado.vender(1.5)); // false
console.log("Stock:", teclado.stock); // sigue 5
console.log("¿Disponible?", teclado.estaDisponible()); // true
console.log("Valor del stock:", teclado.calcularValorStock()); // 175