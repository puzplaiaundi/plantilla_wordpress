const original = { 
    nombre: "A", 
    precio: 10, 
    proveedor: { nombreProv: "Corp X", pais: "ES" } 
};

const alias = original;
const copiaSuperficial = { ...original };

copiaSuperficial.precio = 15;
copiaSuperficial.proveedor.nombreProv = "Corp Y";

console.log("Original tras cambios en copia superficial:", original);

const copiaProfunda = {
    ...original,
    proveedor: { ...original.proveedor }
};

const { nombre: nombreProducto, precio } = original;
console.log(`Desestructurado -> Producto: ${nombreProducto}, Precio: ${precio}`);
