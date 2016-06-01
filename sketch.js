var letters = [];
// you always need a setup function in p5.js
// this is the initial setup that gets applied
// before you begin drawing
function setup() {
    createCanvas(
        windowWidth,
        windowHeight
    );
    background(0);
}

// you always need a draw function in p5.js
// this is the function that gets called continuously in the background
// you can think of this function as what gets applied in each frame
function draw() {
    //background(0);
    if (random(0,100) < 30) {
        letters.push(new FallingLetters());
    }
    letters.forEach(function(letter, index) {
        if(letter.y > window.innerHeight + 1000) {
            letters.splice(index, 1);
        }
        letter.fall();
        letter.draw();
    });
}

function FallingLetters() {
    this.textSize = 20;
    w = window.innerWidth / this.textSize;
    this.x = random(0, w) * this.textSize;
    this.y = 0
    this.speed = 22;
    this.letters = []
    this.currentLetter = new FallingLetter(this.x, this.y);
    this.fall = function() {
        this.y += this.speed;
        this.letters.push(this.currentLetter);
        this.currentLetter = new FallingLetter(this.x, this.y);
    };
    this.draw = function() {
        textSize(this.textSize);
        textFont("Courier New");
        this.letters.reverse().forEach(function(letter, i) {
            fill(0, 255 - i * 10, 0);
            text(letter.text, letter.x, letter.y);
        });
        fill(255, 255, 255);
        var letter = this.currentLetter;
        text(letter.text, letter.x, letter.y);
    };
}


function FallingLetter(x, y) {
    this.x = x;
    this.y = y;
    this.text = String.fromCharCode(random(30,1279));
}
