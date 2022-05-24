class Disco 
{
    constructor(nombre, precio) 
    {
        this.nombre=nombre
        this.precio=precio
    }
}

const disco1 = new Disco ("5K EP", 1000)
const disco2 = new Disco ("Dark Deacon EP", 1500)
const disco3 = new Disco ("Quest Pack EP", 1800)

class Sencillo
{
    constructor(nombre,precio)
    {
        this.nombre=nombre
        this.precio=precio
    }
}

const sencillo1 = new Sencillo ("Fallen One", 300)
const sencillo2 = new Sencillo ("Warrior Path", 300)
const sencillo3 = new Sencillo ("SwordMaster", 350)
const sencillo4 = new Sencillo ("Lothric", 500)
const sencillo5 = new Sencillo ("No Choice", 400)


const discos = [disco1,disco2,disco3]
const sencillos = [sencillo1,sencillo2,sencillo3,sencillo4,sencillo5]
const musica = [disco1,disco2,disco3,sencillo1,sencillo2,sencillo3,sencillo4,sencillo5]

mostrarMenu ();
function mostrarMenu()
{
    let opcion = 0;
    while(opcion!==10)
    {
    opcion = Number(prompt(`Seleccione una opcion
                        1. Listar Discos
                        2. Listar Sencillos
                        3. Listar Todos
                        4. Comprar Disco por Nombre
                        5. Comprar Sencillo por Nombre
                        6. Comprar todos los Discos
                        7. Comprar todos los Sencillos
                        8. Comprar Todo
                        10. salir`));
    switch(opcion)
    {
        case 1:
        {
            listarDiscos();
            break;
        }
        case 2:
        {
            listarSencillos();
            break;
        }
        case 3:
        {
            listarTodos();
            break;
        }
        case 4:
        {
            comprarDiscoNombre();
            break;
        }
        case 5:
        {
            comprarSencilloNombre();
            break;
        }
        case 6:
        {
            comprarDiscos();
            break;
        }
        case 7:
        {
            comprarSencillos();
            break;
        }
        case 8:
        {
            comprarTodo();
            break;
        }
        default:
        {
            alert("opcion invalida")
            break;
        }
    }
    }
}

function listarDiscos()
{
    console.log("Los discos son")
    discos.forEach((disco)=>
    {
        console.log(disco)
    })
}

function listarSencillos()
{
    console.log("Los sencillos son")
    sencillos.forEach((sencillo)=>
    {
        console.log(sencillo)
    })
}

function listarTodos()
{
    console.log("Toda la discografia")
    musica.forEach((disco,sencillo)=>
    {
        console.log(disco,sencillo)
    })
}

function comprarDiscoNombre()
{
    let nombre = prompt("Escriba el nombre del disco a comprar")
    let comprar = discos.find((disco)=>disco.nombre.toLowerCase().indexOf(nombre)!==-1)
    console.log("Usted va a comprar")
    console.log(comprar);
}

function comprarSencilloNombre()
{
    let nombre = prompt("Escriba el nombre del sencillo a comprar")
    let comprar = sencillos.find((sencillo)=>sencillo.nombre.toLowerCase().indexOf(nombre)!==-1)
    console.log("Usted va a comprar")
    console.log(comprar);
}

function comprarDiscos()
{
    let costo = disco1.precio+disco2.precio+disco3.precio
    console.log(costo)
    alert("le va a costar $" + costo)
}

function comprarSencillos()
{
    let costo = sencillo1.precio+sencillo2.precio+sencillo3.precio+sencillo4.precio+sencillo5.precio
    console.log(costo)
    alert("le va a costar $" + costo)
}

function comprarTodo()
{
    let costo = disco1.precio+disco2.precio+disco3.precio+sencillo1.precio+sencillo2.precio+sencillo3.precio+sencillo4.precio+sencillo5.precio
    console.log(costo)
    alert("le va a costar $" + costo)
}