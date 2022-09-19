const boton = document.querySelector("#btn")

//console.log(boton)

boton.addEventListener("click",()=>{
    //alert("Clicked")
    confirm("estas de acuerdo?")? console.log("ok"): console.log ("NO!!")
})

const botonInfo = document.querySelector("#btn-info")
botonInfo.addEventListener("click", () =>{
const nombre = prompt("Cual es tu nombre?")
console.log("Hola" + " "+ nombre)
})
