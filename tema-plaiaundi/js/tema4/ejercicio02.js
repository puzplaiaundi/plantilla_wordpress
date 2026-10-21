const primero = {
  titular: "Ane",
  saldo: 500,
  describir() {
    return `${this.titular}: ${this.saldo} €`;
  }
};

const segundo = {
  titular: "Iker",
  saldo: 200
};

segundo.describir = primero.describir;

console.log(primero.describir());
console.log(segundo.describir());

const suelto = primero.describir;