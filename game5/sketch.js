/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;
var treePos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;
	treePos_y = floorPos_y - 250;

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

	//initialize trees
	trees_x = [200, 350, 700, 850, 1000, 1150, -150, -300, 1300, 1450, 1600, 1750, 2500, 2650, 3000, 3150];

	//initialize clouds
	clouds = [{
		x_pos: 200,
		y_pos: 50,
		size: 50
	}, {
		x_pos: 500,
		y_pos: 150,
		size: 100
	}, {
		x_pos: 700,
		y_pos: 50,
		size: 75
	}, {
		x_pos: 900,
		y_pos: 200,
		size: 25
	}, {
		x_pos: -500,
		y_pos: 175,
		size: 120
	}, {
		x_pos: 1200,
		y_pos: 80,
		size: 90
	}, {
		x_pos: 1500,
		y_pos: 120,
		size: 134
	}, {
		x_pos: 1900,
		y_pos: 250,
		size: 40
	}];

	//initialize mountains
	mountains = [{
		x_pos: 75,
		size: 100
	}, {
		x_pos: 150,
		size: 200
	}, {
		x_pos: 750,
		size: 50
	}, {
		x_pos: 1900,
		size: 900
	}, {
		x_pos: -750,
		size: 250
	}, {
		x_pos: 7520,
		size: 5000
	}];
}

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground

	// Draw clouds.
	for (i = 0; i < clouds.length; i++) {
		drawClouds();
	}

	// Draw mountains.
	for (i = 0; i < mountains.length; i++) {
		drawMountains();
	}

	// Draw trees.
	for (i = 0; i < trees_x.length; i++) {
		drawTrees();
	}

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

function drawClouds() {
	//begin cloud drawing

	fill(255);
	ellipse(clouds[i].x_pos + clouds[i].size * 0.5, clouds[i].y_pos, clouds[i].size * 1.2);
	ellipse(clouds[i].x_pos + clouds[i].size, clouds[i].y_pos, clouds[i].size);
	ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size);

	//end cloud drawing
}

// Function to draw mountains objects.

function drawMountains() {
	//begin mountain drawing

	fill(205, 186, 217);
	triangle(mountains[i].x_pos + mountains[i].size, floorPos_y - mountains[i].size * 1.76, mountains[i].x_pos + mountains[i].size * 2, floorPos_y, mountains[i].x_pos, floorPos_y);
	fill(255);
	triangle(mountains[i].x_pos + mountains[i].size, floorPos_y - mountains[i].size * 1.76, mountains[i].x_pos + mountains[i].size * 1.5, floorPos_y - mountains[i].size * 0.87, mountains[i].x_pos + mountains[i].size * 0.5, floorPos_y - mountains[i].size * 0.87);

	fill(205, 186, 217);
	triangle(mountains[i].x_pos + mountains[i].size * 1.75, floorPos_y - mountains[i].size * 1.32, mountains[i].x_pos + mountains[i].size * 3, floorPos_y, mountains[i].x_pos + mountains[i].size * 0.75, floorPos_y);
	fill(255);
	triangle(mountains[i].x_pos + mountains[i].size * 1.75, floorPos_y - mountains[i].size * 1.32, mountains[i].x_pos + mountains[i].size * 2.17, floorPos_y - mountains[i].size * 0.87, mountains[i].x_pos + mountains[i].size * 1.4, floorPos_y - mountains[i].size * 0.87);

	//end mountain drawing
}

// Function to draw trees objects.

function drawTrees() {
	//begin tree drawing

	//trunk
	fill(43, 23, 15);
	rect(trees_x[i], treePos_y, 50, 250);

	//head
	fill(10, 43, 19);
	ellipse(trees_x[i] + 25, treePos_y, 200);

	//fruit
	fill(186, 17, 11);
	ellipse(trees_x[i], treePos_y, 20);
	ellipse(trees_x[i] + 60, treePos_y + 50, 20);

	//end tree drawing
}

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
