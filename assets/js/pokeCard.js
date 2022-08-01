function CrecionCartaPokemonAgua() {
    pokedex.forEach((e) => {
        let pokeCards = document.createElement('pokeCards')
        pokeCards.innerHTML = `
    <div class="m-1 justify-content-center">
    <div class="card bg-custom-agua trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${e.imagen}" alt="Card image cap">
        <div class="card-body">
            <p class="card-title cBlack">nombre: ${e.nombre}</p>
            <p class="card-text cBlack">numero en pokedex: ${e.id}</p>
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
            <p class="card-title cBlack">nombre: ${e.nombre}</p>
            <p class="card-text cBlack">numero en pokedex: ${e.id}</p>
            
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
            <p class="card-title cBlack">$nombre: {e.nombre}</p>
            <p class="card-text cBlack">numero en pokedex: ${e.id}</p>
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
            <p class="card-title cBlack">nombre: ${e.nombre}</p>
            <p class="card-text cBlack">numero en pokedex: ${e.id}</p>
        </div>
    </div>
    </div>
`
        pokeSelection.append(pokeCards)

    })
}
