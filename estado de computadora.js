function pitido1() {
    return prompt("Su computadora emite algún sonido al iniciarse (si/no)");
  }
  
  function unidad() {
    return prompt("La unidad de su computadora gira (si/no)");
  }
  
  function funcion1(pitido, unidad) {
    if (pitido === "si" && unidad === "si") {
      return "Póngase en contacto con el técnico de apoyo.";
    } else if (pitido === "si" && unidad === "no") {
      return "Verificar datos de la unidad.";
    } else if (pitido === "no" && unidad === "no") {
      return "Traiga la computadora para repararla en la central.";
    } else if (pitido === "no" && unidad === "si") {
      return "Compruebe las conexiones de altavoces.";
    }
  }
  
  
  let pitido = pitido1();
  let unidadRespuesta = unidad();

  alert(funcion1(pitido, unidadRespuesta));
  