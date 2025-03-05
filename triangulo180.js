let numero1 = parseInt(prompt("Ingrese su primer numero"))
let numero2 = parseInt(prompt("Ingrese su segundo numero"))
let numero3 = parseInt(prompt("Ingrese su tercer numero"))

let triangulo = numero1+numero2+numero3;

if (triangulo>180){
alert(`La suma da ${triangulo} por lo tanto no es valido es mayor a 180`)
}
else if (triangulo<180){
    alert(`La suma da ${triangulo} por lo tanto no es valido es menor a 180`)
}
else if (triangulo=180){
    alert(`La suma da ${triangulo} por lo tanto es valido para ser un triangulo`)
}