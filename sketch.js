let randomIndex;
let animating = false
let layout = [];
let images;
function preload (){
  for(let i = 0; i <= 3; i++){
    layout[i] = loadImage('Layouts/layout_'+i+'.png');

  }
  for(let i = 0; i <= 3; i++){
    layout[i] = loadImage('Layouts/layout_'+i+'.jpg');
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  strokeWeight(8);
  console.log(layout);
  imageMode(CENTER);
  background(209, 162, 98);

  button = select('#genButton')
  button.position(560,200);
  button.class("randomizerButton");
}

function draw() {
  if (mouseIsPressed) {
    push();
    noStroke();
    erase(255);
    ellipse(mouseX,mouseY,20);
    noErase();
    pop();
  }
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('Untitled', 'jpg');
}
    return false;
  }
// function doubleClicked() {
//   if (animating == true){
//   setTimeout(randomizer,500);
//   }
// }
// function randomizer(){
//   animating = false
//  if(animating == true){
//    clear();
//    image(layout[i]);
 // }
// }
