function setup() {
  createCanvas(1600,800);
 // createSprite(400, 200, 50, 50);

  speed = random(55, 90)
  weight = random(400, 1500)

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  wall.shapeColor = color(80,80,80);
  car.shapeColor = color(600,80,80);

  car.velocityX = speed;

}

var car, wall;
var speed, weight

function draw() {
  background(255,255,255);  


  //console.log(speed);
  //console.log(weight);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    console.log(deformation);

    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
      car.collide(wall);

  }

  drawSprites();
}