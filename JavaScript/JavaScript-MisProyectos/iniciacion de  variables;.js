var variable;
let variableLet_;

//const constante;
const constante = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);
// constante= "Adiós"; no se puede re asignar una constante

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variableVar = "Hola soy una variable VAR"
console.log(variableVar);

for (var i = 0; i < 1; i++){
    variableVar = "Hola soy una variable VAR"
    console.log(variableVar);
    variableVar = "Hola soy la segunda variable VAR"
    console.log(variableVar);
    
};
console.log(variableVar);

//con Let

let variableLet = "Hola soy una variable VAR"
console.log(variableLet);

for (var i = 0; i < 1; i++){
    variableLet = "Hola soy una variable LET"
    console.log(variableLet);
    variableVar = "Hola soy la segunda variable LET"
    console.log(variableLet);
    
};
console.log(variableLet);

//////////////////////

console.log(typeof true);
console.log(typeof variableLet);
console.log(typeof variableLet_);

const michigan = "Michigan";
console.log(michigan);
michigan = "Oclahoma";



