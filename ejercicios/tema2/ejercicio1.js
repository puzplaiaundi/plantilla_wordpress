const nombre = prompt("Introduce tu nombre");
const edad = prompt("Introduce tu edad");
const altura = prompt("Introduce tu altura en metros");

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);

const edadNumero = Number(edad);
const alturaNumero = Number(altura);

console.log(nombre);
console.log(edadNumero, typeof edadNumero);
console.log(alturaNumero, typeof alturaNumero);