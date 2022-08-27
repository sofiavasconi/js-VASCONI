//variables 
const formulario = document.querySelector("#form");
const email = document.querySelector("#email");
const nombre = document.querySelector("#firstname");
const dni = document.querySelector("#dni");
const telefono = document.querySelector("#phone");
const direccion = document.querySelector("#street");
const numero = document.querySelector("#number"); 
const botonForm = document.querySelector(".botonForm"); 
const resumenCompra = document.querySelector("#resumenCompra");



//form
formulario.addEventListener("submit", validarForm);

function validarForm(evento){
    (email.value=="")||(nombre.value="")||(dni.value="")||(telefono.value="")||(direccion.value="")||(numero.value="") ? evento.preventDefault () : alert("Su compra fue realizada con éxito.")
}



let resumenCarrito = [];

function resumenDeCompra () {
    resumenCarrito.forEach((item) => {
        resumenCompra.innerHTML += `
        <img src="${item.imagen}" alt="${item.titulo}" class="cart-img">
        <div class="cart-product-title">
            ${item.titulo}
        </div>
        <div class="cart-price">
            $ ${item.precio}
        </div>
        <div class="botonesCantidad">
            <h4>TOTAL: $${total}<h4>
        </div>
    `;
    });
}
resumenDeCompra ();

const resumenTotal = () => {
    resumenDeCompra(resumenCarrito);
}