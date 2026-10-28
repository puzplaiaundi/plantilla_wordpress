const cuenta1 = {
    titular: "Javier",
    saldo: 100,

    describir(){
        return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
    }
}

const cuenta2 = {
    titular: "Elena",
    saldo: 200,
}

cuenta2.describir = cuenta1.describir;

console.log(cuenta1.describir());

console.log(cuenta2.describir());