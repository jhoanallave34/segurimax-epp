// =======================================
// SEGURIMAX EPP
// Script Principal
// Compatible con tu productos.js actual
// =======================================

let productoActual = null;
let indiceImagen = 0;

// ==============================
// Mostrar Productos
// ==============================

mostrarProductos(productos);

function mostrarProductos(lista){

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";

    lista.forEach(producto=>{

        catalogo.innerHTML += `

        <div class="producto">

            <img src="${producto.imagenes[0]}" alt="${producto.nombre}">

            <h2>${producto.nombre}</h2>

            <p>${producto.descripcion}</p>

            <p class="precio">${producto.precio}</p>

            <button onclick="verProducto(${producto.id})">

                Ver Producto

            </button>

        </div>

        `;

    });

}

// ==============================
// Buscar Productos
// ==============================

function buscarProducto(){

    let texto = document
    .getElementById("buscar")
    .value
    .toLowerCase();

    let resultado = productos.filter(producto =>

        producto.nombre.toLowerCase().includes(texto) ||

        producto.descripcion.toLowerCase().includes(texto)

    );

    mostrarProductos(resultado);

}

// ==============================
// Categorías
// ==============================

function filtrarCategoria(categoria){

    if(categoria=="Todos"){

        mostrarProductos(productos);

        return;

    }

    let resultado = productos.filter(producto=>{

        let nombre = producto.nombre.toLowerCase();

        switch(categoria){

            case "Botas":
                return nombre.includes("bota");

            case "Overol":
                return nombre.includes("overol");

            case "Parka":
                return nombre.includes("parka");

            case "Casco":
                return nombre.includes("casco");

            case "Chaleco":
                return nombre.includes("chaleco");

            case "Filtro":
                return nombre.includes("filtro");

            default:
                return true;

        }

    });

    mostrarProductos(resultado);

}

// ==============================
// Abrir Producto
// ==============================

function verProducto(id){

    productoActual = productos.find(p=>p.id==id);

    indiceImagen = 0;

    document.getElementById("modal").style.display="block";

    document.getElementById("imagenPrincipal").src=

    productoActual.imagenes[indiceImagen];

    document.getElementById("nombreProducto").innerHTML=

    productoActual.nombre;

    document.getElementById("descripcionProducto").innerHTML=

    productoActual.descripcion;

    document.getElementById("precioProducto").innerHTML=

    productoActual.precio;

    // CAMBIA ESTE NÚMERO POR TU WHATSAPP

    let telefono="59173784596";

    let mensaje=encodeURIComponent(

    "Hola, deseo información del producto: "

    +productoActual.nombre

    );

    document.getElementById("whatsapp").href=

    "https://wa.me/"+telefono+"?text="+mensaje;

}

// ==============================
// Imagen Siguiente
// ==============================

function siguiente(){

    if(!productoActual) return;

    indiceImagen++;

    if(indiceImagen>=productoActual.imagenes.length){

        indiceImagen=0;

    }

    document.getElementById("imagenPrincipal").src=

    productoActual.imagenes[indiceImagen];

}

// ==============================
// Imagen Anterior
// ==============================

function anterior(){

    if(!productoActual) return;

    indiceImagen--;

    if(indiceImagen<0){

        indiceImagen=

        productoActual.imagenes.length-1;

    }

    document.getElementById("imagenPrincipal").src=

    productoActual.imagenes[indiceImagen];

}

// ==============================
// Cerrar Modal
// ==============================

function cerrarModal(){

    document.getElementById("modal").style.display="none";

}

// ==============================
// Cerrar haciendo clic afuera
// ==============================

window.onclick=function(event){

    const modal=document.getElementById("modal");

    if(event.target==modal){

        modal.style.display="none";

    }

}

// ==============================
// Tecla ESC
// ==============================

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        cerrarModal();

    }

});