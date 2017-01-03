var plats = new PlatformGenerator();
var gravity;
var gameStarted = false;
var gameOver = false;
var ball;

function setup() {
  createCanvas(300,600);
  background(0);
  noLoop();
}

function draw() {
    //console.log(plats.platforms[3]);

	background(153);	
	noFill();
		if(!gameStarted){
		fill("#333333");
		rect(0,0,width,height);
		fill("#11BB11");
		var message = "press ENTER to start";
		textAlign(CENTER);
		textSize(12);
		text(message, width/2, height/2);
		 plats.init(40, 5);
		gravity = createVector(0, 0.3);
		platformIndex = ceil(random(3,5));
		ball = new Ball(plats.platforms[platformIndex].x + plats.platforms[platformIndex].w /2,
						plats.platforms[platformIndex].y);
	}  
	else{
		if(ball.getPos().y < (height - height/4)){
			plats.scrollAll(abs(ball.getVel().y/1.5));
		}
		plats.show();
		fill('#1111fe');
		textSize(22);
		textAlign(LEFT);
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

		
	if(gameOver){
		fill("#553333");
		rect(0,0,width,height);
		fill("#11BB11");
		textAlign(CENTER);
		textSize(12);
		text("GAME OVER \n press ENTER to restart", width/2, height/2);
		noLoop();
	}

}

function keyReleased() {
  ball.dampX();
  return false; // prevent any default behavior
}

function keyPressed() {
	print("pressing something");
	if (keyCode === ENTER){
		if(!gameStarted) {
			gameStarted = true;
			loop();
		}
		else if(gameOver) {
			gameOver = false;
			gameStarted = false;
			loop();
		}
	}
}
