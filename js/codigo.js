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





const nacionales = ["boca", "river", "racing", "independiente", "san lorenzo", "velez"];

nacionales.push ("huracan"); {

    console.log (nacionales);
}


const selecciones = ["brasil", "uruguay", "italia", "francia", "alemania", "inglaterra", "españa"]; 

selecciones.unshift ("argentina");{

    console.log (selecciones);
}

const internacionales = ["psg", "barcelona", "real madrid", "juventus", "inter", "manchester city", "manchester united","liverpool", "bayern munich", "flamengo", "palmeiras", "mineiro"]; 

internacionales.pop ();{

    console.log (internacionales);
    }

