function setup() {
  createCanvas(windowWidth, windowHeight);     
  setupLevel(l);
}


function draw() {
  background(175, 0, 0);
  translate(width/2, height/2);

  drawBackground();
  drawAim();
  drawBall();   
  checkCollisions();
  checkHole();
  moveBall();
}
