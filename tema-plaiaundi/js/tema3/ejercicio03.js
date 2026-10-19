/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3
 */

const alumnos = [
  {nombre: "Ane", nota: 8},
  {nombre: "Iker", nota: 4},
  {nombre: "June", nota: 7}
];

console.log(alumnos);

// 3.1
function añadirAprobado(alumno) {
  return {
    nombre: alumno.nombre,
    nota: alumno.nota,
    aprobado: alumno.nota >= 5
  };
}

const resultado1 = alumnos.map(añadirAprobado);
console.log(resultado1);

// // 3.2
// const añadirAprobado2 = function (alumno) {
//   return {
//     nombre: alumno.nombre,
//     nota: alumno.nota,
//     aprobado: alumno.nota >= 5
//   };
// };

// const resultado2 = alumnos.map(añadirAprobado2);
// console.log(resultado2);

// // 3.3
// const añadirAprobado3 = (alumno) => ({
//   nombre: alumno.nombre,
//   nota: alumno.nota,
//   aprobado: alumno.nota >= 5
// });

// const resultado3 = alumnos.map(añadirAprobado3);
// console.log(resultado3);

// // 3.4
// const resultado4 = alumnos.map(function (alumno) {
//   return {
//     nombre: alumno.nombre,
//     nota: alumno.nota,
//     aprobado: alumno.nota >= 5
//   };
// });
// console.log(resultado4);

// // 3.5
// const resultado5 = alumnos.map((alumno) => ({
//   nombre: alumno.nombre,
//   nota: alumno.nota,
//   aprobado: alumno.nota >= 5
// }));
// console.log(resultado5);
