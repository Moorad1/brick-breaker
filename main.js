var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext('2d');
var player = new Player();
var ball = new Ball(player);
var left = false;
var right = false;
main();

function main() {
    window.requestAnimationFrame(main);
    movement();
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    player.show();
    ctx.beginPath();
    ball.show();
    ctx.fill();

}

document.onkeydown = (e) => {
    var key = e.keyCode;
    console.log(key);
    if (key === 37) {
        left = true;
    } else if (key === 39) {
        right = true;
    }
};

function movement() {
    if (left) {
        player.x -= player.spd;
    } else if (right) {
        player.x += player.spd;
    }
}

document.onkeyup = (e) => {
    var key = e.keyCode;
    if (key === 37) {
        left = false;
    } else if (key === 39) {
        right = false;
    }
};