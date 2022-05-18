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

    printInfo(ctx) { //prints the info that is shown at the top left of the screen
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Invaders shot down: " + this.score, 8, 20);
        ctx.fillText("Missiles remaining: " + this.ship.numMissles, 8, 40);
    }
}

export default Game;