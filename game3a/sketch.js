/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

//variables for character animation
var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;
}

function draw() {

	///////////DRAWING CODE//////////

	background(100, 155, 255); //fill the sky blue


	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if (isLeft && isFalling) {
		// add your jumping-left code

		//begin character drawing

		//body
		stroke(0);
		fill(153, 51, 47);
		triangle(gameChar_x - 13, gameChar_y - 7 - 10, gameChar_x + 13, gameChar_y - 7, gameChar_x - 8, gameChar_y - 64);

		//feet
		fill(71, 43, 12);
		ellipse(gameChar_x - 13, gameChar_y - 7 - 10, 20); //left
		ellipse(gameChar_x + 13, gameChar_y - 7, 20); //right

		//head
		fill(235, 152, 181);
		ellipse(gameChar_x - 8, gameChar_y - 52, 30);

		//mouth
		fill(0);
		ellipse(gameChar_x - 8, gameChar_y - 44, 5 - 4);

		//left eye
		line(gameChar_x - 8 - 10 + 6, gameChar_y - 52 - 6, gameChar_x - 8 - 7, gameChar_y - 55);
		line(gameChar_x - 8 - 4, gameChar_y - 52, gameChar_x - 8 - 7, gameChar_y - 55);

		//right eye
		line(gameChar_x - 8 + 10, gameChar_y - 52, gameChar_x - 8 + 7, gameChar_y - 55);
		line(gameChar_x - 8 + 4 + 6, gameChar_y - 52 - 6, gameChar_x - 8 + 7, gameChar_y - 55);

		//end character drawing

	}
	else if (isRight && isFalling) {
		// add your jumping-right code

		//begin character drawing

		//body
		stroke(0);
		fill(153, 51, 47);
		triangle(gameChar_x - 13, gameChar_y - 7, gameChar_x + 13, gameChar_y - 7 - 10, gameChar_x + 8, gameChar_y - 64);

		//feet
		fill(71, 43, 12);
		ellipse(gameChar_x - 13, gameChar_y - 7, 20); //left
		ellipse(gameChar_x + 13, gameChar_y - 7 - 10, 20); //right

		//head
		fill(235, 152, 181);
		ellipse(gameChar_x + 8, gameChar_y - 52, 30);

		//mouth
		fill(0);
		ellipse(gameChar_x + 8, gameChar_y - 44, 5 - 4);

		//left eye
		line(gameChar_x + 8 - 10, gameChar_y - 52, gameChar_x + 8 - 7, gameChar_y - 55);
		line(gameChar_x + 8 - 4 - 6, gameChar_y - 52 - 6, gameChar_x + 8 - 7, gameChar_y - 55);

		//right eye
		line(gameChar_x + 8 + 10 - 6, gameChar_y - 52 - 6, gameChar_x + 8 + 7, gameChar_y - 55);
		line(gameChar_x + 8 + 4, gameChar_y - 52, gameChar_x + 8 + 7, gameChar_y - 55);

		//end character drawing

	}
	else if (isLeft) {
		// add your walking left code

		//begin character drawing

		//body
		stroke(0);
		fill(153, 51, 47);
		triangle(gameChar_x - 13, gameChar_y - 7 - 10, gameChar_x + 13, gameChar_y - 7, gameChar_x, gameChar_y - 64);

		//feet
		fill(71, 43, 12);
		ellipse(gameChar_x - 13, gameChar_y - 7 - 10, 20); //left
		ellipse(gameChar_x + 13, gameChar_y - 7, 20); //right

		//head
		fill(235, 152, 181);
		ellipse(gameChar_x, gameChar_y - 52, 30);

		//mouth
		fill(0);
		ellipse(gameChar_x, gameChar_y - 44, 5 - 2);

		//left eye
		line(gameChar_x - 10 + 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);
		line(gameChar_x - 4, gameChar_y - 52, gameChar_x - 7, gameChar_y - 55);

		//right eye
		line(gameChar_x + 10, gameChar_y - 52, gameChar_x + 7, gameChar_y - 55);
		line(gameChar_x + 4 + 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);

		//end character drawing

	}
	else if (isRight) {
		// add your walking right code

		//begin character drawing

		//body
		stroke(0);
		fill(153, 51, 47);
		triangle(gameChar_x - 13, gameChar_y - 7, gameChar_x + 13, gameChar_y - 7 - 10, gameChar_x, gameChar_y - 64);

		//feet
		fill(71, 43, 12);
		ellipse(gameChar_x - 13, gameChar_y - 7, 20); //left
		ellipse(gameChar_x + 13, gameChar_y - 7 - 10, 20); //right

		//head
		fill(235, 152, 181);
		ellipse(gameChar_x, gameChar_y - 52, 30);

		//mouth
		fill(0);
		ellipse(gameChar_x, gameChar_y - 44, 5 - 2);

		//left eye
		line(gameChar_x - 10, gameChar_y - 52, gameChar_x - 7, gameChar_y - 55);
		line(gameChar_x - 4 - 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);

		//right eye
		line(gameChar_x + 10 - 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);
		line(gameChar_x + 4, gameChar_y - 52, gameChar_x + 7, gameChar_y - 55);

		//end character drawing

	}
	else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code

		//begin character drawing

		//body
		stroke(0);
		fill(153, 51, 47);
		triangle(gameChar_x - 13, gameChar_y - 7 - 5, gameChar_x + 13, gameChar_y - 7, gameChar_x, gameChar_y - 64);

		//feet	
		fill(71, 43, 12);
		ellipse(gameChar_x - 13, gameChar_y - 7 - 5, 20); //left
		ellipse(gameChar_x + 13, gameChar_y - 7, 20); //right

		//head
		fill(235, 152, 181);
		ellipse(gameChar_x, gameChar_y - 52, 30);

		//mouth
		fill(0);
		ellipse(gameChar_x, gameChar_y - 44, 5 - 4);

		//left eye
		line(gameChar_x - 10, gameChar_y - 6 - 52, gameChar_x - 7, gameChar_y - 55);
		line(gameChar_x - 4, gameChar_y - 6 - 52, gameChar_x - 7, gameChar_y - 55);

		//right eye
		line(gameChar_x + 10, gameChar_y - 6 - 52, gameChar_x + 7, gameChar_y - 55);
		line(gameChar_x + 4, gameChar_y - 6 - 52, gameChar_x + 7, gameChar_y - 55);

		//end character drawing

	}
	else {
		// add your standing front facing code

		//begin character drawing

		//body
		stroke(0);
		fill(153, 51, 47);
		triangle(gameChar_x - 13, gameChar_y - 7, gameChar_x + 13, gameChar_y - 7, gameChar_x, gameChar_y - 64);

		//feet
		fill(71, 43, 12);
		ellipse(gameChar_x - 13, gameChar_y - 7, 20); //left
		ellipse(gameChar_x + 13, gameChar_y - 7, 20); //right

		//head
		fill(235, 152, 181);
		ellipse(gameChar_x, gameChar_y - 52, 30);

		//mouth
		fill(0);
		ellipse(gameChar_x, gameChar_y - 44, 5);

		//left eye
		line(gameChar_x - 10, gameChar_y - 52, gameChar_x - 7, gameChar_y - 55);
		line(gameChar_x - 4, gameChar_y - 52, gameChar_x - 7, gameChar_y - 55);

		//right eye
		line(gameChar_x + 10, gameChar_y - 52, gameChar_x + 7, gameChar_y - 55);
		line(gameChar_x + 4, gameChar_y - 52, gameChar_x + 7, gameChar_y - 55);

		//end character drawing

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	//movement
	if (isLeft) {
		gameChar_x -= 1;
	}

	if (isRight) {
		gameChar_x += 1;
	}

	//gravity
	if (gameChar_y < floorPos_y) {
		gameChar_y += 1;
		isFalling = true;
	}
	else {
		isFalling = false;
	}

}


function keyPressed() {
	// if statements to control the animation of the character when
	// keys are pressed.

	if (keyCode == LEFT_ARROW) {
		isLeft = true;
	}

	if (keyCode == RIGHT_ARROW) {
		isRight = true;
	}

	if (keyCode == 32 && gameChar_y == floorPos_y) {
		gameChar_y -= 100;
	}

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	console.log("isLeft: " + isLeft);
	console.log("isRight: " + isRight);
}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.

	if (keyCode == LEFT_ARROW) {
		isLeft = false;
	}

	if (keyCode == RIGHT_ARROW) {
		isRight = false;
	}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	console.log("isLeft: " + isLeft);
	console.log("isRight: " + isRight);
}
