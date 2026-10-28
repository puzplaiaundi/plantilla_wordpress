const notas = [5, 8, 3, 10, 6];

let suma = 0;
let aprobados = 0;

for (const nota of notas) {
    suma += nota;

    if (nota >= 5) {
        aprobados++;
    }
}

let media = 0;

if (notas.length > 0) {
    media = suma / notas.length;
}

console.log("Suma:", suma);
console.log("Media:", media);
console.log("Aprobados:", aprobados);