class Rectangle {
    x;
    y;
    width;
    height;
    color;
    ctx;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = document.getElementById('canvas').getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }


    moveLeft() {
        this.x -= 15;
    }

    moveRight() {
        this.x += 15;
    }

    // xu ly va cham qua bong
    collideBall(ball) {
        // dieu kien va cham qua bong
        if (ball.y + ball.radius >= this.y
            && this.x <= ball.x && this.x + this.width >= ball.x) {
            ball.direction = 'top'
        }
    }
}