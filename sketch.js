var canvas,bg;
var together;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3, jerryImg4;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3=loadAnimation("images/tomFour.png");
    jerryImg1= loadAnimation("images/jerryOne.png");
    //jerryImg3 is no longer in use
    jerryImg2= loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    jerryImg3= loadAnimation("images/jerryFour.png");
    jerryImg4= loadAnimation("images/jerryFive.png");

    
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.addAnimation("tomwalking", tomImg2);
    tom.addAnimation("tom4", tomImg3);
    tom.scale = 0.2;
    

    jerry = createSprite(230, 600);
    jerry.addAnimation("Jerrystill", jerryImg1);
    jerry.addAnimation("raton burlon", jerryImg2);
    jerry.addAnimation("jerry4", jerryImg3);
    jerry.addAnimation("jerry5final", jerryImg4);
    jerry.scale= 0.2;
    
}

function draw() {

    background(bg);

    keyPressed();

    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.velocityX= 0;
        tom.x= jerry.x-120;
        tom.changeAnimation("tom4");

        jerry.changeAnimation("jerry5final");
     
     }

    drawSprites();
}


function keyPressed(){
    if(keyCode== LEFT_ARROW){
        tom.changeAnimation("tomwalking");
        tom.velocityX= -5;
        jerry.changeAnimation("raton burlon");
        jerry.frameDelay= 25;
    }
}