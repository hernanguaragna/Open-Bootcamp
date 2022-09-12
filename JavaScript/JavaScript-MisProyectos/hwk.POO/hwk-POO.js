// Enunciado del ejercicio:

// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

class Estudiante {
	_nombre;
	_asignaturas;
	constructor(nombre, asignaturas) {
		this._nombre = nombre;
		this._asignaturas = asignaturas;
	}
}
const obtenDatos = new Estudiante("Hernan", ["Javascript", "HTML", "CSS"]);
console.log(obtenDatos);

// const obtenDatos = {newEstudiante}
// console.log(obtenDatos);

// - Crea una nueva instancia de "Estudiante"
class futureDev extends Estudiante {
	constructor(nombre, asignaturas) {
		super(nombre, asignaturas);
	}
}

const nuevoDev = new futureDev("Juan", ["Python", "Mongo", "SQL"]);
console.log(nuevoDev instanceof Estudiante);
console.log(nuevoDev);

// - Haz la llamada al método obtenDatos
console.log(obtenDatos);
