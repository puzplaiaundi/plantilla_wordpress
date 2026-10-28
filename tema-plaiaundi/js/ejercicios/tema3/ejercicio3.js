const alumnos = [
    { nombre: "Ane", nota: 8 },
    { nombre: "Iker", nota: 4 },
    { nombre: "June", nota: 7 }
];

function comprobar1(alumno) {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
}

console.log(alumnos.map(comprobar1));


const comprobar2 = function(alumno) {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
};

console.log(alumnos.map(comprobar2));


const comprobar3 = alumno => {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
};

console.log(alumnos.map(comprobar3));


console.log(alumnos.map(function(alumno) {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
}));

console.log(alumnos.map(alumno => {
    return {
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >= 5
    };
}));