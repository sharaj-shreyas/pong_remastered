// sharajshreyas
// 31-7-2020

var shreyas = Math.floor(Math.random() * 300) + 50;
var sshreyas = 50;
var sharaj = (4, 6);
var ssharaj = (-6, -4);
var shascore = 0

function setup() {
  createCanvas(400,400);
}

function draw() {

  background(0);

  fill('#FF0000');
  rect(mouseX, 375, 90, 15);

  move();
  display();
  bounce();
  //resetBall();
  paddle();

  fill('#C008F7');
  textSize(24);
  text("Score: " + shascore, 10, 25);
  
 fill('#FFAE00');
  textSize(15);
  text("Created By Sharaj Shreyas © ", 150, 25);
}
// Ball Functions
function move() {
  shreyas += sharaj;
  sshreyas += ssharaj;
}


function bounce() {

  if (shreyas < 10 ||
    shreyas > 400 - 10) {
    sharaj *= -1;
  }
  if (sshreyas < 10 ||
     sshreyas > 400 - 10) {
    ssharaj *= -1;
  }
}


// Reset Ball
//function resetBall() {
//  if (yBall >= 400 ||
//    yBall > 400 - 10) {
//    ySpeed = 4;
// }

//}

function display() {
  fill('#5DFB03');
  ellipse(shreyas, sshreyas, 20, 20);
}

// Bounce off Paddle
function paddle() {
  if ((shreyas > mouseX &&
      shreyas < mouseX + 90) &&
    (sshreyas + 10 >= 375)) {
    sharaj *= -1;
    ssharaj *= -1;
    shascore++;

  }
}