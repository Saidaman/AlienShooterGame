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

    
}

export default Shooter;
