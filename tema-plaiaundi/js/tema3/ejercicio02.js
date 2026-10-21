/*
 * Tema 3: Funciones, arrays y tratamiento de datos
 * Ejercicio 2 · Arrays y recorridos
 */
const notas = [5, 8, 3, 10, 6];
let suma = 0;
let aprobados= 0;
for (const nota of notas){
    suma += nota;
    if (nota>=5) {
        aprobados ++;
    }
}
let media;
if (notas.length>0) {
    media = suma/notas.length;
}else{
    media=0;
}

console.log ("suma: ", suma);
console.log ("media: ", media);
console.log("aprobados: ", aprobados);
