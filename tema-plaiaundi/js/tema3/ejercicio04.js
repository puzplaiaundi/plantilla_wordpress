const productos = [
  { id: 1, nombre: 'Camiseta', precio: 25 },
  { id: 2, nombre: 'Pantalón', precio: 45 },
  { id: 3, nombre: 'Zapatillas', precio: 35 },
  { id: 4, nombre: 'Gorra', precio: 15 }
];

const precios = productos.map(producto => producto.precio);

const productosBaratos = productos.filter(producto => producto.precio < 40);

const productoId2Array = productos.filter(producto => producto.id === 2);

const productoId2Objeto = productos.find(producto => producto.id === 2);
