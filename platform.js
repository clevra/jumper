function Platform (x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.update = function(){
  }
  
  this.show = function(){
	  fill(45);
	  rect(this.x,this.y, w, h);
  }
  
}