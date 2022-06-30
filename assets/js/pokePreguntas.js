const pokeJSON = localStorage.getItem("pokemones")
const pokemoness = JSON.parse(pokeJSON)

console.log(pokemoness)
console.log(pokeJSON)

document.querySelector('#pokeCard').innerHTML = `
                                            <h4>${pokemones.nombre}</h4>
                                            <h6>Precio: ${pokemones.id}</h6>
`