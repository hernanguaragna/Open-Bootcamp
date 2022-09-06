//Numbers
//declaracion de variables numericas (enteros y decimales)
let a = 5;
console.log(a);

let b = 0.1;
console.log(b);

//precision
let c = 0.2;

console.log(b+c);

console.log(Math.round((0.1+ 0.2) *100)/100);

//Principales operaciones aritmeticas
let d = 3.5;
let e = 4.8;
console.log(d - e);
console.log(d * e);
console.log(d / e);

console.log(typeof(d));
let d_string = d.toString();

//Representacion de los numeros en cadena de texto
console.log(typeof(d_string));

//redondeo de Numeros decimales

let f = d * b;
console.log(f)

//.toFixd()
console.log(f.toFixed(2))
console.log(typeof(f.toFixed(2)))

//.toPrecition() devuelve las cifras significativas la cantidad (q le indico) de numeros totales 
let signi = 56838596094939485869603
console.log(signi.toPrecision(4))


//Operador .valueOf()obtiene valores numnericos a partir de literales
//new Number
let aa = 2;
let bb = new Number(3);
console.log(aa);
console.log(bb);
console.log(bb.valueOf());
//new String
let string1 = new String('Hola comó estas¿?');
console.log(string1);
console.log(string1.valueOf());


//NaN (no es un numero) - Infinitiy ( cundo quiero dividir algo por cero o null 

let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor =0;
console.log(numerador/divisor);
console.log()


// Covertir loso strings a valores numericos con Number, parseInt y parseFloat
let numero = '5.89';
let numero2 = 17.2;

console.log(typeof(numero));
console.log(numero + numero2)
console.log(Number(numero) + numero2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

// Numeros hexadecimales (base 16)
let numHex = '0x5a34';
console.log(parseInt(numHex, 16));


//Obtener los valores maximos y minimos

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);