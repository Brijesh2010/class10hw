var sea, seaImg;
var ship, shipimg;
function preload(){

  seaImg = loadImage('sea.png')
  shipImg = loadAnimation('ship-1.png', 'ship-2.png', 'ship-3.png' , 'ship-4.png')
  

}

function setup(){
  createCanvas(1000,600);
  
  sea = createSprite(300,300,200,600);
  sea.addImage(seaImg);

  ship = createSprite(100,400,100,50)
  ship.addAnimation('shipmove', shipImg) 
  ship.scale = 0.2 

}

function draw() {
  background("blue");


  sea.velocityX = - 2


  if (sea.x < 0){
    sea.x = sea.width/2
  }

  
  

  drawSprites();
 
}