

var ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 500);



	groundo=new ground(width/2,670,width,20);
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

  
}
 
var ball = createSprite(200,20);

 var ground = createSprite(600,470,1400,10);

 var box1 = createSprite(1000,450,100,10);
 
 var box2 = createSprite(950,400,10,120);

 var box3 = createSprite(1050,400,10,120);

 


	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
  groundo.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(papper.body,papper.body,{x:85,y:-85});
  
	}
}




