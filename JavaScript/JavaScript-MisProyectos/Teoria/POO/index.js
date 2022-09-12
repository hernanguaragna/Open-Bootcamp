const persona ={
    nombre: 'Hernan',
    edad: 38,
    isDeveloper : true,
    saludo: function (){
        console.log("Hola")
    }
}

//console.log(persona)
persona.saludo();

const otraPersona ={
    nombre: 'Fulanito',
    edad: 21,
    isDeveloper : false,
    saludo: function (){
        console.log("Hola")
    }
}

const crearPersona = (nombre, edad, isDeveloper) => {   
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function () {
            console.log("Hola")
    }
}
}
const Nico = crearPersona('Nicolas',1,false)
console.log(Nico)

const Vero = crearPersona('Veronica',31,true)
console.log(Vero)