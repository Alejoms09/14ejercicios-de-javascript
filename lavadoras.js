function tipolavadora() {
    return parseInt(prompt("Ingrese el tipo de lavadora que va a alquilar (1 o 2)"));
  }
  
  function cantidad() {
    return parseInt(prompt("Ingrese la cantidad de lavadoras que va alquilar"));
  }
  
  function horas() {
    return parseInt(prompt("Ingrese la cantidad de horas que va alquilar las lavadoras"));
  }
  
  function costo(tipolavadora) {
    let costo;
    if (tipolavadora === 1) {
      costo = 4000; // Lavadora grande
    } else if (tipolavadora === 2) {
      costo = 3000; // Lavadora pequeña
    } else {
      costo = 0; 
    }
    return costo;
  }
  
  function costototal(tipolavadora, cantidad, horas) {
    let costoLavadora = costo(tipolavadora);
    let costototal = cantidad * horas * costoLavadora; 
    
    
    if (cantidad > 3) {
      costototal *= 0.97; 
    }
  
    return costototal;
  }
  

  let tipo = tipolavadora();
  let cantidadLavadoras = cantidad();
  let horasAlquiler = horas();
  

  let total = costototal(tipo, cantidadLavadoras, horasAlquiler);
  
  
  alert(`El costo total por alquilar ${cantidadLavadoras} lavadoras tipo ${tipo} por ${horasAlquiler} horas es de: ${total}`);
  