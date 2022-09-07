//.sort()

const array =[2, 5, 6, 9, 0, 4]
console.log(array)

array.sort((a,b) =>{
if (a<b){
    return -1
}return +1
})
console.log(array)

const arrayNumerico = [4, 1,7,10,654,21]

arrayNumerico.sort((a,b)=>b-a) //si quisera que sea de < seria a-b
console.log(arrayNumerico)

//////
//array de objetos
const listaObjetos = [
	{ nombre: "juan", edad: 17 },
	{ nombre: "romina", edad: 27 },
	{ nombre: "fernando", edad: 45 },
	{ nombre: "santiago", edad: 19 },
	{ nombre: "veronica", edad: 31 },
];

listaObjetos.sort((a,b)=> a.edad - b.edad);
console.table(listaObjetos)

const existePersona = listaObjetos.some(persona => persona.nombre ==="fernando")
console.log(existePersona);

//obtener lista a partir de un objeto iterable
const str = "Hola mi nombre es enano macano"
console.log(str[5]);

const separarArray = Array.from(str)
console.log(separarArray)