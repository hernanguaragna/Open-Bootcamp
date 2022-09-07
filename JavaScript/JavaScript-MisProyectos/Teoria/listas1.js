//Como trabajar con listas

let var1 = "27";
let array = [10, true, null, undefined, var1, "hola"];

console.log(array);

console.log(array[4]);

//Metodos para introducir nuevos valores en nuestros arrays

//.push() para introducir nuevos valores al final del array

array.push("final");
console.log(array);

//para introducir valores al principio usamos en unshift

array.unshift("principio");
console.log(array);
console.log(array[0]);

//para eliminar valores

//eliminar el ultimo elemento .pop()

array.pop();
console.log(array);

//para eliminar el primer elemento de nuestro array usamos el .shift()

array.shift();
console.log(array);
console.log(array[0]);

//Metodo para eliminar, modificar o añadir valores en nuestro array
//.splice()
let array2 = [1, 2, 3, 4, 5, 6, 7];
array2.splice(4, 0); //aca le digo que desde la posicion 4 no borre ninguno
console.log(array2);

array2.splice(3, 0, ["hola"]); // aca le digo que vaya a la posicion 3, no saque nada y agregue hola
console.log(array2);

//Unir 2 listas metodo .concat(lista2)
const lista1 = ["Hola", 2, false, null];
const lista2 = ["Adios, 8, true,undefined"];

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3);

//Unir dos lista con el factor de propagacion

const lista4 = [...lista1, ...lista2];
console.log(lista4);

//obtener una lista a partir de otra lista .slice()
//.slice() genera un nuevo array, no modifica el original

const arraySlice = ["hola", 1, 2, 3, true, null, "adios"];
console.log(arraySlice.slice(1, 4));
const arraySlice2 = arraySlice.slice(2, 5);
console.log(arraySlice2);

//Iterar los valores de una lista
//forma antigua y poco eficiente
const arreglo = ["hola", true, 23, null, undefined];
for (let i = 0; i < arreglo.length; i++) {
	console.log(arreglo[i]);
}

//nueva forma de ES6 y eficiente .foreach()
let suma = 0;
const newArray = [10, 34, 21, 78, 100];
newArray.forEach((valor) => {
	suma += valor;
	console.log(valor);
});
console.log(suma);

//como buscar un valor dentro de una lista .finde()
//xj si quiero encontrar el numero 23 del arreglo lin 70
const variable = arreglo.find((valor) => {
	if (valor === 23) {
		return true;
	}
});
console.log(variable);

const listaObjetos = [
	{ nombre: "juan", edad: 17 },
	{ nombre: "romina", edad: 27 },
	{ nombre: "fernando", edad: 45 },
	{ nombre: "santiago", edad: 19 },
	{ nombre: "veronica", edad: 31 },
];
// const objeto = listaObjetos.find(o => {
// if (o.nombre == "fernando"){
//     return true;

// }})
const objeto = listaObjetos.find(o => o.nombre === "fernando"
)
console.log(objeto.edad);
//otra opcion 
const {edad} = listaObjetos.find(o => o.nombre ==="fernando")
console.log(edad);

//Metodos avanzados
//.map

const arreglito = ["Pinamar", "CABA", "Villa Gesell", "Mendoza", "MDQ"];

const newArreglito = arreglito.map((valor, indice) =>`${indice +1} - ${valor}`)
console.log(newArreglito);

//.filter()

// const personasMayores = listaObjetos.filter(obj =>{
// if(obj.edad>30){
//     return true;
// }else{return false}
// });
const personasMayores = listaObjetos.filter(obj =>obj.edad>30);
console.log(personasMayores);

const NuevaLista = listaObjetos.filter(obj => obj.nombre != "fernando");
console.log(NuevaLista);

// .reduce()

