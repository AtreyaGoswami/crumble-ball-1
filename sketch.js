
var ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball = createSprite(200,20);

 var ground = createSprite(600,470,1400,10);

 var box1 = createSprite(1000,450,200,10);
 
 var box2 = createSprite(900,430,10,90);

 var box2 = createSprite(1100,430,10,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




