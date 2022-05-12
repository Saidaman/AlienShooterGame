import Sprite from "./Sprite.js";

class Shooter extends Sprite {
    constructor(x, y, width, height, color, dx, dy) {
        super(x, y, width, height, color, 0, dy);
        this.visible = true;
    }

    draw(ctx, pic) {
        if (this.visible) {
            super.draw(ctx, pic);
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

    //missle is the object that will potentially be in contact with the invader
    isDestroyed(missle) {
        //will return true if the invader is supposed to be destroyed by the missle
        if (this.intersects(missle)) {
            let audio = new Audio("./assets/explosion.wav");
            audio.play();
            return true;
        }
        return false;
    }

    reachedBottom(canvasHeight) {
        //check to see if a missle has reached the bottom of the screen
        if (this.y < 0 || this.y + this.height > canvasHeight) {
            return true;
        }
        return false;
    }
}

export default Shooter;
