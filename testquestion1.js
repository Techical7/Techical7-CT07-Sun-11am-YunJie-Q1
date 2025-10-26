let bird
let background, birdImg;
let assets;

function preload(){
    birdImg = loadImage("assets/bird.png");
    background = loadImage("assets/background.png");
}

function setup(){
    new Canvas(400, 600);
    bird = new Sprite(200, 300, 20, 20);
    bird.img =birdImg;
}

function draw(){
    image(background, 0, 0, width, height);
}