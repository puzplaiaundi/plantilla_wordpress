const primero = {
    titular: "Kepa",
    saldo: 150,

    describir() {
        return `${this.titular} tiene ${this.saldo} euros.`;
    }
};

const segundo = {
    titular: "Kepa",
    saldo: 300
};

segundo.describir = primero.describir;

console.log(primero.describir());
console.log(segundo.describir());

const describirCuenta = primero.describir;

try {
    console.log(describirCuenta());
} catch (error) {
    console.log("Error controlado:", error.message);
}