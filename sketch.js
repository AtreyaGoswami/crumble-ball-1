
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var  paper,dustbin,ground,world;

function setup() {
	createCanvas(1580, 700);
	
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbino=new dustbin(1200,650);
	papero=new paper(200,450,40);
	groundo=new ground(width/2,670,width,15);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
		
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	})

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin.display();
  paper.display();
  ground.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  	}
}
