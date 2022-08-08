const camisetasNac = [
    {categoria: "nacional", club: "boca", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "boca", tipo: "suplente", precio: 6000},

    {categoria: "nacional", club: "river", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "river", tipo: "suplente", precio: 6000},

    {categoria: "nacional", club: "racing", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "racing", tipo: "suplente", precio: 6000},

    {categoria: "nacional", club: "independiente", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "independiente", tipo: "suplente", precio: 6000},

    {categoria: "nacional", club: "san lorenzo", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "san lorenzo", tipo: "suplente", precio: 6000},

    {categoria: "nacional", club: "velez", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "velez", tipo: "suplente", precio: 6000},

    {categoria: "nacional", club: "huracan", tipo: "titular", precio: 8000},

    {categoria: "nacional", club: "huracan", tipo: "suplente", precio: 6000},
]

const camisetasSel = [
    {seleccion: "seleccion", pais: "argentina", precio: 8000},

    {seleccion: "seleccion", pais: "brasil", precio: 8000},

    {seleccion: "seleccion", pais: "uruguay", precio: 8000},

    {seleccion: "seleccion", pais: "italia", precio: 8000},

    {seleccion: "seleccion", pais: "francia", precio: 8000},

    {seleccion: "seleccion", pais: "alemania", precio: 8000},

    {seleccion: "seleccion", pais: "inglaterra", precio: 8000},

    {seleccion: "seleccion", pais: "españa", precio: 8000},
]

const camisetasInt = [

    {categoria: "internacional", club: "psg", precio: 8000},

    {categoria: "internacional", club: "barcelona", precio: 8000},

    {categoria: "internacional", club: "real madrid", precio: 8000},

    {categoria: "internacional", club: "juventus", precio: 8000},

    {categoria: "internacional", club: "inter", precio: 8000},

    {categoria: "internacional", club: "manchester city", precio: 8000},

    {categoria: "internacional", club: "manchester united", precio: 8000},

    {categoria: "internacional", club: "liverpool", precio: 8000},

    {categoria: "internacional", club: "bayern munich", precio: 8000},

    {categoria: "internacional", club: "flamengo", precio: 8000},

    {categoria: "internacional", club: "palmeiras", precio: 8000},

];


let ingreso = prompt ("inserte nac (nacional), sel (selección) o int (internacional) según el tipo de camiseta que quiera comprar.");

while(ingreso != "nac" && ingreso != "sel" && ingreso != "int") {
    alert ("inserte nac (nacional), sel (selección) o int (internacional) según el tipo de camiseta que quiera comprar.")
}


if (ingreso === "nac") {

    alert("Nuestra lista de camisetas de clubes nacionales:")
    const camisetasNacionales = camisetasNac.map (
        (camisetasNac) => " " + camisetasNac.club + " " + camisetasNac.tipo+ " $" + camisetasNac.precio
    );

    alert (camisetasNacionales);


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
}else{
    if (ingreso === "sel") {

        alert("Nuestra lista de camisetas de selección:")
        const camisetasDeSeleccion = camisetasSel.map (
            (camisetasSel) => " " + camisetasSel.seleccion + " " + camisetasSel.pais +" $" + camisetasSel.precio
        );

        alert (camisetasDeSeleccion)

        
        let cantidad = parseInt(prompt("Ingrese cuántas camisetas quiere comprar."));
        {
        
            let resultado = 8000 * cantidad;
            alert ("El precio total de tu compra es: $"+resultado);
        }
    }else{
        if (ingreso === "int") {
    
            alert("Nuestra lista de camisetas de clubes internacionales:")
            const camisetasInternacionales = camisetasInt.map (
                (camisetasInt) => " " +camisetasInt.club + " $" + camisetasInt.precio
            );
    
            alert (camisetasInternacionales)
    
            
            let cantidad = parseInt(prompt("Ingrese cuántas camisetas quiere comprar."));
            {
            
                let resultado = 8000 * cantidad;
                alert ("El precio total de tu compra es: $"+resultado);
            }
        }
    }
}


