//Strings o cadena de caracteres
let nombre = 'hernan';
let saludo = `hola ${nombre} como te va?`

console.log(saludo)
// 
//Metodos mas utilizados con cadenas de caracteres

//como obtener la longitud de un string

let str= 'Hola soy un string';
console.log(str.length );

//Obtener partes de cadena de caracteres

//slice() substring() substr()

let slice_str= str.slice(5,10);
console.log(slice_str);

let substring_str= str.substring(5,10);
console.log(substring_str);

let substr_str = str.substr(5,10);
console.log(substr_str);

//remplazar parte del contenido de una cadena de texto

let cadena= 'Hola mi nombre es Hernan';
console.log(cadena);

console.log(cadena.replace('Hernan', 'Nicolas'));

//Para comparar mismo texto entrado uno con mayouscula y otro con minuscula y no de false, se pueden pasar los dos a toLoweCase o toUpperCase
let input = 'Libra';
let db = ' libra';

//toLowerCase toUpperCase


console.log(input.toLowerCase === db.toLowerCase);

//concatenar dos cadenas de caracteres

let str_1= 'Hola mi nombre es ';
let str_2= 'Juan de las pelotas';
console.log(str_1.concat(" ",str_2));
console.log(`${str_1}${str_2}`);

//Obtener el caracter que hay en una cierta posicion
let str_4 = 'Hola soy el caracter numero 4';
console.log(str_4.charAt(28));
console.log(str_4[28]);

//obtener la posicion de una palabra dentro de una cadena de caracteres

let_5 = 'Hola soy Hernan y me gusta hacer esgrima';
console.log(let_5.indexOf('Hernan'));
console.log(let_5.charAt(9))
console.log(let_5.replace(/H/g,'G'))

//Metodos de cadena de texto

let textoLargo = 'Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.'
console.log(textoLargo.match(/Tito/g));
console.log(textoLargo.includes("mono"||"gato"));
console.log(textoLargo.startsWith('Tito'));
console.log(textoLargo.endsWith('Tito'));