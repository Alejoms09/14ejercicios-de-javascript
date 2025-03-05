let tamaño= prompt("Escoja el tamaño de su sandwich(pequeño o grande)")
let jalapeño= prompt("Quiere su sandwich con jalapeño(si/no)")
let tocineta=prompt("Quiere su sandwich con tocineta(si/no)")
let pavo=prompt("Quiere su sandwich con pavo(si/no)")
let queso=prompt("Quiere su sandwich con queso(si/no)")

let adicionales=0;

if(tamaño==="pequeño"){

    tamaño=6000;
}
else if(tamaño==="grande"){

    tamaño=12000;
    
}
else {

    alert(`El tamaño ingresado no existe por favor,escoja uno ya existente`);

    tamaño=0;


}
if(jalapeño==="si"){
    //como jalapeño es gratis entonces pues no puse ningun numero.
}
if(tocineta==="si"){
    adicionales+=3000;
}
if(pavo==="si"){
    adicionales+=3000;
}
if(queso==="si"){
    adicionales+=2500;
}

let costototal = tamaño+adicionales;

if(tamaño!==0) //niego el 0 porq pues para poder que si se muestra un numero 0 en tamaño es invalido

alert(`El costo total de su sandwich es de ${costototal}`)





