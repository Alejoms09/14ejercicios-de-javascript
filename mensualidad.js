let nombre = prompt("Digite su nombre completo")
let mensualidad =parseInt(prompt("Ingrese la membresia que desea (15, 30 o 90 dias)"))


let costo;

switch(mensualidad){
    case 15:
        costo = 18000;

        break;
        case 30:
            costo = 35000;

            break;
            case 90:
                costo = 86000;
    
                break;
                default:
                    costo ="La membresia ingresada no es valida";

}
alert(`La mensualidad deseada por el usuario ${nombre} tiene un costo de ${costo}`)