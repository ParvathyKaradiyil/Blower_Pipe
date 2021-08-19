class Ball{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }
    show(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    ellipse(0,0,this.w,this.h)
    pop();
    }
}