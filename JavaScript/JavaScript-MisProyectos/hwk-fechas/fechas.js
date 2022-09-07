//Crea un archivo llamado fechas.js que contenga las siguientes líneas//
// La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);

///////////////////////////////////

// - La fecha de tu nacimiento
const fechaNacimiento = new Date("october 8 1984");
console.log(fechaNacimiento);

/////////////////////////////////

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let comparacionFechas = fechaHoy.getTime() > fechaNacimiento.getTime();
console.log(comparacionFechas);

//////////////////////////////////////
// - Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

//////////////////////////////
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

//////////////////////////////
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);
