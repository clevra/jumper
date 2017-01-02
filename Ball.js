function Ball(x,y){
	this.r = 25;
	this.pos = createVector(x, y - this.r);
    this.vel = createVector(0,0);
    this.acc = createVector(0,-1);
   
	
	this.show = function(){
		ellipse(this.pos.x, this.pos.y, 20, this.r);
		
	}
	
	
	this.collide = function(object){
		for(var j = 0; j < object.length; j++){
			var i = object[j];
			var hit = collideRectCircle(i.x, i.y, i.w, i.h+5, this.pos.x, this.pos.y, this.r/2);
			if(hit && this.vel.y > 0){
				this.vel.y *= -1;	
				this.pos.y = i.y - i.h - this.r/2;
			}
		}		
	}
	
	
	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	
		
	this.wrapWdith = function() {
		
		
	}
	this.applyForce = function(force){
		this.acc.add(force); 
	}
	
	this.move = function(velx){
		//print(this.vel);
		if(abs(this.vel.x + velx) < 3) {
			this.vel.x += velx;
		}
/*		if(this.vel.x == 0){
			print("vel: " + this.vel.x);
			this.vel.x = 1
		}
		
		if(this.vel.x < 0 && velx > 0){
			velx *= -0.8;
		} 
		
	    if(abs(this.vel.x) * velx < 3) {
			this.vel.x *= velx;
		}
		
		print(this.vel.x, velx);		
		*/
	}
	
	this.checkEdge = function(){
		
		if (this.pos.x < 0){
			this.pos.x = width;
			print("passed left edge");
		}
		
		if (this.pos.x > width){
			this.pos.x = 0;
			print("passed right edge");

		}
	}
	
	this.getPos = function(){
		return this.pos;
	}
	
	this.getVel = function(){
		return this.vel;
	}
}