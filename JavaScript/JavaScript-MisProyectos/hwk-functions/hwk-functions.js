// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function truE(){
return true
}
console.log(truE());
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const timeout = setTimeout(promesa,5000)  
function promesa(){
    return("Hola soy una promesa")
  
}

console.log(promesa())

// - Una función generadora de índices pares automáticos


function* genIndex(){
    let index = 0;
    while(true){
      yield 2*index;
      index++;
    }
  }
  
  var gen = genIndex();
  
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 

  
//