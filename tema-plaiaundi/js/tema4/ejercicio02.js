/*
 * Tema 4
 * Ejercicio 2
 */

const primero = {
  titular: "Ana",
  saldo: 500,
  describir() {
    return `Titular: ${this.titular}, Saldo: ${this.saldo}€`;
  }
};

const segundo = {
  titular: "Luis",
  saldo: 1200
};

segundo.describir = primero.describir;

console.log(primero.describir());
console.log(segundo.describir());

const miFuncionSuelta = primero.describir;

try {
  console.log(miFuncionSuelta()); 
} catch (error) {
  console.log("Error controlado:", error.message); 
}
