const botton5k = document.getElementById("comprar5K");
/* const bottonDarkD = document.getElementById("comprarDarkD"); */
/* const bottonQuest = document.getElementById("comprarQuestEP"); */


botton5k.addEventListener("click",()=>{
    comprar5KEP()
})

/* bottonDarkD.addEventListener("click",()=>{
    comprarDarkD() 
    alert("!!!")
}) */

/* bottonQuest.addEventListener("click",()=>{
    comprarQuest()
}) */

function comprar5KEP(){
    let dineroIngresado1 = prompt("Ingrese sus 10usd o mas")

    if(dineroIngresado1>=10)
    {
        alert("Haz comprado el disco con exito")
    }
    else
    {
        alert("Dinero insuficiente, la compra no se ha realizado")
    }
}



/* function comprarDarkD(){
    let plataIngresado = prompt("Ingrese sus 15usd o mas")

    if(plataIngresado>=15)
    {
        alert("Haz comprado el disco con exito")
    }
    else
    {
        alert("Dinero insuficiente, la compra no se ha realizado")
    }
} */

/* function comprarQuest(){
    let dineroIngresado = prompt("Ingrese sus 18usd o mas")

    if(dineroIngresado>=18)
    {
        alert("Haz comprado el disco con exito")
    }
    else
    {
        alert("Dinero insuficiente, la compra no se ha realizado")
    }
} */