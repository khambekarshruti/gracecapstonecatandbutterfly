var cat, butterfly, back
var cat_run
var ground
var coin
var obs1, obs2

function preload(){
cat_run=loadAnimation("assets/cat1.png","assets/cat2.png","assets/cat3.png","assets/cat4.png","assets/cat5.png","assets/cat6.png","assets/cat8.png","assets/cat9.png","assets/cat10.png","assets/cat11.png")
back = loadImage("assets/back.gif")
b_fly=loadAnimation("assets/b1.png","assets/b2.png","assets/b3.png","assets/b4.png","assets/b5.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
cat=createSprite(windowWidth-1100, windowHeight-100, 100,100)
cat.addAnimation("run",cat_run)
butterfly=createSprite(windowWidth-400, windowHeight-200,50,50)
butterfly.addAnimation("fly",b_fly)
ground=createSprite(600, 800,windowWidth,10)
}
function draw(){
background(back)
if(keyDown("space") && cat.y>=300){
  cat.velocityY=-10
}
cat.velocityY=cat.velocityY+0.8
cat.collide(ground)

drawSprites()
}