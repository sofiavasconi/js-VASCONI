//variables 
const formulario = document.querySelector("#form");
const email = document.querySelector("#email");
const nombre = document.querySelector("#firstname");
const dni = document.querySelector("#dni");
const telefono = document.querySelector("#phone");
const direccion = document.querySelector("#street");
const numero = document.querySelector("#number"); 
const botonForm = document.querySelector(".botonForm"); 




//form
formulario.addEventListener("submit", validarForm);

function validarForm(evento){
    (email.value=="")||(nombre.value="")||(dni.value="")||(telefono.value="")||(direccion.value="")||(numero.value="") ? evento.preventDefault () : alert("Su compra fue realizada con éxito.")
}


