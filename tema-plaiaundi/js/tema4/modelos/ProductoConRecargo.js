import { Producto } from "./Producto.js";

export class ProductoConRecargo extends Producto {
  calcularValorStock() {
    // super llama al calculo de producto y le sumo el 10%
    return super.calcularValorStock() * 1.1;
  }
}