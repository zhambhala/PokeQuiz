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
let climaElegido
let caminoElegido
let entrenadorInfo
let main = document.querySelector("main")
let upBtnCount
/*
function mainBgColor() {
    if (pokedex.push == tAgua) {
        main.classList.add ("bGAgua")
        let main = document.createElement('main')
        main.innerHTML`<div class="card-body">
        <h6 class="card-title cBlack">Felicidades${entrenador.value} su pokemon es</h6>
    </div>
        `
        main.append(main)
    }
   

    
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
const pokemonesJSON = JSON.stringify(pokemones)
//console.log(pokemonesJSON)
localStorage.setItem("pokemones", pokemonesJSON)
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

function elegirCamino() {
    var selectWay = document.getElementById("formPaisajes").value;
     if (selectWay == "Lagos") {
         caminoElegido = 1
         //console.log(selectWay)
         //console.log(caminoElegido)
     } else {
         caminoElegido = 2
         //console.log(selectWay)
         //console.log(caminoElegido)
     } //anterior a sintaxis de Op. ternarios
    //selectWay == "Lagos" ? caminoElegido = 1 : caminoElegido = 2;
}

function elegirClima() {
    var selectWeather = document.getElementById("formClimas").value;
    
    if (selectWeather == "Lluvioso") {
        climaElegido = 1
        //console.log(selectWeather)
        //console.log(climaElegido)
    } else {
        climaElegido = 2
        //console.log(selectWeather)
        //console.log(climaElegido)
    }
   // selectWeather == "Lluvioso" ? caminoElegido = 1 : caminoElegido = 2

}

function elegirCCCompletado() {
    elegirClima()
    elegirCamino()
    entrenadorInfo = {
        nombre: inputNombre.value,

    }
    return elegirCCCompletado
}
//-------------------------------------------------------------------
function formRelleno() {
    upBtnCount++;
    /* if (upBtnCount == 0) {
         document.querySelector("#btn-elegir").disabled = false
     } else {
         document.querySelector("#btn-elegir").disabled = true
     }*/
    //OPERADOR TERNARIO IF------------------------------------------------------------------------------------------------------------------------------------------------
    upBtnCount == 0 ? document.querySelector("#btn-elegir").disabled = false : document.querySelector("#btn-elegir").disabled = true;
}
let formOfTrainer = formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    elegirCCCompletado()
    //elegirCamino()
    //elegirClima()
    //console.log(e)
    //console.log(e.target[0])
    //console.log("submit del form")

    //console.log(entrenadorInfo)
    if (btnEnviar == onsubmit) {
        entrenador.push(entrenadorInfo)
        if (caminoElegido === 1 && climaElegido === 1) {
            elecNombresPosibles(nombreElecciones, tAgua)
            elecPosibles(pokedex, tAgua)
            CrecionCartaPokemonAgua()
            formRelleno()
            lSCargarInfo()
            //mainBgColor()
            //agregarTrasfondoDeCarta()
            //console.log("funciona en agua")
            //console.log( entrenador)
        } else if (caminoElegido === 1 && climaElegido === 2) {
            elecNombresPosibles(nombreElecciones, tFuego)
            elecPosibles(pokedex, tFuego)
            CrecionCartaPokemonFuego()
            formRelleno()
            //console.log("funciona en fuego")
        } else if (caminoElegido === 2 && climaElegido === 2) {
            elecNombresPosibles(nombreElecciones, tPlanta)
            elecPosibles(pokedex, tPlanta)
            CrecionCartaPokemonPlanta()
            formRelleno()
            //console.log("funciona en planta")
        } else if (caminoElegido === 2 && climaElegido === 1) {
            elecNombresPosibles(nombreElecciones, tNormal)
            elecPosibles(pokedex, tNormal)
            CrecionCartaPokemonNormal()
            formRelleno()
            // console.log("funciona en normal")
        } else {
            alert("non")
        }


    }
    console.log(entrenadorInfo)
    console.log(entrenador)

})
//--------------------
console.log(entrenador)

function lSCargarInfo() {
    localStorage.setItem("nombre", entrenador[0].nombre)
    return lSCargarInfo
}
