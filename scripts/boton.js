const botton5k = document.querySelector("#comprar5K");
/* const bottonDarkD = document.getElementById("comprarDarkD"); */
/* const bottonQuest = document.getElementById("comprarQuestEP"); */


botton5k.addEventListener("click",()=>{
    comprar5KEP()
})

function cambiarFondo(black){
    const fondo = document.body
    fondo.style.backgroundColor = black;
}

function comprar5KEP(){
    let sectionF = document.getElementById("ventanaCompra")
    if(sectionF.style.display == "" || sectionF.style.display == "block")
    {
        sectionF.style.display = "none";
    }
    else{
        sectionF.style.display = "block";
    }
}
