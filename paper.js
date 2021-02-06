class Paper
{
    constructor(x, y, radius)
    {
        var options={
            
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;
        this.image = loadImage("images/paper.png");
        World.add(world, this.body);
        
       
      
      }

      display()
      {   
        var ro = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(ro);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.r, this.r);
        pop(); 
      }
}