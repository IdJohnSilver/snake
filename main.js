let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let cWidth;
let cHeight;
let snake;
let apple;
let game;
let gameSize = [20, 15];
let blockSize = 20;
let score = 0;

function setGameSize() {
    cWidth = canvas.width;
    cHeight = canvas.height;
    if (Math.floor(cWidth / gameSize[0]) > Math.floor(cHeight / gameSize[1])) {
        blockSize = Math.floor(cHeight / gameSize[1]);
    } else {
        blockSize = Math.floor(cWidth / gameSize[0]);
    }
}

function drawBorder() {
    for (let x = 0; x <= gameSize[0]; x++) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x * blockSize, 0, blockSize, blockSize);
        ctx.fillRect(x * blockSize, (gameSize[1] - 1) * blockSize, blockSize, blockSize);
    }

    for (let y = 0; y <= gameSize[1]; y++) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, y * blockSize, blockSize, blockSize);
        ctx.fillRect((gameSize[0] - 1) * blockSize, y * blockSize, blockSize, blockSize);
    }
}

function clearMap() {
    ctx.clearRect(0, 0, cWidth, cHeight);
}

function checkForCrash() {
    if (snake.getHead().x <= 0 || snake.getHead().x >= gameSize[0] - 1 || snake.getHead().y <= 0 || snake.getHead().y >= gameSize[1] - 1) {
        return true;
    }

    let snakeTail = snake.getTail();
    let crash = false;
    snakeTail.map((element, index) => {
        if (index !== snakeTail.length - 1) {
            if (element.x === snake.getHead().x && element.y === snake.getHead().y) crash = true;
        };
    })
    return crash;
}

function updateGame() {
    snake.move();

    if (checkForCrash()) {
        game.playPause();
        alert(`Your score: ${score}!`);
        newGame();
        document.getElementById('message').innerText = 'Press "Space" to start new game!';
    }

    if (snake.getHead().x === apple.x && snake.getHead().y === apple.y) {
        snake.eat();
        apple.setPosition(snake.getTail());
        score++;
        if (score % 5 === 0) game.upSpeed();
    }
}

function drawGame() {
    clearMap();
    drawBorder();
    snake.draw();
    apple.draw();
}

function keydown(event) {
    if (event.keyCode === 32) {
        game.playPause();
        if(game.getState() === 'pause'){
            document.getElementById('message').innerText = 'Press "Space" to continue!';
        }else{
            document.getElementById('message').innerText = '';
        }
    } else {
        snake.changeDirection(event.keyCode);
    }
}

function newGame() {
    game = new GameLoop(updateGame, drawGame, 10);
    snake = new Snake({
        startX: 1,
        startY: 10,
        color: '#00cc44',
        size: blockSize
    });

    apple = new Apple(blockSize);
    apple.setPosition(snake.getTail());
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", keydown, false);
    document.addEventListener("resize", setGameSize);
    setGameSize();
    newGame();
});