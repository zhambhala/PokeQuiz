

const pokeJSON = localStorage.getItem("pokemones")
const pokemones = JSON.parse(pokeJSON)

console.log(pokemones)
console.log(pokeJSON)
let entrenadorLs = localStorage.getItem("nombre")
console.log(entrenadorLs)

document.querySelector('#pokeCard').innerHTML = `
<div class="container"> 
<div class="m-1 justify-content-center"><h1>felicidades ${entrenadorLs} este es tu compañero pokemon</h1></div>
    <div class="m-1 justify-content-center">
    <div class="card bg-custom-agua trasfondoDeCarta text-dark" style="width: 14rem;">
        <img class="card-img-top" src="${pokemones[0].imagen}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title cBlack">${pokemones[0].nombre}</h5>
            <p class="card-text cBlack">numero en pokedex ${pokemones[0].id}</p>
            <p class="card-text cBlack">${pokemones[0].especie}</p>
            <button class="btn btn-custom-btn" id="btnIrAgua" onClick="elegirPokemon(${pokemones[0].id})">ELEGIR</button>
        </div>
    </div>
    </div> 
       </div>
`
Swal.fire({
    title: 'sepa disculpar patri, estoy pensando como organizar esta parte, la idea es que la card que aparece sea la elegida en el paso anterior',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })