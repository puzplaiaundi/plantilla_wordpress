const cuenta1 = {
    titular: "Ana Gómez",
    saldo: 1500,
    describir() {
        return `Cuenta de ${this.titular} con un saldo de ${this.saldo} €.`;
    }
};

const cuenta2 = {
    titular: "Carlos Pérez",
    saldo: 3000
};

cuenta2.describir = cuenta1.describir;

console.log(cuenta1.describir());
console.log(cuenta2.describir());

const funcionSuelta = cuenta1.describir;

try {
    console.log(funcionSuelta());
} catch (error) {
    console.log("Error controlado al ejecutar sin receptor:", error.message);
}
