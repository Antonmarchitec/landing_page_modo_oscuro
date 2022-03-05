let template_figure = document.querySelector("#template_figure").content
let content_box2_card = document.querySelector("#content_box2_card")
let fragment_card = document.createDocumentFragment()


//PARA TEMPLATE IMAGEN GRANDE
/*let templateBaseFigure = document.querySelector("#templateBaseFigure").content
let baseFigura = document.querySelector("#baseF")
let fragment_figure = document.createDocumentFragment()*/


document.addEventListener("DOMContentLoaded", () =>{
    dataFechCard()
})


const dataFechCard = async () =>{
    try{
         const resCard = await fetch("graficos.json")
         const dataCard = await resCard.json()
         //console.log(dataCard)
         pintarCards(dataCard)

         document.addEventListener("click", (e) =>{
            if(e.target.dataset.id === "1"){
                pintarImagenUno(dataCard)   
            }else if(e.target.dataset.id === "2"){
                pintarImagenDos(dataCard)
            }else if(e.target.dataset.id === "3"){
                pintarImagenTres(dataCard)
            }else if(e.target.dataset.id === "4"){
                pintarImagenCuatro(dataCard)
            }else if(e.target.dataset.id === "5"){
                pintarImagenCinco(dataCard)
            }else if(e.target.dataset.id === "6"){
                pintarImagenSeis(dataCard)
            }else if(e.target.dataset.id === "7"){
                pintarImagenSiete(dataCard)
            }else if(e.target.dataset.id === "8"){
                pintarImagenOcho(dataCard)
            }
         })
         
    }catch(error){
        console.log("Error en data Card")
    }
}


const pintarCards = (dataCard) =>{
    //console.log(dataCard[0].title)
    dataCard.forEach( card => {
        //console.log(card)
        template_figure.querySelector("img").setAttribute("src",card.thumbnailUrl)
        template_figure.querySelector("img").setAttribute("alt",card.title)
        template_figure.querySelector("#card_name").textContent = card.title          
        template_figure.querySelector("img").dataset.id = card.id  //obtenemos ID
        
        let clone = template_figure.cloneNode(true)
        fragment_card.appendChild(clone)    
    })
    content_box2_card.appendChild(fragment_card)
}



const pintarImagenUno = (dataCard) =>{
     //console.log(dataCard[0].thumbnailUrl)
     let name_movi = document.querySelector("#name_movi")
     let image = document.querySelector(".imgG")
     //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
     image.setAttribute("src",dataCard[0].thumbnailUrl)
     name_movi.textContent = dataCard[0].title
}

const pintarImagenDos = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[1].thumbnailUrl)
    name_movi.textContent = dataCard[1].title
}

const pintarImagenTres = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[2].thumbnailUrl)
    name_movi.textContent = dataCard[2].title
}

const pintarImagenCuatro = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[3].thumbnailUrl)
    name_movi.textContent = dataCard[3].title
}

const pintarImagenCinco = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[4].thumbnailUrl)
    name_movi.textContent = dataCard[4].title
}

const pintarImagenSeis = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[5].thumbnailUrl)
    name_movi.textContent = dataCard[5].title
}

const pintarImagenSiete = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[6].thumbnailUrl)
    name_movi.textContent = dataCard[6].title
}

const pintarImagenOcho = (dataCard) =>{
    //console.log(dataCard[0].thumbnailUrl)
    let name_movi = document.querySelector("#name_movi")
    let image = document.querySelector(".imgG")
    //document.querySelector(".imgG").setAttribute("src",dataCard[0].thumbnailUrl)
    image.setAttribute("src",dataCard[7].thumbnailUrl)
    name_movi.textContent = dataCard[7].title
}
