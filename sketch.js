var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottombox,sidebox1,sidebox2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomboxSprite = createSprite(400,650,200,20);
	bottomboxSprite.shapeColor = color("red");

	sidebox1Sprite = createSprite(290,610,20,100);
    sidebox1Sprite.shapeColor = color("red");

	sidebox2Sprite = createSprite(490,610,20,100);
	sidebox2Sprite.shapeColor = color("red"); 
	  
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
    bottombox = Bodies.rectangle(200,20,10,10,{isStatic:true});
	sidebox1 = Bodies.rectangle(20,100,10,10,{isStatic:true});
	sidebox2 = Bodies.rectangle(20,100,10,10,{isStatic:true});
	World.add(world, bottombox, sidebox1, sidebox2);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
}



