const nombre = "Hernan";
const apellido = "Guaragna";

const persona = {
	nombre: "Hernan",
	apellido: "Guaragna",
};

sessionStorage.setItem(persona, JSON.stringify(persona));
console.log(persona);

localStorage.setItem(
	persona,
	JSON.stringify({ nombre: "Hernan", apellido: "Guaragna" }),
);
console.log(JSON.parse(localStorage.getItem(persona)));

ocument.cookie = "nombreCookie=PersonaCookie";

document.cookie =
	"nombreCaducidad=Nombre;expires=" + new Date(-20000).toUTCString();

console.log(document.cookie);
