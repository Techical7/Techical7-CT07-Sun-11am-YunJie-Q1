let square;

function setup(){
    new Canvas(400, 800);

    world.gravity.y = 10;
    

    square = new Sprite(200, 300, 40, 40);
}

function draw(){
    background("grey");
    if (mouse.presses()){
        square.velocity.y=-5;
    }
}