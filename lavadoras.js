let tipolavadora = parseInt(prompt("Ingrese el tipo de lavadora que va a alquilar 1 o 2"))
let cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras que va alquilar"))
let horas = parseInt(prompt("Ingrese la cantidad de horas que va alquilar las lavadoras"))

let costo;

switch(tipolavadora){
    case 1:
        costo=4000 //lavadora grande
        break;
        case 2:
            costo=3000 //lavadora pequeña
            break;

            default:
                costo= 0 
}

let costototal = cantidad*horas*costo;

if (cantidad > 3 ){

    costototal*= 0.97
}

alert(`El costo total por alquilar ${cantidad} por lavadoras tipo ${tipolavadora} por ${horas} horas es de: ${costototal}.`)