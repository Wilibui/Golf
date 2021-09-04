

function setupLevel(level) {
  setupVariables();
  obstacles = [];
  
  if(level == 0){
    par = 1;
  }else if(level == 1){
    par = 1;
    
    obstacles[0] = new obstacle(0, 0, 3*s, s);
  }else if(level == 2){
    par = 2;
    
    obstacles[0] = new obstacle(0, 1*s, 3*s, s);
    obstacles[1] = new obstacle(0, -1*s, 3*s, s);
  }else if(level == 3){
    par = 3;
    
    obstacles[0] = new obstacle(0, 0, 3*s, s);
    obstacles[1] = new obstacle(-1*s, -2*s, s, 3*s);
    obstacles[2] = new obstacle(1*s, -2*s, s, 3*s);
  }else if(level == 4){
    par = 4;
    
    obstacles[0] = new obstacle(0, 0, 3*s, s);
    obstacles[1] = new obstacle(-1*s, -2*s, s, 3*s);
    obstacles[2] = new obstacle(1*s, -2*s, s, 3*s);
    obstacles[3] = new obstacle(-1*s, 2*s, s, 3*s);
    obstacles[4] = new obstacle(1*s, 2*s, s, 3*s);
  }
  setupVariables();
}
