/*
* Con [5, 8, 3, 10, 6], calcula mediante for...of la suma, la media y la cantidad de aprobados. 
Después prueba con un array vacío: evita dividir entre cero al calcular la media.
*/
function calcularNotas(lista) {
  let suma = 0;
  let aprobados = 0;
 
  for (const nota of lista) {
    suma += nota;
    if (nota >= 5) {
      aprobados++;
    }
  }
 
  let media = 0;
  if (lista.length > 0) {
    media = suma / lista.length;
  }
 
  return { suma: suma, media: media, aprobados: aprobados };
}
 
console.log(calcularNotas([5, 8, 3, 10, 6]));
console.log(calcularNotas([]));