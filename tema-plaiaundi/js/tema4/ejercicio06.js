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

const pantalla = new ProductoConRecargo(1, "Pantalla", 10, 2);

console.log(pantalla.calcularValorStock());

const teclado = new Producto(1, "Teclado", 35, 4);

const productos = [pantalla, teclado];

const valorTotalStock = productos.reduce((total, producto) => total + producto.calcularValorStock(), 0);

console.log("Valor total del stock:", valorTotalStock);