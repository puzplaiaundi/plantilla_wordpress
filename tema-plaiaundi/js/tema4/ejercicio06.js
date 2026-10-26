class ProductoConRecargo extends Producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}

const prodRecargo = new ProductoConRecargo(2, "Producto Especial", 10, 2);
console.log("Valor stock con recargo (debe ser 22):", prodRecargo.calcularValorStock());

const inventario = [
    new Producto(1, "Teclado", 35, 4),
    new ProductoConRecargo(2, "Especial", 10, 2)
];

const valorTotalInventario = inventario.reduce((acc, p) => acc + p.calcularValorStock(), 0);
console.log("Valor Total Inventario (debe ser 162):", valorTotalInventario);
