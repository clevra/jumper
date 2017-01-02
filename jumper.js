var slider;
var plats = new PlatformGenerator();
var gravity;
 
function setup() {
  createCanvas(300,600);
  background(153);
  plats.init(40, 5);
  gravity = createVector(0, 1);
  platformIndex = ceil(random(1,3));
  ball = new Ball(plats.platforms[platformIndex].x + plats.platforms[platformIndex].w /2,
				  plats.platforms[platformIndex].y);
  
}

function draw() {
    //console.log(plats.platforms[3]);
	background(153);	
	noFill();
	for(var i = height; i > 0; i-=height/plats.chunkSize){
		rect(0,i,width,height/plats.chunkSize)
	}
	
	if(ball.getPos().y < height/2){
		plats.scrollAll(abs(ball.getVel().y)/5);
	}
	//plats.scrollAll(1);
	plats.show();
	
	ball.applyForce(gravity);
	ball.update();
	ball.collide(plats.getObjects());	
	ball.checkEdge();
	ball.show();

}

function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    ball.move(-1.1);
  } else if (keyCode === RIGHT_ARROW) {
    ball.move(1.1);
  }
}
