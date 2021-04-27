var canvas;
var music;
var blueS,orangeS,pinkS,greenS;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(620,600);

    //create 4 different surfaces
    blueS= createSprite(40,580,150,30);
    blueS.shapeColor='blue';

    orangeS = createSprite(210,580,150,30)
    orangeS.shapeColor='orange';

    pinkS= createSprite(380,580,150,30)
    pinkS.shapeColor='pink';

    greenS= createSprite(550,580,150,30)
    greenS.shapeColor='green';


    //create box sprite and give velocity
    box = createSprite(random(50,700),100,50,50)
    box.shapeColor='white';
    box.velocityY=4;
    box.velocityX=-2;

}

function draw() {
    background(0);
    //create edgeSprite
    createEdgeSprites();
    //bounceOff
   //  box.bounceOff(edges);
   box.bounceOff(blueS);
   box.bounceOff(pinkS);
   box.bounceOff(greenS);
   box.bounceOff(orangeS);

    //add condition to check if box touching surface and make it box
    if(blueS.isTouching(box) && box.bounceOff(blueS)){
        box.shapeColor='blue';
        music.play();
    }
    if(greenS.isTouching(box) && box.bounceOff(greenS)){
        box.shapeColor='green';
        music.play();
    }
    if(orangeS.isTouching(box) && box.bounceOff(orangeS)){
        box.shapeColor='orange';
        music.play();
    }
    if(pinkS.isTouching(box)){
        box.velocityY=0;
        box.velocityX=0;
        box.shapeColor='pink';
        music.stop();
       
    }
  

    drawSprites();
}
