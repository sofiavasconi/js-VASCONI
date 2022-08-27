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
    {id: 14, titulo: "CAMISETA ARGENTINA", precio: 15000, imagen: "../img/argentinaC.jpg"},

    {id: 15, titulo: "CAMISETA BRASIL", precio: 15000, imagen: "../img/brasil.jpg"},

    {id: 16, titulo: "CAMISETA URUGUAY", precio: 15000, imagen: "../img/uruguay.jpeg"},

    {id: 17, titulo: "CAMISETA ITALIA", precio: 15000, imagen: "../img/italia.jpg"},

    {id: 18, titulo: "CAMISETA FRANCIA", precio: 15000, imagen: "../img/francia.jfif"},

    {id: 19, titulo: "CAMISETA ALEMANIA", precio: 15000, imagen: "../img/alemania.jpg"},

    {id: 20, titulo: "CAMISETA INGLATERRA", precio: 15000, imagen: "../img/inglaterra.jfif"},

    {id: 21, titulo: "CAMISETA ESPAÑA", precio: 15000, imagen: "../img/españa.jpg"},
];

const camisetasInt = [

    {id: 22, titulo: "CAMISETA TITULAR PSG", precio: 15000, imagen: "../img/psg.jpg"},

    {id: 23, titulo: "CAMISETA TITULAR BARCELONA", precio: 15000, imagen: "../img/barca.jpg"},

    {id: 24, titulo: "CAMISETA TITULAR REAL MADRID", precio: 15000, imagen: "../img/rm.jfif"},

    {id: 25, titulo: "CAMISETA TITULAR JUVENTUS", precio: 15000, imagen: "../img/juve.jpg"},

    {id: 26, titulo: "CAMISETA TITULAR INTER", precio: 15000, imagen: "../img/inter.jpg"},

    {id: 27, titulo: "CAMISETA TITULAR MANCHESTER CITY", precio: 15000, imagen: "../img/city.jpg"},

    {id: 28, titulo: "CAMISETA TITULAR MANCHESTER UNITED", precio: 15000, imagen: "../img/united.jpg"},

    {id: 29, titulo: "CAMISETA TITULAR LIVERPOOL", precio: 15000, imagen: "../img/liverpool.jpg"},

    {id: 30, titulo: "CAMISETA TITULAR BAYERN MUNICH", precio: 15000, imagen: "../img/bayern.jpg"},

    {id: 31, titulo: "CAMISETA TITULAR FLAMENGO", precio: 15000, imagen: "../img/flamengo.jpg"},

    {id: 32, titulo: "CAMISETA TITULAR PALMEIRAS", precio: 15000, imagen: "../img/palmeiras.jpg"},

];



//seleccion de elementos

const productosElementos = document.querySelector(".listaProductos");

const productosElementosSEL = document.querySelector(".listaProductosSEL");

const productosElementosINT = document.querySelector(".listaProductosINT");

const productosCarrito = document.querySelector(".cart-box");

const precioTotal = document.querySelector("#total");

