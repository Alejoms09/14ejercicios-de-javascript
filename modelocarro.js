function modelom (){

let modelo= parseInt(prompt("Ingrese el numero de modelo de su carro"))

return modelo
}


function modelob (modelo){
if(modelo===119|| modelo===179||(modelo>=189 && modelo<=195)|| modelo===221|| modelo===780){

  return  alert("El automovil esta defectuoso, llevar a garantia.");

}
else  {
   return alert("Su automovil no esta defectuoso")
}}


let modelo=modelom()
modelob(modelo);