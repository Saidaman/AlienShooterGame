import Sprite from "./Sprite.js";

class Missle extends Sprite {
    constructor(x, y, width, height, color, dx, dy) {
        super(x, y, width, height, color, dx, dy);
        this.visible = true;
    }

    draw(ctx, pic) {
        if (this.visible) {
            const img = new Image(this.width, this.height);
            img.src = pic;
            ctx.drawImage(img, this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
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


    reachedEnd() {
        if (this.y < 0) {
            return true;
        }
        return false;
    }

}

export default Missle;