const notificacionCantidad = document.querySelector(".cart-items");












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
                    <i class='bx bx-cart-add' id="itemCarrito")></i>
                </div>
            </section>
        `;
    } );
}
crearProductos();


//array carrito
let carrito = [];
if(localStorage.getItem("carrito") !=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
};
actualizarCarrito ();




//agregar al carrito
function agregarAlCarrito (id){
    //productos ya existen en carrito
    if(carrito.some((item) => item.id === id)) {
        cambiarNumeroDeUnidades("mas", id)
    }else{
         const item = camisetasNac.find((camiseta) => camiseta.id === id);
         const itemSEL = camisetasSel.find((camisetaSEL) => camisetaSEL.id === id);
         const itemINT = camisetasInt.find((camisetaINT) => camisetaINT.id === id)
        carrito.push ({
            ...item, 
            numeroDeUnidades : 1,
            ...itemSEL, 
            numeroDeUnidades : 1,
            ...itemINT,
            numeroDeUnidades : 1
            
        });
    }

    actualizarCarrito ();
};


//actualizar el carrito
function actualizarCarrito(){
        agregarItemsAlCarrito ();
        mostrarTotal ();
};


//agregar items al carrito
function agregarItemsAlCarrito () {

        productosCarrito.innerHTML = ""; //para limpiar el carrito

    carrito.forEach ((item) => {
        
        productosCarrito.innerHTML += `
            <img src="${item.imagen}" alt="${item.titulo}" class="cart-img">
                
            <div class="detail-box">
                <div class="cart-product-title">
                ${item.titulo}
                </div>
                <div class="cart-price">
                $ ${item.precio}
                </div>
                <div class="botonesCantidad">
                    <div class="btn minus" onclick="cambiarNumeroDeUnidades('menos', ${item.id})">-</div>
                    <div class="number">${item.numeroDeUnidades}</div>
                    <div class="btn plus" onclick="cambiarNumeroDeUnidades('mas', ${item.id})">+</div>
                </div>
            </div>
                
            <i class='bx bx-trash-alt' id="trash" onclick="borrarDelCarrito (${item.id})"></i>
        
        `
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));
}



// numero de unidades
function cambiarNumeroDeUnidades(action, id){
    carrito = carrito.map((item) => {

        let numeroDeUnidades = item.numeroDeUnidades;

        if(item.id === id){
            if(action === "menos" && numeroDeUnidades > 1){
                numeroDeUnidades--;
            } else if (action === "mas") {
                numeroDeUnidades++;
            }
        }
        return {
            ...item,
            numeroDeUnidades,
        }
    })

    actualizarCarrito ();
}



//total
function mostrarTotal () {
    let total = 0;
    let unidades = 0;

    carrito.forEach ((item) => {
        total += item.precio * item.numeroDeUnidades;
        unidades += item.numeroDeUnidades;
    });

    precioTotal.innerHTML = `
        <div class="total-title">TOTAL: $${total}</div>
    `;
    notificacionCantidad.innerHTML = `${unidades}`;
}


//borrar productos del carrito
function borrarDelCarrito (id) {
    carrito = carrito.filter ((item) => item.id !== id);

    actualizarCarrito ();
}





//SELECCIONES
function crearProductosSEL () {
    camisetasSel.forEach( (camisetaSEL) => {
        productosElementosSEL.innerHTML += `
            <section class="item">
                <div class="imgItem">
                    <img src="${camisetaSEL.imagen}" alt="${camisetaSEL.titulo}" class="imagen">
                </div>
                <div class="titulo">
                    <h3 class="h3Titulo"><strong >${camisetaSEL.titulo}</strong></h3>
                    <h3 class="h3Precio"><small>$ ${camisetaSEL.precio}</small></h3>
                </div>
                <div class="agregarAlCarrito" onclick="agregarAlCarrito(${camisetaSEL.id})">
                    <i class='bx bx-cart-add' id="itemCarrito"></i>
                </div>
            </section>
        `;
    } );
}
crearProductosSEL ();




//INTERNACIONALES
function crearProductosINT () {
    camisetasInt.forEach( (camisetaINT) => {
        productosElementosINT.innerHTML += `
            <section class="item">
                <div class="imgItem">
                    <img src="${camisetaINT.imagen}" alt="${camisetaINT.titulo}" class="imagen">
                </div>
                <div class="titulo">
                    <h3 class="h3Titulo"><strong >${camisetaINT.titulo}</strong></h3>
                    <h3 class="h3Precio"><small>$ ${camisetaINT.precio}</small></h3>
                </div>
                <div class="agregarAlCarrito" onclick="agregarAlCarrito(${camisetaINT.id})">
                    <i class='bx bx-cart-add' id="itemCarrito"></i>
                </div>
            </section>
        `;
    } );
}
crearProductosINT ();




//abrir y cerrar carrito
let abrirCarrito = document.querySelector("#cart-icon");
let iconoDeCarrito = document.querySelector(".cart");
let cerrarCarrito = document.querySelector("#close-cart"); 

abrirCarrito.onclick = (() => {
    iconoDeCarrito.classList.add("active");

});

cerrarCarrito.onclick = (() => {
    iconoDeCarrito.classList.remove("active");
});
