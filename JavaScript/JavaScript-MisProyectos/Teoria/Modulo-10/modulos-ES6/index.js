// import { factorial, suma, nombre } from "./modulos/matematicas.js";
import * as moduloMatematicas from "./modulos/matematicas.js";
import getAutor, {autor}from "./modulos/literatura.js";
const sum = moduloMatematicas.suma(4,12)
console.log(sum)

const fact = moduloMatematicas.factorial(5)
console.log(fact)
console.log(moduloMatematicas.nombre)
console.log(getAutor())
console.log(autor)