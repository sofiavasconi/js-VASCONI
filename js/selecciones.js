const camisetasSel = [
    {id: 0, titulo: "CAMISETA ARGENTINA", precio: 15000, imagen: "../img/argentinaC.jpg"},

    {id: 1, titulo: "CAMISETA BRASIL", precio: 15000, imagen: "../img/brasil.jpg"},

    {id: 2, titulo: "CAMISETA URUGUAY", precio: 15000, imagen: "../img/uruguay.jpeg"},

    {id: 3, titulo: "CAMISETA ITALIA", precio: 15000, imagen: "../img/italia.jpg"},

    {id: 4, titulo: "CAMISETA FRANCIA", precio: 15000, imagen: "../img/francia.jfif"},

    {id: 5, titulo: "CAMISETA ALEMANIA", precio: 15000, imagen: "../img/alemania.jpg"},

    {id: 6, titulo: "CAMISETA INGLATERRA", precio: 15000, imagen: "../img/inglaterra.jfif"},

    {id: 7, titulo: "CAMISETA ESPAÑA", precio: 15000, imagen: "../img/españa.jpg"},
];




const productosElementos = document.querySelector(".listaProductos");

const productosCarrito = document.querySelector(".cart-box");

const precioTotal = document.querySelector("#total");

const notificacionCantidad = document.querySelector("#cart-items");



//crear productos

//NACIONALES
function crearProductos () {
    camisetasSel.forEach( (camiseta) => {
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
         const item = camisetasSel.find((camiseta) => camiseta.id === id);

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

