//Bucles

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
//for para recorrer listas
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
//For... of...para recorrer listas
for (let valor of lista) {
  console.log(valor);
}
//For Each para recorrer listas
lista.forEach((mongo) => {
  console.log(mongo);
});
// Estructura for...in para recorrer objetos.
let persona = {
  nombre: "Hernan",
  apellido: "Guaragna",
  edad: 37,
  sexo: "poco",
  isDeveloper: true,
};

for (const propiedad in persona) {
  console.log(persona[propiedad]);
}
let prop = "sexo";
console.log(persona[prop]);

//bucle while

let i = 0;
let max = 10;
while (i < max) {
  console.log(i);

  i++;
}
// bucle do while
i = 15;

do {
  console.log("se esta ejecutando el do while");
  i++;
} while (i < max);
