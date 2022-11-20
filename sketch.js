
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var radius=40
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=Bodies.rectangle(width/2,670,width,20,{isStatic:true})
World.add(world,ground)
console.log (ground)
ball=Bodies.circle(260,100,radius/2,{isStatic:false,restitution:0.3,friction:0,density:1.2})
World.add(world,ball)
leftside=Bodies.rectangle(1100,600,20,120,{isStatic:true})
World.add(world,leftside)
rightside=Bodies.rectangle(1350,600,20,120,{isStatic:true})
World.add(world,rightside)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("brown");
  ellipse(ball.position.x,ball.position.y,radius,radius)
  rect(ground.position.x,ground.position.y,width,20)
  rect(leftside.position.x,leftside.position.y,20,120)
  rect(rightside.position.x,rightside.position.y,20,120)
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


