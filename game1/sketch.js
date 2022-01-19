/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

var groundHeight = 432;

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, groundHeight, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
  
  fill(255);
  ellipse(200, 200, 120);
  ellipse(250, 200, 100);
  ellipse(150, 200, 100);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
  
  fill(205, 186, 217);
  triangle(600, 256, 700, groundHeight, 500, groundHeight);
  fill(255);
  triangle(600, 256, 650, 345, 550, 345);
  
  fill(205, 186, 217);
  triangle(675, 300, 800, groundHeight, 575, groundHeight);
  fill(255);
  triangle(675, 300, 717, 345, 640, 345);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
  
  var treeHeight = 250;
  
  //trunk
  fill(43, 23, 15);
  rect(890, groundHeight - treeHeight, 50, treeHeight);
  
  //head
  fill(10, 43, 19);
  ellipse(915, groundHeight - treeHeight, 200);
  
  //fruit
  fill(186, 17, 11);
  ellipse(890, groundHeight - treeHeight, 20);
  ellipse(950, groundHeight - treeHeight + 50, 20);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
  
  fill(161, 98, 43);
  rect(150, groundHeight, 50, 144);
  
  fill(18, 24, 89);  
  rect(200, groundHeight, 25, 144);
  
  fill(161, 98, 43);
  rect(225, groundHeight, 50, 144);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
  
  fill(255, 247, 0);
  ellipse(450, groundHeight - 100, 50);
  fill(217, 166, 28);
  rect(445, groundHeight - 115, 10, 30);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
