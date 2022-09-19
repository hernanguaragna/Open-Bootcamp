// localStorage.setItem("nombre", "Herni")
// localStorage.setItem("nombre", "Nico")

//console.log(localStorage.setItem("nombre"))



document.cookie= "nombreCookie=Hernancoookie"
document.cookie= "nombreCaducidad=NOmbre;expires="+ new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)
