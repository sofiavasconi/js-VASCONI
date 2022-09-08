//variables 
const formulario = document.querySelector("#form");
const inputs = document.querySelectorAll(".input");
const email = document.querySelector("#email");
const nombre = document.querySelector("#name");
const dni = document.querySelector("#dni");
const telefono = document.querySelector("#phone");  
const botonFinal = document.querySelector ("#botonFinal");

window.addEventListener("load", () => {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        validarCampos()
    })

    const validarCampos = ()=> {
        const nombreValor= nombre.value.trim()
        const dniValor= dni.value.trim()
        const emailValor= email.value.trim()
        const telefonoValor= telefono.value.trim();



        if(nombreValor==="" || dniValor==="" || emailValor==="" ||telefonoValor===""){
            Toastify({
                text: 'ERROR, debe llenar todos los campos.',
                duration: 3000,
                position: 'center',
                gravity: 'bottom',
                style: {
                    background: '#000000'
                }
            }).showToast ();
        }else{
            Toastify({
                text: 'Tu compra ha sido realizada con éxito! Nos vamos a comunicar con vos vía email.',
                duration: 4000,
                position: 'center',
                gravity: 'bottom',
                style: {
                    background: '#000000'
                }
            }).showToast ();
        }
    }
})




/*
//form
formulario.addEventListener("submit", validarForm);

function validarForm(evento){
    (email.value=="")||(nombre.value="")||(dni.value="")||(telefono.value="") ? evento.preventDefault () : []
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


//expresiones
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,//letras y espacios
	dni: /^\d{8}$/,//numeros
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//formato email
	telefono: /^\d{7,14}$/ //numeros
}

const campos = {
    nombre: false,
    dni: false,
    email: false,
    telefono: false
}
    

//validar form
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            if(expresiones.nombre.test(e.target.value)){
                campos["nombre"]=true;
            }else{
                campos["nombre"]=false;
            }
        break;

        case "dni":
            if(expresiones.dni.test(e.target.value)){
                campos["dni"]=true;
            }else{
                campos["dni"]=false;
            }
        break;

        case "email":
            if(expresiones.email.test(e.target.value)){
                campos["email"] =true;
            }else{
                campos["email"]=false;
            }
        break;

        case "phone":
            if(expresiones.telefono.test(e.target.value)){
                campos["telefono"] =true;
            }else{
                campos["telefono"]=false;
            }
        break;
    }
}


//validar datos
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.dni && campos.email && campos.telefono){
        botonFinal.addEventListener('click', () => {
            Toastify({
                text: 'ok',
                duration: 1000,
                position: 'center',
                gravity: 'bottom',
                style: {
                    background: '#000000'
                }
            }).showToast ();
        });
    }
});
*/
