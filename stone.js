/*class stone{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangos images/stone.png");
        World.add(world, this.body);
      }


      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
*/

class stone {
  constructor(x, y, r) {
  var options = {
      isStatic: false,
      restitution: 0,
      friction:1,
      density:0.8

   }
   this.image = loadImage("Plucking mangos images/stone.png");
   this.x=x;
   this.y=y;
   this.r=r;
   this.body = Bodies.circle(this.x, this.y, this.r/2, options);
   //this.width = 20;
   //this.height = 20;
        
   World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        fill("pink");
        //strokeWeight(4);
        //stroke("white");
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
   

}