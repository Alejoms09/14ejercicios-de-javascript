
function obtenerTamaño() {
    let tamaño = prompt("Escoja el tamaño de su sandwich (pequeño o grande)");
    if (tamaño === "pequeño") {
        return 6000;
    } else if (tamaño === "grande") {
        return 12000;
    } else {
        alert("El tamaño ingresado no existe, por favor escoja uno existente");
        return 0; 
    }
}
function obtenerAdicionales() {
    let adicionales = 0;
    let jalapeño = prompt("¿Quiere su sandwich con jalapeño? (si/no)");
    let tocineta = prompt("¿Quiere su sandwich con tocineta? (si/no)");
    let pavo = prompt("¿Quiere su sandwich con pavo? (si/no)");
    let queso = prompt("¿Quiere su sandwich con queso? (si/no)");

    if (jalapeño === "si") {
        // Jalapeño es gratis, no agrego ningun costo
    }
    if (tocineta === "si") {
        adicionales += 3000;
    }
    if (pavo === "si") {
        adicionales += 3000;
    }
    if (queso === "si") {
        adicionales += 2500;
    }

    return adicionales; 
}

function calcularCostoTotal() {
    let tamaño = obtenerTamaño();
    if (tamaño === 0) { 
        return;
    }

    let adicionales = obtenerAdicionales(); 
    let costototal = tamaño + adicionales; 

    
    alert(`El costo total de su sandwich es de ${costototal}`);
}
calcularCostoTotal();