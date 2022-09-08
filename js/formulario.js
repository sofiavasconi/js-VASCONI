//variables 
const formulario = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const email = document.querySelector("#email");
const nombre = document.querySelector("#firstname");
const apellido = document.querySelector("#lastname");
const dni = document.querySelector("#dni");
const telefono = document.querySelector("#phone");  
const botonFinal = document.querySelector ("#botonFinal");


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
*/


//validar formulario
const validarFormulario = () => {
    formulario.noValidate = true;
    formulario.addEventListener("submit", e => {
        e.preventDefault ();
        inputs.forEach(input => {
            checkInputs(input);
        });
        if (formulario.checkValidar()){
            Toastify({
                text: 'Tu compra fue realizada con éxito! Nos vamos a comunicar con vos a través del correo electrónico.',
                duration: 3000,
                position: 'center',
                gravity: 'bottom',
                style: {
                    background: '#000000'
                }
            }).showToast ();
        }
    });
    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            checkInputs(input);
        });
    });
}

const checkInputs = input => {
    //variables
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const dniValue = dni.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();

    //patrones
    const patronLetras = /^[A-ZÀ-Ú]+$/i;
    const patronNumeros = /^[0-9]+$/;


    switch (input) {
        case nombre:
            if (nombreValue === "") {
                setErrorFor(nombre, "Este campo es obligatorio.");
            } else if (!patronLetras.test(nombreValue)) {
                setErrorFor(nombre, "Introduzca un nombre válido.");
            } else {
                setSuccessFor(nombre);
            }
            break;

        case apellido:
            if (apellidoValue === "") {
            setErrorFor(apellido, "Este campo es obligatorio.");
            } else if (!patronLetras.test(apellidoValue)) {
                setErrorFor(apellido, "Introduzca un apellido válido.");
            } else {
                setSuccessFor(apellido);
            }
            break;
    
        case dni:
            if (dniValue === "") {
                setErrorFor(dni, "Este campo es obligatorio.");
            } else if ((!patronNumeros.test(dniValue)) || (dniValue.length < 6)) {
                    setErrorFor(dni, "Introduzca un documento válido.");
            } else {
                setSuccessFor(dni);
            }
            break;

        case email:
            if (emailValue === "") {
                setErrorFor(email, "Este campo es obligatorio.");
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, "Introduzca un email válido.");
            } else {
                setSuccessFor(email);
            }
            break;

        case telefono:        
            if (telefonoValue === "") {
                setErrorForPhone(telefono, "Este campo es obligatorio.");
            } else if ((!patronNumeros.test(telefono)) || (telefonoValue.length < 8)) {
                setErrorForPhone(telefono, "Introduzca un celular válido.");
            } else {
                const formControl = telefono.parentElement.parentElement;                    
                formControl.className = "form-control success";
            }
            break;
    }
}