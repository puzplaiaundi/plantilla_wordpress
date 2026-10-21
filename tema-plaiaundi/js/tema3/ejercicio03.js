/*
* Ejercicio 3 - Con [5, 8, 3, 10, 6], calcula mediante for...of la suma, la media y la cantidad de aprobados. 
Después prueba con un array vacío: evita dividir entre cero al calcular la media.
*/
const alumnos = [
  { nombre: "Ane", nota: 8 },
  { nombre: "Iker", nota: 4 },
  { nombre: "June", nota: 7 }
];

// 3-1 declaracion de funcion
function anadirAprobado(alumno) {
  return { nombre: alumno.nombre, nota: alumno.nota, aprobado: alumno.nota >= 5 };
}
const resultado31 = alumnos.map(anadirAprobado);
console.log(resultado31);

// 3-2 expresion de funcion
const anadirAprobadoExpresion = function (alumno) {
  return { nombre: alumno.nombre, nota: alumno.nota, aprobado: alumno.nota >= 5 };
};
const resultado32 = alumnos.map(anadirAprobadoExpresion);
console.log(resultado32);

// 3-3 flecha en una variable
const anadirAprobadoFlecha = alumno => {
  return { nombre: alumno.nombre, nota: alumno.nota, aprobado: alumno.nota >= 5 };
};
const resultado33 = alumnos.map(anadirAprobadoFlecha);
console.log(resultado33);

// 3-4 anonima tradicional dentro de map
const resultado34 = alumnos.map(function (alumno) {
  return { nombre: alumno.nombre, nota: alumno.nota, aprobado: alumno.nota >= 5 };
});
console.log(resultado34);

// 3-5 flecha dentro de map
const resultado35 = alumnos.map(alumno => {
  return { nombre: alumno.nombre, nota: alumno.nota, aprobado: alumno.nota >= 5 };
});
console.log(resultado35);
