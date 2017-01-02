function Platform (x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = floor(random(0,255));
  this.update = function(){
  }
  
  this.show = function(){
	  fill(this.color);
	  rect(this.x,this.y, w, h);
  }
  
}