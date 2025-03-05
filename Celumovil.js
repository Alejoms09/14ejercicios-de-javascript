let operador= (prompt("Ingresa tu operador (tigo, claro o movistar):"));

let minutos =(parseInt(prompt("Ingrese el numero de minutos consumidos")));

let cargofijo=0;
let valorminuto=0;
let valorpaquete=0;

if(operador==="tigo"){
    cargofijo=45000;
    valorminuto=200;
    valorpaquete=12000;
}

else if(operador==="claro"){
    cargofijo=30000;
    valorminuto=100;
    valorpaquete=18000;
}else if(operador==="movistar"){

    cargofijo=40000;
    valorminuto=250;
    valorpaquete=8000;
}
else{

    alert(`Seleccione un operador existente`)
}

let costominutos= minutos*valorminuto;

let costototal= costominutos+cargofijo+valorpaquete;

alert(`El costo total de su operador es de ${costototal}`);
    