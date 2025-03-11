
function genero1 (){

return prompt("Ingrese su genero (femenino o masculino)")

}

function edad1(){
return parseInt(prompt("Ingrese su edad"))
}

function ayudas1(){
let ayudas;

if (genero==="femenino")
{
if (edad>50){
ayudas=120000;
}
else if(edad>=30 && edad<=50)
{
    ayudas=100000;
}

else if(edad<30){
ayudas=0;
}

}
if (genero==="masculino"){
    ayudas=40000;
}
return ayudas;
}

let genero= genero1();
let edad= edad1();
let ayudas= ayudas1()

alert(`Su genero es ${genero} y su edad es ${edad} por lo tanto usted recibe ${ayudas} en ayudas.`)