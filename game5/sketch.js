/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
}

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground

	// Draw clouds.

	// Draw mountains.

	// Draw trees.

	// Draw canyons.

	// Draw collectable items.

	// Draw game character.

	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= 5;
		}
		else {
			scrollPos += 5;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += 5;
		}
		else {
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	if (gameChar_y < floorPos_y) {
		gameChar_y += 2;
		isFalling = true;
	}
	else {
		isFalling = false;
	}

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

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


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar() {

	// jumping-left code
	if (isLeft && isFalling) {

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

	// jumping-right code
	else if (isRight && isFalling) {

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

	// walking left code
	else if (isLeft) {

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

	// walking right code
	else if (isRight) {

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

	// jumping facing forwards code
	else if (isFalling || isPlummeting) {

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

	// standing front facing code
	else {

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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

// Function to draw mountains objects.

// Function to draw trees objects.


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {

}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {

}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {

}
