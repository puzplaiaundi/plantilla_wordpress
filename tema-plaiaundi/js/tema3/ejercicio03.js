const alumnos = [
  { nombre: "Ane", nota: 8 },
  { nombre: "Iker", nota: 4 },
  { nombre: "June", nota: 7 }
];

// 3-1. Declarando una función y pasándola como callback
function evaluarAlumno(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
}
const res3_1 = alumnos.map(evaluarAlumno);

// 3-2. Expresión de función guardada en variable y pasándola como callback
const evaluarExpresion = function(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
};
const res3_2 = alumnos.map(evaluarExpresion);

// 3-3. Función flecha en una variable y pasándola como callback
const evaluarFlecha = alumno => ({ ...alumno, aprobado: alumno.nota >= 5 });
const res3_3 = alumnos.map(evaluarFlecha);

// 3-4. Función anónima tradicional directamente dentro de map()
const res3_4 = alumnos.map(function(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
});

// 3-5. Función flecha directamente dentro de map()
const res3_5 = alumnos.map(alumno => ({ ...alumno, aprobado: alumno.nota >= 5 }));

// Comprobación
console.log(res3_5);
/*
[
  { nombre: 'Ane', nota: 8, aprobado: true },
  { nombre: 'Iker', nota: 4, aprobado: false },
  { nombre: 'June', nota: 7, aprobado: true }
]
*/