var player,player_running;
var chão,chãoImage;
var paredeInvisivel;

function preload(){
  //imagens pré-carregadas
player_running = loadAnimation("Runner-1.png","Runner-2.png");
chãoImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  
   chão = createSprite(200,200,90,90);
chão.addAnimation("path", chãoImage);


  
  player = createSprite(200,320,10,10);
  player.addAnimation("running", player_running);

  player.scale = 0.05;



}

function draw() {
  background(200,200);

if(chão.y > 400){
chão.y = height/2;

}
 chão.velocityY = 2;
if(keyDown("left")){
player.velocityX = -2;

}
if(keyDown("right")){
  player.velocityX = 2;
  
  }






  drawSprites();
}

