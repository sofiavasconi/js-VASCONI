//variables 
const formulario = document.querySelector("#form");
const nombre = document.querySelector("#name");
const dni = document.querySelector("#dni");
const email = document.querySelector("#email");
const telefono = document.querySelector("#phone");  
const botonFinal = document.querySelector ("#botonFinal");
const nombreError = document.querySelector ("#nombreError");
const dniError = document.querySelector ("#dniError");
const emailError = document.querySelector ("#emailError");
const telefonoError = document.querySelector ("#telefonoError");



//validar nombre
function validarNombre (){
    const valorNombre = nombre.value;

    if(valorNombre.length==0){
        nombreError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    if(!valorNombre.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nombreError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    nombreError.innerHTML = `<i class='bx bx-check-circle' id="check"></i>`;
    return true;
}



//validar DNI
function validarDNI () {
    const valorDNI = dni.value;

    if(valorDNI.length== 0){
        dniError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    if(valorDNI.length !==8){
        dniError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    if(!valorDNI.match(/^[0-9]{8}$/)){
        dniError.innerHTML = `Solo ingresar numeros`;
        return false;
    }
    dniError.innerHTML = `<i class='bx bx-check-circle' id="check"></i>`;
    return true;
}


//validar email
function validarEmail (){
    const valorEmail = email.value;

    if(valorEmail.length == 0){
        emailError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    if(!valorEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    emailError.innerHTML = `<i class='bx bx-check-circle' id="check"></i>`;
    return true;
}


//validar telefono
function validarTelefono () {
    const valorTelefono = telefono.value;

    if(valorTelefono.length== 0){
        telefonoError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    if(valorTelefono.length !==10){
        telefonoError.innerHTML = `<i class='bx bx-error-circle id="error"'></i>`;
        return false;
    }
    if(!valorTelefono.match(/^[0-9]{10}$/)){
        telefonoError.innerHTML = `Solo ingresar numeros`;
        return false;
    }
    telefonoError.innerHTML = `<i class='bx bx-check-circle' id="check"></i>`;
    return true;
}



//validar formulario
function validarFormulario (){
    if(!validarNombre () || !validarDNI () || !validarEmail() || !validarTelefono()){
        Toastify({
            text: 'Completá todos los campos correctamente.',
            duration: 1000,
            position: 'center',
            gravity: 'bottom',
            style: {
                background: '#000000'
            }
        }).showToast ();
        return false;
    }
}

/*
//confirmar compra
botonFinal.onclick = (() => {
    if(validarNombre && validarDNI && validarEmail && validarTelefono){
        Toastify({
            text: 'Tu compra ha sido realizada con éxito! Nos vamos a comunicar con vos vía mail.',
            duration: 1000,
            position: 'center',
            gravity: 'bottom',
            style: {
                background: '#000000'
            }
        }).showToast ();
    }
});
*/
