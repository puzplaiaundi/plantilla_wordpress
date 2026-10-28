class Producto {
    #stock;

    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;

        this.#stock = 0;
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
        if (
            Number.isInteger(unidades) &&
            unidades > 0 &&
            unidades <= this.#stock
        ) {
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

class ProductoConRecargo extends Producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}

const cable = new ProductoConRecargo(2, "Cable", 10, 2);

console.log(cable.calcularValorStock());

const productos = [
    new Producto(1, "Teclado", 35, 4),
    new ProductoConRecargo(2, "Cable", 10, 2)
];

const total = productos.reduce(
    (suma, producto) => suma + producto.calcularValorStock(),
    0
);

console.log("Valor total:", total);