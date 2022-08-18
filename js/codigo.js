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
    {idSEL: 14, tituloSEL: "CAMISETA ARGENTINA", precioSEL: 15000, imagenSEL: "../img/argentinaC.jpg"},

    {idSEL: 15, tituloSEL: "CAMISETA BRASIL", precioSEL: 15000, imagenSEL: "../img/brasil.jpg"},

    {idSEL: 16, tituloSEL: "CAMISETA URUGUAY", precioSEL: 15000, imagenSEL: "../img/uruguay.jpEg"},

    {idSEL: 17, tituloSEL: "CAMISETA ITALIA", precioSEL: 15000, imagenSEL: "../img/italia.jpg"},

    {idSEL: 18, tituloSEL: "CAMISETA FRANCIA", precioSEL: 15000, imagenSEL: "../img/francia.jfif"},

    {idSEL: 19, tituloSEL: "CAMISETA ALEMANIA", precioSEL: 15000, imagenSEL: "../img/alemania.jpg"},

    {idSEL: 20, tituloSEL: "CAMISETA INGLATERRA", precioSEL: 15000, imagenSEL: "../img/inglaterra.jfif"},

    {idSEL: 21, tituloSEL: "CAMISETA ESPAÑA", precioSEL: 15000, imagenSEL: "../img/españa.jpg"},
];

const camisetasInt = [

    {idINT: 22, tituloINT: "CAMISETA TITULAR PSG", precioINT: 15000, imagenINT: "../img/psg.jpg"},

    {idINT: 23, tituloINT: "CAMISETA TITULAR BARCELONA", precioINT: 15000, imagenINT: "../img/barca.jpg"},

    {idINT: 24, tituloINT: "CAMISETA TITULAR REAL MADRID", precioINT: 15000, imagenINT: "../img/rm.jfif"},

    {idINT: 25, tituloINT: "CAMISETA TITULAR JUVENTUS", precioINT: 15000, imagenINT: "../img/juve.jpg"},

    {idINT: 26, tituloINT: "CAMISETA TITULAR INTER", precioINT: 15000, imagenINT: "../img/inter.jpg"},

    {idINT: 27, tituloINT: "CAMISETA TITULAR MANCHESTER CITY", precioINT: 15000, imagenINT: "../img/city.jpg"},

    {idINT: 28, tituloINT: "CAMISETA TITULAR MANCHESTER UNITED", precioINT: 15000, imagenINT: "../img/united.jpg"},

    {idINT: 29, tituloINT: "CAMISETA TITULAR LIVERPOOL", precioINT: 15000, imagenINT: "../img/liverpool.jpg"},

    {idINT: 30, tituloINT: "CAMISETA TITULAR BAYERN MUNICH", precioINT: 15000, imagenINT: "../img/bayern.jpg"},

    {idINT: 31, tituloINT: "CAMISETA TITULAR FLAMENGO", precioINT: 15000, imagenINT: "../img/flamengo.jpg"},

    {idINT: 32, tituloINT: "CAMISETA TITULAR PALMEIRAS", precioINT: 15000, imagenINT: "../img/palmeiras.jpg"},

];



//seleccion de elementos

const productosElementos = document.querySelector(".listaProductos");

const productosElementosSEL = document.querySelector(".listaProductosSEL");

const productosElementosINT = document.querySelector(".listaProductosINT");

const productosCarrito = document.querySelector(".cart-box");

const precioTotal = document.querySelector("#total");

const notificacionCantidad = document.querySelector("#cart-items");



//crear productos

//NACIONALES
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
    if(carrito.some((item) => item.id === id)) {
        cambiarNumeroDeUnidades("mas", id)
    }else{
         const item = camisetasNac.find((camiseta) => camiseta.id === id);

        carrito.push ({
            ...item, 
            numeroDeUnidades : 1
        });
    }

    actualizarCarrito ();
};


//actualizar el carrito
function actualizarCarrito(){
    agregarItemsAlCarrito ();
    mostrarTotal ();
}


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

    carrito.forEach ((item) => {
        total += item.precio * item.numeroDeUnidades;

    });

    precioTotal.innerHTML = `
        <div class="total-title">TOTAL: $${total}</div>
    `
    notificacionCantidad.innerHTML = total;
};


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
                    <img src="${camisetaSEL.imagenSEL}" alt="${camisetaSEL.tituloSEL}" class="imagen">
                </div>
                <div class="titulo">
                    <h3 class="h3Titulo"><strong >${camisetaSEL.tituloSEL}</strong></h3>
                    <h3 class="h3Precio"><small>$ ${camisetaSEL.precioSEL}</small></h3>
                </div>
                <div class="agregarAlCarrito" onclick="agregarAlCarrito(${camisetaSEL.idSEL})">
                    <i class='bx bx-cart-add' id="itemCarrito"></i>
                </div>
            </section>
        `;
    } );
}
crearProductosSEL ();





//INTERNACIONALES
function crearProductosINT () {
    camisetasInt.forEach( (camiseta) => {
        productosElementosINT.innerHTML += `
            <section class="item">
                <div class="imgItem">
                    <img src="${camiseta.imagenINT}" alt="${camiseta.tituloINT}" class="imagen">
                </div>
                <div class="titulo">
                    <h3 class="h3Titulo"><strong >${camiseta.tituloINT}</strong></h3>
                    <h3 class="h3Precio"><small>$ ${camiseta.precioINT}</small></h3>
                </div>
                <div class="agregarAlCarrito" onclick="agregarAlCarrito(${camiseta.idINT})">
                    <i class='bx bx-cart-add' id="itemCarrito"></i>
                </div>
            </section>
        `;
    } );
}
crearProductosINT ();


