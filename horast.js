function username() {
    return prompt("Digite su nombre completo");
  }
  
  function horast() {
    return parseInt(prompt("Digite el número de horas trabajadas"));
  }
  
  function pagohours(hoursw) {
    let pago;
    
    if (hoursw <= 10) {
      pago = 30000 * hoursw; // Si trabajó 10 horas o menos, el pago es 30,000 por hora
    } else {
      pago = 33000 * hoursw; 
    }
    return pago;
  }
  
  let nombre = username(); 
  let hoursw = horast(); 
  
  let pago = pagohours(hoursw); 
  
  alert(`Señor/a ${nombre}, el número de horas que trabajó fueron ${hoursw}, por lo tanto, su salario equivale a ${pago}`);
  