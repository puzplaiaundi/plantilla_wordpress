function analizarNotas(notas) {
    let suma = 0;
    let aprobados = 0;
    let media = 0;

    for (const nota of notas) {
        suma += nota;
        if (nota >= 5) {
            aprobados++;
        }
    }

    if (notas.length > 0) {
        media = suma / notas.length
    }
    else {
        media = 0
    }

    console.log(`Notas: [${notas}]`);
    console.log(`Suma total: ${suma}`);
    console.log(`Media: ${media.toFixed(2)}`);
    console.log(`Cantidad de aprobados: ${aprobados}`);
    console.log("-----------------------------------");
}

analizarNotas([5, 8, 3, 10, 6]);

analizarNotas([]);
