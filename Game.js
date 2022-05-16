import Shooter from "./model/Shooter.js";
import Ship from "./model/Ship.js";
import "./style.css";

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameStart = false;
        this.ship = new Ship(215, 540, 50, 50, "#00FFFF", this.gameStart);
        this.gameOverFlag = false;
        this.score = 0;
        this.audio = new Audio("./assets/music.mpeg");
        this.audio.pause();
        this.invadersInPlay = [];
    }
    
}

export default Game;