
class Persona{
    #nombre
    #edad
    constructor(nombre, edad){
   

    this.#nombre = nombre
    this.#edad = edad

    }
    saludo(){
        console.log(`Holiss mi nombre es ${this.nombre} y tengo ${this.edad} años de edad`);
    }
getNombre(){ //funcion GETTER
    return this.#nombre
} 
setNombre(nuevoNombre){
    this.#nombre = nuevoNombre;
}

}
const persona = new Persona("Hernan",70)
console.log(persona)
console.log(persona.nombre)
persona.saludo()


console.log(persona.getNombre())
persona.setNombre("juan")

console.log(persona.getNombre("juan"))


