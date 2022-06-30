class Sprite {
    constructor(x, y, width, height, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx, pic) {
        const img = new Image(this.width, this.height);
        img.src = pic;
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    intersects(other) {
        let tw = this.width;
        let th = this.height;
        let rw = other.width;
        let rh = other.height;
        if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0) {
            return false;
        }
        let tx = this.x;
        let ty = this.y;
        let rx = other.x;
        let ry = other.y;
        rw += rx;
        rh += ry;
        tw += tx;
        th += ty;
        // overflow || intersect
        return (
            (rw < rx || rw > tx) &&
            (rh < ry || rh > ty) &&
            (tw < tx || tw > rx) &&
            (th < ty || th > ry)
        );
    }

}

export default Sprite;
