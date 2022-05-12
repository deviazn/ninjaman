var world = [];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi'
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
                world[row][col] = Math.floor(Math.random() * 3);
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

generateWorld();
drawWorld();