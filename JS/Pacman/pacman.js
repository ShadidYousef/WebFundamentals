var blockType = {
  empty: 0,
  coin: 1,
  brick: 2,
  cherry: 3,
};
var world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2],
  [2, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
  [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
var pacmanElement = document.getElementById("pacman");
var scoreElement = document.getElementById("score");
var worldElement = document.getElementById("world");

var pacman = {
  x: 1,
  y: 1,
};
var score = 0;

function displayWorld() {
  var output = "";
  for (var i = 0; i < world.length; i++) {
    output += "\n<div class='row'>\n";
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] == blockType.brick) output += "<div class='brick'></div>";
      else if (world[i][j] == blockType.coin)
        output += "<div class='coin'></div>";
      else if (world[i][j] == blockType.empty)
        output += "<div class='empty'></div>";
      else if (world[i][j] == blockType.cherry)
        output += "<div class='cherry'></div>";
    }
    output += "\n</div>";
  }
  console.log(output);
  worldElement.innerHTML = output;
}
function displayPacman() {
  pacmanElement.style.top = pacman.y * 24 + "px";
  pacmanElement.style.left = pacman.x * 20 + "px";
}
function displayScore() {
  scoreElement.innerHTML = score;
}
displayPacman();
displayWorld();
document.onkeydown = function (e) {
  if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != blockType.brick) {
    pacmanElement.style.transform = "rotate(-180deg)";
    pacman.x--;
  } else if (
    e.keyCode == 39 &&
    world[pacman.y][pacman.x + 1] != blockType.brick
  ) {
    pacmanElement.style.transform = "rotate(0deg)";
    pacman.x++;
  } else if (
    e.keyCode == 38 &&
    world[pacman.y - 1][pacman.x] != blockType.brick
  ) {
    pacmanElement.style.transform = "rotate(-90deg)";
    pacman.y--;
  } else if (
    e.keyCode == 40 &&
    world[pacman.y + 1][pacman.x] != blockType.brick
  ) {
    pacmanElement.style.transform = "rotate(90deg)";
    pacman.y++;
  }

  if (world[pacman.y][pacman.x] == blockType.coin) {
    world[pacman.y][pacman.x] = blockType.empty;
    score += 10;
    displayWorld();
    displayScore();
  }
  if (world[pacman.y][pacman.x] == blockType.cherry) {
    world[pacman.y][pacman.x] = blockType.empty;
    score += 50;
    displayWorld();
    displayScore();
  }
  // console.log(e);
  displayPacman();
};
