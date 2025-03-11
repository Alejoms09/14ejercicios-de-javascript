function numero1() {
    return parseInt(prompt("Ingresa tu primer número"));
  }
  
  function numero2() {
    return parseInt(prompt("Ingresa tu segundo número"));
  }
  
  function numero3() {
    return parseInt(prompt("Ingresa tu tercer número"));
  }
  
  function suma() {
    let num1 = numero1();
    let num2 = numero2();
    let num3 = numero3();
    
    return num1 + num2 + num3;
  }
  
  let triangulo = suma();
  
  if (triangulo > 180) {
    alert(`La suma da ${triangulo}, por lo tanto no es válido, es mayor a 180.`);
  } else if (triangulo < 180) {
    alert(`La suma da ${triangulo}, por lo tanto no es válido, es menor a 180.`);
  } else if (triangulo === 180) {
    alert(`La suma da ${triangulo}, por lo tanto es válido para ser un triángulo.`);
  }
  