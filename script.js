// Función para mostrar un cuadro de diálogo emergente
function mostrarMensaje() {
    alert("Hola Mundo :)");
}

// VARIABLES
function imprimirVariables() {
    let nombre = "Marcelo";
    let edad = "22";

    console.log("nombre:", nombre);
    console.log("edad:", edad);

    // Forma correcta de concatenar cadenas usando template literals
    console.log(`nombre: ${nombre}, edad: ${edad}`);

    console.error("Error: BLA BLA BLA");
    console.warn("Advertencia: x x x");
}

function arreglos() {
    let frutas = ['Manzana', 'Pera', 'Banana'];
    // Bucle
    for (let f of frutas) {
        console.log(f);
    }

    // Condicionales
    if (frutas[1] === 'Pera') {
        console.log("La segunda fruta es una pera");
    } else {
        console.log('NO es una PERA');
    }
}

// Agregar evento a un elemento HTML
document.getElementById("btnSaludar").addEventListener(
    "click", function () {
        console.log("Hola");
    }
);

// Modificar al HTML a través del DOM
document.getElementById("btnAgregar").addEventListener(
    "click", () => {
        // Obtener el elemento "lista" (ul) del documento HTML
        let lista = document.getElementById("lista");
        // Creando un nuevo elemento HTML, li = list item
        let nuevoItem = document.createElement("li");
        // Obteniendo el total de items de la lista
        let totalItems = lista.childElementCount;
        // Agregando un contenido (texto) al item
        nuevoItem.textContent = `Item ${totalItems + 1}`; // Usando backticks correctamente
        // Agregando item a la lista
        lista.appendChild(nuevoItem);
    }
);

// Función para agregar palabra a la lista
function addPalabraLista() {
    let lista = document.getElementById("lista");
    let nuevaPalabra = prompt("Introduce una palabra:");
    if (nuevaPalabra) {
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = nuevaPalabra;
        lista.appendChild(nuevoItem);
    }
}
