
//name spacing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object,ball;
var box1,box2,ground1;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world = engine.world;
  //object_options ={
    //isStatic :true  
  //}

  //ball_options ={
    //restitution :1.1
  //}
  //object = Bodies.rectangle(200,380,400,50,object_options);
  //ball= Bodies.circle(200,200,15,ball_options);
  //World.add(world,object);
  //World.add(world,ball);
  //console.log(ball);

  box1 = new Box(200,300,50,50); 
  box2 = new Box(240,100,50,100);
  ground1=new Ground(200,height,400,20)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  //rectMode(CENTER) ;
 

 //rect(object.position.x,object.position.y,400,50);
 //ellipse(ball.position.x,ball.position.y,30,30);
 box1.display();
 box2.display();
 ground1.display();
}








