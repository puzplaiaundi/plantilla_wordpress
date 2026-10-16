/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 12 · || frente a ??
 */

const valores = [0, null, undefined, "", 5];
 
for (const cantidad of valores) {
    const a = cantidad || 10;
    const b = cantidad ?? 10;
    console.log(`cantidad = ${JSON.stringify(cantidad)} -> a (||) = ${JSON.stringify(a)}, b (??) = ${JSON.stringify(b)}`);
}

let cantidadUsuario = 0;
const unidades = cantidadUsuario ?? 10;
console.log("Unidades:", unidades); 