const alumnos = [
    { nombre: "Ane", nota: 8 },
    { nombre: "Iker", nota: 4 },
    { nombre: "June", nota: 7 }
];

// Función declarada
function anadirAprobado(alumno) {
    return {
        ...alumno,
        aprobado: alumno.nota >= 5
    };
}

const resultado1 = alumnos.map(anadirAprobado);
console.log("3-1:", resultado1);


//Expresión de función
const anadirAprobado2 = function(alumno) {
    return {
        ...alumno,
        aprobado: alumno.nota >= 5
    };
};

const resultado2 = alumnos.map(anadirAprobado2);
console.log("3-2:", resultado2);


//Función flecha en una variable
const anadirAprobado3 = alumno => ({
    ...alumno,
    aprobado: alumno.nota >= 5
});

const resultado3 = alumnos.map(anadirAprobado3);
console.log("3-3:", resultado3);


// Función anónima tradicional dentro de map()
const resultado4 = alumnos.map(function(alumno) {
    return {
        ...alumno,
        aprobado: alumno.nota >= 5
    };
});

console.log("3-4:", resultado4);


//Función flecha directamente dentro de map()
const resultado5 = alumnos.map(alumno => ({
    ...alumno,
    aprobado: alumno.nota >= 5
}));

console.log("3-5:", resultado5);