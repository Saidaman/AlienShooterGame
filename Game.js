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

    collision(invader, missle, i, j) { //makes the sounds of an explosion and makes both the invader and missle disappear
        this.invadersInPlay.splice(i, 1);
        this.ship.missles.splice(j, 1);
        this.ship.numMissles += 1;
        invader.visible = false;
        missle.visible = false;
        this.score += 1;
        let explosion = new Audio("./assets/explosion.wav");
        explosion.play();
    }

    play(ctx) {
        //clear the gray rectangle
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //print the score information
        this.printInfo(ctx);

        //draw the ship and allow it to move
        this.ship.draw(ctx, "/assets/tank.png");
        this.ship.move(this.canvas.width);

        //check if key movement occured
        if (!this.gameStart && this.ship.dx != 0) {
            this.gameStart = true;
            this.ship.gameStart = true;
            this.audio.play();
        }

        
    }
}

export default Game;