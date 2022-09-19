const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
	alert("click en el botón");
});

$("#btn").click(() => {
	alert('"Hola, estoy utilizando jQuery"');
});
