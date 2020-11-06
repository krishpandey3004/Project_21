var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 70, 30);
  bullet.velocityX = speed;
  bullet.shapeColor = "White";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0)
  }
  }
  

  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  
}