class Ball {
    x;
    y;
    radius;
    color;
    ctx;
    direction;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.direction = 'top';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        // xoa het man hinh canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // qua bong dap bien tren
        if (this.y - this.radius <= 0) {
            this.direction = 'down';

        } else if (this.y + this.radius >= this.canvas.height) { // qua bong dap  bien duoi
            this.direction = 'up';
        }

        // dieu huong chuyen dong
        switch (this.direction) {
            case 'down':
                this.moveBottom();
                break;
            default:
                this.moveTop();
        }
     }

    moveTop() {
        this.y -= 7;
    }

    moveBottom() {
        this.y += 5;
    }
}