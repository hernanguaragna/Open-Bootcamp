//factorial bucle while & break, en este caso use el do para que itere hasta que el while marca el fin
//do {
  //  console.log("Estoy en el do while")
//} while (i < max)
function factor(num) {
    let result = num;
  
    if (num === 0 || num === 1) return 1;
   do{
     num--;
      result = result * num;
   }
    while (num > 1) 
     
    
    
    return result;
  } 
 
    
  
  
  console.log(factor(10));
  factor(10);