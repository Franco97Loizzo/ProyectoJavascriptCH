const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector("#tbody");

function rellenarCarrito(arrayCarrito)
{
    for (let producto of arrayCarrito)
    {   
        let row = document.createElement("tr");
        row.innerHTML = `<td class="tdChart">${producto.nombre}</td><td class="tdChart">$${producto.precio}</td><td class="tdChart">${producto.cantidad}</td><td class="tdChart">${producto.subtotal}</td><td><button class="btn btn-danger eliminarProducto">Eliminar</button></td><td><button id="conversor">convertir</button></td>`
        tbody.appendChild(row);
            //fetch conversor de usd a ars
    let botonConvertidor = document.getElementById("conversor");

    let myHeaders = new Headers();
    myHeaders.append("apikey", "DRG0sT8MJqXupKqaHowvkkPPq3NdZgrg");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=ARS&from=USD&amount=${producto.subtotal}` , requestOptions)
        .then(response => response.json())
        .then((result) => 
            {
                console.log(result)
                console.log(result.result)
            botonConvertidor.addEventListener("click", ()=>{
                swal("La conversion es $ARS " + result.result);
            })
        })
        .catch(error => console.log('error', error))
    }
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto");

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
})

function eliminarProducto(e){
    swal("Eliminaste los productos",":c","error")
    let index = carrito.findIndex(producto => producto.id == e.target.id)
    carrito.splice(index, 1);
    e.target.parentNode.parentNode.remove();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

