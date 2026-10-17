/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Array de objetos
 */
const alumnos = [
    { nombre: "Ane", nota: 8 },
    { nombre: "Iker", nota: 4 },
    { nombre: "June", nota: 7 }
];

// EJERCICIO 3.1 - Función declarada

function comprobarAprobado(alumno) {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
}

const resultado1 = alumnos.map(comprobarAprobado);

console.log("Ejercicio 3.1:", resultado1);


// EJERCICIO 3.2 - Expresión de función

/*
const comprobarAprobado2 = function(alumno) {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
};

const resultado2 = alumnos.map(comprobarAprobado2);

console.log("Ejercicio 3.2:", resultado2);
*/


// EJERCICIO 3.3 - Función flecha en una variable

/*
const comprobarAprobado3 = alumno => {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
};

const resultado3 = alumnos.map(comprobarAprobado3);

console.log("Ejercicio 3.3:", resultado3);
*/


// EJERCICIO 3.4 - Función anónima tradicional dentro de map()

/*
const resultado4 = alumnos.map(function(alumno) {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
});

console.log("Ejercicio 3.4:", resultado4);
*/


// EJERCICIO 3.5 - Función flecha directamente dentro de map()

/*
const resultado5 = alumnos.map(alumno => ({
    nombre: alumno.nombre,
    nota: alumno.nota,
    aprobado: alumno.nota >= 5
}));

console.log("Ejercicio 3.5:", resultado5);
*/