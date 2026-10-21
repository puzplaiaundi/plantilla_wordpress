const primero = {
  titular: "Ana",
  saldo: 500,
  describir() {
    return `Titular: ${this.titular}, saldo: ${this.saldo} €`;
  }
};

const segundo = { titular: "Luis", saldo: 1200 };
segundo.describir = primero.describir;

console.log(primero.describir()); // Titular: Ana, saldo: 500 €
console.log(segundo.describir()); // Titular: Luis, saldo: 1200 €

// Guardar el método en una variable y ejecutarlo sin receptor
const metodo = primero.describir;
try {
  console.log(metodo());
} catch (error) {
  console.log("Error controlado:", error.message);
}