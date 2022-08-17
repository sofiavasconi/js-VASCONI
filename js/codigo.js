// declaración de objetos 

const camisetasNac = [
    {id: 0, titulo: "CAMISETA TITULAR BOCA JUNIORS", precio: 15000, imagen: "../img/bocaTitular.jpg"},

    {id: 1, titulo: "CAMISETA SUPLENTE BOCA JUNIORS", precio: 10000, imagen: "../img/bocaSuplente.jpg"},

    {id: 2, titulo: "CAMISETA TITULAR RIVER PLATE", precio: 15000, imagen: "../img/riverT.jpg"},

    {id: 3, titulo: "CAMISETA SUPLENTE RIVER PLATE", precio: 10000, imagen: "../img/riverS.jpg"},

    {id: 4, titulo: "CAMISETA TITULAR RACING CLUB", precio: 15000, imagen: "../img/racingT.jpg"},

    {id: 5, titulo: "CAMISETA SUPLENTE RACING CLUB", precio: 10000, imagen: "../img/racingS.jpg"},

    {id: 6, titulo: "CAMISETA TITULAR INDEPENDIENTE", precio: 15000, imagen: "../img/indT.jpg"},

    {id: 7, titulo: "CAMISETA SUPLENTE INDEPENDIENTE", precio: 10000, imagen: "../img/indS.jpg"},

    {id: 8, titulo: "CAMISETA TITULAR SAN LORENZO", precio: 15000, imagen: "../img/snT.jpg"},

    {id: 9, titulo: "CAMISETA SUPLENTE SAN LORENZO", precio: 10000, imagen: "../img/slS.jpg"},

    {id: 10, titulo: "CAMISETA TITULAR VELEZ SARSFIELD", precio: 15000, imagen: "../img/velezT.jpg"},

    {id: 11, titulo: "CAMISETA SUPLENTE VELEZ SARSFIELD", precio: 10000, imagen: "../img/velezS.jpg"},

    {id: 12, titulo: "CAMISETA TITULAR HURACÁN", precio: 15000, imagen: "../img/huracanT.jpg"},

    {id: 13, titulo: "CAMISETA SUPLENTE HURACÁN", precio: 10000, imagen: "../img/huracanS.jpg"},
];

const camisetasSel = [
    {id: 0, tipo: "CAMISETA ARGENTINA", precio: 15000, imagen: "../img/argentinaC.jpg"},

    {id: 1, tipo: "CAMISETA BRASIL", precio: 15000, imagen: "../img/brasil.jpg"},

    {id: 2, tipo: "CAMISETA URUGUAY", precio: 15000, imagen: "../img/uruguay.jpg"},

    {id: 3, tipo: "CAMISETA ITALIA", precio: 15000, imagen: "../img/italia.jpg"},

    {id: 4, tipo: "CAMISETA FRANCIA", precio: 15000, imagen: "../img/francia.jfif"},

    {id: 5, tipo: "CAMISETA ALEMANIA", precio: 15000, imagen: "../img/alemania.jpg"},

    {id: 6, tipo: "CAMISETA INGLATERRA", precio: 15000, imagen: "../img/inglaterra.jfif"},

    {id: 7, tipo: "CAMISETA ESPAÑA", precio: 15000, imagen: "../img/españa.jpg"},
];

const camisetasInt = [

    {id: 0, tipo: "CAMISETA TITULAR PSG", precio: 15000, imagen: "../img/psg.jpg"},

    {id: 1, tipo: "CAMISETA TITULAR BARCELONA", precio: 15000, imagen: "../img/barca.jpg"},

    {id: 2, tipo: "CAMISETA TITULAR REAL MADRID", precio: 15000, imagen: "../img/rm.jfif"},

    {id: 3, tipo: "CAMISETA TITULAR JUVENTUS", precio: 15000, imagen: "../img/juve.jpg"},

    {id: 4, tipo: "CAMISETA TITULAR INTER", precio: 15000, imagen: "../img/inter.jpg"},

    {id: 5, tipo: "CAMISETA TITULAR MANCHESTER CITY", precio: 15000, imagen: "../img/city.jpg"},

    {id: 6, tipo: "CAMISETA TITULAR MANCHESTER UNITED", precio: 15000, imagen: "../img/united.jpg"},

    {id: 7, tipo: "CAMISETA TITULAR LIVERPOOL", precio: 15000, imagen: "../img/liverpool.jpg"},

    {id: 8, tipo: "CAMISETA TITULAR BAYERN MUNICH", precio: 15000, imagen: "../img/bayern.jpg"},

    {id: 9, tipo: "CAMISETA TITULAR FLAMENGO", precio: 15000, imagen: "../img/flamengo.jpg"},

    {id: 10, tipo: "CAMISETA TITULAR PALMEIRAS", precio: 15000, imagen: "../img/palmeiras.jpg"},

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
}



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
*/



//seleccion de elementos

const productosElementos = document.querySelector(".listaProductos");

const productosCarrito = document.querySelector(".cart-box");


//crear productos

function crearProductos () {
    camisetasNac.forEach( (camiseta) => {
        productosElementos.innerHTML += `
            <section class="item">
                <div class="imgItem">
                    <img src="${camiseta.imagen}" alt="${camiseta.titulo}" class="imagen">
                </div>
                <div class="titulo">
                    <h3 class="h3Titulo"><strong >${camiseta.titulo}</strong></h3>
                    <h3 class="h3Precio"><small>$ ${camiseta.precio}</small></h3>
                </div>
                <div class="agregarAlCarrito" onclick="agregarAlCarrito(${camiseta.id})">
                    <i class='bx bx-cart-add' id="itemCarrito"></i>
                </div>
            </section>
        `;
    } );
}
crearProductos();


//array carrito
let carrito = [];


//agregar al carrito
function agregarAlCarrito (id){
    //productos ya existen en carrito

    if(carrito.some((item) => item.id === id)){
        alert ("Producto ya está en carrito")
    }else{    
        const item = camisetasNac.find((camiseta => camiseta.id === id))
    }
        
        actualizarCarrito ();
    };



//actualizar el carrito
function actualizarCarrito (){
    agregarItemsAlCarrito ();
    //total ();
};


//agregar items al carrito
function agregarItemsAlCarrito () {
    carrito.forEach ((item) => {
        productosCarrito.innerHTML += `
            <div>
                <img src="${item.imagen}" alt="${item.titulo}" class="cart-img">
                
                <div class="detail-box">
                    <div class="cart-product-title">
                    ${item.titulo}
                    </div>
                    <div class="cart-price">
                    $ ${item.precio}
                    </div>
                    <input type="number" value="1" class="cart-cantidad">
                </div>
                
                 <i class='trash bx bx-trash-alt'></i>
            </div>
        `
    });
}
