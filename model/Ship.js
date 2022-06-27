import Missle from "./Missle.js";
import Sprite from "./Sprite.js";

class Ship extends Sprite {
    constructor(x, y, width, height, color, gameStart) {
        super(x, y, width, height, color, 0, 0);
        this.displacement = 5;
        this.numMissles = 10;
        this.missles = [];
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
        this.visible = true;
        this.gameStart = gameStart;
    }

    draw(ctx, pic) {
        if (this.visible) {
            super.draw(ctx, pic);
        }
    }

    keyDownHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.dx = this.displacement;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.dx = -this.displacement;
        } else if ((e.key === "Space" || e.key === " ") && (this.numMissles >= 1) && (this.gameStart)) {
            this.missles.push(new Missle(this.x + 24, this.y, 10, 20, "", 0, -4));
            let audio = new Audio("./assets/shoot.wav");
            audio.play();
            this.numMissles--;
        }
    }

    keyUpHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight" ||
            e.key === "Left" || e.key === "ArrowLeft") {
            this.dx = 0;
        }
    }

    move(canvasWidth) {
        super.move();
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
        }
    }
}

export default Ship;
