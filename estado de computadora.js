let pitido = prompt("Su computadora emite algun sonido al iniciarse (si/no)")
let unidad = prompt("La unidad de su computadora gira (si/no)")

if (pitido==="si" && unidad==="si"){
    alert("Pongase en contacto con el tecnico de apoyo.")
   
}

else if(pitido==="si" && unidad==="no"){
    alert("Verificar datos de la unidad")
}
else if(pitido==="no" && unidad==="no"){
    alert("Traiga la computadora para repararla en la central.")
}
else if (pitido==="no" && unidad==="si"){
    alert("Compruebe las conexiones de altavoces .")
}