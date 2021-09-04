function moveBall() {
  bx += dx;
  by += dy;
  if (dist(prevX, prevY, bx, by) < 0.5) {
    dx = 0;
    dy = 0;   
    ddx = 0;
    ddy = 0;
  }  
  dx -= ddx*friction;
  dy -= ddy*friction;
  prevX = bx;
  prevY = by;
  if (won) {
    br -= 0.1;
    dx = (hx-bx)/50;
    dy = (hy-by)/50;
    if (br <= 0) {
      l++;
      score = score + (strokes - par);
      setupLevel(l);
      
    }
  }
}

function checkCollisions() {
  if (bx < -2.5*s + 1.2*hr/3) {
    dx = dx * (-1);
    ddx = ddx * (-1);
    bx = -2.5*s + 1.2*hr/3;
  }
  if (bx > 2.5*s - 1.2*hr/3) {
    dx = dx * (-1);
    ddx = ddx * (-1);
    bx = 2.5*s - 1.2*hr/3;
  }
  if (by < -4.5*s + 1.2*hr/3) {
    dy = dy * (-1);
    ddy = ddy * (-1);
    by = -4.5*s + 1.2*hr/3;
  }
  if (by > 4.5*s - 1.2*hr/3) {
    dy = dy * (-1);
    ddy = ddy * (-1);
    by = 4.5*s - 1.2*hr/3;
  }
  
  for(let o of obstacles){
    o.collision();    
  }
}

function drawBall() {
  fill(255);
  stroke(0);
  strokeWeight(br/5);
  circle(bx, by, br);
}

function drawBackground() {
  rectMode(CENTER, CENTER);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 9; j++) {
      if ((i+j)% 2 == 0) {
        fill(0, 100, 0);
      } else {
        fill(0, 200, 0);
      }
      noStroke();
      square(-2*s + i*s, -4*s + j*s, s);
    }
  }
  fill(0);
  noStroke();
  circle(hx, hy, hr);
  stroke(0);
  strokeWeight(hr/3);
  line(-2.5*s, -4.5*s, -2.5*s, 4.5*s);
  line(2.5*s, -4.5*s, 2.5*s, 4.5*s);
  line(-2.5*s, -4.5*s, 2.5*s, -4.5*s);
  line(-2.5*s, 4.5*s, 2.5*s, 4.5*s);
  for(let o of obstacles){
    o.show();    
  }
  
  
  textSize(s/2);
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  text("Par: " + par,-2.5*s, -5*s);
  text("Level: " + l, -2.5*s, 5*s);
  textAlign(RIGHT, CENTER);
  text(strokes, 2.5*s, -5*s);
  text("Score: " + score, 2.5*s, 5*s);  
}

function drawAim() {
  if (aiming) {
    alpha = atan((py-mouseY) / (px-mouseX));
    if (px < mouseX) {
      alpha += PI;
    }
    stroke(0);
    strokeWeight(ar);
    let d = map(dist(px, py, mouseX, mouseY), 0, 500, 1, 100);  
    ax = d*cos(alpha)+bx;
    ay = d*sin(alpha)+by;   
    
    //let a1x = (0.9*d)*cos(alpha + PI/1)+bx;
    //let a1y = (0.9*d)*sin(alpha + PI/1)+bx;
    //let a2x = (0.9*d)*cos(alpha - PI/10)+bx;
    //let a2y = (0.9*d)*sin(alpha - PI/10)+bx;
    
    line(bx, by, ax, ay);
  }
}

function checkHole() {
  if (dist(bx, by, hx, hy) <= (hr)/2) {
    win();
  }
}

function win() {
  won = true;
}
