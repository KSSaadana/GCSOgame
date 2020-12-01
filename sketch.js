var car, wall;
var weight,speed;

function setup() {
  createCanvas(1600,400);

 car = createSprite(200,200,30,30);
 wall = createSprite(1000,200,30,70);
 weight = random(400,1500)
speed = random(55,90)
car.velocity = 3;
car.velocity = speed;
}

function draw() {
  background("black");  
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocity=0;

  var deformation = 0.5 * weight * speed * speed/22500;
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
if(deformation<180 && deformation>100){
  car.shapeColor = color(230,230,0);
}
if(deformation<100){
  car.shapeColor = color(0,255,0);
}

}


  drawSprites();
}