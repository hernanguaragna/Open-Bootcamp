// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales ={
    nombre: "Hernan",
    apellido: "Guaragna",
    edad:38,
    altura:1.82,
    eresDesarrollador: true
}
console.table(datosPersonales)
/////////////////////////////////////////////////////////////
// - Una variable que obtenga tu edad a partir del objeto anterior

const varEdad = datosPersonales.edad
console.log(varEdad)
/////////////////////////////////////////////////////////////
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const nuevaLista = [
    datosPersonales,
    {
        nombre: "Bruno",
    apellido: "Melle",
    edad:30,
    altura:1.90,
    eresDesarrollador: true
    },
    {
    nombre: "Javier",
    apellido: "Fioretti",
    edad:50,
    altura:1.80,
    eresDesarrollador: true
}
]
console.table(nuevaLista)
///////////////////////////////////////////////////////////////////////////////////
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const newList = nuevaLista.sort((a,b)=> b.edad-a.edad)
console.table(newList)

//////////////FIN////////////