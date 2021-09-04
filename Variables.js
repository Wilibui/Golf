//Ball
let bx;
let by;
let br;
let prevX;
let prevY;
//Hole
let hx;
let hy;
let hr;
//Aim
let ax;
let ay;
let ar;
//Mousepressed
let px;
let py;
//Mousereleased
let rx;
let ry;
//Velocity
let dx;
let dy;
//Acceleration
let ddx;
let ddy;

let s;
let l = 0;
let strokes;
let friction;
let won;
let aiming;
let alpha;
let par;
let score = 0;

function setupVariables(){
  s = height/11;
  bx = 0*s;
  by = 3*s;
  br = height/60;
  dx = 0;
  dy = 0;
  ddx = 0;
  ddy = 0;
  hx = 0;
  hy = -3*s;
  hr = br*2;
  ar = br/5;
  strokes = 0;
  friction = 1;
  won = false;
  aiming = false;
  //par = 1;
}
