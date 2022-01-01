var comet
var rocket
var star

function preload(){
backgroundImage=loadImage("space.jpg");
cometImage=loadImage("comet1.png");
rocketImage=loadImage("rocket.jpg");
starImage=loadImage("star.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rocket=createSprite(200,200,50,50)
 star=createSprite()
 comet=createSprite()
}

function draw() {
 background(backgroundImage)
}