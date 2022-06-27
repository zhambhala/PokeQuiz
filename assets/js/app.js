//-----------------------------puroJS-----------------------------------------------

let pokedex = []
let elegir
const nombreElecciones = []
const formulario = document.querySelector('#form')
const inputNombre = document.querySelector('#form-nombre')
const btnEnviar = document.querySelector('#form-btn-elegir')
const formPaisajes = document.querySelector('#formPaisajes')
const formClimas = document.querySelector('#formClimas')
const pokeSelection = document.querySelector('#pokeCard')
let entrenador = []
/* ejemplo de class con constructor

class Pokemon {

    constructor(nombre, especie, imagen, tipo, id) {
        this.nombre = nombre
        this.especie = especie
        this.imagen = imagen
        this.tipo = tipo
        this.id = id

    }

    estos constructores van en la variable pokemones
    new Pokemon("Charmander", "Charmander", "../img/pokemons/Charmander.webp", "fuego", 4),
    new Pokemon("Cyndaquil", "Cyndaquil	", "../img/pokemons/Cyndaquil.webp", "fuego", 155),
    new Pokemon("Fennekin", "Fennekin", "../img/pokemons/Fennekin.webp", "fuego", 653),
    new Pokemon("Litten", "Litten", "../img/pokemons/Litten.webp", "fuego", 725),
    new Pokemon("Squirtle", "Squirtle", "../img/pokemons/Squirtle.webp", "agua", 7),
    new Pokemon("Mudkip", "Mudkip", "../img/pokemons/Mudkip.webp", "agua", 258),
    new Pokemon("Oshawott", "Oshawott", "../img/pokemons/Oshawott.webp", "agua", 501),
    new Pokemon("Froakie", "Froakie", "../img/pokemons/Froakie.webp", "agua", 656),
    new Pokemon("Bulbasaur", "Bulbasaur", "../img/pokemons/Bulbasaur.webp", "planta", 1),
    new Pokemon("Turtwig", "Turtwig", "../img/pokemons/Turtwig.webp", "planta", 387),
    new Pokemon("Snivy", "Snivy", "../img/pokemons/Snivy.webp", "planta", 495),
    new Pokemon("Chespin", "Chespin", "../img/pokemons/Chespin.webp", "planta", 650),
    new Pokemon("Meowth", "Meowth", "../img/pokemons/Meowth.webp", "normal", 52),
    new Pokemon("Teddiursa", "Teddiursa", "../img/pokemons/Teddiursa.webp", "normal", 216),
    new Pokemon("Zigzagoon", "Zigzagoon", "../img/pokemons/Zigzagoon.webp", "normal", 263),
    new Pokemon("Minccino", "Minccino", "../img/pokemons/Minccino.webp", "normal", 572)
    

}
*/

const pokemones = [

    {
        nombre: "Charmander",
        especie: "Charmander",
        imagen: "./assets/img/pokemons/Charmander.webp",
        tipo: "fuego",
        id: 4
    },
    {
        nombre: "Cyndaquil",
        especie: "Cyndaquil",
        imagen: "./assets/img/pokemons/Cyndaquil.webp",
        tipo: "fuego",
        id: 155
    },
    {
        nombre: "Fennekin",
        especie: "Fennekin",
        imagen: "./assets/img/pokemons/Fennekin.webp",
        tipo: "fuego",
        id: 653
    },
    {
        nombre: "Litten",
        especie: "Litten",
        imagen: "./assets/img/pokemons/Litten.webp",
        tipo: "fuego",
        id: 725
    },
    {
        nombre: "Squirtle",
        especie: "Squirtle",
        imagen: "./assets/img/pokemons/Squirtle.webp",
        tipo: "agua",
        id: 7
    },
    {
        nombre: "Mudkip",
        especie: "Mudkip",
        imagen: "./assets/img/pokemons/Mudkip.webp",
        tipo: "agua",
        id: 258
    },
    {
        nombre: "Oshawott",
        especie: "Oshawott",
        imagen: "./assets/img/pokemons/Oshawott.webp",
        tipo: "agua",
        id: 501
    },
    {
        nombre: "Froakie",
        especie: "Froakie",
        imagen: "./assets/img/pokemons/Froakie.webp",
        tipo: "agua",
        id: 656
    },
    {
        nombre: "Bulbasaur",
        especie: "Bulbasaur",
        imagen: "./assets/img/pokemons/Bulbasaur.webp",
        tipo: "planta",
        id: 1
    },
    {
        nombre: "Turtwig",
        especie: "Turtwig",
        imagen: "./assets/img/pokemons/Turtwig.webp",
        tipo: "planta",
        id: 387
    },
    {
        nombre: "Snivy",
        especie: "Snivy",
        imagen: "./assets/img/pokemons/Snivy.webp",
        tipo: "planta",
        id: 495
    },
    {
        nombre: "Chespin",
        especie: "Chespin",
        imagen: "./assets/img/pokemons/Chespin.webp",
        tipo: "planta",
        id: 650
    },
    {
        nombre: "Meowth",
        especie: "Meowth",
        imagen: "./assets/img/pokemons/Meowth.webp",
        tipo: "normal",
        id: 52
    },
    {
        nombre: "Teddiursa",
        especie: "Teddiursa",
        imagen: "./assets/img/pokemons/Teddiursa.webp",
        tipo: "normal",
        id: 216
    },
    {
        nombre: "Zigzagoon",
        especie: "Zigzagoon",
        imagen: "./assets/img/pokemons/Zigzagoon.webp",
        tipo: "normal",
        id: 216
    },
    {
        nombre: "Minccino",
        especie: "Minccino",
        imagen: "./assets/img/pokemons/Minccino.webp",
        tipo: "normal",
        id: 572
    },

]

