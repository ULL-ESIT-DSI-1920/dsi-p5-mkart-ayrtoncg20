import players from '../assets/kart-*.png' // importamos los kart como players
import { KartPlayer } from './KartPlayer.js' // importamos la clase Kartplayer

const startButton = document.querySelector('.start') // creamos una constante para guardar el boton start
const restartButton = document.querySelector('.restart') // Creamos una constante para guardar el boton restart
const road = document.querySelector('.road') // Creamos una constante para la carretera
const karts = [] // array para los kart
let timer = null

for (const [name, image] of Object.entries(players)) { // recorremos el objeto player que tiene el nombre del kart
  const config = {
    image,
    y: karts.length * 64 // posicion y de cada kart
  }
  const kart = new KartPlayer(name, config) // Creamos un nuevo kart con el nombre y un array de configuracion donde esta la imagen y la posicion y
  kart.addToRoad(road) // añadimos el kart a la carretera
  karts.push(kart) // Metemoe el kart en el array de kart
}

const startRace = () => { // Funcion para comenzar la carrera
  timer = setInterval(() => startIterarion(), 1000 / 60)
  startButton.disabled = true
  restartButton.disabled = true
}

const endRace = () => { // funcion para acabar la carrera
  clearInterval(timer)
  karts.forEach(kart => (kart.isWinner() ? kart.win() : kart.lose()))
  restartButton.disabled = false
}

const restartRace = () => { // funcion para restablecer la carrera
  karts.forEach(kart => kart.restart())
  startButton.disabled = false
}

const startIterarion = () => { // funcion para avanzar los kart en cada iteracion
  karts.forEach(kart => kart.inc())
  if (karts.some(kart => kart.isWinner())) endRace()
}

startButton.onclick = () => startRace() // si le damos click a start llamamos a la funcion que empieza la carrera
restartButton.onclick = () => restartRace() // si le damos click a restart llamamos a la funcion para restablecer la carrera.
