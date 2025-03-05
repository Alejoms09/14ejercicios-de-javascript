let username= prompt("Digite su nombre completo")
let hoursw= parseInt (prompt("Digite el numero de horas trabajadas"))

let pago;

if( hoursw <=10){

    pago= 30000*hoursw;
}

else{


    pago= 33000*hoursw;
}

alert(`Señor/a ${username}, el numero de horas que trabajo fueron ${hoursw}, por lo tanto su salario equivale a ${pago}`)