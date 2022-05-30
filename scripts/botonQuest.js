const bottonQuest = document.getElementById("comprarQuestEP");

bottonQuest.addEventListener("click",()=>{
    comprarQuest()
})

function comprarQuest(){
    let dineroIngresado = prompt("Ingrese sus 18usd o mas")

    if(dineroIngresado>=18)
    {
        alert("Haz comprado el disco con exito")
    }
    else
    {
        alert("Dinero insuficiente, la compra no se ha realizado")
    }
}