const tFuego = pokemones.filter((Pokemon) => {
    return (Pokemon.tipo === "fuego")

})

const tAgua = pokemones.filter((Pokemon) => {
    return (Pokemon.tipo === "agua")
})

const tPlanta = pokemones.filter((Pokemon) => {
    return (Pokemon.tipo === "planta")
})


const tNormal = pokemones.filter((Pokemon) => {
    return (Pokemon.tipo === "normal")
})
/*const desiciones = {
    clima: Number(prompt("elija el clima que mas le guste con numeros, 1=lluvioso, 2=soleado")),
    lugar: Number(prompt("elija el lugar que mas le guste con numeros, 1=lagos, 2=montañas")),
}
*/
//console.log(tFuego)
//console.log(tAgua)
//console.log(tNormal)
//console.log(tPlanta)
// -------------------funciones----------
const elecPosibles = (array1, array2) => {
    array1.push(array2[0])
    array1.push(array2[1])
    array1.push(array2[2])
    array1.push(array2[3])
}
const elecNombresPosibles = (array1, array2) => {
    array1.push(array2[0].nombre)
    array1.push(array2[1].nombre)
    array1.push(array2[2].nombre)
    array1.push(array2[3].nombre)
}
//----------------------------------- seleccion de form
let climaElegido
let caminoElegido

function elegirCamino() {
    var selectWay = document.getElementById("formPaisajes").value;
    if (selectWay == "Lagos") {
        caminoElegido = 1
        console.log(selectWay)
        console.log(caminoElegido)
    } else {
        caminoElegido = 2
        console.log(selectWay)
        console.log(caminoElegido)
    }
}
function elegirClima() {
    var selectWeather = document.getElementById("formClimas").value;
    if (selectWeather == "Lluvioso") {
        climaElegido = 1
        console.log(selectWeather)
        console.log(climaElegido)
    } else {
        climaElegido = 2
        console.log(selectWeather)
        console.log(climaElegido)
    }
}
//-------------------------------------------------------------------

let formOfTrainer = formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    elegirCamino()
    elegirClima()
    //console.log(e)
    //console.log(e.target[0])
    //console.log("submit del form")

    const entrenadorInfo = {
        nombre: inputNombre.value,
    }
    if (btnEnviar == onsubmit) {
        entrenador.push(entrenadorInfo)
        if (caminoElegido === 1 && climaElegido === 1) {
            elecNombresPosibles(nombreElecciones, tAgua)
            elecPosibles(pokedex, tAgua)
            CrecionCartaPokemon()
            agregarTrasfondoDeCarta()
            console.log("funciona en agua")
        } else if (caminoElegido === 1 && climaElegido === 2) {
            elecNombresPosibles(nombreElecciones, tFuego)
            elecPosibles(pokedex, tFuego)
            CrecionCartaPokemon()
            console.log("funciona en fuego")
        } else if (caminoElegido === 2 && climaElegido === 2) {
            elecNombresPosibles(nombreElecciones, tPlanta)
            elecPosibles(pokedex, tPlanta)
            CrecionCartaPokemon()
            console.log("funciona en planta")
        } else if (caminoElegido === 2 && climaElegido === 1) {
            elecNombresPosibles(nombreElecciones, tNormal)
            elecPosibles(pokedex, tNormal)
            CrecionCartaPokemon()
            console.log("funciona en normal")
        } else {
            alert("non")
        }


    }
    console.log(entrenadorInfo)
    console.log(entrenador)

})
//--------------------

function CrecionCartaPokemon() {
    pokedex.forEach((e) => {
        let pokeCards = document.createElement('pokeCards')
        pokeCards.innerHTML = `
    <div class="m-1 justify-content-center">
    <div class="card trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${e.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title cBlack">${e.nombre}</h5>
            <p class="card-text cBlack">numero en pokedex ${e.id}</p>
            <p>${e.especie}</p>
            <button class="btn btn-custom-btn" onClick="elegirPokemon(${e.id})">ELEGIR</button>
        </div>
    </div>
    </div>
`
        pokeSelection.append(pokeCards)

    })
}
function agregarTrasfondoDeCarta() {
    let trasfondoDeCarta = document.querySelector(".trasfondoDeCarta")
    pokedex.forEach((a) => {
        
    trasfondoDeCarta.classList.add("bg-custom-agua")


    })
     
}

