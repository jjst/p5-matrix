var squares = [];
// you always need a setup function in p5.js
// this is the initial setup that gets applied
// before you begin drawing
function setup() {
    createCanvas(
        windowWidth,
        windowHeight
    );
    for(i = 0; i < 50; i++) {
        var square = new FallingSquare();
        squares.push(square);
    }
}

// you always need a draw function in p5.js
// this is the function that gets called continuously in the background
// you can think of this function as what gets applied in each frame
function draw() {
    background(255,255,255);
    squares.forEach(function(s) {
        fill(s.color);
        rect(s.x, s.y, s.width, s.height);
        s.move()
    });
}

function FallingSquare() {
    this.x = random(0, window.innerWidth);
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = color(
        random(0, 255),
        random(0, 255),
        random(0, 255)
    )
    this.speed = random(10, 30);

    this.move = function() {
        this.y += this.speed;
    }
}
