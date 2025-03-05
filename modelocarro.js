let modelo= parseInt(prompt("Ingrese el numero de modelo de su carro"))

if(modelo===119|| modelo===179||(modelo>=189 && modelo<=195)|| modelo===221|| modelo===780){

    alert("El automovil esta defectuoso, llevar a garantia.");

}
else  {
    alert("Su automovil no esta defectuoso")
}