let numero = prompt("Ingrese el numero que quiere saber si es par o impar ")


numero= parseInt(numero)

if(numero % 2 == 0) {

    alert(`El numero ${numero} es par  `)
}
else {
    alert(`El numero ${numero} es impar `)
}