export class Producto {
    #stock;
    constructor(id, nombre, precio, stockInicial) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.#stock = 0;
        this.stock = stockInicial;
    }
    get stock() { return this.#stock; }
    set stock(valor) {
        if (typeof valor === 'number' && Number.isInteger(valor) && valor >= 0) {
            this.#stock = valor;
        }
    }
    vender(unidades) {
        if (typeof unidades === 'number' && Number.isInteger(unidades) && unidades > 0 && unidades <= this.#stock) {
            this.#stock -= unidades;
            return true;
        }
        return false;
    }
    estaDisponible() { return this.#stock > 0; }
    calcularValorStock() { return this.precio * this.#stock; }
}
