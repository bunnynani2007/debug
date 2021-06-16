class Bird extends Parentclass{
    constructor(x,y,w,h){
       super(x,y,w,h);
       this.image=loadImage("sprites/bird.png")
       this.smoke1=loadImage("sprites/smoke.png")
       this.trajectory=[]
    }
    display(){
       super.display()
       if(this.body.velocity.x>10 && this.body.position.x>200){
          var smoke=[this.body.position.x, this.body.position.y]
          this.trajectory.push(smoke)
         
       }
       

       for(var i=0; i<this.trajectory.length; i++){

          image(this.smoke1,this.trajectory[i][0],this.trajectory[i][1]);
       }
    }
    }
    
    