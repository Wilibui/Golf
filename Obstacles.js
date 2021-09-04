let obstacles = [];

class obstacle {
  constructor(x, y, h, v) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.v = v;
  }

  show() {
    fill(153, 102, 51);
    noStroke();
    print(this.v);
    rect(this.x, this.y, this.h, this.v);
    stroke(0);
    strokeWeight(hr/3);
    noFill();
    rect(this.x, this.y, this.h - hr/3, this.v - hr/3);
  }

  collision() {
    if (this.x - this.h/2 <= bx && bx <= this.x + this.h/2) {
      if (this.y + this.v/2 <= by + br/2 && by - br/2 <= this.y + this.v/2) {
        dy = dy * (-1);
        ddy = ddy * (-1);
        by = this.y + this.v/2 + br/2;
      }
      if (this.y - this.v/2 <= by + br/2 && by - br/2 <= this.y - this.v/2) {
        dy = dy * (-1);
        ddy = ddy * (-1);
        by = this.y - this.v/2 - br/2;
      }
    }
    if (this.y - this.v/2 <= by && by <= this.y + this.v/2) {
      if (this.x + this.h/2 <= bx + br/2 && bx - br/2 <= this.x + this.h/2) {
        dx = dx * (-1);
        ddx = ddx * (-1);
        bx = this.x + this.h/2 + br/2;
      }
      if (this.x - this.h/2 <= bx + br/2 && bx - br/2 <= this.x - this.h/2) {
        dx = dx * (-1);
        ddx = ddx * (-1);
        bx = this.x - this.h/2 - br/2;
      }
    }
  }
}
