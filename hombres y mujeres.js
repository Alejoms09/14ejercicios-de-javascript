let genero =prompt("Ingrese su genero (femenino o masculino)")
let edad = parseInt(prompt("Ingrese su edad"))
let ayudas

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
alert(`Su genero es ${genero} y su edad es ${edad} por lo tanto usted recibe ${ayudas} en ayudas.`)