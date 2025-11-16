const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const grid = 20;
let score = 0;
let snake = [{x: 1, y: 10}];
let goX = 0; goY = 0;

let food = {
    x:Math.floor(Math.random() * grid),
    y:Math.floor(Math.random() * grid)
}

document.addEventListener('keydown', (ev) => {
    if (ev.key === "ArrowLeft") {
        goX = -1;
        goY = 0;
    }
    if (ev.key === "ArrowRight") {
        goX = 1;
        goY = 0;
    }
    if (ev.key === "ArrowUp") {
        goX = 0;
        goY = -1;
    }
    if (ev.key === "ArrowDown") {
        goX = 0;
        goY = 1;
    }
})

function gameLoop() {
    const head = {
        x: (snake[0].x + goX + grid) % grid,
        y: (snake[0].y + goY + grid) % grid
    }

    if (snake.some(part => part.x === head.x && part.y === head.y)){ // check if snake hits itself
        snake = [head];
        score = 0;
    } else {
        snake.unshift(head); // add new head to the snake (because the snake moves)
        if (head.x === food.x && head.y === food.y) {
            score++;
            food = {
                x: Math.floor(Math.random() * grid),
                y: Math.floor(Math.random() * grid)
            };
        } else {
            snake.pop(); // remove the tail, because the snake didn't eat food
        }
    }

    document.getElementById("score").textContent = score;
    draw();
}

setInterval(gameLoop, 300); // game loop runs every 300 milliseconds

function draw() {
    ctx.fillStyle = "navy";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    for(const part of snake) {
        ctx.fillRect(part.x * grid, part.y * grid, grid-2, grid-2);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * grid, food.y * grid, grid-2, grid-2);
}