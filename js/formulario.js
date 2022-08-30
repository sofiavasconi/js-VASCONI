
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
const botonFinal = document.querySelector ("#botonFinal");



//form
formulario.addEventListener("submit", validarForm);

function validarForm(evento){
    if((email.value=="")||(nombre.value="")||(dni.value="")||(telefono.value="")||(direccion.value="")||(numero.value="")) {
        evento.preventDefault (); 
    }
    //alert("Compra realizada con exito!")
    
}


//sweet alert
botonFinal.addEventListener('click', () => {
    Swal.fire({
        title: 'Tu compra fue realizada con éxito!',
        text: 'Gracias por elegirnos.',
        icon: 'success',
        confirmButtonText: 'CERRAR'
    })
})




//resumen del carrito
productosFinales = JSON.parse(localStorage.getItem("carrito"));
console.log(productosFinales);


botonFinal.onclick=()=> {
    productosFinales.forEach((item) => {
        resumenCompra.innerHTML += `
            <img src="${item.imagen}" alt="${item.titulo}" class="cart-img">
            <div class="cart-product-title">
                ${item.titulo}
            </div>
            <div class="cart-price">
                $ ${item.precio}
            </div>
            <div class="cantidadFinal">
                <h4>TOTAL: $${total}<h4>
            </div>
        `;
    });    
}; 


