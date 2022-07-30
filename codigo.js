let camiseta = parseInt(prompt("Ingrese 1 si quiere comprar una camiseta titular o 2 si quiere comprar una camiseta suplente.")); 

let cantidad = parseInt(prompt("Ingrese cuántas camisetas quiere comprar."));

if (camiseta === 1) {

    let resultado = 8000 * cantidad;
    alert ("El precio total de tu compra es: $"+resultado);
}else if (camiseta === 2){

        let resultado = 6000 * cantidad;
        alert ("El precio total de tu compra es: $"+resultado);
}else{
    alert ("ERROR. Debe introducir 1 o 2 en la primera ventana.");
}