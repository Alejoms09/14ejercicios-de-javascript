function numerodcopias() {
    let numerodecopias = parseInt(prompt("Ingrese el número de copias que desea imprimir"));
    return numerodecopias;
  }
  
  function costodecopias(numerodecopias) {
    let Copias;
    switch (true) {
      case (numerodecopias >= 0 && numerodecopias <= 499):
        Copias = 120;
        break;
      case (numerodecopias >= 500 && numerodecopias <= 749):
        Copias = 100;
        break;
      case (numerodecopias >= 750 && numerodecopias <= 999):
        Copias = 80;
        break;
      case (numerodecopias >= 1000):
        Copias = 50;
        break;
      default:
        Copias = "El número de copias es erróneo";
    }
    return Copias;
  }
  
  function costototal() {
    let numerodecopias = numerodcopias();
    let Copias = costodecopias(numerodecopias);
     {
      let total = numerodecopias * Copias;
      alert(`El número de copias es de ${numerodecopias} copias, cada una cuesta ${Copias}, por lo tanto el valor total de las copias es de ${total}`);
    
    
    }
  }
  
  costototal();
  
