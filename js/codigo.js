// declaración de objetos 
const camisetasNac = [
    {id: 0, titulo: "CAMISETA SUPLENTE BOCA JUNIORS", precio: 15000, imagen: "../img/bocaTitular.jpg"},

    {id: 1, club: "boca", tipo: "suplente", precio: 10000},

    {id: 2, club: "river", tipo: "titular", precio: 15000},

    {id: 3, club: "river", tipo: "suplente", precio: 10000},

    {id: 4, club: "racing", tipo: "titular", precio: 15000},

    {id: 5, club: "racing", tipo: "suplente", precio: 10000},

    {id: 6, club: "independiente", tipo: "titular", precio: 15000},

    {id: 7, club: "independiente", tipo: "suplente", precio: 10000},

    {id: 8, club: "san lorenzo", tipo: "titular", precio: 15000},

    {id: 9, club: "san lorenzo", tipo: "suplente", precio: 10000},

    {id: 10, club: "velez", tipo: "titular", precio: 15000},

    {id: 11, club: "velez", tipo: "suplente", precio: 10000},

    {id: 12, club: "huracan", tipo: "titular", precio: 15000},

    {id: 13, club: "huracan", tipo: "suplente", precio: 10000},
]

const camisetasSel = [
    {seleccion: "seleccion", pais: "argentina", precio: 15000},

    {seleccion: "seleccion", pais: "brasil", precio: 15000},

    {seleccion: "seleccion", pais: "uruguay", precio: 15000},

    {seleccion: "seleccion", pais: "italia", precio: 15000},

    {seleccion: "seleccion", pais: "francia", precio: 15000},

    {seleccion: "seleccion", pais: "alemania", precio: 15000},

    {seleccion: "seleccion", pais: "inglaterra", precio: 15000},

    {seleccion: "seleccion", pais: "españa", precio: 15000},
]

const camisetasInt = [

    {categoria: "internacional", club: "psg", precio: 15000},

    {categoria: "internacional", club: "barcelona", precio: 15000},

    {categoria: "internacional", club: "real madrid", precio: 15000},

    {categoria: "internacional", club: "juventus", precio: 15000},

    {categoria: "internacional", club: "inter", precio: 15000},

    {categoria: "internacional", club: "manchester city", precio: 15000},

    {categoria: "internacional", club: "manchester united", precio: 15000},

    {categoria: "internacional", club: "liverpool", precio: 15000},

    {categoria: "internacional", club: "bayern munich", precio: 15000},

    {categoria: "internacional", club: "flamengo", precio: 15000},

    {categoria: "internacional", club: "palmeiras", precio: 15000},

];


/*
let ingreso = prompt ("inserte nac (nacional), sel (selección) o int (internacional) según el tipo de camiseta que quiera comprar.");

if(ingreso != "nac" && ingreso != "sel" && ingreso != "int") {
    alert ("ERROR")
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

    let resultado = 15000 * cantidad;
    alert ("El precio total de tu compra es: $"+resultado);
}else if (camiseta === 2){

        let resultado = 10000 * cantidad;
        alert ("El precio total de tu compra es: $"+resultado);
}else{
    alert ("ERROR. Debe introducir 1 o 2.");
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
        
            let resultado = 15000 * cantidad;
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
            
                let resultado = 15000 * cantidad;
                alert ("El precio total de tu compra es: $"+resultado);
            }
        }
    }
}*/



let botonBT = document.getElementById ("botonBT");
botonBT.type = "button";
botonBT.innerHTML = "<button>Agregar al carrito</button>";

botonBT.onmouseover=()=>{
    botonBT.className="btn btn-sm btn-outline-dark";
}

let tallesBT = document.getElementsByClassName("tallesBT");
tallesBT [0].remove();

const botonBS = document.createElement("botonBS");
botonBS.innerHTML = "<button>Agregar al carrito</button>"
document.getElementById("botonBS").appendChild(botonBS);

botonBS.onmouseover=()=>{
    botonBS.className="btn btn-sm btn-outline-dark";
}

let tallesBS = document.getElementsByClassName("tallesBS");
tallesBS [0].remove();

let boton = document.getElementById ("botonRT");
boton.innerHTML = "<button>Agregar al carrito</button>";

botonRT.onmouseover=()=>{
    botonRT.className="btn btn-sm btn-outline-dark";
}

let tallesRT = document.getElementsByClassName("tallesRT");
tallesRT [0].remove();



//seleccion de elementos

const productosEl = document.getElementById("carritoH");


//crear productos

function crearProductos () {
    camisetasNac.forEach((producto)=>{
        productosEl.innerHTML += `
        <button onclick="agregarAlCarrito(${producto.id})>Agregar al carrito</button>
        `
    } )
}
crearProductos();


//array carrito
let carrito = [];

//agregar al carrito

function agregarAlCarrito (id){
    const item = camisetasNac.find((producto)=> producto.id === id)
    console.log(item);
};




















