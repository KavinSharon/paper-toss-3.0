class Paper {
    constructor(x, y,radius) {
      var options = {
          
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      strokeWeight(3);
      stroke("black");
     ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }
  