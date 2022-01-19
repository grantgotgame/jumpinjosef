/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var canyons;
var collectables;

var trees_x;
var treePos_y;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;
	treePos_y = floorPos_y - 250;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

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

	//initialize canyons
	canyons = [{
		x_pos: 50,
		width: 100
	}, {
		x_pos: 250,
		width: 75
	}, {
		x_pos: 750,
		width: 50
	}, {
		x_pos: -850,
		width: 500
	}, {
		x_pos: 1750,
		width: 80
	}, {
		x_pos: 7050,
		width: 5000
	}];

	//initialize collectables
	collectables = [{
		x_pos: 200,
		y_pos: 100,
		size: 50
	}, {
		x_pos: 400,
		y_pos: 200,
		size: 100
	}, {
		x_pos: 800,
		y_pos: 150,
		size: 75
	}, {
		x_pos: 1800,
		y_pos: 40,
		size: 75
	}, {
		x_pos: -800,
		y_pos: 50,
		size: 30
	}, {
		x_pos: 900,
		y_pos: 75,
		size: 70
	}, {
		x_pos: 1000,
		y_pos: 130,
		size: 90
	}, {
		x_pos: 1200,
		y_pos: 150,
		size: 75
	}, {
		x_pos: 1300,
		y_pos: 200,
		size: 10
	}, {
		x_pos: 1600,
		y_pos: 300,
		size: 20
	}];
}

function draw() {
	var i;

	background(100, 155, 255); // fill the sky blue
	noStroke();

	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground

	//scroll background when character reaches edge of screen
	push();
	translate(scrollPos, 0);

	// Draw mountains.
	for (i = 0; i < mountains.length; i++) {
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

	// Draw clouds.
	for (i = 0; i < clouds.length; i++) {
		//begin cloud drawing

		fill(255);
		ellipse(clouds[i].x_pos + clouds[i].size * 0.5, clouds[i].y_pos, clouds[i].size * 1.2);
		ellipse(clouds[i].x_pos + clouds[i].size, clouds[i].y_pos, clouds[i].size);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size);

		//end cloud drawing
	}

	// Draw trees.
	for (i = 0; i < trees_x.length; i++) {
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

	// Draw canyons

	for (i = 0; i < canyons.length; i++) {
		//begin canyon drawing

		fill(33, 10, 6);
		rect(canyons[i].x_pos, floorPos_y, canyons[i].width, height);
		fill(240, 36, 0);
		triangle(canyons[i].x_pos, floorPos_y, canyons[i].x_pos + canyons[i].width, floorPos_y, canyons[i].x_pos + canyons[i].width / 2, height);

		//end canyon drawing
	}

	// Draw collectable items

	for (i = 0; i < collectables.length; i++) {
		//begin collectable drawing

		fill(255, 247, 0);
		ellipse(collectables[i].x_pos, floorPos_y - collectables[i].y_pos, collectables[i].size * 0.5);
		fill(217, 166, 28);
		rect(collectables[i].x_pos - collectables[i].size * 0.05, floorPos_y - collectables[i].y_pos - collectables[i].size * 0.15, collectables[i].size * 0.1, collectables[i].size * 0.3);

		//end collectable drawing
	}

	pop(); //stop scrolling background

	// Draw the game character - this must be last
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

	//////// Game character logic ///////
	// Logic to move

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
}

function keyPressed() {

	if (key == 'A' || keyCode == 37) {
		isLeft = true;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = true;
	}

}

function keyReleased() {
	if (key == 'A' || keyCode == 37) {
		isLeft = false;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = false;
	}
}
