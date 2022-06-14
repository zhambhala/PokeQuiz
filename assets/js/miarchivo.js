

/*apuntes operadores*//*
alt96 === ``



*/
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




/*const pokemonUsuario = {
    nombre:,
    especie:,
    tipo:,
    genero:,
}*/


class Pokemon {

    constructor(nombre, especie, tipo, id) {
        this.nombre = nombre
        this.especie = especie
        this.tipo = tipo
        this.id = id
    }
}

const tFuego = [

    new Pokemon("Charmander", "Charmander", "fuego", 4),
    new Pokemon("Cyndaquil", "Cyndaquil	", "fuego", 155),
    new Pokemon("Fennekin", "Fennekin", "fuego", 653),
    new Pokemon("Litten", "Litten", "fuego", 725)
]

const tAgua = [
    new Pokemon("Squirtle", "Squirtle", "agua", 7),
    new Pokemon("Wartortle", "Wartortle", "agua", 8),
    new Pokemon("Blastoise", "Blastoise", "agua", 9),
    new Pokemon("Psyduck", "Psyduck", "agua", 54)
]
const tPlanta = [
    new Pokemon("Bulbasaur", "Bulbasaur", "planta", 1),
    new Pokemon("vysaur", "vysaur", "planta", 2),
    new Pokemon("Venusaur", "Venusaur", "planta", 3),
    new Pokemon("Oddish", "Oddish", "planta", 43)
]



const entrenador = {
    nombre: prompt("coloque su nombre"),
    edad: Number(prompt("coloque su edad")),

}

const desiciones = {
    clima: Number(prompt("elija el clima que mas le guste con numeros, 1=lluvioso, 2=soleado")),
    lugar: Number(prompt("elija el lugar que mas le guste con numeros, 1=lagos, 2=montañas")),
}

console.log(entrenador.nombre +" "+ " tus posibles elecciones" )

if (desiciones.clima === 1, desiciones.lugar === 1) {

    for (let i = 0; i < tAgua.length; i++) {
        console.log(tAgua[i].nombre)
    }

} else if (desiciones.clima === 2, desiciones.lugar === 2) {

    for (let i = 0; i < tFuego.length; i++) {
        console.log(tFuego[i].nombre)
    }

} else if (desiciones.clima === 2, desiciones.lugar === 1) {

    for (let i = 0; i < tPlanta.length; i++) {
        console.log(tPlanta[i].nombre)
    }

}else if (desiciones.clima === 1, desiciones.lugar === 2) {

    for (let i = 0; i < tPlanta.length; i++) {
        console.log(tPlanta[i].nombre)
    }
    
}else{
 alert("no dio valores validos")
}

