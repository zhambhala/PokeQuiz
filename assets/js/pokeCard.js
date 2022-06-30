
function CrecionCartaPokemonAgua() {
    pokedex.forEach((e) => {
        let pokeCards = document.createElement('pokeCards')
        pokeCards.innerHTML = `
    <div class="m-1 justify-content-center">
    <div class="card bg-custom-agua trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${e.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title cBlack">${e.nombre}</h5>
            <p class="card-text cBlack">numero en pokedex ${e.id}</p>
            <p class="card-text cBlack">${e.especie}</p>
            <button class="btn btn-custom-btn" id="btnIrAgua" onClick="elegirPokemon(${e.id})">ELEGIR</button>
        </div>
    </div>
    </div>
`
        pokeSelection.append(pokeCards)

    })
}

function CrecionCartaPokemonFuego() {
    pokedex.forEach((e) => {
        let pokeCards = document.createElement('pokeCards')
        pokeCards.innerHTML = `
    <div class="m-1 justify-content-center">
    <div class="card bg-custom-fuego trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${e.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title cBlack">${e.nombre}</h5>
            <p class="card-text cBlack">numero en pokedex ${e.id}</p>
            <p class="card-text cBlack">${e.especie}</p>
            <button class="btn btn-custom-btn" id="btnIrFuego" onClick="elegirPokemon(${e.id})">ELEGIR</button>
        </div>
    </div>
    </div>
`
        pokeSelection.append(pokeCards)

    })
}


function CrecionCartaPokemonPlanta() {
    pokedex.forEach((e) => {
        let pokeCards = document.createElement('pokeCards')
        pokeCards.innerHTML = `
    <div class="m-1 justify-content-center">
    <div class="card bg-custom-planta trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${e.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title cBlack">${e.nombre}</h5>
            <p class="card-text cBlack">numero en pokedex ${e.id}</p>
            <p class="card-text cBlack">${e.especie}</p>
            <button class="btn btn-custom-btn" id="btnIrPlanta" onClick="elegirPokemon(${e.id})">ELEGIR</button>
        </div>
    </div>
    </div>
`
        pokeSelection.append(pokeCards)

    })
}



function CrecionCartaPokemonNormal() {
    pokedex.forEach((e) => {
        let pokeCards = document.createElement('pokeCards')
        pokeCards.innerHTML = `
    <div class="m-1 justify-content-center">
    <div class="card bg-custom-normal trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${e.imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title cBlack">${e.nombre}</h5>
            <p class="card-text cBlack">numero en pokedex ${e.id}</p>
            <p class="card-text cBlack">${e.especie}</p>
            <button class="btn btn-custom-btn" id="btnIrNormal" onClick="elegirPokemon(${e.id})">ELEGIR</button>
        </div>
    </div>
    </div>
`
        pokeSelection.append(pokeCards)

    })
}
