class Parentclass{
    constructor(x,y,w,h,a){
    var option ={'restution':0.8, 'density':1.0, 'friction':1.0  }
        this.body=Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;
        this.image=loadImage("sprites/base.png");
        World.add(world, this.body);
    }
    display(){
        var position=this.body.position;
        push();
        translate(position.x,position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    
}