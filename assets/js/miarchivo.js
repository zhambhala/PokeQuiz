


/*

/*While*//* 
let uno = 1;
while (uno < 11) {
    console.log(uno);
    uno++;
}
*/
/*function*//*
function bucleWhile(num){
    let uno = 1;
    while (uno < num) {
        console.log(uno);
        uno++;
    }
}
bucleWhile(11);
*//*Dowhile*//*
function doWhile(num) {
    let uno = 1;
    do {
        console.log(uno);
        uno++;
    }while (uno < num)
    
}
doWhile(11);
*//*for*//* 
function bucleFor(num) {
    for (let i = 0; i < num; i++) {
        console.log(i)
        
    }
    
}
bucleFor(11)
*/

/*entregable 1
let frase = prompt("ingrese frase")
let cuantos = Number (prompt("ingrese cuantos veces quiere repetirla"))
for (let i = 0; i < cuantos; i++){
    frase +=" "
    console.log(frase) 
}if (cuantos> 100) {
    console.log(" se sobrecalienta el sistema ")
}
*/

/*entregable 2*//*
let selecBank = Number(prompt("¿en que banco desea sacar su credito? 1 = galicia 2 = macro 3 = bbva"))
let montoMedio
let monto = Number(prompt("¿cuanto desea pedir en su prestamo?"))
let meses = Number(prompt("¿en cuantas cuotas desea sacar su credito?"))
function dividir(valor, cuotas) {
    valor = monto
    cuotas = meses
    montoMedio = monto / meses
}
dividir(montoMedio)

function bancos(banco) {
    if (banco === 1) {
        let montoFinal = montoMedio * 1.50
        console.log("el valor de sus cuotas por mes es de " + montoFinal + " en un total de " + meses + " cuotas + el iva")
        console.log("abajo lo que debe pagar mas el iva")
        let montoIva = montoFinal * 0.21
        for (let i = 0; i < meses; i++) {
            console.log(montoFinal += montoIva)
        }
    } else if (banco === 2) {
        let montoFinal = montoMedio * 2.10
        console.log("el valor de sus cuotas por mes es de " + montoFinal + " en un total de " + meses + " cuotas")
        let montoIva = montoFinal * 0.21
        for (let i = 0; i < meses; i++) {
            console.log(montoFinal += montoIva)
        }
    } else if (banco === 3) {
        let montoFinal = montoMedio * 0.75
        console.log("el valor de sus cuotas por mes es de " + montoFinal + " en un total de " + meses + " cuotas")
        let montoIva = montoFinal * 0.21
        for (let i = 0; i < meses; i++) {
            console.log(montoFinal += montoIva)
        }
    } else {
        alert("no selecciono un banco valido")
    }
}
bancos(selecBank)
*/



//----------------------ANOTACIONES------------------------------
//---------------apuntes operadores-------------------------------
//alt96 === ``

//recorredor de array
/*
const eleccionesPosibles = (array, fn) => {
    for (const elecciones of array) {
        fn(elecciones)
    }
}
tNormal.forEach(console.log )

*/
//buscador de array find
/*
const encontrarPokemon = tNormal.find((Pokemon)=>{
    return Pokemon.id === 52
}
    
    ) 
    console.log ("aplicando el find con "+encontrarPokemon)
*/
//------------------------------------------------------------
//-------------------------------HTMLModifie--------------------
/*let titulo3= document.getElementById("titulo-3")
titulo3.innerText = "DE FANS PARA FANS"
 console.log(titulo3.innerText)
 titulo3.innerText = "en proceso"
console.log(titulo3.innerText)

 let container = document.getElementById ("container")
 container.innerHTML = "<h2>buenas</h2><p>hola</p>"
 container.className = "container"*/

        //let print = document.createElement("p")
        //print.innerHTML = "<h1>felicidades</h1>"
        //document.body.append(print)
        

//-----------------------------puroJS-----------------------------------------------

let pokedex = []
let elegir
const nombreElecciones = []
class Pokemon {

