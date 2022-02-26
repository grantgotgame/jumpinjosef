/*

Welcome to Jumpin' Josef!

*/

// declare sounds
var jumpSound;
var collectSound;
var dieSound;
var winSound;
var failSound;

function preload() {
    soundFormats('mp3');

    //load your sounds here
    jumpSound = new Audio('assets/jump3.mp3');
    jumpSound.volume = 0.7;

    collectSound = new Audio('assets/collect2.mp3');
    collectSound.volume = 0.5;

    dieSound = new Audio('assets/die2.mp3');

    winSound = new Audio('assets/win2.mp3');

    failSound = new Audio('assets/fail2.mp3');
}

/*

Game Project 7 - Make it awesome!

*/

var clouds;
var mountains;
var trees_x;
var canyons;
var platforms;
var collectables;
var flagpole;
var flag;

var floorPos_y;
var scrollPos;
var treePos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var overPlatform;
var overPlatformIndex;

var game_score;
var lives;
var gameOver;

var gameChar = {
    x_pos: 0, //positions are set in startGame()
    world_x_pos: 0,
    y_pos: 0,
    fallSpeed: 2
};

function setup() {
    // Create environment
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    treePos_y = floorPos_y - 250;

    // Initialize lives
    lives = 3;

    // Start game
    gameOver = false;
    startGame();
}

function draw() {
    background("LightSkyBlue"); // fill the sky blue

    noStroke();
    fill("Green");
    rect(0, floorPos_y, width, height / 4); // draw some green ground

    //begin background scroll
    push();
    translate(scrollPos, 0);

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
    for (i = 0; i < canyons.length; i++) {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]); //check for collisions
    }

    // Draw platforms.
    for (i = 0; i < platforms.length; i++) {
        drawPlatforms();
    }
    //check for collisions
    checkPlatforms();

    // Draw collectable items.
    for (i = 0; i < collectables.length; i++) {
        if (!collectables[i].isFound) {
            drawCollectable(collectables[i]);
            checkCollectable(collectables[i]); //check for collisions
        }
    }

    // Draw flagpole.
    renderFlagpole();

    pop(); //end background scroll

    // Logic to end the game when lives are exhausted
    if (lives < 1) {
        noLives();
        return (0);
    }

    // Logic to end the game when the flagpole is reached
    if (flagpole.isReached) {
        flagpoleReached();
        return (1);
    }

    // Draw game character.
    drawGameChar();

    // Logic to make the game character move or the background scroll.
    if (isLeft) {
        if (gameChar.x_pos > width * 0.2) {
            gameChar.x_pos -= 5;
        }
        else {
            scrollPos += 5;
        }
    }

    if (isRight) {
        if (gameChar.x_pos < width * 0.8) {
            gameChar.x_pos += 5;
        }
        else {
            scrollPos -= 5; // negative for moving against the background
        }
    }

    // Logic to make the game character fall.
    if (gameChar.y_pos < floorPos_y) {
        if (overPlatform) {
            isFalling = false;
        }
        else {
            isFalling = true;
            gameChar.y_pos += gameChar.fallSpeed;
        }
    }
    else {
        isFalling = false;
    }

    // Logic to make the game character plummet.
    if (isPlummeting) {
        gameChar.y_pos += 5;
        isLeft = false;
        isRight = false;
        checkPlayerDie();
    }

    // Logic to prevent character from going below ground.
    if (!isPlummeting && gameChar.y_pos > floorPos_y) {
        gameChar.y_pos = floorPos_y;
    }

    // Update real position of gameChar for collision detection.
    gameChar.world_x_pos = gameChar.x_pos - scrollPos;

    // Check if flagpole has been reached.
    if (!flagpole.isReached) {
        checkFlagpole();
    }

    // Display score at top left of screen
    displayScore();

    // Display lives at top right of screen
    displayLives();
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {

    // if statements to control the animation of the character when
    // keys are pressed.
    if (!gameOver && !isPlummeting) {
        //move left
        if (keyCode == LEFT_ARROW || key == "a") {
            isLeft = true;
        }

        //move right
        if (keyCode == RIGHT_ARROW || key == "d") {
            isRight = true;
        }

        //jump
        if ((keyCode == UP_ARROW || keyCode == 32 || key == "w") && !isFalling) {
            gameChar.y_pos -= 100;
            jumpSound.play();
        }

        //drop through platforms
        if ((keyCode == DOWN_ARROW || key == 's') && overPlatform) {
            gameChar.y_pos = platforms[overPlatformIndex].y_pos + platforms[overPlatformIndex].y_size + 1;
        }
    }

    // if statement to restart the game after a game over when
    // spacebar is pressed
    if (gameOver && keyCode == 32) {
        setup();
    }
}

