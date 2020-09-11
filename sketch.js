
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustBin;
var ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(200,650,20);
   ground =new Ground(width/2, 670, 1600, 10 );
	
	dustBinPiece1 = new DustBin(1200,650,200,20);
	dustBinPiece2 = new DustBin(1300,610,20,100);
	dustBinPiece3 = new DustBin(1100,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 

  dustBinPiece1.display();
  dustBinPiece2.display();
  dustBinPiece3.display();
  paper.display();
  ground.display();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
   }
}


