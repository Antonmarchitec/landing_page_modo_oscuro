let switchMode = document.querySelector("#switch")
let contBar = document.querySelector("#contBar")
let contFigures = document.querySelector("#contFigures")
let contBox1 = document.querySelector("#contBox1")
let contBox2 = document.querySelector("#contBox2")
let CONTAINER_BASE = document.querySelector("#CONTAINER_BASE")
let contFigures_box2_card = document.querySelector("#contFigures_box2_card")



switchMode.addEventListener("click", () =>{
    contBar.classList.toggle("dark_JS")
    contFigures.classList.toggle("contFigures_JS")
    contBox1.classList.toggle("contBox1_JS")
    contBox2.classList.toggle("contBox2_JS")
    CONTAINER_BASE.classList.toggle("CONTAINER_BASE_JS")
    switchMode.classList.toggle("active")
})