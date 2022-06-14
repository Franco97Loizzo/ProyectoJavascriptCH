let carrito = [];

class ProductoCarrito{

    constructor(nombre, precio, imagen, id, subtotal) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1;
        this.id = id;
        this.subtotal = precio;
    }
}

let divContainer = document.getElementById("row");

function rellenarPagina(arrayProductos) {

    for (let producto of arrayProductos) {

        let div = document.createElement("div");
        div.classList = "col-4 mt-3"

        div.innerHTML = `
        <div class="discos">
            <div class="caratulaDiscos>
                <div class="listaDiscos">
                    <img src="${producto.imagen}" witdh="150px" height="150px" alt="${producto.id}">
                </div>
                <div class="card-body tituloDiscos">
                    <h2 class="pDiscos">${producto.nombre}</h2>
                    <p class="pDiscos">$ <strong>${producto.precio}</strong></p>
                    <button class="btn btn-primary anadirCarrito linkCompra">Añadir al Carrito</button>
                </div>
            </div>
        </div>`
        divContainer.appendChild(div)
    }
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if(carritoLocalStorage){
        carritoNav(carritoLocalStorage)
    }
}

rellenarPagina(productos);

let botones = document.querySelectorAll(".anadirCarrito");

botones.forEach(elemento => {
    elemento.addEventListener("click", anadirCarrito)
})


function anadirCarrito(e) {
    Toastify({
        text: "Se agrego un producto al carrito",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        offset: {
            x: 5,
            y: 70 
        },
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
    }).showToast();
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if (carritoLocalStorage){
        carrito = carritoLocalStorage;
    }

    let index = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.children[0].alt);

    let nombre = e.target.parentNode.children[0].textContent;
    let precio = e.target.parentNode.children[1].children[0].textContent;
    let imagen = e.target.parentNode.parentNode.children[0].src;
    let id = e.target.parentNode.parentNode.children[0].alt;

    if (index== -1){
        const producto = new ProductoCarrito(nombre, precio, imagen,  id);
        carrito.push(producto);
        
    }else{
        carrito[index].cantidad++;
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    
} 

function carritoNav(arrayCarrito){

    let textoCarrito = document.getElementById("anchor_carrito");

    let totalProductos = 0;

    for(let discosSencillo of arrayCarrito){
        totalProductos += discosSencillo.cantidad;
    }

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `<p>Carrito (${totalProductos})</p>`
}