    constructor(nombre, especie, imagen, tipo, id) {
        this.nombre = nombre
        this.especie = especie
        this.imagen = imagen
        this.tipo = tipo
        this.id = id

    }
}
const pokemones = [

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


/*
function creacionCartaPokemon() {
    let pokeCard = document.getElementById("pokeCards")
    pokemones.forEach((e) => {
        let cartaCreada = `
        
    <div class="card bg-dark  text-white">
  <img src="${e.img}" class="card-img" alt="pokemon seleccionado">
  <div class="card-img-overlay">
    <h5 class="card-title">${e.nombre}</h5>
    <p class="card-text">${e.especie}</p>
    <p class="card-text">${e.tipo}</p>
  </div>
</div>
`
pokeCards.innerHTML += cartaCreada
    });
}

*/
//console.log(pokedex)
//console.log(creacionCartaPokemon)
//let plantilla = ` NOMBRE: ${pokedex.nombre} - especie ${pokedex.especie} - tipo ${pokedex.tipo}`

function elegido() {
    if (elegir == 1) {
       
        
        console.log(" felicidades " + entrenador.nombre + " " + " tu compañero pokemon es " + nombreElecciones[0])
        console.log("SU POKEDEX SE RELLENO CON EL SIGUIENTE POKEMON")
        console.log(pokedex[0])
        let plantilla = `
        NOMBRE: ${Pokemon.nombre} - especie ${Pokemon.especie} - tipo ${Pokemon.tipo}
        `
        console.log(plantilla)
    } else if (elegir == 2) {
        console.log(" felicidades " + entrenador.nombre + " " + " tu compañero pokemon es " + nombreElecciones[1])
        console.log("SU POKEDEX SE RELLENO CON EL SIGUIENTE POKEMON")
        console.log(pokedex[1])
    } else if (elegir == 3) {
        console.log(" felicidades " + entrenador.nombre + " " + " tu compañero pokemon es " + nombreElecciones[2])
        console.log("SU POKEDEX SE RELLENO CON EL SIGUIENTE POKEMON")
        console.log(pokedex[2])
    } else if (elegir == 4) {
        console.log(" felicidades " + entrenador.nombre + " " + " tu compañero pokemon es " + nombreElecciones[3])
        console.log("SU POKEDEX SE RELLENO CON EL SIGUIENTE POKEMON")
        console.log(pokedex[3])
    } else {
        alert("ingrese valores validos")
    }
}

const entrenador = {
    nombre: prompt("coloque su nombre"),
    edad: Number(prompt("coloque su edad")),
}

const desiciones = {
    clima: Number(prompt("elija el clima que mas le guste con numeros, 1=lluvioso, 2=soleado")),
    lugar: Number(prompt("elija el lugar que mas le guste con numeros, 1=lagos, 2=montañas")),
}

if (desiciones.clima === 1 && desiciones.lugar === 1) {
    //let pick = document.getElementById ("pokeCards")

    nombreElecciones.push(tAgua[0].nombre)
    nombreElecciones.push(tAgua[1].nombre)
    nombreElecciones.push(tAgua[2].nombre)
    nombreElecciones.push(tAgua[3].nombre)
    pokedex.push(tAgua[0])
    pokedex.push(tAgua[1])
    pokedex.push(tAgua[2])
    pokedex.push(tAgua[3])

    //document.body.append(pokedex.imagen)
    //pick.innerHTML = pokedex.imagen
    /*creacionCartaPokemon()*/
    elegir = Number(prompt("Felicidades tus posibles elecciones son " + nombreElecciones + " Elija con numeros " + " 1: " + nombreElecciones[0] + " 2: " + nombreElecciones[1] + " 3: " + nombreElecciones[2] + " 4: " + nombreElecciones[3]))
    elegido()

} else if (desiciones.clima === 2 && desiciones.lugar === 2) {

    nombreElecciones.push(tFuego[0].nombre)
    nombreElecciones.push(tFuego[1].nombre)
    nombreElecciones.push(tFuego[2].nombre)
    nombreElecciones.push(tFuego[3].nombre)
    pokedex.push(tFuego[0])
    pokedex.push(tFuego[1])
    pokedex.push(tFuego[2])
    pokedex.push(tFuego[3])
    elegir = Number(prompt("Felicidades tus posibles elecciones son " + nombreElecciones + " Elija con numeros " + " 1: " + nombreElecciones[0] + " 2: " + nombreElecciones[1] + " 3: " + nombreElecciones[2] + " 4: " + nombreElecciones[3]))
    elegido()

} else if (desiciones.clima === 2 && desiciones.lugar === 1) {

    nombreElecciones.push(tPlanta[0].nombre)
    nombreElecciones.push(tPlanta[1].nombre)
    nombreElecciones.push(tPlanta[2].nombre)
    nombreElecciones.push(tPlanta[3].nombre)
    pokedex.push(tPlanta[0])
    pokedex.push(tPlanta[1])
    pokedex.push(tPlanta[2])
    pokedex.push(tPlanta[3])
    elegir = Number(prompt("Felicidades tus posibles elecciones son " + nombreElecciones + " Elija con numeros " + " 1: " + nombreElecciones[0] + " 2: " + nombreElecciones[1] + " 3: " + nombreElecciones[2] + " 4: " + nombreElecciones[3]))
    elegido()

} else if (desiciones.clima === 1 && desiciones.lugar === 2) {

    nombreElecciones.push(tNormal[0].nombre)
    nombreElecciones.push(tNormal[1].nombre)
    nombreElecciones.push(tNormal[2].nombre)
    nombreElecciones.push(tNormal[3].nombre)
    pokedex.push(tNormal[0])
    pokedex.push(tNormal[1])
    pokedex.push(tNormal[2])
    pokedex.push(tNormal[3])
    elegir = Number(prompt("Felicidades tus posibles elecciones son " + nombreElecciones + " Elija con numeros " + " 1: " + nombreElecciones[0] + " 2: " + nombreElecciones[1] + " 3: " + nombreElecciones[2] + " 4: " + nombreElecciones[3]))
    elegido()
} else {
    alert("no dio valores validos")
}
