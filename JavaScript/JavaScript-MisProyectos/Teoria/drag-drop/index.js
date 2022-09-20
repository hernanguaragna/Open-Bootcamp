//Data Transfer
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () => {
        console.log("Estoy arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const imgFantasma = document.querySelector(".img-gost");
        event.dataTransfer.setDragImage(imgFantasma,0,0);
    })
    parrafo.addEventListener("dragend", () => {
        console.log("He termiando de arrastrar " + parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
});

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", (event)=>{
        event.preventDefault();
        // console.log("Dragover")
        event.dataTransfer.dropEffect = "move";
    })
    
    seccion.addEventListener("drop",(event)=>{
        
console.log("Drop")
const id_parrafo = event.dataTransfer.getData("id")
const parrafo = document.getElementById(id_parrafo)
seccion.appendChild(parrafo)
    })
})