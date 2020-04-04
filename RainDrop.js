class RainDrop
{
  constructor(x,y,width,height)
  {
    var options = 
    {
      isStatic : false  
    }  

    this.body = Bodies.rectangle(random(0,400),random(0,400),width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);
  }

  display()
  {
    var pos = this.body.position;
    fill("green");
    rectMode(CENTER);
    rect(random(0,400),random(0,400),this.width,this.height);
  }
}