import { Producto } from "Producto.js";

export class ProductoConRecargo extends Producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}
