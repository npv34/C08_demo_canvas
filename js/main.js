let ball = new Ball(100, 300, 15, "red");
ball.draw();

let rectangle = new Rectangle(150, 480, 100, 10, "green");
rectangle.draw();


function play() {
    ball.move();
    ball.draw();
    rectangle.draw();
    rectangle.collideBall(ball);
    requestAnimationFrame(play)
}

play();

window.addEventListener('keyup', (evt) => {
    let key = evt.keyCode;
    switch (key) {
        case 37:
            rectangle.moveLeft();
            break;
        case 39:
            rectangle.moveRight();
            break;
    }
})


