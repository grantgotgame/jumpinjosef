/*

I decided to extend this portion of the game project to add some additional poses.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...

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

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...

	//begin character drawing

	gameChar_y -= 7;

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

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

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

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

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

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

	//begin character drawing

	gameChar_y -= 7;
	//body
	stroke(0);
	fill(153, 51, 47);
	triangle(gameChar_x - 13, gameChar_y - 7, gameChar_x + 13, gameChar_y - 7 - 10, gameChar_x + 8, gameChar_y - 64);

	//feet
	fill(71, 43, 12);
	ellipse(gameChar_x - 13, gameChar_y - 7, 20); //left
	ellipse(gameChar_x + 13, gameChar_y - 7 - 10, 20); //right

	//head
	gameChar_x += 8;
	fill(235, 152, 181);
	ellipse(gameChar_x, gameChar_y - 52, 30);

	//mouth
	fill(0);
	ellipse(gameChar_x, gameChar_y - 44, 5 - 4);

	//left eye
	line(gameChar_x - 10 + 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);
	line(gameChar_x - 4 - 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);

	//right eye
	line(gameChar_x + 10 - 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);
	line(gameChar_x + 4 + 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);

	//end character drawing

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

	//begin character drawing

	//body
	gameChar_y -= 7;
	stroke(0);
	fill(153, 51, 47);
	triangle(gameChar_x - 13, gameChar_y - 7 - 10, gameChar_x + 13, gameChar_y - 7, gameChar_x - 8, gameChar_y - 64);

	//feet
	fill(71, 43, 12);
	ellipse(gameChar_x - 13, gameChar_y - 7 - 10, 20); //left
	ellipse(gameChar_x + 13, gameChar_y - 7, 20); //right

	//head
	gameChar_x -= 8;
	fill(235, 152, 181);
	ellipse(gameChar_x, gameChar_y - 52, 30);

	//mouth
	fill(0);
	ellipse(gameChar_x, gameChar_y - 44, 5 - 4);

	//left eye
	line(gameChar_x - 10 + 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);
	line(gameChar_x - 4 - 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);

	//right eye
	line(gameChar_x + 10 - 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);
	line(gameChar_x + 4 + 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);

	//end character drawing

	//Plummeting

	stroke(100);
	noFill();
	rect(420, 60, 50, 80);
	noStroke();
	fill(0);
	text("7. plummeting", 420, 160);

	gameChar_x = 445;
	gameChar_y = 137;
	//Add your code here ...

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
	line(gameChar_x - 10, gameChar_y - 52, gameChar_x - 4, gameChar_y - 58);
	line(gameChar_x - 4, gameChar_y - 52, gameChar_x - 10, gameChar_y - 58);

	//right eye
	line(gameChar_x + 10, gameChar_y - 52, gameChar_x + 4, gameChar_y - 58);
	line(gameChar_x + 4, gameChar_y - 52, gameChar_x + 10, gameChar_y - 58);

	//end character drawing

}
