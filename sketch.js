const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;

var engine,world;
//var snake;
var raindrop;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  raindrop = new RainDrop(200,200,1,50);
  raindrop2 = new RainDrop(200,200,1,100); 
  raindrop3 = new RainDrop(200,200,1,200); 
  raindrop4 = new RainDrop(200,200,1,100);
  
}

function draw()
{
  background("yellow");
  raindrop.display();
  raindrop2.display();
  raindrop3.display();
  raindrop4.display();
}

