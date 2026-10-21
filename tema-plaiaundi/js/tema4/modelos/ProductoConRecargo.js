import { Producto } from "./Producto.js";

export class ProductoConRecargo extends Producto {
    calcularValorStock() {
        const valorStock = super.calcularValorStock();
        const recargo = 0.1;
        return valorStock * (1 + recargo);
    }
}