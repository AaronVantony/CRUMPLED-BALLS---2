const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperIMG;
var ground;
var dustbin;
function preload(){
	
}
function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (200,450,20);

	ground = new Ground(width/2,670,width,20);

	dustbin = new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  image = (paperIMG,200,200,500,500);
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



