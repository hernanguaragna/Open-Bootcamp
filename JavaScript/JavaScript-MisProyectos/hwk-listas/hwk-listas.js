// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompra = ["leche", "manteca", "jugo", "fideos", "arroz"];
console.log(listaCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.table(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop("Aceite de Girasol");
console.table(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
	{ titulo: "El Padrino", director: "Francis Ford Coppola", fecha: 1972 },
	{ titulo: "Buenos Muchachos", director: "Martin Scorsese", fecha: 1990 },
	{ titulo: "Los infiltrados", director: "Martin Scorsese", fecha: 2006 },
];
console.table(peliculasFavoritas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculasFavoritas.filter(
	(obj) => obj.fecha > 2010,
);
console.table(peliculasPosteriores);
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map((obj) => obj.director);
console.table(directores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map((obj) => obj.titulo);
console.table(titulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const unirConcat = directores.concat(titulos);
console.table(unirConcat);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const unirPropagacion = [...directores, ...titulos];
console.table(unirPropagacion);
