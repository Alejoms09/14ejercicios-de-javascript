
function obtenerOperador() {
    return prompt("Ingresa tu operador (tigo, claro o movistar):");
}

function obtenerMinutos() {
    return parseInt(prompt("Ingrese el numero de minutos consumidos"));
}

function calcularCostos(operador) {
    let cargofijo = 0;
    let valorminuto = 0;
    let valorpaquete = 0;

    
    if (operador === "tigo") {
        cargofijo = 45000;
        valorminuto = 200;
        valorpaquete = 12000;
    } else if (operador === "claro") {
        cargofijo = 30000;
        valorminuto = 100;
        valorpaquete = 18000;
    } else if (operador === "movistar") {
        cargofijo = 40000;
        valorminuto = 250;
        valorpaquete = 8000;
    } else {
        alert("Seleccione un operador existente");
        return null;
    }

    return { cargofijo, valorminuto, valorpaquete }; 
}


function calcularCostoMinutos(minutos, valorminuto) {
    return minutos * valorminuto;
}


function calcularCostoTotal(cargofijo, valorpaquete, costominutos) {
    return cargofijo + valorpaquete + costominutos;
}


function calcularFactura() {
    let operador = obtenerOperador();
    let minutos = obtenerMinutos();

    // Obtener los costos según el operador
    let costos = calcularCostos(operador);
    if (costos === null) return;

    let { cargofijo, valorminuto, valorpaquete } = costos;

    
    let costominutos = calcularCostoMinutos(minutos, valorminuto);


    let costototal = calcularCostoTotal(cargofijo, valorpaquete, costominutos);


    alert(`El costo total de su operador es de ${costototal}`);
}


calcularFactura();
