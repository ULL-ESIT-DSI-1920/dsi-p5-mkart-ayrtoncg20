import players from "../assets/kart-*.png"
import { KartPlayer } from "./KartPlayer.js";

const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");
const road = document.querySelector(".road");
const karts = [];
let timer = null;

for (const [name, image] of Object.entries(players)) {
    const config = {
        image,
        y: karts.length * 64
    };
    const kart = new KartPlayer(name, config);
    kart.addToRoad(road);
    karts.push(kart);
}

const startRace = () => {
    timer = setInterval(() => startIterarion(), 1000 / 60);
    startButton.disabled = true;
    restartButton.disabled = true;
};


const endRace = () => {
    clearInterval(timer);
    karts.forEach(kart => (kart.isWinner() ? kart.win() : kart.lose()));
    restartButton.disabled = false;
};

const restartRace = () => {
    karts.forEach(kart => kart.restart());
    startButton.disabled = false;
};

const startIterarion = () => {

    karts.forEach(kart => kart.inc());
    if (karts.some(kart => kart.isWinner())) endRace();
};

startButton.onclick = () => startRace();
restartButton.onclick = () => restartRace();