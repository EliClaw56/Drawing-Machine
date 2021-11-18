let randomIndex;
let animating = false
let layout = [];
let images;
let button;
let timerValue = 10;
let startButton;
let x = 0;
let song;
let myFont;

function preload() {
  for (let i = 0; i <= 0; i++) {
    layout[i] = loadImage('Layouts/layout_' + i + '.png');
  }
  soundFormats('mp3', 'ogg');
  song = loadSound("03-DigDug_Walking.mp3");
}
// }
//   myFont= loadFont('chalkduster/chalkduster.ttf');


function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  console.log(layout);
  imageMode(CENTER);
  background(209, 162, 98);
  textSize(20);
  setInterval(timeIt, 1000);
  // button = select('#genButton')
  // button.class("randomizerButton");
  // button.doubleClicked(timeIt);

  push();
  song.loop();
  pop();


}

function draw() {
  if (mouseIsPressed) {
    push();
    noStroke();
    erase(255);
    circle(mouseX, mouseY, 50);
    noErase();
    pop();
  }

  stroke(255);
  rect(width / 20, 40, 67, 30, 20);
  push();
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 20 + 15, 62);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 20 + 15, 62);
  }
  if (timerValue == 0) {
    noStroke();
    textSize(50);
    // textFont(myFont);
    text('GAME OVER', width / 3 + 30, height / 2 + 15);
    noLoop();
    pop();
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('Untitled', 'jpg');
  }
  return false;
}
