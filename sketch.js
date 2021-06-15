var bgimg, cat, mouse,bg,catImg1,mouseImg1,catMoving,mouseteasing,catresting,mouseresting
function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    catMoving = loadAnimation("images/cat2.png","images/cat3.png")
    mouseteasing = loadAnimation("images/mouse3.png")
    catresting = loadAnimation("images/cat4.png")
    mouseresting = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(600,600);
bg = createSprite(200,200)
bg.addImage(bgimg)
    //create tom and jerry sprites here
    mouse = createSprite(50,500,20,20)
    mouse.addAnimation("mouse",mouseImg1)
    mouse.scale = 0.1
    cat = createSprite(520,500,20,20)
    cat.addAnimation("moving",catImg1)
    cat.scale=0.1


}

function draw() {

    background(255);

      //For moving and changing animation write code here
if(keyDown("left")){
    mouse.addAnimation("mouse1",mouseteasing)
    cat.addAnimation("moving1",catMoving)
    cat.velocityX = -2
}

    //Write condition here to evalute if tom and jerry collide
    if(mouse.collide(cat)){
        mouse.addAnimation("mouse2",mouseresting)
        cat.addAnimation("moving2",catresting)
    }

    drawSprites();
}
