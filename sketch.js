var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	line1 = createSprite(width/2,height-50,200,20);
	line1.shapeColor = color("red");
	line2 = createSprite(510,610,20,100);
	line2.shapeColor = color("red");
	line3 = createSprite(310,610,20,100);
	line3.shapeColor = color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	packageBody1 = Bodies.circle(width/2 , 200 , 10 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody1);

    packageBody3 = Bodies.circle(width/2 , 200 , 15 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  package1Sprite.x= packageBody.position.x 
  package1Sprite.y= packageBody.position.y
  
  package2Sprite.x= packageBody.position.x 
  package2Sprite.y= packageBody.position.y 

  packageSprite.collide(line1);
  package1Sprite.collide(line1);
  package2Sprite.collide(line1);

  packageSprite.collide(line2);
  package1Sprite.collide(line2);
  package2Sprite.collide(line2);

  packageSprite.collide(line3);
  package1Sprite.collide(line3);
  package2Sprite.collide(line3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
	 
	}
 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody1,false);

}

if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody2,false);
                                     
}

}