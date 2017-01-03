var platformTypeEnum = {
	NORMAL  :0,
	BOOSTER : 1,
}

var plafformType = [0,0,0,0,1,0,0,0,0,0];

function Platform (x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.type = random(plafformType);
  this.update = function(){
  }
  
  this.show = function(){
	this.color = this.type == platformTypeEnum.NORMAL ? "#11aa00" : '#11eeff';
	fill(this.color);
	rect(this.x,this.y, w, h);
  }
  
}