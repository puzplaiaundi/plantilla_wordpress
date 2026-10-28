import { Producto } from "./producto.js";

export class ProductoConEncargo extends Producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}
