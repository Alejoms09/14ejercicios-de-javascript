
function nombrecompleto() {
    return prompt("Digite su nombre completo");
}


function notas() {
    let fisica = parseFloat(prompt("Ingrese su calificación en física de (0-10)"));
    let quimica = parseFloat(prompt("Ingrese su calificación en química de (0-10)"));
    let biologia = parseFloat(prompt("Ingrese su calificación en biología de (0-10)"));
    let matematicas = parseFloat(prompt("Ingrese su calificación en matemáticas de (0-10)"));
    let informatica = parseFloat(prompt("Ingrese su calificación en informática de (0-10)"));
    
    
    return { fisica, quimica, biologia, matematicas, informatica };
}


function calcularResultado() {
    let estudiante = nombrecompleto();
    let calificaciones = notas(); 

    
    let sumac = calificaciones.fisica + calificaciones.quimica + calificaciones.biologia +
                calificaciones.matematicas + calificaciones.informatica;
    

    let notatotal = (sumac / 50) * 100;

    
    let calificacioncualitativa;
    if (notatotal >= 0 && notatotal <= 59.9) {
        calificacioncualitativa = "Mala";
    } else if (notatotal >= 60 && notatotal <= 80) {
        calificacioncualitativa = "Buena";
    } else if (notatotal > 80) {
        calificacioncualitativa = "Excelente";
    } else {
        calificacioncualitativa = "La calificación dada no es válida";
    }

    
    alert(`Estudiante ${estudiante}, su porcentaje de notas es de ${notatotal}%, por lo tanto su calificación es ${calificacioncualitativa}.`);
}


calcularResultado();
