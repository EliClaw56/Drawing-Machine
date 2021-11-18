let randomIndex;
let animating = false
let layout = [];
let images;
let button;

function preload (){
  for(let i = 0; i <= 3; i++){
    layout[i] = loadImage('Layouts/layout_'+i+'.png');
  }
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  strokeWeight(8);
  console.log(layout);
  imageMode(CENTER);
  background(209, 162, 98);

  button = select('#genButton')
  button.position(560,200);
  button.class("randomizerButton");
  button.doubleClicked(refresh);

}

function draw() {
  if (mouseIsPressed) {
    push();
    noStroke();
    erase(255);
    circle(mouseX,mouseY,50);
    noErase();
    pop();

  }
}
function refresh(){
  clear();
  background(209, 162, 98);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('Untitled', 'jpg');
}
    return false;
  }
