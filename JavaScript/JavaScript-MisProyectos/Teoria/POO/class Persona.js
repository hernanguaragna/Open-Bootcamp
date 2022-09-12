class Persona{
    nombre;
    edad;
    isDeveloper;
    constructor (nombre,edad,isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;

    }

    saludo(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad}`);
    }
}
const nuevaPersona = new Persona('hernan',38,true);
console.log(nuevaPersona);

nuevaPersona.saludo();
console.log(nuevaPersona instanceof Persona);