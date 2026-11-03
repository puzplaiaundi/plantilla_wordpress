/*
 * Tema 3
 * Ejercicio 2
 */

const lista = [5, 8, 3, 10, 6];
const lista_vacia = [];

let suma_total = 0;
let media = 0;
let aprobados = 0;

listaEscogida = lista; // Cambiar a lista_vacia para probar el caso de lista vacía

for (n of listaEscogida) {
  suma_total += n;
  if (n >= 5) {
    aprobados++;
  }
}

console.log('Suma total:', suma_total);
console.log('Numero de aprobados:', aprobados);

if (listaEscogida.length > 0) {
  media = suma_total / listaEscogida.length;
  console.log('Media:', media);
} else{
  console.log('La lista está vacía, no se puede calcular la media.');
}
