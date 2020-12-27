var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1400,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);
    if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    console.log(deformation);
    if(deformation > 180){
      car.shapeColor="red";
    }
    if(deformation < 180 && deformation > 180 ){
      car.shapeColor="yellow";
    }

    if(deformation < 100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}