var player, player_running, edges;
var pathImage;
var path;
var invisibleGround, invisiblePath;



function preload(){
  player_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

  

  path = createSprite(190,300,10,400)
  path.addImage(pathImage)
  path.velocityY = 5

  path.y = path.height/2

  invisibleGround = createSprite(384,325,20,400)
  invisibleGround.visible = false

  invisiblePath= createSprite(16,325,20,400)
  invisiblePath.visible = false

  player = createSprite(200,400,20,50);
  player.addAnimation("running",player_running);
  edges = createEdgeSprites();
  

  player.scale = 0.07;
  player.y = 320


  
}


function draw(){
  
  background("black");
  

  console.log(player.x)
  
  player.x = World.mouseX;
  
  if (path.y>400){
      path.y = height/2
  }

  player.collide(invisibleGround);
  player.collide(invisiblePath);
  drawSprites();
}
