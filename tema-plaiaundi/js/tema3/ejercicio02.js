function calcularEstadisticas(notas) {
  let suma = 0;
  let aprobados = 0;

  for (const nota of notas) {
    suma += nota;
    if (nota >= 5) {
      aprobados++;
    }
  }

  // Control para evitar la división entre cero (NaN)
  const media = notas.length > 0 ? suma / notas.length : 0;

  return { suma, media, aprobados };
}

// 1. Prueba con el array original
const notas = [5, 8, 3, 10, 6];
console.log("Resultado con datos:", calcularEstadisticas(notas));
// { suma: 32, media: 6.4, aprobados: 4 }

// 2. Prueba con array vacío
const notasVacias = [];
console.log("Resultado con array vacío:", calcularEstadisticas(notasVacias));
// { suma: 0, media: 0, aprobados: 0 }