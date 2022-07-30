let ingresaNumero = parseInt(prompt("Ingresa el número de camisetas titulares que querés comprar"));
function sumarNumeros (num1, num2) {
        let suma=num1+num2;
        alert ("El precio total de tu compra es: "+suma);
}

sumarNumeros (8000,ingresaNumero);




function camisetas(titular, suplente) {
    this.titular=titular;
    this.suplete=suplente;
}

const titular1=new camiseta ("TITULAR $8.000");
const suplente1=new camiseta ("SUPLENTE $6.000");

alert (titular1);
alert (suplente1);