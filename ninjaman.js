var world = [];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}
var ninjaman = {
    x: 1,
    y: 1
}
const size = 10;

function generateWorld() {
    for (let row = 0; row < size; row++) {
        world.push([]);
        for (let col = 0; col < size; col++) {
            if (col == 0 || row == 0 || col == size - 1 || row == size - 1) {
                world[row][col] = 1;
                // console.log(world[row][col]);
            } else {
                world[row][col] = Math.floor(Math.random() * 4);
                // console.log(world[row][col]);
            }
        }
    }
}

function drawWorld() {
    let out = "";
    let worldHTML = document.getElementById('world');

    for (let row = 0; row < size; row++) {
        out += "<div class = 'row'>";
        for (let col = 0; col < size; col++) {
            out += "<div class = '" + worldDict[world[row][col]] + "'></div>";
            // console.log(worldDict[world[row][col]]);
        }
        out += "</div>";
    }
    console.log(out);
    worldHTML.innerHTML = out;
}

function drawNinjaman() {
    document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px'
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px'
}

document.onkeydown = function(e) {
    if (e.keyCode == 65) { // LEFT
        if (world[ninjaman.y][ninjaman.x - 1] != 1) {
            ninjaman.x--;
        }
    } else if (e.keyCode == 68) { // RIGHT
        if (world[ninjaman.y][ninjaman.x + 1] != 1) {
            ninjaman.x++;
        }
    } else if (e.keyCode == 83) { // DOWN
        if (world[ninjaman.y + 1][ninjaman.x] != 1) {
            ninjaman.y++;
        }
    } else if (e.keyCode == 87) { // UP
        if (world[ninjaman.y - 1][ninjaman.x] != 1) {
            ninjaman.y--;
        }
    }
    world[ninjaman.y][ninjaman.x] = 0;
    drawNinjaman();
    drawWorld();
}

generateWorld();
drawWorld();
drawNinjaman();