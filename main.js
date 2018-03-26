let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let cWidth = canvas.width;
let cHeight = canvas.height;

let snake1 = new Snake(cWidth / 2, cHeight / 2, '#00cc44');

function updateGame() {
    snake1.move();
}

function drawGame() {
    ctx.clearRect(0, 0, cWidth, cHeight);
    snake1.draw();
}

function keydown(event) {
    snake1.changeDirection(event.keyCode);
}

let game = new GameLoop(updateGame, drawGame, 10);
window.addEventListener("keydown", keydown, false);
