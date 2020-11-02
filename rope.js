class rope {
    constructor(bodyA, pointB) {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 25
        }
        //this.stiffness=stiffness;
        //this.length=length;
        //this.bodyA=bodyA;
        //this.bodyB=bodyB;
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        strokeWeight(4);
        //line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.position.x, this.rope.pointB.position.y);
    }
attach(body){
    this.rope.bodyA=body;
}

}

