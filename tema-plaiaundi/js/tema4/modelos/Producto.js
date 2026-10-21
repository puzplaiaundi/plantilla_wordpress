export class Producto {
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

    calcularValorStock(){
        return this.precio * this.#stock;
    }
}

class ProductoConRecargo extends Producto {
    calcularValorStock() {
        const valorStock = super.calcularValorStock();
        const recargo = 0.1;    
        return valorStock * (1 + recargo);
    }
}