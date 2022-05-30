const bottonDarkD = document.getElementById("comprarDarkD");

bottonDarkD.addEventListener("click",()=>{
    /* comprarDarkD() */
    alert("!!!")
})

function comprarDarkD(){
    let plataIngresado = prompt("Ingrese sus 15usd o mas")

    if(plataIngresado>=15)
    {
        alert("Haz comprado el disco con exito")
    }
    else
    {
        alert("Dinero insuficiente, la compra no se ha realizado")
    }
}