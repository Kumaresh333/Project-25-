class Dustbin
{
    constructor(x, y, width, height)
    {
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/dustbin.png");
        World.add(world, this.body);
       
      
      }

      display()
      {   
          var ro = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(ro);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          fill("yellow");
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
      }
}