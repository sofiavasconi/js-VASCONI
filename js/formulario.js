//variables 
const formulario = document.querySelector("#form");
const email = document.querySelector("#email");
const nombre = document.querySelector("#firstname");
const dni = document.querySelector("#dni");
const telefono = document.querySelector("#phone");
const direccion = document.querySelector("#street");
const numero = document.querySelector("#number"); 


//form
formulario.addEventListener("submit", validarForm);

function validarForm(evento){
    if((email.value=="")||(nombre.value="")||(dni.value="")||(telefono.value="")||(direccion.value="")||(numero.value="")){
        evento.preventDefault ();
    }
}