let contHeader_btnResponsive = document.querySelector("#contHeader_btnResponsive")
//let contHeader_ul = document.querySelector("#contHeader_ul")
//let iconClose = document.querySelector(".iconClose")

document.addEventListener("click", (e) =>{
      if(e.target.id === "contHeader_btnResponsive"){
          contHeader_ul.classList.add("contHeader_ul_JS")
      }else if(e.target.classList.contains("iconClose")){
        contHeader_ul.classList.remove("contHeader_ul_JS")
      }
})