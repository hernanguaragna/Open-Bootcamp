//sets o conjuntos
const array = [1, 2, 3, 4, 5]
const miSet = new Set(array)
console.log(miSet)
//.add (para añadir valores)

miSet.add(9)
console.log(miSet)
//.delete()
miSet.delete(1)
console.log(miSet)
//.clear()
// miSet.clear()
// console.log(miSet)
//.has () es un metodo que te dice si incluye
console.log(miSet.has(2))
//.size(me da los valores unicos)
console.log(miSet.size)
miSet.forEach(valor=>{
    console.log(valor)
})
const itMiSet = miSet.values()
console.log(itMiSet)

const arrayMiSet = [...miSet]
console.log(arrayMiSet[2])

//Objetos
const obj = {
    id:4,
    nombre: "juan",
    apellido: "Gomez",
    isDeveloper: true,
    libros_favoritos: ["La chica del tren", "El padrino"],
    "4-juegos": [1,2,3,4]
};
console.log(obj.id)
const prop = "isDeveloper"
console.log(obj[prop]);

const obj2 = {...obj};
console.log(obj2)

console.log(obj.nombre)
console.log(obj2.nombre)
obj2.nombre = "Nico"
console.log(obj.nombre)
console.log(obj2.nombre)

//// Ordenar lista de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anio:1939},
    {titulo: "Titanic", anio:1997},
    {titulo: "Moana", anio:2016},
    {titulo: "El efecto mariposa", anio:2004},
    {titulo: "TED", anio:2012}
]
console.log(listaPeliculas)
listaPeliculas.sort((a,b)=> a.anio - b.anio)
console.table(listaPeliculas)

//fechas
const fecha = new Date();
console.log(fecha)
const fecha2 = new Date(1984,9,8,23,30);
console.log(fecha2)
const fecha3 = new Date(0);//milisegundos
console.log(fecha3)
const fecha4 = new Date("october, 8, 1984 23:30:00");
console.log(fecha4)
console.log(fecha2.getTime() === fecha4.getTime())

//obtener el dia, mes y año de una fecha
console.log(fecha2.getDate());
console.log(fecha2.getMonth()+1)
console.log(fecha2.getFullYear())
console.log(fecha2.toLocaleDateString('en-GB'))