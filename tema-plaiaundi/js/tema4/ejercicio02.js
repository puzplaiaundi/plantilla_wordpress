const cuenta1 = {
    titular: "Aitor",
    Saldo: 100,
    
    describir(){
        return `Titular: ${this.titular}, Saldo: ${this.Saldo}`;
    }
}
const cuenta2 = {
    titular: "Julen",
    Saldo: 200,
}

 cuenta2.describir = cuenta1.describir

 console.log(cuenta1.describir());

 console.log(cuenta2.describir());
