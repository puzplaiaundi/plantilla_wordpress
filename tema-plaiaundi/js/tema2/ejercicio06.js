/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */
let importe = Number(prompt("Introduce el importe de la compra: "));
let descuento = 0;

if (importe < 50 ){
    descuento = 0;
}else if(importe < 100){
    descuento = 0.05;
}else if (importe < 200){
    descuento = 0.1;
}else{
    descuento = 0.15;
}

cant_desc = importe * descuento;
console.log("la cantidad descontada es: ", cant_desc);
precio_final = importe - cant_desc;
console.log("el precio dinal es: ", precio_final);