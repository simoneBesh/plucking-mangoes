
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stone1;
var boyImage, boy;
var treeImage, tree1, tree2;
var mango1, mango2, mango3;
var chain1;
var ground1;

function preload()
{
  boyImage=loadImage("Plucking mangos images/boy.png");
  treeImage=loadImage("Plucking mangos images/tree.png");
}


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//stone1.depth=boy.depth+1;
	
	stone1=new stone (200, 450, 25);
	chain1=new rope(stone1.body, {x:220, y:445});


	mango1=new mango(650, 250, 20);
	mango2=new mango(1000, 50, 20);
	mango3=new mango(1000, 300, 20);

	tree2=new tree(100, 400, 30, 60);

	ground1=new ground (750, 650, 1500, 20);


	Engine.run(engine);
  
	tree1=createSprite(900, 300, 50, 30);
	tree1.addImage(treeImage);
	tree1.scale=0.4;

	boy=createSprite(270, 500);
	boy.addImage(boyImage);
	boy.scale=0.1;
}


function draw() {
  rectMode(CENTER);
  background(400, 400, 400);
  drawSprites();
  
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  chain1.display();
  stone1.display();
  //console.log(mouseY);
  //console.log(mouseX);

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3)
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain1.fly();
}

function detectCollision(lstone, lmango){
	console.log("detection");
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed (){
 if(keyCode===32){
	 //Matter.Body.setPosition(stone1.body, {x: 200, y:450});
	 chain1.attach(stone1.body);
 }
}



