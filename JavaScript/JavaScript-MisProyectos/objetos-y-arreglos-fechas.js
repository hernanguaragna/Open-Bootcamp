//LIsta, arreglo

const lista = [1, "hola", undefined, null];
console.log(lista);

const lista2 = new Array(1, "hola", undefined, null);
console.log(lista2);

const lista3 = new Array(3);
lista3[0]= "hola";
lista3[1]=new Array(2);
console.log(lista3);

//OBJETOS 
const movil ={
    altura: 10,
    anchura: 5,
    blanco: false,
    marca: "apple",
    contactos:["martin","raul"],
    sd:{
        marca: "sandisk",
        almacenamiento: 32,
    }
}
movil.color= "azul";
console.log(movil);


//Fechas
const ahora = new Date();
console.log(ahora);

const fecha_millis = new Date(10);
console.log(fecha_millis);