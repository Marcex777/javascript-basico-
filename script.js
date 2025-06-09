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
function imprimirArreglos(){
    let frutas = ['Manzana', 'Pera', 'Banana'];
    //BUCLE
    for(let f of frutas){
        console.log(f)
    }
    //CONDICIONALES
    if(frutas[1] ==='pera'){
        console.log("La segunda fruta es una pera");
    } else{
        console.log('NO es una PERA');
    }
}