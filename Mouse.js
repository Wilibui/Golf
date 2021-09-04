function mousePressed() {
  if (!won && dx == 0 && dy == 0) {
    aiming = true;
    px = mouseX;
    py = mouseY;
  }
}

function mouseReleased() {
  if (!won && dx == 0 && dy == 0 && aiming) {
    aiming = false;
    rx = mouseX;
    ry = mouseY; 
    //0.05 at height = 967
    //let d = map(height, 773.6, 1160.4, 0.06, 0.04);
    dx = 0.05*(px - rx);
    dy = 0.05*(py - ry);  
    ddx = dx/150;
    ddy = dy/150;
    strokes++;
  }
}
