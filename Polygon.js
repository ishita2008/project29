class Polygon {
    constructor(x,y,r){

        var options = {
            isStatic:false,
            density:10,
            friction: 0.5,
            restitution:0.3
          };



          this.body=Bodies.circle(x,y,r/2,options)
          this.r=r;
          this.r=r;
          this.image=loadImage("polygon.png")
          World.add(world, this.body);

      
      
        }
        display(){
        var pos=this.body.position
       
           
      
        fill("pink")
        push();
        translate(pos.x,pos.y)


        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        



     
        
        
    
        }
       
    }