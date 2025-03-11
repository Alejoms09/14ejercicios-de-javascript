
function numeromayor(){




let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))
let numero3 = parseFloat(prompt("Ingrese el tercer numero"))

if (numero1>numero2 && numero1>numero3){
   return alert(`El numero 1 que es ${numero1} es mayor que el numero 2 que es ${numero2} y que el numero 3 que es${numero3}`)


}

else if  (numero2>numero1 && numero2>numero3){
return    alert(`El numero 2 que es ${numero2} es mayor que el numero 1 que es ${numero1} y que el numero 3 que es ${numero3}`)


}

else if  (numero3>numero1 && numero3>numero2){
  return  alert(`El numero 3 que es ${numero3} es mayor que el numero 1 que es ${numero1} y que el numero 2 que es ${numero2}`)
}
else {

    return alert(`No se puede calcular ya que los 3 numeros tienen el mismo valor`)
}

}

numeromayor()