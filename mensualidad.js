function nombre1() {
    let nombre = prompt("Digite su nombre completo");
    return nombre;
  }
  
  function mensualidad1() {
    let mensualidad = parseInt(prompt("Ingrese la membresía que desea (15, 30 o 90 días)"));
    return mensualidad;
  }
  
  function costo(mensualidad) {
    let costo;

    if (mensualidad === 15) {
      costo = 18000;
    } else if (mensualidad === 30) {
      costo = 35000;
    } else if (mensualidad === 90) {
      costo = 86000;
    } else {
      costo = 0; 
    }
    return costo;
  }
  
  function costototal() {
    let mensualidad = mensualidad1(); 
    return costo(mensualidad);
  }
  
  let nombre = nombre1(); 
  let costoTotal = costototal(); 
  

  if (costoTotal === 0) {
    alert("La membresía ingresada no es válida");
  } else {
    alert(`La mensualidad deseada por el usuario ${nombre} tiene un costo de ${costoTotal}`);
  }
  