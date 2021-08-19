const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(480,120,40,40)
  blower = new Blower(350, 250, 150, 20)
  blowerMouth = new Blower(470,220,100,90)
  button = createButton("click to blow")
  button.position(400,300)
  button.size(100,50)
  button.mouseClicked(blow)
}

function draw() {
  background(220); 
  Engine.update(engine); 
  ball.show();
  blower.show();
  blowerMouth.show();
  //drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}