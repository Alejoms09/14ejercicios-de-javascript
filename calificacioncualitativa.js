let estudiante = prompt("Digite su nombre completo")
let fisica =parseFloat(prompt(" Ingrese su calificacion en fisica de (0-10)"))
let quimica =parseFloat(prompt(" Ingrese su calificacion en quimica de (0-10)"))
let biologia =parseFloat(prompt(" Ingrese su calificacion en biologia de (0-10)"))
let matematicas =parseFloat(prompt(" Ingrese su calificacion en matematicas de (0-10)"))
let informatica =parseFloat(prompt(" Ingrese su calificacion en informatica de (0-10)"))

let calificacioncualitativa;

let sumac = fisica + quimica + biologia + matematicas + informatica;
let notatotal= (sumac/50)*100;

if(notatotal>=0 && notatotal<=59.9) {

    calificacioncualitativa="Mala";

}
else if (notatotal>=60 && notatotal<=80){
    calificacioncualitativa="buena";
}

else if (notatotal>80){
    calificacioncualitativa="excelente";
}
else { 
    calificacioncualitativa="La calificacion dada no es valida";
}

alert(`Estudiante ${estudiante} su  porcentaje de notas  es de ${notatotal} por lo tanto su calificacion es ${calificacioncualitativa}`)