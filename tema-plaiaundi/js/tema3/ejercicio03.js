// Array original de alumnos
const alumnos = [
  { nombre: "Ane", nota: 8 },
  { nombre: "Iker", nota: 4 },
  { nombre: "June", nota: 7 }
];

console.log("--- 3-1. Función declarada pasada como callback ---");
function evaluarAlumno(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
}
const resultado31 = alumnos.map(evaluarAlumno);
console.log(resultado31);


console.log("\n--- 3-2. Expresión de función pasada como callback ---");
const evaluarAlumnoExpresion = function(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
};
const resultado32 = alumnos.map(evaluarAlumnoExpresion);
console.log(resultado32);


console.log("\n--- 3-3. Función flecha en una variable pasada como callback ---");
const evaluarAlumnoFlecha = alumno => ({ ...alumno, aprobado: alumno.nota >= 5 });
const resultado33 = alumnos.map(evaluarAlumnoFlecha);
console.log(resultado33);


console.log("\n--- 3-4. Función anónima tradicional directamente dentro de map() ---");
const resultado34 = alumnos.map(function(alumno) {
  return { ...alumno, aprobado: alumno.nota >= 5 };
});
console.log(resultado34);


console.log("\n--- 3-5. Función flecha directamente dentro de map() ---");
const resultado35 = alumnos.map(alumno => ({ ...alumno, aprobado: alumno.nota >= 5 }));
console.log(resultado35);
