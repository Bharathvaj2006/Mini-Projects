const gameCanvas = document.getElementById('gameCanvas');
const context = gameCanvas.getContext('2d');
const WIDTH = gameCanvas.width, HEIGHT = gameCanvas.height;
const UNIT = 25, LEFT = 37, RIGHT = 39, TOP = 38, BOT = 40, move = UNIT;
const scrElm = document.getElementById("scrval");
let foodX, foodY;
const snake = [
    { x: move * 3, y: 0 },
    { x: move * 2, y: 0 },
    { x: move * 1, y: 0 },
    { x: 0, y: 0 }
];
let xvel = move, yvel = 0, score = 0;
let over = false, started = false;



startGame();
window.addEventListener('keydown', keyPress);

function startGame() {
    clearBoard();
    displaySnake();
    createFood();
    displayFood();
    context.font = "bold 50px serif";
    context.fillStyle = "white";
    context.fontAlign = "center";
    context.fillText("Press Enter key to", WIDTH / 8, HEIGHT / 2);
    context.fillText("play game", WIDTH / 4, HEIGHT / 2 + UNIT * 2);
}

function clearBoard() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, WIDTH, HEIGHT);
}

function createFood() {
    foodX = Math.floor(Math.random() * WIDTH / UNIT) * UNIT;
    foodY = Math.floor(Math.random() * WIDTH / UNIT) * UNIT;
}

function displaySnake() {
    context.fillStyle = "aqua";
    context.strokeStyle = "black";
    snake.forEach(sp => {
        context.fillRect(sp.x, sp.y, UNIT, UNIT);
        context.strokeRect(sp.x, sp.y, UNIT, UNIT);
    });
}

function displayFood() {
    context.fillStyle = 'green';
    context.fillRect(foodX, foodY, UNIT, UNIT);
}

function moveSnake() {
    const head = {
        x: (snake[0].x + xvel),//%WIDTH
        y: (snake[0].y + yvel)//%HEIGHT
    };
    // if(head.x<0) head.x+=WIDTH;
    // if(head.y<0) head.y+=HEIGHT;
    snake.unshift(head);
    if (gameOver()) {
        over = true;
        return;
    }
    if (head.x == foodX && head.y == foodY) {
        score += 10
        scrElm.innerText = score;
        createFood();
        return;
    }
    snake.pop();
}

function nextTick() {
    if (!over) {
        setTimeout(() => {
            clearBoard();
            displayFood();
            moveSnake();
            displaySnake();
            nextTick();
        }, 100);
    }
    else {
        context.fillStyle = "red";
        context.fillRect(snake[1].x, snake[1].y, UNIT, UNIT);
        context.font = "bold 50px serif";
        context.fillStyle = "white";
        context.fontAlign = "center";
        context.fillText("Game Over!", WIDTH / 4, HEIGHT / 2);
    }
}

function keyPress(ent) {
    if (!started && ent.keyCode == 13) {
        started = true;
        nextTick();
        return;
    }
    if (started) {
        if (ent.keyCode == LEFT || ent.keyCode == 65) {
            if (xvel == move) return;
            xvel = -move; yvel = 0;
        }
        else if (ent.keyCode == RIGHT || ent.keyCode == 68) {
            if (xvel == -move) return;
            xvel = move; yvel = 0;
        }
        else if (ent.keyCode == TOP || ent.keyCode == 87) {
            if (yvel == move) return;
            xvel = 0; yvel = -move;
        }
        else if (ent.keyCode == BOT || ent.keyCode == 83) {
            if (yvel == -move) return;
            xvel = 0; yvel = move;
        }
    }
}

function gameOver() {
    return (snake[0].x < 0 || snake[0].x >= WIDTH || snake[0].y < 0 || snake[0].y >= HEIGHT);
}


