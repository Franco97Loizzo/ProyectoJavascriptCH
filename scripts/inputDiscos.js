const precioPagar5K = document.querySelector("#precioUsuario")
precioPagar5K.addEventListener("keypress", function(event) {
    event.key==="Enter"&&valorIngresado()
});

function valorIngresado(){
    
}


function mayorQue(){
    const textoMayor = document.createElement("div")
    textoMayor.innerHTML = `<p>Gracias por comprar este disco</p>`
    document.getElementById("mensajeDePago").appendChild(textoMayor)
}

function menorQue(){
    const textoMenor = document.createElement("div")
    textoMenor.innerHTML = `<p>Dinero insuficiente</p>`
    document.getElementById("mensajeDePago").appendChild(textoMenor)
}

