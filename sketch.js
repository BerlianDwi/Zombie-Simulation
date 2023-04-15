let zombieApocalypse = [];
function setup() {
  createCanvas(600, 400);

  for (let i = 2; i < 30; i++) {
    zombieApocalypse.push(new Mover());
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < zombieApocalypse.length; i++) {
    zombieApocalypse[i].bergerak();
    zombieApocalypse[i].tampil();
    zombieApocalypse[i].batas();
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.1);
  
  }
  
  tampil(){
    stroke('green');
    fill('red');
    
    ellipse(this.location.x, this.location.y,15,15,100)
    
  }
  
  bergerak(){
    var mouse = createVector(mouseX, mouseY);
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 5;
    
    arahMouse.normalize();
    arahMouse.mult(0.2); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  ujung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  batas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}