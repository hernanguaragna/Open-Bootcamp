
function saludar(nombre){
   console.log(`Hola ${nombre}`); 
}
saludar("Hernán")

//////
let nombre2 = "Nico"
function despedir(nombre){
    console.log(`Chau ${nombre}!`);
}
despedir(nombre2)

///
let persona = {nombre: "Nicolas", apellido: "Guaragna"};
console.log(persona);
function saludarPersona(objeto){
console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}
saludarPersona(persona)

//////
function imprimirNUmero(numero=6){ //parametros por defecto
    console.log(numero)
}
imprimirNUmero();

function imprimir(...parametros){
console.log(parametros)
}
imprimir(10, 9, true, "juan",persona)

function suma(...nums){
return nums.reduce((a,b)=>a + b)
}
const s =suma(100,50,20,30,10)
console.log(s);


function multiplicar (a=0, b=0,){
    return a*b
    
}
const mult= multiplicar(5,5);
console.log(mult);

////arrow functions
const array = [1,2,3,4,5,6,7,8]
const array2= array.map((valor)=>valor*2)

console.log(array2);
const dobleDelValor = valor => valor*2;
console.log(dobleDelValor(100));

const array3 = array.map(dobleDelValor);
console.log(array3);

//carga y sobre carga de funciones

function saludar2 (){
    hola();
}

function hola(){
    console.log("hola soy la funcion hola");
}
saludar2();

//funciones async 
function miAsync(){
    //llama a una base de datos externa

}
const miPromesa = new Promise((resolve, reject)=>{
    const i = Math.floor(Math.random()*2);
    if(i !==0){
        resolve()
    }else{
        reject()
    }
})
miPromesa
.then(()=>console.log("Se resolvio correctamente"))
.catch(()=>console.log("ERROR"));

function* generaId(){
    let id = 0;
    while (true) {
        id++
        
        if (id === 10){
        return id
        }
        yield id //se queda hasta que se llame de nuevo
    }
}
const gen = generaId();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
