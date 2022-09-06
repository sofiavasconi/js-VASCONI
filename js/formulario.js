
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
    (email.value=="")||(nombre.value="")||(dni.value="")||(telefono.value="")||(direccion.value="")||(numero.value="") ? evento.preventDefault () : [];
};

//toastify     
if (validarForm){
    botonFinal.addEventListener('click', () => {
        Toastify({
            text: 'ERROR, debe llenar todos los campos.',
            duration: 3000,
            position: 'center',
            gravity: 'bottom',
            style: {
                background: '#000000'
            }
        }).showToast ();
    });
}



//resumen del carrito
productosFinales = JSON.parse(localStorage.getItem("carrito"));
console.log(productosFinales);


productosFinales.forEach((item) => {
    resumenCompra.innerHTML +=JSON.stringify(productosFinales)
}); 
