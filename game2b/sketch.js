/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	treePos_x = width / 4;
	treePos_y = floorPos_y - 250;

	canyon = {
		x_pos: 50,
		width: 100,
	};

	collectable = {
		x_pos: 200,
		y_pos: 100,
		size: 50,
	};

	mountain = {
		x_pos: 75,
		size: 100,
	};

	cloud = {
		x_pos: 200,
		y_pos: 350,
		size: 50,
	};
}

function draw() {
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//begin canyon drawing

	fill(33, 10, 6);
	rect(canyon.x_pos, floorPos_y, canyon.width, height);
	fill(240, 36, 0);
	triangle(canyon.x_pos, floorPos_y, canyon.x_pos + canyon.width, floorPos_y, canyon.x_pos + canyon.width / 2, height);

	//end canyon drawing

	//begin mountain drawing

	fill(205, 186, 217);
	triangle(mountain.x_pos + mountain.size, floorPos_y - mountain.size * 1.76, mountain.x_pos + mountain.size * 2, floorPos_y, mountain.x_pos, floorPos_y);
	fill(255);
	triangle(mountain.x_pos + mountain.size, floorPos_y - mountain.size * 1.76, mountain.x_pos + mountain.size * 1.5, floorPos_y - mountain.size * 0.87, mountain.x_pos + mountain.size * 0.5, floorPos_y - mountain.size * 0.87);

	fill(205, 186, 217);
	triangle(mountain.x_pos + mountain.size * 1.75, floorPos_y - mountain.size * 1.32, mountain.x_pos + mountain.size * 3, floorPos_y, mountain.x_pos + mountain.size * 0.75, floorPos_y);
	fill(255);
	triangle(mountain.x_pos + mountain.size * 1.75, floorPos_y - mountain.size * 1.32, mountain.x_pos + mountain.size * 2.17, floorPos_y - mountain.size * 0.87, mountain.x_pos + mountain.size * 1.4, floorPos_y - mountain.size * 0.87);

	//end mountain drawing

	//begin cloud drawing

	fill(255);
	ellipse(cloud.x_pos + cloud.size * 0.5, cloud.y_pos, cloud.size * 1.2);
	ellipse(cloud.x_pos + cloud.size, cloud.y_pos, cloud.size);
	ellipse(cloud.x_pos, cloud.y_pos, cloud.size);

	//end cloud drawing

	//begin tree drawing

	//trunk
	fill(43, 23, 15);
	rect(treePos_x, treePos_y, 50, 250);

	//head
	fill(10, 43, 19);
	ellipse(treePos_x + 25, treePos_y, 200);

	//fruit
	fill(186, 17, 11);
	ellipse(treePos_x, treePos_y, 20);
	ellipse(treePos_x + 60, treePos_y + 50, 20);

	//end tree drawing

	//begin collectable drawing

	fill(255, 247, 0);
	ellipse(collectable.x_pos, floorPos_y - collectable.y_pos, collectable.size * 0.5);
	fill(217, 166, 28);
	rect(collectable.x_pos - collectable.size * 0.05, floorPos_y - collectable.y_pos - collectable.size * 0.15, collectable.size * 0.1, collectable.size * 0.3);

	//end collectable drawing

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

function mousePressed() {
	//move character when mouse is pressed
	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
