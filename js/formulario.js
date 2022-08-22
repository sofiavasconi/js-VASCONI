/*
const inputs = [...document.querySelectorAll(".input")]; 
const infoFormulario = document.querySelector(".checkout-info");
const totalFormulario = document.querySelector(".checkout-total"); 


//resumen carrito
let resumenCarrito = [];

const obtenerResumentCarrito = () => localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

const mostrarResumenCarrito = resumenCarrito => {
    for (const item of resumenCarrito) {
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        <img src="${item.imagen}" alt="Producto">
        <div>
            <h4>${item.titulo}</h4>
            <h5>$${item.precio}</h5>
            <p>Cantidad: ${item.numeroDeUnidades}</p>
        </div>
        `;
        infoFormulario.appendChild(div);
    };
};

const obtenerInfoFormulario = resumenCarrito => {
    let cero = 0;
    resumenCarrito.map(item => {
        cero += item.precio * item.numeroDeUnidades;
    });
    totalFormulario.innerText = cero;
};

const formulario = () => {
    resumenCarrito = obtenerResumentCarrito();
    mostrarResumenCarrito(resumenCarrito);
    obtenerInfoFormulario(resumenCarrito);
};
*/

