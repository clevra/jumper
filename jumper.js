var slider;
var plats = new PlatformGenerator();
var gravity;
 
function setup() {
  createCanvas(300,600);
  background(0);
  plats.init(40, 5);
  gravity = createVector(0, 0.3);
  platformIndex = ceil(random(3,5));
  ball = new Ball(plats.platforms[platformIndex].x + plats.platforms[platformIndex].w /2,
				  plats.platforms[platformIndex].y);
  
}

function draw() {
    //console.log(plats.platforms[3]);

	background(153);	
	noFill();
	for(var i = height; i > 0; i-=height/plats.chunkSize){
		//rect(0,i,width,height/plats.chunkSize)
	}
	
	if(ball.getPos().y < (height - height/4)){
		plats.scrollAll(abs(ball.getVel().y/1.5));
	}
	
	//plats.scrollAll(1);
	plats.show();
	fill('#1111fe');
	textSize(32);
	text("Score: " + plats.getGenerated(), 10, 30);
	ball.applyForce(gravity);
	ball.update();
	ball.collide(plats.getObjects());	
	ball.checkEdge();
	ball.show();
	
	
	if (keyIsDown(LEFT_ARROW)){
		ball.move(-1.3);
	}
	if (keyIsDown(RIGHT_ARROW)){
		ball.move(1.3);
	}


}

function keyReleased() {
  ball.dampX();
  return false; // prevent any default behavior
}

/*function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    ball.move(-1.3);
  } else if (keyCode === RIGHT_ARROW) {
    ball.move(1.3);
  }
}
*/