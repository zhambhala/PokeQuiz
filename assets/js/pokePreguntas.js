

const pokeJSON = localStorage.getItem("pokemones")
const pokemones = JSON.parse(pokeJSON)

//console.log(pokemones)
//console.log(pokeJSON)
let entrenadorLs = localStorage.getItem("nombre")
//console.log(entrenadorLs)

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
let appBg
window.onload = function () {
  appBg = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1002ab 
    
  }
  );


  document.body.appendChild(appBg.view)
}

function mou() {
  if (appBg == onclick) {
    backgroundColor = 0x1392bb
  }
  return mou
}
mou()
const app = new PIXI.Application({ backgroundColor: 0x1392bb });
document.body.appendChild(app.view);
const style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
  lineJoin: 'round',
});

const richText = new PIXI.Text('Buenas Patri, estoy practicando con pixi js, para poder tener un diseño mas llamativo ', style);
richText.x = 50;
richText.y = 220;
app.stage.addChild(richText);

document.body.appendChild(app.view)