function keyReleased() {

    // if statements to control the animation of the character when
    // keys are released.

    if (keyCode == LEFT_ARROW || key == "a") {
        isLeft = false;
    }

    if (keyCode == RIGHT_ARROW || key == "d") {
        isRight = false;
    }
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
        triangle(gameChar.x_pos - 13, gameChar.y_pos - 7 - 10,
            gameChar.x_pos + 13, gameChar.y_pos - 7,
            gameChar.x_pos - 8, gameChar.y_pos - 64);

        //feet
        fill(71, 43, 12);
        ellipse(gameChar.x_pos - 13, gameChar.y_pos - 7 - 10, 20); //left
        ellipse(gameChar.x_pos + 13, gameChar.y_pos - 7, 20); //right

        //head
        fill(235, 152, 181);
        ellipse(gameChar.x_pos - 8, gameChar.y_pos - 52, 30);

        //mouth
        fill(0);
        ellipse(gameChar.x_pos - 8, gameChar.y_pos - 44, 5 - 4);

        //left eye
        line(gameChar.x_pos - 8 - 10 + 6, gameChar.y_pos - 52 - 6, gameChar.x_pos - 8 - 7, gameChar.y_pos - 55);
        line(gameChar.x_pos - 8 - 4, gameChar.y_pos - 52, gameChar.x_pos - 8 - 7, gameChar.y_pos - 55);

        //right eye
        line(gameChar.x_pos - 8 + 10, gameChar.y_pos - 52, gameChar.x_pos - 8 + 7, gameChar.y_pos - 55);
        line(gameChar.x_pos - 8 + 4 + 6, gameChar.y_pos - 52 - 6, gameChar.x_pos - 8 + 7, gameChar.y_pos - 55);

        //end character drawing

    }

    // jumping-right code
    else if (isRight && isFalling) {

        //begin character drawing

        //body
        stroke(0);
        fill(153, 51, 47);
        triangle(gameChar.x_pos - 13, gameChar.y_pos - 7,
            gameChar.x_pos + 13, gameChar.y_pos - 7 - 10,
            gameChar.x_pos + 8, gameChar.y_pos - 64);

        //feet
        fill(71, 43, 12);
        ellipse(gameChar.x_pos - 13, gameChar.y_pos - 7, 20); //left
        ellipse(gameChar.x_pos + 13, gameChar.y_pos - 7 - 10, 20); //right

        //head
        fill(235, 152, 181);
        ellipse(gameChar.x_pos + 8, gameChar.y_pos - 52, 30);

        //mouth
        fill(0);
        ellipse(gameChar.x_pos + 8, gameChar.y_pos - 44, 5 - 4);

        //left eye
        line(gameChar.x_pos + 8 - 10, gameChar.y_pos - 52, gameChar.x_pos + 8 - 7, gameChar.y_pos - 55);
        line(gameChar.x_pos + 8 - 4 - 6, gameChar.y_pos - 52 - 6, gameChar.x_pos + 8 - 7, gameChar.y_pos - 55);

        //right eye
        line(gameChar.x_pos + 8 + 10 - 6, gameChar.y_pos - 52 - 6, gameChar.x_pos + 8 + 7, gameChar.y_pos - 55);
        line(gameChar.x_pos + 8 + 4, gameChar.y_pos - 52, gameChar.x_pos + 8 + 7, gameChar.y_pos - 55);

        //end character drawing

    }

    // walking left code
    else if (isLeft) {

        //begin character drawing

        //body
        stroke(0);
        fill(153, 51, 47);
        triangle(gameChar.x_pos - 13, gameChar.y_pos - 7 - 10,
            gameChar.x_pos + 13, gameChar.y_pos - 7,
            gameChar.x_pos, gameChar.y_pos - 64);

        //feet
        fill(71, 43, 12);
        ellipse(gameChar.x_pos - 13, gameChar.y_pos - 7 - 10, 20); //left
        ellipse(gameChar.x_pos + 13, gameChar.y_pos - 7, 20); //right

        //head
        fill(235, 152, 181);
        ellipse(gameChar.x_pos, gameChar.y_pos - 52, 30);

        //mouth
        fill(0);
        ellipse(gameChar.x_pos, gameChar.y_pos - 44, 5 - 2);

        //left eye
        line(gameChar.x_pos - 10 + 6, gameChar.y_pos - 52 - 6, gameChar.x_pos - 7, gameChar.y_pos - 55);
        line(gameChar.x_pos - 4, gameChar.y_pos - 52, gameChar.x_pos - 7, gameChar.y_pos - 55);

        //right eye
        line(gameChar.x_pos + 10, gameChar.y_pos - 52, gameChar.x_pos + 7, gameChar.y_pos - 55);
        line(gameChar.x_pos + 4 + 6, gameChar.y_pos - 52 - 6, gameChar.x_pos + 7, gameChar.y_pos - 55);

        //end character drawing

    }

    // walking right code
    else if (isRight) {

        //begin character drawing

        //body
        stroke(0);
        fill(153, 51, 47);
        triangle(gameChar.x_pos - 13, gameChar.y_pos - 7,
            gameChar.x_pos + 13, gameChar.y_pos - 7 - 10,
            gameChar.x_pos, gameChar.y_pos - 64);

        //feet
        fill(71, 43, 12);
        ellipse(gameChar.x_pos - 13, gameChar.y_pos - 7, 20); //left
        ellipse(gameChar.x_pos + 13, gameChar.y_pos - 7 - 10, 20); //right

        //head
        fill(235, 152, 181);
        ellipse(gameChar.x_pos, gameChar.y_pos - 52, 30);

        //mouth
        fill(0);
        ellipse(gameChar.x_pos, gameChar.y_pos - 44, 5 - 2);

        //left eye
        line(gameChar.x_pos - 10, gameChar.y_pos - 52, gameChar.x_pos - 7, gameChar.y_pos - 55);
        line(gameChar.x_pos - 4 - 6, gameChar.y_pos - 52 - 6, gameChar.x_pos - 7, gameChar.y_pos - 55);

        //right eye
        line(gameChar.x_pos + 10 - 6, gameChar.y_pos - 52 - 6, gameChar.x_pos + 7, gameChar.y_pos - 55);
        line(gameChar.x_pos + 4, gameChar.y_pos - 52, gameChar.x_pos + 7, gameChar.y_pos - 55);

        //end character drawing

    }

    // jumping facing forwards code
    else if (isFalling || isPlummeting) {

        //begin character drawing

        //body
        stroke(0);
        fill(153, 51, 47);
        triangle(gameChar.x_pos - 13, gameChar.y_pos - 7 - 5,
            gameChar.x_pos + 13, gameChar.y_pos - 7,
            gameChar.x_pos, gameChar.y_pos - 64);

        //feet	
        fill(71, 43, 12);
        ellipse(gameChar.x_pos - 13, gameChar.y_pos - 7 - 5, 20); //left
        ellipse(gameChar.x_pos + 13, gameChar.y_pos - 7, 20); //right

        //head
        fill(235, 152, 181);
        ellipse(gameChar.x_pos, gameChar.y_pos - 52, 30);

        //mouth
        fill(0);
        ellipse(gameChar.x_pos, gameChar.y_pos - 44, 5 - 4);

        //left eye
        line(gameChar.x_pos - 10, gameChar.y_pos - 6 - 52, gameChar.x_pos - 7, gameChar.y_pos - 55);
        line(gameChar.x_pos - 4, gameChar.y_pos - 6 - 52, gameChar.x_pos - 7, gameChar.y_pos - 55);

        //right eye
        line(gameChar.x_pos + 10, gameChar.y_pos - 6 - 52, gameChar.x_pos + 7, gameChar.y_pos - 55);
        line(gameChar.x_pos + 4, gameChar.y_pos - 6 - 52, gameChar.x_pos + 7, gameChar.y_pos - 55);

        //end character drawing

    }

    // standing front facing code
    else {

        //begin character drawing

        //body
        stroke(0);
        fill(153, 51, 47);
        triangle(gameChar.x_pos - 13, gameChar.y_pos - 7,
            gameChar.x_pos + 13, gameChar.y_pos - 7,
            gameChar.x_pos, gameChar.y_pos - 64);

        //feet
        fill(71, 43, 12);
        ellipse(gameChar.x_pos - 13, gameChar.y_pos - 7, 20); //left
        ellipse(gameChar.x_pos + 13, gameChar.y_pos - 7, 20); //right

        //head
        fill(235, 152, 181);
        ellipse(gameChar.x_pos, gameChar.y_pos - 52, 30);

        //mouth
        fill(0);
        ellipse(gameChar.x_pos, gameChar.y_pos - 44, 5);

        //left eye
        line(gameChar.x_pos - 10, gameChar.y_pos - 52, gameChar.x_pos - 7, gameChar.y_pos - 55);
        line(gameChar.x_pos - 4, gameChar.y_pos - 52, gameChar.x_pos - 7, gameChar.y_pos - 55);

        //right eye
        line(gameChar.x_pos + 10, gameChar.y_pos - 52, gameChar.x_pos + 7, gameChar.y_pos - 55);
        line(gameChar.x_pos + 4, gameChar.y_pos - 52, gameChar.x_pos + 7, gameChar.y_pos - 55);

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

    //bases of mountains
    fill(205, 186, 217);
    //left mountain
    triangle(mountains[i].x_pos + mountains[i].size, floorPos_y - mountains[i].size * 1.76, //top
        mountains[i].x_pos + mountains[i].size * 2, floorPos_y, //right
        mountains[i].x_pos, floorPos_y); //left
    //right mountain
    triangle(mountains[i].x_pos + mountains[i].size * 1.76, floorPos_y - mountains[i].size * 1.32, //top
        mountains[i].x_pos + mountains[i].size * 3, floorPos_y, //right
        mountains[i].x_pos + mountains[i].size * 0.75, floorPos_y); //left

    //peaks of mountains
    fill(255);
    //left mountain
    triangle(mountains[i].x_pos + mountains[i].size, floorPos_y - mountains[i].size * 1.76, //top
        mountains[i].x_pos + mountains[i].size * 1.5, floorPos_y - mountains[i].size * 0.88, //right
        mountains[i].x_pos + mountains[i].size * 0.5, floorPos_y - mountains[i].size * 0.88); //left
    //right mountain
    triangle(mountains[i].x_pos + mountains[i].size * 1.76, floorPos_y - mountains[i].size * 1.32, //top
        mountains[i].x_pos + mountains[i].size * 2.17, floorPos_y - mountains[i].size * 0.88, //right
        mountains[i].x_pos + mountains[i].size * 1.4, floorPos_y - mountains[i].size * 0.88); //left

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
// Platform render and check functions
// ---------------------------------

// Function to draw platform objects.

function drawPlatforms() {
    //begin platform drawing

    fill(255, 0, 255, 128);
    stroke("purple");
    strokeWeight(1);
    rect(platforms[i].x_pos, platforms[i].y_pos, platforms[i].x_size, platforms[i].y_size);

    //end platform drawing
}

// Function to check if character is over a platform.
function checkPlatforms() {
    //detect collision if character would fall through top of platform
    for (i = 0; i < platforms.length; i++) {
        if (gameChar.world_x_pos >= platforms[i].x_pos &&
            gameChar.world_x_pos <= platforms[i].x_pos + platforms[i].x_size &&
            gameChar.y_pos <= platforms[i].y_pos &&
            gameChar.y_pos + gameChar.fallSpeed >= platforms[i].y_pos) {
            overPlatform = true;
            overPlatformIndex = i;
            gameChar.y_pos = platforms[i].y_pos;
            return true;
        }
    }
    //set overPlatform to false if no collisions are detected
    overPlatform = false;
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {
    //begin canyon drawing

    fill(33, 10, 6);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.size, height);
    fill(240, 36, 0);
    triangle(t_canyon.x_pos, floorPos_y,
        t_canyon.x_pos + t_canyon.size, floorPos_y,
        t_canyon.x_pos + t_canyon.size / 2, height);

    //end canyon drawing
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {
    //character plummets if canyon is touched
    if (gameChar.world_x_pos > t_canyon.x_pos &&
        gameChar.world_x_pos < t_canyon.x_pos + t_canyon.size &&
        gameChar.y_pos >= floorPos_y &&
        !isPlummeting) {
        isPlummeting = true;
        dieSound.play();
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {
    //begin collectable drawing

    stroke("indigo");
    strokeWeight(1);
    fill(255, 247, 0);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 0.5);
    stroke(100);
    fill(217, 166, 28);
    rect(t_collectable.x_pos - t_collectable.size * 0.05, t_collectable.y_pos - t_collectable.size * 0.15,
        t_collectable.size * 0.1, t_collectable.size * 0.3);

    //end collectable drawing
}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {
    //gather collectable when touched
    if (dist(gameChar.world_x_pos, gameChar.y_pos - 35, t_collectable.x_pos, t_collectable.y_pos) < 55) {
        t_collectable.isFound = true;
        game_score += ceil(t_collectable.size / 50);
        collectSound.play();
    }
}

// ----------------------------------
// Flagpole render and check functions
// ----------------------------------

// Function to draw the flag pole.

function renderFlagpole() {
    //draw the pole
    fill(100);
    noStroke();
    rect(flagpole.x_pos, floorPos_y, flagpole.x_size, -flagpole.y_size);
    //draw the flag in up position when it's reached
    if (flagpole.isReached) {
        fill(0);
        rect(flagpole.x_pos + flagpole.x_size, floorPos_y - flagpole.y_size, flag.x_size, flag.y_size);
        fill("brown");
        ellipse(flagpole.x_pos + flagpole.x_size + flag.x_size / 2,
            floorPos_y - flagpole.y_size + flag.y_size / 2, 40, 40);
    }
    //draw the flag in down position before it's reached
    else {
        fill(0);
        rect(flagpole.x_pos + flagpole.x_size, floorPos_y - flag.y_size, flag.x_size, flag.y_size);
        fill("brown");
        ellipse(flagpole.x_pos + flagpole.x_size + flag.x_size / 2, floorPos_y - flag.y_size / 2, 20, 20);
    }
}

// Function to check whether the flag pole has been reached.

function checkFlagpole() {
    if (abs(gameChar.world_x_pos - flagpole.x_pos) < 20) {
        flagpole.isReached = true;
    }
}

// ----------------------------------
// Score and lives display functions
// ----------------------------------

// Function to display score in top left corner of screen.

function displayScore() {
    fill(255);
    textSize(width / 50);
    textAlign(LEFT);
    text("SCORE: " + game_score, 20, 25);
}

// Function to display lives in top right corner of screen.

function displayLives() {
    for (i = 0; i < lives; i++) {
        // Initialize variables for positioning lives
        var lives_x_pos = 20;
        var lives_y_pos = 75;
        var lives_x_dist = 35;

        //draw head
        fill(235, 152, 181);
        ellipse(width - lives_x_pos - lives_x_dist * i, lives_y_pos - 52, 30);

        //draw mouth
        fill(0);
        ellipse(width - lives_x_pos - lives_x_dist * i, lives_y_pos - 44, 5);

        //draw left eye
        line(width - lives_x_pos - lives_x_dist * i - 10, lives_y_pos - 52,
            width - lives_x_pos - lives_x_dist * i - 7, lives_y_pos - 55
        );
        line(width - lives_x_pos - lives_x_dist * i - 4, lives_y_pos - 52,
            width - lives_x_pos - lives_x_dist * i - 7, lives_y_pos - 55
        );

        //draw right eye
        line(width - lives_x_pos - lives_x_dist * i + 10, lives_y_pos - 52,
            width - lives_x_pos - lives_x_dist * i + 7, lives_y_pos - 55
        );
        line(width - lives_x_pos - lives_x_dist * i + 4, lives_y_pos - 52,
            width - lives_x_pos - lives_x_dist * i + 7, lives_y_pos - 55
        );
    }
}

// ----------------------------------
// Game start and restart function
// ----------------------------------

// Function to start or restart the game.

function startGame() {
    // Reset score
    game_score = lives * 10;

    // Set character position
    gameChar.x_pos = width / 2;
    gameChar.y_pos = floorPos_y;

    // Variable to control the background scrolling.
    scrollPos = 0;

    // Variable to store the real position of the gameChar in the game
    // world. Needed for collision detection.
    gameChar.world_x_pos = gameChar.x_pos - scrollPos;

    // Boolean variables to control the movement of the game character.
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;

    // Initialise arrays of scenery objects.

    //initialize trees
    trees_x = [200, 350, 700, 850, 1000, 1150, -150, -300,
        1300, 1450, 1600, 1750, 2500, 2650, 3000, 3150];

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
        size: 100
    }, {
        x_pos: 250,
        size: 75
    }, {
        x_pos: 750,
        size: 50
    }, {
        x_pos: -850,
        size: 500
    }, {
        x_pos: 1670,
        size: 80
    }, {
        x_pos: 7050,
        size: 5000
    }];

    //initialize platforms
    platforms = [{
        x_pos: 375,
        y_pos: 350,
        x_size: 100,
        y_size: 5
    },
    {
        x_pos: 375,
        y_pos: 275,
        x_size: 75,
        y_size: 10
    }
    ];

    //initialize collectables (set size to 50 or 100 for best results)
    collectables = [{
        x_pos: 200,
        y_pos: 400,
        size: 50
    }, {
        x_pos: 400,
        y_pos: 300,
        size: 100
    }, {
        x_pos: 800,
        y_pos: 350,
        size: 50
    }, {
        x_pos: 1800,
        y_pos: 340,
        size: 50
    }, {
        x_pos: 900,
        y_pos: 375,
        size: 100
    }, {
        x_pos: -500,
        y_pos: 330,
        size: 100
    }, {
        x_pos: 1200,
        y_pos: 350,
        size: 50
    }, {
        x_pos: 1300,
        y_pos: 300,
        size: 50
    }, {
        x_pos: 1600,
        y_pos: 300,
        size: 50
    }];

    //initialize flagpole
    flagpole = {
        x_pos: 2000,
        x_size: 10,
        y_size: 250,
        isReached: false
    };

    //initialize flag
    flag = {
        x_size: 80,
        y_size: 60
    };
}

// ----------------------------------
// Game end functions
// ----------------------------------

// Function to check whether the player has died.

function checkPlayerDie() {
    if (gameChar.y_pos > height) {
        lives -= 1;
        if (lives > 0) {
            startGame();
        }
    }
}

// Function to end the game when the player runs out of lives.

function noLives() {
    fill(255);
    stroke(0);
    strokeWeight(5);
    textSize(width / 25);
    textAlign(CENTER);
    text("Game over! Press SPACE to continue.", width / 2, height / 2);
    if (!gameOver) {
        failSound.play();
        gameOver = true;
    }
}

// Function to end the game when the flagpole is reached.

function flagpoleReached() {
    fill(255);
    stroke(0);
    strokeWeight(5);
    textSize(width / 25);
    textAlign(CENTER);
    text("Level complete. Press SPACE to continue.", width / 2, height / 2);
    text("Final score: " + game_score, width / 2, height * 0.6);
    if (!gameOver) {
        winSound.play();
        gameOver = true;
    }
}
